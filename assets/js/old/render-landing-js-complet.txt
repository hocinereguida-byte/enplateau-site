/*
  En Plateau — render-landing.js
  Rendu de /lp/industrie/contribuer.html?deal=...
*/

(function () {
  "use strict";

  const Core = window.EnPlateauRenderCore;

  if (!Core) {
    console.error("render-core.js est manquant ou chargé après render-landing.js.");
    return;
  }

  const root = document.getElementById("landing-root");

  if (!root) {
    console.error("Conteneur #landing-root introuvable.");
    return;
  }

  function safe(value) {
    return Core.escapeHTML(value);
  }

  function list(items) {
    const arr = Core.toArray(items).filter(Boolean);
    if (!arr.length) return "";
    return `<ul class="lp-list">${arr.map(item => `<li>${safe(item)}</li>`).join("")}</ul>`;
  }

  function paragraph(value) {
    if (!value) return "";
    return `<p>${safe(value)}</p>`;
  }

  function getReadingGain(reading, actorType) {
    if (!reading) return null;

    const gains = reading.gains || {};
    if (actorType === "cabinet_conseil") {
      return gains.cabinetConseil || null;
    }

    return gains.organisationIndustrielle || gains.organisation || null;
  }

  function getHeroTitle(bundle, person, organisation, reading) {
    const label = reading?.label || reading?.shortLabel || "Contribution éditoriale";
    if (organisation.name) {
      return `${label} proposée à ${organisation.name}`;
    }
    if (person.fullName) {
      return `${label} proposée à ${person.fullName}`;
    }
    return label;
  }

  function getHeroSubtitle(bundle, person, organisation, angle) {
    const why = Core.getWhy(bundle.deal);

    return Core.text(
      why.position,
      angle?.questionActivation,
      angle?.texteProgramme,
      angle?.introMecanisme,
      "Cette page présente une proposition de contribution éditoriale personnalisée, rattachée à un angle précis du cycle Industrie & transformation des territoires."
    );
  }

  function render(bundle) {
    const { deal, angle, reading, conversation, context } = bundle;

    if (!deal) {
      root.innerHTML = Core.errorHTML(
        "Deal introuvable",
        `Aucun deal ne correspond à l’identifiant indiqué dans l’URL.<br><br>
        Identifiant reçu : <strong>${safe(bundle.dealId || "aucun")}</strong><br><br>
        Vérifiez que cet ID existe bien dans <strong>editorial-data-industrie-v52-master-casting.js</strong>.`
      );
      return;
    }

    if (!angle) {
      root.innerHTML = Core.errorHTML(
        "Angle introuvable",
        `Le deal a bien été trouvé, mais son code angle n’a pas été reconnu.<br><br>
        Code angle détecté : <strong>${safe(Core.getAngleCodeFromDeal(deal) || "non renseigné")}</strong>.`
      );
      return;
    }

    const person = Core.getPerson(deal);
    const organisation = Core.getOrganisation(deal);
    const actorType = Core.getActorType(deal);
    const why = Core.getWhy(deal);
    const gain = getReadingGain(reading, actorType);

    const heroTitle = getHeroTitle(bundle, person, organisation, reading);
    const heroSubtitle = getHeroSubtitle(bundle, person, organisation, angle);

    const actorLabel = actorType === "cabinet_conseil" ? "Cabinet · Conseil · Expertise" : "Entreprise / organisation";
    const ctaHref = Core.text(deal?.ctaUrl, deal?.cta_url, deal?.calUrl, deal?.cal_url, "/demander-un-echange-editorial.html");
    const ctaLabel = Core.text(deal?.ctaLabel, deal?.cta_label, "Demander un échange éditorial");

    const complementaryCodes = Core.toArray(angle.complementaryCodes);
    const complementaryAngles = complementaryCodes
      .map(code => Core.getAngleByCode(code))
      .filter(Boolean);

    const dimensions = Core.toArray(angle.sixDimensionsAngle || angle.formatLongIntervenant?.dimensions);

    root.innerHTML = `
      <section class="lp-hero">
        <div class="lp-container lp-hero-inner">
          <div>
            <p class="lp-kicker">En Plateau · Cycle Industrie & transformation des territoires</p>
            <h1 class="lp-title">${safe(heroTitle)}</h1>
            <p class="lp-subtitle">${safe(heroSubtitle)}</p>

            <div class="lp-hero-actions">
              <a class="lp-btn lp-btn-primary" href="${safe(ctaHref)}">${safe(ctaLabel)}</a>
              <a class="lp-btn" href="#angle-propose">Voir l’angle proposé</a>
            </div>
          </div>

          <aside class="lp-hero-card">
            <h2>${safe(reading?.positioning || "Une prise de parole cadrée, située et préparée.")}</h2>
            <p>
              Cette proposition ne vise pas à exposer un cas interne. Elle vise à formuler une lecture publique,
              utile et maîtrisée d’un mécanisme industriel.
            </p>
          </aside>
        </div>

        <div class="lp-container">
          <div class="lp-meta-grid">
            <div class="lp-meta-item">
              <span class="lp-meta-label">Organisation</span>
              <span class="lp-meta-value">${safe(organisation.name || "Non renseignée")}</span>
            </div>
            <div class="lp-meta-item">
              <span class="lp-meta-label">Intervenant pressenti</span>
              <span class="lp-meta-value">${safe(person.fullName || "Non renseigné")}</span>
            </div>
            <div class="lp-meta-item">
              <span class="lp-meta-label">Lecture</span>
              <span class="lp-meta-value">${safe(reading?.label || angle.typeLecture || "Non renseignée")}</span>
            </div>
            <div class="lp-meta-item">
              <span class="lp-meta-label">Type d’acteur</span>
              <span class="lp-meta-value">${safe(actorLabel)}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="angle-propose" class="lp-section lp-section-light">
        <div class="lp-container">
          <div class="lp-section-head">
            <span class="lp-label">Angle proposé</span>
            <h2 class="lp-section-title">${safe(angle.questionPublique || angle.titreAngle || angle.questionEditoriale)}</h2>
            <p class="lp-section-intro">
              ${safe(angle.angleRendVisible || angle.introMecanisme || angle.questionActivation || "")}
            </p>
          </div>

          <div class="lp-grid-2">
            <article class="lp-card">
              <h3>Point de bascule</h3>
              <p>${safe(angle.pointBascule || angle.momentBascule || angle.formatLongIntervenant?.momentBascule || "À préciser.")}</p>
            </article>

            <article class="lp-card">
              <h3>Tension centrale</h3>
              <p>${safe(angle.tensionArbitrage || angle.tensionCentrale || angle.formatLongIntervenant?.tensionCentrale || conversation?.tension || "À préciser.")}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="lp-section lp-section-dark">
        <div class="lp-container">
          <div class="lp-section-head">
            <span class="lp-label">Pourquoi vous</span>
            <h2 class="lp-section-title">Une proposition liée à votre position d’observation.</h2>
            <p class="lp-section-intro">
              La contribution attendue n’est pas une présentation commerciale. Elle part de ce que votre organisation,
              votre fonction ou votre expérience permet de rendre lisible.
            </p>
          </div>

          <div class="lp-grid-3">
            <article class="lp-card">
              <h3>Pourquoi cette organisation</h3>
              <p>${safe(why.organisation || "Votre organisation est rattachée à cet angle parce qu’elle peut éclairer un mécanisme concret du cycle Industrie.")}</p>
            </article>

            <article class="lp-card">
              <h3>Pourquoi cette personne</h3>
              <p>${safe(why.person || "La personne pressentie dispose d’une fonction ou d’une expérience permettant de porter une lecture située, crédible et utile.")}</p>
            </article>

            <article class="lp-card">
              <h3>Pourquoi cette position</h3>
              <p>${safe(why.position || "La position proposée permet de relier un angle éditorial précis à une lecture professionnelle identifiable.")}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="lp-section lp-section-light">
        <div class="lp-container">
          <div class="lp-grid-2">
            <div>
              <div class="lp-section-head">
                <span class="lp-label">Ce que cette lecture permet</span>
                <h2 class="lp-section-title">${safe(gain?.court || reading?.motivationCentrale || "Transformer une expérience en position publique crédible.")}</h2>
                <p class="lp-section-intro">
                  ${safe(reading?.accroche || "La contribution est préparée pour être claire, maîtrisée et réutilisable sans exposer de données sensibles.")}
                </p>
              </div>
            </div>

            <article class="lp-card">
              <h3>Bénéfices attendus</h3>
              ${
                Array.isArray(gain?.detail)
                  ? list(gain.detail)
                  : paragraph(gain?.detail || "Produire une lecture publique préparée, valorisable et cohérente avec la position réellement occupée par l’intervenant.")
              }
            </article>
          </div>
        </div>
      </section>

      <section class="lp-section lp-section-dark">
        <div class="lp-container">
          <div class="lp-section-head center">
            <span class="lp-label">Cadrage éditorial</span>
            <h2 class="lp-section-title">Une contribution préparée, sans exposition inutile.</h2>
            <p class="lp-section-intro">
              L’échange peut être préparé avec les équipes communication, affaires publiques ou juridiques si nécessaire.
              L’objectif est de construire une intervention solide, pas de forcer une prise de parole sensible.
            </p>
          </div>

          <div class="lp-grid-3">
            <article class="lp-card">
              <h3>Ce qui est attendu</h3>
              <p>${safe(angle.attenduIntervenant || "Une lecture située du mécanisme, des signaux, des seuils et des arbitrages que votre position permet d’éclairer.")}</p>
            </article>

            <article class="lp-card">
              <h3>Ce qui n’est pas attendu</h3>
              <p>${safe(angle.nonAttendu || "Aucun chiffre confidentiel, dossier client, stratégie interne, arbitrage non public ou situation sensible n’est attendu.")}</p>
            </article>

            <article class="lp-card">
              <h3>Contexte</h3>
              <p>${safe(angle.pourquoiContextePertinent || context?.narrativeText || context?.description || "Le contexte précise le moment où l’arbitrage change de nature.")}</p>
            </article>
          </div>
        </div>
      </section>

      ${
        dimensions.length
          ? `<section class="lp-section lp-section-light">
              <div class="lp-container">
                <div class="lp-section-head">
                  <span class="lp-label">Préparation</span>
                  <h2 class="lp-section-title">Les dimensions qui cadrent l’échange.</h2>
                </div>
                <div class="lp-grid-3">
                  ${dimensions.map(dimension => `
                    <article class="lp-card">
                      <h3>${safe(dimension.title || dimension.key)}</h3>
                      <p>${safe(dimension.questionSimple || dimension.question || dimension.text || dimension.guide || "")}</p>
                    </article>
                  `).join("")}
                </div>
              </div>
            </section>`
          : ""
      }

      ${
        complementaryAngles.length
          ? `<section class="lp-section lp-section-dark">
              <div class="lp-container">
                <div class="lp-section-head">
                  <span class="lp-label">Lectures complémentaires</span>
                  <h2 class="lp-section-title">Votre position s’inscrit dans une conversation mise en regard.</h2>
                  <p class="lp-section-intro">
                    Chaque angle est limité. Les autres lectures du même contexte permettent de composer une conversation cohérente, sans doublonner les points de vue.
                  </p>
                </div>

                <div class="lp-grid-3">
                  ${complementaryAngles.map(otherAngle => {
                    const card = otherAngle.complementaryCard || {};
                    return `
                      <article class="lp-card lp-reading-card">
                        <span class="lp-tag">${safe(card.label || otherAngle.typeLecture || "Lecture")}</span>
                        <h3>${safe(card.title || otherAngle.questionCourte || otherAngle.titreAngle || otherAngle.questionPublique)}</h3>
                        <p>${safe(card.headline || otherAngle.ceQueCetteLecturePermetDeVoir || otherAngle.angleRendVisible || "")}</p>
                      </article>
                    `;
                  }).join("")}
                </div>
              </div>
            </section>`
          : ""
      }

      <section class="lp-section lp-section-light">
        <div class="lp-container">
          <div class="lp-angle-box">
            <span class="lp-label">Échange éditorial</span>
            <h2 class="lp-angle-question">Un premier échange permet de vérifier la pertinence de la contribution.</h2>
            <p class="lp-angle-text">
              L’objectif est de confirmer l’angle, la lecture attendue, le niveau de confort de l’intervenant et les éventuels points à préparer avec les équipes communication, affaires publiques ou juridiques.
            </p>
            <div class="lp-hero-actions">
              <a class="lp-btn lp-btn-primary" href="${safe(ctaHref)}">${safe(ctaLabel)}</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  render(Core.getDealBundle());
})();
