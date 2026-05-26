/*
  Scènes d'Arbitrage — render-organisation-bridge.js
  Page bridge organisation — positions pressenties multi-intervenants
  Lit exclusivement window.SDA_CRM_INDUSTRIE ; aucune donnée CRM n'est embarquée dans le HTML.
*/
(function () {
  "use strict";

  const root = document.getElementById("organisation-bridge-root");
  const CRM = window.SDA_CRM_INDUSTRIE || null;
  function doctrineTool() { return window.SDAEditorialDoctrine || null; }
  function applyDoctrine(value) {
    const tool = doctrineTool();
    const raw = String(value == null ? "" : value);
    return tool && typeof tool.applyLexicon === "function" ? tool.applyLexicon(raw) : raw;
  }
  function contextLabelByDoctrine(value) {
    const raw = String(value || "").trim();
    const tool = doctrineTool();
    const normalized = normalize(raw);
    if (normalized.includes("croissance sous tension")) return "Croissance organisée";
    if (normalized.includes("adaptation sous contrainte")) return "Adaptation coordonnée";
    if (normalized.includes("reinvention sous crise")) return "Reconfiguration industrielle";
    return tool && typeof tool.getContextLabel === "function" ? tool.getContextLabel(raw) : applyDoctrine(raw);
  }
  function sanitizeVisibleDOM(scope) {
    const tool = doctrineTool();
    if (!tool || typeof tool.applyLexicon !== "function" || !scope || !document.createTreeWalker) return;
    const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        const tag = parent.tagName;
        if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT") return NodeFilter.FILTER_REJECT;
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const next = tool.applyLexicon(node.nodeValue);
      if (next !== node.nodeValue) node.nodeValue = next;
    });
  }
  if (root && window.MutationObserver) {
    let pendingDoctrineSanitize = false;
    new MutationObserver(() => {
      if (pendingDoctrineSanitize) return;
      pendingDoctrineSanitize = true;
      window.requestAnimationFrame(() => {
        pendingDoctrineSanitize = false;
        sanitizeVisibleDOM(root);
      });
    }).observe(root, { childList: true, subtree: true, characterData: true });
  }

  function escapeHTML(value) {
    return applyDoctrine(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function text(...values) {
    for (const value of values) {
      if (value !== undefined && value !== null && String(value).trim() !== "") return String(value).trim();
    }
    return "";
  }

  function normalize(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[’']/g, "'")
      .replace(/[_-]+/g, " ")
      .replace(/\s+/g, " ");
  }

  function getParams() {
    return new URLSearchParams(window.location.search || "");
  }

  function getPublicRef() {
    const params = getParams();
    return text(
      params.get("cast"),
      params.get("ref"),
      params.get("position"),
      params.get("p"),
      params.get("deal")
    );
  }

  function uniq(values) {
    const seen = new Set();
    return values
      .map(v => String(v || "").trim())
      .filter(Boolean)
      .filter(v => {
        const k = normalize(v);
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      });
  }

  function numberOrMax(value) {
    const n = Number(String(value || "").replace(/[^0-9.-]+/g, ""));
    return Number.isFinite(n) ? n : 9999;
  }

  function sortDeals(a, b) {
    return numberOrMax(a.rang) - numberOrMax(b.rang)
      || normalize(a.lecture).localeCompare(normalize(b.lecture))
      || normalize(a.personDisplay || a.person).localeCompare(normalize(b.personDisplay || b.person));
  }

  function isActiveDeal(deal) {
    return !!deal && deal.isActiveVisible === true;
  }

  function isReserveDeal(deal) {
    return !!deal && deal.isReserve === true;
  }

  function findDealByRef(ref) {
    if (!CRM || !Array.isArray(CRM.deals) || !ref) return null;
    const wanted = normalize(ref);
    return CRM.deals.find(deal => normalize(deal.ref) === wanted || normalize(deal.publicRef) === wanted || normalize(deal.cast) === wanted) || null;
  }

  function getActiveDealsForOrg(orgKey) {
    if (!CRM || !Array.isArray(CRM.deals) || !orgKey) return [];
    const wanted = normalize(orgKey);
    return CRM.deals
      .filter(deal => normalize(deal.orgKey || deal.organisation) === wanted)
      .filter(isActiveDeal)
      .sort(sortDeals);
  }

  function getReserveDealsForOrg(orgKey) {
    if (!CRM || !Array.isArray(CRM.deals) || !orgKey) return [];
    const wanted = normalize(orgKey);
    return CRM.deals
      .filter(deal => normalize(deal.orgKey || deal.organisation) === wanted)
      .filter(isReserveDeal)
      .sort(sortDeals);
  }

  function conversationContextKey(deal) {
    return normalize([deal?.conversation || "", contextLabelByDoctrine(deal?.contexteCode || deal?.contexte || "")].join(" | "));
  }

  function angleKey(deal) {
    return normalize(deal?.code || deal?.angleCode || deal?.angle || "");
  }

  function applyOrganisationPositionRules(deals) {
    const visible = [];
    const conflicts = [];
    const seenAngles = new Map();
    const seenConversationContexts = new Map();
    const hiddenRefs = new Set();

    deals.slice().sort(sortDeals).forEach(deal => {
      const ref = deal?.ref || deal?.publicRef || deal?.cast || deal?.dealId || "";
      const aKey = angleKey(deal);
      const ccKey = conversationContextKey(deal);
      let reason = "";
      let kept = null;

      if (aKey && seenAngles.has(aKey)) {
        kept = seenAngles.get(aKey);
        reason = "Même organisation déjà positionnée sur le même angle.";
      } else if (ccKey && seenConversationContexts.has(ccKey)) {
        kept = seenConversationContexts.get(ccKey);
        reason = "Même organisation déjà positionnée sur la même conversation contextualisée.";
      }

      if (reason) {
        hiddenRefs.add(ref);
        conflicts.push({ kept, hidden: deal, reason });
        return;
      }

      visible.push(deal);
      if (aKey) seenAngles.set(aKey, deal);
      if (ccKey) seenConversationContexts.set(ccKey, deal);
    });

    return { visible, conflicts, hiddenRefs };
  }

  function renderConflictBlock(conflicts) {
    if (!conflicts || !conflicts.length) return "";
    const rows = conflicts.map(item => `
      <li>
        <strong>${escapeHTML(text(item.hidden?.personDisplay, item.hidden?.person, "Intervenant masqué"))}</strong>
        masqué au profit de
        <strong>${escapeHTML(text(item.kept?.personDisplay, item.kept?.person, "position prioritaire"))}</strong> —
        ${escapeHTML(item.reason)}
      </li>
    `).join("");
    return `
      <section class="org-bridge-section">
        <div class="org-bridge-panel org-bridge-panel--warning">
          <p><strong>À vérifier dans le CRM.</strong> Une ou plusieurs positions actives de cette organisation entrent en conflit avec les règles éditoriales de casting. La page visible ne conserve que la position prioritaire, mais le CRM doit être arbitré.</p>
          <ul class="org-bridge-alert-list">${rows}</ul>
        </div>
      </section>
    `;
  }

  function getOrganisationSupports(orgKey) {
    const orgs = CRM?.organisations || CRM?.organizations || {};
    const key = normalize(orgKey);
    const entry = Object.values(orgs).find(org => normalize(org.orgKey || org.key || org.name || org.organisation) === key) || orgs[orgKey] || null;
    const supports = entry?.supports || entry?.appuis || [];
    return Array.isArray(supports) ? supports : [];
  }

  function getIndexGroups() {
    if (!CRM || !Array.isArray(CRM.deals)) return [];
    const map = new Map();
    CRM.deals.filter(isActiveDeal).forEach(deal => {
      const key = normalize(deal.orgKey || deal.organisation);
      if (!key) return;
      if (!map.has(key)) {
        map.set(key, {
          key,
          organisation: deal.organisation || deal.organisationRaw || "Organisation",
          deals: []
        });
      }
      map.get(key).deals.push(deal);
    });

    return Array.from(map.values())
      .map(group => ({ ...group, deals: group.deals.sort(sortDeals) }))
      .filter(group => group.deals.length > 1)
      .sort((a, b) => normalize(a.organisation).localeCompare(normalize(b.organisation)));
  }

  function landingUrl(deal) {
    return text(deal.landingUrl, `${CRM?.baseUrl || "https://scenesdarbitrage.fr"}/lp/industrie/contribuer.html?cast=${encodeURIComponent(deal.ref || "")}`);
  }

  function renderIndex() {
    const groups = getIndexGroups();
    const rows = groups.map(group => {
      const first = group.deals[0];
      const media = uniq(group.deals.map(deal => deal.media)).join(" / ");
      return `
        <a class="org-bridge-index-item" href="/lp/industrie/organisation.html?cast=${encodeURIComponent(first.ref)}">
          <span>
            <strong>${escapeHTML(group.organisation)}</strong><br>
            <small>${escapeHTML(media || "Médias à confirmer")}</small>
          </span>
          <span>${group.deals.length} positions →</span>
        </a>
      `;
    }).join("");

    root.innerHTML = `
      <section class="org-bridge-state">
        <div class="org-bridge-state__box">
          <h1>Organisations multi-intervenants</h1>
          <p>Sélectionnez une organisation pour afficher sa page de coordination éditoriale.</p>
          <div class="org-bridge-index-list">${rows || "<p>Aucune organisation multi-intervenants active n'a été trouvée.</p>"}</div>
        </div>
      </section>
    `;
  }

  function renderUnavailable(title, message) {
    root.innerHTML = `
      <section class="org-bridge-state">
        <div class="org-bridge-state__box">
          <h1>${escapeHTML(title)}</h1>
          <p>${escapeHTML(message)}</p>
        </div>
      </section>
    `;
  }

  function renderPositionCard(deal, index) {
    const person = text(deal.personDisplay, deal.person, "Intervenant pressenti");
    const role = text(deal.role, deal.poste, "Fonction à préciser");
    const lecture = text(deal.lecture, "Lecture");
    const conversation = text(deal.conversation, "Conversation Industrie");
    const contexte = contextLabelByDoctrine(text(deal.contexteCode, deal.contexte, "Contexte à préciser"));
    const media = text(deal.media, "Média à confirmer");
    const angle = text(deal.angle, deal.question, "Angle éditorial à préciser");
    const url = landingUrl(deal);

    return `
      <article class="org-bridge-position-card" id="position-${index + 1}">
        <div class="org-bridge-position-meta">
          <h3 class="org-bridge-person">${escapeHTML(person)}</h3>
          <p class="org-bridge-role">${escapeHTML(role)}</p>
          <div class="org-bridge-tags">
            <span class="org-bridge-tag">${escapeHTML(lecture)}</span>
            <span class="org-bridge-tag">${escapeHTML(media)}</span>
            ${deal.rang ? `<span class="org-bridge-tag">Rang ${escapeHTML(deal.rang)}</span>` : ""}
          </div>
        </div>
        <div>
          <p class="org-bridge-question-label">${escapeHTML(conversation)} · ${escapeHTML(contexte)}</p>
          <h4 class="org-bridge-question">${escapeHTML(angle)}</h4>
          <div class="org-bridge-position-actions">
            <a class="org-bridge-link" href="${escapeHTML(url)}">Voir la proposition détaillée →</a>
          </div>
        </div>
      </article>
    `;
  }

  function renderPage(referenceDeal, activeDeals, reserveDeals) {
    const organisation = text(referenceDeal.organisation, referenceDeal.organisationRaw, "Votre organisation");
    const mediaList = uniq(activeDeals.map(deal => deal.media)).join(" / ");
    const supports = getOrganisationSupports(referenceDeal.orgKey || referenceDeal.organisation);
    const hasOnlyCommunicationSupport = supports.length > 0 && supports.every(s => /communication|comm/i.test(String(s.kind || s.label || s.roleActivation || "")));
    const hasDirectionIntervenant = activeDeals.some(deal => /président|president|pdg|ceo|directeur général|directrice générale|dg\b/i.test(String(deal.role || "")));

    let coordinationText = "Cette page regroupe les positions actuellement identifiées afin d’éviter des sollicitations dispersées et de permettre un cadrage éditorial cohérent avec la direction, la communication ou les affaires publiques.";
    if (hasOnlyCommunicationSupport) {
      coordinationText = "Aucun relais direction n’étant identifié à ce stade, cette page permet d’associer la communication en amont afin de cadrer les sollicitations et d’éviter des prises de contact dispersées.";
    } else if (hasDirectionIntervenant) {
      coordinationText = "La démarche peut inclure une prise de parole de direction ainsi que celle de certains collaborateurs, selon les sujets les plus pertinents à porter dans le cycle.";
    }

    const positionControl = applyOrganisationPositionRules(activeDeals);
    const visibleActiveDeals = positionControl.visible;
    const cards = visibleActiveDeals.map(renderPositionCard).join("");
    const conflictBlock = renderConflictBlock(positionControl.conflicts);
    const reserveCount = reserveDeals.length;

    root.innerHTML = `
      <header class="org-bridge-header">
        <div class="org-bridge-header__inner">
          <a href="/" aria-label="Scènes d'Arbitrage — accueil">
            <img src="/images/logo-scenes-transparent-no-baseline-v2.png" class="org-bridge-logo" alt="Scènes d'Arbitrage">
          </a>
        </div>
      </header>

      <section class="org-bridge-hero">
        <div class="org-bridge-container">
          <p class="org-bridge-kicker">Page de coordination éditoriale · Cycle Industrie</p>
          <h1 class="org-bridge-title">Plusieurs lectures possibles pour ${escapeHTML(organisation)}</h1>
          <p class="org-bridge-lead">
            Scènes d’Arbitrage prépare plusieurs conversations autour des arbitrages industriels.
            ${escapeHTML(organisation)} apparaît comme un acteur susceptible d’apporter plusieurs lectures complémentaires,
            portées par des profils distincts.
          </p>
          <div class="org-bridge-hero-actions">
            <a class="org-bridge-btn org-bridge-btn--primary" href="#positions">Voir les positions pressenties</a>
            <a class="org-bridge-btn org-bridge-btn--ghost" href="#cadrage">Comprendre le cadrage</a>
          </div>
        </div>
      </section>

      <main class="org-bridge-main">
        <div class="org-bridge-container">
          <section class="org-bridge-section">
            <div class="org-bridge-section__head">
              <div>
                <p class="org-bridge-section__label">Pourquoi cette page</p>
                <h2 class="org-bridge-section__title">Coordonner avant de solliciter séparément</h2>
              </div>
              <p class="org-bridge-section__text">${escapeHTML(coordinationText)}</p>
            </div>

            <div class="org-bridge-intro-grid">
              <div class="org-bridge-intro-card">
                <h3>${visibleActiveDeals.length} positions actives</h3>
                <p>Les positions listées ci-dessous sont les propositions détaillées actuellement actives dans le cycle Industrie.</p>
              </div>
              <div class="org-bridge-intro-card">
                <h3>${escapeHTML(mediaList || "Médias à confirmer")}</h3>
                <p>Chaque position est rattachée à un média pressenti et à une lecture éditoriale précise.</p>
              </div>
              <div class="org-bridge-intro-card">
                <h3>${reserveCount} piste${reserveCount > 1 ? "s" : ""} secondaire${reserveCount > 1 ? "s" : ""}</h3>
                <p>Les pistes en réserve ne sont pas présentées ici comme propositions actives, mais peuvent être évoquées lors du cadrage.</p>
              </div>
            </div>
          </section>

          <section class="org-bridge-section" id="positions">
            <div class="org-bridge-section__head">
              <div>
                <p class="org-bridge-section__label">Positions pressenties</p>
                <h2 class="org-bridge-section__title">Des lectures distinctes, accessibles séparément</h2>
              </div>
              <p class="org-bridge-section__text">
                Chaque carte renvoie vers une proposition détaillée individuelle. Cette page sert uniquement à comprendre l’ensemble et à organiser le cadrage.
              </p>
            </div>
            <div class="org-bridge-positions">${cards}</div>
          </section>

          <section class="org-bridge-section" id="cadrage">
            <div class="org-bridge-section__head">
              <div>
                <p class="org-bridge-section__label">Échange de cadrage</p>
                <h2 class="org-bridge-section__title">Ce qui doit être arbitré ensemble</h2>
              </div>
              <p class="org-bridge-section__text">
                L’objectif n’est pas de multiplier les prises de parole, mais de vérifier quelles lectures sont les plus justes, quels profils sont les plus pertinents et quel niveau d’exposition est souhaitable.
              </p>
            </div>

            <div class="org-bridge-steps">
              <div class="org-bridge-step">
                <span class="org-bridge-step__num">01</span>
                <h3>Profils</h3>
                <p>Confirmer les personnes les mieux placées pour porter les lectures proposées.</p>
              </div>
              <div class="org-bridge-step">
                <span class="org-bridge-step__num">02</span>
                <h3>Angles</h3>
                <p>Vérifier que les questions correspondent à l’expérience et à la fonction des intervenants.</p>
              </div>
              <div class="org-bridge-step">
                <span class="org-bridge-step__num">03</span>
                <h3>Exposition</h3>
                <p>Définir ce qui peut être porté publiquement sans exposer de données sensibles.</p>
              </div>
              <div class="org-bridge-step">
                <span class="org-bridge-step__num">04</span>
                <h3>Coordination</h3>
                <p>Associer si nécessaire la communication, les affaires publiques ou les équipes juridiques.</p>
              </div>
              <div class="org-bridge-step">
                <span class="org-bridge-step__num">05</span>
                <h3>Arbitrage</h3>
                <p>Retenir une ou plusieurs positions selon leur pertinence éditoriale réelle.</p>
              </div>
            </div>
          </section>

          ${conflictBlock}

          <section class="org-bridge-section">
            <div class="org-bridge-panel">
              <p><strong>Cette page n’est pas une proposition collective unique.</strong> Elle permet de visualiser les positions actuellement pressenties pour ${escapeHTML(organisation)} et d’accéder aux pages individuelles correspondantes.</p>
              <p>Les propositions détaillées restent indépendantes : chaque intervenant, chaque angle et chaque média doivent être validés selon leur pertinence propre.</p>
            </div>
          </section>
        </div>
      </main>
    `;
    sanitizeVisibleDOM(root);
  }

  function boot() {
    if (!root) return;
    if (!CRM || !Array.isArray(CRM.deals)) {
      renderUnavailable("Données CRM indisponibles", "Le fichier activation-crm-industrie.js n’a pas été chargé ou ne contient pas de données exploitables.");
      return;
    }

    const ref = getPublicRef();
    if (!ref) {
      renderIndex();
      return;
    }

    const deal = findDealByRef(ref);
    if (!deal) {
      renderUnavailable("Référence introuvable", "Cette référence ne correspond à aucune position dans le miroir CRM actuellement chargé.");
      return;
    }

    const activeDeals = getActiveDealsForOrg(deal.orgKey || deal.organisation);
    const reserveDeals = getReserveDealsForOrg(deal.orgKey || deal.organisation);

    if (activeDeals.length <= 1) {
      const url = landingUrl(deal);
      root.innerHTML = `
        <section class="org-bridge-state">
          <div class="org-bridge-state__box">
            <h1>Organisation avec un seul intervenant actif</h1>
            <p>${escapeHTML(deal.organisation || "Cette organisation")} n’a qu’une seule position active visible dans les données actuelles. Utilisez la landing individuelle.</p>
            <p style="margin-top:18px"><a class="org-bridge-btn org-bridge-btn--primary" href="${escapeHTML(url)}">Ouvrir la landing individuelle</a></p>
          </div>
        </section>
      `;
      return;
    }

    renderPage(deal, activeDeals, reserveDeals);
  }

  boot();
})();
