/*
  En Plateau — render-landing.js
  Version V65.5
  Modifications vs V65.4 :
  - Suppression du bloc .landing-emission dans la carte hero (brouillon, image en couleur)
  - Nouvelle colonne droite hero : bloc .landing-emission-film (style home, image B&W)
    + légende journaliste/média sous l'image
    + carte hero (.landing-hero__card) en dessous
  - Restructuration du landing-hero__grid : 2 colonnes
    gauche : titre + lead + CTA
    droite  : film > légende > carte
  - buildRaritySignal : texte corrigé
  - buildIdentityLine : suppression de l'émission (maintenant au-dessus de la carte)
  Aucune classe HTML existante supprimée. Aucune modification de render-core.js.
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
    if (isOperationalRole(personRole) && norm(fromData).includes("strateg")) {
      return "Lecture opérationnelle / organisation industrielle";
    }
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
        "Réserver un échange éditorial de cadrage"
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

    const outletLabel = emission ? `${emission} · ${media}` : media;
    const altLabel    = emission || media;

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
        <p>Parmi les quelques acteurs pressentis pour tenir la lecture
          <strong>${safe(reading)}</strong> de cette conversation,
          seule une position sera retenue par le comité éditorial.</p>
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
        <span>Proposition adressée à</span>
        <strong>${parts.join(" · ")}</strong>
      </div>

      <div class="landing-identity">
        <span>Lecture proposée</span>
        <strong>${safe(soften(readingLabel)) || "Lecture éditoriale"}</strong>
      </div>

      ${buildRaritySignal(readingLabel)}`;
  }

  /* ─────────────────────────────────────────────────────────
     INTRO HERO
  ───────────────────────────────────────────────────────── */
  function buildHeroIntro(personName, organisationName, heroLead) {
    const hasRealName = personName && personName !== "Intervenant pressenti";
    const hasRealOrg  = organisationName && organisationName !== "Votre organisation";

    if (hasRealName && hasRealOrg) {
      return `<p class="landing-lead">
        <strong>Cette proposition a été préparée à l'attention de ${safe(personName)},</strong>
        dans le cadre de la composition du cycle Industrie. La lecture portée depuis
        ${safe(organisationName)} a été identifiée comme un point d'appui pertinent
        pour la conversation en cours.
      </p>
      <p class="landing-lead">${safe(shortText(heroLead, 480))}</p>`;
    }
    if (hasRealOrg) {
      return `<p class="landing-lead">
        <strong>${safe(organisationName)} a été identifié pour contribuer à une conversation économique en cours de composition.</strong>
      </p>
      <p class="landing-lead">${safe(shortText(heroLead, 480))}</p>`;
    }
    return `<p class="landing-lead">${safe(shortText(heroLead, 560))}</p>`;
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
      if (isOperationalRole(personRole) && hasRealName)
        return `La fonction de ${personName} — ${personRole} — place cette lecture au niveau où les arbitrages concrets se forment : flux, coordination, montée en capacité, stabilité d'exécution.`;
      if (why.person && hasRealName)
        return shortText(why.person, 280);
      if (hasRealName && personRole)
        return `${personName} est pressenti pour la capacité que sa fonction — ${personRole} — confère à cette lecture : une position légitime, reconnue par ses pairs, non exposante.`;
      return "";
    })();

    const positionFragment = positionWhy
      ? shortText(positionWhy, 260)
      : actorType === "cabinet_conseil"
        ? "Cette position éditoriale permet de formuler une lecture utile aux décideurs sans présenter une mission, une méthode ou un cas client."
        : "Cette position permettrait d'éclairer les conditions qui rendent une montée en capacité réellement pilotable : arbitrer les priorités, coordonner les flux, préserver la lisibilité de la trajectoire.";

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
        ? `La lecture portée depuis ${organisationName} rend visible ce que d'autres acteurs du cycle ne peuvent pas formuler depuis leur position. C'est précisément ce décalage de point de vue qui lui donne sa valeur éditoriale.`
        : "Cette prise de parole valorise une capacité de lecture utile aux décideurs, partenaires et parties prenantes."
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
      "Faire reconnaître une lecture située, utile et publiquement tenable."
    );

    const dgMessage  = buildDGMessage(personaFit, reading, organisationName);
    const valueCards = getValueCards(landingPage, reading, actorType);
    const guarantees = getGuarantees(publicAngle, landingPage, personaFit);
    const faq        = toArray(landingPage?.faq).slice(0, 4);

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
              ${buildHeroIntro(personName, organisationName, heroLead)}
              <div class="landing-actions">
                <a class="landing-btn" href="${safe(cta.href)}">${safe(cta.label)}</a>
                <a class="landing-btn landing-btn--ghost" href="#angle-propose">Voir l'angle proposé</a>
              </div>
              <p class="landing-reassurance">15 minutes · sans engagement · pour qualifier l'angle, le périmètre de parole et les conditions de préparation.</p>
            </div>

            <!-- COLONNE DROITE : film > carte -->
            <aside class="landing-hero-side">
              ${filmBlock}
              <div class="landing-hero__card">
                <h2>Pourquoi contribuer&nbsp;?</h2>
                <p>${safe(shortText(speakerMotivation, 300))}</p>
                ${buildIdentityLine(personName, personRole, organisationName, readingLabel)}
              </div>
            </aside>

          </div>
        </div>
      </section>

      <section class="landing-section landing-section--light" id="pourquoi-vous">
        <div class="landing-container">
          <div class="landing-split">
            <div class="landing-split__visual">
              <h2>Pourquoi cette proposition vous est adressée.</h2>
            </div>
            <div class="landing-split__copy">
              ${buildWhyNarrative(why, organisationName, personName, personRole, positionWhy, actorType)}
            </div>
          </div>
        </div>
      </section>

      <section class="landing-section landing-section--dark" id="angle-propose">
        <div class="landing-container">
          <div class="landing-head landing-head--left">
            <p class="landing-kicker">${safe(contextLabel)}</p>
            <h2>${safe(soften(txt(publicAngle.titreLanding, formulation.title, angle.questionPublique, angle.titreAngle, angle.questionEditoriale)))}</h2>
            <p>${safe(shortText(txt(publicAngle.accrocheLanding, formulation.accrocheLanding, angle.questionActivation, angle.texteProgramme, angle.introMecanisme), 680))}</p>
          </div>
          <div class="landing-grid landing-grid--3">
            ${card("Conversation", conversationLabel, txt(conversation?.narrativeText, conversation?.description, "Une conversation construite pour mettre en regard des lectures complémentaires."))}
            ${card("Ce que votre lecture apporte", "Une lecture identifiable par les décideurs", dgMessage)}
            ${card("Format", "Une position préparée, pas une exposition improvisée", "L'échange éditorial permet de cadrer le sujet, le périmètre de parole et les conditions de préparation avec vos équipes si nécessaire.", true)}
          </div>
        </div>
      </section>

      <section class="landing-section landing-section--light">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Ce que produit la contribution</p>
            <h2>Une contribution utile à l'organisation, à la fonction et à la personne qui la porte.</h2>
            <p>${safe(shortText(txt(landingPage?.valueSection?.intro, "La contribution produit un actif éditorial préparé, sécurisé et réutilisable."), 520))}</p>
          </div>
          <div class="landing-grid landing-grid--3">
            ${valueCards.map((item, i) => card(item.label, item.title, item.text, i === 2)).join("")}
          </div>
        </div>
      </section>

      <section class="landing-section landing-section--dark">
        <div class="landing-container">
          <div class="landing-decision">
            <div class="landing-decision__visual"></div>
            <div class="landing-decision__copy">
              <h2>Ce que l'échange permet de sécuriser.</h2>
              ${guarantees.map(item => `
                <div class="landing-point">
                  <h3>${safe(soften(item.title))}</h3>
                  <p>${safe(shortText(item.text, 440))}</p>
                </div>`).join("")}
            </div>
          </div>
        </div>
      </section>

      ${complementaryAngles.length ? `
        <section class="landing-section landing-section--light">
          <div class="landing-container">
            <div class="landing-head">
              <p class="landing-kicker">Mise en regard</p>
              <h2>Votre lecture s'inscrit dans une conversation composée.</h2>
              <p>Les autres lectures du même contexte permettent de créer une conversation équilibrée : chaque position éclaire un aspect différent du même phénomène.</p>
            </div>
            <div class="landing-grid landing-grid--3">
              ${complementaryAngles.map(other => {
                const c = other.complementaryCard || {};
                return card(
                  c.label || other.typeLecture || "Lecture complémentaire",
                  c.title || other.questionCourte || other.titreAngle || other.questionPublique,
                  c.headline || other.ceQueCetteLecturePermetDeVoir || other.angleRendVisible || "Une autre lecture du même contexte éditorial."
                );
              }).join("")}
            </div>
          </div>
        </section>` : ""}

      ${faq.length ? `
        <section class="landing-section landing-section--dark">
          <div class="landing-container">
            <div class="landing-head">
              <p class="landing-kicker">Questions fréquentes</p>
              <h2>Les points de réassurance avant l'échange.</h2>
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
