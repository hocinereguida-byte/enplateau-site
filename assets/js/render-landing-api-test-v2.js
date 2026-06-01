/*
  Scènes d'Arbitrage — render-landing-api-test-v2.js
  Version : 2026-06-02-api-test-v2-alternatives-hierarchie-v20

  Objectif : tester une landing individuelle alimentée par l'API Worker V10.1
  sans remplacer la landing actuelle.

  Sources dynamiques :
  - /api/landing-data?cast=XXXX
  - Pipedrive via Worker pour principal / personne / organisation / alternatives / pertinence
  - KV éditorial via Worker pour composition[]

  Fichiers volontairement non chargés :
  - editorial-data-industrie-v67.js
  - activation-crm-industrie.js
  - editorial-data-industrie-enrichments.js
  - render-core.js
  - render-landing.js
*/
(function () {
  "use strict";

  const API_BASE = "/api/landing-data";
  const ROOT = document.getElementById("landing-root");
  const CAL_URL = "https://cal.com/scenesdarbitrage/echange-editorial-15-min?user=scenesdarbitrage&overlayCalendar=true";

  function doctrineTool() {
    return window.SDAEditorialDoctrine || null;
  }

  function applyDoctrine(value) {
    const raw = String(value == null ? "" : value);
    const tool = doctrineTool();
    if (tool && typeof tool.applyLexicon === "function") return tool.applyLexicon(raw);
    return raw
      .replace(/croissance sous tension/gi, "croissance industrielle")
      .replace(/adaptation sous contrainte/gi, "adaptation sous conditions")
      .replace(/réinvention sous crise/gi, "reconfiguration industrielle")
      .replace(/reinvention sous crise/gi, "reconfiguration industrielle")
      .replace(/sous tension/gi, "à piloter")
      .replace(/sous contrainte/gi, "sous conditions")
      .replace(/sous crise/gi, "en redéfinition")
      .replace(/fragilité/gi, "point de vigilance")
      .replace(/fragiliser/gi, "rendre plus sensible")
      .replace(/vulnérabilité/gi, "point sensible")
      .replace(/rupture/gi, "changement de nature")
      .replace(/blocage/gi, "limite");
  }

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function safe(value) {
    return esc(applyDoctrine(value));
  }

  function txt() {
    for (const value of arguments) {
      if (value !== undefined && value !== null && String(value).trim() !== "") return String(value).trim();
    }
    return "";
  }

  function normalize(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[’']/g, "'")
      .replace(/[_-]+/g, " ")
      .replace(/\s+/g, " ");
  }

  function personName(data) {
    return txt(data?.person?.nom_complet, data?.person?.name, data?.person_name, "Intervenant pressenti");
  }

  function organisationName(data) {
    return txt(data?.organisation?.nom, data?.organisation?.name, data?.org_name, "Organisation pressentie");
  }

  function readingLabel(value) {
    const raw = txt(value);
    if (!raw) return "Lecture éditoriale";
    const n = normalize(raw);
    if (n.includes("strateg")) return "Lecture stratégique";
    if (n.includes("financ")) return "Lecture financière";
    if (n.includes("operation")) return "Lecture opérationnelle";
    if (n.includes("jurid")) return "Lecture juridique";
    if (n.includes("technolog") || n.includes("system")) return "Lecture technologique / systèmes";
    if (n.includes("territ")) return "Lecture territoriale";
    if (n.includes("rh") || n.includes("compet")) return "Lecture RH / compétences";
    if (n.includes("energie") || n.includes("ressource") || n.includes("decarbon")) return "Lecture énergie / ressources";
    if (n.includes("achat")) return "Lecture achats / opérations";
    return raw.match(/^lecture\s/i) ? raw : `Lecture ${raw.toLowerCase()}`;
  }

  function shortReading(value) {
    return readingLabel(value).replace(/^Lecture\s+/i, "");
  }

  function isCabinet(data) {
    const orgType = normalize(txt(data?.organisation?.type, ""));
    const org = normalize(organisationName(data));
    return orgType.includes("cabinet") || orgType.includes("conseil") || org.includes("consult") || org.includes("advisory") || org.includes("pwc") || org.includes("argon");
  }

  function editorializePertinence(text, data) {
    const raw = applyDoctrine(txt(text));
    if (!raw) return "";
    const name = personName(data);
    const org = organisationName(data);
    const role = txt(data?.person?.poste, data?.person?.title, data?.poste, "");

    let out = raw;
    out = out.replace(/\bVotre position\b/gi, `La position de ${name}`);
    out = out.replace(/\bVotre rôle\b/gi, role ? `Le rôle de ${name} (${role})` : `Le rôle de ${name}`);
    out = out.replace(/\bVotre parcours\b/gi, `Le parcours de ${name}`);
    out = out.replace(/\bVotre expérience\b/gi, `L'expérience de ${name}`);
    out = out.replace(/\bvous semblez\b/gi, `${name} semble`);
    out = out.replace(/\bvous\b/gi, name);

    out = out.replace(/\best pertinent\b/gi, "pourrait être pertinent");
    out = out.replace(/\best pertinente\b/gi, "pourrait être pertinente");
    out = out.replace(/\bpermet d’apporter\b/gi, "pourrait permettre d’apporter");
    out = out.replace(/\bpermet d'apporter\b/gi, "pourrait permettre d’apporter");
    out = out.replace(/\bpermet de\b/gi, "pourrait permettre de");
    out = out.replace(/\bpermet d’\b/gi, "pourrait permettre d’");
    out = out.replace(/\bpeut éclairer\b/gi, "pourrait éclairer");
    out = out.replace(/\bpeut apporter\b/gi, "pourrait apporter");
    out = out.replace(/\bapporte à cette conversation\b/gi, "pourrait apporter à cette conversation");
    if (org) {
      out = out.replace(new RegExp(`${org.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")} apporte`, "gi"), `${org} pourrait apporter`);
    }
    out = out.replace(/\bdonne un cadre\b/gi, "pourrait donner un cadre");
    out = out.replace(/\béclaire\b/gi, "pourrait éclairer");

    return out;
  }

  function splitSentences(text, limit) {
    return txt(text)
      .split(/\n{2,}|(?<=\.)\s+(?=[A-ZÉÈÀÂÎÔÛÇ])/)
      .map(s => s.trim())
      .filter(Boolean)
      .slice(0, limit || 5);
  }

  function renderState(title, body, contact) {
    ROOT.innerHTML = `
      <section class="landing-loading">
        <div class="landing-loading__box">
          <a class="landing-brand landing-brand--loading" href="/" aria-label="Scènes d'Arbitrage — accueil">Scènes d'Arbitrage</a>
          <h1>${safe(title)}</h1>
          <p>${safe(body)}</p>
          ${contact ? `<div class="landing-actions"><a class="landing-btn" href="mailto:contact@scenesdarbitrage.fr">Prendre contact</a></div>` : ""}
        </div>
      </section>`;
  }


  function readingAdjective(value) {
    const s = shortReading(value).toLowerCase();
    if (s.includes("strat")) return "stratégique";
    if (s.includes("financ")) return "financière";
    if (s.includes("opération") || s.includes("operation")) return "opérationnelle";
    if (s.includes("territ")) return "territoriale";
    if (s.includes("techno") || s.includes("système")) return "technologique";
    if (s.includes("jurid")) return "juridique";
    if (s.includes("rh")) return "RH";
    if (s.includes("énergie") || s.includes("ressource")) return "énergie / ressources";
    return s || "éditoriale";
  }

  function heroSubject(angle, conversation) {
    const raw = txt(angle, conversation, "");
    const n = normalize(raw);
    if (n.includes("interdependance")) return "les interdépendances qui structurent les choix industriels";
    if (n.includes("capacite d'avenir") || n.includes("arbitrages economiques")) return "les conditions économiques d’une trajectoire industrielle";
    if (n.includes("territoire") || n.includes("foncier") || n.includes("friche")) return "les conditions territoriales d’une trajectoire industrielle";
    if (n.includes("amelioration continue")) return "le moment où l’amélioration continue ne suffit plus à soutenir une trajectoire industrielle";
    if (n.includes("outil industriel")) return "les conditions d’évolution d’un outil industriel";
    if (n.includes("operation") || n.includes("flux")) return "les arbitrages opérationnels qui rendent une trajectoire pilotable";
    const cleaned = raw
      .replace(/^comment\s+/i, "")
      .replace(/\s*\?\s*$/g, "")
      .trim();
    return cleaned ? cleaned.charAt(0).toLowerCase() + cleaned.slice(1) : "un arbitrage industriel à qualifier";
  }

  function buildHeroReadingLine(readingLabel) {
    const key = normalize(readingLabel);
    if (key.includes("financ")) return "Rendre visibles les conditions économiques d’une trajectoire industrielle tenable.";
    if (key.includes("jurid")) return "Sécuriser les arbitrages avant qu’ils ne deviennent des risques.";
    if (key.includes("operation")) return "Faire reconnaître l’exécution comme lieu réel de transformation.";
    if (key.includes("rh") || key.includes("compet")) return "Éclairer le rôle des compétences, métiers et collectifs dans la transformation.";
    if (key.includes("energie") || key.includes("ressource")) return "Relier continuité industrielle, ressources, énergie et carbone.";
    if (key.includes("territ")) return "Faire reconnaître le territoire comme condition réelle de trajectoire industrielle.";
    if (key.includes("techno") || key.includes("system")) return "Rendre visibles les systèmes et interfaces qui conditionnent la trajectoire.";
    if (key.includes("strateg")) return "Installer une lecture stratégique sur les arbitrages structurants.";
    return "Faire reconnaître une lecture utile, située et préparée.";
  }

  function buildHeroMetricCard(label, title, text, modifier) {
    return `
      <article class="landing-hero-metric ${modifier || ""}">
        <span>${safe(label)}</span>
        <strong>${safe(title)}</strong>
        <em>${safe(text)}</em>
      </article>`;
  }

  function buildHeroPersonCard(name, role, org) {
    return `
      <article class="landing-hero-person-card">
        <span>Intervenant(e) pressenti(e)</span>
        <strong>${safe(name || "Intervenant pressenti")}</strong>
        ${role ? `<em>${safe(role)}</em>` : ""}
        ${org ? `<em>${safe(org)}</em>` : ""}
      </article>`;
  }

  function trustReadingMechanism(readingLabel) {
    const r = normalize(readingLabel);
    if (r.includes("territ")) return "comment les conditions territoriales influencent les trajectoires industrielles.";
    if (r.includes("financ")) return "comment les conditions économiques et financières rendent une transformation industrielle tenable.";
    if (r.includes("jurid")) return "comment les cadres juridiques sécurisent les arbitrages industriels avant qu’ils ne deviennent des risques.";
    if (r.includes("operation")) return "comment le pilotage opérationnel rend une trajectoire industrielle réellement tenable.";
    if (r.includes("rh") || r.includes("compet")) return "comment les compétences, les collectifs et l’organisation du travail conditionnent la transformation industrielle.";
    if (r.includes("energie") || r.includes("ressource")) return "comment les ressources, l’énergie, l’eau, les matières ou le carbone deviennent des conditions de continuité industrielle.";
    if (r.includes("techno") || r.includes("system")) return "comment les systèmes, les données et les interfaces conditionnent la lisibilité et la continuité de la trajectoire.";
    if (r.includes("strateg")) return "comment les arbitrages de gouvernance et de trajectoire changent la nature d’une décision industrielle.";
    return "comment cette lecture permettrait de rendre lisibles des mécanismes industriels sans exposer de situation interne.";
  }

  function trustDetailList(items) {
    return `<ul class="trust-key__deep-list">${items.map(item => `<li>${safe(item)}</li>`).join("")}</ul>`;
  }

  function compositionReadingNames(data) {
    const cards = toArray(data?.composition).slice(0, 4);
    const labels = cards.map(card => cleanReadingTitle(txt(card.title, card.type_lecture, card.type_lecture_label))).filter(Boolean);
    return labels.length ? labels : [shortReading(data?.type_lecture), "Territoires", "Technologie", "Opérations"].filter(Boolean);
  }

  function readableList(items) {
    const clean = uniqueClean(items);
    if (!clean.length) return "plusieurs lectures complémentaires";
    if (clean.length === 1) return clean[0];
    if (clean.length === 2) return `${clean[0]} et ${clean[1]}`;
    return `${clean.slice(0, -1).join(", ")} et ${clean[clean.length - 1]}`;
  }


  /*
    Formulation éditoriale publique de la conversation.
    Priorité : données servies par l’API / KV.
    Fallback provisoire : uniquement les conversations déjà validées
    pour sécuriser le test Aldric Vignon / Patrick Alves avant
    l’enrichissement du Worker.
  */
  const PUBLIC_CONVERSATION_FALLBACKS = {
    C1: "Quand chaque décision compte : comment piloter une trajectoire industrielle en conditions réelles ?",
    C2: "Comment piloter les interdépendances qui rendent une trajectoire industrielle possible ?",
    C3: "Jusqu’où un outil industriel peut-il évoluer sans se transformer en profondeur ?",
    C4: "Qu’est-ce qui fait qu’une trajectoire industrielle tient, ou doit être réarbitrée ?"
  };

  function conversationCode(data) {
    const editorial = data?.editorial || {};
    const reference = editorial?.editorial_reference || {};
    const direct = txt(editorial.conversation_code, reference.conversation_code, data?.conversation_code, "");
    if (direct) return direct.toUpperCase();

    const codeAngle = txt(editorial.cle_position, data?.code_angle, data?.cle_position, "");
    const match = codeAngle.match(/(?:IND-)?(C\d+)-/i);
    return match ? match[1].toUpperCase() : "";
  }

  function publicConversationTitle(data) {
    const editorial = data?.editorial || {};
    const reference = editorial?.editorial_reference || {};
    const code = conversationCode(data);
    return txt(
      editorial.conversation_formulation_editoriale,
      editorial.conversation_titre_public,
      editorial.formulation_conversation,
      reference.conversation_formulation_editoriale,
      reference.conversation_titre_public,
      data?.conversation_formulation_editoriale,
      data?.conversation_titre_public,
      PUBLIC_CONVERSATION_FALLBACKS[code],
      editorial.angle,
      data?.angle,
      "Conversation éditoriale en cours de composition"
    );
  }

  function buildHero(data) {
    const name = personName(data);
    const org = organisationName(data);
    const role = txt(data?.person?.poste, data?.person?.title, "");
    const editorial = data?.editorial || {};
    const angle = txt(editorial.angle, data?.angle, data?.objet_court, "Proposition éditoriale personnalisée");
    const conversation = publicConversationTitle(data);
    const cycle = txt(editorial.cycle, data?.cycle, "Industrie & transformation des territoires");
    const lecture = readingLabel(txt(editorial.type_lecture_label, editorial.type_lecture, data?.type_lecture));
    const readingShort = shortReading(lecture);
    const subject = heroSubject(angle, conversation);
    const heroTitle = `${org} pourrait apporter une lecture ${readingAdjective(lecture)} sur ${subject}.`;

    const template = document.getElementById("landing-static-cycle-media");
    const mediaBlock = template ? template.innerHTML : "";
    const mediaFrame = mediaBlock ? `
              <div class="landing-film landing-film--static-cycle" aria-label="Repères du cycle Industrie 2026/2027">
                <div class="landing-film-track">
                  <div data-static-cycle-media="true">${mediaBlock}</div>
                </div>
              </div>` : "";

    return `
      <section class="landing-hero landing-hero--bento-minimal landing-hero--simplified" id="hero">
        <div class="landing-container landing-hero-bento-container">
          <div class="landing-hero-bento-grid">
            <div class="landing-hero-bento-copy">
              <p class="landing-hero-conversation landing-hero-conversation--kicker"><span>Conversation stratégique</span><strong>${safe(conversation)}</strong></p>
              <h1>${safe(heroTitle)}</h1>
              <p class="landing-hero-bento-lead">Cette page privée est adressée dans le cadre d’une composition éditoriale en cours. Un échange éditorial de 15 minutes permettrait de vérifier l’intérêt commun de poursuivre et de préciser la position possible.</p>
              <div class="landing-hero-bento-actions">
                <a class="landing-btn" href="${CAL_URL}" target="_blank" rel="noopener">Qualifier cette position — 15 min</a>
                <a class="landing-hero-secondary-link" href="#lectures-composees">Voir la position proposée</a>
              </div>
              <p class="landing-hero-bento-proof">15 minutes · Sans engagement · Aucun dossier à préparer</p>
            </div>
            <aside class="landing-hero-bento-side" aria-label="Repères média et proposition éditoriale">
              ${mediaFrame}
              <div class="landing-hero-metrics landing-hero-metrics--three" aria-label="Repères clés de la proposition éditoriale">
                ${buildHeroPersonCard(name, role, org)}
                ${buildHeroMetricCard("Lecture proposée", readingShort, buildHeroReadingLine(lecture))}
                ${buildHeroMetricCard("Échange éditorial", "15 minutes", "Vérifier l’angle, le périmètre de parole et l’intérêt de poursuivre.", "landing-hero-metric--accent")}
              </div>
            </aside>
          </div>
        </div>
      </section>`;
  }

  function validatedPertinenceCopy(data) {
    const fromApi = data?.public_copy?.pertinence || data?.editorial?.public_copy?.pertinence || data?.landing_copy?.pertinence;
    if (fromApi?.organisation && fromApi?.intervenant && fromApi?.lecture) return fromApi;

    const cast = txt(data?.cast, data?.public_ref, data?.principal?.cast, "");
    const enrichment = window.INDUSTRIE_ENRICHMENTS_BY_REF?.[cast] || {};
    return enrichment?.landingV2?.pertinence || null;
  }

  function buildPertinenceCard(label, card) {
    if (!card) return "";
    const detail = txt(card.detail, "");
    return `
      <article class="landing-card landing-pertinence-card">
        <span class="landing-label">${safe(label)}</span>
        <h3>${safe(card.title)}</h3>
        <p class="landing-pertinence-card__summary">${safe(card.summary)}</p>
        ${detail ? `
          <details class="landing-pertinence-more">
            <summary>Lire le détail <span aria-hidden="true">+</span></summary>
            <div class="landing-pertinence-more__body">
              <p>${safe(detail)}</p>
            </div>
          </details>` : ""}
      </article>`;
  }

  function buildPertinence(data) {
    const org = organisationName(data);
    const lecture = readingLabel(txt(data?.editorial?.type_lecture_label, data?.type_lecture));
    const copy = validatedPertinenceCopy(data);

    return `
      <section class="landing-section landing-section--light landing-section--pertinence" id="pourquoi-cette-position">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Pertinence éditoriale</p>
            <h2>Pourquoi ${safe(org)} pourrait être bien placé pour cette lecture.</h2>
            <p>Cette page ne valide pas une participation. Elle formule une hypothèse éditoriale à qualifier : ce qu’une organisation, une fonction et une expérience pourraient permettre de rendre lisible depuis une ${safe(lecture.toLowerCase())}.</p>
          </div>
          ${copy ? `
            <div class="landing-grid landing-grid--3 landing-pertinence-grid">
              ${buildPertinenceCard("Organisation pressentie", copy.organisation)}
              ${buildPertinenceCard("Position d’observation", copy.intervenant)}
              ${buildPertinenceCard("La lecture proposée", copy.lecture)}
            </div>` : `
            <div class="landing-pertinence-pending">
              <p>Le contenu personnalisé de cette section est en cours de validation éditoriale avant affichage.</p>
            </div>`}
        </div>
      </section>`;
  }

  function toArray(value) {
    return Array.isArray(value) ? value : (value ? [value] : []);
  }

  function uniqueClean(items) {
    const seen = new Set();
    return toArray(items)
      .map(item => String(item || "").trim())
      .filter(Boolean)
      .filter(item => {
        const key = normalize(item);
        if (!key || seen.has(key)) return false;
        seen.add(key);
        return true;
      });
  }

  function listInline(items, fallback) {
    const clean = uniqueClean(items);
    if (!clean.length) return `<span class="lpb-muted">${safe(fallback || "À qualifier")}</span>`;
    return clean.map(item => `<span>${safe(item)}</span>`).join("");
  }

  function cleanReadingTitle(value) {
    const label = shortReading(value || "Lecture");
    return label
      .replace(/territoires\s*&\s*ancrage/i, "Territoires")
      .replace(/technologie\s*&\s*syst[eè]mes/i, "Technologie")
      .replace(/technologique\s*\/\s*syst[eè]mes/i, "Technologie")
      .replace(/opérationnelle/i, "Opérations")
      .replace(/operationnelle/i, "Opérations")
      .replace(/stratégique/i, "Stratégie")
      .replace(/strategique/i, "Stratégie")
      .replace(/financière/i, "Financière")
      .replace(/financiere/i, "Financière")
      .replace(/juridique/i, "Juridique")
      .replace(/territoriale/i, "Territoires")
      .trim();
  }

  function cleanConversationShortTitle(value) {
    return txt(value, "").replace(/^C\d+\s*[—-]\s*/, "").replace(/\s+/g, " ").trim();
  }

  function alternativeConversationCode(alt) {
    const explicit = txt(alt?.conversation_code, alt?.conversationCode, "");
    if (explicit) return explicit.toUpperCase();
    const code = txt(alt?.code_angle, alt?.canonical_code, alt?.cle_position, "");
    const match = code.match(/(?:IND-)?(C\d+)-/i);
    return match ? match[1].toUpperCase() : "";
  }

  function alternativePublicConversationTitle(alt) {
    const code = alternativeConversationCode(alt);
    return txt(
      alt?.conversation_formulation_editoriale,
      alt?.conversation_titre_public,
      alt?.public_conversation_title,
      PUBLIC_CONVERSATION_FALLBACKS[code],
      cleanConversationShortTitle(alt?.conversation),
      ""
    );
  }

  function alternativeContextTitle(alt) {
    const direct = txt(
      alt?.nom_contexte,
      alt?.contexte_titre,
      alt?.context_title,
      alt?.contexte,
      ""
    );
    if (direct) return direct;
    const code = txt(alt?.code_angle, alt?.canonical_code, "").match(/-(CST|ASC|RSS|GS|AC|RC)-/i)?.[1] || "";
    return code && window.SDAEditorialDoctrine?.getContextLabel
      ? window.SDAEditorialDoctrine.getContextLabel(code)
      : "";
  }

  function orgsForCompositionCard(card, data, index, limit) {
    const currentOrg = organisationName(data);
    if (index === 0) return [currentOrg].filter(Boolean);

    const deals = toArray(card.deals_positionnes);
    const principalDeals = deals.filter(deal => normalize(deal.statut_position).includes("principal"));
    const rows = (principalDeals.length ? principalDeals : deals)
      .map(deal => txt(deal.nom, deal.organisation, deal.org_name))
      .filter(Boolean);

    const fallback = toArray(card.organisations_positionnees);
    return uniqueClean(rows.length ? rows : fallback).slice(0, limit || 3);
  }

  function mediaLineForCard(card) {
    return [txt(card.journaliste), txt(card.media)].filter(Boolean).join(" · ");
  }

  function buildConversationTab(item, index, activeIndex) {
    const checked = index === activeIndex ? " checked" : "";
    const isPrimary = index === 0;
    const orgs = item.orgs.slice(0, 3);
    return `
      <input class="lpb-tab-input" type="radio" name="lpb-reading-tabs" id="lpb-reading-${index}"${checked}>
      <label class="lpb-reading-tab ${isPrimary ? "lpb-reading-tab--primary" : ""}" for="lpb-reading-${index}">
        <span class="lpb-tab-role">${safe(isPrimary ? "Votre lecture" : "Lecture complémentaire")}</span>
        <strong>${safe(item.readingTitle)}</strong>
        <em class="lpb-tab-meta-label">Organisations positionnées</em>
        <small class="lpb-tab-meta-value">${orgs.length ? safe(orgs.join(" · ")) : "Organisations en qualification"}</small>
        ${item.media ? `
          <em class="lpb-tab-meta-label lpb-tab-meta-label--media">Journaliste / média</em>
          <i class="lpb-tab-meta-value lpb-tab-meta-value--media">${safe(item.media)}</i>` : ""}
      </label>`;
  }

  function anglePublicDetail(item) {
    const apiCopy = item?.anglePublic || item?.angle_public || item?.public_copy || {};
    const localCopy = window.INDUSTRIE_ANGLE_PUBLIC_TEST_V2?.[item.code] || {};
    return {
      title: txt(apiCopy.titreLanding, apiCopy.title, localCopy.title, item.angle, item.headline, item.readingTitle),
      intro: txt(apiCopy.accrocheLanding, apiCopy.intro, localCopy.intro, item.intro, "Cette lecture complète la composition éditoriale depuis un point d’observation situé.")
    };
  }

  function buildConversationPanel(item, index) {
    const orgLabel = item.orgs.length > 1 ? "Organisations positionnées" : "Organisation positionnée";
    /*
      Le panneau affiche prioritairement les données publiques de l'angle :
      - anglePublic.titreLanding pour le titre ;
      - anglePublic.accrocheLanding pour le descriptif.
      Tant que le Worker ne renvoie pas encore ces champs, le fichier editorial-copy
      porte les valeurs relues pour les casts de test.
    */
    const detail = anglePublicDetail(item);
    const title = detail.title;
    const value = detail.intro;
    const panelLabel = readingLabel(item.type_lecture || item.readingTitle);

    return `
      <article class="lpb-reading-panel lpb-reading-panel--${index} ${index === 0 ? "lpb-reading-panel--primary" : ""}">
        <div class="lpb-panel-main">
          <span class="lpb-label">${safe(panelLabel)}</span>
          <h3>${safe(title)}</h3>
          <p class="lpb-panel-value">${safe(value)}</p>
        </div>
        <div class="lpb-panel-aside">
          <div class="lpb-panel-block">
            <span>${safe(orgLabel)}</span>
            <div class="lpb-chip-list">${listInline(item.orgs, "Organisations en qualification")}</div>
          </div>
          ${item.media ? `
            <div class="lpb-panel-block lpb-panel-block--media">
              <span>Journaliste / média</span>
              <strong>${safe(item.media)}</strong>
              <p class="lpb-panel-production">
                <span>Formats : entretien filmé + article associé</span>
                <span>Tournage : jusqu’à décembre 2026</span>
                <span>Diffusion : date à définir · replay permanent</span>
              </p>
            </div>` : ""}
        </div>
      </article>`;
  }

  function readingsSentenceFromItems(items) {
    const labels = items
      .map(item => normalize(item.readingTitle) === "rh" ? "RH" : item.readingTitle.toLowerCase())
      .filter(Boolean);
    if (!labels.length) return "plusieurs lectures complémentaires";
    if (labels.length === 1) return `une lecture ${labels[0]}`;
    return labels.slice(0, -1).map(label => `une lecture ${label}`).join(", ") + ` et une lecture ${labels[labels.length - 1]}`;
  }

  function buildConversation(data) {
    const editorial = data?.editorial || {};
    const conversation = txt(editorial.conversation, data?.conversation, "Conversation éditoriale");
    const contexte = txt(editorial.contexte_titre, data?.contexte_titre, "");
    const composition = Array.isArray(data?.composition) ? data.composition : [];
    const fallback = [{
      role: "Votre lecture",
      type_lecture: txt(editorial.type_lecture_label, data?.type_lecture),
      title: cleanReadingTitle(txt(editorial.type_lecture_label, data?.type_lecture)),
      headline: txt(editorial.angle, data?.angle),
      intro: txt(editorial.editorial_reference?.intro, "Cette lecture constitue la position proposée dans la composition éditoriale."),
      organisations_positionnees: [organisationName(data)],
      journaliste: txt(editorial.journaliste, data?.journaliste),
      media: txt(editorial.media, data?.media),
      angle: txt(editorial.angle, data?.angle),
      deals_positionnes: []
    }];

    const cards = (composition.length ? composition : fallback).slice(0, 4).map((card, index) => ({
      code: txt(card.canonical_code, card.code_angle, index === 0 ? editorial.cle_position : ""),
      role: txt(card.role, index === 0 ? "Votre lecture" : "Lecture complémentaire"),
      type_lecture: txt(card.type_lecture_label, card.type_lecture, card.title),
      readingTitle: cleanReadingTitle(txt(card.title, card.type_lecture, card.type_lecture_label)),
      headline: txt(card.headline, card.angle),
      intro: txt(card.intro, card.narrativeText, card.description, card.angle),
      angle: txt(card.angle, card.headline),
      anglePublic: card.anglePublic || card.angle_public || card.public_copy || null,
      media: mediaLineForCard(card),
      orgs: orgsForCompositionCard(card, data, index, 3),
      deals: toArray(card.deals_positionnes)
    }));

    const primaryReading = cleanReadingTitle(txt(editorial.type_lecture_label, data?.type_lecture, cards[0]?.readingTitle));
    const sectionTitle = `Votre lecture ${readingAdjective(primaryReading)} prend sa valeur dans une conversation composée.`;
    const publicConversation = publicConversationTitle(data);

    return `
      <section class="landing-bento-section landing-bento-section--tabs" id="mise-en-regard" data-bento-build="api-test-v2-tabs-restored">
        <div class="landing-container lpb-container">
          <div class="lpb-head">
            <p class="lpb-kicker">Mise en regard éditoriale</p>
            <h2>${safe(sectionTitle)}</h2>
            <p class="lpb-subnote">Il ne s’agit pas d’une table ronde ni d’un débat contradictoire. Chaque contribution est préparée individuellement, puis articulée aux autres lectures.</p>
          </div>

          <div class="lpb-conversation-band" aria-label="Conversation éditoriale contextualisée">
            ${contexte ? `<span>${safe(contexte)}</span>` : ""}
            <strong>${safe(publicConversation)}</strong>
          </div>

          <div class="lpb-tabs lpb-tabs--inline-panels" id="lectures-composees" aria-label="Les quatre lectures de la conversation">
            ${cards.map((item, index) => `
              <div class="lpb-reading-slot lpb-reading-slot--${index}">
                ${buildConversationTab(item, index, 0)}
                <div class="lpb-mobile-panel lpb-mobile-panel--${index}">
                  ${buildConversationPanel(item, index)}
                </div>
              </div>`).join("")}
            <div class="lpb-tab-panels lpb-tab-panels--desktop">
              ${cards.map((item, index) => buildConversationPanel(item, index)).join("")}
            </div>
          </div>

          <p class="lpb-composed-note">Chaque intervenant participe séparément. La valeur naît ensuite de la mise en regard&nbsp;: ${safe(readingsSentenceFromItems(cards))} éclairent le même moment de transformation industrielle.</p>
        </div>
      </section>`;
  }

  
  function alternativeLandingHref(alt) {
    /*
      "Voir le cadrage" ouvre la landing personnalisée de l'angle alternatif.
      Sur la page de test V2, on conserve le même gabarit de page afin de tester
      la landing alternative dans la version en cours de correction.
      Après bascule en ligne, window.location.pathname pointera naturellement
      vers contribuer.html.
    */
    const alternativeCast = txt(alt?.cast, alt?.public_ref, alt?.publicRef, "");
    if (alternativeCast) {
      return `${window.location.pathname}?cast=${encodeURIComponent(alternativeCast)}`;
    }
    return txt(alt?.url_landing_page, alt?.landingUrl, alt?.url, "#");
  }

function buildAlternatives(data) {
    const alternatives = Array.isArray(data?.alternatives) ? data.alternatives : [];
    if (!alternatives.length) return "";
    const name = personName(data);
    const cards = alternatives.map((alt, index) => {
      const href = alternativeLandingHref(alt);
      const rang = txt(alt.rang_alternatif, String(index + 1));
      const positionLabel = alt.is_principal_position || alt.navigation_role === "Position prioritaire"
        ? "Position prioritaire"
        : `Position alternative ${rang}`;
      const conversationName = alternativePublicConversationTitle(alt);
      const contextName = alternativeContextTitle(alt);
      return `
        <article class="landing-card landing-card--alternative">
          <span class="landing-label landing-alt-position-label">${safe(positionLabel)}</span>

          ${conversationName ? `
            <div class="landing-alt-field landing-alt-field--conversation">
              <span class="landing-alt-field-label">Conversation</span>
              <h3>${safe(conversationName)}</h3>
            </div>` : ""}

          ${contextName ? `
            <div class="landing-alt-field landing-alt-field--context">
              <span class="landing-alt-field-label">Contexte</span>
              <p class="landing-alt-value">${safe(contextName)}</p>
            </div>` : ""}

          <div class="landing-alt-field landing-alt-field--reading">
            <span class="landing-alt-field-label">Lecture attendue</span>
            <p class="landing-alt-value landing-alt-reading">${safe(readingLabel(alt.type_lecture))}</p>
          </div>

          <div class="landing-alt-field landing-alt-field--angle">
            <span class="landing-alt-field-label">Angle envisagé</span>
            <p class="landing-alt-value landing-alt-angle">${safe(txt(alt.angle, alt.objet_court, "Angle alternatif à qualifier"))}</p>
          </div>

          ${href !== "#" ? `<p class="landing-alt-link"><a class="editorial-link" href="${esc(href)}">Voir le cadrage →</a></p>` : ""}
        </article>`;
    }).join("");

    return `
      <section class="landing-section landing-section--light" id="alternatives">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Lectures alternatives</p>
            <h2 class="landing-alternatives-title">
              <span>D’autres positions dans le</span>
              <span>cycle Industrie &amp; Transformation des Territoires</span>
              <span>ont été identifiées pour ${safe(name)}.</span>
            </h2>
            <p>La position présentée ci-dessus reste la proposition prioritaire.</p>
          </div>
          <div class="landing-grid landing-grid--3">${cards}</div>
        </div>
      </section>`;
  }

  
function valueReadingCode(data) {
    const explicit = txt(data?.editorial?.portee?.reading_code, data?.editorial?.type_lecture_code, "");
    return explicit.toUpperCase();
  }

  function valueTags(readingCode) {
    const tags = {
      FINANCIERE: [
        ["Investissement", "Soutenabilité", "Décideurs"],
        ["Cash", "CAPEX", "Arbitrage"],
        ["Trace", "Crédibilité", "Relations dirigeants"]
      ],
      STRATEGIQUE: [
        ["Trajectoire", "Gouvernance", "Décideurs"],
        ["Méthode", "Lecture", "Arbitrage"],
        ["Trace", "Crédibilité", "Relations dirigeants"]
      ],
      OPERATIONNELLE: [
        ["Opérations", "Performance", "Décideurs"],
        ["Méthode", "Continuité", "Arbitrage"],
        ["Trace", "Crédibilité", "Relations dirigeants"]
      ],
      TECHNOLOGIQUE: [
        ["Systèmes", "Architecture", "Décideurs"],
        ["Méthode", "Données", "Arbitrage"],
        ["Trace", "Crédibilité", "Relations dirigeants"]
      ],
      TERRITORIALE: [
        ["Territoire", "Écosystème", "Décideurs"],
        ["Méthode", "Conditions", "Arbitrage"],
        ["Trace", "Crédibilité", "Relations dirigeants"]
      ]
    };
    return tags[readingCode] || [
      ["Position", "Expertise", "Décideurs"],
      ["Méthode", "Lecture", "Arbitrage"],
      ["Trace", "Crédibilité", "Relations dirigeants"]
    ];
  }

  function valueDetailList(items, headings) {
    return items.slice(0, 3).map((item, index) => `
      <li>
        <strong>${safe(headings[index] || `Effet ${index + 1}`)}</strong>
        <span>${safe(item)}</span>
      </li>`).join("");
  }

  function buildPortee(data) {
    const source = data?.editorial?.portee || {};
    const cabinet = isCabinet(data);
    const reading = shortReading(txt(data?.editorial?.type_lecture_label, data?.editorial?.type_lecture, "éditoriale"));
    const readingCode = valueReadingCode(data);
    const actor = cabinet ? source.cabinet_conseil : source.organisation_industrielle;
    const fonction = source.fonction || {};
    const personne = source.personne || {};
    const actorDetail = Array.isArray(actor?.detail) ? actor.detail : [];
    const fonctionDetail = Array.isArray(fonction?.detail) ? fonction.detail : [];
    const personDetail = Array.isArray(personne?.detail) ? personne.detail : [];
    const tags = valueTags(readingCode);
    const valueForSpeaker = txt(source.value_for_speaker, `Faire reconnaître une lecture ${reading.toLowerCase()} utile et située.`);
    const contextVariation = txt(source.variation_contexte, "");
    const actorShort = txt(actor?.court, `Installer une lecture ${reading.toLowerCase()} claire et réutilisable.`);
    const functionShort = txt(fonction?.court, valueForSpeaker);
    const personShort = txt(personne?.court, "Construire une trace professionnelle durable et crédible.");

    const cards = cabinet
      ? [
          {
            label: "Pour votre cabinet",
            title: `Installer une lecture ${reading.toLowerCase()} propriétaire, sans discours promotionnel`,
            intro: actorShort,
            tags: tags[0],
            headings: ["Statut", "Institutionnel", "Stratégique"],
            details: actorDetail.length ? actorDetail : [actorShort, valueForSpeaker, contextVariation]
          },
          {
            label: "Pour votre doctrine",
            title: "Rendre lisible ce que votre pratique sait formuler",
            intro: valueForSpeaker,
            tags: tags[1],
            headings: ["Interne", "Différenciation", "Réutilisation"],
            details: fonctionDetail.length ? fonctionDetail : [functionShort, contextVariation, actorShort]
          },
          {
            label: "Pour vos relations dirigeants",
            title: "Laisser une trace professionnelle utile",
            intro: personShort,
            tags: tags[2],
            headings: ["Trace", "Réutilisation", "Crédibilité personnelle"],
            details: [
              personShort,
              valueForSpeaker,
              txt(personDetail[0], contextVariation, actorShort)
            ]
          }
        ]
      : [
          {
            label: "Pour votre organisation",
            title: `Rendre visible une lecture ${reading.toLowerCase()} de trajectoire`,
            intro: actorShort,
            tags: tags[0],
            headings: ["Position", "Écosystème", "Stratégique"],
            details: actorDetail.length ? actorDetail : [actorShort, valueForSpeaker, contextVariation]
          },
          {
            label: "Pour votre fonction",
            title: "Faire reconnaître ce que votre fonction permet d’arbitrer",
            intro: functionShort,
            tags: tags[1],
            headings: ["Rôle", "Différenciation", "Décision"],
            details: fonctionDetail.length ? fonctionDetail : [functionShort, contextVariation, actorShort]
          },
          {
            label: "Pour vos relations clés",
            title: "Laisser une trace professionnelle utile",
            intro: personShort,
            tags: tags[2],
            headings: ["Trace", "Réutilisation", "Crédibilité personnelle"],
            details: [
              personShort,
              valueForSpeaker,
              txt(personDetail[0], contextVariation, actorShort)
            ]
          }
        ];

    const cardsHtml = cards.map(card => `
      <article class="landing-card landing-value-card">
        <span class="landing-label">${safe(card.label)}</span>
        <h3>${safe(card.title)}</h3>
        <p>${safe(card.intro)}</p>
        <div class="value-chip-list">
          ${card.tags.map(tag => `<span>${safe(tag)}</span>`).join("")}
        </div>
        <div class="value-details value-details--visible">
          <p class="value-details-title">Usages et effets concrets</p>
          <ul>${valueDetailList(card.details, card.headings)}</ul>
        </div>
      </article>`).join("");

    return `
      <section class="landing-section landing-section--dark" id="valeur-position">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Portée de la position</p>
            <h2>Ce qu’une lecture utile peut produire.</h2>
            <p>Le point de départ n’est pas la visibilité. Une contribution solide rend visible une lecture utile ; la reconnaissance, la trace et les usages durables en sont les conséquences naturelles.</p>
          </div>
          <div class="landing-grid landing-grid--3 landing-grid--value">${cardsHtml}</div>
        </div>
      </section>`;
  }

  
function buildTrustKeys(data) {
    const reading = readingLabel(txt(data?.editorial?.type_lecture_label, data?.type_lecture));
    const keys = [
      { num: "01", title: "Hors champ", visible: ["Chiffres internes", "Sites sensibles", "Clients / fournisseurs", "Décisions confidentielles"], summary: "Ce qui ne sera pas exposé", detail: ["Pas de chiffres internes ou non publics.", "Pas de client, fournisseur ou partenaire nommé sans accord.", "Pas de site sensible, incident, contentieux ou dossier social identifiable.", "Pas de décision confidentielle, négociation en cours ou arbitrage non annoncé."] },
      { num: "02", title: "Périmètre éditorial", visible: ["Angle limité", "Lecture de mécanisme", "Point de décision", "Niveau d’exposition"], summary: "Ce qui est cadré", detail: [`L’angle reste limité à ce que la ${reading.toLowerCase()} doit réellement éclairer.`, "Toutes les dimensions du sujet sont préparées avant l’entretien.", "Les formulations sensibles sont travaillées pour rester publiquement tenables.", "Le niveau d’exposition est ajusté avec l’organisation."] },
      { num: "03", title: "Préparation média", visible: ["Trame média", "Relances journaliste", "Pense-bête", "Production"], summary: "Ce qui est préparé", detail: ["La trame média sera utile avant l’entretien pour sécuriser le périmètre.", "Les questions sur les tensions, arbitrages et moments de décision sont anticipées.", "La trame média aidera l’intervenant à garder le fil sans réciter une communication.", "La coordination avec la production permet de préserver la cohérence éditoriale."] },
      { num: "04", title: "Validation organisationnelle", visible: ["Communication", "Juridique", "Affaires publiques", "Direction"], summary: "Qui peut sécuriser", detail: ["Les équipes communication, juridiques, affaires publiques ou direction peuvent être associées.", "La trame média sera relue et validée avant l’entretien pour sécuriser le périmètre.", "Un échange peut avoir lieu avant montage afin de vérifier la justesse du propos.", "Des ajustements éditoriaux peuvent éviter une exposition involontaire, sans transformer l’entretien en contenu contrôlé."] },
      { num: "05", title: "Confidentialité", visible: ["NDA", "Échanges protégés", "Documents non publics", "Périmètre sensible"], summary: "Ce qui reste protégé", detail: ["Les échanges préparatoires peuvent être couverts par un accord de confidentialité.", "Les documents de travail ne sont pas publics.", "Le périmètre sensible est identifié en amont.", "Aucun élément confidentiel n’est utilisé sans accord."] },
      { num: "06", title: "Engagement", visible: ["15 minutes", "Aucune suite automatique", "Décision ensuite", "Note si pertinent"], summary: "Ce que l’échange engage", detail: ["L’échange de 15 minutes ne vaut pas accord de participation.", "La note de positionnement ne vaut pas engagement automatique.", "La position reste soumise à composition éditoriale.", "Une contribution financière n’intervient que si une poursuite est validée."] }
    ];

    const card = (key, index) => {
      const hasDetail = index === keys.length - 1;
      return `
        <article class="trust-key ${hasDetail ? "trust-key--expandable" : "trust-key--static"}">
          <span class="trust-key__num">${safe(key.num)}</span>
          <h3>${safe(key.title)}</h3>
          <p class="trust-key__summary">${safe(key.summary)}</p>
          <ul>${key.visible.map(item => `<li>${safe(item)}</li>`).join("")}</ul>
          ${hasDetail ? `
            <details class="trust-key__details">
              <summary><span class="trust-key-open">En savoir plus</span><span class="trust-key-close">Masquer</span></summary>
              ${trustDetailList(key.detail)}
            </details>` : ""}
        </article>`;
    };

    return `
      <section class="landing-section landing-section--dark landing-trust-keys" id="cadre-confiance">
        <div class="landing-container">
          <div class="landing-head landing-head--keys">
            <p class="landing-kicker">Cadre de confiance</p>
            <h2>Une prise de parole visible, préparée et maîtrisée.</h2>
            <p>Le cadre éditorial précise ce qui reste hors champ, ce qui peut être travaillé, les validations utiles et les conditions d’engagement avant toute production.</p>
          </div>
          <div class="trust-keys-grid trust-keys-grid--six trust-keys-grid--all" aria-label="Les six points de sécurisation éditoriale">
            ${keys.map(card).join("")}
          </div>
        </div>
      </section>`;
  }

  function buildEditorialFrame(data) {
    const readings = readableList(compositionReadingNames(data).slice(0, 4)).toLowerCase();
    return `
      <section class="landing-section landing-section--light landing-more-structured landing-more-concept-section" id="cadre-editorial-scenes-arbitrage">
        <div class="landing-container">
          <div class="more-hero-grid more-hero-grid--concept">
            <div>
              <p class="landing-kicker">Pour aller plus loin</p>
              <h2>Comprendre le cadre éditorial Scènes d’Arbitrage.</h2>
            </div>
            <div>
              <p>Scènes d’Arbitrage organise des conversations éditoriales autour de décisions économiques, industrielles ou territoriales qui ne se comprennent jamais depuis un seul point de vue.</p>
              <p>Chaque contribution est préparée individuellement, produite dans un format média, puis mise en regard avec d’autres lectures complémentaires au sein d’un même cycle.</p>
            </div>
          </div>
          <div class="more-concept-grid">
            <article><span>Dispositif éditorial</span><h3>Des contributions situées, pas des prises de parole isolées</h3><p>Scènes d’Arbitrage ne juxtapose pas des témoignages. Chaque contribution éclaire un arbitrage depuis une fonction, une responsabilité ou une expérience précise.</p></article>
            <article><span>Mise en regard</span><h3>Les quatre lectures de cette conversation</h3><p>${safe(readings.charAt(0).toUpperCase() + readings.slice(1))} éclairent le même sujet depuis des positions différentes. La valeur naît de leur articulation.</p></article>
            <article><span>Formats média</span><h3>Des formats existants, une composition Scènes d’Arbitrage</h3><p>Le dispositif s’appuie sur des journalistes, des médias et des formats partenaires. L’enjeu n’est pas d’empiler des passages média, mais de composer une conversation éditoriale cohérente.</p></article>
          </div>
        </div>
      </section>`;
  }

  
function buildCycle() {
    return `
      <section class="landing-section landing-section--dark" id="cycle-industrie">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Cycle Industrie</p>
            <h2>Industrie & transformation des territoires</h2>
            <p><strong>Comprendre l’industrie par les arbitrages qui rendent une trajectoire possible.</strong></p>
          </div>
          <div class="landing-card landing-card--accent" style="max-width:920px;margin:0 auto;text-align:center;">
            <p>Ce cycle met en regard plusieurs lectures : stratégie, finance, droit, opérations, RH, technologie, ressources et territoires, pour rendre lisibles les décisions qui font tenir, évoluer ou réorienter une trajectoire industrielle.</p>
            <p style="margin-top:16px;">Chaque conversation part d’une situation concrète : produire davantage, transformer un outil, coordonner des ressources, préserver une continuité ou inscrire une activité dans un territoire.</p>
            <p style="margin-top:16px;">Le cycle <a class="editorial-link" href="https://scenesdarbitrage.fr/conversations/logement.html">Logement & fabrique des territoires</a> reprend la même méthode pour éclairer les arbitrages de l’habitat, du foncier et de la transformation des territoires.</p>
          </div>
        </div>
      </section>`;
  }

  
function buildContact() {
    return `
      <section class="landing-section landing-section--dark landing-qualification-cta landing-qualification-cta--final" id="contact">
        <div class="landing-container">
          <div class="qualification-cta-grid qualification-cta-grid--split">
            <aside class="qualification-cta-signature" aria-label="Scènes d’Arbitrage">
              <figure class="qualification-cta-photo">
                <img src="/images/a-propos/hocine-reguida.jpg" alt="Hocine RÉGUIDA, conception et coordination éditoriale" loading="lazy">
                <figcaption class="qualification-cta-photo-caption">
                  <strong>Hocine RÉGUIDA</strong>
                  <span>Conception et coordination éditoriale</span>
                </figcaption>
              </figure>
              <p>Une position éditoriale se vérifie dans un échange court. La suite reste une décision.</p>
            </aside>
            <div class="qualification-cta-main">
              <p class="landing-kicker">Échange éditorial</p>
              <h2>Certaines positions méritent simplement d’être discutées.</h2>
              <p>L’échange permet de vérifier si la lecture envisagée mérite d’être structurée dans le cadre du cycle. Il ne demande aucune préparation particulière et peut associer, si nécessaire, les équipes communication, affaires publiques ou juridiques.</p>
              <div class="landing-actions qualification-cta-actions">
                <a class="landing-btn" href="${CAL_URL}" target="_blank" rel="noopener">Qualifier cette position — 15 min</a>
              </div>
              <p class="qualification-cta-microcopy">15 minutes · sans engagement · aucune suite automatique</p>
            </div>
          </div>
        </div>
      </section>`;
  }

  function render(data) {
    document.title = `Scènes d'Arbitrage — ${personName(data)}`;
    ROOT.innerHTML = [
      buildHero(data),
      buildPertinence(data),
      buildConversation(data),
      buildAlternatives(data),
      buildPortee(data),
      buildTrustKeys(data),
      buildEditorialFrame(data),
      buildCycle(),
      buildContact()
    ].join("");
  }

  async function init() {
    if (!ROOT) return;
    const params = new URLSearchParams(window.location.search || "");
    const cast = txt(params.get("cast"), params.get("ref"), params.get("position"), params.get("p"), params.get("deal"));
    if (!cast) {
      renderState("Référence manquante", "Ajoutez un identifiant de proposition dans l’URL, par exemple ?cast=CA24C4G.", true);
      return;
    }

    try {
      const response = await fetch(`${API_BASE}?cast=${encodeURIComponent(cast)}`, { headers: { "Accept": "application/json" } });
      const json = await response.json().catch(() => null);
      if (!response.ok || !json || !json.ok || !json.data) {
        renderState("Cette position n’est pas disponible pour le moment.", json?.message || "L’API n’a pas renvoyé de proposition active pour cette référence.", true);
        return;
      }
      render(Object.assign({ cast }, json.data));
    } catch (error) {
      console.error("render-landing-api-test-v2 — erreur API", error);
      renderState("Erreur de chargement", "La page de test n’a pas pu interroger l’API Cloudflare Worker.", true);
    }
  }

  init();
})();
