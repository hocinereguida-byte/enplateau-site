/*
  En Plateau — render-landing.js
  BUILD — 20260516-PISTES-COMPLEMENTAIRES

  Objet : remplace la section post-hero "Conversation composée" par une section Bento
  "Votre place dans la conversation".

  Marqueurs de vérification :
  - const BENTO_BUILD_20260515_MISE_EN_REGARD_EDITORIALE = true;
  - buildConversationBentoSection(...)
  - <section class="landing-bento-section" id="mise-en-regard">

  Ne modifie pas :
  - editorial-data-industrie-v67.js
  - render-core.js
*/

(function () {
  "use strict";

  const BENTO_BUILD_20260515_MISE_EN_REGARD_EDITORIALE = true;
  console.info("En Plateau — render-landing plus loin + pistes build 20260516-1735 loaded");

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


  function normalizeDisplayName(value) {
    const raw = String(value || "").replace(/\s+/g, " ").trim();
    if (!raw) return "";
    if (raw === "Votre organisation" || raw === "Intervenant pressenti") return raw;

    const keepUpper = new Set([
      "BFM", "TV", "RH", "DG", "DAF", "DRH", "PDG", "CEO", "CFO", "COMEX",
      "RSE", "ETI", "PME", "IA", "KEA", "EDF", "SNCF", "CEA", "CNRS", "BPI"
    ]);
    const smallWords = new Set(["de", "du", "des", "la", "le", "les", "et", "à", "au", "aux", "d", "l"]);

    function formatToken(token, index) {
      const clean = token.replace(/[’']/g, "");
      if (!clean) return token;
      if (keepUpper.has(clean.toUpperCase())) return clean.toUpperCase();
      if (/^\d+$/.test(clean)) return token;
      if (smallWords.has(clean.toLowerCase()) && index > 0) return clean.toLowerCase();

      return token
        .split(/([\-’'])/)
        .map(part => {
          if (/^[\-’']$/.test(part)) return part;
          if (!part) return part;
          if (keepUpper.has(part.toUpperCase())) return part.toUpperCase();
          return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
        })
        .join("");
    }

    return raw
      .split(" ")
      .map((token, index) => token === "&" ? "&" : formatToken(token, index))
      .join(" ")
      .replace(/\bReguida\b/g, "Reguida")
      .trim();
  }


  function cleanListSeparators(value) {
    return String(value || "")
      .replace(/\s*[\/]\s*/g, ", ")
      .replace(/\s*;\s*/g, ", ")
      .replace(/\s*,\s*,\s*/g, ", ")
      .replace(/\s+et\s+,\s+/gi, " et ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function humanizeCommaList(value) {
    const parts = cleanListSeparators(value).split(/\s*,\s*/).map(x => x.trim()).filter(Boolean);
    if (parts.length <= 1) return parts[0] || "";
    if (parts.length === 2) return parts.join(" et ");
    return parts.slice(0, -1).join(", ") + " et " + parts[parts.length - 1];
  }

  function extractWhyDomains(value) {
    const match = String(value || "").match(/ses métiers\s*\(([^)]+)\)/i);
    if (!match || !match[1]) return "";
    return cleanListSeparators(match[1])
      .replace(/,\s*\)/g, "")
      .replace(/,\s*$/g, "")
      .trim();
  }

  function extractWhyScale(value) {
    const match = String(value || "").match(/périmètre[^()]*\(([^)]+)\)/i);
    if (!match || !match[1]) return "";
    return humanizeCommaList(match[1]).toLowerCase();
  }

  function editorializeWhyOrganisation(value, organisationName, readingLabel = "") {
    let v = cleanListSeparators(soften(value || ""));
    const org = organisationName && organisationName !== "Votre organisation" ? organisationName : "L’organisation";
    if (!v) return "";

    const domains = extractWhyDomains(v);
    const scale = extractWhyScale(v);
    const isCabinet = /\best\s+pertinent(?:e)?\s+comme\s+cabinet(?:\s+de\s+conseil)?\b/i.test(v);
    const isGenericPertinence = /\best\s+pertinent(?:e)?\s+comme\b/i.test(v);

    if (domains) {
      const domainsText = humanizeCommaList(domains).replace(/^./, c => c.toLowerCase());
      if (isCabinet) {
        return `${org} dispose d’un point d’observation utile : ses interventions en ${domainsText} lui permettent de comparer plusieurs trajectoires industrielles sans réduire l’analyse à un seul cas.${scale ? ` Son échelle d’intervention ${scale} renforce cette capacité de comparaison.` : ""}`;
      }
      if (isGenericPertinence) {
        return `${org} offre un point d’observation utile sur l’écosystème industriel : ses activités en ${domainsText} l’exposent aux transformations en cours, aux acteurs concernés, aux arbitrages de trajectoire et aux effets d’échelle que cette conversation cherche à rendre lisibles.${scale ? ` Son périmètre ${scale} permet de relier cette lecture à plusieurs niveaux de décision.` : ""}`;
      }
    }

    if (isCabinet) {
      v = v.replace(/^.*?\best\s+pertinent(?:e)?\s+comme\s+cabinet(?:\s+de\s+conseil)?\s+parce\s+que\s*/i, `${org} dispose d’un point d’observation utile : `);
    }

    return v;
  }

  function cleanRole(role, organisationName) {
    let cleaned = String(role || "").replace(/\s+/g, " ").trim();
    const org = String(organisationName || "").replace(/\s+/g, " ").trim();
    const orgTokens = org ? org.toLowerCase().split(/\s+/).filter(t => t.length > 2) : [];
    if (!cleaned) return "";

    if (org) {
      const escapedOrg = org.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      cleaned = cleaned
        .replace(new RegExp("\\s*[—–-]\\s*" + escapedOrg + "\\s*$", "i"), "")
        .replace(new RegExp("\\s+chez\\s+" + escapedOrg + "\\s*$", "i"), "");

      const segments = cleaned.split(/\s*,\s*/).filter(Boolean);
      if (segments.length > 1 && orgTokens.length) {
        const kept = segments.filter((segment, index) => {
          if (index === 0) return true;
          const s = segment.toLowerCase();
          return !orgTokens.some(token => s.includes(token));
        });
        cleaned = kept.join(", ");
      }
    }

    // Sécurité supplémentaire : certains postes CRM contiennent une entité
    // après une virgule, par exemple "Directeur Industriel & Supply Chain, Safran Aircraft Engines".
    // On retire ces segments lorsqu'ils ressemblent à une organisation ou reprennent
    // une partie du nom de l'organisation, afin d'éviter le doublon avec la ligne entreprise.
    const roleKeywords = /(directeur|directrice|responsable|chief|head|vp|vice|président|president|partner|associé|associe|manager|lead|officer|conseil|consultant|expert|ingénieur|ingenieur|industrial|supply|finance|juridique|rh|operations|opérations|marketing|communication|strategy|stratégie)/i;
    const companyMarkers = /(sa|sas|sasu|groupe|group|holding|industries|systems|systèmes|engine|engines|aircraft|partners|consulting|conseil|cabinet|france|international|technologies|technology|aerospace|engineering|energy|énergie)$/i;
    if (cleaned.includes(",")) {
      const parts = cleaned.split(/\s*,\s*/).filter(Boolean);
      const filtered = parts.filter((part, index) => {
        if (index === 0) return true;
        const lower = part.toLowerCase();
        const repeatsOrg = org && norm(part).includes(norm(org));
        const orgTokenHit = orgTokens?.some(token => lower.includes(token));
        const looksLikeCompany = companyMarkers.test(part.trim()) || /\b(engine|engines|aircraft|group|groupe|partners|engineering|systems|technologies)\b/i.test(part);
        const looksLikeRole = roleKeywords.test(part);
        return looksLikeRole && !repeatsOrg && !orgTokenHit && !looksLikeCompany;
      });
      cleaned = filtered.join(", ");
    }

    return cleaned.replace(/\s*,\s*$/, "").trim();
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
    if (n.includes("cabinet") || n.includes("conseil") || n.includes("expertise") || n.includes("avocat")) return "Pour votre organisation";
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
    const journaliste = normalizeDisplayName(txt(item?.journaliste, ""));
    const media = txt(item?.media, "");
    if (!journaliste && !media) return "";
    return [journaliste, media].filter(Boolean).join(" · ");
  }

  function castingItems() {
    return toArray(DATA?.casting?.castings || DATA?.castings || []);
  }

  function organisationsForAngle(angleCode, limit = 3, excludeOrgName = "") {
    const exclude = norm(excludeOrgName);
    const seen = new Set();
    return castingItems()
      .filter(item => String(item?.angleCode || "") === String(angleCode || ""))
      .map(item => normalizeDisplayName(txt(item?.organisation?.name, item?.organisationName, item?.orgName)))
      .filter(name => {
        const key = norm(name);
        if (!key || (exclude && key === exclude) || seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .slice(0, limit);
  }

  function normalizeReadingDisplay(value) {
    const raw = soften(String(value || "").replace(/^Lecture\s+/i, "")).trim();
    const key = norm(raw);

    if (!key) return "";
    if (key === "technologique / systemes" || key === "technologie / systemes" || key === "technologique systemes" || key === "technologie systemes") return "Technologique & systèmes";
    if (key === "rh / competences" || key === "rh competences" || key === "ressources humaines / competences" || key === "ressources humaines competences") return "RH";
    if (key === "de direction" || key === "direction" || key === "lecture stratégique") return "Stratégique";
    if (key === "strategique") return "Stratégique";
    if (key === "operationnelle" || key === "operations") return "Opérationnelle";
    if (key === "financiere" || key === "finance") return "Financière";
    if (key === "juridique" || key === "juridique / reglementaire") return "Juridique";
    if (key === "territoriale" || key === "territorial") return "Territoriale";
    if (key === "energie / ressources / decarbonation" || key === "energie / ressources") return "Énergie & ressources";

    return raw;
  }

  function readingDisplay(value) {
    return normalizeReadingDisplay(value);
  }

  function readingNoun(value) {
    const key = readingKey(value);
    const labels = {
      territoriale: "Territoires",
      strategique: "Stratégie",
      operationnelle: "Opérations",
      technologie: "Technologie",
      financiere: "Finance",
      juridique: "Droit",
      rh: "RH",
      energie: "Énergie"
    };
    return labels[key] || readingDisplay(value) || "Lecture";
  }

  function readingAdjective(value) {
    const key = readingKey(value);
    const labels = {
      territoriale: "territoriale",
      strategique: "stratégique",
      operationnelle: "opérationnelle",
      technologie: "technologique",
      financiere: "financière",
      juridique: "juridique",
      rh: "RH",
      energie: "énergie / ressources"
    };
    return labels[key] || String(readingDisplay(value) || "éditoriale").toLowerCase();
  }

  function readingPanelLabel(value) {
    const adj = readingAdjective(value);
    return adj === "RH" ? "Lecture RH" : `Lecture ${adj}`;
  }

  function readingPhrase(value) {
    const label = readingPanelLabel(value);
    return label ? label.toLowerCase().replace(/^lecture rh$/, "lecture RH") : "lecture éditoriale";
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
        ${orgs.length ? `<div class="landing-organisations"><span>Organisations positionnées</span><strong>${safe(orgs.join(" · "))}</strong></div>` : ""}
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

  function readingKey(value) {
    const key = norm(value || "").replace(/^lecture\s+/, "").trim();
    if (key.includes("territoire") || key.includes("territorial")) return "territoriale";
    if (key.includes("strateg")) return "strategique";
    if (key.includes("operation") || key.includes("production") || key.includes("supply")) return "operationnelle";
    if (key.includes("techno") || key.includes("systeme") || key.includes("data") || key.includes("numerique")) return "technologie";
    if (key.includes("finance")) return "financiere";
    if (key.includes("jurid")) return "juridique";
    if (key.includes("rh") || key.includes("competence")) return "rh";
    if (key.includes("energie") || key.includes("ressource") || key.includes("carbone")) return "energie";
    return "default";
  }

  function readingContributionLine(readingLabel, fallback = "") {
    const lines = {
      territoriale: "La lecture des conditions territoriales : foncier, friches, infrastructures, ancrage et décision locale.",
      strategique: "La lecture stratégique : trajectoire, gouvernance et décision industrielle.",
      operationnelle: "La lecture du réel industriel : flux, qualité, maintenance, coordination et capacité de pilotage.",
      technologie: "La lecture des architectures techniques : systèmes, données, interfaces et lisibilité de l’action.",
      financiere: "La lecture économique : investissement, marges de manœuvre, risque et soutenabilité.",
      juridique: "La lecture de sécurisation : responsabilité, cadre, conformité et arbitrages de risque.",
      rh: "La lecture des compétences : métiers, collectifs, engagement et capacité de transformation.",
      energie: "La lecture des ressources : énergie, eau, carbone, matières et conditions de continuité."
    };
    return lines[readingKey(readingLabel)] || shortText(fallback, 220) || "Une lecture complémentaire pour éclairer le même moment de transformation industrielle.";
  }

  function primaryReadingValue(readingLabel, fallback = "") {
    const lines = {
      territoriale: "Éclairer les conditions territoriales qui rendent une trajectoire industrielle possible, soutenable ou réorientable.",
      strategique: "Éclairer le moment où une trajectoire industrielle oblige à arbitrer autrement.",
      operationnelle: "Éclairer le moment où le pilotage opérationnel révèle une transformation plus profonde.",
      technologie: "Éclairer quand les systèmes, données et interfaces deviennent décisifs pour la trajectoire industrielle.",
      financiere: "Éclairer les conditions économiques qui rendent une transformation industrielle tenable.",
      juridique: "Éclairer comment le cadre juridique sécurise les arbitrages industriels avant qu’ils ne deviennent des risques.",
      rh: "Éclairer comment les compétences et les collectifs conditionnent réellement la transformation industrielle.",
      energie: "Éclairer comment l’énergie, l’eau, le carbone ou les matières deviennent des conditions de continuité industrielle."
    };
    return lines[readingKey(readingLabel)] || shortText(fallback, 220) || "Éclairer une condition décisive de transformation industrielle depuis une position située.";
  }

  function readingTags(readingLabel) {
    const tags = {
      territoriale: ["Foncier", "Friches", "Infrastructures", "Ancrage"],
      strategique: ["Trajectoire", "Gouvernance", "Arbitrage", "Décision"],
      operationnelle: ["Flux", "Qualité", "Maintenance", "Coordination"],
      technologie: ["Systèmes", "Données", "Interfaces", "Architecture"],
      financiere: ["Investissement", "Marge", "Risque", "Soutenabilité"],
      juridique: ["Cadre", "Responsabilité", "Conformité", "Risque"],
      rh: ["Métiers", "Compétences", "Collectifs", "Engagement"],
      energie: ["Énergie", "Eau", "Carbone", "Matières"]
    };
    return tags[readingKey(readingLabel)] || ["Angle", "Lecture", "Arbitrage", "Trajectoire"];
  }

  function dealItemsForAngle(angleCode, limit = 4, excludeOrgName = "") {
    const exclude = norm(excludeOrgName);
    const seen = new Set();
    return castingItems()
      .filter(item => String(item?.angleCode || "") === String(angleCode || ""))
      .map(item => {
        const organisation = normalizeDisplayName(txt(item?.organisation?.name, item?.organisationName, item?.orgName));
        const person = normalizeDisplayName(txt(item?.person?.fullName, item?.person?.name, item?.personName, item?.name));
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


  function primaryOrganisationDisplay(name) {
    const clean = normalizeDisplayName(String(name || "").replace(/\s+/g, " ").trim());
    if (!clean) return "";
    // Certains champs CRM concatènent plusieurs organisations avec un slash.
    // Dans la colonne "Votre lecture", on ne montre que l'organisation du deal affiché.
    if (/\s+\/\s+/.test(clean)) return clean.split(/\s+\/\s+/)[0].trim();
    return clean;
  }

  function bentoDetail(title, body) {
    if (!body) return "";
    return `
      <details class="lpb-details">
        <summary>${safe(title)}</summary>
        <div>${body}</div>
      </details>`;
  }

  function readingsSentence(readingLabel, complementaryAngles) {
    const labels = [readingLabel, ...toArray(complementaryAngles).map(other => readingLabelForAngle(other))]
      .map(item => shortReadingLabel(item).toLowerCase())
      .filter(Boolean);
    const unique = [];
    labels.forEach(label => {
      if (!unique.some(existing => norm(existing) === norm(label))) unique.push(label);
    });
    if (!unique.length) return "plusieurs lectures complémentaires";
    if (unique.length === 1) return `une lecture ${unique[0]}`;
    if (unique.length === 2) return `une lecture ${unique[0]} et une lecture ${unique[1]}`;
    return unique.slice(0, -1).map(label => `une lecture ${label}`).join(", ") + ` et une lecture ${unique[unique.length - 1]}`;
  }

  function buildConversationTab(item, index, activeIndex) {
    const checked = index === activeIndex ? " checked" : "";
    const isPrimary = item.primary;
    const orgs = item.orgs.slice(0, 3).map(normalizeDisplayName);
    return `
      <input class="lpb-tab-input" type="radio" name="lpb-reading-tabs" id="lpb-reading-${index}"${checked}>
      <label class="lpb-reading-tab ${isPrimary ? "lpb-reading-tab--primary" : ""}" for="lpb-reading-${index}">
        <span>${safe(isPrimary ? "Votre lecture" : "Lecture complémentaire")}</span>
        <strong>${safe(readingNoun(item.readingLabel))}</strong>
        <em>${safe(readingTags(item.readingLabel).slice(0, 3).join(" · "))}</em>
        <small>${orgs.length ? safe(orgs.join(" · ")) : "Organisations positionnées en qualification"}</small>
        ${item.media ? `<i>${safe(item.media)}</i>` : ""}
      </label>`;
  }

  function buildConversationPanel(item, index) {
    const orgs = item.orgs.slice(0, 3).map(normalizeDisplayName);
    const panelLabel = readingPanelLabel(item.readingLabel);
    const title = txt(item.title, item.primary ? primaryReadingValue(item.readingLabel, item.text) : readingContributionLine(item.readingLabel, item.text));
    const description = item.primary
      ? `Cette ${panelLabel.toLowerCase().replace("lecture rh", "lecture RH")} constitue la position proposée à votre organisation dans la composition éditoriale.`
      : `Cette ${panelLabel.toLowerCase().replace("lecture rh", "lecture RH")} complète la composition éditoriale en apportant un autre point d’observation sur le même moment de transformation industrielle.`;
    const value = item.text || (item.primary ? primaryReadingValue(item.readingLabel, item.text) : readingContributionLine(item.readingLabel, item.text));
    const orgLabel = item.primary || orgs.length === 1 ? "Organisation positionnée" : "Organisations positionnées";

    return `
      <article class="lpb-reading-panel lpb-reading-panel--${index} ${item.primary ? "lpb-reading-panel--primary" : ""}">
        <div class="lpb-panel-main">
          <span class="lpb-label">${safe(panelLabel)}</span>
          <h3>${safe(shortText(title, 260))}</h3>
          <p class="lpb-panel-value">${safe(shortText(value, 520))}</p>
          <p class="lpb-panel-context">${safe(description)}</p>
        </div>
        <div class="lpb-panel-aside">
          <div class="lpb-panel-block">
            <span>${safe(orgLabel)}</span>
            <div class="lpb-chip-list">${listInline(orgs, "Organisations en qualification")}</div>
          </div>
          ${item.media ? `<div class="lpb-panel-block lpb-panel-block--media"><span>Journaliste / média</span><strong>${safe(item.media)}</strong>${productionDetailsLines()}</div>` : ""}
        </div>
      </article>`;
  }

  function buildConversationBentoSection(angle, publicAngle, formulation, conversationLabel, contextLabel, personName, personRole, organisationName, readingLabel, complementaryAngles, currentDeal) {
    const reading = readingAdjective(readingLabel);
    const title = `Votre lecture ${reading} prend sa valeur dans une conversation composée.`;
    const sentence = readingsSentence(readingLabel, complementaryAngles);

    const primaryItem = {
      primary: true,
      readingLabel,
      title: angleTitle(angle, publicAngle, formulation),
      text: angleDescription(angle, publicAngle, formulation),
      orgs: [primaryOrganisationDisplay(organisationName)].filter(Boolean),
      media: mediaLineForAngle(angle)
    };

    const otherItems = complementaryAngles.map(other => {
      const c = other.complementaryCard || {};
      const otherPublic = other.anglePublic || other.formulationVariants?.anglePublic || {};
      const otherFormulation = Core.getFormulationLanding(other) || {};
      const otherReading = readingLabelForAngle(other);
      const deals = dealItemsForAngle(other.code, 3, organisationName);
      return {
        primary: false,
        readingLabel: otherReading,
        title: txt(c.title, otherPublic.titreLanding, otherFormulation.title, other.questionCourte, other.titreAngle, other.questionPublique),
        text: txt(c.headline, otherPublic.accrocheLanding, otherFormulation.accrocheLanding, other.ceQueCetteLecturePermetDeVoir, other.angleRendVisible),
        orgs: toArray(deals).map(item => item.organisation).filter(Boolean).slice(0, 3),
        media: mediaLineForAngle(other)
      };
    });

    const items = [primaryItem, ...otherItems].slice(0, 4);

    return `
      <section class="landing-bento-section landing-bento-section--tabs" id="mise-en-regard" data-bento-build="20260516-retours-hero-conversation-gains">
        <div class="landing-container lpb-container">
          <div class="lpb-head">
            <p class="lpb-kicker">Mise en regard éditoriale</p>
            <h2>${safe(title)}</h2>
            <p>Chaque intervenant participe séparément. La valeur naît ensuite de la mise en regard&nbsp;: ${safe(sentence)} éclairent le même moment de transformation industrielle.</p>
            <p class="lpb-subnote">Il ne s’agit pas d’une table ronde ni d’un débat contradictoire. Chaque contribution est préparée individuellement, puis articulée aux autres lectures.</p>
          </div>

          <div class="lpb-conversation-band" aria-label="Conversation stratégique">
            <span>Conversation stratégique</span>
            <strong>${safe(soften(heroConversationTitle(conversationLabel, angle)))}</strong>
          </div>

          <div class="lpb-tabs" aria-label="Les quatre lectures de la conversation">
            ${items.map((item, index) => buildConversationTab(item, index, 0)).join("")}
            <div class="lpb-tab-panels">
              ${items.map((item, index) => buildConversationPanel(item, index)).join("")}
            </div>
          </div>

          ${buildAlternativeEditorialTracksBlock(currentDeal, angle, organisationName)}
        </div>
      </section>`;
  }


  /* ─────────────────────────────────────────────────────────
     PISTES ÉDITORIALES COMPLÉMENTAIRES — même intervenant
     Principe : le deal affiché reste la position prioritaire.
     Les autres deals du même intervenant sont présentés comme
     pistes à évoquer si la première lecture n’est pas la bonne.
  ───────────────────────────────────────────────────────── */
  function allPersonalizedDeals() {
    const records = DATA?.dealPersonalization?.recordsByDealId || {};
    return Object.values(records).filter(Boolean);
  }

  function personIdentityKeyFromDeal(deal) {
    const person = deal?.person || {};
    const organisation = deal?.organisation || deal?.organization || {};
    return txt(
      person.id,
      person.linkedin,
      person.linkedinUrl,
      person.linkedin_url,
      person.email,
      person.mail,
      [person.fullName || person.name, organisation.name].filter(Boolean).join("|")
    );
  }

  function dealRankValue(deal) {
    const raw = txt(
      deal?.rang,
      deal?.rank,
      deal?.priorityRank,
      deal?.priority,
      deal?.activation?.rang,
      deal?.activation?.rank,
      deal?.activation?.priorityRank,
      deal?.crm?.rang,
      deal?.crm?.rank,
      deal?.["rang"],
      deal?.["Rang"],
      deal?.["Affaire - rang"],
      deal?.["Affaire – rang"]
    );
    const n = parseInt(String(raw || "").replace(/[^0-9]/g, ""), 10);
    return Number.isFinite(n) ? n : 999;
  }

  function getAlternativeDealsForPerson(currentDeal, limit = 3) {
    const currentId = Core.getDealId(currentDeal);
    const currentKey = norm(personIdentityKeyFromDeal(currentDeal));
    if (!currentKey) return [];

    return allPersonalizedDeals()
      .filter(deal => {
        if (!deal || Core.getDealId(deal) === currentId) return false;
        if (Core.isExcludedDeal(deal)) return false;
        return norm(personIdentityKeyFromDeal(deal)) === currentKey;
      })
      .map(deal => ({ deal, angle: Core.getAngleByCode(Core.getAngleCodeFromDeal(deal)) }))
      .filter(item => item.angle)
      .sort((a, b) => {
        const ra = dealRankValue(a.deal);
        const rb = dealRankValue(b.deal);
        if (ra !== rb) return ra - rb;
        return String(Core.getDealId(a.deal) || "").localeCompare(String(Core.getDealId(b.deal) || ""), "fr", { numeric: true });
      })
      .slice(0, limit);
  }

  function buildAltReadingCard(item, isPrimary, organisationName) {
    const label = isPrimary ? "Votre lecture" : "Lecture associée";
    const orgs = isPrimary
      ? [primaryOrganisationDisplay(organisationName)].filter(Boolean)
      : organisationsForAngle(item.code, 3, organisationName);
    return `
      <article class="lpb-alt-reading ${isPrimary ? "lpb-alt-reading--primary" : ""}">
        <span>${safe(label)}</span>
        <strong>${safe(readingNoun(readingLabelForAngle(item)))}</strong>
        <em>${safe(readingTags(readingLabelForAngle(item)).slice(0, 3).join(" · "))}</em>
        <small>${orgs.length ? safe(orgs.map(normalizeDisplayName).join(" · ")) : "Organisations en qualification"}</small>
        ${mediaLineForAngle(item) ? `<i>${safe(mediaLineForAngle(item))}</i>` : ""}
      </article>`;
  }

  function buildAlternativeTrackDetail(altDeal, altAngle) {
    const altOrg = Core.getOrganisation(altDeal);
    const organisationName = normalizeDisplayName(txt(altOrg.name, "Votre organisation"));
    const altConversation = getConversationLabel(Core.getConversation(altAngle), altDeal);
    const altReading = displayReadingLabel(Core.getReadingByCode(altDeal?.editorialContext?.typeLecture || altAngle?.typeLecture), altAngle, altDeal, Core.getPerson(altDeal)?.role);
    const publicAngle = altAngle.anglePublic || altAngle.formulationVariants?.anglePublic || {};
    const formulation = Core.getFormulationLanding(altAngle) || {};
    const title = angleTitle(altAngle, publicAngle, formulation);
    const text = angleDescription(altAngle, publicAngle, formulation);
    const complementary = toArray(altAngle.complementaryCodes)
      .map(code => Core.getAngleByCode(code))
      .filter(other => other && norm(other.typeLecture) !== norm(altAngle.typeLecture))
      .slice(0, 3);
    const items = [altAngle, ...complementary].slice(0, 4);

    return `
      <div class="lpb-alt-detail">
        <div class="lpb-alt-conversation-band">
          <span>Conversation stratégique</span>
          <strong>${safe(heroConversationTitle(altConversation, altAngle))}</strong>
        </div>
        <div class="lpb-alt-detail-head">
          <span>${safe(readingPanelLabel(altReading))}</span>
          <h4>${safe(shortText(title, 260))}</h4>
          <p>${safe(shortText(text || "Cette piste complète la composition éditoriale en apportant un autre point d’observation sur le même sujet.", 420))}</p>
        </div>
        <div class="lpb-alt-reading-grid">
          ${items.map((item, index) => buildAltReadingCard(item, index === 0, organisationName)).join("")}
        </div>
      </div>`;
  }

  function buildAlternativeEditorialTracksBlock(currentDeal, currentAngle, organisationName) {
    const alternatives = getAlternativeDealsForPerson(currentDeal, 3)
      .filter(item => Core.getAngleCodeFromDeal(item.deal) !== Core.getAngleCodeFromDeal(currentDeal));

    if (!alternatives.length) return "";

    const org = organisationName && organisationName !== "Votre organisation" ? organisationName : "votre organisation";

    return `
      <div class="lpb-alternatives" id="pistes-complementaires">
        <details class="lpb-alt-master">
          <summary>
            <span>D’autres angles de ce cycle pourraient également correspondre à ${safe(org)}</span>
            <strong>La position présentée ci-dessus reste la proposition prioritaire.</strong>
          </summary>
          <div class="lpb-alt-intro">
            <p>D’autres angles sont encore en cours de composition. Ils pourront être évoqués lors de l’échange éditorial s’ils correspondent mieux à votre lecture, à votre fonction ou au niveau d’exposition souhaité.</p>
          </div>
          <div class="lpb-alt-list">
            ${alternatives.map(({ deal, angle }) => {
              const altReading = displayReadingLabel(Core.getReadingByCode(deal?.editorialContext?.typeLecture || angle?.typeLecture), angle, deal, Core.getPerson(deal)?.role);
              const publicAngle = angle.anglePublic || angle.formulationVariants?.anglePublic || {};
              const formulation = Core.getFormulationLanding(angle) || {};
              const title = angleTitle(angle, publicAngle, formulation);
              return `
                <details class="lpb-alt-item">
                  <summary>
                    <span>Piste en cours de composition</span>
                    <strong>${safe(shortText(title, 190))}</strong>
                    <em>${safe(readingPanelLabel(altReading))}</em>
                  </summary>
                  ${buildAlternativeTrackDetail(deal, angle)}
                </details>`;
            }).join("")}
          </div>
        </details>
      </div>`;
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



  function personaValueChips(personaKey, groupe, slot, readingLabel) {
    const key = personaKey || "default";
    const reading = readingKey(readingLabel || "");
    const baseBySlot = {
      organisation: ["Reconnaissance", "Crédibilité", "Conversation"],
      fonction: ["Point d’observation", "Arbitrage", "Lecture située"],
      personne: ["Trace", "Réutilisation", "Crédibilité"]
    };
    const industrial = {
      DG: {
        organisation: ["Trajectoire", "Arbitrage", "Vision"],
        fonction: ["Direction", "Gouvernance", "Décision"],
        personne: ["Trace", "Crédibilité", "Influence utile"]
      },
      DAF: {
        organisation: ["Soutenabilité", "Investissement", "Risque"],
        fonction: ["Arbitrage", "Financement", "Trajectoire"],
        personne: ["Trace", "Crédibilité", "Lecture économique"]
      },
      DRH: {
        organisation: ["Compétences", "Collectifs", "Transmission"],
        fonction: ["Métiers", "Engagement", "Adaptation"],
        personne: ["Trace", "Crédibilité", "Lecture RH"]
      },
      DIR_JURIDIQUE: {
        organisation: ["Cadre", "Responsabilité", "Sécurisation"],
        fonction: ["Risques", "Conformité", "Décision"],
        personne: ["Trace", "Crédibilité", "Lecture juridique"]
      },
      DIR_INDUSTRIEL: {
        organisation: ["Exécution", "Flux", "Pilotage"],
        fonction: ["Opérations", "Qualité", "Coordination"],
        personne: ["Trace", "Crédibilité", "Lecture terrain"]
      },
      default: {
        organisation: ["Trajectoire", "Arbitrage", "Écosystème"],
        fonction: ["Point d’observation", "Décision", "Échelle"],
        personne: ["Trace", "Crédibilité", "Usage durable"]
      }
    };
    const eclaireur = {
      conseil: {
        organisation: ["Comparaison", "Doctrine", "Décideurs"],
        fonction: ["Méthode", "Marché", "Arbitrage"],
        personne: ["Trace", "Crédibilité", "Relations dirigeants"]
      },
      avocat: {
        organisation: ["Cadre", "Doctrine", "Sécurisation"],
        fonction: ["Droit", "Responsabilité", "Risque"],
        personne: ["Trace", "Crédibilité", "Clients décideurs"]
      },
      ingenierie: {
        organisation: ["Faisabilité", "Projet", "Système"],
        fonction: ["Technique", "Interfaces", "Conditions réelles"],
        personne: ["Trace", "Crédibilité", "Donneurs d’ordre"]
      },
      default: {
        organisation: ["Comparaison", "Expertise", "Décideurs"],
        fonction: ["Pratique", "Doctrine", "Arbitrage"],
        personne: ["Trace", "Crédibilité", "Relations qualifiées"]
      }
    };
    const readingFallback = {
      territoriale: {
        organisation: ["Foncier", "Ancrage", "Acteurs publics"],
        fonction: ["Territoires", "Conditions locales", "Décision"],
        personne: ["Trace", "Crédibilité", "Lecture territoriale"]
      },
      technologie: {
        organisation: ["Systèmes", "Données", "Interfaces"],
        fonction: ["Architecture", "Lisibilité", "Continuité"],
        personne: ["Trace", "Crédibilité", "Lecture technologique"]
      },
      energie: {
        organisation: ["Énergie", "Ressources", "Continuité"],
        fonction: ["Matières", "Carbone", "Arbitrage"],
        personne: ["Trace", "Crédibilité", "Lecture ressources"]
      }
    };
    const source = groupe === "eclaireur" ? (eclaireur[key] || eclaireur.default) : (industrial[key] || industrial.default);
    return (source && source[slot]) || readingFallback[reading]?.[slot] || baseBySlot[slot] || [];
  }

  function cleanGainChips(chips, personaKey, groupe, slot, readingLabel) {
    const personaChips = personaValueChips(personaKey, groupe, slot, readingLabel);
    const current = toArray(chips).filter(Boolean);
    const generic = ["stature", "institutionnel", "strategique", "stratégique", "interne", "reutilisation", "réutilisation"];
    const looksGeneric = current.length < 3 || current.some(chip => generic.includes(norm(chip)));
    if (looksGeneric) return personaChips.slice(0, 3);
    return current.slice(0, 3);
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

  function gainTagLabel(type) {
    const key = norm(type || "");
    if (key.includes("institution")) return "Institutionnel";
    if (key.includes("strateg")) return "Stratégique";
    if (key.includes("interne")) return "Interne";
    if (key.includes("different")) return "Différenciation";
    if (key.includes("reutil")) return "Réutilisation";
    if (key.includes("stature")) return "Stature";
    return soften(type || "Gain");
  }

  function matchGainItem(item, words) {
    const hay = norm([item?.type, item?.texte].join(" "));
    return words.some(word => hay.includes(norm(word)));
  }

  function pickGainItems(items, groups, max = 3) {
    const source = toArray(items);
    const picked = [];
    const seen = new Set();

    groups.forEach(words => {
      const found = source.find(item => matchGainItem(item, words));
      if (found) {
        const key = norm(found.type || found.texte);
        if (key && !seen.has(key)) {
          seen.add(key);
          picked.push(found);
        }
      }
    });

    source.forEach(item => {
      if (picked.length >= max) return;
      const key = norm(item.type || item.texte);
      if (key && !seen.has(key)) {
        seen.add(key);
        picked.push(item);
      }
    });

    return picked.slice(0, max);
  }

  function pickGainItemsDistinct(items, groups, max = 3, globalSeen = new Set()) {
    const source = toArray(items);
    const picked = [];

    function itemKey(item) {
      return norm([item?.type, item?.texte, item?.text].join(" "));
    }

    groups.forEach(words => {
      if (picked.length >= max) return;
      const found = source.find(item => {
        const key = itemKey(item);
        return key && !globalSeen.has(key) && matchGainItem(item, words);
      });
      if (found) {
        const key = itemKey(found);
        globalSeen.add(key);
        picked.push(found);
      }
    });

    source.forEach(item => {
      if (picked.length >= max) return;
      const key = itemKey(item);
      if (key && !globalSeen.has(key)) {
        globalSeen.add(key);
        picked.push(item);
      }
    });

    return picked.slice(0, max);
  }

  function dedupeDetails(details, localFallbacks = []) {
    const seen = new Set();
    const out = [];
    toArray(details).forEach(detail => {
      const key = norm([detail?.label, detail?.text].join(" "));
      if (!key || seen.has(key)) return;
      seen.add(key);
      out.push(detail);
    });
    toArray(localFallbacks).forEach(detail => {
      const key = norm([detail?.label, detail?.text].join(" "));
      if (!key || seen.has(key)) return;
      seen.add(key);
      out.push(detail);
    });
    return out.slice(0, 3);
  }

  function compactValueText(item, fallback) {
    return shortText(txt(item?.texte, item?.text, fallback), 220);
  }

  function isTerritorialExpertiseContext(readingLabel, organisationName, why, angle) {
    const hay = norm([
      readingLabel,
      organisationName,
      why?.organisation,
      why?.person,
      why?.position,
      angle?.titreAngle,
      angle?.questionPublique,
      angle?.questionActivation,
      angle?.ceQueCetteLecturePermetDeVoir,
      angle?.angleRendVisible
    ].join(" "));

    return (
      hay.includes("territorial") ||
      hay.includes("territoire") ||
      hay.includes("foncier") ||
      hay.includes("friche") ||
      hay.includes("depollution") ||
      hay.includes("reconversion") ||
      hay.includes("ancrage")
    );
  }

  function buildTerritorialExpertiseValueCards(organisationName, personName, personRole, readingLabel) {
    const org = organisationName && organisationName !== "Votre organisation" ? organisationName : "Votre organisation";
    const person = personName && personName !== "Intervenant pressenti" ? personName : "l’intervenant pressenti";
    const role = personRole ? `, ${personRole},` : "";
    const reading = readingDisplay(readingLabel || "territoriale").toLowerCase();

    return [
      {
        label: `Pour ${org}`,
        title: "Faire reconnaître le territoire comme condition industrielle",
        text: "Montrer que foncier, friches, dépollution, réseaux et ancrage ne sont pas des sujets périphériques, mais des conditions concrètes de continuité, de transformation ou de réorientation industrielle.",
        chips: ["Reconnaissance", "Crédibilité", "Conversation"],
        details: [
          { label: "Stature", text: "Installer une lecture territoriale au même niveau que les lectures stratégique, opérationnelle ou technologique." },
          { label: "Différenciation", text: "Se distinguer sans discours promotionnel, par la capacité à rendre visible une condition souvent peu formulée de l’industrie." },
          { label: "Institutionnel", text: "Produire un actif mobilisable auprès des industriels, collectivités, institutions, partenaires économiques et acteurs territoriaux." }
        ]
      },
      {
        label: "Pour votre expertise territoriale",
        title: "Rendre lisible une compétence rarement visible",
        text: "Faire apparaître la capacité à relier décisions industrielles, foncier, reconversion, infrastructures, acteurs publics et conditions collectives de décision.",
        chips: ["Lecture située", "Décision", "Territoires"],
        details: [
          { label: "Expertise", text: "Formuler ce que l’expérience du terrain, du foncier et des friches permet de comprendre des trajectoires industrielles." },
          { label: "Décision", text: "Montrer comment une trajectoire industrielle dépend aussi de conditions territoriales, réglementaires, infrastructurelles et collectives." },
          { label: "Territoires", text: "Rendre lisible le rôle des écosystèmes locaux, des réseaux, de l’ancrage et des conditions de réinscription des sites." }
        ]
      },
      {
        label: "Pour l’intervenant",
        title: "Laisser une trace professionnelle utile",
        text: `${person}${role} peut porter une lecture crédible sur les conditions territoriales de l’industrie, sans exposer de projet sensible, de négociation locale ou de dossier confidentiel.`,
        chips: ["Trace", "Crédibilité", "Usage durable"],
        details: [
          { label: "Trace", text: "Une parole préparée, publique et durable, attachée à une lecture précise plutôt qu’à une opération identifiable." },
          { label: "Crédibilité", text: `Une contribution qui fait reconnaître une ${reading} sans survente ni prise de parole corporate classique.` },
          { label: "Réutilisation", text: "Un contenu mobilisable ensuite en rendez-vous, relations institutionnelles, prospection qualifiée, événements ou communication dirigeante." }
        ]
      }
    ];
  }

  function getValueCards(landingPage, reading, readingLabel, actorType, personRole, context = {}) {
    const rtData     = getReadingType(readingLabel || reading?.code || reading?.label || "");
    const groupe     = detectProfilGroupe(actorType);
    const personaKey = detectPersonaType(personRole, actorType);
    const gainsV2    = rtData?.gainsParProfilV2;

    if (isTerritorialExpertiseContext(readingLabel, context.organisationName, context.why, context.angle)) {
      return buildTerritorialExpertiseValueCards(
        context.organisationName,
        context.personName,
        personRole,
        readingLabel
      );
    }

    if (gainsV2?.[groupe]) {
      const groupData   = gainsV2[groupe];
      const personaData = groupData[personaKey] || groupData["default"];
      const items       = toArray(personaData?.gainsItems);

      if (personaData) {
        const usedGainItems = new Set();
        const orgItems = pickGainItemsDistinct(items, [["stature"], ["institution"], ["different"]], 3, usedGainItems);
        const functionItems = pickGainItemsDistinct(items, [["strateg"], ["interne"], ["arbitr"], ["doctrine"], ["pratique"]], 3, usedGainItems);
        const personItems = pickGainItemsDistinct(items, [["reutil"], ["trace"], ["relation"], ["dirigeant"]], 3, usedGainItems);

        const isEclaireur = groupe === "eclaireur";
        const isAvocat = personaKey === "avocat";
        const isIngenierie = personaKey === "ingenierie";
        const orgName = context.organisationName && context.organisationName !== "Votre organisation" ? context.organisationName : "votre organisation";

        return [
          {
            label: isEclaireur ? (isAvocat ? "Pour votre cabinet" : isIngenierie ? "Pour votre ingénierie" : "Pour votre cabinet") : `Pour ${orgName}`,
            title: isEclaireur
              ? "Installer une lecture propriétaire, sans discours promotionnel"
              : "Faire reconnaître une capacité de lecture stratégique",
            text: shortText(personaData.gain, 280),
            chips: cleanGainChips(orgItems.map(item => gainTagLabel(item.type)), personaKey, groupe, "organisation", readingLabel),
            details: dedupeDetails(
              orgItems.map(item => ({ label: gainTagLabel(item.type), text: compactValueText(item, personaData.detail) })),
              [
                { label: "Reconnaissance", text: "Faire reconnaître une lecture utile sans transformer la contribution en discours promotionnel." },
                { label: "Crédibilité", text: "Inscrire l’organisation dans une conversation structurante avec d’autres lectures complémentaires." },
                { label: "Conversation", text: "Créer un point d’appui éditorial mobilisable auprès d’interlocuteurs qualifiés." }
              ]
            )
          },
          {
            label: isEclaireur ? (isAvocat ? "Pour votre doctrine juridique" : isIngenierie ? "Pour votre expertise projet" : "Pour votre doctrine") : "Pour votre fonction",
            title: isEclaireur
              ? "Rendre lisible ce que votre pratique sait formuler"
              : "Rendre visible ce que votre fonction arbitre",
            text: compactValueText(functionItems[0], "Faire apparaître ce que votre fonction voit, arbitre ou sécurise dans la transformation."),
            chips: cleanGainChips(functionItems.map(item => gainTagLabel(item.type)), personaKey, groupe, "fonction", readingLabel),
            details: dedupeDetails(
              functionItems.map(item => ({ label: gainTagLabel(item.type), text: compactValueText(item, personaData.detail) })),
              [
                { label: "Point d’observation", text: "Rendre visible ce que la fonction permet de comprendre, de relier ou d’arbitrer." },
                { label: "Lecture située", text: "Formuler une analyse depuis une responsabilité réelle, pas depuis une opinion générale." },
                { label: "Arbitrage", text: "Montrer les décisions, tensions ou conditions qui rendent la trajectoire plus lisible." }
              ]
            )
          },
          {
            label: isEclaireur ? (isAvocat ? "Pour vos clients décideurs" : "Pour vos relations dirigeants") : "Pour vous",
            title: "Laisser une trace professionnelle utile",
            text: compactValueText(personItems[0], "Créer un actif éditorial préparé, durable et mobilisable dans la durée."),
            chips: cleanGainChips(personItems.map(item => gainTagLabel(item.type)), personaKey, groupe, "personne", readingLabel),
            details: dedupeDetails(
              personItems.map(item => ({ label: gainTagLabel(item.type), text: compactValueText(item, personaData.detail) })),
              [
                { label: "Trace", text: "Laisser une contribution préparée, durable et attachée à une lecture précise." },
                { label: "Réutilisation", text: "Pouvoir réutiliser cette lecture dans des échanges dirigeants, institutionnels ou commerciaux qualifiés." },
                { label: "Crédibilité personnelle", text: "Porter une parole utile sans exposition inutile ni posture promotionnelle." }
              ]
            )
          }
        ];
      }
    }

    const rtGains = toArray(rtData?.gainsParProfil).map(item => ({
      label: item.profil, title: item.gain,
      text: typeof item.detail === "string" ? item.detail : Array.isArray(item.detail) ? item.detail.join(" ") : ""
    }));
    if (rtGains.length >= 3) {
      const selected = rtGains.slice(0, 3);
      return [
        { label: "Pour votre organisation", title: selected[0]?.title, text: selected[0]?.text, chips: ["Reconnaissance", "Crédibilité", "Conversation"] },
        { label: "Pour votre fonction", title: selected[2]?.title || selected[1]?.title, text: selected[2]?.text || selected[1]?.text, chips: ["Point d’observation", "Arbitrage", "Lecture située"] },
        { label: "Pour vous", title: selected[3]?.title || "Trace durable et réutilisable", text: selected[3]?.text || selected[1]?.text, chips: ["Trace", "Réutilisation", "Crédibilité"] }
      ];
    }

    const pageCards = toArray(landingPage?.valueSection?.cards).map(item => ({
      label: item.label || item.profil,
      title: item.title || item.gain,
      text:  item.text  || (Array.isArray(item.detail) ? item.detail.join(" ") : item.detail)
    }));
    if (pageCards.length >= 3) {
      return [
        { label: "Pour votre organisation", title: pageCards[0].title, text: pageCards[0].text, chips: ["Reconnaissance", "Crédibilité", "Conversation"] },
        { label: "Pour votre fonction", title: pageCards[1].title, text: pageCards[1].text, chips: ["Point d’observation", "Arbitrage", "Lecture située"] },
        { label: "Pour vous", title: pageCards[2].title, text: pageCards[2].text, chips: ["Trace", "Réutilisation", "Crédibilité"] }
      ];
    }

    return [
      {
        label: "Pour votre organisation",
        title: "Faire reconnaître une lecture utile",
        text: actorType === "cabinet_conseil"
          ? "Installer une parole d'autorité sans vendre directement une offre."
          : "Valoriser une capacité à rendre lisibles les conditions réelles d'une trajectoire industrielle.",
        chips: ["Reconnaissance", "Crédibilité", "Conversation"]
      },
      {
        label: "Pour votre fonction",
        title: "Rendre visible ce que votre fonction arbitre",
        text: "Faire apparaître ce que votre fonction voit, arbitre ou sécurise.",
        chips: ["Point d’observation", "Arbitrage", "Lecture située"]
      },
      {
        label: "Pour vous",
        title: "Laisser une trace professionnelle utile",
        text: "Créer un actif éditorial préparé, durable et mobilisable dans la durée.",
        chips: ["Trace", "Réutilisation", "Crédibilité"]
      }
    ];
  }

  function buildValueCard(item) {
    const fallbackChips = norm(item?.label).includes("vous")
      ? ["Trace", "Réutilisation", "Crédibilité"]
      : norm(item?.label).includes("fonction") || norm(item?.label).includes("doctrine") || norm(item?.label).includes("expertise")
        ? ["Point d’observation", "Arbitrage", "Lecture située"]
        : ["Reconnaissance", "Crédibilité", "Conversation"];
    const chips = (toArray(item?.chips).filter(Boolean).length ? toArray(item?.chips).filter(Boolean) : fallbackChips).slice(0, 4);
    const details = toArray(item?.details).filter(d => d?.text).slice(0, 4);

    return `
      <article class="landing-card landing-value-card">
        ${item?.label ? `<span class="landing-label">${safe(item.label)}</span>` : ""}
        ${item?.title ? `<h3>${safe(soften(item.title))}</h3>` : ""}
        ${item?.text ? `<p>${safe(shortText(item.text, 320))}</p>` : ""}
        ${chips.length ? `<div class="value-chip-list">${chips.map(chip => `<span>${safe(chip)}</span>`).join("")}</div>` : ""}
        ${details.length ? `
          <details class="value-details">
            <summary><span class="value-details-open">Ce que cela produit concrètement</span><span class="value-details-close">Masquer les effets concrets</span></summary>
            <ul>
              ${details.map(detail => `<li><strong>${safe(detail.label)}</strong><span>${safe(detail.text)}</span></li>`).join("")}
            </ul>
          </details>` : ""}
      </article>`;
  }


  function buildQualificationCTASection(cta, organisationName, readingLabel) {
    return `
      <section class="landing-section landing-section--dark landing-qualification-cta landing-qualification-cta--final" id="qualifier-position">
        <div class="landing-container">
          <div class="qualification-cta-grid qualification-cta-grid--split">
            <aside class="qualification-cta-signature" aria-label="En Plateau">
              <figure class="qualification-cta-photo">
                <img src="/images/a-propos/hocine-reguida.jpg" alt="Hocine Reguida, En Plateau" loading="lazy">
              </figure>
              <p class="qualification-cta-identity">Hocine Réguida · En Plateau · Conception et coordination éditoriale</p>
              <p>Une position éditoriale se vérifie dans un échange court. La suite reste une décision.</p>
            </aside>

            <div class="qualification-cta-main">
              <p class="landing-kicker">Échange éditorial</p>
              <h2>Certaines positions méritent simplement d’être discutées.</h2>
              <p>L’échange permet de vérifier si la lecture envisagée mérite d’être structurée dans le cadre du cycle. Il ne demande aucune préparation particulière et peut associer, si nécessaire, les équipes communication, affaires publiques ou juridiques.</p>
              <div class="landing-actions qualification-cta-actions">
                <a class="landing-btn" href="${safe(cta.href)}">${safe(cta.label || "Programmer un échange éditorial - 15 min")}</a>
              </div>
              <p class="qualification-cta-microcopy">15 minutes · sans engagement · aucune suite automatique</p>
            </div>
          </div>

          <div class="qualification-cta-more-link">
            <a href="#pour-aller-plus-loin">Vous souhaitez approfondir le cadre avant de réserver un échange éditorial ?</a>
          </div>
        </div>
      </section>`;
  }

  function getCTA(deal, reading, landingPage) {
    const pageCTA = landingPage?.cta || {};
    return {
      href: "https://cal.com/en-plateau/echange-editorial-15-min",
      label: "Programmer un échange éditorial - 15 min",
      title:    "Qualifier cette lecture en échange éditorial",
      text:     txt(pageCTA.text, "15 minutes, sans engagement, pour qualifier l'angle, le périmètre de parole et les conditions de préparation."),
      deadline: txt(pageCTA.deadline, ""),
      footnote: txt(pageCTA.footnote, "Échange sans engagement")
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
     BANDEAU — saison inaugurale et composition
  ───────────────────────────────────────────────────────── */
  function buildTopMeta(conversationLabel) {
    return `<span>Saison inaugurale · Cycle Industrie</span><span>Positions en cours de composition jusqu’au 30 juin</span>`;
  }

  function sentenceCaseFirst(value) {
    const v = String(value || "").trim();
    if (!v) return "";
    return v.charAt(0).toUpperCase() + v.slice(1);
  }

  function canonicalConversationTitleFromAngle(angle, conversationLabel) {
    const code = String(angle?.code || angle?.codeAngle || angle?.id || "").toUpperCase();
    if (/C1/.test(code)) return "À partir de quand produire davantage oblige-t-il à arbitrer autrement ?";
    if (/C2/.test(code)) return "Où se situent les dépendances qui deviennent des moments de décision ?";
    if (/C3/.test(code)) return "Jusqu’où un outil industriel peut-il évoluer sans se transformer en profondeur ?";
    if (/C4/.test(code)) return "Qu’est-ce qui fait qu’une trajectoire industrielle tient, ou doit être réarbitrée ?";

    const n = norm(conversationLabel);
    if (n.includes("produire davantage") || n.includes("arbitrer autrement")) return "À partir de quand produire davantage oblige-t-il à arbitrer autrement ?";
    if (n.includes("dependances") || n.includes("moments de décision")) return "Où se situent les dépendances qui deviennent des moments de décision ?";
    if (n.includes("outil industriel") || n.includes("transformer en profondeur")) return "Jusqu’où un outil industriel peut-il évoluer sans se transformer en profondeur ?";
    if (n.includes("trajectoire industrielle tient") || n.includes("rearbitree")) return "Qu’est-ce qui fait qu’une trajectoire industrielle tient, ou doit être réarbitrée ?";

    return sentenceCaseFirst(String(stripConversationCode(conversationLabel || "Conversation En Plateau"))
      .replace(/^\s*(Croissance industrielle|Dépendances industrielles|Dependances industrielles|Adaptation industrielle|Réinvention industrielle|Reinvention industrielle)\s*:\s*/i, "")
      .trim());
  }

  function heroConversationTitle(conversationLabel, angle) {
    return canonicalConversationTitleFromAngle(angle, conversationLabel);
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
     HERO ALLÉGÉ — 20260515-0710
     Objectif : désirabilité + clarté + faible risque.
     Le hero ne porte plus toute l'explication du dispositif :
     la mise en regard, le cadre, la pertinence et les gains
     sont traités dans les sections qui suivent.
  ───────────────────────────────────────────────────────── */
  function buildHeroMetricCard(label, title, text, modifier = "") {
    if (!title && !text) return "";
    const classes = ["landing-hero-metric", modifier].filter(Boolean).join(" ");
    return `
      <article class="${classes}">
        <span>${safe(label)}</span>
        ${title ? `<strong>${safe(title)}</strong>` : ""}
        ${text ? `<em>${safe(text)}</em>` : ""}
      </article>`;
  }


  function buildHeroPersonCard(personName, personRole, organisationName) {
    const name = personName && personName !== "Intervenant pressenti" ? personName : "Intervenant pressenti";
    const role = personRole || "Fonction à préciser";
    const org  = organisationName && organisationName !== "Votre organisation" ? organisationName : "Organisation pressentie";
    return `
      <article class="landing-hero-person-card">
        <span>Intervenant(e) pressenti(e)</span>
        <strong>${safe(name)}</strong>
        <em>${safe(role)}</em>
        <em>${safe(org)}</em>
      </article>`;
  }

  function buildHeroVisual(angle) {
    const journaliste = normalizeDisplayName(txt(angle?.journaliste, ""));
    const media       = txt(angle?.media, "");
    const imgPath     = media ? getEmissionImagePath(media) : null;
    const altLabel    = [journaliste, media].filter(Boolean).join(" · ") || "Format média En Plateau";

    if (!imgPath) {
      return `<div class="landing-hero-visual landing-hero-visual--empty" aria-label="${safe(altLabel)}"></div>`;
    }

    return `
      <div class="landing-hero-visual" aria-label="${safe(altLabel)}">
        <img src="${safe(imgPath)}" alt="${safe(altLabel)}" loading="eager">
      </div>`;
  }

  function buildHeroMediaCaption(angle) {
    const journaliste = normalizeDisplayName(txt(angle?.journaliste, ""));
    const media = normalizeDisplayName(txt(angle?.media, ""));
    const identity = [journaliste, media].filter(Boolean).join(" · ");
    if (!identity) return "";

    return `
      <div class="landing-hero-media-caption landing-hero-media-caption--production">
        <strong>${safe(identity)}</strong>
        <span>Formats : entretien filmé + article associé</span>
        <span>Tournage : de juin à décembre 2026</span>
        <span>Diffusion : à partir de septembre 2026 · replay permanent</span>
      </div>`;
  }

  function productionDetailsLines() {
    return `
      <em>Formats : entretien filmé + article associé</em>
      <em>Tournage : de juin à décembre 2026</em>
      <em>Diffusion : à partir de septembre 2026 · replay permanent</em>`;
  }

  function readingKeyForHero(readingLabel) {
    const key = norm(readingLabel).replace(/^lecture\s+/, "").trim();

    // Les libellés CRM peuvent arriver sous des formes différentes :
    // "Financière", "Lecture financière", "RH / compétences", "Technologique / systèmes", etc.
    // La détection doit donc rester large pour éviter le fallback générique dans le hero.
    if (key.includes("financ") || key.includes("investissement") || key.includes("econom")) return "finance";
    if (key.includes("jurid") || key.includes("droit") || key.includes("reglement")) return "juridique";
    if (key.includes("rh") || key.includes("competence") || key.includes("metier") || key.includes("collectif")) return "rh";
    if (key.includes("operation") || key.includes("production") || key.includes("supply") || key.includes("execution")) return "operationnelle";
    if (key.includes("energie") || key.includes("ressource") || key.includes("carbone") || key.includes("decarbon") || key.includes("matiere")) return "energie";
    if (key.includes("territoire") || key.includes("territorial") || key.includes("foncier") || key.includes("friche")) return "territoriale";
    if (key.includes("techno") || key.includes("systeme") || key.includes("data") || key.includes("donnee") || key.includes("numerique") || key.includes("interface")) return "technologique";
    if (key.includes("strateg") || key.includes("direction") || key.includes("gouvernance") || key.includes("trajectoire")) return "strategique";
    return "default";
  }

  function buildHeroTitle(organisationName, readingLabel) {
    const org = organisationName && organisationName !== "Votre organisation" ? organisationName : "Votre organisation";
    const key = readingKeyForHero(readingLabel);
    const lines = {
      finance:       `${org} peut éclairer les choix d’investissement qui rendent une transformation industrielle tenable.`,
      juridique:     `${org} peut éclairer les cadres juridiques qui sécurisent les arbitrages industriels.`,
      operationnelle:`${org} peut éclairer les conditions d’exécution qui rendent la transformation industrielle réellement pilotable.`,
      rh:            `${org} peut éclairer le rôle des métiers, des compétences et des collectifs dans la transformation industrielle.`,
      energie:       `${org} peut éclairer les ressources, l’énergie et le carbone comme conditions de continuité industrielle.`,
      territoriale:  `${org} peut éclairer le rôle du territoire dans les trajectoires industrielles.`,
      technologique: `${org} peut éclairer le rôle des systèmes, des données et des interfaces dans la trajectoire industrielle.`,
      strategique:   `${org} peut éclairer les arbitrages structurants qui font évoluer une trajectoire industrielle.`,
      default:       `${org} peut éclairer une lecture utile dans une conversation stratégique à plusieurs voix.`
    };
    return lines[key] || lines.default;
  }

  function buildHeroLead(angle, readingLabel) {
    const key = readingKeyForHero(readingLabel);
    const custom = {
      finance:       "Une lecture financière sur les choix d’investissement, les marges de manœuvre et les conditions économiques qui rendent une trajectoire industrielle soutenable.",
      juridique:     "Une lecture juridique sur les cadres, responsabilités et risques qui sécurisent les arbitrages industriels.",
      operationnelle:"Une lecture opérationnelle sur la qualité, les flux, les priorités et les interfaces métiers qui conditionnent la montée en capacité.",
      rh:            "Une lecture RH sur les métiers, les compétences et les collectifs qui rendent une trajectoire industrielle possible, transmissible et pilotable.",
      energie:       "Une lecture énergie / ressources sur l’eau, l’énergie, les matières, le carbone et les conditions de continuité industrielle.",
      territoriale:  "Une lecture territoriale sur ce qui rend une trajectoire industrielle possible, soutenable ou réorientable : foncier, friches, infrastructures, ancrage et conditions de décision.",
      technologique: "Une lecture technologique sur les systèmes, les données et les interfaces qui conditionnent la trajectoire industrielle.",
      strategique:   "Une lecture stratégique sur les arbitrages qui font changer une trajectoire industrielle de nature."
    };

    return custom[key] || shortText(txt(angle?.anglePublic?.accrocheLanding, angle?.questionActivation, angle?.introMecanisme, angle?.texteProgramme), 240);
  }

  function buildHeroReadingLine(readingLabel) {
    const key = readingKeyForHero(readingLabel);
    const lines = {
      finance:       "Rendre visibles les conditions économiques d’une trajectoire industrielle tenable.",
      juridique:     "Sécuriser les arbitrages avant qu’ils ne deviennent des risques.",
      operationnelle:"Faire reconnaître l’exécution comme lieu réel de transformation.",
      rh:            "Éclairer le rôle des compétences, métiers et collectifs dans la transformation.",
      energie:       "Relier continuité industrielle, ressources, énergie et carbone.",
      territoriale:  "Faire reconnaître le territoire comme condition réelle de trajectoire industrielle.",
      technologique: "Rendre visibles les systèmes et interfaces qui conditionnent la trajectoire.",
      strategique:   "Installer une lecture stratégique sur les arbitrages structurants."
    };
    return lines[key] || "Faire reconnaître une lecture utile, située et préparée.";
  }

  function buildHeroAngleKeywords(readingLabel) {
    const key = readingKeyForHero(readingLabel);
    const lines = {
      finance:       "Investissement · CAPEX · soutenabilité",
      juridique:     "Droit · risques · responsabilités",
      operationnelle:"Qualité · flux · priorités",
      rh:            "Métiers · compétences · collectifs",
      energie:       "Énergie · ressources · continuité",
      territoriale:  "Foncier · friches · ancrage",
      technologique: "Systèmes · données · interfaces",
      strategique:   "Trajectoire · arbitrages · décision"
    };
    return lines[key] || "Angle · lecture · arbitrage";
  }

  function buildHeroAngleLine(angle, readingLabel) {
    const key = readingKeyForHero(readingLabel);
    const lines = {
      finance:       "Les conditions économiques qui rendent une trajectoire industrielle soutenable.",
      juridique:     "Les cadres qui rendent les décisions industrielles plus robustes.",
      operationnelle:"Les conditions d’exécution qui rendent une montée en capacité pilotable.",
      rh:            "Les conditions humaines qui rendent une transformation réellement tenable.",
      energie:       "Les ressources qui deviennent des conditions de continuité industrielle.",
      territoriale:  "Les conditions territoriales qui rendent une trajectoire industrielle possible, soutenable ou réorientable.",
      technologique: "Les systèmes et interfaces qui conditionnent la trajectoire industrielle.",
      strategique:   "Les arbitrages qui changent la nature d’une trajectoire industrielle."
    };
    return lines[key] || shortText(txt(angle?.anglePublic?.accrocheLanding, angle?.questionActivation, angle?.introMecanisme), 180);
  }

  function buildHeroMinimalSection(angle, conversationLabel, contextLabel, personName, personRole, organisationName, readingLabel, cta) {
    const readingShort = readingDisplay(readingLabel || "lecture éditoriale");
    const mediaCaption = buildHeroMediaCaption(angle);
    const conversationText = heroConversationTitle(conversationLabel || "Conversation En Plateau", angle);

    return `
      <section class="landing-hero landing-hero--bento-minimal landing-hero--simplified">
        <div class="landing-container landing-hero-bento-container">
          <div class="landing-hero-bento-grid">

            <div class="landing-hero-bento-copy">
              <p class="landing-hero-conversation landing-hero-conversation--kicker"><span>Conversation stratégique</span><strong>${safe(soften(conversationText))}</strong></p>
              <h1>${safe(buildHeroTitle(organisationName, readingLabel))}</h1>
              <p class="landing-hero-bento-lead">${safe(buildHeroLead(angle, readingLabel))}</p>

              <div class="landing-hero-bento-actions">
                <a class="landing-btn" href="${safe(cta.href)}">${safe(cta.label || "Programmer un échange éditorial - 15 min")}</a>
                <a class="landing-hero-secondary-link" href="#mise-en-regard">Voir les 4 lectures de la conversation</a>
              </div>

              <p class="landing-hero-bento-proof">Position en cours de composition · Sans engagement · Périmètre préparé</p>
            </div>

            <aside class="landing-hero-bento-side">
              ${buildHeroVisual(angle)}

              <div class="landing-hero-metrics landing-hero-metrics--three" aria-label="Repères clés de la proposition éditoriale">
                ${buildHeroPersonCard(personName, personRole, organisationName)}
                ${buildHeroMetricCard("Lecture proposée", readingShort, buildHeroReadingLine(readingLabel))}
                ${mediaCaption}
                ${buildHeroMetricCard("Échange éditorial", "15 minutes", "Vérifier l’angle, le périmètre de parole et l’intérêt de poursuivre.", "landing-hero-metric--accent")}
              </div>
            </aside>

          </div>
        </div>
      </section>`;
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
     NARRATION "POURQUOI VOUS" — version pertinence située
     3 niveaux : organisation / position d'observation / lecture proposée.
  ───────────────────────────────────────────────────────── */
  function whyTagsForReading(readingLabel, slot, why = {}) {
    const r = norm(readingLabel);
    const source = norm([why.organisation, why.person, why.position].join(" "));

    if (r.includes("territ") || source.includes("foncier") || source.includes("friche")) {
      if (slot === "organisation") return ["Dépollution", "Recyclage foncier", "Friches industrielles"];
      if (slot === "person") return ["Foncier", "Infrastructures", "Ancrage territorial"];
      return ["Lecture territoriale", "Angle limité", "Mécanisme public"];
    }

    if (r.includes("financ")) {
      if (slot === "organisation") return ["Soutenabilité", "Investissement", "Risque économique"];
      if (slot === "person") return ["Arbitrages", "Marge de manœuvre", "Long terme"];
      return ["Lecture financière", "Angle limité", "Mécanisme public"];
    }

    if (r.includes("jurid")) {
      if (slot === "organisation") return ["Responsabilité", "Cadres", "Sécurisation"];
      if (slot === "person") return ["Anticipation", "Risques", "Gouvernance"];
      return ["Lecture juridique", "Angle limité", "Mécanisme public"];
    }

    if (r.includes("operation") || r.includes("production")) {
      if (slot === "organisation") return ["Flux", "Qualité", "Continuité"];
      if (slot === "person") return ["Pilotage", "Interfaces", "Exécution"];
      return ["Lecture opérationnelle", "Angle limité", "Mécanisme public"];
    }

    if (r.includes("rh") || r.includes("competence")) {
      if (slot === "organisation") return ["Compétences", "Collectifs", "Métiers"];
      if (slot === "person") return ["Organisation", "Engagement", "Transmission"];
      return ["Lecture RH", "Angle limité", "Mécanisme public"];
    }

    if (r.includes("techn") || r.includes("system")) {
      if (slot === "organisation") return ["Systèmes", "Données", "Interfaces"];
      if (slot === "person") return ["Architecture", "Lisibilité", "Continuité"];
      return ["Technologique & systèmes", "Angle limité", "Mécanisme public"];
    }

    if (r.includes("energie") || r.includes("ressource")) {
      if (slot === "organisation") return ["Énergie", "Ressources", "Continuité"];
      if (slot === "person") return ["Arbitrages", "Contraintes", "Trajectoire"];
      return ["Lecture ressources", "Angle limité", "Mécanisme public"];
    }

    if (r.includes("strateg")) {
      if (slot === "organisation") return ["Trajectoire", "Arbitrage", "Gouvernance"];
      if (slot === "person") return ["Décision", "Vision", "Priorités"];
      return ["Lecture stratégique", "Angle limité", "Mécanisme public"];
    }

    if (slot === "organisation") return ["Expérience", "Légitimité", "Sujet partagé"];
    if (slot === "person") return ["Point d’observation", "Fonction", "Lecture située"];
    return ["Lecture proposée", "Angle limité", "Mécanisme public"];
  }

  function tagsHTML(tags) {
    const clean = toArray(tags).slice(0, 4).filter(Boolean);
    if (!clean.length) return "";
    return `<div class="landing-why-tags">${clean.map(tag => `<span>${safe(tag)}</span>`).join("")}</div>`;
  }

  function whyOrganisationTitle(readingLabel, why = {}) {
    const r = norm(readingLabel);
    const source = norm(why.organisation || "");
    if (r.includes("territ") || source.includes("foncier") || source.includes("friche")) return "Foncier, friches, reconversion";
    if (r.includes("financ")) return "Soutenabilité, investissement, arbitrages";
    if (r.includes("jurid")) return "Responsabilité, cadres, sécurisation";
    if (r.includes("operation") || r.includes("production")) return "Pilotage, flux, continuité";
    if (r.includes("rh") || r.includes("competence")) return "Compétences, métiers, collectifs";
    if (r.includes("techn") || r.includes("system")) return "Systèmes, données, interfaces";
    if (r.includes("energie") || r.includes("ressource")) return "Énergie, ressources, continuité";
    if (r.includes("strateg")) return "Trajectoire, arbitrages, décision";
    return "Une expérience utile à la conversation";
  }

  function whyPersonTitle(readingLabel) {
    const r = norm(readingLabel);
    if (r.includes("territ")) return "Relier décisions industrielles et conditions territoriales";
    if (r.includes("financ")) return "Relier trajectoire industrielle et soutenabilité économique";
    if (r.includes("jurid")) return "Relier décisions industrielles et cadres de responsabilité";
    if (r.includes("operation") || r.includes("production")) return "Relier stratégie industrielle et réalité d’exécution";
    if (r.includes("rh") || r.includes("competence")) return "Relier transformation industrielle et conditions humaines";
    if (r.includes("techn") || r.includes("system")) return "Relier trajectoire industrielle et architectures techniques";
    if (r.includes("energie") || r.includes("ressource")) return "Relier continuité industrielle et ressources critiques";
    if (r.includes("strateg")) return "Relier trajectoire, gouvernance et arbitrages";
    return "Porter une lecture située du sujet";
  }

  function whyPositionTitle(readingLabel, positionWhy) {
    const r = norm(readingLabel);
    if (r.includes("territ")) return "Éclairer ce qui rend une trajectoire industrielle possible, soutenable ou réorientable";
    if (r.includes("financ")) return "Éclairer les conditions économiques qui rendent une transformation tenable";
    if (r.includes("jurid")) return "Éclairer ce que le droit sécurise dans les arbitrages industriels";
    if (r.includes("operation") || r.includes("production")) return "Éclairer ce qui rend l’exécution industrielle réellement pilotable";
    if (r.includes("rh") || r.includes("competence")) return "Éclairer ce que les compétences rendent possible dans la transformation";
    if (r.includes("techn") || r.includes("system")) return "Éclairer ce que les systèmes rendent lisible ou impossible";
    if (r.includes("energie") || r.includes("ressource")) return "Éclairer les conditions de continuité liées aux ressources";
    if (r.includes("strateg")) return "Éclairer le moment où une trajectoire oblige à arbitrer autrement";
    return shortText(positionWhy, 110) || "Éclairer une question précise depuis une lecture située";
  }

  function whyOrganisationText(why, organisationName, readingLabel) {
    const hasRealOrg = organisationName && organisationName !== "Votre organisation";
    const r = norm(readingLabel);
    const source = norm(why.organisation || "");
    const org = hasRealOrg ? organisationName : "L’organisation pressentie";

    if (hasRealOrg && (r.includes("territ") || source.includes("foncier") || source.includes("friche"))) {
      return `${org} intervient là où les trajectoires industrielles dépassent les murs de l’entreprise : foncier, friches, infrastructures, ancrage local, acteurs publics et conditions territoriales de décision. Cette expérience peut éclairer le rôle du territoire dans la continuité, l’évolution ou la réorientation d’un outil industriel.`;
    }

    const scope = readingObservationScope(readingLabel);
    if (hasRealOrg) {
      return `${org} offre un point d’observation utile sur l’écosystème industriel dans lequel se jouent les trajectoires. Ses activités et ses responsabilités l’exposent aux transformations en cours, aux acteurs concernés, aux arbitrages à tenir, aux défis de mise en œuvre et aux effets d’échelle que cette conversation cherche à rendre lisibles.`;
    }

    if (why.organisation) return shortText(editorializeWhyOrganisation(why.organisation, organisationName, readingLabel), 460);

    return `L’organisation identifiée apporte un point d’observation utile sur ${scope}, sans réduire l’analyse à un cas interne.`;
  }

  function readingObservationScope(readingLabel) {
    const key = readingKeyForHero(readingLabel);
    const scopes = {
      finance: "les conditions économiques, les choix d’investissement, les marges de manœuvre et les effets d’échelle qui rendent une trajectoire industrielle tenable",
      juridique: "les cadres juridiques, les responsabilités, les risques et les arbitrages qui sécurisent une trajectoire industrielle",
      operationnelle: "les flux, la qualité, les priorités, les interfaces métiers et les conditions d’exécution qui rendent une trajectoire réellement pilotable",
      rh: "les métiers, les compétences, les collectifs, les rythmes d’adaptation et les conditions humaines de la transformation industrielle",
      energie: "les ressources, l’énergie, les matières, le carbone et les conditions de continuité qui pèsent sur les trajectoires industrielles",
      territoriale: "le foncier, les infrastructures, l’ancrage local, les acteurs publics et les conditions territoriales qui rendent une trajectoire possible ou plus difficile",
      technologique: "les systèmes, les données, les interfaces et les architectures techniques qui conditionnent la continuité et la lisibilité d’une trajectoire industrielle",
      strategique: "les transformations en cours, les acteurs concernés, les arbitrages de trajectoire, les défis à arbitrer et les effets d’échelle qui structurent l’écosystème industriel"
    };
    return scopes[key] || "les transformations en cours, les acteurs concernés, les arbitrages, les défis, la vision et l’échelle auxquels cette conversation s’intéresse";
  }

  function whyPersonText(why, personName, personRole, readingLabel, organisationName = "", actorType = "") {
    const hasRealName = personName && personName !== "Intervenant pressenti";
    const org = organisationName && organisationName !== "Votre organisation" ? organisationName : "son organisation";
    const roleClean = personRole ? cleanRole(personRole, organisationName) : "";
    const rolePart = roleClean ? `, ${roleClean},` : "";
    const scope = readingObservationScope(readingLabel);
    const persona = detectPersonaType(personRole, actorType || "organisation");

    function openingByPersona() {
      if (persona === "DG") return "est en mesure de porter une lecture d’ensemble du sujet";
      if (persona === "DAF") return "peut éclairer les arbitrages économiques, les marges de manœuvre et les conditions de soutenabilité du sujet";
      if (persona === "DRH") return "peut éclairer les effets du sujet sur les métiers, les compétences, les collectifs et les capacités de transformation";
      if (persona === "DIR_JURIDIQUE") return "peut éclairer les conditions de sécurisation, de responsabilité et de lisibilité publique du sujet";
      if (persona === "DIR_INDUSTRIEL") return "peut éclairer le sujet depuis une position directement exposée aux décisions industrielles, aux contraintes d’exécution et aux effets d’échelle";
      if (persona === "conseil") return "peut formuler une lecture comparative du sujet à partir de plusieurs trajectoires observées";
      if (persona === "avocat") return "peut formuler une lecture juridique du sujet sans la réduire à un dossier ou à une consultation";
      if (persona === "ingenierie") return "peut éclairer le sujet depuis les conditions concrètes de faisabilité, d’infrastructures et de passage à l’échelle";
      return "peut apporter une lecture pertinente du sujet";
    }

    if (hasRealName) {
      return `Au regard de sa position chez ${org}, ${personName}${rolePart} ${openingByPersona()}. Son expérience permet de relier les transformations en cours, les acteurs concernés, les arbitrages, les défis, les trajectoires possibles et les effets d’échelle. L’enjeu n’est pas de commenter un cas propre à ${org}, mais d’éclairer ${scope} depuis l’écosystème industriel dans lequel cette expérience s’inscrit.`;
    }

    if (why.person) {
      return shortText(sanitizePersonFragment(why.person), 420);
    }

    return `La fonction pressentie peut éclairer ${scope}, sans réduire l’analyse à un cas interne.`;
  }

  function whyPositionText(why, organisationName, readingLabel, positionWhy) {
    const r = norm(readingLabel);
    const org = organisationName && organisationName !== "Votre organisation" ? organisationName : "l’organisation";
    const reading = readingPhrase(readingLabel || "cette lecture");
    const readingWithArticle = /^une\s+/i.test(reading) ? reading : `une ${reading}`;
    const source = cleanListSeparators(why.position || positionWhy || "");
    const questionMatch = source.match(/«\s*([^»]+?)\s*»/);

    if (r.includes("territ")) {
      return `La contribution ne porte pas sur un dossier ${org}. Elle éclaire, depuis une lecture territoriale, les conditions qui permettent à un outil industriel de continuer, d’évoluer ou de se réorienter.`;
    }

    if (questionMatch && questionMatch[1]) {
      return `Cette position donne un cadre précis à ${readingWithArticle} : éclairer la question « ${questionMatch[1]} ». Elle ne porte pas sur un dossier interne ; elle rend lisible un mécanisme utile à l’ensemble de la composition éditoriale.`;
    }

    if (source) {
      const cleaned = source
        .replace(/^La position proposée consiste à éclairer,?\s*/i, "Cette position donne un cadre précis à la contribution : éclairer ")
        .replace(/^La position proposée consiste à/i, "Cette position donne un cadre précis à")
        .replace(/\bdepuis\s+lecture\b/gi, "depuis une lecture")
        .replace(/\bdepuis\s+votre\s+lecture\b/gi, "depuis une lecture")
        .replace(/\bchercherait\b/gi, "cherche")
        .replace(/\bviserait\b/gi, "vise");
      return shortText(cleaned, 420);
    }

    return "La contribution ne porte pas sur un cas interne. Elle rend lisible un mécanisme utile à l’ensemble de la conversation.";
  }

  function buildWhyNarrative(why, organisationName, personName, personRole, positionWhy, actorType, readingLabel) {
    const orgTitle = whyOrganisationTitle(readingLabel, why);
    const personTitle = whyPersonTitle(readingLabel);
    const positionTitle = whyPositionTitle(readingLabel, positionWhy);

    const orgFragment = whyOrganisationText(why, organisationName, readingLabel);
    const personFragment = whyPersonText(why, personName, personRole, readingLabel, organisationName, actorType);
    const positionFragment = whyPositionText(why, organisationName, readingLabel, positionWhy);

    return `
      <div class="landing-why-narrative landing-why-narrative--keys landing-why-narrative--positioned">
        <article class="landing-why-key">
          <span>Votre organisation</span>
          <h3>${safe(orgTitle)}</h3>
          <p>${safe(orgFragment)}</p>
          ${tagsHTML(whyTagsForReading(readingLabel, "organisation", why))}
        </article>

        <article class="landing-why-key">
          <span>Votre position d’observation</span>
          <h3>${safe(personTitle)}</h3>
          <p>${safe(personFragment)}</p>
          ${tagsHTML(whyTagsForReading(readingLabel, "person", why))}
        </article>

        <article class="landing-why-key landing-why-key--accent">
          <span>La lecture proposée</span>
          <h3>${safe(positionTitle)}</h3>
          <p>${safe(positionFragment)}</p>
          ${tagsHTML(whyTagsForReading(readingLabel, "position", why))}
        </article>
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
     CADRE DE CONFIANCE — version éditoriale / minimale
     Fond foncé, 4 clés de réassurance, contenu adapté à
     l'organisation et à la lecture proposée.
  ───────────────────────────────────────────────────────── */
  function trustReadingMechanism(readingLabel) {
    const r = norm(readingLabel);
    if (r.includes("territ")) {
      return "comment les conditions territoriales influencent les trajectoires industrielles.";
    }
    if (r.includes("financ")) {
      return "comment les conditions économiques et financières rendent une transformation industrielle tenable.";
    }
    if (r.includes("jurid")) {
      return "comment les cadres juridiques sécurisent les arbitrages industriels avant qu’ils ne deviennent des risques.";
    }
    if (r.includes("operation") || r.includes("production")) {
      return "comment le pilotage opérationnel rend une trajectoire industrielle réellement tenable.";
    }
    if (r.includes("rh") || r.includes("competence")) {
      return "comment les compétences, les collectifs et l’organisation du travail conditionnent la transformation industrielle.";
    }
    if (r.includes("energie") || r.includes("ressource") || r.includes("carbone")) {
      return "comment les ressources, l’énergie, l’eau, les matières ou le carbone deviennent des conditions de continuité industrielle.";
    }
    if (r.includes("techno") || r.includes("systeme") || r.includes("data") || r.includes("numerique")) {
      return "comment les systèmes, les données et les interfaces conditionnent la lisibilité et la continuité de la trajectoire.";
    }
    if (r.includes("strateg")) {
      return "comment les arbitrages de gouvernance et de trajectoire changent la nature d’une décision industrielle.";
    }
    return "comment cette lecture permet de rendre lisibles des mécanismes industriels sans exposer de situation interne.";
  }

  function trustDetailList(items) {
    return `<ul class="trust-key__deep-list">${items.map(item => `<li>${safe(item)}</li>`).join("")}</ul>`;
  }

  function buildTrustKeysSection(cta, organisationName, readingLabel) {
    const org = organisationName && organisationName !== "Votre organisation" ? organisationName : "l’organisation pressentie";
    const reading = readingPhrase(readingLabel || "cette lecture");

    const keys = [
      {
        num: "01",
        title: "Hors champ",
        visible: ["Chiffres internes", "Sites sensibles", "Clients / fournisseurs", "Décisions confidentielles"],
        summary: "Ce qui ne sera pas exposé",
        detail: [
          "Pas de chiffres internes ou non publics.",
          "Pas de client, fournisseur ou partenaire nommé sans accord.",
          "Pas de site sensible, incident, contentieux ou dossier social identifiable.",
          "Pas de décision confidentielle, négociation en cours ou arbitrage non annoncé."
        ]
      },
      {
        num: "02",
        title: "Périmètre éditorial",
        visible: ["Angle limité", "Lecture de mécanisme", "Point de décision", "Niveau d’exposition"],
        summary: "Ce qui est cadré",
        detail: [
          `L’angle reste limité à ce que la ${reading} doit réellement éclairer.`,
          "Toutes les dimensions du sujet sont préparées avant l’entretien.",
          "Les formulations sensibles sont travaillées pour rester publiquement tenables.",
          "Le niveau d’exposition est ajusté avec l’organisation."
        ]
      },
      {
        num: "03",
        title: "Préparation média",
        visible: ["Trame média", "Relances journaliste", "Pense-bête", "Production"],
        summary: "Ce qui est préparé",
        detail: [
          "La trame média sera utile avant l’entretien pour sécuriser le périmètre.",
          "Les questions sur les tensions, arbitrages et moments de décision sont anticipées.",
          "La trame média aidera l’intervenant à garder le fil sans réciter une communication.",
          "La coordination avec la production permet de préserver la cohérence éditoriale."
        ]
      },
      {
        num: "04",
        title: "Validation organisationnelle",
        visible: ["Communication", "Juridique", "Affaires publiques", "Direction"],
        summary: "Qui peut sécuriser",
        detail: [
          "Les équipes communication, juridiques, affaires publiques ou direction peuvent être associées.",
          "La trame média sera relue et validée avant l’entretien pour sécuriser le périmètre.",
          "Un échange peut avoir lieu avant montage afin de vérifier la justesse du propos.",
          "Des ajustements éditoriaux peuvent éviter une exposition involontaire, sans transformer l’entretien en contenu contrôlé."
        ]
      },
      {
        num: "05",
        title: "Confidentialité",
        visible: ["NDA", "Échanges protégés", "Documents non publics", "Périmètre sensible"],
        summary: "Ce qui reste protégé",
        detail: [
          "Les échanges préparatoires peuvent être couverts par un accord de confidentialité.",
          "Les documents de travail ne sont pas publics.",
          "Le périmètre sensible est identifié en amont.",
          "Aucun élément confidentiel n’est utilisé sans accord."
        ]
      },
      {
        num: "06",
        title: "Engagement",
        visible: ["15 minutes", "Aucune suite automatique", "Décision ensuite", "Note si pertinent"],
        summary: "Ce que l’échange engage",
        detail: [
          "L’échange de 15 minutes ne vaut pas accord de participation.",
          "La note de positionnement ne vaut pas engagement automatique.",
          "La position reste soumise à composition éditoriale.",
          "Une contribution financière n’intervient que si une poursuite est validée."
        ]
      }
    ];

    return `
      <section class="landing-section landing-section--dark landing-trust-keys" id="cadre-confiance">
        <div class="landing-container">
          <div class="landing-head landing-head--keys">
            <p class="landing-kicker">Cadre de confiance</p>
            <h2>Une prise de parole visible, préparée et maîtrisée.</h2>
            <p>Le cadre de préparation précise ce qui reste hors champ, ce qui sera travaillé, les validations utiles, la confidentialité et les conditions d’engagement avant toute production.</p>
          </div>

          <div class="trust-keys-grid trust-keys-grid--six trust-keys-grid--primary" aria-label="Les trois premiers points de sécurisation éditoriale de la contribution En Plateau">
            ${keys.slice(0, 3).map(key => `
              <article class="trust-key">
                <span class="trust-key__num">${safe(key.num)}</span>
                <h3>${safe(key.title)}</h3>
                <p class="trust-key__summary">${safe(key.summary)}</p>
                <ul>${key.visible.map(item => `<li>${safe(item)}</li>`).join("")}</ul>
                <details class="trust-key__details">
                  <summary><span class="trust-key-open">En savoir plus</span><span class="trust-key-close">Masquer</span></summary>
                  ${trustDetailList(key.detail)}
                </details>
              </article>`).join("")}
          </div>

          <details class="trust-extra-details">
            <summary>
              <span class="trust-extra-open">Afficher les 3 autres points de cadrage</span>
              <span class="trust-extra-close">Masquer les points de cadrage complémentaires</span>
            </summary>
            <div class="trust-keys-grid trust-keys-grid--six trust-keys-grid--extra" aria-label="Points de cadrage complémentaires">
              ${keys.slice(3).map(key => `
                <article class="trust-key">
                  <span class="trust-key__num">${safe(key.num)}</span>
                  <h3>${safe(key.title)}</h3>
                  <p class="trust-key__summary">${safe(key.summary)}</p>
                  <ul>${key.visible.map(item => `<li>${safe(item)}</li>`).join("")}</ul>
                  <details class="trust-key__details">
                    <summary><span class="trust-key-open">En savoir plus</span><span class="trust-key-close">Masquer</span></summary>
                    ${trustDetailList(key.detail)}
                  </details>
                </article>`).join("")}
            </div>
          </details>

          <div class="trust-keys-cta">
            <a class="landing-btn" href="${safe(cta.href)}">${safe(cta.label)}</a>
            <p>Aucun dossier à préparer · Aucune donnée confidentielle attendue</p>
          </div>
        </div>
      </section>`;
  }


  /* ─────────────────────────────────────────────────────────
     POUR ALLER PLUS LOIN — bloc d'approfondissement structuré
     Remplace les longues sections ouvertes par une intro, deux cartes
     de cycles, des accordéons et un CTA final.
  ───────────────────────────────────────────────────────── */

  function buildMoreDetail(title, body, open = false) {
    return `
      <details class="more-accordion"${open ? " open" : ""}>
        <summary>
          <span>${safe(title)}</span>
          <strong>+</strong>
        </summary>
        <div class="more-accordion__body">${body}</div>
      </details>`;
  }

  function buildMoreStepsTimeline() {
    const narrative = DATA?.landingNarrative || {};
    const fallback = [
      { level: "En Plateau", title: "Un dispositif de lecture des arbitrages", text: "En Plateau part d’une idée simple : les transformations ne se comprennent pas seulement par des opinions ou des témoignages, mais par les arbitrages qu’elles obligent à formuler." },
      { level: "Cycle Industrie", title: "Une saison consacrée aux trajectoires industrielles", text: "Le cycle Industrie regarde ce qui fait tenir, rend moins lisible ou oblige à réarbitrer une trajectoire industrielle." },
      { level: "Conversation", title: "Un phénomène industriel regardé depuis plusieurs lectures", text: "Chaque conversation met en regard des lectures complémentaires d’un même phénomène industriel." },
      { level: "Contexte", title: "Le moment où la décision change de nature", text: "Le contexte indique la situation dans laquelle l’arbitrage devient plus difficile : croissance, adaptation ou réinvention." },
      { level: "Angle", title: "Une position précise dans une conversation limitée", text: "L’angle proposé n’est pas une prise de parole générale. C’est une place éditoriale située, mise en regard avec trois autres lectures complémentaires." }
    ];

    const steps = toArray(narrative.steps).length ? toArray(narrative.steps) : fallback;

    return `
      <div class="more-timeline">
        ${steps.slice(0, 5).map((step, index) => `
          <article class="more-timeline__item">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <div>
              <p>${safe(txt(step.level, step.label, "Niveau"))}</p>
              <h4>${safe(soften(txt(step.title, step.titre, "Étape éditoriale")))}</h4>
              <p>${safe(shortText(txt(step.text, step.description, ""), 360))}</p>
            </div>
          </article>`).join("")}
      </div>`;
  }

  function buildMoreProcess(processSteps) {
    const fallback = [
      { num: "01", title: "L’échange de qualification", text: "15 minutes pour vérifier si votre lecture correspond à une position disponible. Aucun dossier sensible à exposer." },
      { num: "02", title: "Le dossier de positionnement", text: "Si l’angle est pertinent, un dossier complet est transmis : angle précis, logique de mise en regard, modalités d’intervention, format émission et article associé." },
      { num: "03", title: "Le comité éditorial", text: "Le comité examine les dossiers de positionnement et valide la composition finale. Vous êtes informé avant tout engagement." },
      { num: "04", title: "La préparation & la production", text: "En Plateau travaille avec vous pour transformer votre lecture en position claire, non intrusive et publiquement défendable." }
    ];

    const steps = toArray(processSteps).length ? toArray(processSteps).slice(0, 4) : fallback;

    return `
      <div class="more-process-grid">
        ${steps.map((step, index) => `
          <article>
            <span>${safe(txt(step.num, String(index + 1).padStart(2, "0")))}</span>
            <h4>${safe(soften(txt(step.title, "Étape")))}</h4>
            <p>${safe(shortText(txt(step.text, ""), 360))}</p>
          </article>`).join("")}
      </div>
      <p class="more-note">L’échange de départ ne vaut pas engagement.</p>`;
  }


  function moreConversationReadingsLine(angle, readingLabel) {
    const complementary = toArray(angle?.complementaryCodes)
      .map(code => Core.getAngleByCode(code))
      .filter(Boolean)
      .slice(0, 3);
    const labels = [readingLabel, ...complementary.map(other => readingLabelForAngle(other))]
      .map(label => readingNoun(label).toLowerCase())
      .filter(Boolean);
    const unique = [];
    labels.forEach(label => {
      if (!unique.some(existing => norm(existing) === norm(label))) unique.push(label);
    });
    if (!unique.length) return "plusieurs lectures complémentaires éclairent la même question industrielle";
    if (unique.length === 1) return `la lecture ${unique[0]} éclaire la question industrielle`;
    if (unique.length === 2) return `${unique[0]} et ${unique[1]} éclairent ensemble la même question industrielle`;
    return `${unique.slice(0, -1).join(", ")} et ${unique[unique.length - 1]} éclairent ensemble la même question industrielle`;
  }

  function buildMoreFAQ(faq) {
    const fallback = [
      { question: "L’échange de 15 minutes vaut-il engagement à participer ?", answer: "Non. Il sert uniquement à vérifier si la position proposée mérite d’être formalisée. Aucune suite n’est automatique." },
      { question: "Faut-il préparer quelque chose avant l’échange ?", answer: "Non. Aucun dossier, aucune présentation et aucune position déjà construite ne sont attendus." },
      { question: "Les équipes communication, juridiques ou affaires publiques peuvent-elles être associées ?", answer: "Oui. Le périmètre peut être préparé avec les équipes utiles avant toute prise de parole." },
      { question: "En quoi En Plateau se distingue d’une prise de parole promotionnelle ?", answer: "Le point de départ n’est pas la visibilité. Une contribution est retenue parce qu’elle éclaire un mécanisme, une tension ou un arbitrage réel. Les effets d’autorité ou de reconnaissance sont une conséquence, pas l’objectif premier." },
      { question: "Comment éviter un contenu trop générique ou trop risqué ?", answer: "L’angle, les limites de parole, la trame média, les points sensibles et le niveau d’exposition sont cadrés avant production." }
    ];

    const seen = new Set();
    const items = [...toArray(faq), ...fallback].filter(item => {
      const key = norm(item?.question || "").slice(0, 46);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    }).slice(0, 6);

    return `
      <div class="more-faq-grid">
        ${items.map(item => `
          <article>
            <h4>${safe(soften(item.question))}</h4>
            <p>${safe(shortText(item.answer, 420))}</p>
          </article>`).join("")}
      </div>`;
  }

  function buildMoreInfoSection({ cta, angle, publicAngle, formulation, conversation, conversationLabel, dgMessage, processSteps, faq, readingLabel, organisationName }) {
    const finalTitle = organisationName && organisationName !== "Votre organisation"
      ? `Prêt à vérifier si cette position mérite d’être formalisée pour ${organisationName} ?`
      : "Prêt à vérifier si cette position mérite d’être formalisée ?";
    const readingsLine = moreConversationReadingsLine(angle, readingLabel);

    return `
      <section class="landing-section landing-section--light landing-more-structured landing-more-concept-section" id="pour-aller-plus-loin">
        <div class="landing-container">
          <div class="more-hero-grid more-hero-grid--concept">
            <div>
              <p class="landing-kicker">Pour aller plus loin</p>
              <h2>Comprendre le cadre éditorial En Plateau.</h2>
            </div>
            <div>
              <p>En Plateau est une architecture éditoriale de conversations stratégiques conçue pour rendre lisibles les arbitrages réels qui traversent les transformations industrielles, économiques et territoriales.</p>
              <p>Le dispositif réunit des acteurs occupant des positions différentes d’un même sujet afin de produire, par mise en regard, une lecture plus structurée des transformations en cours.</p>
              <p>Chaque contribution est préparée individuellement, produite dans un format média, puis articulée à d’autres lectures complémentaires au sein d’un cycle éditorial.</p>
            </div>
          </div>

          <div class="more-concept-grid">
            <article>
              <span>Dispositif éditorial</span>
              <h3>Des contributions situées, pas des prises de parole isolées</h3>
              <p>En Plateau prépare des lectures produites depuis des fonctions, responsabilités et expériences réelles, puis les inscrit dans une conversation composée.</p>
            </article>
            <article>
              <span>Mise en regard</span>
              <h3>Les quatre lectures de cette conversation</h3>
              <p>${safe(sentenceCaseFirst(readingsLine))}. Cette mise en regard donne à chaque contribution sa portée : aucune lecture ne résume seule la question, mais chacune révèle une partie de la décision.</p>
            </article>
            <article>
              <span>Formats média</span>
              <h3>Des formats existants, une composition En Plateau</h3>
              <p>Le dispositif s’appuie sur des journalistes, des médias et des sociétés de production partenaires. L’enjeu n’est pas de juxtaposer des passages médias, mais de composer une conversation éditoriale cohérente.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="landing-section landing-section--light landing-more-cycle-section" id="cycle-industrie-detail">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Cycle Industrie</p>
            <h2>Industrie & transformation des territoires.</h2>
            <p>Pour sa saison inaugurale, En Plateau ouvre le cycle Industrie & transformation des territoires. Il observe les moments où produire davantage, tenir sous contrainte, transformer un outil ou réarbitrer une trajectoire oblige les organisations à formuler autrement leurs décisions.</p>
          </div>
          <div class="more-cycle-focus more-cycle-focus--section">
            <p>Chaque conversation part d’un phénomène industriel concret, puis le regarde depuis plusieurs lectures : stratégie, finance, droit, opérations, RH, technologie, territoires ou ressources.</p>
            <p class="more-cycle-note">Un second cycle, Logement & fabrique des territoires, suit la même logique éditoriale sur les transformations de l’habitat, du foncier et des territoires.</p>
          </div>
        </div>
      </section>

      <section class="landing-section landing-section--light landing-more-faq-section" id="questions-avant-echange">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Questions fréquentes</p>
            <h2>Les points à clarifier avant de réserver un échange.</h2>
            <p>Ces réponses reprennent les principaux freins rencontrés avant une prise de parole publique : engagement, préparation, confidentialité, exposition, équipes à associer et différence avec une communication promotionnelle.</p>
          </div>
          <div class="more-accordions" id="more-accordions">
            ${buildMoreDetail("Questions fréquentes avant l’échange", buildMoreFAQ(faq), true)}
          </div>
          <div class="more-final-cta">
            <h2>${safe(soften(finalTitle))}</h2>
            <p>L’échange dure 15 minutes. Il ne vaut pas engagement et ne demande aucun dossier à préparer.</p>
            <a class="landing-btn" href="${safe(cta.href)}">${safe(cta.label)}</a>
            <p>Sans engagement · Aucun dossier sensible · Périmètre préparé si nécessaire</p>
          </div>
        </div>
      </section>`;
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

    const organisationName  = normalizeDisplayName(txt(organisation.name, "Votre organisation"));
    const personName        = normalizeDisplayName(txt(person.fullName,   "Intervenant pressenti"));
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
    const valueCards   = getValueCards(landingPage, reading, readingLabel, actorType, personRole, { organisationName, personName, why, angle });
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

      ${buildHeroMinimalSection(angle, conversationLabel, contextLabel, personName, personRole, organisationName, readingLabel, cta)}

      ${buildConversationBentoSection(angle, publicAngle, formulation, conversationLabel, contextLabel, personName, personRole, organisationName, readingLabel, complementaryAngles, deal)}

      ${buildTrustKeysSection(cta, organisationName, readingLabel)}

      <section class="landing-section landing-section--light" id="pourquoi-vous">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Pertinence</p>
            <h2>Pourquoi ${safe(organisationName)} est bien placé pour porter cette lecture.</h2>
            <p>Une position En Plateau ne désigne pas seulement une organisation ou une fonction. Elle identifie ce qu’une expérience permet de rendre lisible depuis un endroit précis.</p>
          </div>
          <div class="landing-why-box">
            ${buildWhyNarrative(why, organisationName, personName, personRole, positionWhy, actorType, readingLabel)}
          </div>
        </div>
      </section>

      <section class="landing-section landing-section--dark" id="valeur-position">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Portée de la position</p>
            <h2>Ce qu’une lecture utile peut produire.</h2>
            <p>Le point de départ n’est pas la visibilité. Une contribution solide rend visible une lecture utile ; la reconnaissance, la trace et les usages durables en sont les conséquences naturelles.</p>
          </div>
          <div class="landing-grid landing-grid--3 landing-grid--value">
            ${valueCards.map((item) => buildValueCard(item)).join("")}
          </div>
        </div>
      </section>

      ${buildQualificationCTASection(cta, organisationName, readingLabel)}

      ${buildMoreInfoSection({ cta, angle, publicAngle, formulation, conversation, conversationLabel, dgMessage, processSteps, faq, readingLabel, organisationName })}
    `;
  }

  render(Core.getDealBundle());
})();
