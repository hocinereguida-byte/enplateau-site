/*
  En Plateau — render-landing.js
  Version V65.3 — personnalisation narrative dispersée
  Périmètre :
  - intègre les 6 interventions de personnalisation invisible
  - fusionne la section "Pourquoi vous" en narration continue (1 bloc)
  - remplace les 3 landing-identity par une ligne éditoriale unique
  - adapte le kicker hero au label de conversation réel
  - ancre le message DG à l'organisation identifiée
  - met à jour landing-top__meta avec le cycle réel
  - ne touche à aucune classe, ID, chemin CSS/JS, ni render-core.js
*/

(function () {
  "use strict";

  const Core = window.EnPlateauRenderCore;
  const root = document.getElementById("landing-root");

  if (!Core || !root) {
    console.error("En Plateau — render-core.js ou #landing-root introuvable.");
    return;
  }

  function safe(value) {
    return Core.escapeHTML(value || "");
  }

  function txt(...values) {
    return Core.text(...values);
  }

  function toArray(value) {
    return Core.toArray(value).filter(Boolean);
  }

  function norm(value) {
    return Core.normalize(value || "");
  }

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
      .replace(/\bpoint de bascule\b/gi, "moment de décision")
      .replace(/\bpoints de bascule\b/gi, "moments de décision")
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
      .replace(/À partir de quand chaque volume supplémentaire met à l'épreuve-t-il plus l'organisation qu'il ne renforce l'activité\s*\?/gi, "Quelles conditions rendent une montée en capacité réellement pilotable ?");
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
    return (
      r.includes("industri") ||
      r.includes("supply") ||
      r.includes("operations") ||
      r.includes("operation") ||
      r.includes("production") ||
      r.includes("qualite") ||
      r.includes("maintenance") ||
      r.includes("directeur usine") ||
      r.includes("site industriel")
    );
  }

  function actorLabel(actorType) {
    return actorType === "cabinet_conseil"
      ? "Cabinet · Conseil · Expertise"
      : "Organisation industrielle";
  }

  function displayReadingLabel(reading, angle, deal, personRole) {
    const fromData = txt(
      deal?.editorialContext?.typeLecture,
      deal?.typeLecture,
      deal?.lecture,
      reading?.label,
      angle?.typeLecture
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
        ${text ? `<p>${safe(shortText(text, 640))}</p>` : ""}
      </article>
    `;
  }

  function isCabinetCard(item) {
    const blob = norm([item?.label, item?.title, item?.profil].join(" "));
    return blob.includes("cabinet") || blob.includes("conseil") || blob.includes("expertise") || blob.includes("avocat");
  }

  function isOrgCard(item) {
    const blob = norm([item?.label, item?.title, item?.profil].join(" "));
    return blob.includes("organisation") || blob.includes("entreprise") || blob.includes("industrielle");
  }

  function isFunctionCard(item) {
    const blob = norm([item?.label, item?.title, item?.profil].join(" "));
    return blob.includes("fonction") || blob.includes("porteuse");
  }

  function isPersonCard(item) {
    const blob = norm([item?.label, item?.title, item?.profil].join(" "));
    return blob.includes("intervenant") || blob.includes("personne") || blob.includes("senior");
  }

  function getValueCards(landingPage, reading, actorType) {
    const pageCards = toArray(landingPage?.valueSection?.cards).map(item => ({
      label: item.label || item.profil,
      title: item.title || item.gain,
      text: item.text || (Array.isArray(item.detail) ? item.detail.join(" ") : item.detail)
    }));

    let filtered = pageCards.filter(item => {
      if (actorType === "cabinet_conseil") return isCabinetCard(item) || isFunctionCard(item) || isPersonCard(item);
      return !isCabinetCard(item) && (isOrgCard(item) || isFunctionCard(item) || isPersonCard(item));
    });

    if (filtered.length >= 3) return filtered.slice(0, 3);

    const gains = toArray(reading?.gainsParProfil).map(item => ({
      label: item.profil,
      title: item.gain,
      text: item.detail
    }));

    filtered = gains.filter(item => {
      if (actorType === "cabinet_conseil") return isCabinetCard(item) || isFunctionCard(item) || isPersonCard(item);
      return !isCabinetCard(item) && (isOrgCard(item) || isFunctionCard(item) || isPersonCard(item));
    });

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
    const source = txt(reading?.calSource, "lp-industrie-contribution");
    return {
      href: txt(
        deal?.ctaUrl,
        deal?.cta_url,
        deal?.activation?.ctaUrl,
        deal?.activation?.cta_url,
        deal?.landingPageUrl,
        deal?.landing_page_url,
        `/demander-un-echange-editorial.html?source=${encodeURIComponent(source)}`
      ),
      label: txt(
        deal?.ctaLabel,
        deal?.cta_label,
        deal?.activation?.ctaLabel,
        deal?.activation?.cta_label,
        "Réserver un échange éditorial de cadrage"
      ),
      title: "Qualifier cette lecture en échange éditorial",
      text: txt(
        pageCTA.text,
        "15 minutes, sans engagement, pour qualifier l'angle, le périmètre de parole et les conditions de préparation."
      ),
      deadline: txt(pageCTA.deadline, ""),
      footnote: txt(pageCTA.footnote, "Page non indexée · Échange sans engagement")
    };
  }

  function getGuarantees(publicAngle, landingPage, personaFit) {
    const base = [
      {
        title: "Aucune donnée interne attendue",
        text: "Aucun chiffre, marge, performance, site, client, fournisseur, incident ou décision confidentielle n'est demandé."
      },
      {
        title: "Une lecture de mécanisme",
        text: "L'échange ne vise pas à commenter l'organisation invitée. Il sert à formuler une lecture utile sur les conditions de pilotage, de coordination et de montée en capacité."
      },
      {
        title: "Un cadrage possible avec vos équipes",
        text: "Le périmètre peut être préparé avec les équipes communication, juridiques, affaires publiques ou corporate si nécessaire."
      }
    ];

    const extra = [];
    if (publicAngle?.reassurance) {
      extra.push({
        title: "Une intervention non intrusive",
        text: publicAngle.reassurance
      });
    }

    const pageGuarantees = toArray(landingPage?.guarantees).slice(0, 1);

    const required = toArray(personaFit?.internalValidationLayer?.requiredMessages)
      .filter(message => !norm(message).includes("mise en regard"))
      .slice(0, 1)
      .map(message => ({
        title: soften(message),
        text: "Ce point est intégré en amont dans le cadrage éditorial."
      }));

    const all = [...base, ...extra, ...pageGuarantees, ...required];
    const seen = new Set();

    return all.filter(item => {
      const key = norm(item.title);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
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
     INTERVENTION 1 — Hero intro narrative (non-formulaire)
     Tisse le prénom dans une phrase éditoriale,
     sans le mettre en gras isolé comme un champ rempli.
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
     INTERVENTION 2 — Identité hero : ligne éditoriale unique
     Remplace les 3 blocs landing-identity par une seule
     ligne de présentation sobre, moins "publipostage".
  ───────────────────────────────────────────────────────── */
  function buildIdentityLine(personName, personRole, organisationName, readingLabel) {
    const hasRealName = personName && personName !== "Intervenant pressenti";
    const hasRealOrg  = organisationName && organisationName !== "Votre organisation";

    const namePart = hasRealName ? safe(personName) : null;
    const rolePart = personRole ? safe(personRole) : null;
    const orgPart  = hasRealOrg ? safe(organisationName) : null;
    const reading  = safe(soften(readingLabel));

    return `
      <div class="landing-identity landing-identity--single">
        <span>Proposition adressée à</span>
        <strong>
          ${[namePart, rolePart, orgPart].filter(Boolean).join(" · ")}
        </strong>
      </div>
      <div class="landing-identity">
        <span>Lecture proposée</span>
        <strong>${reading || "Lecture éditoriale"}</strong>
      </div>
    `;
  }

  /* ─────────────────────────────────────────────────────────
     INTERVENTION 3 — Section "Pourquoi vous" : narration continue
     Un seul bloc paragraphe au lieu de 3 h3 séparés.
     Le CSS cible .landing-why-narrative (classe nouvelle,
     ajoutée dans landing.css V65.3 sans supprimer les
     classes existantes).
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
      if (isOperationalRole(personRole) && hasRealName) {
        return `La fonction de ${personName} — ${personRole} — place cette lecture au niveau où les arbitrages concrets se forment : flux, coordination, montée en capacité, stabilité d'exécution.`;
      }
      if (why.person && hasRealName) {
        return shortText(why.person, 280);
      }
      if (hasRealName && personRole) {
        return `${personName} est pressenti pour la capacité que sa fonction — ${personRole} — confère à cette lecture : une position légitime, reconnue par ses pairs, non exposante.`;
      }
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
      </div>
    `;
  }

  /* ─────────────────────────────────────────────────────────
     INTERVENTION 4 — Kicker hero : label de conversation réel
  ───────────────────────────────────────────────────────── */
  function buildHeroKicker(conversationLabel) {
    const isGeneric = norm(conversationLabel).includes("industrie") &&
                      norm(conversationLabel).includes("transformation");
    const label = (!conversationLabel || isGeneric)
      ? "Saison inaugurale · Cycle Industrie"
      : `Saison inaugurale · ${conversationLabel}`;
    return `<p class="landing-kicker">${safe(label)}</p>`;
  }

  /* ─────────────────────────────────────────────────────────
     INTERVENTION 5 — DG message ancré à l'organisation
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
     INTERVENTION 6 — landing-top__meta : cycle réel
  ───────────────────────────────────────────────────────── */
  function buildTopMeta(conversationLabel) {
    const isGeneric = !conversationLabel ||
                      (norm(conversationLabel).includes("industrie") &&
                       norm(conversationLabel).includes("transformation"));
    const label = isGeneric ? "Cycle Industrie" : conversationLabel;
    return `Proposition · ${safe(label)} · Non indexée`;
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
      </section>
    `;
  }

  function renderInactiveDeal(bundle) {
    const deal = bundle.deal;
    const organisation = Core.getOrganisation(deal);
    const person = Core.getPerson(deal);
    root.innerHTML = `
      <section class="landing-loading">
        <div class="landing-loading__box">
          <a class="landing-brand landing-brand--loading" href="/" aria-label="En Plateau — accueil">En Plateau</a>
          <h1>Cette position n'est plus activable.</h1>
          <p>
            Le deal <strong>${safe(Core.getDealId(deal) || bundle.dealId)}</strong>
            ${organisation.name ? `lié à <strong>${safe(organisation.name)}</strong>` : ""}
            ${person.fullName ? ` / <strong>${safe(person.fullName)}</strong>` : ""}
            est conservé comme trace CRM, mais ne doit pas être présenté comme landing prospect.
            <br><br>Motif : ${safe(Core.getExclusionReason(deal))}
          </p>
        </div>
      </section>
    `;
  }

  /* ─────────────────────────────────────────────────────────
     RENDER PRINCIPAL
  ───────────────────────────────────────────────────────── */
  function render(bundle) {
    const { deal, angle, reading, conversation, context, landingPage } = bundle;

    if (!deal) {
      renderError(
        "Proposition introuvable",
        `Aucun contenu personnalisé ne correspond à l'identifiant indiqué dans l'URL.<br><br>Identifiant reçu : <strong>${safe(bundle.dealId || "aucun")}</strong>.`
      );
      return;
    }

    if (Core.isExcludedDeal(deal)) {
      renderInactiveDeal(bundle);
      return;
    }

    if (!angle) {
      renderError(
        "Angle éditorial introuvable",
        `Le deal est reconnu, mais son angle éditorial n'a pas été retrouvé.<br><br>Code angle détecté : <strong>${safe(Core.getAngleCodeFromDeal(deal) || "non renseigné")}</strong>.`
      );
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
    const personName        = txt(person.fullName, "Intervenant pressenti");
    const personRole        = cleanRole(person.role, organisationName);
    const readingLabel      = displayReadingLabel(reading, angle, deal, personRole);
    const contextLabel      = soften(txt(context?.label, deal?.editorialContext?.contexteTitre, "Contexte éditorial"));
    const conversationLabel = getConversationLabel(conversation, deal);

    const heroTitle = txt(
      publicAngle.titreLanding,
      formulation.title,
      landingPage?.heroTitleHtml
        ? landingPage.heroTitleHtml.replace(/<br\s*\/?>/gi, " ").replace(/<\/?em>/gi, "")
        : "",
      "Votre lecture peut éclairer les conditions qui rendent une trajectoire industrielle lisible."
    );

    const heroLead = txt(
      publicAngle.accrocheLanding,
      formulation.accrocheLanding,
      landingPage?.heroLead,
      reading?.accroche,
      "En Plateau compose des conversations économiques à partir de lectures complémentaires, portées par des personnes identifiées pour ce qu'elles permettent de rendre lisible."
    );

    const positionWhy = txt(
      publicAngle.promesseIntervenant,
      formulation.promesseIntervenant,
      why.position,
      ""
    );

    const speakerMotivation = txt(
      personaFit?.speakerPersona?.motivation,
      reading?.motivationCentrale,
      "Faire reconnaître une lecture située, utile et publiquement tenable."
    );

    const dgMessage      = buildDGMessage(personaFit, reading, organisationName);
    const valueCards     = getValueCards(landingPage, reading, actorType);
    const guarantees     = getGuarantees(publicAngle, landingPage, personaFit);
    const faq            = toArray(landingPage?.faq).slice(0, 4);

    const complementaryAngles = toArray(angle.complementaryCodes)
      .map(code => Core.getAngleByCode(code))
      .filter(other => other && norm(other.typeLecture) !== norm(angle.typeLecture))
      .slice(0, 3);

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

              ${buildHeroIntro(personName, organisationName, heroLead)}

              <div class="landing-actions">
                <a class="landing-btn" href="${safe(cta.href)}">${safe(cta.label)}</a>
                <a class="landing-btn landing-btn--ghost" href="#angle-propose">Voir l'angle proposé</a>
              </div>

              <p class="landing-reassurance">15 minutes · sans engagement · pour qualifier l'angle, le périmètre de parole et les conditions de préparation.</p>
            </div>

            <aside class="landing-hero__card">
              <h2>Pourquoi contribuer&nbsp;?</h2>
              <p>${safe(shortText(speakerMotivation, 360))}</p>

              ${buildIdentityLine(personName, personRole, organisationName, readingLabel)}
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
            ${valueCards.map((item, index) => card(item.label, item.title, item.text, index === 2)).join("")}
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
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </section>

      ${
        complementaryAngles.length
          ? `<section class="landing-section landing-section--light">
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
            </section>`
          : ""
      }

      ${
        faq.length
          ? `<section class="landing-section landing-section--dark">
              <div class="landing-container">
                <div class="landing-head">
                  <p class="landing-kicker">Questions fréquentes</p>
                  <h2>Les points de réassurance avant l'échange.</h2>
                </div>

                <div class="landing-grid landing-grid--2">
                  ${faq.map(item => card("", item.question, item.answer)).join("")}
                </div>
              </div>
            </section>`
          : ""
      }

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
