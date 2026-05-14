
/*
  En Plateau — render-landing-v2-da-premium.js
  Version dynamique V2 DA premium
  - Master data inchangé : editorial-data-industrie-v65.js
  - Core inchangé : render-core.js
  - Micro-copywriting + hero DA conservé
*/

(function () {
  "use strict";

  const Core = window.EnPlateauRenderCore;
  const DATA = window.EN_PLATEAU_EDITORIAL_DATA || {};
  const root = document.getElementById("landing-root");

  if (!Core || !root) {
    console.error("En Plateau — render-core.js ou #landing-root introuvable.");
    return;
  }

  function safe(v) { return Core.escapeHTML(v == null ? "" : String(v)); }
  function txt(...values) { return Core.text(...values); }
  function toArray(v) { return Core.toArray(v).filter(Boolean); }
  function norm(v) { return Core.normalize(v || ""); }

  function cleanRole(role, organisationName) {
    let cleaned = String(role || "").trim();
    const org = String(organisationName || "").trim();
    if (!cleaned) return "";
    if (org) {
      const escaped = org.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      cleaned = cleaned
        .replace(new RegExp("\\s*[—–-]\\s*" + escaped + "\\s*$", "i"), "")
        .replace(new RegExp("\\s+chez\\s+" + escaped + "\\s*$", "i"), "");
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
      .replace(/\bCroissance sous tension\b/g, "Croissance industrielle")
      .replace(/\bAdaptation sous contrainte\b/g, "Adaptation industrielle")
      .replace(/\bRéinvention sous crise\b/g, "Reconfiguration industrielle")
      .replace(/\bpoints? de bascule\b/gi, m => m.startsWith("points") ? "moments de décision" : "moment de décision")
      .replace(/\bcrise\b/gi, "moment de redéfinition")
      .replace(/\bcontraintes?\b/gi, "conditions")
      .replace(/\btensions?\b/gi, "points d’attention")
      .replace(/\bfragilit[ée]s?\b/gi, "points de vigilance")
      .replace(/\bblocage\b/gi, "limite");
  }

  function shortText(value, max = 260) {
    const cleaned = soften(String(value || "").replace(/\s+/g, " ").trim());
    if (cleaned.length <= max) return cleaned;
    const cut = cleaned.slice(0, max);
    const last = Math.max(cut.lastIndexOf("."), cut.lastIndexOf(";"), cut.lastIndexOf(","));
    return (last > 120 ? cut.slice(0, last) : cut).trim() + ".";
  }

  function readingDisplay(value) {
    return soften(String(value || "").replace(/^Lecture\s+/i, "")).trim();
  }

  function readingPhrase(value) {
    const r = readingDisplay(value).toLowerCase();
    return r ? `lecture ${r}` : "lecture éditoriale";
  }

  function readingTypeConfig(code) {
    if (!code) return null;
    const key = String(code).trim();
    return DATA?.readingTypes?.[key] || null;
  }

  function displayReadingLabel(reading, angle, deal) {
    return txt(
      deal?.editorialContext?.typeLecture,
      deal?.typeLecture,
      deal?.lecture,
      reading?.label,
      angle?.typeLecture,
      "Lecture éditoriale"
    );
  }

  function angleTitle(angle, publicAngle = {}, formulation = {}) {
    return txt(
      publicAngle.titreLanding,
      formulation.title,
      angle?.questionPublique,
      angle?.titreAngle,
      angle?.questionEditoriale,
      "Question éditoriale"
    );
  }

  function angleDescription(angle, publicAngle = {}, formulation = {}) {
    return txt(
      publicAngle.accrocheLanding,
      formulation.accrocheLanding,
      angle?.introMecanisme,
      angle?.texteProgramme,
      angle?.questionActivation,
      angle?.ceQueCetteLecturePermetDeVoir
    );
  }

  function keywordList(values, fallback) {
    const raw = toArray(values)
      .flatMap(v => String(v).split(/[·,;|]/g))
      .map(v => soften(v.trim().toLowerCase()))
      .filter(Boolean);

    const seen = new Set();
    const out = [];
    raw.forEach(item => {
      const key = norm(item);
      if (key && !seen.has(key) && item.length <= 38) {
        seen.add(key);
        out.push(item);
      }
    });

    return (out.length ? out : fallback).slice(0, 5);
  }

  function getHeroKeywords(angle, readingLabel) {
    const reading = norm(readingLabel);
    const title = norm([
      angle?.titreAngle,
      angle?.questionEditoriale,
      angle?.questionPublique,
      angle?.questionActivation,
      angle?.ceQueCetteLecturePermetDeVoir
    ].join(" "));

    if (reading.includes("rh") || reading.includes("competence") || title.includes("competence")) {
      return ["montée en capacité", "tensions métiers", "transformation des collectifs", "arbitrages RH industriels"];
    }
    if (reading.includes("financ") || title.includes("capex") || title.includes("invest")) {
      return ["CAPEX", "choix d’investissement", "seuils de décision", "trajectoire industrielle"];
    }
    if (reading.includes("operation") || title.includes("flux") || title.includes("capacite")) {
      return ["flux", "capacité", "qualité", "interfaces métiers"];
    }
    if (reading.includes("territ") || title.includes("territoire") || title.includes("infrastructure")) {
      return ["ancrage", "infrastructures", "foncier", "écosystème territorial"];
    }
    if (reading.includes("ressource") || title.includes("energie") || title.includes("eau") || title.includes("carbone")) {
      return ["énergie", "eau", "carbone", "utilités industrielles"];
    }
    if (reading.includes("jurid") || title.includes("reglement")) {
      return ["risque juridique", "cadre réglementaire", "décision défendable", "sécurisation"];
    }
    return ["arbitrages", "trajectoire", "organisation", "décision industrielle"];
  }

  function topScanline(angle) {
    const txtv = norm([
      angle?.titreAngle,
      angle?.questionEditoriale,
      angle?.questionPublique,
      angle?.questionActivation
    ].join(" "));
    if (txtv.includes("dependance")) return "Fournisseurs · flux · ressources · systèmes · infrastructures · filières";
    if (txtv.includes("capacite") || txtv.includes("produire")) return "Flux · cadence · CAPEX · compétences · gouvernance · territoires";
    if (txtv.includes("outil industriel")) return "outil · process · organisation · investissements · trajectoire";
    return "arbitrages · responsabilités · trajectoire · décision · mise en regard";
  }

  function mediaImagePath(media) {
    const m = norm(media);
    if (m.includes("bfm")) return "/images/emission-1.jpg";
    if (m.includes("figaro")) return "/images/emission-3.jpg";
    if (m.includes("tribune")) return "/images/emission-4.jpg";
    return "/images/emission-3.jpg";
  }

  function getCTA(deal, reading, landingPage) {
    const source = txt(reading?.calSource, "lp-industrie-contribution");
    return {
      href: txt(
        deal?.ctaUrl, deal?.cta_url, deal?.activation?.ctaUrl, deal?.activation?.cta_url,
        deal?.landingPageUrl, deal?.landing_page_url,
        `/demander-un-echange-editorial.html?source=${encodeURIComponent(source)}`
      ),
      label: txt(
        deal?.ctaLabel, deal?.cta_label, deal?.activation?.ctaLabel, deal?.activation?.cta_label,
        "Qualifier cette position"
      )
    };
  }

  function actorLabelsForAngle(angle) {
    const cfg = readingTypeConfig(angle?.typeLecture);
    return toArray(cfg?.profilsIntervenant)
      .map(item => txt(item.label, item.title, item.profil))
      .filter(Boolean)
      .slice(0, 2);
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

  function mediaLineForAngle(item) {
    const journaliste = txt(item?.journaliste, "");
    const media = txt(item?.media, "");
    return { journaliste, media };
  }

  function buildComplementaryItems(angle, publicAngle, formulation, personName, personRole, organisationName, readingLabel, conversation, context) {
    const allAngles = toArray(DATA?.angles || DATA?.programme?.angles || []);
    const contextCode = txt(context?.code, angle?.contextCode, angle?.contexteCode, "");
    const conversationCode = txt(conversation?.code, angle?.conversationCode, angle?.codeConversation, "");
    let others = allAngles.filter(a => {
      if (String(a?.code || "") === String(angle?.code || "")) return false;
      const sameContext = !contextCode || [a?.contextCode, a?.contexteCode, a?.context].map(String).includes(String(contextCode));
      const sameConversation = !conversationCode || [a?.conversationCode, a?.codeConversation, a?.conversation].map(String).includes(String(conversationCode));
      return sameContext && sameConversation;
    });

    if (others.length < 3) {
      others = allAngles.filter(a => String(a?.code || "") !== String(angle?.code || "")).slice(0, 12);
    }

    const primary = {
      id: "you",
      label: "Votre lecture",
      short: readingDisplay(readingLabel),
      title: angleTitle(angle, publicAngle, formulation),
      org: organisationName,
      media: txt(angle?.media, ""),
      body: angleDescription(angle, publicAngle, formulation),
      tags: getHeroKeywords(angle, readingLabel),
      isActive: true
    };

    const mapped = others.slice(0, 3).map((a, i) => {
      const label = readingDisplay(txt(a?.typeLecture, a?.lecture, `Lecture ${i + 1}`));
      const orgs = organisationsForAngle(a?.code, 2, organisationName);
      const desc = txt(a?.ceQueCetteLecturePermetDeVoir, a?.angleRendVisible, a?.introMecanisme, "Une lecture complémentaire du même enjeu.");
      return {
        id: `other-${i}`,
        label: label || `Lecture ${i + 1}`,
        short: label || `Lecture ${i + 1}`,
        title: angleTitle(a, a?.anglePublic || {}, a?.formulationVariants?.landing || {}),
        org: orgs.join(" · "),
        media: txt(a?.media, ""),
        body: desc,
        tags: keywordList([desc, a?.titreAngle], ["arbitrages", "décision", "trajectoire"])
      };
    });

    while (mapped.length < 3) {
      const labels = ["Stratégique", "Opérationnelle", "Territoriale"];
      mapped.push({
        id: `fallback-${mapped.length}`,
        label: labels[mapped.length],
        short: labels[mapped.length],
        title: "Une lecture complémentaire du même point de bascule.",
        org: "",
        media: "",
        body: "Une autre position permet de rendre visible une responsabilité différente dans la même conversation.",
        tags: ["arbitrages", "responsabilités", "mise en regard"]
      });
    }

    return [primary, ...mapped];
  }

  function buildTabs(items) {
    return `
      <div class="v2-tabs" role="tablist" aria-label="Lectures de la conversation">
        ${items.map((item, index) => `
          <button class="v2-tab ${index === 0 ? "is-active" : ""}" type="button" role="tab" aria-selected="${index === 0 ? "true" : "false"}" data-panel="panel-${safe(item.id)}">
            <span>${safe(index === 0 ? "Votre lecture" : item.label)}</span>
            <strong>${safe(item.short || item.label)}</strong>
          </button>
        `).join("")}
      </div>

      ${items.map((item, index) => `
        <article class="v2-active-panel" id="panel-${safe(item.id)}" ${index === 0 ? "" : "hidden"}>
          <div>
            <p class="v2-card-label">${safe(index === 0 ? "Votre lecture" : item.label)}</p>
            <h3>${safe(item.short || item.label)}</h3>
          </div>

          <div class="v2-panel-grid">
            <div>
              <span>Éclaire</span>
              <ul>${item.tags.map(tag => `<li>${safe(tag)}</li>`).join("")}</ul>
            </div>
            <div>
              <span>Organisation</span>
              <strong>${safe(item.org || "Organisation pressentie")}</strong>
            </div>
            <div>
              <span>Question proposée</span>
              <strong>${safe(shortText(item.title, 180))}</strong>
            </div>
            <div>
              <span>Ce que cela rend visible</span>
              <strong>${safe(shortText(item.body, 210))}</strong>
            </div>
          </div>
        </article>
      `).join("")}
    `;
  }

  function buildHeader(conversationLabel) {
    const short = conversationLabel ? conversationLabel.split(/\s*[:]\s*/)[0].trim() : "Cycle Industrie";
    return `
      <header class="v2-top" aria-label="En-tête">
        <div class="v2-top__inner">
          <a class="v2-brand" href="/" aria-label="En Plateau — accueil">En Plateau</a>
          <p class="v2-meta">${safe(short || "Cycle Industrie")} · Page privée</p>
        </div>
      </header>
    `;
  }

  function buildHero({ angle, publicAngle, formulation, personName, personRole, organisationName, readingLabel, cta }) {
    const title = angleTitle(angle, publicAngle, formulation);
    const journalist = txt(angle?.journaliste, "");
    const media = txt(angle?.media, "");
    const img = mediaImagePath(media);
    const tags = getHeroKeywords(angle, readingLabel);

    return `
      <section class="v2-hero" id="top">
        <div class="v2-container v2-hero__grid">
          <div class="v2-hero__copy">
            <p class="v2-kicker">Saison inaugurale · ${safe(txt(angle?.cycleLabel, "Croissance industrielle"))}</p>

            <h1>${safe(soften(title))}</h1>

            <p class="v2-scanline">${safe(topScanline(angle))}</p>

            <div class="v2-hero__microgrid" aria-label="Synthèse de la position">
              <div>
                <span>Position pressentie</span>
                <strong>${safe(readingDisplay(readingLabel))}</strong>
              </div>
              <div>
                <span>Organisation pressentie</span>
                <strong>${safe(organisationName)}</strong>
              </div>
            </div>

            <div class="v2-hero__value">
              <span>Ce que cette lecture peut éclairer</span>
              <ul>${tags.map(tag => `<li>${safe(tag)}</li>`).join("")}</ul>
            </div>

            <div class="v2-actions">
              <a class="v2-btn v2-btn--primary" href="${safe(cta.href)}">${safe(cta.label)}</a>
              <a class="v2-btn v2-btn--ghost" href="#conversation">Voir la conversation</a>
            </div>

            <p class="v2-proofline">15 min · sans engagement · aucune donnée sensible</p>
          </div>

          <aside class="v2-hero__side" aria-label="Position pressentie">
            <div class="v2-film">
              <img src="${safe(img)}" alt="Format média pressenti" loading="eager">
            </div>
            <p class="v2-caption v2-caption--inline">
              ${journalist ? `<span>Journaliste</span> <strong>${safe(journalist)}</strong>` : ""}
              ${journalist && media ? `<i aria-hidden="true">·</i>` : ""}
              ${media ? `<span>Média</span> <strong>${safe(media)}</strong>` : ""}
            </p>

            <article class="v2-position-card">
              <p class="v2-card-label">Position pressentie</p>
              <h2>${safe(soften(txt(angle?.questionActivation, angle?.titreAngle, title)))}</h2>
              <dl>
                <div>
                  <dt>Intervenant pressenti</dt>
                  <dd>${safe([personName, personRole].filter(Boolean).join(" · "))}</dd>
                </div>
                <div>
                  <dt>Organisation</dt>
                  <dd>${safe(organisationName)}</dd>
                </div>
              </dl>
              <p class="v2-card-note">Une seule position ${safe(readingDisplay(readingLabel).toLowerCase())} sera retenue dans cette conversation.</p>
            </article>
          </aside>
        </div>
      </section>
    `;
  }

  function buildGuarantees() {
    return `
      <section class="v2-section v2-section--dark">
        <div class="v2-container">
          <header class="v2-section-head">
            <p class="v2-kicker">Cadre de confiance</p>
            <h2>Contribution cadrée. Pas improvisée.</h2>
          </header>

          <div class="v2-bento v2-bento--guarantees">
            <article>
              <h3>Aucune donnée sensible</h3>
              <p>Pas de chiffres. Pas de dossiers internes. Pas d’incident.</p>
            </article>
            <article>
              <h3>Lecture de mécanisme</h3>
              <p>Pas de cas client. Pas de communication corporate.</p>
            </article>
            <article>
              <h3>Préparation possible</h3>
              <p>Communication. Juridique. Affaires publiques.</p>
            </article>
            <article>
              <h3>Intervention non intrusive</h3>
              <p>Une lecture. Pas une exposition.</p>
            </article>
          </div>
        </div>
      </section>
    `;
  }

  function buildWhy({ organisationName, readingLabel, angle, publicAngle, formulation, why, personRole }) {
    const orgWhy = txt(
      why?.organisation,
      `${organisationName} a été identifié pour la manière dont son expérience permet d’éclairer cette question depuis une position située.`
    );
    const personWhy = txt(
      why?.person,
      personRole ? `Cette fonction permet de rendre visibles des arbitrages que d’autres acteurs ne peuvent pas formuler depuis le même endroit.` : ""
    );
    const title = txt(angle?.questionActivation, angleTitle(angle, publicAngle, formulation));
    const tags = getHeroKeywords(angle, readingLabel);
    return `
      <section class="v2-section v2-section--paper">
        <div class="v2-container">
          <header class="v2-section-head">
            <p class="v2-kicker">Pertinence</p>
            <h2>Pourquoi cette lecture.</h2>
          </header>

          <div class="v2-why">
            <article class="v2-why__main">
              <span>${safe(organisationName)}</span>
              <h3>${safe(shortText(orgWhy, 180))}</h3>
            </article>
            <article>
              <span>Ce que votre position permet de voir</span>
              <ul>${tags.map(tag => `<li>${safe(tag)}</li>`).join("")}</ul>
              ${personWhy ? `<p style="margin-top:16px">${safe(shortText(personWhy, 160))}</p>` : ""}
            </article>
            <article>
              <span>Lecture attendue</span>
              <p>${safe(shortText(title, 180))}</p>
            </article>
          </div>
        </div>
      </section>
    `;
  }

  function buildImpact(readingLabel) {
    return `
      <section class="v2-section v2-section--dark">
        <div class="v2-container">
          <header class="v2-section-head">
            <p class="v2-kicker">Portée</p>
            <h2>Ce que produit une contribution.</h2>
          </header>

          <div class="v2-bento v2-bento--impact">
            <article class="v2-bento__large">
              <h3>Une contribution située.</h3>
              <p>Pas une prise de parole générique.</p>
            </article>
            <article>
              <span>Expertise</span>
              <p>Rendre visibles des arbitrages industriels.</p>
            </article>
            <article>
              <span>Fonction</span>
              <p>Faire reconnaître une capacité de décision.</p>
            </article>
            <article>
              <span>Parcours</span>
              <p>Construire une trace professionnelle durable.</p>
            </article>
            <article class="v2-bento__wide">
              <p>Préparé · cadré · publiquement défendable · réutilisable</p>
            </article>
          </div>
        </div>
      </section>
    `;
  }

  function buildProcess() {
    return `
      <section class="v2-section v2-section--paper">
        <div class="v2-container">
          <header class="v2-section-head">
            <p class="v2-kicker">Comment cela se passe</p>
            <h2>Un parcours clair.</h2>
          </header>

          <div class="v2-process">
            <article>
              <span>01</span>
              <h3>Échange</h3>
              <p>15 min. Qualifier la lecture.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Positionnement</h3>
              <p>Angle · lecture · mise en regard.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Comité éditorial</h3>
              <p>Validation de la composition.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Préparation</h3>
              <p>Production · activation · diffusion.</p>
            </article>
          </div>
        </div>
      </section>
    `;
  }

  function buildFAQ() {
    return `
      <section class="v2-section v2-section--dark">
        <div class="v2-container">
          <header class="v2-section-head">
            <p class="v2-kicker">Questions fréquentes</p>
            <h2>Avant l’échange.</h2>
          </header>

          <div class="v2-faq">
            <article>
              <h3>Une seule conversation suffit&nbsp;?</h3>
              <p>Oui.</p>
            </article>
            <article>
              <h3>Faut-il défendre une doctrine&nbsp;?</h3>
              <p>Non.</p>
            </article>
            <article>
              <h3>Peut-on préparer avec les équipes&nbsp;?</h3>
              <p>Oui.</p>
            </article>
            <article>
              <h3>Faut-il arriver avec une position déjà formulée&nbsp;?</h3>
              <p>Non.</p>
            </article>
          </div>
        </div>
      </section>
    `;
  }

  function buildFinalCTA(cta) {
    return `
      <section class="v2-final">
        <div class="v2-container">
          <h2>Qualifier cette lecture.</h2>
          <p>15 min · sans engagement · page privée</p>
          <a class="v2-btn v2-btn--primary" href="${safe(cta.href)}">${safe(cta.label)}</a>
        </div>
      </section>
    `;
  }

  function bindTabs() {
    root.querySelectorAll(".v2-tabs").forEach(tabList => {
      const tabs = Array.from(tabList.querySelectorAll(".v2-tab"));
      tabs.forEach(tab => {
        tab.addEventListener("click", () => {
          const id = tab.getAttribute("data-panel");
          const section = tab.closest(".v2-section");
          tabs.forEach(t => {
            t.classList.remove("is-active");
            t.setAttribute("aria-selected", "false");
          });
          tab.classList.add("is-active");
          tab.setAttribute("aria-selected", "true");
          section.querySelectorAll(".v2-active-panel").forEach(panel => {
            panel.hidden = panel.id !== id;
          });
        });
      });
    });
  }

  function renderError(title, body) {
    root.innerHTML = `
      <section class="v2-loading">
        <div>
          <a class="v2-brand" href="/">En Plateau</a>
          <h1>${safe(title)}</h1>
          <p>${body}</p>
        </div>
      </section>`;
  }

  function renderInactiveDeal(bundle) {
    const deal = bundle.deal;
    const organisation = Core.getOrganisation(deal);
    const person = Core.getPerson(deal);
    renderError(
      "Cette position n’est plus activable.",
      `Le deal <strong>${safe(Core.getDealId(deal) || bundle.dealId)}</strong>
      ${organisation.name ? `lié à <strong>${safe(organisation.name)}</strong>` : ""}
      ${person.fullName ? ` / <strong>${safe(person.fullName)}</strong>` : ""}
      est conservé comme trace CRM.`
    );
  }

  function render(bundle) {
    const { deal, angle, reading, conversation, context, landingPage } = bundle;

    if (!deal) {
      renderError("Proposition introuvable", `Identifiant reçu : <strong>${safe(bundle.dealId || "aucun")}</strong>.`);
      return;
    }
    if (Core.isExcludedDeal(deal)) {
      renderInactiveDeal(bundle);
      return;
    }
    if (!angle) {
      renderError("Angle éditorial introuvable", `Code angle détecté : <strong>${safe(Core.getAngleCodeFromDeal(deal) || "non renseigné")}</strong>.`);
      return;
    }

    const person = Core.getPerson(deal);
    const organisation = Core.getOrganisation(deal);
    const why = Core.getWhy(deal);
    const publicAngle = angle.anglePublic || angle.formulationVariants?.anglePublic || {};
    const formulation = Core.getFormulationLanding(angle);

    const organisationName = txt(organisation.name, "Organisation pressentie");
    const personName = txt(person.fullName, "Intervenant pressenti");
    const personRole = cleanRole(person.role, organisationName);
    const readingLabel = displayReadingLabel(reading, angle, deal);
    const cta = getCTA(deal, reading, landingPage);

    const conversationLabel = stripConversationCode(txt(
      conversation?.title,
      deal?.editorialContext?.conversation,
      "Cycle Industrie"
    ));

    const tabItems = buildComplementaryItems(
      angle, publicAngle, formulation, personName, personRole, organisationName, readingLabel, conversation, context
    );

    root.innerHTML = `
      ${buildHeader(conversationLabel)}
      ${buildHero({ angle, publicAngle, formulation, personName, personRole, organisationName, readingLabel, cta })}

      <section class="v2-section v2-section--paper" id="conversation">
        <div class="v2-container">
          <header class="v2-section-head">
            <p class="v2-kicker">Conversation composée</p>
            <h2>4 lectures. 1 même point de bascule.</h2>
            <p>Chaque intervenant répond individuellement depuis sa fonction. La valeur naît de la mise en regard.</p>
          </header>
          ${buildTabs(tabItems)}
        </div>
      </section>

      ${buildGuarantees()}
      ${buildWhy({ organisationName, readingLabel, angle, publicAngle, formulation, why, personRole })}
      ${buildImpact(readingLabel)}
      ${buildProcess()}
      ${buildFAQ()}
      ${buildFinalCTA(cta)}
    `;

    bindTabs();
  }

  try {
    const bundle = Core.resolveBundle();
    render(bundle);
  } catch (err) {
    console.error(err);
    renderError("Erreur de rendu", "La proposition personnalisée n’a pas pu être générée.");
  }
})();
