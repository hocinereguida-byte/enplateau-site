/*
  Scènes d'Arbitrage — render-landing-v2.js
  Version MVP : 2026-05-26-v1

  Source unique : API Worker /api/landing-data?cast=XXXX
  Aucune dépendance à v67, activation-crm, enrichments.

  Sections affichées :
  - Hero (personne, organisation, lecture, média, journaliste)
  - Pertinence (bloc unique depuis pertinence_editoriale Pipedrive)
  - Mise en regard simplifiée (conversation, contexte, lecture)
  - Alternatives CRM (ref_deal_principal + rang_alternatif)
  - Processus (statique)
  - Garanties (statique)
  - CTA (statique)
  - Statuts : actif / réserve / indisponible

  Doctrine intégrée en dur (MVP) :
  - Lexique de remplacement anti-anxiogène
  - Aucun terme ancien affiché brut
*/

(function () {
  "use strict";

  // ─── Configuration ────────────────────────────────────────────────────────
  const API_BASE = "/api/landing-data";
  const ROOT = document.getElementById("landing-root");

  // ─── Doctrine lexicale (intégrée en dur pour MVP) ─────────────────────────
  const LEXICON = [
    ["sous tension", "à piloter"],
    ["sous contrainte", "sous conditions"],
    ["sous crise", "en redéfinition"],
    ["croissance sous tension", "Croissance organisée"],
    ["adaptation sous contrainte", "Adaptation coordonnée"],
    ["réinvention sous crise", "Reconfiguration industrielle"],
    ["crise", "moment de redéfinition"],
    ["rupture", "changement de nature"],
    ["fragilité", "point de vigilance"],
    ["fragiliser", "rendre plus sensible"],
    ["contrainte", "condition"],
    ["tension", "point d'attention"],
    ["vulnérabilité", "point sensible"],
    ["blocage", "limite"],
    ["restructuration", "transformation sociale et organisationnelle"],
    ["plan social", "dossier identifiable"],
  ];

  function applyLexicon(text) {
    let out = String(text || "");
    for (const [from, to] of LEXICON) {
      const escaped = from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      out = out.replace(new RegExp(escaped, "gi"), to);
    }
    return out;
  }

  function esc(v) {
    return String(v || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function safe(v) {
    return esc(applyLexicon(v));
  }

  function txt(...vals) {
    for (const v of vals) {
      if (v !== undefined && v !== null && String(v).trim() !== "") return String(v).trim();
    }
    return "";
  }

  // ─── Labels de lecture ─────────────────────────────────────────────────────
  const READING_LABELS = {
    strategique: { label: "Lecture stratégique", adj: "stratégique", desc: "Trajectoire, gouvernance et décision industrielle." },
    operationnelle: { label: "Lecture opérationnelle", adj: "opérationnelle", desc: "Flux, qualité, maintenance, coordination et capacité de pilotage." },
    technologie: { label: "Lecture technologie & systèmes", adj: "technologique", desc: "Systèmes, données, interfaces et lisibilité de l'action." },
    financiere: { label: "Lecture financière", adj: "financière", desc: "Investissement, marges de manœuvre, risque et soutenabilité." },
    juridique: { label: "Lecture juridique", adj: "juridique", desc: "Responsabilité, cadre, conformité et arbitrages de risque." },
    rh: { label: "Lecture RH", adj: "RH", desc: "Métiers, collectifs, engagement et capacité de transformation." },
    territoriale: { label: "Lecture territoriale", adj: "territoriale", desc: "Ancrage territorial, parties prenantes et dynamiques de territoire." },
    achat: { label: "Lecture achats & opérations", adj: "achats", desc: "Sourcing, supply chain, performance industrielle et interdépendances." },
  };

  function getReadingConfig(label) {
    if (!label) return null;
    const n = String(label).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    for (const [key, cfg] of Object.entries(READING_LABELS)) {
      if (n.includes(key)) return cfg;
    }
    return { label: String(label), adj: String(label).toLowerCase(), desc: "" };
  }

  // ─── Contenus statiques MVP ────────────────────────────────────────────────

  const PROCESS_STEPS = [
    { num: "01", title: "L'échange éditorial", text: "15 minutes pour vérifier si votre lecture correspond à une position disponible. Aucun engagement, aucun dossier sensible à exposer." },
    { num: "02", title: "La note de positionnement", text: "Un document court qui cadre l'angle, le périmètre de parole, ce qui peut être dit et ce qui doit rester hors champ." },
    { num: "03", title: "La production", text: "Une session préparée, enregistrée et éditée selon les standards des médias partenaires." },
    { num: "04", title: "La validation", text: "Vous relisez et validez avant diffusion. Aucune surprise." },
    { num: "05", title: "La diffusion et l'exploitation", text: "L'actif est diffusé sur le média partenaire. Vous conservez des droits d'exploitation pour votre propre écosystème." },
  ];

  const GUARANTEES = [
    { title: "Aucune donnée interne attendue", text: "Aucun chiffre, marge, performance, site, client, fournisseur, incident ou décision confidentielle n'est demandé." },
    { title: "Une lecture de mécanisme", text: "L'échange ne vise pas à commenter l'organisation invitée. Il sert à formuler une lecture utile sur les conditions de décision, d'arbitrage et de trajectoire." },
    { title: "Un cadrage possible avec vos équipes", text: "Le périmètre peut être préparé avec vos équipes communication, juridiques ou affaires publiques avant toute production." },
    { title: "Des droits d'exploitation transférés", text: "L'actif éditorial produit vous appartient. Vous pouvez le réutiliser dans votre écosystème : partenaires, clients, LinkedIn, événements." },
  ];

  const CTA = {
    href: "https://cal.com/scenesdarbitrage/echange-editorial-15-min?user=scenesdarbitrage&overlayCalendar=true",
    label: "Qualifier cette position — 15 min",
    text: "15 minutes, sans engagement, pour qualifier l'angle, le périmètre de parole et les conditions de préparation.",
    footnote: "Échange sans engagement",
  };

  // ─── Rendu des sections ────────────────────────────────────────────────────

  function renderFallback(cast) {
    if (!ROOT) return;
    ROOT.innerHTML = `
      <section class="landing-section landing-section--light" style="min-height:60vh;display:flex;align-items:center;">
        <div class="landing-container" style="text-align:center;max-width:640px;margin:0 auto;padding:60px 20px;">
          <p class="landing-kicker">Position éditoriale</p>
          <h1 style="font-family:'Playfair Display',serif;font-size:clamp(1.8rem,4vw,3rem);margin:0 0 24px;">Cette position n'est pas disponible pour le moment.</h1>
          <p style="color:rgba(23,23,23,.65);line-height:1.7;margin:0 0 32px;">Pour connaître les détails de cette position éditoriale ou les positions actuellement disponibles dans le cycle Industrie, contactez-nous directement.</p>
          <a href="mailto:contact@scenesdarbitrage.fr" class="landing-btn landing-btn--primary">Prendre contact</a>
        </div>
      </section>`;
  }

  function renderReserve(data) {
    if (!ROOT) return;
    const nom = safe(txt(data.person?.nom_complet, "Intervenant pressenti"));
    const org = safe(txt(data.organisation?.nom, "Organisation"));
    ROOT.innerHTML = `
      <section class="landing-section landing-section--light" style="min-height:60vh;display:flex;align-items:center;">
        <div class="landing-container" style="text-align:center;max-width:640px;margin:0 auto;padding:60px 20px;">
          <p class="landing-kicker">Position en cours de composition</p>
          <h1 style="font-family:'Playfair Display',serif;font-size:clamp(1.8rem,4vw,3rem);margin:0 0 24px;">Cette position est en cours de composition.</h1>
          <p style="color:rgba(23,23,23,.65);line-height:1.7;margin:0 0 32px;">La position pressentie pour ${nom} (${org}) n'est pas encore activée. Si vous souhaitez être informé de l'avancement, contactez-nous.</p>
          <a href="mailto:contact@scenesdarbitrage.fr" class="landing-btn landing-btn--primary">Prendre contact</a>
        </div>
      </section>`;
  }

  function buildHeroSection(data) {
    const nom = safe(txt(data.person?.nom_complet, "Intervenant pressenti"));
    const poste = safe(txt(data.person?.poste, ""));
    const org = safe(txt(data.organisation?.nom, "Organisation"));
    const lecture = safe(txt(data.type_lecture, ""));
    const rc = getReadingConfig(data.type_lecture);
    const lectureLabel = safe(rc?.label || lecture);
    const lectureDesc = safe(rc?.desc || "");
    const angle = safe(applyLexicon(txt(data.angle, data.objet_court, "")));
    const conversation = safe(applyLexicon(txt(data.conversation, "")));
    const contexte = safe(applyLexicon(txt(data.contexte_titre, data.contexte_code, "")));
    const media = safe(txt(data.media, ""));
    const journaliste = safe(txt(data.journaliste, ""));
    const cycle = safe(txt(data.cycle, "Industrie & transformation des territoires"));

    return `
      <section class="landing-hero landing-hero--bento-minimal" id="hero">
        <div class="landing-container">
          <div class="landing-hero__inner">

            <div class="landing-hero__left">
              <p class="landing-kicker">${cycle}</p>
              ${conversation ? `<p class="landing-kicker" style="margin-top:6px;opacity:.7;">${conversation}${contexte ? ` · ${contexte}` : ""}</p>` : ""}
              <h1 class="landing-hero__title">${angle || "Position éditoriale personnalisée"}</h1>
              <p class="landing-hero__reading">${lectureLabel}</p>
              ${lectureDesc ? `<p class="landing-hero__reading-desc">${lectureDesc}</p>` : ""}

              <div class="landing-hero__person" style="margin-top:32px;padding:20px;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.06);">
                <p style="margin:0 0 4px;font-family:'IBM Plex Mono',monospace;font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;opacity:.6;">Intervenant pressenti</p>
                <p style="margin:0 0 2px;font-family:'Playfair Display',serif;font-size:1.45rem;font-weight:600;">${nom}</p>
                ${poste ? `<p style="margin:0 0 2px;opacity:.75;font-size:.92rem;">${poste}</p>` : ""}
                ${org ? `<p style="margin:0;opacity:.65;font-size:.88rem;font-family:'IBM Plex Mono',monospace;">${org}</p>` : ""}
              </div>

              ${media || journaliste ? `
              <div class="landing-hero__media" style="margin-top:20px;display:flex;align-items:center;gap:12px;">
                ${media ? `<span style="font-family:'IBM Plex Mono',monospace;font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;opacity:.75;">Diffusion · ${media}</span>` : ""}
                ${journaliste ? `<span style="opacity:.5;">·</span><span style="font-size:.88rem;opacity:.7;">${journaliste}</span>` : ""}
              </div>` : ""}

              <div class="landing-hero__cta" style="margin-top:32px;display:flex;gap:12px;flex-wrap:wrap;">
                <a href="${CTA.href}" class="landing-btn landing-btn--primary" target="_blank" rel="noopener">${CTA.label}</a>
              </div>
            </div>

            <div class="landing-hero__right">
              <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.12);padding:28px;">
                <p style="margin:0 0 8px;font-family:'IBM Plex Mono',monospace;font-size:.66rem;letter-spacing:.14em;text-transform:uppercase;opacity:.55;">Cycle Industrie 2026/2027</p>
                <p style="margin:0 0 6px;font-size:.92rem;opacity:.7;">Positions éditoriales en cours de composition</p>
                <dl style="margin:16px 0 0;display:grid;gap:12px;">
                  <div>
                    <dt style="font-family:'IBM Plex Mono',monospace;font-size:.66rem;text-transform:uppercase;letter-spacing:.1em;opacity:.5;">Préparation, cadrage, tournage</dt>
                    <dd style="margin:3px 0 0;font-size:.9rem;opacity:.8;">Jusqu'à décembre 2026</dd>
                  </div>
                  <div>
                    <dt style="font-family:'IBM Plex Mono',monospace;font-size:.66rem;text-transform:uppercase;letter-spacing:.1em;opacity:.5;">Diffusion à partir de septembre 2026</dt>
                    <dd style="margin:3px 0 0;font-size:.9rem;opacity:.8;">BFM Business · La Tribune · Le Figaro</dd>
                  </div>
                  <div>
                    <dt style="font-family:'IBM Plex Mono',monospace;font-size:.66rem;text-transform:uppercase;letter-spacing:.1em;opacity:.5;">Journalistes</dt>
                    <dd style="margin:3px 0 0;font-size:.9rem;opacity:.8;">Gilles Leclerc · Thierry Cabannes · Christophe Pallée</dd>
                  </div>
                </dl>
              </div>
            </div>

          </div>
        </div>
      </section>`;
  }

  function buildPertinenceSection(data) {
    const pertinence = applyLexicon(txt(data.pertinence_editoriale, ""));
    if (!pertinence) return "";
    const org = safe(txt(data.organisation?.nom, "cette organisation"));

    return `
      <section class="landing-section landing-section--light" id="pourquoi-vous">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Pertinence</p>
            <h2>Pourquoi ${org} est bien placé pour porter cette lecture.</h2>
            <p>Une position Scènes d'Arbitrage ne désigne pas seulement une organisation ou une fonction. Elle identifie ce qu'une expérience devrait permettre de rendre lisible depuis un endroit précis.</p>
          </div>
          <div class="landing-why-box" style="max-width:820px;margin:32px auto 0;">
            <p style="line-height:1.78;font-size:1.02rem;">${esc(pertinence)}</p>
          </div>
        </div>
      </section>`;
  }

  function buildConversationSection(data) {
    const conversation = safe(applyLexicon(txt(data.conversation, "")));
    const contexte = safe(applyLexicon(txt(data.contexte_titre, "")));
    const lecture = safe(txt(data.type_lecture, ""));
    const rc = getReadingConfig(data.type_lecture);
    const lectureLabel = safe(rc?.label || lecture);
    const angle = safe(applyLexicon(txt(data.angle, "")));

    return `
      <section class="landing-section landing-section--dark" id="mise-en-regard">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Votre place dans la conversation</p>
            <h2>${conversation || "Conversation éditoriale"}</h2>
            ${contexte ? `<p class="landing-head__context">${contexte}</p>` : ""}
          </div>
          <div style="max-width:760px;margin:32px auto 0;padding:28px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.04);">
            <p style="margin:0 0 12px;font-family:'IBM Plex Mono',monospace;font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;opacity:.55;">${lectureLabel}</p>
            <p style="margin:0;font-family:'Playfair Display',serif;font-size:clamp(1.1rem,2vw,1.6rem);line-height:1.25;">${angle}</p>
          </div>
          <p style="max-width:760px;margin:24px auto 0;font-size:.92rem;opacity:.6;line-height:1.7;font-style:italic;">
            Chaque intervenant participe séparément. La valeur naît ensuite de la mise en regard : plusieurs lectures éclairent le même moment de transformation industrielle.
          </p>
        </div>
      </section>`;
  }

  function buildAlternativesSection(data, allDeals) {
    const alts = allDeals.filter(d =>
      d.cast !== data.cast &&
      d.is_active &&
      (d.ref_deal_principal === data.cast ||
       data.cast === d.ref_deal_principal ||
       (d.ref_deal_principal && d.ref_deal_principal === data.ref_deal_principal && data.ref_deal_principal))
    );

    if (!alts.length) return "";

    const cards = alts.map(alt => {
      const rc = getReadingConfig(alt.type_lecture);
      return `
        <div style="padding:24px;border:1px solid rgba(23,23,23,.12);background:#fffaf0;">
          <p style="margin:0 0 8px;font-family:'IBM Plex Mono',monospace;font-size:.66rem;letter-spacing:.12em;text-transform:uppercase;color:rgba(23,23,23,.5);">${safe(rc?.label || alt.type_lecture)}</p>
          <p style="margin:0 0 12px;font-family:'Playfair Display',serif;font-size:1.15rem;line-height:1.2;">${safe(applyLexicon(txt(alt.angle, alt.objet_court, "")))}</p>
          <a href="${safe(alt.url_landing_page || "#")}" style="font-family:'IBM Plex Mono',monospace;font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;color:#111;text-decoration:none;border-bottom:1px solid currentColor;">Voir cette proposition →</a>
        </div>`;
    }).join("");

    return `
      <section class="landing-section landing-section--light" id="alternatives">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Autres lectures disponibles</p>
            <h2>D'autres angles de ce cycle pourraient également correspondre.</h2>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;margin-top:32px;">
            ${cards}
          </div>
        </div>
      </section>`;
  }

  function buildProcessSection() {
    const steps = PROCESS_STEPS.map(s => `
      <div style="padding:22px 18px;border-right:1px solid rgba(23,23,23,.1);">
        <span style="display:block;margin-bottom:16px;font-family:'IBM Plex Mono',monospace;font-size:.68rem;color:rgba(23,23,23,.5);">${s.num}</span>
        <h3 style="margin:0 0 8px;font-family:'Playfair Display',serif;font-size:1.15rem;line-height:1.2;">${s.title}</h3>
        <p style="margin:0;font-size:.88rem;line-height:1.6;color:rgba(23,23,23,.65);">${s.text}</p>
      </div>`).join("");

    return `
      <section class="landing-section landing-section--light" id="processus">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Comment ça se passe</p>
            <h2>Cinq étapes, aucune surprise.</h2>
          </div>
          <div style="display:grid;grid-template-columns:repeat(5,1fr);border:1px solid rgba(23,23,23,.1);background:rgba(255,255,255,.42);margin-top:32px;">
            ${steps}
          </div>
        </div>
      </section>`;
  }

  function buildGuaranteesSection() {
    const items = GUARANTEES.map(g => `
      <div style="padding:24px;border:1px solid rgba(23,23,23,.1);background:#fffaf0;">
        <h3 style="margin:0 0 10px;font-family:'Playfair Display',serif;font-size:1.2rem;">${g.title}</h3>
        <p style="margin:0;font-size:.9rem;line-height:1.65;color:rgba(23,23,23,.65);">${g.text}</p>
      </div>`).join("");

    return `
      <section class="landing-section landing-section--dark" id="garanties">
        <div class="landing-container">
          <div class="landing-head">
            <p class="landing-kicker">Cadre de confiance</p>
            <h2>Ce que cette participation n'implique pas.</h2>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;margin-top:32px;">
            ${items}
          </div>
        </div>
      </section>`;
  }

  function buildCTASection() {
    return `
      <section class="landing-section landing-section--light" id="contact">
        <div class="landing-container" style="text-align:center;max-width:680px;margin:0 auto;">
          <p class="landing-kicker">Prochaine étape</p>
          <h2 style="font-family:'Playfair Display',serif;font-size:clamp(1.8rem,3.5vw,3.2rem);margin:0 0 20px;">Qualifier cette position en 15 minutes.</h2>
          <p style="color:rgba(23,23,23,.65);line-height:1.7;margin:0 0 32px;">${CTA.text}</p>
          <a href="${CTA.href}" class="landing-btn landing-btn--primary" target="_blank" rel="noopener">${CTA.label}</a>
          <p style="margin:16px 0 0;font-size:.8rem;opacity:.5;">${CTA.footnote}</p>
        </div>
      </section>`;
  }

  // ─── Rendu principal ───────────────────────────────────────────────────────

  function render(data, allDeals) {
    if (!ROOT) return;

    document.title = `Scènes d'Arbitrage — ${txt(data.person?.nom_complet, "Proposition éditoriale")}`;

    ROOT.innerHTML =
      buildHeroSection(data) +
      buildPertinenceSection(data) +
      buildConversationSection(data) +
      buildAlternativesSection(data, allDeals) +
      buildProcessSection() +
      buildGuaranteesSection() +
      buildCTASection();
  }

  // ─── Chargement depuis l'API ───────────────────────────────────────────────

  async function init() {
    const params = new URLSearchParams(window.location.search);
    const cast = (params.get("cast") || params.get("ref") || "").trim();

    if (!cast) {
      renderFallback(null);
      return;
    }

    try {
      const res = await fetch(`${API_BASE}?cast=${encodeURIComponent(cast)}`);
      const json = await res.json();

      if (!res.ok || !json.ok || !json.data) {
        renderFallback(cast);
        return;
      }

      const data = json.data;

      // Vérifier statut
      if (!data.is_active) {
        renderReserve(data);
        return;
      }

      // Charger les deals alternatifs si ref_deal_principal existe
      // On charge le deal principal pour trouver les autres lectures
      let allDeals = [data];
      if (data.ref_deal_principal || data.rang_alternatif) {
        try {
          // Chercher le deal principal
          const principalCast = data.ref_deal_principal || cast;
          const resPrincipal = await fetch(`${API_BASE}?cast=${encodeURIComponent(principalCast)}`);
          const jsonPrincipal = await resPrincipal.json();
          if (jsonPrincipal.ok && jsonPrincipal.data) {
            allDeals = [jsonPrincipal.data, data].filter((d, i, arr) =>
              arr.findIndex(x => x.cast === d.cast) === i
            );
          }
        } catch (e) {
          // Pas bloquant — on continue sans les alternatives
        }
      }

      render(data, allDeals);

    } catch (e) {
      console.error("render-landing-v2 — erreur API :", e);
      renderFallback(cast);
    }
  }

  init();

})();
