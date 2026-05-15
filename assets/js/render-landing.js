/*
  En Plateau — render-landing.js
  BENTO BUILD — 20260515-4CARTES

  Objet : remplace la section post-hero "Conversation composée" par une section Bento
  "Votre place dans la conversation".

  Marqueurs de vérification :
  - const BENTO_BUILD_20260515_0425 = true;
  - buildConversationBentoSection(...)
  - <section class="landing-bento-section" id="mise-en-regard">

  Ne modifie pas :
  - editorial-data-industrie-v67.js
  - render-core.js
*/

(function () {
  "use strict";

  const BENTO_BUILD_20260515_0425 = true;
  console.info("En Plateau — render-landing bento build 20260515-0425 loaded");

  const Core = window.EnPlateauRenderCore;
  const DATA = window.EN_PLATEAU_EDITORIAL_DATA || {};
  const root = document.getElementById("landing-root");

  if (!Core || !root) {
    console.error("En Plateau — render-core.js ou #landing-root introuvable.");
    return;
  }

  function safe(v) { return Core.escapeHTML(v || ""); }
  function txt(...values) { return Core.text(...values); }
  function toArray(v) { return Core.toArray(v).filter(Boolean); }
  function norm(v) { return Core.normalize(v || ""); }

  function cleanRole(role, organisationName) {
    let cleaned = String(role || "").trim();
    const org = String(organisationName || "").trim();
    if (!cleaned) return "";
    if (org) {
      cleaned = cleaned
        .replace(new RegExp("\\s*[—–-]\\s*" + org.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\s*$", "i"), "")
        .replace(new RegExp("\\s+chez\\s+" + org.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\s*$", "i"), "");
    }
    return cleaned.trim();
  }

  function stripConversationCode(value) {
    return String(value || "")
      .replace(/^\s*C\d+\s*[—–-]\s*/i, "")
      .replace(/^\s*IND\s*-\s*C\d+\s*[—–-]\s*/i, "")
      .trim();
  }

  function soften(value) {
    return String(value || "")
      .replace(/\bCroissance sous tension\b/g, "Croissance à piloter")
      .replace(/\bAdaptation sous contrainte\b/g, "Adaptation maîtrisée")
      .replace(/\bRéinvention sous crise\b/g, "Reconfiguration stratégique")
      .replace(/\bpoints? de bascule\b/gi, m => m.startsWith("points") ? "moments de décision" : "moment de décision")
      .replace(/\bdégrade\b/gi, "met à l'épreuve")
      .replace(/\bdégrader\b/gi, "mettre à l'épreuve")
      .replace(/\bdégradation\b/gi, "évolution moins lisible")
      .replace(/\bruptures visibles\b/gi, "changements visibles")
      .replace(/\brupture\b/gi, "changement de nature")
      .replace(/\bcrise\b/gi, "moment de redéfinition")
      .replace(/\bcontraintes?\b/gi, "conditions")
      .replace(/\btensions?\b/gi, "points d'attention")
      .replace(/\bfragilise\b/gi, "rend moins lisible")
      .replace(/\bfragiliser\b/gi, "rendre moins lisible")
      .replace(/\bfragilité\b/gi, "point de vigilance")
      .replace(/\bfragile\b/gi, "à stabiliser")
      .replace(/\bplafond\b/gi, "seuil")
      .replace(/\bfacteur limitant\b/gi, "condition décisive")
      .replace(/\bblocage\b/gi, "limite")
      .replace(/\bvulnérabilités?\b/gi, "points sensibles")
      .replace(/\bpubliquement tenable\b/gi, "lisible par votre écosystème")
      .replace(/\bprise de parole publique\b/gi, "position éditoriale")
      .replace(/\bplan social\b/gi, "dossier identifiable")
      .replace(/\bplans sociaux\b/gi, "dossiers identifiables")
      .replace(/\bplan de restructuration\b/gi, "dossier de transformation interne")
      .replace(/\bplans de restructuration\b/gi, "dossiers de transformation interne")
      .replace(/\brestructurations?\b/gi, "transformations sociales et organisationnelles")
      .replace(/À partir de quand chaque volume supplémentaire met à l'épreuve-t-il plus l'organisation qu'il ne renforce l'activité\s*\?/gi,
        "Quelles conditions rendent une montée en capacité réellement pilotable ?");
  }

  function shortText(value, max = 560) {
    const cleaned = soften(String(value || "").replace(/\s+/g, " ").trim());
    if (cleaned.length <= max) return cleaned;
    const cut = cleaned.slice(0, max);
    const last = Math.max(cut.lastIndexOf("."), cut.lastIndexOf(";"), cut.lastIndexOf(","));
    return (last > 180 ? cut.slice(0, last) : cut).trim() + ".";
  }

  function isOperationalRole(role) {
    const r = norm(role);
    return r.includes("industri") || r.includes("supply") || r.includes("operations") ||
           r.includes("operation") || r.includes("production") || r.includes("qualite") ||
           r.includes("maintenance") || r.includes("directeur usine") || r.includes("site industriel");
  }

  function actorLabel(actorType) {
    return actorType === "cabinet_conseil" ? "Cabinet · Conseil · Expertise" : "Organisation industrielle";
  }

  function displayReadingLabel(reading, angle, deal, personRole) {
    const fromData = txt(
      deal?.editorialContext?.typeLecture, deal?.typeLecture, deal?.lecture,
      reading?.label, angle?.typeLecture
    );

    // Le type de lecture appartient à l'angle éditorial.
    // La fonction de la personne peut expliquer la légitimité de la prise de parole,
    // mais elle ne doit jamais transformer une lecture stratégique, financière,
    // territoriale, juridique, etc. en lecture opérationnelle.
    return fromData || "Lecture éditoriale";
  }

  function card(label, title, text, accent, extraClass = "") {
    if (!title && !text) return "";
    const classes = ["landing-card", accent ? "landing-card--accent" : "", extraClass].filter(Boolean).join(" ");
    return `
      <article class="${classes}">
        ${label ? `<span class="landing-label">${safe(label)}</span>` : ""}
        ${title ? `<h3>${safe(soften(title))}</h3>` : ""}
        ${text  ? `<p>${safe(shortText(text, 640))}</p>` : ""}
      </article>`;
  }

  function valueLabel(label) {
    const n = norm(label);
    if (n.includes("organisation") || n.includes("entreprise") || n.includes("industrielle")) return "Pour votre organisation";
    if (n.includes("fonction") || n.includes("porteuse")) return "Pour votre fonction";
    if (n.includes("intervenant") || n.includes("personne") || n.includes("senior")) return "Pour vous";
    if (n.includes("cabinet") || n.includes("conseil") || n.includes("expertise") || n.includes("avocat")) return "Pour votre expertise";
    return label || "Portée";
  }

  function sanitizePersonFragment(value) {
    let v = soften(value || "");
    v = v.replace(/^Votre fonction\s+[—-]\s*[^—-]+\s+[—-]\s+vous permet de\s+/i, "Vous pouvez ");
    v = v.replace(/^Votre fonction\s+[—-]\s*[^—-]+\s+[—-]\s+/i, "");
    v = v.replace(/^Votre fonction vous permet de\s+/i, "Vous pouvez ");
    return v;
  }

  function readingTypeConfig(code) {
    if (!code) return null;
    const key = String(code).trim();
    return DATA?.readingTypes?.[key] || null;
  }

  function actorLabelsForAngle(angle) {
    const cfg = readingTypeConfig(angle?.typeLecture);
    return toArray(cfg?.profilsIntervenant)
      .map(item => txt(item.label, item.title, item.profil))
      .filter(Boolean)
      .slice(0, 3);
  }

  function mediaLineForAngle(item) {
    const journaliste = txt(item?.journaliste, "");
    const emission = txt(item?.emission, "");
    const media = txt(item?.media, "");
    const outlet = [emission, media].filter(Boolean).join(" · ");
    if (!journaliste && !outlet) return "";
    return [journaliste, outlet].filter(Boolean).join(" · ");
  }

  function castingItems() {
    return toArray(DATA?.casting?.castings || DATA?.castings || []);
  }

  function organisationsForAngle(angleCode, limit = 3, excludeOrgName = "") {
    const exclude = norm(excludeOrgName);
    const seen = new Set();
    return castingItems()
      .filter(item => String(item?.angleCode || "") === String(angleCode || ""))
      .map(item => txt(item?.organisation?.name, item?.organisationName, item?.orgName))
      .filter(name => {
        const key = norm(name);
        if (!key || (exclude && key === exclude) || seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .slice(0, limit);
  }

  function readingDisplay(value) {
    return soften(String(value || "").replace(/^Lecture\s+/i, "")).trim();
  }

  function readingPhrase(value) {
    const r = readingDisplay(value).toLowerCase();
    return r ? `lecture ${r}` : "lecture éditoriale";
  }

  function angleTitle(angle, publicAngle = {}, formulation = {}) {
    return txt(publicAngle.titreLanding, formulation.title, angle?.questionPublique, angle?.titreAngle, angle?.questionEditoriale);
  }

  function angleDescription(angle, publicAngle = {}, formulation = {}) {
    return txt(publicAngle.accrocheLanding, formulation.accrocheLanding, angle?.introMecanisme, angle?.texteProgramme, angle?.questionActivation, angle?.ceQueCetteLecturePermetDeVoir);
  }

  function buildComplementaryCard(other, excludeOrgName = "") {
    const c = other.complementaryCard || {};
    const actors = actorLabelsForAngle(other);
    const orgs = organisationsForAngle(other.code, 3, excludeOrgName);
    const media = mediaLineForAngle(other);
    const label = c.label || other.typeLecture || "Lecture complémentaire";
    const title = c.title || other.questionCourte || other.titreAngle || other.questionPublique;
    const text = c.headline || other.ceQueCetteLecturePermetDeVoir || other.angleRendVisible || "Une autre lecture du même contexte éditorial.";
    return `
      <article class="landing-card landing-card--complementary">
        ${actors.length ? `<div class="landing-actors"><span>Acteurs pressentis</span><strong>${safe(actors.join(" · "))}</strong></div>` : ""}
        ${orgs.length ? `<div class="landing-organisations"><span>Organisations approchées</span><strong>${safe(orgs.join(" · "))}</strong></div>` : ""}
        ${media ? `<div class="landing-media-line"><span>Format média pressenti</span><strong>${safe(media)}</strong></div>` : ""}
        ${label ? `<span class="landing-label">${safe(label)}</span>` : ""}
        ${title ? `<h3>${safe(soften(title))}</h3>` : ""}
        ${text ? `<p>${safe(shortText(text, 560))}</p>` : ""}
      </article>`;
  }

  function buildPrimaryConversationCard(angle, publicAngle, formulation, personName, personRole, organisationName, readingLabel) {
    const actors = actorLabelsForAngle(angle);
    const media = mediaLineForAngle(angle);
    const title = angleTitle(angle, publicAngle, formulation);
    const text = angleDescription(angle, publicAngle, formulation);
    return `
      <article class="landing-card landing-card--primary-position">
        ${actors.length ? `<div class="landing-actors"><span>Acteurs pressentis</span><strong>${safe(actors.join(" · "))}</strong></div>` : ""}
        <div class="landing-organisations"><span>Organisation pressentie</span><strong>${safe(organisationName)}</strong></div>
        ${media ? `<div class="landing-media-line"><span>Format média pressenti</span><strong>${safe(media)}</strong></div>` : ""}
        <span class="landing-label">Votre position pressentie · ${safe(readingDisplay(readingLabel))}</span>
        ${title ? `<h3>${safe(soften(title))}</h3>` : ""}
        ${text ? `<p>${safe(shortText(text, 560))}</p>` : ""}
        <p class="landing-card-note"><strong>Intervenant pressenti</strong><br>${safe([personName, personRole].filter(Boolean).join(" · "))}</p>
      </article>`;
  }


  /* ─────────────────────────────────────────────────────────
     SECTION POST-HERO — BENTO conversation / lectures
     Objectif : rendre immédiatement lisibles la place proposée,
     les autres lectures, les organisations approchées,
     les acteurs approchés et le format média de chaque angle.
  ───────────────────────────────────────────────────────── */

  function readingLabelForAngle(angle) {
    const cfg = readingTypeConfig(angle?.typeLecture);
    return txt(cfg?.label, angle?.complementaryCard?.label, angle?.typeLecture, "Lecture complémentaire");
  }

  function shortReadingLabel(value) {
    return readingDisplay(value || "Lecture");
  }

  function dealItemsForAngle(angleCode, limit = 4, excludeOrgName = "") {
    const exclude = norm(excludeOrgName);
    const seen = new Set();
    return castingItems()
      .filter(item => String(item?.angleCode || "") === String(angleCode || ""))
      .map(item => {
        const organisation = txt(item?.organisation?.name, item?.organisationName, item?.orgName);
        const person = txt(item?.person?.fullName, item?.person?.name, item?.personName, item?.name);
        const role = cleanRole(txt(item?.person?.role, item?.role, item?.personRole), organisation);
        return { organisation, person, role };
      })
      .filter(item => {
        const orgKey = norm(item.organisation);
        const personKey = norm(item.person);
        const key = [orgKey, personKey].filter(Boolean).join("|");
        if (!key || (exclude && orgKey === exclude) || seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .slice(0, limit);
  }

  function listInline(items, fallback = "À qualifier") {
    const clean = toArray(items).map(item => String(item || "").trim()).filter(Boolean);
    if (!clean.length) return `<span class="lpb-muted">${safe(fallback)}</span>`;
    return clean.map(item => `<span>${safe(item)}</span>`).join("");
  }

  function compactPeopleList(items) {
    const rows = toArray(items).filter(Boolean).map(item => {
      const who = [item.person, item.role].filter(Boolean).join(" · ");
      return who || item.organisation;
    }).filter(Boolean);
    return listInline(rows, "Profils en qualification");
  }

  function compactOrgList(items) {
    const seen = new Set();
    const rows = toArray(items).map(item => item.organisation).filter(name => {
      const key = norm(name);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
    return listInline(rows, "Organisations en qualification");
  }

  function bentoDetail(title, body) {
    if (!body) return "";
    return `
      <details class="lpb-details">
        <summary>${safe(title)}</summary>
        <div>${body}</div>
      </details>`;
  }

  function buildBentoPrimaryCard(angle, publicAngle, formulation, personName, personRole, organisationName, readingLabel) {
    const title = angleTitle(angle, publicAngle, formulation);
    const desc = angleDescription(angle, publicAngle, formulation);
    const media = mediaLineForAngle(angle);
    const actors = actorLabelsForAngle(angle);
    const details = `
      ${desc ? `<p>${safe(shortText(desc, 620))}</p>` : ""}
      ${actors.length ? `<div class="lpb-detail-block"><span>Acteurs pressentis</span><strong>${safe(actors.join(" · "))}</strong></div>` : ""}
      ${media ? `<div class="lpb-detail-block"><span>Émission pressentie</span><strong>${safe(media)}</strong></div>` : ""}
    `;
    return `
      <article class="lpb-card lpb-card--primary">
        <div class="lpb-card-top">
          <span class="lpb-label">Votre lecture</span>
          <span class="lpb-status">Position proposée</span>
        </div>
        <h3>${safe(shortReadingLabel(readingLabel))}</h3>
        ${title ? `<p class="lpb-angle">${safe(soften(title))}</p>` : ""}
        <div class="lpb-meta-grid">
          <div><span>Organisation</span><strong>${safe(organisationName)}</strong></div>
          <div><span>Intervenant</span><strong>${safe([personName, personRole].filter(Boolean).join(" · "))}</strong></div>
        </div>
        <div class="lpb-tags"><span>Angle limité</span><span>Lecture située</span><span>À qualifier</span></div>
        ${bentoDetail("Lire l’angle proposé", details)}
      </article>`;
  }

  function buildBentoComplementaryCard(other, index, excludeOrgName = "") {
    const c = other.complementaryCard || {};
    const publicAngle = other.anglePublic || other.formulationVariants?.anglePublic || {};
    const formulation = Core.getFormulationLanding(other) || {};
    const readingLabel = readingLabelForAngle(other);
    const title = txt(c.title, publicAngle.titreLanding, formulation.title, other.questionCourte, other.titreAngle, other.questionPublique);
    const text = txt(c.headline, publicAngle.accrocheLanding, formulation.accrocheLanding, other.ceQueCetteLecturePermetDeVoir, other.angleRendVisible);
    const actors = actorLabelsForAngle(other);
    const deals = dealItemsForAngle(other.code, 4, excludeOrgName);
    const media = mediaLineForAngle(other);
    const detail = `
      ${text ? `<p>${safe(shortText(text, 620))}</p>` : ""}
      ${actors.length ? `<div class="lpb-detail-block"><span>Acteurs pressentis</span><strong>${safe(actors.join(" · "))}</strong></div>` : ""}
      ${media ? `<div class="lpb-detail-block"><span>Émission pressentie</span><strong>${safe(media)}</strong></div>` : ""}
    `;
    return `
      <article class="lpb-card lpb-card--other">
        <div class="lpb-card-top">
          <span class="lpb-label">Lecture ${safe(index + 2)}</span>
          <span class="lpb-status">Complémentaire</span>
        </div>
        <h3>${safe(shortReadingLabel(readingLabel))}</h3>
        ${title ? `<p class="lpb-angle">${safe(shortText(title, 170))}</p>` : ""}
        <div class="lpb-mini-section">
          <span>Organisations approchées</span>
          <div class="lpb-chip-list">${compactOrgList(deals)}</div>
        </div>
        <div class="lpb-mini-section">
          <span>Acteurs approchés</span>
          <div class="lpb-chip-list lpb-chip-list--people">${compactPeopleList(deals)}</div>
        </div>
        ${media ? `<div class="lpb-media"><span>Émission</span><strong>${safe(media)}</strong></div>` : ""}
        ${bentoDetail("Détail de cette lecture", detail)}
      </article>`;
  }

  function buildConversationBentoSection(angle, publicAngle, formulation, conversationLabel, contextLabel, personName, personRole, organisationName, readingLabel, complementaryAngles) {
    return `
      <section class="landing-bento-section" id="mise-en-regard" data-bento-build="20260515-4cartes">
        <div class="landing-container lpb-container">
          <div class="lpb-head">
            <p class="lpb-kicker">Votre place dans la conversation</p>
            <h2>Une conversation à plusieurs voix. Une lecture proposée à votre organisation.</h2>
            <p>Chaque intervenant participe séparément. La valeur naît ensuite de la mise en regard des lectures, des organisations et des angles pressentis.</p>
          </div>
          <div class="lpb-grid lpb-grid--four-cards">
            ${buildBentoPrimaryCard(angle, publicAngle, formulation, personName, personRole, organisationName, readingLabel)}
            ${complementaryAngles.map((other, index) => buildBentoComplementaryCard(other, index, organisationName)).join("")}
          </div>
        </div>
      </section>`;
  }

  /* ─────────────────────────────────────────────────────────
     BRANCHEMENT DATA V67 — gainsParProfilV2 + faqV2
     Ces 4 fonctions sont les seules modifications apportées
     à V65.9 pour la compatibilité avec le data V67.
     Aucune autre fonction, aucune section HTML n'est modifiée.
  ───────────────────────────────────────────────────────── */

  function detectProfilGroupe(actorType) {
    return actorType === "cabinet_conseil" ? "eclaireur" : "industriel";
  }

  function detectPersonaType(role, actorType) {
    const r = norm(role || "");
    const groupe = detectProfilGroupe(actorType);
    if (groupe === "eclaireur") {
      if (r.includes("avocat") || r.includes("counsel")) return "avocat";
      if (r.includes("ingeni") || r.includes("bureau etude") || r.includes("technique")) return "ingenierie";
      return "conseil";
    }
    if (r.includes("pdg") || r.includes("president") || r.includes("directeur general") || r.includes(" dg ") || r.includes("ceo") || r.includes("chief executive")) return "DG";
    if (r.includes("daf") || r.includes("directeur financier") || r.includes("directeur finance") || r.includes("cfo") || r.includes("chief financial")) return "DAF";
    if (r.includes("drh") || r.includes("ressources humaines") || r.includes("directeur rh") || r.includes("chief people") || r.includes("chief human")) return "DRH";
    if (r.includes("juridique") || r.includes("legal") || r.includes("compliance") || r.includes("conformite") || r.includes("affaires publiques") || r.includes("reglementaire")) return "DIR_JURIDIQUE";
    if (r.includes("industri") || r.includes("operations") || r.includes("production") || r.includes("supply") || r.includes("usine") || r.includes("manufacturing") || r.includes("amenagement") || r.includes("territoire") || r.includes("energie") || r.includes("ressources") || r.includes("environnement") || r.includes("systeme") || r.includes("numerique") || r.includes("data") || r.includes("technique") || r.includes("maintenance") || r.includes("qualite") || r.includes("logistique")) return "DIR_INDUSTRIEL";
    return "default";
  }

  function getReadingType(readingLabel) {
    const rt = DATA?.readingTypes || {};
    if (!readingLabel) return null;

    const MAP = {
      "strategique": "STRATEGIQUE", "lecture strategique": "STRATEGIQUE",
      "financiere": "FINANCIERE", "lecture financiere": "FINANCIERE",
      "juridique": "JURIDIQUE", "juridique / reglementaire": "JURIDIQUE", "lecture juridique": "JURIDIQUE",
      "operationnelle": "OPERATIONNELLE", "operations": "OPERATIONNELLE", "lecture operationnelle": "OPERATIONNELLE",
      "rh / competences": "RH_COMPETENCES", "rh_competences": "RH_COMPETENCES", "rh competences": "RH_COMPETENCES", "lecture rh / competences": "RH_COMPETENCES",
      "technologique / systemes": "TECHNOLOGIQUE", "technologique": "TECHNOLOGIQUE", "technologie": "TECHNOLOGIQUE", "systemes": "TECHNOLOGIQUE", "lecture technologique": "TECHNOLOGIQUE",
      "territoriale": "TERRITORIALE", "territorial": "TERRITORIALE", "lecture territoriale": "TERRITORIALE",
      "energie / ressources / decarbonation": "ENERGIE_RESSOURCES", "energie / ressources": "ENERGIE_RESSOURCES", "energie_ressources": "ENERGIE_RESSOURCES", "ressources": "ENERGIE_RESSOURCES", "decarbonation": "ENERGIE_RESSOURCES", "lecture energie / ressources / decarbonation": "ENERGIE_RESSOURCES",
    };

    const rawKey = norm(readingLabel);
    const key = rawKey.replace(/^lecture\s+/, "").trim();
    const candidates = [rawKey, key];

    for (const candidate of candidates) {
      const mapped = MAP[candidate];
      if (mapped && rt[mapped]) return rt[mapped];
      if (rt[candidate]) return rt[candidate];
    }

    if ((key.includes("rh") || key.includes("competence")) && rt.RH_COMPETENCES) return rt.RH_COMPETENCES;
    if ((key.includes("energie") || key.includes("ressource") || key.includes("carbone") || key.includes("decarbon")) && rt.ENERGIE_RESSOURCES) return rt.ENERGIE_RESSOURCES;
    if ((key.includes("operation") || key.includes("production") || key.includes("supply")) && rt.OPERATIONNELLE) return rt.OPERATIONNELLE;
    if ((key.includes("techno") || key.includes("systeme") || key.includes("data") || key.includes("numerique")) && rt.TECHNOLOGIQUE) return rt.TECHNOLOGIQUE;
    if ((key.includes("territoire") || key.includes("territorial")) && rt.TERRITORIALE) return rt.TERRITORIALE;
    if (key.includes("jurid") && rt.JURIDIQUE) return rt.JURIDIQUE;
    if (key.includes("finance") && rt.FINANCIERE) return rt.FINANCIERE;
    if (key.includes("strateg") && rt.STRATEGIQUE) return rt.STRATEGIQUE;

    return null;
  }

  const FAQ_UNIVERSELLES_FALLBACK = [
    { question: "L'échange de 15 minutes vaut-il engagement à participer ?", answer: "Non. L'échange sert uniquement à vérifier si votre lecture correspond à une position disponible. Aucune suite n'est automatique. Vous décidez à chaque étape." },
    { question: "Faut-il préparer quelque chose avant l'échange ?", answer: "Non. Aucun dossier, aucune présentation n'est attendu. L'échange sert à qualifier votre lecture depuis votre expérience et votre fonction." },
    { question: "Les équipes communication ou juridiques peuvent-elles être associées à la préparation ?", answer: "Oui. Le périmètre de parole peut être travaillé en amont avec vos équipes communication, affaires publiques, juridiques ou corporate si nécessaire." }
  ];

  function getFAQ(readingLabel, actorType, personRole, landingPage) {
    const rtData     = getReadingType(readingLabel);
    const groupe     = detectProfilGroupe(actorType);
    const personaKey = detectPersonaType(personRole, actorType);
    const universelles = toArray(
      rtData?.faqV2?.universelles?.length ? rtData.faqV2.universelles : FAQ_UNIVERSELLES_FALLBACK
    );
    const parPersona = toArray(
      rtData?.faqV2?.[groupe]?.[personaKey] || rtData?.faqV2?.[groupe]?.default || []
    );
    const fromLP = toArray(landingPage?.copy?.faq || landingPage?.faq);
    const seen = new Set();
    return [...universelles, ...parPersona, ...fromLP].filter(item => {
      const key = norm(item.question || "").slice(0, 25);
      if (!key || seen.has(key)) return false;
      seen.add(key); return true;
    }).slice(0, 6);
  }

  /* ─────────────────────────────────────────────────────────
     FIN BRANCHEMENT DATA V67
  ───────────────────────────────────────────────────────── */

  function isCabinetCard(item) {
    const b = norm([item?.label, item?.title, item?.profil].join(" "));
    return b.includes("cabinet") || b.includes("conseil") || b.includes("expertise") || b.includes("avocat");
  }
  function isOrgCard(item) {
    const b = norm([item?.label, item?.title, item?.profil].join(" "));
    return b.includes("organisation") || b.includes("entreprise") || b.includes("industrielle");
  }
  function isFunctionCard(item) {
    const b = norm([item?.label, item?.title, item?.profil].join(" "));
    return b.includes("fonction") || b.includes("porteuse");
  }
  function isPersonCard(item) {
    const b = norm([item?.label, item?.title, item?.profil].join(" "));
    return b.includes("intervenant") || b.includes("personne") || b.includes("senior");
  }

  function getValueCards(landingPage, reading, readingLabel, actorType, personRole) {
    // Priorité 1 : gainsParProfilV2[groupe][persona] depuis data V67.
    // Important : on part du libellé CRM/deal déjà normalisé par displayReadingLabel,
    // pas uniquement de reading.label, car les libellés peuvent arriver sous la forme
    // "Stratégique", "Lecture stratégique", "RH / compétences", etc.
    const rtData     = getReadingType(readingLabel || reading?.code || reading?.label || "");
    const groupe     = detectProfilGroupe(actorType);
    const personaKey = detectPersonaType(personRole, actorType);
    const gainsV2    = rtData?.gainsParProfilV2;

    if (gainsV2?.[groupe]) {
      const groupData   = gainsV2[groupe];
      const personaData = groupData[personaKey] || groupData["default"];
      const defaultData = groupData["default"] || personaData;
      if (personaData) {
        const orgLabel  = groupe === "eclaireur" ? "Pour votre expertise" : "Pour votre organisation";
        const funcLabel = groupe === "eclaireur" ? "Pour votre pratique"  : "Pour votre fonction";
        return [
          { label: orgLabel,  title: personaData.gain, text: personaData.detail },
          { label: funcLabel, title: defaultData.gain,  text: defaultData.detail },
          { label: "Pour vous",
            title: "Construire une trace professionnelle crédible et réutilisable.",
            text: "L'intervention devient un actif éditorial préparé, durable et mobilisable dans la durée auprès de votre écosystème professionnel." }
        ];
      }
    }

    // Fallback 2 : gainsParProfil plat V66 depuis readingTypes
    const rtGains = toArray(rtData?.gainsParProfil).map(item => ({
      label: item.profil, title: item.gain,
      text: typeof item.detail === "string" ? item.detail : Array.isArray(item.detail) ? item.detail.join(" ") : ""
    }));
    if (rtGains.length >= 3) {
      const filtered = rtGains.filter(item =>
        actorType === "cabinet_conseil"
          ? isCabinetCard(item) || isFunctionCard(item) || isPersonCard(item)
          : !isCabinetCard(item) && (isOrgCard(item) || isFunctionCard(item) || isPersonCard(item))
      );
      if (filtered.length >= 3) return filtered.slice(0, 3).map(item => ({ ...item, label: valueLabel(item.label) }));
      return rtGains.slice(0, 3).map(item => ({ ...item, label: valueLabel(item.label) }));
    }

    // Fallback 3 : landingPage.valueSection.cards (votre fallback original)
    const pageCards = toArray(landingPage?.valueSection?.cards).map(item => ({
      label: item.label || item.profil,
      title: item.title || item.gain,
      text:  item.text  || (Array.isArray(item.detail) ? item.detail.join(" ") : item.detail)
    }));
    let filtered = pageCards.filter(item =>
      actorType === "cabinet_conseil"
        ? isCabinetCard(item) || isFunctionCard(item) || isPersonCard(item)
        : !isCabinetCard(item) && (isOrgCard(item) || isFunctionCard(item) || isPersonCard(item))
    );
    if (filtered.length >= 3) return filtered.slice(0, 3).map(item => ({ ...item, label: valueLabel(item.label) }));

    // Fallback 4 : reading.gainsParProfil (votre fallback original)
    const gains = toArray(reading?.gainsParProfil).map(item => ({
      label: item.profil, title: item.gain, text: item.detail
    }));
    filtered = gains.filter(item =>
      actorType === "cabinet_conseil"
        ? isCabinetCard(item) || isFunctionCard(item) || isPersonCard(item)
        : !isCabinetCard(item) && (isOrgCard(item) || isFunctionCard(item) || isPersonCard(item))
    );
    if (filtered.length >= 3) return filtered.slice(0, 3).map(item => ({ ...item, label: valueLabel(item.label) }));

    // Fallback 5 : statique (votre fallback original conservé à l'identique)
    return [
      {
        label: actorType === "cabinet_conseil" ? "Pour votre expertise" : "Pour votre organisation",
        title: actorType === "cabinet_conseil"
          ? "Installer une parole d'autorité sans vendre directement une offre."
          : "Valoriser une capacité à rendre lisibles les conditions réelles d'une trajectoire industrielle.",
        text: actorType === "cabinet_conseil"
          ? "La contribution permet de formuler une lecture utile aux décideurs sans présenter une mission, une méthode ou un cas client."
          : "La contribution permet à l'organisation de montrer sa capacité de lecture sans exposer de chiffre, de site, de client ou de décision interne."
      },
      {
        label: "Pour votre fonction",
        title: "Faire reconnaître ce que votre fonction permet de voir.",
        text: "La prise de parole rend visible une capacité de pilotage, de coordination ou d'arbitrage souvent difficile à expliquer dans un format institutionnel classique."
      },
      {
        label: "Pour vous",
        title: "Construire une trace professionnelle crédible.",
        text: "L'intervention devient un actif éditorial préparé, durable, réutilisable et aligné avec le niveau d'exposition souhaité."
      }
    ];
  }

  function getCTA(deal, reading, landingPage) {
    const pageCTA = landingPage?.cta || {};
    const source  = txt(reading?.calSource, "lp-industrie-contribution");
    return {
      href: txt(
        deal?.ctaUrl, deal?.cta_url, deal?.activation?.ctaUrl, deal?.activation?.cta_url,
        deal?.landingPageUrl, deal?.landing_page_url,
        `/demander-un-echange-editorial.html?source=${encodeURIComponent(source)}`
      ),
      label: txt(
        deal?.ctaLabel, deal?.cta_label, deal?.activation?.ctaLabel, deal?.activation?.cta_label,
        "Qualifier cette position — 15 min"
      ),
      title:    "Qualifier cette lecture en échange éditorial",
      text:     txt(pageCTA.text, "15 minutes, sans engagement, pour qualifier l'angle, le périmètre de parole et les conditions de préparation."),
      deadline: txt(pageCTA.deadline, ""),
      footnote: txt(pageCTA.footnote, "Page privée · Échange sans engagement")
    };
  }

  function getGuarantees(publicAngle, landingPage, personaFit) {
    const base = [
      { title: "Aucune donnée interne attendue",
        text:  "Aucun chiffre, marge, performance, site, client, fournisseur, incident ou décision confidentielle n'est demandé." },
      { title: "Une lecture de mécanisme",
        text:  "L'échange ne vise pas à commenter l'organisation invitée. Il sert à formuler une lecture utile sur les conditions de pilotage, de coordination et de montée en capacité." },
      { title: "Un cadrage possible avec vos équipes",
        text:  "Le périmètre peut être préparé avec les équipes communication, juridiques, affaires publiques ou corporate si nécessaire." }
    ];
    const extra = [];
    if (publicAngle?.reassurance) extra.push({ title: "Une intervention non intrusive", text: publicAngle.reassurance });

    const pageGuarantees = toArray(landingPage?.guarantees).slice(0, 1);
    const required = toArray(personaFit?.internalValidationLayer?.requiredMessages)
      .filter(m => !norm(m).includes("mise en regard")).slice(0, 1)
      .map(m => ({ title: soften(m), text: "Ce point est intégré en amont dans le cadrage éditorial." }));

    const all = [...base, ...extra, ...pageGuarantees, ...required];
    const seen = new Set();
    return all.filter(item => {
      const key = norm(item.title);
      if (!key || seen.has(key)) return false;
      seen.add(key); return true;
    }).slice(0, 4);
  }

  function getProcessSteps(landingPage) {
    const fromData = toArray(landingPage?.copy?.process || landingPage?.process).map(item => ({
      num: item.num,
      title: item.title,
      text: item.text,
      deadline: item.deadline
    }));

    if (fromData.length) return fromData.slice(0, 5);

    return [
      {
        num: "01",
        title: "L'échange éditorial",
        text: "15 minutes pour vérifier si votre lecture correspond à une position disponible. Aucun engagement, aucun dossier sensible à exposer."
      },
      {
        num: "02",
        title: "La note de positionnement",
        text: "Si l'angle paraît pertinent, En Plateau formalise la position proposée : valeur éditoriale, mise en regard, garanties, modalités et conditions."
      },
      {
        num: "03",
        title: "La préparation six dimensions",
        text: "La position est structurée autour du contexte, des acteurs concernés, des arbitrages, des défis, de la vision et de l'échelle."
      },
      {
        num: "04",
        title: "Le tournage et l'article associé",
        text: "La position est portée dans un format préparé, cadré, non improvisé, avec une articulation possible entre vidéo et entretien écrit."
      },
      {
        num: "05",
        title: "L'activation éditoriale",
        text: "Le contenu devient un actif réutilisable pendant 18 mois auprès de votre écosystème : clients, partenaires, institutions, talents, financeurs ou équipes internes."
      }
    ];
  }

  function getConversationLabel(conversation, deal) {
    return stripConversationCode(txt(
      conversation?.title,
      deal?.editorialContext?.conversation,
      "Cycle Industrie & transformation des territoires"
    ));
  }

  /* ─────────────────────────────────────────────────────────
     BANDEAU — court, 1 ligne, "Page privée"
  ───────────────────────────────────────────────────────── */
  function buildTopMeta(conversationLabel) {
    let label = "Cycle Industrie";
    if (conversationLabel) {
      const short = conversationLabel.split(/\s*[:]\s*/)[0].trim();
      label = short.length > 2 ? short : "Cycle Industrie";
    }
    if (label.length > 28) label = label.slice(0, 26).trimEnd() + "…";
    return `${safe(label)} · Page privée`;
  }

  /* ─────────────────────────────────────────────────────────
     KICKER HERO — court, sans le titre d'angle
  ───────────────────────────────────────────────────────── */
  function buildHeroKicker(conversationLabel) {
    let label = "Cycle Industrie";
    if (conversationLabel) {
      const short = conversationLabel.split(/\s*[:]\s*/)[0].trim();
      label = short.length > 2 ? short : "Cycle Industrie";
      if (label.length > 32) label = label.slice(0, 30).trimEnd() + "…";
    }
    return `<p class="landing-kicker">Saison inaugurale · ${safe(label)}</p>`;
  }

  /* ─────────────────────────────────────────────────────────
     MAPPING MÉDIA → IMAGE
     BFM Business → /images/emission-1.jpg
     Le Figaro    → /images/emission-3.jpg
     La Tribune   → /images/emission-4.jpg
  ───────────────────────────────────────────────────────── */
  function getEmissionImagePath(media) {
    const m = norm(media);
    if (m.includes("bfm"))     return "/images/emission-1.jpg";
    if (m.includes("figaro"))  return "/images/emission-3.jpg";
    if (m.includes("tribune")) return "/images/emission-4.jpg";
    return null;
  }

  /* ─────────────────────────────────────────────────────────
     BLOC FILM ÉMISSION — style home
     Image unique B&W dans le cadre .landing-film
     (reprend exactement le CSS .home-film mais en classe
     .landing-film pour rester dans le namespace landing)
     + légende journaliste / outlet sous l'image
  ───────────────────────────────────────────────────────── */
  function buildFilmBlock(angle) {
    const journaliste = txt(angle?.journaliste, "");
    const emission    = txt(angle?.emission, "");
    const media       = txt(angle?.media, "");
    const imgPath     = media ? getEmissionImagePath(media) : null;

    if (!imgPath) return "";

    // Les trois champs restent dynamiques : journaliste, émission et média.
    // On affiche l’émission lorsque le référentiel la fournit, pour éviter tout effet de légende générique.
    const outletParts = [emission, media].filter(Boolean);
    const outletLabel = outletParts.length ? outletParts.join(" · ") : "format média";
    const altLabel    = journaliste && outletParts.length
      ? `Entretien économique avec ${journaliste} · ${outletParts.join(" · ")}`
      : (outletParts.length ? outletParts.join(" · ") : "Format média");

    return `
      <div class="landing-film" aria-label="${safe(altLabel)}">
        <div class="landing-film-track">
          <div>
            <img
              src="${safe(imgPath)}"
              alt="${safe(altLabel)}"
              loading="eager"
            >
          </div>
        </div>
      </div>
      <div class="landing-film-caption">
        ${journaliste ? `<strong>${safe(journaliste)}</strong>` : ""}
        <span>${safe(outletLabel)}</span>
      </div>`;
  }

  /* ─────────────────────────────────────────────────────────
     SIGNAL DE RARETÉ — texte corrigé
  ───────────────────────────────────────────────────────── */
  function buildRaritySignal(readingLabel) {
    const reading = readingDisplay(readingLabel || "cette lecture").toLowerCase();
    return `
      <div class="landing-rarity">
        <span class="landing-rarity__dot" aria-hidden="true"></span>
        <p>Plusieurs acteurs peuvent être pressentis pour une même lecture.
          <strong>Une seule position ${safe(reading)}</strong> sera retenue,
          en cohérence avec les autres lectures mises en regard.</p>
      </div>`;
  }

  /* ─────────────────────────────────────────────────────────
     BLOC IDENTITÉ HERO (carte)
     Ordre dans la carte :
       1. Proposition adressée à (nom · rôle · org)
       2. Lecture proposée
       3. Signal de rareté
     (L'émission est maintenant AU-DESSUS de la carte, pas dedans)
  ───────────────────────────────────────────────────────── */
  function buildIdentityLine(personName, personRole, organisationName, readingLabel) {
    const hasRealName = personName && personName !== "Intervenant pressenti";
    const hasRealOrg  = organisationName && organisationName !== "Votre organisation";

    const parts = [
      hasRealName ? safe(personName) : null,
      personRole  ? safe(personRole)  : null,
      hasRealOrg  ? safe(organisationName) : null
    ].filter(Boolean);

    return `
      <div class="landing-identity landing-identity--single">
        <span>Position pressentie pour</span>
        <strong>${parts.join(" · ")}</strong>
      </div>

      <div class="landing-identity">
        <span>Lecture pressentie</span>
        <strong>${safe(soften(readingLabel)) || "Lecture éditoriale"}</strong>
      </div>

      ${buildRaritySignal(readingLabel)}`;
  }

  /* ─────────────────────────────────────────────────────────
     INTRO HERO
  ───────────────────────────────────────────────────────── */
  function buildHeroIntro(personRole, organisationName, readingLabel) {
    const org = organisationName && organisationName !== "Votre organisation" ? organisationName : "votre organisation";
    const role = personRole ? `votre fonction de <strong>${safe(personRole)}</strong>` : "votre fonction";
    const reading = readingLabel || "cette lecture";

    return `<p class="landing-lead">
      Nous pensons que ${role} chez <strong>${safe(org)}</strong> peut contribuer à la pertinence éditoriale de cette conversation.
      <strong>${safe(org)}</strong> pourrait y apporter une <strong>${safe(readingPhrase(reading))}</strong> sur les arbitrages que cette conversation cherche à rendre lisibles.
    </p>
    <p class="landing-lead landing-lead--compact">
      Un échange éditorial de 15 minutes permettrait de vérifier l'intérêt commun de poursuivre, de préciser la position possible et de confirmer les conditions de préparation.
    </p>`;
  }

  function buildHeroCardIntro(readingLabel) {
    const reading = readingLabel || "lecture éditoriale";
    return `Une seule position ${safe(readingDisplay(reading).toLowerCase())} sera retenue dans cette conversation, en cohérence avec les autres lectures mises en regard.`;
  }

  function buildPositionPathSection(readingLabel) {
    const reading = readingLabel || "lecture éditoriale";
    const intro = `En Plateau part de votre expérience, de vos convictions et de votre lecture du sujet. Le dispositif structure cette matière autour d'un angle qualifié, de plusieurs dimensions de décision et d'une mise en regard avec d'autres lectures complémentaires.`;
    return `
      <section class="landing-section landing-section--dark" id="experience-position">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Lecture située</p>
            <h2>De votre expérience à une contribution qui prend sa portée.</h2>
            <p>${safe(intro)}</p>
          </div>
          <div class="landing-grid landing-grid--3">
            ${card("Ce que vous apportez", "Une expérience située du sujet", "Votre expérience du sujet, votre responsabilité, vos convictions et votre compréhension des conditions réelles dans lesquelles se construisent les arbitrages industriels.")}
            ${card("Ce qu'En Plateau structure", "Un angle, une lecture et des arbitrages", "Le contexte, les acteurs concernés, les arbitrages, les défis, la vision et l'échelle permettent de transformer une lecture en contribution préparée.")}
            ${card("Ce que cela produit", "Une contribution reconnaissable par les bons interlocuteurs", `Une position claire, crédible et mobilisable dans la durée, depuis une ${safe(soften(reading))}, auprès des acteurs qui rencontrent les mêmes arbitrages.`, true)}
          </div>
        </div>
      </section>`;
  }

  /* ─────────────────────────────────────────────────────────
     NARRATION "POURQUOI VOUS"
  ───────────────────────────────────────────────────────── */
  function buildWhyNarrative(why, organisationName, personName, personRole, positionWhy, actorType) {
    const hasRealOrg  = organisationName && organisationName !== "Votre organisation";
    const hasRealName = personName && personName !== "Intervenant pressenti";

    const orgFragment = why.organisation
      ? shortText(why.organisation, 300)
      : hasRealOrg
        ? `${organisationName} a été identifié pour la manière dont son expérience permet d'éclairer une question que de nombreux acteurs du cycle partagent sans pouvoir toujours la formuler.`
        : "L'organisation identifiée permet d'éclairer, depuis une position opérationnelle réelle, les conditions qui rendent une trajectoire industrielle lisible.";

    const personFragment = (() => {
      if (why.person && hasRealName)
        return shortText(sanitizePersonFragment(why.person), 300);
      if (hasRealName && personRole)
        return "Votre position donne accès à une lecture située : ce qu'elle permet de rendre lisible, de structurer, de sécuriser ou de mettre en perspective dans cette trajectoire.";
      if (isOperationalRole(personRole) && hasRealName)
        return "Votre position place cette lecture au niveau où certains arbitrages concrets se forment : flux, coordination, montée en capacité, stabilité d'exécution.";
      return "";
    })();

    const positionFragment = why.position
      ? shortText(why.position, 300)
      : positionWhy
        ? shortText(positionWhy, 300)
        : actorType === "cabinet_conseil"
          ? "Cette position éditoriale permet de formuler une lecture utile aux décideurs sans présenter une mission, une méthode ou un cas client."
          : "Cette position permettrait d'éclairer les conditions qui rendent une trajectoire industrielle réellement pilotable : arbitrer les priorités, coordonner les flux, préserver la lisibilité de la trajectoire.";

    return `
      <div class="landing-why-narrative">
        <p>${safe(orgFragment)}</p>
        ${personFragment ? `<p>${safe(personFragment)}</p>` : ""}
        <p>${safe(positionFragment)}</p>
      </div>`;
  }

  /* ─────────────────────────────────────────────────────────
     DG MESSAGE
  ───────────────────────────────────────────────────────── */
  function buildDGMessage(personaFit, reading, organisationName) {
    const hasRealOrg = organisationName && organisationName !== "Votre organisation";
    return txt(
      personaFit?.organizationLayer?.dgReadableMessage,
      reading?.motivationCentrale,
      hasRealOrg
        ? `La lecture portée depuis ${organisationName} rend visible ce que d'autres acteurs du cycle ne peuvent pas formuler depuis leur position. C'est précisément ce décalage de point de vue qui lui donne sa portée éditoriale.`
        : "Cette position permet de donner forme à une contribution reconnaissable par les bons interlocuteurs."
    );
  }

  /* ─────────────────────────────────────────────────────────
     GESTION ERREURS
  ───────────────────────────────────────────────────────── */
  function renderError(title, body) {
    root.innerHTML = `
      <section class="landing-loading">
        <div class="landing-loading__box">
          <a class="landing-brand landing-brand--loading" href="/" aria-label="En Plateau — accueil">En Plateau</a>
          <h1>${safe(title)}</h1>
          <p>${body}</p>
        </div>
      </section>`;
  }

  function renderInactiveDeal(bundle) {
    const deal = bundle.deal;
    const organisation = Core.getOrganisation(deal);
    const person       = Core.getPerson(deal);
    root.innerHTML = `
      <section class="landing-loading">
        <div class="landing-loading__box">
          <a class="landing-brand landing-brand--loading" href="/" aria-label="En Plateau — accueil">En Plateau</a>
          <h1>Cette position n'est plus activable.</h1>
          <p>
            Le deal <strong>${safe(Core.getDealId(deal) || bundle.dealId)}</strong>
            ${organisation.name ? `lié à <strong>${safe(organisation.name)}</strong>` : ""}
            ${person.fullName  ? ` / <strong>${safe(person.fullName)}</strong>`       : ""}
            est conservé comme trace CRM, mais ne doit pas être présenté comme landing prospect.
            <br><br>Motif : ${safe(Core.getExclusionReason(deal))}
          </p>
        </div>
      </section>`;
  }

  /* ─────────────────────────────────────────────────────────
     RENDER PRINCIPAL
  ───────────────────────────────────────────────────────── */
  function render(bundle) {
    const { deal, angle, reading, conversation, context, landingPage } = bundle;

    if (!deal) {
      renderError("Proposition introuvable",
        `Aucun contenu personnalisé ne correspond à l'identifiant indiqué dans l'URL.<br><br>Identifiant reçu : <strong>${safe(bundle.dealId || "aucun")}</strong>.`);
      return;
    }
    if (Core.isExcludedDeal(deal)) { renderInactiveDeal(bundle); return; }
    if (!angle) {
      renderError("Angle éditorial introuvable",
        `Le deal est reconnu, mais son angle éditorial n'a pas été retrouvé.<br><br>Code angle détecté : <strong>${safe(Core.getAngleCodeFromDeal(deal) || "non renseigné")}</strong>.`);
      return;
    }

    const person         = Core.getPerson(deal);
    const organisation   = Core.getOrganisation(deal);
    const actorType      = Core.getActorType(deal);
    const why            = Core.getWhy(deal);
    const personaFit     = Core.getPersonaFit(angle);
    const publicAngle    = angle.anglePublic || angle.formulationVariants?.anglePublic || {};
    const formulation    = Core.getFormulationLanding(angle);
    const cta            = getCTA(deal, reading, landingPage);

    const organisationName  = txt(organisation.name, "Votre organisation");
    const personName        = txt(person.fullName,   "Intervenant pressenti");
    const personRole        = cleanRole(person.role, organisationName);
    const readingLabel      = displayReadingLabel(reading, angle, deal, personRole);
    const contextLabel      = soften(txt(context?.label, deal?.editorialContext?.contexteTitre, "Contexte éditorial"));
    const conversationLabel = getConversationLabel(conversation, deal);
    const heroTitle = txt(
      conversation?.title,
      conversationLabel,
      "Cycle Industrie & transformation des territoires"
    );

    const positionWhy = txt(publicAngle.promesseIntervenant, formulation.promesseIntervenant, why.position, "");

    const speakerMotivation = txt(
      personaFit?.speakerPersona?.motivation, reading?.motivationCentrale,
      "Faire reconnaître une lecture claire, crédible et utile à votre écosystème."
    );

    const dgMessage    = buildDGMessage(personaFit, reading, organisationName);
    const valueCards   = getValueCards(landingPage, reading, readingLabel, actorType, personRole);
    const guarantees   = getGuarantees(publicAngle, landingPage, personaFit);
    const processSteps = getProcessSteps(landingPage);
    const faq          = getFAQ(readingLabel, actorType, personRole, landingPage);

    const complementaryAngles = toArray(angle.complementaryCodes)
      .map(code => Core.getAngleByCode(code))
      .filter(other => other && norm(other.typeLecture) !== norm(angle.typeLecture))
      .slice(0, 3);

    /* ── COLONNE DROITE HERO ──────────────────────────────
       1. Bloc film B&W (image émission + légende)
       2. Carte hero (motivation + identité + rareté)
    ────────────────────────────────────────────────────── */
    const filmBlock = buildFilmBlock(angle);

    root.innerHTML = `
      <div class="landing-top">
        <div class="landing-top__inner">
          <a class="landing-brand" href="/" aria-label="En Plateau — accueil">En Plateau</a>
          <div class="landing-top__meta">${buildTopMeta(conversationLabel)}</div>
        </div>
      </div>

      <section class="landing-hero">
        <div class="landing-container">
          <div class="landing-hero__grid">

            <!-- COLONNE GAUCHE : titre + lead + CTA -->
            <div>
              ${buildHeroKicker(conversationLabel)}
              <h1>${safe(soften(heroTitle))}</h1>
              ${buildHeroIntro(personRole, organisationName, readingLabel)}
              <div class="landing-actions">
                <a class="landing-btn" href="${safe(cta.href)}">${safe(cta.label)}</a>
                <a class="landing-btn landing-btn--ghost" href="#mise-en-regard">Voir la position proposée</a>
              </div>
              <p class="landing-reassurance">15 minutes · sans engagement · pour qualifier l'angle, le périmètre de parole et les conditions de préparation.</p>
            </div>

            <!-- COLONNE DROITE : film > carte -->
            <aside class="landing-hero-side">
              ${filmBlock}
              <div class="landing-hero__card landing-hero-position-card">
                <h2>Position pressentie</h2>
                <span class="landing-label">${safe(soften(readingLabel))}</span>
                <h3>${safe(soften(angleTitle(angle, publicAngle, formulation)))}</h3>
                <p>${safe(shortText(angleDescription(angle, publicAngle, formulation), 380))}</p>
                <div class="landing-identity landing-identity--single">
                  <span>Intervenant pressenti</span>
                  <strong>${safe([personName, personRole].filter(Boolean).join(" · "))}</strong>
                </div>
                <div class="landing-identity landing-identity--single">
                  <span>Organisation</span>
                  <strong>${safe(organisationName)}</strong>
                </div>
                ${buildRaritySignal(readingLabel)}
              </div>
            </aside>

          </div>
        </div>
      </section>

      ${buildConversationBentoSection(angle, publicAngle, formulation, conversationLabel, contextLabel, personName, personRole, organisationName, readingLabel, complementaryAngles)}

      <section class="landing-section landing-section--light" id="cadre-confiance">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Cadre de confiance</p>
            <h2>Une contribution cadrée, pas improvisée.</h2>
            <p>Les points sensibles sont traités avant toute prise de parole : confidentialité, temps mobilisé, périmètre de l'échange et validation interne éventuelle.</p>
          </div>
          <div class="landing-grid landing-grid--4 landing-trust-grid">
            ${guarantees.map(item => card("", item.title, item.text, false, "landing-card--trust")).join("")}
          </div>
          <div class="landing-inline-cta">
            <a class="landing-btn" href="${safe(cta.href)}">${safe(cta.label)}</a>
            <p class="landing-reassurance landing-reassurance--light">Aucun dossier à préparer · Aucune donnée confidentielle attendue</p>
          </div>
        </div>
      </section>

      <section class="landing-section landing-section--light" id="pourquoi-vous">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Pertinence</p>
            <h2>Pourquoi cette lecture vous est proposée.</h2>
            <p>Une position En Plateau ne désigne pas seulement une fonction ou un métier. Elle désigne ce qu'une expérience permet de rendre lisible depuis un endroit précis.</p>
          </div>
          <div class="landing-why-box">
            ${buildWhyNarrative(why, organisationName, personName, personRole, positionWhy, actorType)}
          </div>
        </div>
      </section>

      <section class="landing-section landing-section--dark" id="valeur-position">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Portée de la position</p>
            <h2>Ce que produit une contribution En Plateau.</h2>
            <p>${safe(shortText(txt(landingPage?.valueSection?.intro, "Une contribution bien préparée ne cherche pas seulement à être vue. Elle permet d'installer une lecture, de rendre une trajectoire plus lisible et de créer une trace publique qui continue de travailler dans la durée."), 560))}</p>
          </div>
          <div class="landing-grid landing-grid--3 landing-grid--value">
            ${valueCards.map((item) => card(item.label, item.title, item.text)).join("")}
          </div>
          <div class="landing-inline-cta landing-inline-cta--dark">
            <a class="landing-btn" href="${safe(cta.href)}">${safe(cta.label)}</a>
            <p class="landing-reassurance">L'échange sert uniquement à qualifier la pertinence de la position.</p>
          </div>
        </div>
      </section>

      <section class="landing-section landing-section--light landing-more-intro" id="cadre-editorial">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Pour aller plus loin</p>
            <h2>Vous voulez mieux comprendre le cadre éditorial avant de programmer un échange éditorial&nbsp;?</h2>
          </div>
        </div>
      </section>

      ${buildPositionPathSection(readingLabel)}

      <section class="landing-section landing-section--light" id="angle-propose">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Ce que cette position permettrait d'éclairer</p>
            <h2>${safe(soften(txt(publicAngle.titreLanding, formulation.title, angle.questionPublique, angle.titreAngle, angle.questionEditoriale)))}</h2>
            <p>${safe(shortText(txt(publicAngle.accrocheLanding, formulation.accrocheLanding, angle.questionActivation, angle.texteProgramme, angle.introMecanisme), 680))}</p>
          </div>
          <div class="landing-grid landing-grid--3">
            ${card("Conversation", conversationLabel, txt(conversation?.narrativeText, conversation?.description, "Une conversation construite pour mettre en regard des lectures complémentaires."))}
            ${card("Votre lecture", "Ce qu'elle rend lisible", dgMessage)}
            ${card("Préparation", "Un cadrage éditorial maîtrisé", "L'échange permet de préciser le sujet, la portée de la lecture et les conditions de préparation avec vos équipes si nécessaire.")}
          </div>
        </div>
      </section>

      ${processSteps.length ? `
        <section class="landing-section landing-section--dark landing-section--process">
          <div class="landing-container">
            <div class="landing-head">
              <p class="landing-kicker">Comment cela va se passer</p>
              <h2>Un parcours clair, sans engagement initial.</h2>
              <p>L'échange de départ ne vaut pas engagement. Il permet de situer la lecture puis, si la pertinence est confirmée, d'articuler cadrage éditorial, production média et activation de la contribution.</p>
            </div>
            <div class="landing-grid landing-grid--4 landing-process-grid">
              ${processSteps.map(item => `
                <article class="landing-card landing-process-card">
                  <span class="landing-label">${safe(item.num || "Étape")}</span>
                  <h3>${safe(soften(item.title))}</h3>
                  <p>${safe(shortText(item.text, 420))}</p>
                  ${item.deadline ? `<p class="landing-process-deadline">${safe(item.deadline)}</p>` : ""}
                </article>`).join("")}
            </div>
          </div>
        </section>` : ""}

      ${faq.length ? `
        <section class="landing-section landing-section--dark">
          <div class="landing-container">
            <div class="landing-head">
              <p class="landing-kicker">Questions fréquentes</p>
              <h2>Les points à clarifier avant l'échange.</h2>
            </div>
            <div class="landing-grid landing-grid--2">
              ${faq.map(item => card("", item.question, item.answer)).join("")}
            </div>
          </div>
        </section>` : ""}

      <section class="landing-section landing-final">
        <div class="landing-container">
          <h2>${safe(soften(cta.title))}</h2>
          <p>${safe(shortText(cta.text, 460))}</p>
          <div class="landing-actions">
            <a class="landing-btn" href="${safe(cta.href)}">${safe(cta.label)}</a>
          </div>
          <p class="landing-reassurance">
            ${safe(txt(cta.deadline, "15 minutes · sans engagement"))}
            ${cta.footnote ? " · " + safe(cta.footnote) : ""}
          </p>
        </div>
      </section>
    `;
  }

  render(Core.getDealBundle());
})();
