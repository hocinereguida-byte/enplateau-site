/*
  En Plateau — render-landing.js
  Version V65 — landing one-to-one de conviction
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

  function stripRiskWords(value) {
    return String(value || "")
      .replace(/\bcontraintes?\b/gi, "conditions")
      .replace(/\btensions?\b/gi, "points d’attention")
      .replace(/\bcrises?\b/gi, "moments de redéfinition")
      .replace(/\bfragilise[rs]?\b/gi, "fait évoluer")
      .replace(/\bfragilité\b/gi, "point de vigilance")
      .replace(/\bblocages?\b/gi, "limites")
      .replace(/\bplafond\b/gi, "seuil")
      .replace(/\béchec\b/gi, "écart")
      .replace(/\bvulnérabilités?\b/gi, "points sensibles");
  }

  function shortText(value, max = 440) {
    const cleaned = stripRiskWords(String(value || "").replace(/\s+/g, " ").trim());
    if (cleaned.length <= max) return cleaned;
    const cut = cleaned.slice(0, max);
    const last = Math.max(cut.lastIndexOf("."), cut.lastIndexOf(";"), cut.lastIndexOf(","));
    return (last > 160 ? cut.slice(0, last) : cut).trim() + ".";
  }

  function actorLabel(type) {
    return type === "cabinet_conseil" ? "Cabinet · Conseil · Expertise" : "Organisation industrielle";
  }

  function card(label, title, text, accent = false) {
    if (!title && !text) return "";
    return `
      <article class="landing-card ${accent ? "landing-card--accent" : ""}">
        ${label ? `<span class="landing-label">${safe(label)}</span>` : ""}
        ${title ? `<h3>${safe(stripRiskWords(title))}</h3>` : ""}
        ${text ? `<p>${safe(shortText(text, 520))}</p>` : ""}
      </article>
    `;
  }

  function getReadingGain(reading, actorType) {
    const gains = reading?.gains || {};
    if (actorType === "cabinet_conseil") return gains.cabinetConseil || null;
    return gains.organisationIndustrielle || gains.organisation || null;
  }

  function getValueCards(landingPage, reading, actorType) {
    const cards = asArray(landingPage?.valueSection?.cards);
    if (cards.length) return cards;

    const gains = reading?.gainsParProfil || [];
    if (Array.isArray(gains) && gains.length) {
      return gains.map(item => ({ label: item.profil, title: item.gain, text: item.detail }));
    }

    const gain = getReadingGain(reading, actorType);
    return gain ? [{ label: actorLabel(actorType), title: gain.court, text: Array.isArray(gain.detail) ? gain.detail.join(" ") : gain.detail }] : [];
  }

  function getGuarantees(landingPage, personaFit, formulation) {
    const guarantees = asArray(landingPage?.guarantees);
    const required = asArray(personaFit?.internalValidationLayer?.requiredMessages).map(message => ({
      title: message,
      text: "Ce point est intégré au cadrage éditorial afin de sécuriser le niveau d’exposition."
    }));

    const reassurance = formulation?.reassurance
      ? [{ accent: true, title: "Une prise de parole non intrusive", text: formulation.reassurance }]
      : [];

    return [...reassurance, ...guarantees, ...required].slice(0, 6);
  }

  function getCTA(deal, reading, landingPage) {
    const pageCTA = Core.getCTAFromLandingPage(landingPage);
    const source = txt(reading?.calSource, "lp-industrie-contribution");
    const defaultHref = `/demander-un-echange-editorial.html?source=${encodeURIComponent(source)}`;

    return {
      href: txt(deal?.ctaUrl, deal?.cta_url, deal?.activation?.ctaUrl, deal?.activation?.cta_url, deal?.landingPageUrl, deal?.landing_page_url, defaultHref),
      label: txt(deal?.ctaLabel, deal?.cta_label, deal?.activation?.ctaLabel, deal?.activation?.cta_label, "Réserver un échange éditorial de cadrage"),
      title: txt(pageCTA?.title, "Vérifier si cette position est la bonne."),
      text: txt(pageCTA?.text, "Un échange de 15 minutes, sans engagement, pour confirmer l’angle, le niveau d’exposition et les conditions de préparation."),
      deadline: txt(pageCTA?.deadline, ""),
      footnote: txt(pageCTA?.footnote, "Page non indexée · Échange sans engagement")
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
            <br><br>
            Motif : ${safe(Core.getExclusionReason(deal))}
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
      renderError("Proposition introuvable", `Aucun contenu personnalisé ne correspond à l’identifiant indiqué dans l’URL.<br><br>Identifiant reçu : <strong>${safe(bundle.dealId || "aucun")}</strong>.`);
      return;
    }

    if (Core.isExcludedDeal(deal)) {
      renderInactiveDeal(bundle);
      return;
    }

    if (!angle) {
      renderError("Angle éditorial introuvable", `Le deal est reconnu, mais son angle éditorial n’a pas été retrouvé.<br><br>Code angle détecté : <strong>${safe(Core.getAngleCodeFromDeal(deal) || "non renseigné")}</strong>.`);
      return;
    }

    const person = Core.getPerson(deal);
    const organisation = Core.getOrganisation(deal);
    const actorType = Core.getActorType(deal);
    const why = Core.getWhy(deal);
    const personaFit = Core.getPersonaFit(angle);
    const formulation = Core.getFormulationLanding(angle);
    const cta = getCTA(deal, reading, landingPage);

    const readingLabel = txt(reading?.label, angle?.typeLecture, "Lecture éditoriale");
    const organisationName = txt(organisation.name, "Votre organisation");
    const personName = txt(person.fullName, "Intervenant pressenti");
    const personRole = txt(person.role, "");
    const contextLabel = txt(context?.label, angle?.contextLabel, deal?.editorialContext?.contexteTitre, "Contexte éditorial");
    const conversationTitle = txt(conversation?.title, deal?.editorialContext?.conversation, "Cycle Industrie & transformation des territoires");

    const heroTitle = txt(
      formulation?.title,
      landingPage?.heroTitleHtml ? landingPage.heroTitleHtml.replace(/<br\s*\/?>/gi, " ").replace(/<\/?em>/gi, "") : "",
      "Votre lecture peut contribuer à clarifier les trajectoires industrielles qui se redessinent."
    );

    const heroLead = txt(
      formulation?.shortIntro,
      landingPage?.heroLead,
      reading?.accroche,
      "En Plateau compose des conversations économiques à partir de lectures complémentaires, portées par des personnes identifiées pour ce qu’elles permettent de rendre lisible."
    );

    const organisationPromise = txt(
      personaFit?.organizationLayer?.promise,
      why.organisation,
      `${organisationName} a été identifié pour la manière dont son activité permet d’éclairer une lecture utile du cycle Industrie.`
    );

    const dgMessage = txt(
      personaFit?.organizationLayer?.dgReadableMessage,
      formulation?.valueForSpeaker,
      reading?.motivationCentrale,
      "Cette prise de parole permet de faire reconnaître une capacité de lecture utile aux décideurs, partenaires et parties prenantes."
    );

    const speakerMotivation = txt(
      personaFit?.speakerPersona?.motivation,
      formulation?.valueForSpeaker,
      reading?.motivationCentrale,
      "Faire reconnaître une lecture située, utile et publiquement tenable."
    );

    const personWhy = txt(
      why.person,
      `${personName} est pressenti parce que sa fonction permet de porter cette lecture avec légitimité.`
    );

    const positionWhy = txt(
      why.position,
      formulation?.promesseIntervenant,
      angle?.attenduIntervenant,
      "La position proposée vise à transformer une expérience située en contribution claire, crédible et non intrusive."
    );

    const angleTitle = txt(
      formulation?.title,
      angle?.questionPublique,
      angle?.titreAngle,
      angle?.questionEditoriale,
      "Angle éditorial proposé"
    );

    const angleIntro = txt(
      formulation?.accrocheLanding,
      formulation?.shortIntro,
      angle?.questionActivation,
      angle?.texteProgramme,
      angle?.introMecanisme,
      "Cet angle permet de formuler une lecture utile sans exposer de situation interne."
    );

    const valueCards = getValueCards(landingPage, reading, actorType).slice(0, 3);
    const guarantees = getGuarantees(landingPage, personaFit, formulation);
    const faq = asArray(landingPage?.faq).slice(0, 4);
    const complementaryAngles = asArray(angle?.complementaryCodes).map(code => Core.getAngleByCode(code)).filter(Boolean).slice(0, 3);

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
              <h1>${safe(stripRiskWords(heroTitle))}</h1>

              <p class="landing-lead"><strong>${safe(organisationName)} a été identifié pour contribuer à une conversation économique en cours de composition.</strong></p>
              <p class="landing-lead">${safe(shortText(heroLead, 520))}</p>

              <div class="landing-actions">
                <a class="landing-btn" href="${safe(cta.href)}">${safe(cta.label)}</a>
                <a class="landing-btn landing-btn--ghost" href="#angle-propose">Voir l’angle proposé</a>
              </div>

              <p class="landing-reassurance">15 minutes · Sans engagement · Objectif : vérifier la pertinence de l’angle avant toute décision.</p>
            </div>

            <aside class="landing-hero__card">
              <h2>${safe(readingLabel)}</h2>
              <p>${safe(shortText(speakerMotivation, 360))}</p>

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
                <p>${safe(shortText(organisationPromise, 520))}</p>
              </div>

              <div class="landing-point">
                <h3>Pourquoi votre rôle</h3>
                <p>${safe(shortText(personWhy, 520))}</p>
              </div>

              <div class="landing-point">
                <h3>Pourquoi cette position</h3>
                <p>${safe(shortText(positionWhy, 560))}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="landing-section landing-section--dark" id="angle-propose">
        <div class="landing-container">
          <div class="landing-head landing-head--left">
            <p class="landing-kicker">${safe(contextLabel)}</p>
            <h2>${safe(stripRiskWords(angleTitle))}</h2>
            <p>${safe(shortText(angleIntro, 620))}</p>
          </div>

          <div class="landing-grid landing-grid--3">
            ${card("Conversation", conversationTitle, txt(conversation?.narrativeText, conversation?.description, "Une conversation construite pour mettre en regard des lectures complémentaires."))}
            ${card("Ce que votre lecture apporte", "Une lecture identifiable par les décideurs", dgMessage)}
            ${card("Format", "Une position préparée, pas une exposition improvisée", "L’échange éditorial permet de cadrer le sujet, le niveau d’exposition et les conditions de préparation avec vos équipes si nécessaire.", true)}
          </div>
        </div>
      </section>

      <section class="landing-section landing-section--light">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Ce que produit la contribution</p>
            <h2>${safe(stripRiskWords(txt(landingPage?.valueSection?.title, "Une contribution utile à l’organisation, à la fonction et à la personne qui la porte.")))}</h2>
            <p>${safe(shortText(txt(landingPage?.valueSection?.intro, "La contribution produit un actif éditorial préparé, sécurisé et réutilisable."), 520))}</p>
          </div>

          <div class="landing-grid landing-grid--3">
            ${
              valueCards.length
                ? valueCards.map((item, index) => card(item.label, item.title, item.text || (Array.isArray(item.detail) ? item.detail.join(" ") : item.detail), index === 2)).join("")
                : `
                  ${card("Organisation", "Installer une lecture claire et réutilisable.", "Une contribution bien préparée permet de valoriser une capacité de lecture sans discours promotionnel.")}
                  ${card("Fonction", "Faire reconnaître ce que votre position permet de voir.", "La prise de parole rend visible une fonction de décision, d’arbitrage ou de sécurisation souvent difficile à expliquer publiquement.")}
                  ${card("Intervenant", "Construire une trace professionnelle durable.", "L’intervention devient un actif éditorial mobilisable dans la durée.", true)}
                `
            }
          </div>
        </div>
      </section>

      <section class="landing-section landing-section--dark">
        <div class="landing-container">
          <div class="landing-decision">
            <div class="landing-decision__visual"></div>

            <div class="landing-decision__copy">
              <h2>Ce que l’échange permet de sécuriser.</h2>
              ${
                guarantees.slice(0, 4).map(item => `
                  <div class="landing-point">
                    <h3>${safe(stripRiskWords(item.title))}</h3>
                    <p>${safe(shortText(item.text, 420))}</p>
                  </div>
                `).join("")
              }
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
                    return card(c.label || other.typeLecture || "Lecture complémentaire", c.title || other.questionCourte || other.titreAngle || other.questionPublique, c.headline || other.ceQueCetteLecturePermetDeVoir || other.angleRendVisible || "Une autre lecture du même contexte éditorial.");
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
          <h2>${safe(stripRiskWords(cta.title))}</h2>
          <p>${safe(shortText(cta.text, 460))}</p>

          <div class="landing-actions">
            <a class="landing-btn" href="${safe(cta.href)}">${safe(cta.label)}</a>
          </div>

          <p class="landing-reassurance">
            ${safe(txt(cta.deadline, "15 minutes · Sans engagement"))}
            ${cta.footnote ? " · " + safe(cta.footnote) : ""}
          </p>
        </div>
      </section>
    `;
  }

  render(Core.getDealBundle());
})();
