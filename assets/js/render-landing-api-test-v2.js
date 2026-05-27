/*
  Scènes d'Arbitrage — render-landing-api-test-v2.js
  Version : 2026-05-27-api-test-v2

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

  function buildHero(data) {
    const name = personName(data);
    const org = organisationName(data);
    const role = txt(data?.person?.poste, data?.person?.title, "");
    const editorial = data?.editorial || {};
    const angle = txt(editorial.angle, data?.angle, data?.objet_court, "Proposition éditoriale personnalisée");
    const conversation = txt(editorial.conversation, data?.conversation, "");
    const contexte = txt(editorial.contexte_titre, data?.contexte_titre, data?.contexte_code, "");
    const cycle = txt(editorial.cycle, data?.cycle, "Industrie & transformation des territoires");
    const lecture = readingLabel(txt(editorial.type_lecture_label, editorial.type_lecture, data?.type_lecture));
    const media = txt(editorial.media, data?.media, "");
    const journaliste = txt(editorial.journaliste, data?.journaliste, "");

    const template = document.getElementById("landing-static-cycle-media");
    const mediaBlock = template ? template.innerHTML : "";

    return `
      <section class="landing-hero" id="hero">
        <div class="landing-container">
          <div class="landing-hero__grid">
            <div class="landing-hero-main">
              <p class="landing-kicker">${safe(cycle)}</p>
              <h1>${safe(angle)}</h1>
              <p class="landing-lead landing-lead--compact">Une proposition de ${safe(lecture.toLowerCase())} pour explorer, sans engagement, la place que cette expérience pourrait trouver dans le cycle.</p>
              ${conversation ? `<p class="landing-reassurance">${safe(conversation)}${contexte ? ` · ${safe(contexte)}` : ""}</p>` : ""}
              <div class="landing-actions">
                <a class="landing-btn" href="${CAL_URL}" target="_blank" rel="noopener">Proposer un échange éditorial</a>
                <a class="landing-btn landing-btn--ghost" href="#pourquoi-cette-position">Comprendre la proposition</a>
              </div>
            </div>
            <aside class="landing-hero-side" aria-label="Repères média et intervenant pressenti">
              ${mediaBlock}
              <div class="landing-hero__card landing-hero-position-card">
                <span class="landing-label">Intervenant pressenti</span>
                <h3>${safe(name)}</h3>
                <p>${safe(role || lecture)}${org ? ` · ${safe(org)}` : ""}</p>
                ${media || journaliste ? `
                  <div class="landing-identity landing-identity--single">
                    <span>Média / journaliste</span>
                    <strong>${safe([journaliste, media].filter(Boolean).join(" · "))}</strong>
                  </div>` : ""}
                <div class="landing-rarity">
                  <span class="landing-rarity__dot" aria-hidden="true"></span>
                  <p><strong>Position en qualification éditoriale.</strong> Une position est proposée lorsqu’une lecture semble pouvoir apporter une contribution utile à la conversation.</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>`;
  }

  function buildPertinence(data) {
    const name = personName(data);
    const org = organisationName(data);
    const lecture = readingLabel(txt(data?.editorial?.type_lecture_label, data?.type_lecture));
    const dealText = editorializePertinence(txt(data?.pertinence?.deal, data?.pertinence_editoriale), data);
    const orgText = editorializePertinence(txt(data?.pertinence?.organisation, data?.organisation?.justification_entreprise), data);
    const paragraphs = splitSentences(dealText, 4);

    return `
      <section class="landing-section landing-section--light" id="pourquoi-cette-position">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Pertinence éditoriale</p>
            <h2>Pourquoi cette position pourrait être pertinente.</h2>
            <p>Cette page ne valide pas une participation. Elle formule une hypothèse éditoriale à qualifier : ce que la position de ${safe(name)} chez ${safe(org)} pourrait rendre lisible depuis une ${safe(lecture.toLowerCase())}.</p>
          </div>
          <div class="landing-grid landing-grid--3 landing-head--keys">
            <article class="landing-card">
              <span class="landing-label">Organisation pressentie</span>
              <h3>${safe(org)}</h3>
              ${orgText ? `<p>${safe(orgText)}</p>` : `<p>${safe(org)} pourrait constituer un point d’observation utile pour cette conversation.</p>`}
            </article>
            <article class="landing-card">
              <span class="landing-label">Position d’observation</span>
              <h3>${safe(name)}</h3>
              ${paragraphs.slice(0, 2).map(p => `<p>${safe(p)}</p>`).join("") || `<p>Cette position devrait permettre de qualifier une lecture située du sujet.</p>`}
            </article>
            <article class="landing-card">
              <span class="landing-label">Lecture proposée</span>
              <h3>${safe(lecture)}</h3>
              ${paragraphs.slice(2, 4).map(p => `<p>${safe(p)}</p>`).join("") || `<p>La contribution ne porterait pas sur un cas interne ou client, mais sur une lecture utile et publiquement tenable.</p>`}
            </article>
          </div>
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
        <span>${safe(isPrimary ? "Votre lecture" : "Lecture complémentaire")}</span>
        <strong>${safe(item.readingTitle)}</strong>
        <small>${orgs.length ? safe(orgs.join(" · ")) : "Organisations positionnées en qualification"}</small>
        ${item.media ? `<i>${safe(item.media)}</i>` : ""}
      </label>`;
  }

  function buildConversationPanel(item, index) {
    const orgLabel = item.orgs.length > 1 ? "Organisations positionnées" : "Organisation positionnée";
    const title = txt(item.headline, item.angle, item.readingTitle);
    const value = txt(item.intro, item.angle, item.headline, "Cette lecture complète la composition éditoriale en apportant un point d’observation situé.");
    const panelLabel = readingLabel(item.type_lecture || item.readingTitle);
    const description = index === 0
      ? `Cette ${panelLabel.toLowerCase().replace("lecture rh", "lecture RH")} constitue la position proposée dans la composition éditoriale.`
      : `Cette ${panelLabel.toLowerCase().replace("lecture rh", "lecture RH")} complète la composition éditoriale en apportant un autre point d’observation sur le même moment de transformation industrielle.`;

    return `
      <article class="lpb-reading-panel lpb-reading-panel--${index} ${index === 0 ? "lpb-reading-panel--primary" : ""}">
        <div class="lpb-panel-main">
          <span class="lpb-label">${safe(panelLabel)}</span>
          <h3>${safe(title)}</h3>
          <p class="lpb-panel-value">${safe(value)}</p>
          <p class="lpb-panel-context">${safe(description)}</p>
        </div>
        <div class="lpb-panel-aside">
          <div class="lpb-panel-block">
            <span>${safe(orgLabel)}</span>
            <div class="lpb-chip-list">${listInline(item.orgs, "Organisations en qualification")}</div>
          </div>
          ${item.media ? `<div class="lpb-panel-block lpb-panel-block--media"><span>Journaliste / média</span><strong>${safe(item.media)}</strong></div>` : ""}
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
      role: txt(card.role, index === 0 ? "Votre lecture" : "Lecture complémentaire"),
      type_lecture: txt(card.type_lecture_label, card.type_lecture, card.title),
      readingTitle: cleanReadingTitle(txt(card.title, card.type_lecture, card.type_lecture_label)),
      headline: txt(card.headline, card.angle),
      intro: txt(card.intro, card.narrativeText, card.description, card.angle),
      angle: txt(card.angle, card.headline),
      media: mediaLineForCard(card),
      orgs: orgsForCompositionCard(card, data, index, 3),
      deals: toArray(card.deals_positionnes)
    }));

    const primaryReading = cleanReadingTitle(txt(editorial.type_lecture_label, data?.type_lecture, cards[0]?.readingTitle));
    const sectionTitle = `Votre lecture ${primaryReading.toLowerCase()} prend sa valeur dans une conversation composée.`;
    const conversationTitle = txt(conversation).replace(/^C(\d+)\s+[—-]\s+/, "");

    return `
      <section class="landing-bento-section landing-bento-section--tabs" id="mise-en-regard" data-bento-build="api-test-v2-tabs-restored">
        <div class="landing-container lpb-container">
          <div class="lpb-head">
            <p class="lpb-kicker">Mise en regard éditoriale</p>
            <h2>${safe(sectionTitle)}</h2>
            <p class="lpb-subnote">Il ne s’agit pas d’une table ronde ni d’un débat contradictoire. Chaque contribution est préparée individuellement, puis articulée aux autres lectures.</p>
          </div>

          <div class="lpb-conversation-band" aria-label="Conversation stratégique">
            <span>Conversation stratégique</span>
            <strong>${safe(conversationTitle || conversation)}</strong>
            ${contexte ? `<small>${safe(contexte)}</small>` : ""}
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

  function buildAlternatives(data) {
    const alternatives = Array.isArray(data?.alternatives) ? data.alternatives : [];
    if (!alternatives.length) return "";
    const name = personName(data).toUpperCase();
    const cards = alternatives.map(alt => {
      const href = txt(alt.url_landing_page, alt.landingUrl, alt.url, "#");
      return `
        <article class="landing-card">
          <span class="landing-label">Piste en réserve éditoriale ${safe(txt(alt.rang_alternatif, ""))}</span>
          <h3>${safe(txt(alt.angle, alt.objet_court, "Angle alternatif à qualifier"))}</h3>
          <p><strong>${safe(readingLabel(alt.type_lecture))}</strong>${alt.conversation ? ` · ${safe(alt.conversation)}` : ""}</p>
          ${href !== "#" ? `<p style="margin-top:18px;"><a class="editorial-link" href="${esc(href)}">Voir cette piste →</a></p>` : ""}
        </article>`;
    }).join("");

    return `
      <section class="landing-section landing-section--light" id="alternatives">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Autres angles</p>
            <h2>D’autres angles de ce cycle pourraient également correspondre à ${safe(name)}.</h2>
            <p>La position présentée ci-dessus reste la proposition prioritaire.</p>
          </div>
          <div class="landing-grid landing-grid--3">${cards}</div>
        </div>
      </section>`;
  }

  function buildPortee(data) {
    const cabinet = isCabinet(data);
    const first = cabinet ? "Produire une position exploitable" : "Structurer une parole dirigeante";
    const firstText = cabinet
      ? "Un contenu utile pour matérialiser une expertise sans transformer la prise de parole en présentation d’offre."
      : "Un contenu utile pour rendre lisible une expérience de décision sans exposer un dossier interne.";

    return `
      <section class="landing-section landing-section--light" id="portee">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Portée</p>
            <h2>Ce qu’une lecture utile peut produire.</h2>
            <p>Le contenu produit est conçu comme une opération éditoriale pérenne, pas comme une opération commerciale immédiate ou jetable.</p>
          </div>
          <div class="landing-grid landing-grid--3 landing-grid--value">
            <article class="landing-card"><span class="landing-label">Actif éditorial</span><h3>${safe(first)}</h3><p>${safe(firstText)}</p></article>
            <article class="landing-card"><span class="landing-label">Usage dans le temps</span><h3>Un contenu mobilisable durablement</h3><p>La vidéo, l’article ou la page média peuvent nourrir des échanges qualifiés, être partagés en rendez-vous ou rester accessibles aux personnes qui recherchent une lecture sur ce sujet.</p></article>
            <article class="landing-card"><span class="landing-label">Valeur éditoriale</span><h3>Une lecture plutôt qu’une actualité</h3><p>La valeur tient au fait de formuler une lecture structurée sur un arbitrage durable, plutôt que de commenter une actualité ponctuelle.</p></article>
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
            <p>Ce cycle met en regard plusieurs lectures, stratégie, finance, droit, opérations, RH, technologie, ressources et territoires, pour rendre lisibles les décisions qui font tenir, évoluer ou réorienter une trajectoire industrielle.</p>
            <p style="margin-top:16px;">Chaque conversation part d’une situation concrète : produire davantage, transformer un outil, coordonner des ressources, préserver une continuité ou inscrire une activité dans un territoire.</p>
            <p style="margin-top:16px;">Le cycle <a class="editorial-link" href="https://scenesdarbitrage.fr/conversations/logement.html">Logement & fabrique des territoires</a> reprend la même méthode pour éclairer les arbitrages de l’habitat, du foncier et de la fabrique des territoires.</p>
          </div>
        </div>
      </section>`;
  }

  function buildContact() {
    return `
      <section class="landing-final" id="contact">
        <div class="landing-container">
          <p class="landing-kicker">Échange éditorial</p>
          <h2>Explorer la pertinence de cette position.</h2>
          <p>Un échange court, sans engagement, pour préciser le sujet, le cadre éditorial et la place éventuelle de cette lecture dans le cycle.</p>
          <div class="landing-actions" style="justify-content:center;">
            <a class="landing-btn" href="${CAL_URL}" target="_blank" rel="noopener">Proposer un échange de 15 minutes</a>
          </div>
          <p class="landing-reassurance" style="margin-left:auto;margin-right:auto;">Aucune participation n’est présumée. L’échange sert uniquement à qualifier le cadre.</p>
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
