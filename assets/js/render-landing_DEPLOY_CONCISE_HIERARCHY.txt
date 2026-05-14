/*
  En Plateau — render-landing.js
  Version V65.9 conversion-hierarchy
  Modifications vs V65.5 :
  - Suppression du bloc .landing-emission dans la carte hero (brouillon, image en couleur)
  - Nouvelle colonne droite hero : bloc .landing-emission-film (style home, image B&W)
    + légende journaliste/média sous l'image
    + carte hero (.landing-hero__card) en dessous
  - Restructuration du landing-hero__grid : 2 colonnes
    gauche : titre + lead + CTA
    droite  : film > légende > carte
  - buildRaritySignal : texte corrigé
  - buildIdentityLine : suppression de l'émission (maintenant au-dessus de la carte)
  - V65.8 : alignement renforcé avec la grammaire du site public :
    lecture située, approche directe, contribution qui prend sa portée,
    trace publique durable, non-visibilité/prestation.
  Aucune modification de render-core.js.
*/

(function () {
  "use strict";

  const Core = window.EnPlateauRenderCore;
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

  function card(label, title, text, accent) {
    if (!title && !text) return "";
    return `
      <article class="landing-card ${accent ? "landing-card--accent" : ""}">
        ${label ? `<span class="landing-label">${safe(label)}</span>` : ""}
        ${title ? `<h3>${safe(soften(title))}</h3>` : ""}
        ${text  ? `<p>${safe(shortText(text, 640))}</p>` : ""}
      </article>`;
  }

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

  function getValueCards(landingPage, reading, actorType) {
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
    if (filtered.length >= 3) return filtered.slice(0, 3);

    const gains = toArray(reading?.gainsParProfil).map(item => ({
      label: item.profil, title: item.gain, text: item.detail
    }));
    filtered = gains.filter(item =>
      actorType === "cabinet_conseil"
        ? isCabinetCard(item) || isFunctionCard(item) || isPersonCard(item)
        : !isCabinetCard(item) && (isOrgCard(item) || isFunctionCard(item) || isPersonCard(item))
    );
    if (filtered.length >= 3) return filtered.slice(0, 3);

    return [
      {
        label: actorLabel(actorType),
        title: actorType === "cabinet_conseil"
          ? "Installer une parole d'autorité sans vendre directement une offre."
          : "Valoriser une capacité à rendre lisibles les conditions réelles d'une trajectoire industrielle.",
        text: actorType === "cabinet_conseil"
          ? "La contribution permet de formuler une lecture utile aux décideurs sans présenter une mission, une méthode ou un cas client."
          : "La contribution permet à l'organisation de montrer sa capacité de lecture sans exposer de chiffre, de site, de client ou de décision interne."
      },
      {
        label: "Fonction",
        title: "Faire reconnaître ce que votre fonction permet de voir.",
        text: "La prise de parole rend visible une capacité de pilotage, de coordination ou d'arbitrage souvent difficile à expliquer dans un format institutionnel classique."
      },
      {
        label: "Intervenant",
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
    const reading = readingLabel || "cette lecture";
    return `
      <div class="landing-rarity">
        <span class="landing-rarity__dot" aria-hidden="true"></span>
        <p>Plusieurs acteurs peuvent être pressentis pour une même lecture.
          <strong>Une seule position ${safe(soften(reading))}</strong> sera retenue
          dans la composition finale, en cohérence avec les autres lectures mises en regard.</p>
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
  function buildHeroIntro(personName, organisationName, heroLead, readingLabel) {
    const hasRealOrg = organisationName && organisationName !== "Votre organisation";
    const reading = readingLabel || "cette lecture";

    return `<p class="landing-lead landing-lead--compact">
      <strong>Votre expérience a été identifiée pour éclairer une lecture précise dans une conversation économique En Plateau.</strong>
      L'échange de 15 minutes permet de vérifier si votre lecture peut trouver sa juste place dans la composition éditoriale${hasRealOrg ? `, depuis ${safe(organisationName)}` : ""}.
    </p>
    <p class="landing-lead landing-lead--compact">
      Une seule position ${safe(soften(reading))} sera retenue pour cette lecture. Il ne s'agit pas d'une prestation de visibilité, mais d'une position à qualifier dans un cadre éditorial composé par approche directe.
    </p>`;
  }

  function buildHeroCardIntro(readingLabel) {
    const reading = readingLabel || "lecture éditoriale";
    return `Votre lecture a été identifiée comme potentiellement utile à cette conversation. Une seule position ${safe(soften(reading))} sera retenue dans la composition finale.`;
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
        return shortText(why.person, 300);
      if (hasRealName && personRole)
        return `Votre fonction — ${personRole} — donne accès à une lecture située : ce qu'elle permet de rendre lisible, de structurer, de sécuriser ou de mettre en perspective dans cette trajectoire.`;
      if (isOperationalRole(personRole) && hasRealName)
        return `Votre fonction — ${personRole} — place cette lecture au niveau où certains arbitrages concrets se forment : flux, coordination, montée en capacité, stabilité d'exécution.`;
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
     SECTIONS OPTIMISÉES CONVERSION / APPROFONDISSEMENT
  ───────────────────────────────────────────────────────── */
  function ctaBand(cta, variant = "light") {
    return `
      <section class="landing-cta-band landing-cta-band--${safe(variant)}">
        <div class="landing-container landing-cta-band__inner">
          <div>
            <p class="landing-kicker">Échange éditorial</p>
            <h2>Valider la pertinence de l'angle, sans engagement.</h2>
            <p>15 minutes pour qualifier la lecture, le périmètre possible et les conditions de préparation.</p>
          </div>
          <a class="landing-btn" href="${safe(cta.href)}">${safe(cta.label)}</a>
        </div>
      </section>`;
  }

  function buildSafetySection(guarantees, cta) {
    const items = guarantees.slice(0, 4);
    return `
      <section class="landing-section landing-section--light landing-section--safety" id="securite-immediate">
        <div class="landing-container">
          <div class="landing-head landing-head--left landing-head--compact">
            <p class="landing-kicker">Cadre de confiance</p>
            <h2>Une contribution cadrée, pas improvisée.</h2>
            <p>Les objections sensibles sont traitées avant toute prise de parole : confidentialité, temps mobilisé, périmètre de l'échange et validation interne éventuelle.</p>
          </div>
          <div class="landing-safety-grid">
            ${items.map((item, index) => `
              <article class="landing-safety-card">
                <span class="landing-safety-icon" aria-hidden="true">${["□", "◷", "◇", "⌁"][index] || "□"}</span>
                <h3>${safe(soften(item.title))}</h3>
                <p>${safe(shortText(item.text, 260))}</p>
              </article>`).join("")}
          </div>
          <div class="landing-actions landing-actions--section">
            <a class="landing-btn" href="${safe(cta.href)}">${safe(cta.label)}</a>
            <span class="landing-inline-note">Aucun dossier à préparer · aucune donnée confidentielle attendue</span>
          </div>
        </div>
      </section>`;
  }

  function buildWhySection(why, organisationName, personName, personRole, positionWhy, actorType) {
    return `
      <section class="landing-section landing-section--light" id="pourquoi-vous">
        <div class="landing-container">
          <div class="landing-head landing-head--left landing-head--compact">
            <p class="landing-kicker">Pertinence</p>
            <h2>Pourquoi cette lecture vous est proposée.</h2>
            <p>Une position En Plateau ne désigne pas seulement une fonction ou un métier. Elle désigne ce qu'une expérience permet de rendre lisible depuis un endroit précis.</p>
          </div>
          <div class="landing-why-card">
            ${buildWhyNarrative(why, organisationName, personName, personRole, positionWhy, actorType)}
          </div>
        </div>
      </section>`;
  }

  function buildValueSection(valueCards, landingPage) {
    return `
      <section class="landing-section landing-section--dark" id="valeur-contribution">
        <div class="landing-container">
          <div class="landing-head landing-head--left landing-head--compact">
            <p class="landing-kicker">Portée de la position</p>
            <h2>Ce que produit une contribution En Plateau.</h2>
            <p>${safe(shortText(txt(landingPage?.valueSection?.intro, "Une contribution bien préparée ne cherche pas seulement à être vue. Elle permet d'installer une lecture, de rendre une trajectoire plus lisible et de créer une trace publique qui continue de travailler dans la durée."), 520))}</p>
          </div>
          <div class="landing-grid landing-grid--3 landing-grid--compact">
            ${valueCards.map((item, i) => card(item.label, item.title, item.text, i === 2)).join("")}
          </div>
        </div>
      </section>`;
  }

  function buildExperienceAccordionContent(readingLabel) {
    const reading = readingLabel || "lecture éditoriale";
    return `
      <div class="landing-grid landing-grid--3 landing-grid--compact">
        ${card("Ce que vous apportez", "Une expérience située du sujet", "Votre expérience du sujet, votre responsabilité, vos convictions et votre compréhension des conditions réelles dans lesquelles se construisent les arbitrages industriels.")}
        ${card("Ce qu'En Plateau structure", "Un angle, une lecture et des arbitrages", "Le contexte, les acteurs concernés, les arbitrages, les défis, la vision et l'échelle permettent de transformer une lecture en contribution préparée.")}
        ${card("Ce que cela produit", "Une contribution reconnaissable par les bons interlocuteurs", `Une position claire, crédible et mobilisable dans la durée, depuis une ${safe(soften(reading))}, auprès des acteurs qui rencontrent les mêmes arbitrages.`, true)}
      </div>`;
  }

  function buildAngleAccordionContent(publicAngle, formulation, angle, conversation, contextLabel, conversationLabel, dgMessage) {
    return `
      <div class="landing-head landing-head--left landing-head--compact">
        <p class="landing-kicker">${safe(contextLabel)}</p>
        <h3>${safe(soften(txt(publicAngle.titreLanding, formulation.title, angle.questionPublique, angle.titreAngle, angle.questionEditoriale)))}</h3>
        <p>${safe(shortText(txt(publicAngle.accrocheLanding, formulation.accrocheLanding, angle.questionActivation, angle.texteProgramme, angle.introMecanisme), 620))}</p>
      </div>
      <div class="landing-grid landing-grid--3 landing-grid--compact">
        ${card("Conversation", conversationLabel, txt(conversation?.narrativeText, conversation?.description, "Une conversation construite pour mettre en regard des lectures complémentaires."))}
        ${card("Ce que votre lecture apporte", "Une position lisible par les décideurs", dgMessage)}
        ${card("Format", "Une contribution cadrée, pas improvisée", "L'échange éditorial permet de cadrer le sujet, la portée de la lecture et les conditions de préparation avec vos équipes si nécessaire.", true)}
      </div>`;
  }

  function getReadingProfiles(typeLecture) {
    const reading = Core.getReadingByCode(typeLecture) || {};
    const profiles = toArray(reading.profilsIntervenant)
      .map(item => txt(item.label, item.title, item.profil))
      .filter(Boolean);
    if (profiles.length) return profiles.slice(0, 3);

    const n = norm(typeLecture);
    if (n.includes("finance")) return ["DAF · CFO · Directions financières", "Conseil finance · investissement"];
    if (n.includes("jurid")) return ["Directions juridiques · conformité", "Avocats · cabinets spécialisés"];
    if (n.includes("rh") || n.includes("compet")) return ["RH · compétences · transformation du travail", "Conseil RH · formation · organisation"];
    if (n.includes("operation")) return ["Directions industrielles & opérations", "Conseil & transformation industrielle"];
    if (n.includes("territ")) return ["Territoires · aménagement · infrastructures", "Acteurs publics · financeurs · cadre territorial"];
    if (n.includes("energie") || n.includes("ressource")) return ["Énergie · eau · carbone · matières", "Ingénierie · environnement industriel"];
    if (n.includes("tech")) return ["Systèmes industriels · OT/IT · data", "Ingénierie · transformation digitale industrielle"];
    return ["Décideurs industriels", "Conseils spécialisés"];
  }

  function complementaryCard(other) {
    const c = other.complementaryCard || {};
    const profiles = getReadingProfiles(other.typeLecture);
    const profilesHTML = profiles.length ? `
      <div class="landing-actors">
        <span>Acteurs pressentis</span>
        <p>${profiles.map(safe).join(" · ")}</p>
      </div>` : "";
    return `
      <article class="landing-card landing-card--complementary">
        <span class="landing-label">${safe(c.label || other.typeLecture || "Lecture complémentaire")}</span>
        <h3>${safe(soften(c.title || other.questionCourte || other.titreAngle || other.questionPublique || "Lecture complémentaire"))}</h3>
        <p>${safe(shortText(c.headline || other.ceQueCetteLecturePermetDeVoir || other.angleRendVisible || "Une autre lecture du même contexte éditorial.", 360))}</p>
        ${profilesHTML}
      </article>`;
  }

  function buildComplementaryAccordionContent(complementaryAngles) {
    if (!complementaryAngles.length) {
      return `<p>Cette position est pensée dans une composition éditoriale, avec d'autres lectures complémentaires du même sujet.</p>`;
    }
    return `
      <p class="landing-accordion-intro">Votre lecture n'est pas isolée. Elle est appelée à être mise en regard avec d'autres positions complémentaires, portées par des familles d'acteurs pressenties sans nom d'entreprise affiché.</p>
      <div class="landing-grid landing-grid--3 landing-grid--compact">
        ${complementaryAngles.map(other => complementaryCard(other)).join("")}
      </div>`;
  }

  function buildProcessAccordionContent(processSteps) {
    return `
      <div class="landing-grid landing-grid--5 landing-process-grid landing-grid--compact">
        ${processSteps.map(item => `
          <article class="landing-card landing-process-card">
            <span class="landing-label">${safe(item.num || "Étape")}</span>
            <h3>${safe(soften(item.title))}</h3>
            <p>${safe(shortText(item.text, 360))}</p>
            ${item.deadline ? `<p class="landing-process-deadline">${safe(item.deadline)}</p>` : ""}
          </article>`).join("")}
      </div>`;
  }

  function buildFAQAccordionContent(faq) {
    if (!faq.length) return "";
    return `<div class="landing-grid landing-grid--2 landing-grid--compact">${faq.map(item => card("", item.question, item.answer)).join("")}</div>`;
  }

  function buildFurtherDetailsSection(opts) {
    const { readingLabel, publicAngle, formulation, angle, conversation, contextLabel, conversationLabel, dgMessage, complementaryAngles, processSteps, faq, cta } = opts;
    return `
      <section class="landing-section landing-section--light landing-section--accordions" id="aller-plus-loin">
        <div class="landing-container">
          <div class="landing-head landing-head--left landing-head--compact">
            <p class="landing-kicker">Pour aller plus loin</p>
            <h2>Vous voulez comprendre le cadre éditorial avant de réserver ?</h2>
            <p>Les éléments ci-dessous permettent d'approfondir la position proposée, la mise en regard, le parcours de préparation et les garanties.</p>
          </div>

          <div class="landing-accordion-list">
            <details class="landing-accordion">
              <summary>Ce que cette position permettrait d'éclairer</summary>
              <div class="landing-accordion__body">${buildAngleAccordionContent(publicAngle, formulation, angle, conversation, contextLabel, conversationLabel, dgMessage)}</div>
            </details>
            <details class="landing-accordion">
              <summary>Comment En Plateau transforme une expérience en contribution</summary>
              <div class="landing-accordion__body">${buildExperienceAccordionContent(readingLabel)}</div>
            </details>
            <details class="landing-accordion">
              <summary>Les lectures complémentaires et les acteurs pressentis</summary>
              <div class="landing-accordion__body">${buildComplementaryAccordionContent(complementaryAngles)}</div>
            </details>
            ${processSteps.length ? `<details class="landing-accordion"><summary>Le parcours de cadrage, production et activation</summary><div class="landing-accordion__body">${buildProcessAccordionContent(processSteps)}</div></details>` : ""}
            ${faq.length ? `<details class="landing-accordion"><summary>Questions fréquentes avant l'échange</summary><div class="landing-accordion__body">${buildFAQAccordionContent(faq)}</div></details>` : ""}
          </div>

          <div class="landing-actions landing-actions--section">
            <a class="landing-btn" href="${safe(cta.href)}">${safe(cta.label)}</a>
            <span class="landing-inline-note">L'échange sert uniquement à qualifier la pertinence de la position.</span>
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

    const organisationName  = txt(organisation.name, "Votre organisation");
    const personName        = txt(person.fullName,   "Intervenant pressenti");
    const personRole        = cleanRole(person.role, organisationName);
    const readingLabel      = displayReadingLabel(reading, angle, deal, personRole);
    const contextLabel      = soften(txt(context?.label, deal?.editorialContext?.contexteTitre, "Contexte éditorial"));
    const conversationLabel = getConversationLabel(conversation, deal);

    const heroTitle = txt(
      publicAngle.titreLanding, formulation.title,
      landingPage?.heroTitleHtml
        ? landingPage.heroTitleHtml.replace(/<br\s*\/?>/gi, " ").replace(/<\/?em>/gi, "")
        : "",
      "Votre lecture peut éclairer les conditions qui rendent une trajectoire industrielle lisible."
    );

    const heroLead = txt(
      publicAngle.accrocheLanding, formulation.accrocheLanding,
      landingPage?.heroLead, reading?.accroche,
      "En Plateau compose des conversations économiques à partir de lectures complémentaires, portées par des personnes identifiées pour ce qu'elles permettent de rendre lisible."
    );

    const positionWhy = txt(publicAngle.promesseIntervenant, formulation.promesseIntervenant, why.position, "");

    const speakerMotivation = txt(
      personaFit?.speakerPersona?.motivation, reading?.motivationCentrale,
      "Faire reconnaître une lecture claire, crédible et utile à votre écosystème."
    );

    const dgMessage  = buildDGMessage(personaFit, reading, organisationName);
    const valueCards   = getValueCards(landingPage, reading, actorType);
    const guarantees   = getGuarantees(publicAngle, landingPage, personaFit);
    const processSteps = getProcessSteps(landingPage);
    const faq          = toArray(landingPage?.copy?.faq || landingPage?.faq).slice(0, 4);

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

            <div>
              ${buildHeroKicker(conversationLabel)}
              <h1>${safe(soften(heroTitle))}</h1>
              ${buildHeroIntro(personName, organisationName, heroLead, readingLabel)}
              <div class="landing-actions">
                <a class="landing-btn" href="${safe(cta.href)}">${safe(cta.label)}</a>
                <a class="landing-btn landing-btn--ghost" href="#securite-immediate">Voir le cadre</a>
              </div>
              <p class="landing-reassurance">15 minutes · sans engagement · aucun dossier à préparer · aucune donnée confidentielle attendue.</p>
            </div>

            <aside class="landing-hero-side">
              ${filmBlock}
              <div class="landing-hero__card">
                <h2>Une position à qualifier</h2>
                <p>${buildHeroCardIntro(readingLabel)}</p>
                ${buildIdentityLine(personName, personRole, organisationName, readingLabel)}
              </div>
            </aside>

          </div>
        </div>
      </section>

      ${buildSafetySection(guarantees, cta)}

      ${buildWhySection(why, organisationName, personName, personRole, positionWhy, actorType)}

      ${buildValueSection(valueCards, landingPage)}

      ${ctaBand(cta, "dark")}

      ${buildFurtherDetailsSection({
        readingLabel,
        publicAngle,
        formulation,
        angle,
        conversation,
        contextLabel,
        conversationLabel,
        dgMessage,
        complementaryAngles,
        processSteps,
        faq,
        cta
      })}

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
