/*
  En Plateau — render-landing.js
  Landing one-to-one de conversion
  Page cible : /lp/industrie/contribuer.html?deal=3970
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

  function text(...values) {
    return Core.text(...values);
  }

  function firstSentence(value, fallback) {
    const raw = text(value, fallback);
    if (!raw) return "";
    const cleaned = raw.replace(/\s+/g, " ").trim();
    const match = cleaned.match(/^(.{80,260}?[.!?])\s/);
    return match ? match[1] : cleaned;
  }

  function getReadingGain(reading, actorType) {
    if (!reading) return null;
    const gains = reading.gains || {};
    if (actorType === "cabinet_conseil") return gains.cabinetConseil || null;
    return gains.organisationIndustrielle || gains.organisation || null;
  }

  function getLandingPageConfig(reading) {
    const data = Core.getData();
    if (!reading || !data?.landingPages) return null;

    const candidates = [
      reading.slug,
      reading.code,
      reading.shortLabel,
      reading.label
    ].map(Core.normalize);

    return Object.entries(data.landingPages).find(([key, value]) => {
      return candidates.includes(Core.normalize(key)) ||
        candidates.includes(Core.normalize(value?.readingType)) ||
        candidates.includes(Core.normalize(value?.cycleCode));
    })?.[1] || null;
  }

  function getActorTypeLabel(actorType) {
    return actorType === "cabinet_conseil"
      ? "Cabinet · Conseil · Expertise"
      : "Organisation industrielle";
  }

  function getCTA(deal, reading) {
    const source = text(reading?.calSource, "lp-industrie-contribution");
    const defaultHref = `/demander-un-echange-editorial.html?source=${encodeURIComponent(source)}`;

    return {
      href: text(
        deal?.ctaUrl,
        deal?.cta_url,
        deal?.activation?.ctaUrl,
        deal?.activation?.cta_url,
        deal?.landingPageUrl,
        deal?.landing_page_url,
        defaultHref
      ),
      label: text(
        deal?.ctaLabel,
        deal?.cta_label,
        deal?.activation?.ctaLabel,
        deal?.activation?.cta_label,
        "Réserver un échange éditorial de cadrage"
      )
    };
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
    const { deal, angle, reading, conversation, context } = bundle;

    if (!deal) {
      renderError(
        "Proposition introuvable",
        `Aucun contenu personnalisé ne correspond à l’identifiant indiqué dans l’URL.<br><br>
        Identifiant reçu : <strong>${safe(bundle.dealId || "aucun")}</strong>.`
      );
      return;
    }

    if (!angle) {
      renderError(
        "Angle éditorial introuvable",
        `Le deal est reconnu, mais son angle éditorial n’a pas été retrouvé.<br><br>
        Code angle détecté : <strong>${safe(Core.getAngleCodeFromDeal(deal) || "non renseigné")}</strong>.`
      );
      return;
    }

    const person = Core.getPerson(deal);
    const organisation = Core.getOrganisation(deal);
    const actorType = Core.getActorType(deal);
    const actorTypeLabel = getActorTypeLabel(actorType);
    const why = Core.getWhy(deal);
    const gain = getReadingGain(reading, actorType);
    const lpConfig = getLandingPageConfig(reading);
    const cta = getCTA(deal, reading);

    const readingLabel = text(reading?.label, angle?.typeLecture, deal?.editorialContext?.typeLecture, "Lecture éditoriale");
    const organisationName = text(organisation.name, deal?.organisation?.effectiveName, deal?.organisation?.name);
    const personName = text(person.fullName, deal?.person?.effectiveName, deal?.person?.name);
    const personRole = text(person.role, deal?.person?.effectiveRole, deal?.person?.role);
    const angleTitle = text(angle.questionPublique, angle.titreAngle, angle.questionEditoriale);
    const angleShort = text(angle.questionSimple, angle.questionCourte, angleTitle);
    const pointBascule = text(angle.pointBascule, angle.formatLongIntervenant?.momentBascule, deal?.editorialContext?.typeBascule);
    const tension = text(angle.tensionArbitrage, angle.formatLongIntervenant?.tensionCentrale, conversation?.tension, deal?.editorialContext?.tensionCentrale);
    const contextLabel = text(context?.label, angle.contextLabel, deal?.editorialContext?.contexteTitre, deal?.editorialContext?.contexte);
    const conversationTitle = text(conversation?.title, deal?.editorialContext?.conversation, "Cycle Industrie & transformation des territoires");

    const organisationWhy = firstSentence(
      why.organisation,
      `${organisationName} a été identifié pour la manière dont son activité expose concrètement aux arbitrages visés par cet angle.`
    );

    const personWhy = firstSentence(
      why.person,
      `${personName} peut porter cette contribution depuis une fonction directement reliée aux décisions que l’angle cherche à rendre visibles.`
    );

    const positionWhy = text(
      why.position,
      angle.attenduIntervenant,
      "La position proposée vise à transformer une expérience située en lecture publique claire, utile et maîtrisée."
    );

    const gainTitle = text(
      gain?.court,
      reading?.motivationCentrale,
      "Transformer une expérience située en position publique crédible."
    );

    const gainText = Array.isArray(gain?.detail)
      ? gain.detail.slice(0, 3).join(" ")
      : text(gain?.detail, reading?.accroche, "La contribution produit un actif éditorial préparé, réutilisable, sans exposer de données internes.");

    const complementaryCodes = Core.toArray(angle.complementaryCodes);
    const complementaryAngles = complementaryCodes.map(code => Core.getAngleByCode(code)).filter(Boolean).slice(0, 3);

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
              <h1>
                Une position<br>
                éditoriale<br>
                <em>vous est proposée.</em>
              </h1>

              <p class="landing-lead">
                <strong>${safe(organisationName || "Votre organisation")} a été identifiée pour contribuer à une conversation économique en cours de composition.</strong>
              </p>

              <p class="landing-lead">
                Cette page présente une proposition ciblée : un angle précis, une lecture attendue,
                et les raisons pour lesquelles votre position peut éclairer ce sujet publiquement.
              </p>

              <div class="landing-actions">
                <a class="landing-btn" href="${safe(cta.href)}">${safe(cta.label)}</a>
                <a class="landing-btn landing-btn--ghost" href="#angle-propose">Voir l’angle proposé</a>
              </div>

              <p class="landing-reassurance">
                15 minutes · Sans engagement · Objectif : vérifier la pertinence de l’angle avant toute décision.
              </p>
            </div>

            <aside class="landing-hero__card">
              <h2>${safe(readingLabel)}</h2>
              <p>
                Une contribution ne consiste pas à exposer un cas interne.
                Elle vise à formuler une lecture située, publiquement tenable, à partir d’une position d’observation légitime.
              </p>

              <div class="landing-identity">
                <span>Organisation</span>
                <strong>${safe(organisationName || "Non renseignée")}</strong>
              </div>

              <div class="landing-identity">
                <span>Intervenant pressenti</span>
                <strong>${safe(personName || "Non renseigné")}${personRole ? "<br>" + safe(personRole) : ""}</strong>
              </div>

              <div class="landing-identity">
                <span>Type d’acteur</span>
                <strong>${safe(actorTypeLabel)}</strong>
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
                <p>${safe(organisationWhy)}</p>
              </div>

              <div class="landing-point">
                <h3>Pourquoi votre fonction</h3>
                <p>${safe(personWhy)}</p>
              </div>

              <div class="landing-point">
                <h3>Pourquoi cette position</h3>
                <p>${safe(positionWhy)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="landing-section landing-section--dark" id="angle-propose">
        <div class="landing-container">
          <div class="landing-head landing-head--left">
            <p class="landing-kicker">${safe(contextLabel || "Contexte éditorial")}</p>
            <h2>${safe(angleTitle)}</h2>
            <p>${safe(text(angle.questionActivation, angle.texteProgramme, angle.introMecanisme, "L’angle vise à rendre visible un mécanisme industriel précis, sans demander à l’intervenant d’exposer une situation confidentielle."))}</p>
          </div>

          <div class="landing-grid landing-grid--3">
            <article class="landing-card">
              <span class="landing-label">Conversation</span>
              <h3>${safe(conversationTitle)}</h3>
              <p>${safe(text(conversation?.narrativeText, conversation?.description, "Une conversation construite pour mettre en regard des lectures complémentaires."))}</p>
            </article>

            <article class="landing-card">
              <span class="landing-label">Point de bascule</span>
              <h3>${safe(text(angleShort, "Le moment où la décision change de nature"))}</h3>
              <p>${safe(pointBascule)}</p>
            </article>

            <article class="landing-card">
              <span class="landing-label">Tension centrale</span>
              <h3>Ce qui devient difficile à arbitrer</h3>
              <p>${safe(tension)}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="landing-section landing-section--light">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Ce que vous pouvez valoriser</p>
            <h2>${safe(gainTitle)}</h2>
            <p>${safe(gainText)}</p>
          </div>

          <div class="landing-grid landing-grid--3">
            <article class="landing-card">
              <span class="landing-label">Pour l’organisation</span>
              <h3>Une parole utile, préparée et réutilisable.</h3>
              <p>La contribution permet d’installer une lecture claire d’un arbitrage industriel sans transformer l’intervention en communication promotionnelle.</p>
            </article>

            <article class="landing-card">
              <span class="landing-label">Pour la fonction</span>
              <h3>Une fonction reconnue comme lecture de décision.</h3>
              <p>La page met en avant ce que votre rôle permet de voir : signaux faibles, seuils, arbitrages et points de bascule.</p>
            </article>

            <article class="landing-card landing-card--accent">
              <span class="landing-label">Pour l’intervenant</span>
              <h3>Une trace professionnelle crédible.</h3>
              <p>La prise de parole devient un actif éditorial durable, préparé pour être clair, maîtrisé et publiquement tenable.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="landing-section landing-section--dark">
        <div class="landing-container">
          <div class="landing-decision">
            <div class="landing-decision__visual"></div>

            <div class="landing-decision__copy">
              <h2>Un échange pour cadrer, pas pour engager.</h2>

              <div class="landing-point">
                <h3>Ce qui est attendu</h3>
                <p>${safe(text(angle.attenduIntervenant, "Une lecture située du mécanisme, des signaux, des seuils et des arbitrages que votre position permet d’éclairer."))}</p>
              </div>

              <div class="landing-point">
                <h3>Ce qui n’est pas attendu</h3>
                <p>${safe(text(angle.nonAttendu, "Aucun chiffre confidentiel, cas client, stratégie interne, arbitrage non public ou situation sensible n’est attendu."))}</p>
              </div>

              <div class="landing-point">
                <h3>Préparation maîtrisée</h3>
                <p>L’intervention peut être préparée avec les équipes communication, affaires publiques ou juridiques si nécessaire.</p>
              </div>
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
                  <p>Les autres lectures du même contexte permettent de créer une conversation équilibrée : chaque position éclaire un angle différent du même phénomène.</p>
                </div>

                <div class="landing-grid landing-grid--3">
                  ${complementaryAngles.map(other => {
                    const card = other.complementaryCard || {};
                    return `
                      <article class="landing-card">
                        <span class="landing-label">${safe(card.label || other.typeLecture || "Lecture complémentaire")}</span>
                        <h3>${safe(card.title || other.questionCourte || other.titreAngle || other.questionPublique || "Lecture complémentaire")}</h3>
                        <p>${safe(card.headline || other.ceQueCetteLecturePermetDeVoir || other.angleRendVisible || "Une autre lecture du même contexte éditorial.")}</p>
                      </article>
                    `;
                  }).join("")}
                </div>
              </div>
            </section>`
          : ""
      }

      <section class="landing-section landing-final">
        <div class="landing-container">
          <h2>Vérifier ensemble si cette position est la bonne.</h2>
          <p>
            L’échange éditorial sert à confirmer l’angle, la lecture attendue,
            le niveau de confort de l’intervenant et les conditions de préparation.
          </p>

          <div class="landing-actions">
            <a class="landing-btn" href="${safe(cta.href)}">${safe(cta.label)}</a>
          </div>

          <p class="landing-reassurance">
            15 minutes · Sans engagement · Pas de dossier sensible à préparer.
          </p>
        </div>
      </section>
    `;
  }

  render(Core.getDealBundle());
})();
