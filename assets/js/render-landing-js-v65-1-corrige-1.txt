/*
  En Plateau — render-landing.js
  Version V65.1 — landing one-to-one de conversion
  Corrections ciblées :
  - priorité aux champs anglePublic.* / formulationVariants.landing
  - vocabulaire d’activation adouci
  - bénéfices filtrés selon entreprise vs cabinet
  - garanties distinctes, non répétitives
  - suppression des blocs de diagnostic CRM
  - blocage des deals exclus si render-core expose Core.isExcludedDeal()
*/

(function () {
  "use strict";

  const Core = window.EnPlateauRenderCore;
  const root = document.getElementById("landing-root");

  if (!Core || !root) {
    console.error("render-core.js ou #landing-root introuvable.");
    return;
  }

  function safe(value) {
    return Core.escapeHTML(value || "");
  }

  function txt(...values) {
    return Core.text(...values);
  }

  function asArray(value) {
    return Core.toArray(value).filter(Boolean);
  }

  function normalize(value) {
    return Core.normalize(value || "");
  }

  function soften(value) {
    return String(value || "")
      .replace(/\bCroissance sous tension\b/g, "Croissance à piloter")
      .replace(/\bAdaptation sous contrainte\b/g, "Adaptation maîtrisée")
      .replace(/\bRéinvention sous crise\b/g, "Reconfiguration stratégique")
      .replace(/\bpoints? de bascule\b/gi, "moment de décision")
      .replace(/\bdégrade\b/gi, "met à l’épreuve")
      .replace(/\bdégrader\b/gi, "mettre à l’épreuve")
      .replace(/\bdégradation\b/gi, "évolution moins lisible")
      .replace(/\bruptures visibles\b/gi, "changements visibles")
      .replace(/\brupture\b/gi, "changement de nature")
      .replace(/\bcrise\b/gi, "moment de redéfinition")
      .replace(/\bcontraintes?\b/gi, "conditions")
      .replace(/\btensions?\b/gi, "points d’attention")
      .replace(/\bfragilise\b/gi, "rend moins lisible")
      .replace(/\bfragiliser\b/gi, "rendre moins lisible")
      .replace(/\bfragilité\b/gi, "point de vigilance")
      .replace(/\bfragile\b/gi, "à stabiliser")
      .replace(/\bplafond\b/gi, "seuil")
      .replace(/\bfacteur limitant\b/gi, "condition décisive")
      .replace(/\bblocage\b/gi, "limite")
      .replace(/\bvulnérabilités?\b/gi, "points sensibles")
      .replace(/\brisques?\b/gi, "points de vigilance");
  }

  function short(value, max = 560) {
    const cleaned = soften(String(value || "").replace(/\s+/g, " ").trim());
    if (cleaned.length <= max) return cleaned;
    const cut = cleaned.slice(0, max);
    const last = Math.max(cut.lastIndexOf("."), cut.lastIndexOf(";"), cut.lastIndexOf(","));
    return (last > 180 ? cut.slice(0, last) : cut).trim() + ".";
  }

  function actorLabel(actorType) {
    return actorType === "cabinet_conseil" ? "Cabinet · Conseil · Expertise" : "Organisation industrielle";
  }

  function card(label, title, text, accent = false) {
    if (!title && !text) return "";
    return `
      <article class="landing-card ${accent ? "landing-card--accent" : ""}">
        ${label ? `<span class="landing-label">${safe(label)}</span>` : ""}
        ${title ? `<h3>${safe(soften(title))}</h3>` : ""}
        ${text ? `<p>${safe(short(text, 640))}</p>` : ""}
      </article>
    `;
  }

  function isCabinetCard(item) {
    const blob = normalize([item?.label, item?.title, item?.profil].join(" "));
    return blob.includes("cabinet") || blob.includes("conseil") || blob.includes("expertise") || blob.includes("avocat");
  }

  function isOrganisationCard(item) {
    const blob = normalize([item?.label, item?.title, item?.profil].join(" "));
    return blob.includes("organisation") || blob.includes("entreprise") || blob.includes("industrielle");
  }

  function isFunctionCard(item) {
    const blob = normalize([item?.label, item?.title, item?.profil].join(" "));
    return blob.includes("fonction") || blob.includes("porteuse");
  }

  function isPersonCard(item) {
    const blob = normalize([item?.label, item?.title, item?.profil].join(" "));
    return blob.includes("intervenant") || blob.includes("personne") || blob.includes("senior");
  }

  function getReadingGain(reading, actorType) {
    const gains = reading?.gains || {};
    if (actorType === "cabinet_conseil") return gains.cabinetConseil || null;
    return gains.organisationIndustrielle || gains.organisation || null;
  }

  function getValueCards(landingPage, reading, actorType) {
    const pageCards = asArray(landingPage?.valueSection?.cards).map(item => ({
      label: item.label || item.profil,
      title: item.title || item.gain,
      text: item.text || (Array.isArray(item.detail) ? item.detail.join(" ") : item.detail)
    }));

    let filtered = [];

    if (actorType === "cabinet_conseil") {
      filtered = pageCards.filter(item => isCabinetCard(item) || isFunctionCard(item) || isPersonCard(item));
    } else {
      filtered = pageCards.filter(item => !isCabinetCard(item) && (isOrganisationCard(item) || isFunctionCard(item) || isPersonCard(item)));
    }

    if (filtered.length >= 3) return filtered.slice(0, 3);

    const readingCards = asArray(reading?.gainsParProfil).map(item => ({
      label: item.profil,
      title: item.gain,
      text: item.detail
    }));

    if (actorType === "cabinet_conseil") {
      filtered = readingCards.filter(item => isCabinetCard(item) || isFunctionCard(item) || isPersonCard(item));
    } else {
      filtered = readingCards.filter(item => !isCabinetCard(item) && (isOrganisationCard(item) || isFunctionCard(item) || isPersonCard(item)));
    }

    if (filtered.length >= 3) return filtered.slice(0, 3);

    const gain = getReadingGain(reading, actorType);

    return [
      ...(gain ? [{
        label: actorLabel(actorType),
        title: gain.court,
        text: Array.isArray(gain.detail) ? gain.detail.join(" ") : gain.detail
      }] : []),
      {
        label: "Fonction",
        title: "Faire reconnaître ce que votre fonction permet de voir.",
        text: "La contribution valorise une lecture située : ce que votre rôle permet de comprendre des conditions réelles de pilotage, de coordination et de décision."
      },
      {
        label: "Intervenant",
        title: "Construire une trace professionnelle crédible.",
        text: "La prise de parole devient un actif éditorial durable, préparé, réutilisable et aligné avec votre niveau d’exposition souhaité."
      }
    ].slice(0, 3);
  }

  function getGuarantees(publicAngle, landingPage, personaFit) {
    const base = [
      {
        title: "Aucune donnée interne attendue",
        text: "Aucun chiffre, marge, performance, site, client, fournisseur, incident ou décision confidentielle n’est demandé."
      },
      {
        title: "Une lecture de mécanisme",
        text: "L’échange ne vise pas à commenter l’organisation invitée. Il sert à formuler une lecture utile sur les conditions de pilotage, de coordination et de montée en capacité."
      },
      {
        title: "Un cadrage possible avec vos équipes",
        text: "Le périmètre peut être préparé avec les équipes communication, juridiques, affaires publiques ou corporate si nécessaire."
      }
    ];

    const publicReassurance = publicAngle?.reassurance
      ? [{ title: "Une intervention non intrusive", text: publicAngle.reassurance }]
      : [];

    const landingGuarantees = asArray(landingPage?.guarantees).slice(0, 2);

    const requiredMessages = asArray(personaFit?.internalValidationLayer?.requiredMessages)
      .filter(message => !normalize(message).includes("mise en regard"))
      .slice(0, 2)
      .map(message => ({
        title: soften(message),
        text: "Ce point est intégré en amont dans le cadrage éditorial."
      }));

    const all = [...base, ...publicReassurance, ...landingGuarantees, ...requiredMessages];
    const seen = new Set();

    return all.filter(item => {
      const key = normalize(item.title);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    }).slice(0, 5);
  }

  function getCTA(deal, reading, landingPage) {
    const pageCTA = landingPage?.cta || {};
    const source = txt(reading?.calSource, "lp-industrie-contribution");
    const defaultHref = `/demander-un-echange-editorial.html?source=${encodeURIComponent(source)}`;

    return {
      href: txt(deal?.ctaUrl, deal?.cta_url, deal?.activation?.ctaUrl, deal?.activation?.cta_url, deal?.landingPageUrl, deal?.landing_page_url, defaultHref),
      label: txt(deal?.ctaLabel, deal?.cta_label, deal?.activation?.ctaLabel, deal?.activation?.cta_label, "Réserver un échange éditorial de cadrage"),
      title: "Qualifier cette lecture en échange éditorial",
      text: txt(pageCTA.text, "15 minutes, sans engagement, pour qualifier l’angle, le périmètre de parole et les conditions de préparation."),
      deadline: txt(pageCTA.deadline, ""),
      footnote: txt(pageCTA.footnote, "Page non indexée · Échange sans engagement")
    };
  }

  function renderInactiveDeal(bundle) {
    const deal = bundle.deal;
    const organisation = Core.getOrganisation(deal);
    const person = Core.getPerson(deal);

    root.innerHTML = `
      <section class="landing-loading">
        <div class="landing-loading__box">
          <a class="landing-brand landing-brand--loading" href="/" aria-label="En Plateau — accueil">En Plateau</a>
          <h1>Cette position n’est plus activable.</h1>
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

  function render(bundle) {
    const { deal, angle, reading, conversation, context, landingPage } = bundle;

    if (!deal) {
      renderError(
        "Proposition introuvable",
        `Aucun contenu personnalisé ne correspond à l’identifiant indiqué dans l’URL.<br><br>Identifiant reçu : <strong>${safe(bundle.dealId || "aucun")}</strong>.`
      );
      return;
    }

    if (typeof Core.isExcludedDeal === "function" && Core.isExcludedDeal(deal)) {
      renderInactiveDeal(bundle);
      return;
    }

    if (!angle) {
      renderError(
        "Angle éditorial introuvable",
        `Le deal est reconnu, mais son angle éditorial n’a pas été retrouvé.<br><br>Code angle détecté : <strong>${safe(Core.getAngleCodeFromDeal(deal) || "non renseigné")}</strong>.`
      );
      return;
    }

    const person = Core.getPerson(deal);
    const organisation = Core.getOrganisation(deal);
    const actorType = Core.getActorType(deal);
    const why = Core.getWhy(deal);
    const personaFit = Core.getPersonaFit(angle);
    const publicAngle = angle.anglePublic || angle.formulationVariants?.anglePublic || {};
    const formulation = Core.getFormulationLanding(angle);
    const cta = getCTA(deal, reading, landingPage);

    const organisationName = txt(organisation.name, "Votre organisation");
    const personName = txt(person.fullName, "Intervenant pressenti");
    const personRole = txt(person.role, "");
    const readingLabel = txt(deal?.editorialContext?.typeLecture, reading?.label, angle?.typeLecture, "Lecture éditoriale");
    const contextLabel = soften(txt(deal?.editorialContext?.contexteTitre, context?.label, "Contexte éditorial"));
    const conversationTitle = txt(deal?.editorialContext?.conversation, conversation?.title, "Cycle Industrie & transformation des territoires");

    const heroTitle = txt(
      publicAngle.titreLanding,
      formulation.title,
      landingPage?.heroTitleHtml ? landingPage.heroTitleHtml.replace(/<br\s*\/?>/gi, " ").replace(/<\/?em>/gi, "") : "",
      "Votre lecture peut éclairer les conditions qui rendent une trajectoire industrielle lisible."
    );

    const heroLead = txt(
      publicAngle.accrocheLanding,
      formulation.accrocheLanding,
      landingPage?.heroLead,
      reading?.accroche,
      "En Plateau compose des conversations économiques à partir de lectures complémentaires, portées par des personnes identifiées pour ce qu’elles permettent de rendre lisible."
    );

    const organisationPromise = txt(
      personaFit?.organizationLayer?.promise,
      why.organisation,
      `${organisationName} a été identifié pour la manière dont son expérience industrielle permet d’éclairer une question partagée par de nombreux acteurs.`
    );

    const dgMessage = txt(
      personaFit?.organizationLayer?.dgReadableMessage,
      reading?.motivationCentrale,
      "Cette prise de parole valorise une capacité de lecture utile aux décideurs, partenaires et parties prenantes."
    );

    const speakerMotivation = txt(
      personaFit?.speakerPersona?.motivation,
      reading?.motivationCentrale,
      "Faire reconnaître une lecture située, utile et publiquement tenable."
    );

    const personWhy = txt(
      why.person,
      `${personName} est pressenti parce que sa fonction permet de relier les conditions concrètes de pilotage, de coordination et de décision.`
    );

    const positionWhy = txt(
      publicAngle.promesseIntervenant,
      formulation.promesseIntervenant,
      why.position,
      angle.attenduIntervenant,
      "Cette position permettrait d’éclairer les conditions qui rendent une trajectoire industrielle réellement pilotable : priorités, coordination, continuité, qualité d’exécution et lisibilité de la décision."
    );

    const angleTitle = txt(publicAngle.titreLanding, formulation.title, angle.questionPublique, angle.titreAngle, angle.questionEditoriale);
    const angleIntro = txt(publicAngle.accrocheLanding, formulation.accrocheLanding, angle.questionActivation, angle.texteProgramme, angle.introMecanisme);
    const valueCards = getValueCards(landingPage, reading, actorType);
    const guarantees = getGuarantees(publicAngle, landingPage, personaFit);
    const faq = asArray(landingPage?.faq).slice(0, 4);

    const complementaryAngles = asArray(angle.complementaryCodes)
      .map(code => Core.getAngleByCode(code))
      .filter(other => other && normalize(other.typeLecture) !== normalize(angle.typeLecture))
      .slice(0, 3);

    root.innerHTML = `
      <div class="landing-top">
        <div class="landing-top__inner">
          <a class="landing-brand" href="/" aria-label="En Plateau — accueil">En Plateau</a>
          <div class="landing-top__meta">Proposition éditoriale personnalisée</div>
        </div>
      </div>

      <section class="landing-hero">
        <div class="landing-container">
          <div class="landing-hero__grid">
            <div>
              <p class="landing-kicker">Saison inaugurale · Cycle Industrie</p>
              <h1>${safe(soften(heroTitle))}</h1>

              <p class="landing-lead"><strong>${safe(organisationName)} a été identifié pour contribuer à une conversation économique en cours de composition.</strong></p>
              <p class="landing-lead">${safe(short(heroLead, 560))}</p>

              <div class="landing-actions">
                <a class="landing-btn" href="${safe(cta.href)}">${safe(cta.label)}</a>
                <a class="landing-btn landing-btn--ghost" href="#angle-propose">Voir l’angle proposé</a>
              </div>

              <p class="landing-reassurance">15 minutes · sans engagement · pour qualifier l’angle, le périmètre de parole et les conditions de préparation.</p>
            </div>

            <aside class="landing-hero__card">
              <h2>${safe(soften(readingLabel))}</h2>
              <p>${safe(short(speakerMotivation, 360))}</p>

              <div class="landing-identity">
                <span>Organisation</span>
                <strong>${safe(organisationName)}</strong>
              </div>

              <div class="landing-identity">
                <span>Intervenant pressenti</span>
                <strong>${safe(personName)}${personRole ? "<br>" + safe(personRole) : ""}</strong>
              </div>

              <div class="landing-identity">
                <span>Position</span>
                <strong>${safe(actorLabel(actorType))}</strong>
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
              <div class="landing-point">
                <h3>Pourquoi votre organisation</h3>
                <p>${safe(short(organisationPromise, 620))}</p>
              </div>

              <div class="landing-point">
                <h3>Pourquoi votre rôle</h3>
                <p>${safe(short(personWhy, 620))}</p>
              </div>

              <div class="landing-point">
                <h3>Pourquoi cette position</h3>
                <p>${safe(short(positionWhy, 680))}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="landing-section landing-section--dark" id="angle-propose">
        <div class="landing-container">
          <div class="landing-head landing-head--left">
            <p class="landing-kicker">${safe(contextLabel)}</p>
            <h2>${safe(soften(angleTitle))}</h2>
            <p>${safe(short(angleIntro, 680))}</p>
          </div>

          <div class="landing-grid landing-grid--3">
            ${card("Conversation", conversationTitle, txt(conversation?.narrativeText, conversation?.description, "Une conversation construite pour mettre en regard des lectures complémentaires."))}
            ${card("Ce que votre lecture apporte", "Une lecture identifiable par les décideurs", dgMessage)}
            ${card("Format", "Une position préparée, pas une exposition improvisée", "L’échange éditorial permet de cadrer le sujet, le périmètre de parole et les conditions de préparation avec vos équipes si nécessaire.", true)}
          </div>
        </div>
      </section>

      <section class="landing-section landing-section--light">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Ce que produit la contribution</p>
            <h2>Une contribution utile à l’organisation, à la fonction et à la personne qui la porte.</h2>
            <p>${safe(short(txt(landingPage?.valueSection?.intro, "La contribution produit un actif éditorial préparé, sécurisé et réutilisable."), 520))}</p>
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
              <h2>Ce que l’échange permet de sécuriser.</h2>
              ${guarantees.slice(0, 4).map(item => `
                <div class="landing-point">
                  <h3>${safe(soften(item.title))}</h3>
                  <p>${safe(short(item.text, 440))}</p>
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
                  <h2>Votre lecture s’inscrit dans une conversation composée.</h2>
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
                  <h2>Les points de réassurance avant l’échange.</h2>
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
          <p>${safe(short(cta.text, 460))}</p>

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
