/*
  Scènes d'Arbitrage — render-landing-api-test.js
  Version : 2026-05-27-api-test-v1

  Objectif : tester une landing individuelle alimentée par l'API Cloudflare Worker
  sans remplacer la landing actuelle.

  Source dynamique : /api/landing-data?cast=XXXX
  Source visuelle : layout.css + landing.css existants
  Données éditoriales lourdes non chargées : v67, activation-crm, enrichments

  Limites volontairement visibles :
  - si l'API ne renvoie pas alternatives[], la section alternatives est masquée ;
  - si l'API ne renvoie pas composition[], la mise en regard reste simplifiée ;
  - la section FAQ reste absente tant qu'elle n'est pas personnalisée proprement.
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
      .replace(/croissance sous tension/gi, "croissance organisée")
      .replace(/adaptation sous contrainte/gi, "adaptation coordonnée")
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

  function personName(data) {
    return txt(data?.person?.nom_complet, data?.person?.name, data?.person_name, "Intervenant pressenti");
  }

  function organisationName(data) {
    return txt(data?.organisation?.nom, data?.organisation?.name, data?.org_name, "Organisation pressentie");
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

    // Passage au conditionnel sur les verbes d'affirmation les plus fréquents.
    out = out.replace(/\bpermet d’apporter\b/gi, "pourrait permettre d’apporter");
    out = out.replace(/\bpermet d'apporter\b/gi, "pourrait permettre d’apporter");
    out = out.replace(/\bpermet de\b/gi, "pourrait permettre de");
    out = out.replace(/\bpeut éclairer\b/gi, "pourrait éclairer");
    out = out.replace(/\bpeut apporter\b/gi, "pourrait apporter");
    out = out.replace(/\bapporte à cette conversation\b/gi, "pourrait apporter à cette conversation");
    out = out.replace(new RegExp(`${org.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")} apporte`, "gi"), `${org} pourrait apporter`);
    out = out.replace(/\bdonne un cadre\b/gi, "pourrait donner un cadre");
    out = out.replace(/\béclaire\b/gi, "pourrait éclairer");

    return out;
  }

  function splitParagraphs(text) {
    return txt(text)
      .split(/\n{2,}|(?<=\.)\s+(?=[A-ZÉÈÀÂÎÔÛÇ])/)
      .map(s => s.trim())
      .filter(Boolean)
      .slice(0, 4);
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
    const role = txt(data?.person?.poste, data?.person?.title, data?.poste, "");
    const angle = txt(data?.angle, data?.objet_court, "Proposition éditoriale personnalisée");
    const conversation = txt(data?.conversation, "");
    const contexte = txt(data?.contexte_titre, data?.contexte_code, "");
    const cycle = txt(data?.cycle, "Industrie & transformation des territoires");
    const lecture = readingLabel(data?.type_lecture);
    const media = txt(data?.media, "");
    const journaliste = txt(data?.journaliste, "");

    const template = document.getElementById("landing-static-cycle-media");
    const mediaBlock = template ? template.innerHTML : "";

    return `
      <section class="landing-hero" id="hero">
        <div class="landing-container">
          <div class="landing-hero__grid">
            <div class="landing-hero-main">
              <p class="landing-kicker">${safe(cycle)}</p>
              <h1>${safe(angle)}</h1>
              <p class="landing-lead landing-lead--compact">
                Une proposition de ${safe(lecture.toLowerCase())} pour explorer, sans engagement, la place que cette expérience pourrait trouver dans le cycle.
              </p>
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
    const lecture = readingLabel(data?.type_lecture);
    const pertinence = editorializePertinence(data?.pertinence_editoriale, data);
    const paragraphs = splitParagraphs(pertinence);

    const content = paragraphs.length
      ? paragraphs.map(p => `<p>${safe(p)}</p>`).join("")
      : `<p>${safe(org)} pourrait apporter une lecture utile à qualifier dans le cadre de cette conversation. L’échange éditorial permettrait de préciser le périmètre, la place de ${safe(name)} et la manière de rendre cette lecture publiquement tenable.</p>`;

    return `
      <section class="landing-section landing-section--light" id="pourquoi-cette-position">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Pertinence éditoriale</p>
            <h2>Pourquoi cette position pourrait être pertinente.</h2>
            <p>Cette page ne valide pas une participation. Elle formule une hypothèse éditoriale à qualifier : ce que la position de ${safe(name)} chez ${safe(org)} pourrait rendre lisible depuis une ${safe(lecture.toLowerCase())}.</p>
          </div>
          <div class="landing-why-box">
            <div class="landing-why-narrative">
              ${content}
            </div>
          </div>
        </div>
      </section>`;
  }

  function buildConversation(data) {
    const conversation = txt(data?.conversation, "Conversation éditoriale");
    const contexte = txt(data?.contexte_titre, data?.contexte_code, "");
    const angle = txt(data?.angle, data?.objet_court, "Angle éditorial à qualifier");
    const lecture = readingLabel(data?.type_lecture);
    const org = organisationName(data);
    const media = txt(data?.media, "");
    const journaliste = txt(data?.journaliste, "");

    return `
      <section class="landing-section landing-section--dark" id="mise-en-regard">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Place dans la conversation</p>
            <h2>${safe(conversation)}</h2>
            ${contexte ? `<p>${safe(contexte)}</p>` : ""}
          </div>
          <div class="landing-grid landing-grid--3 landing-composition-grid">
            <article class="landing-card landing-card--primary-position">
              <span class="landing-label">Votre lecture</span>
              <h3>${safe(shortReading(lecture))}</h3>
              <div class="landing-organisations">
                <span>Organisations positionnées</span>
                <strong>${safe(org)}</strong>
              </div>
              <div class="landing-media-line">
                <span>Journaliste / média</span>
                <strong>${safe([journaliste, media].filter(Boolean).join(" · ") || "Média partenaire")}</strong>
              </div>
              <p>${safe(angle)}</p>
            </article>
            <article class="landing-card">
              <span class="landing-label">Composition</span>
              <h3>Mise en regard</h3>
              <p>La valeur de la conversation vient de la confrontation de plusieurs positions complémentaires. Cette version de test affiche la position active issue du CRM ; la composition complète pourra ensuite être servie par le Worker depuis un référentiel éditorial nettoyé.</p>
            </article>
            <article class="landing-card">
              <span class="landing-label">Cadre</span>
              <h3>Lecture située</h3>
              <p>La contribution ne porte pas sur un cas interne ou client. Elle vise à rendre lisible un mécanisme d’arbitrage utile à d’autres acteurs, dans un cadre préparé et publiquement tenable.</p>
            </article>
          </div>
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
          <span class="landing-label">${safe(txt(alt.rang_alternatif, alt.rang, "Option"))}</span>
          <h3>${safe(readingLabel(alt.type_lecture))}</h3>
          <p>${safe(txt(alt.angle, alt.objet_court, "Angle alternatif à qualifier"))}</p>
          ${href !== "#" ? `<p style="margin-top:18px;"><a class="editorial-link" href="${esc(href)}">Voir cette proposition</a></p>` : ""}
        </article>`;
    }).join("");

    return `
      <section class="landing-section landing-section--light" id="alternatives">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Autres angles</p>
            <h2>D’autres angles de ce cycle pourraient également correspondre à ${safe(name)}.</h2>
          </div>
          <div class="landing-grid landing-grid--3">${cards}</div>
        </div>
      </section>`;
  }

  function buildPortee(data) {
    const actorType = normalize(txt(data?.organisation?.type, data?.actorType, ""));
    const isCabinet = actorType.includes("cabinet") || normalize(organisationName(data)).includes("consult") || normalize(organisationName(data)).includes("advisory");
    const first = isCabinet ? "Produire une position exploitable" : "Structurer une parole dirigeante";
    const firstText = isCabinet
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
            <article class="landing-card">
              <span class="landing-label">Actif éditorial</span>
              <h3>${safe(first)}</h3>
              <p>${safe(firstText)}</p>
            </article>
            <article class="landing-card">
              <span class="landing-label">Usage dans le temps</span>
              <h3>Un contenu mobilisable durablement</h3>
              <p>La vidéo, l’article ou la page média peuvent nourrir des échanges qualifiés, être partagés en rendez-vous ou rester accessibles aux personnes qui recherchent une lecture sur ce sujet.</p>
            </article>
            <article class="landing-card">
              <span class="landing-label">Valeur éditoriale</span>
              <h3>Une lecture plutôt qu’une actualité</h3>
              <p>La valeur tient au fait de formuler une lecture structurée sur un arbitrage durable, plutôt que de commenter une actualité ponctuelle.</p>
            </article>
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
      console.error("render-landing-api-test — erreur API", error);
      renderState("Erreur de chargement", "La page de test n’a pas pu interroger l’API Cloudflare Worker.", true);
    }
  }

  init();
})();
