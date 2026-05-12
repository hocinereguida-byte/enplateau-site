/*
  En Plateau — render-landing.js
  Rendu complet par défaut de /lp/industrie/contribuer.html?deal=...
  Objectif MVP : afficher TOUTES les données disponibles pour le deal.
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

  function hasValue(value) {
    if (value === undefined || value === null) return false;
    if (Array.isArray(value)) return value.length > 0;
    if (typeof value === "object") return Object.keys(value).length > 0;
    return String(value).trim() !== "";
  }

  function valueToText(value) {
    if (value === undefined || value === null || value === "") return "—";
    if (Array.isArray(value)) return value.filter(hasValue).map(item => {
      if (typeof item === "object") return JSON.stringify(item, null, 2);
      return String(item);
    }).join("\n");
    if (typeof value === "object") return JSON.stringify(value, null, 2);
    return String(value);
  }

  function card(title, value) {
    if (!hasValue(value)) return "";
    return `
      <article class="lp-card">
        <h3>${safe(title)}</h3>
        <p style="white-space: pre-line;">${safe(valueToText(value))}</p>
      </article>
    `;
  }

  function list(items) {
    const arr = Core.toArray(items).filter(hasValue);
    if (!arr.length) return "";
    return `<ul class="lp-list">${arr.map(item => `<li>${safe(valueToText(item))}</li>`).join("")}</ul>`;
  }

  function objectGrid(title, object, preferredOrder) {
    if (!object || typeof object !== "object") return "";

    const keys = [
      ...preferredOrder.filter(key => Object.prototype.hasOwnProperty.call(object, key)),
      ...Object.keys(object).filter(key => !preferredOrder.includes(key))
    ].filter(key => hasValue(object[key]));

    if (!keys.length) return "";

    return `
      <section class="lp-section lp-section-light">
        <div class="lp-container">
          <div class="lp-section-head">
            <span class="lp-label">Données disponibles</span>
            <h2 class="lp-section-title">${safe(title)}</h2>
          </div>
          <div class="lp-grid-3">
            ${keys.map(key => card(key, object[key])).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function rawBlock(title, data) {
    if (!hasValue(data)) return "";
    return `
      <section class="lp-section lp-section-dark">
        <div class="lp-container">
          <div class="lp-section-head">
            <span class="lp-label">Données brutes</span>
            <h2 class="lp-section-title">${safe(title)}</h2>
            <p class="lp-section-intro">
              Bloc de vérification temporaire : il permet de contrôler précisément ce qui est disponible dans le JS pour cet identifiant.
            </p>
          </div>
          <article class="lp-card">
            <pre style="white-space: pre-wrap; overflow-x: auto; margin: 0; font-size: .84rem; line-height: 1.55;">${safe(JSON.stringify(data, null, 2))}</pre>
          </article>
        </div>
      </section>
    `;
  }

  function getReadingGain(reading, actorType) {
    if (!reading) return null;
    const gains = reading.gains || {};
    if (actorType === "cabinet_conseil") return gains.cabinetConseil || null;
    return gains.organisationIndustrielle || gains.organisation || null;
  }

  function getAllOutreach(deal) {
    const possible = [
      deal?.outreach,
      deal?.messages,
      deal?.linkedin,
      deal?.emailing,
      deal?.scriptsLinkedin,
      deal?.scripts_linkedin
    ].filter(hasValue);

    const flat = {
      invitationLinkedin: Core.text(
        deal?.invitationLinkedin,
        deal?.invitation_linkedin,
        deal?.note_invitation_interv,
        deal?.["invitation_linkedin"],
        deal?.["message_invitation_linkedin"],
        deal?.["note_invitation_interv"]
      ),
      messagePostAcceptation: Core.text(
        deal?.messagePostAcceptation,
        deal?.message_post_acceptation,
        deal?.["message_post_acceptation"]
      ),
      relanceLinkedin1: Core.text(
        deal?.relanceLinkedin1,
        deal?.relance_1,
        deal?.relance1,
        deal?.["relance_1"],
        deal?.["message_relance_linkedin"]
      ),
      relanceLinkedin2: Core.text(
        deal?.relanceLinkedin2,
        deal?.relance_2,
        deal?.relance2,
        deal?.["relance_2"]
      ),
      emailObjet: Core.text(
        deal?.emailObjet,
        deal?.email_objet,
        deal?.objet_email,
        deal?.["email_1_objet"],
        deal?.["objet_email"]
      ),
      emailCorps: Core.text(
        deal?.emailCorps,
        deal?.email_corps,
        deal?.corps_email,
        deal?.["email_1_corps"],
        deal?.["corps_email"]
      )
    };

    return { ...flat, sourcesInternes: possible };
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

    const person = Core.getPerson(deal);
    const organisation = Core.getOrganisation(deal);
    const actorType = Core.getActorType(deal);
    const why = Core.getWhy(deal);
    const gain = getReadingGain(reading, actorType);
    const outreach = getAllOutreach(deal);

    const actorLabel = actorType === "cabinet_conseil" ? "Cabinet · Conseil · Expertise" : "Entreprise / organisation";

    const ctaHref = Core.text(
      deal?.ctaUrl,
      deal?.cta_url,
      deal?.calUrl,
      deal?.cal_url,
      deal?.url_landing,
      deal?.landingPageUrl,
      deal?.landing_page_url,
      "/demander-un-echange-editorial.html"
    );

    const ctaLabel = Core.text(
      deal?.ctaLabel,
      deal?.cta_label,
      deal?.cta_recommande,
      deal?.["CTA recommandé"],
      "Demander un échange éditorial"
    );

    const complementaryCodes = Core.toArray(angle?.complementaryCodes);
    const complementaryAngles = complementaryCodes.map(code => Core.getAngleByCode(code)).filter(Boolean);
    const dimensions = Core.toArray(angle?.sixDimensionsAngle || angle?.formatLongIntervenant?.dimensions);

    root.innerHTML = `
      <section class="lp-hero">
        <div class="lp-container lp-hero-inner">
          <div>
            <p class="lp-kicker">En Plateau · Cycle Industrie & transformation des territoires</p>
            <h1 class="lp-title">${safe(reading?.label || angle?.typeLecture || "Contribution éditoriale personnalisée")}</h1>
            <p class="lp-subtitle">
              Rendu complet par défaut du deal <strong>${safe(bundle.dealId || Core.getDealId(deal))}</strong>.
              Cette page affiche toutes les données disponibles dans le référentiel JS pour contrôler le rendu avant filtrage éditorial.
            </p>

            <div class="lp-hero-actions">
              <a class="lp-btn lp-btn-primary" href="${safe(ctaHref)}">${safe(ctaLabel)}</a>
              <a class="lp-btn" href="#donnees-deal">Voir les données du deal</a>
            </div>
          </div>

          <aside class="lp-hero-card">
            <h2>${safe(organisation.name || "Organisation non renseignée")}</h2>
            <p>
              ${safe(person.fullName || "Intervenant non renseigné")}
              ${person.role ? "<br>" + safe(person.role) : ""}
              <br><br>
              Type d’acteur : ${safe(actorLabel)}
            </p>
          </aside>
        </div>

        <div class="lp-container">
          <div class="lp-meta-grid">
            <div class="lp-meta-item">
              <span class="lp-meta-label">Deal ID</span>
              <span class="lp-meta-value">${safe(Core.getDealId(deal) || bundle.dealId)}</span>
            </div>
            <div class="lp-meta-item">
              <span class="lp-meta-label">Organisation</span>
              <span class="lp-meta-value">${safe(organisation.name || "—")}</span>
            </div>
            <div class="lp-meta-item">
              <span class="lp-meta-label">Personne</span>
              <span class="lp-meta-value">${safe(person.fullName || "—")}</span>
            </div>
            <div class="lp-meta-item">
              <span class="lp-meta-label">Angle</span>
              <span class="lp-meta-value">${safe(Core.getAngleCodeFromDeal(deal) || angle?.code || "—")}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="donnees-deal" class="lp-section lp-section-light">
        <div class="lp-container">
          <div class="lp-section-head">
            <span class="lp-label">Synthèse du deal</span>
            <h2 class="lp-section-title">Toutes les variables principales récupérées.</h2>
          </div>

          <div class="lp-grid-3">
            ${card("ID deal", Core.getDealId(deal))}
            ${card("Organisation", organisation.name)}
            ${card("Type acteur", actorLabel)}
            ${card("Personne", person.fullName)}
            ${card("Fonction", person.role)}
            ${card("LinkedIn", person.linkedin)}
            ${card("Email", person.email)}
            ${card("Code angle", Core.getAngleCodeFromDeal(deal))}
            ${card("Lecture", reading?.label || angle?.typeLecture)}
            ${card("Conversation", conversation?.title)}
            ${card("Contexte", context?.label)}
            ${card("CTA", ctaLabel + " — " + ctaHref)}
          </div>
        </div>
      </section>

      <section class="lp-section lp-section-dark">
        <div class="lp-container">
          <div class="lp-section-head">
            <span class="lp-label">Justifications CRM / éditoriales</span>
            <h2 class="lp-section-title">Pourquoi cette organisation, cette personne, cette position.</h2>
          </div>

          <div class="lp-grid-3">
            ${card("Pourquoi organisation", why.organisation)}
            ${card("Pourquoi personne", why.person)}
            ${card("Pourquoi position", why.position)}
            ${card("Niveau de confiance", Core.text(deal?.niveauConfiance, deal?.niveau_confiance, deal?.niveau_personnalisation_pourquoi, deal?.["niveau_confiance"], deal?.["niveau_personnalisation_pourquoi"]))}
            ${card("Validation", Core.text(deal?.validation, deal?.statutValidation, deal?.statut_validation, deal?.["validation"], deal?.["statut_validation"]))}
            ${card("Vigilance", Core.text(deal?.vigilance, deal?.vigilancePourquoi, deal?.vigilance_pourquoi, deal?.["vigilance_pourquoi"]))}
          </div>
        </div>
      </section>

      ${
        angle
          ? `<section class="lp-section lp-section-light">
              <div class="lp-container">
                <div class="lp-section-head">
                  <span class="lp-label">Angle éditorial</span>
                  <h2 class="lp-section-title">${safe(angle.questionPublique || angle.titreAngle || angle.questionEditoriale || angle.code)}</h2>
                  <p class="lp-section-intro">${safe(angle.questionActivation || angle.texteProgramme || angle.introMecanisme || "")}</p>
                </div>

                <div class="lp-grid-3">
                  ${card("Code angle", angle.code)}
                  ${card("Type lecture", angle.typeLecture)}
                  ${card("Titre angle", angle.titreAngle)}
                  ${card("Question éditoriale", angle.questionEditoriale)}
                  ${card("Question publique", angle.questionPublique)}
                  ${card("Question activation", angle.questionActivation)}
                  ${card("Intro mécanisme", angle.introMecanisme)}
                  ${card("Point de bascule", angle.pointBascule)}
                  ${card("Tension arbitrage", angle.tensionArbitrage)}
                  ${card("Ce que l’angle rend visible", angle.angleRendVisible)}
                  ${card("Cela se voit quand", angle.celaSeVoitQuand)}
                  ${card("Attendu intervenant", angle.attenduIntervenant)}
                  ${card("Non attendu", angle.nonAttendu)}
                  ${card("Décisions difficiles", angle.decisionsQuiDeviennentDifficiles)}
                  ${card("Pourquoi le contexte est pertinent", angle.pourquoiContextePertinent)}
                  ${card("Profils primaires", angle.primaryProfiles)}
                </div>
              </div>
            </section>`
          : `<section class="lp-section lp-section-light">
              <div class="lp-container">
                <div class="lp-section-head">
                  <span class="lp-label">Angle éditorial</span>
                  <h2 class="lp-section-title">Aucun angle trouvé pour ce deal.</h2>
                  <p class="lp-section-intro">
                    Code angle détecté : ${safe(Core.getAngleCodeFromDeal(deal) || "non renseigné")}
                  </p>
                </div>
              </div>
            </section>`
      }

      ${
        reading
          ? `<section class="lp-section lp-section-dark">
              <div class="lp-container">
                <div class="lp-section-head">
                  <span class="lp-label">Lecture</span>
                  <h2 class="lp-section-title">${safe(reading.label || reading.code)}</h2>
                  <p class="lp-section-intro">${safe(reading.positioning || reading.accroche || "")}</p>
                </div>

                <div class="lp-grid-3">
                  ${card("Code", reading.code)}
                  ${card("Label", reading.label)}
                  ${card("Slug", reading.slug)}
                  ${card("Landing slug", reading.landingSlug)}
                  ${card("Cal source", reading.calSource)}
                  ${card("Positioning", reading.positioning)}
                  ${card("Motivation centrale", reading.motivationCentrale)}
                  ${card("Accroche", reading.accroche)}
                  ${card("Gain type acteur", gain?.court)}
                  ${card("Détail gain", gain?.detail)}
                  ${card("Profils intervenant", reading.profilsIntervenant)}
                  ${card("Gains par profil", reading.gainsParProfil)}
                </div>
              </div>
            </section>`
          : ""
      }

      ${
        conversation || context
          ? `<section class="lp-section lp-section-light">
              <div class="lp-container">
                <div class="lp-section-head">
                  <span class="lp-label">Conversation & contexte</span>
                  <h2 class="lp-section-title">${safe(conversation?.title || "Conversation non trouvée")}</h2>
                  <p class="lp-section-intro">${safe(conversation?.description || conversation?.narrativeText || "")}</p>
                </div>

                <div class="lp-grid-3">
                  ${card("Conversation code", conversation?.code)}
                  ${card("Conversation titre", conversation?.title)}
                  ${card("Conversation tension", conversation?.tension)}
                  ${card("Conversation description", conversation?.description)}
                  ${card("Conversation texte narratif", conversation?.narrativeText)}
                  ${card("Contexte code", context?.code)}
                  ${card("Contexte label", context?.label)}
                  ${card("Contexte description", context?.description)}
                  ${card("Contexte texte narratif", context?.narrativeText)}
                </div>
              </div>
            </section>`
          : ""
      }

      ${
        dimensions.length
          ? `<section class="lp-section lp-section-dark">
              <div class="lp-container">
                <div class="lp-section-head">
                  <span class="lp-label">Dimensions éditoriales</span>
                  <h2 class="lp-section-title">Questions et guides disponibles.</h2>
                </div>

                <div class="lp-grid-3">
                  ${dimensions.map(dimension => `
                    <article class="lp-card">
                      <h3>${safe(dimension.title || dimension.key || "Dimension")}</h3>
                      <p style="white-space: pre-line;">
                        ${safe(Core.text(
                          dimension.question,
                          dimension.questionSimple,
                          dimension.text,
                          dimension.guide
                        ))}
                        ${dimension.eviter ? "\n\nÀ éviter : " + safe(dimension.eviter) : ""}
                      </p>
                    </article>
                  `).join("")}
                </div>
              </div>
            </section>`
          : ""
      }

      ${
        complementaryAngles.length
          ? `<section class="lp-section lp-section-light">
              <div class="lp-container">
                <div class="lp-section-head">
                  <span class="lp-label">Lectures complémentaires</span>
                  <h2 class="lp-section-title">Tous les angles complémentaires disponibles.</h2>
                </div>

                <div class="lp-grid-3">
                  ${complementaryAngles.map(otherAngle => {
                    const cardData = otherAngle.complementaryCard || {};
                    return `
                      <article class="lp-card">
                        <h3>${safe(cardData.title || otherAngle.typeLecture || otherAngle.code)}</h3>
                        <p style="white-space: pre-line;">
                          ${safe(cardData.headline || otherAngle.questionPublique || otherAngle.titreAngle || "")}
                          ${cardData.bullets ? "\n\n" + safe(Core.toArray(cardData.bullets).join("\n")) : ""}
                        </p>
                      </article>
                    `;
                  }).join("")}
                </div>
              </div>
            </section>`
          : ""
      }

      <section class="lp-section lp-section-dark">
        <div class="lp-container">
          <div class="lp-section-head">
            <span class="lp-label">Messages / outreach</span>
            <h2 class="lp-section-title">Messages personnalisés disponibles dans le deal.</h2>
            <p class="lp-section-intro">
              Cette section affiche tout ce qui peut servir ensuite à l’export LinkedIn ou email.
            </p>
          </div>

          <div class="lp-grid-3">
            ${card("Invitation LinkedIn", outreach.invitationLinkedin)}
            ${card("Message post-acceptation", outreach.messagePostAcceptation)}
            ${card("Relance LinkedIn 1", outreach.relanceLinkedin1)}
            ${card("Relance LinkedIn 2", outreach.relanceLinkedin2)}
            ${card("Objet email", outreach.emailObjet)}
            ${card("Corps email", outreach.emailCorps)}
            ${card("Sources outreach internes", outreach.sourcesInternes)}
          </div>
        </div>
      </section>

      ${objectGrid("Toutes les données du deal", deal, [
        "dealId", "id", "pipedriveDealId", "affaireId", "angleCode", "code_angle",
        "organisation", "organization", "person", "personne", "typeActeur", "type_acteur",
        "whyOrganisation", "whyPerson", "whyThisPosition"
      ])}

      ${rawBlock("Deal brut complet", deal)}
      ${rawBlock("Angle brut complet", angle)}
      ${rawBlock("Lecture brute complète", reading)}

      <section class="lp-section lp-section-light">
        <div class="lp-container">
          <div class="lp-angle-box">
            <span class="lp-label">Fin du rendu complet</span>
            <h2 class="lp-angle-question">Ce rendu sert à vérifier toutes les variables avant de filtrer la landing finale.</h2>
            <p class="lp-angle-text">
              Une fois les variables confirmées, on pourra produire une version publique plus sobre qui n’affichera plus les blocs de diagnostic, les données brutes ou les éléments internes.
            </p>
          </div>
        </div>
      </section>
    `;
  }

  render(Core.getDealBundle());
})();
