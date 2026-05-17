/*
  En Plateau — render-core.js
  Version V65 — lecture master éditorial + deal personalization
*/

(function () {
  "use strict";

  const Core = {};

  Core.getData = function () {
    return window.EN_PLATEAU_EDITORIAL_DATA || window.EN_PLATEAU_MASTER || window.enPlateauEditorialData || null;
  };

  Core.getParams = function () {
    return new URLSearchParams(window.location.search || "");
  };

  Core.getParam = function (name, fallback = "") {
    return Core.getParams().get(name) || fallback;
  };

  Core.getPublicReference = function () {
    const params = Core.getParams();
    return (
      params.get("cast") ||
      params.get("ref") ||
      params.get("position") ||
      params.get("p") ||
      params.get("deal") ||
      ""
    ).trim();
  };

  Core.normalize = function (value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[’']/g, "'")
      .replace(/[_-]+/g, " ")
      .replace(/\s+/g, " ");
  };

  Core.slugify = function (value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  Core.escapeHTML = function (value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  Core.text = function (...values) {
    for (const value of values) {
      if (value !== undefined && value !== null && String(value).trim() !== "") return String(value).trim();
    }
    return "";
  };

  Core.toArray = function (value) {
    if (!value) return [];
    return Array.isArray(value) ? value : [value];
  };

  Core.objectValues = function (value) {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    if (typeof value === "object") return Object.values(value);
    return [];
  };

  Core.findByNormalizedKey = function (object, value) {
    if (!object || !value) return null;
    const wanted = Core.normalize(value);
    if (object[value]) return object[value];

    return Object.entries(object).find(([key, item]) =>
      Core.normalize(key) === wanted ||
      Core.normalize(item?.code) === wanted ||
      Core.normalize(item?.slug) === wanted ||
      Core.normalize(item?.label) === wanted ||
      Core.normalize(item?.shortLabel) === wanted ||
      Core.normalize(item?.readingType) === wanted
    )?.[1] || null;
  };

  Core.getCycle = function (cycleCode) {
    const cycles = Core.getData()?.cycles || [];
    if (!cycles.length) return null;
    if (!cycleCode) return cycles[0];

    return cycles.find(cycle =>
      Core.normalize(cycle.code) === Core.normalize(cycleCode) ||
      Core.normalize(cycle.label) === Core.normalize(cycleCode)
    ) || cycles[0];
  };

  Core.getAngles = function () {
    const data = Core.getData();
    if (!data) return [];
    if (Array.isArray(data.angles)) return data.angles;
    return (data.cycles || []).flatMap(cycle => Array.isArray(cycle.angles) ? cycle.angles : []);
  };

  Core.getAngleByCode = function (code) {
    if (!code) return null;
    const wanted = Core.normalize(code);
    return Core.getAngles().find(angle =>
      Core.normalize(angle.code) === wanted ||
      Core.normalize(angle.angleCode) === wanted ||
      Core.normalize(angle.legacyAngleCode) === wanted ||
      Core.normalize(angle.code_angle) === wanted
    ) || null;
  };

  Core.getReadingTypes = function () {
    const data = Core.getData();
    return data?.readingTypes || data?.readings || {};
  };

  Core.getReadingByCode = function (code) {
    return Core.findByNormalizedKey(Core.getReadingTypes(), code);
  };

  Core.getLandingPages = function () {
    return Core.getData()?.landingPages || {};
  };

  Core.getLandingPageByReading = function (reading, angle, deal) {
    const pages = Core.getLandingPages();
    const candidates = [
      reading?.slug, reading?.code, reading?.shortLabel, reading?.label,
      angle?.typeLecture, deal?.editorialContext?.typeLecture, deal?.typeLecture, deal?.lecture
    ].filter(Boolean);

    for (const candidate of candidates) {
      const direct = Core.findByNormalizedKey(pages, candidate);
      if (direct) return direct;
      const slug = Core.slugify(candidate);
      if (pages[slug]) return pages[slug];
    }
    return null;
  };

  Core.getConversation = function (angle) {
    if (!angle) return null;
    const conversations = Core.getCycle()?.conversations || [];
    const code = Core.text(angle.conversationCode, angle.conversation_code, angle.conversation);

    return conversations.find(conv =>
      Core.normalize(conv.code) === Core.normalize(code) ||
      Core.normalize(conv.title) === Core.normalize(code)
    ) || null;
  };

  Core.getContext = function (angle) {
    if (!angle) return null;
    const contexts = Core.getCycle()?.contexts || [];
    const code = Core.text(angle.contextCode, angle.context_code, angle.context, angle.contexte);

    return contexts.find(ctx =>
      Core.normalize(ctx.code) === Core.normalize(code) ||
      Core.normalize(ctx.label) === Core.normalize(code)
    ) || null;
  };

  Core.getRecordsByDealId = function () {
    const data = Core.getData();
    return data?.dealPersonalization?.recordsByRef || data?.dealPersonalization?.recordsByDealId || data?.dealPersonalization?.dealsById || data?.recordsByDealId || {};
  };

  Core.getCastings = function () {
    const data = Core.getData();
    if (!data) return [];

    const records = Core.objectValues(Core.getRecordsByDealId());
    if (records.length) return records;

    const candidates = [
      data?.dealPersonalization?.records,
      data?.dealPersonalization?.deals,
      data?.casting?.castings,
      data?.casting?.deals,
      data?.castings,
      data?.deals,
      data?.crm?.deals
    ];

    for (const candidate of candidates) {
      const arr = Core.objectValues(candidate);
      if (arr.length) return arr;
    }

    return [];
  };

  Core.getDealId = function (deal) {
    return Core.text(
      deal?.dealId,
      deal?.deal_id,
      deal?.id,
      deal?.pipedriveDealId,
      deal?.pipedrive_deal_id,
      deal?.affaireId,
      deal?.affaire_id,
      deal?.["Affaire - ID"],
      deal?.["Affaire – ID"],
      deal?.["Deal ID"],
      deal?.["ID"]
    );
  };

  Core.getDealById = function (id) {
    const wanted = String(id || "").trim();
    if (!wanted) return null;

    const data = Core.getData();
    const records = Core.getRecordsByDealId();
    if (records && records[wanted]) return records[wanted];

    const recordsByRef = data?.dealPersonalization?.recordsByRef || {};
    if (recordsByRef && recordsByRef[wanted]) return recordsByRef[wanted];

    const normalized = Core.normalize(wanted);
    return Core.getCastings().find(deal =>
      [Core.getDealId(deal), deal?.publicRef, deal?.key, deal?.slug, deal?.externalId, deal?.external_id]
        .some(value => Core.normalize(value) === normalized)
    ) || null;
  };

  Core.getAngleCodeFromDeal = function (deal) {
    return Core.text(
      deal?.angleCode,
      deal?.angle_code,
      deal?.codeAngle,
      deal?.code_angle,
      deal?.legacyAngleCode,
      deal?.position?.angleCode,
      deal?.editorial?.angleCode,
      deal?.editorialContext?.angleCode,
      deal?.editorialContext?.codeAngle,
      deal?.["Affaire - code_angle"],
      deal?.["Affaire – code_angle"],
      deal?.["code_angle"]
    );
  };

  Core.isExcludedDeal = function (deal) {
    if (!deal) return true;

    const status = Core.normalize(Core.text(
      deal?.activation?.activationStatus,
      deal?.activationStatus,
      deal?.verification?.validationFinale,
      deal?.quality?.qualityLevel,
      deal?.dealTitle
    ));

    return (
      deal?.activation?.isActiveCasting === false ||
      deal?.isActiveCasting === false ||
      !!Core.text(deal?.activation?.replacedBy, deal?.replacedBy) ||
      !!Core.text(deal?.activation?.exclusionReason, deal?.exclusionReason) ||
      status.includes("exclu") ||
      status.includes("exclusion") ||
      status.includes("non activable")
    );
  };

  Core.getExclusionReason = function (deal) {
    return Core.text(
      deal?.activation?.exclusionReason,
      deal?.exclusionReason,
      deal?.verification?.wordStatus,
      "Cette position est conservée comme trace CRM, mais ne doit pas être activée."
    );
  };

  Core.getActorType = function (deal) {
    const raw = Core.text(
      deal?.typeActeur,
      deal?.type_acteur,
      deal?.actorType,
      deal?.organisation?.type,
      deal?.organisation?.typeActeur,
      deal?.organization?.type,
      deal?.["Type acteur"],
      deal?.["consultant_vs_entreprise"]
    );

    const normalized = Core.normalize(raw);

    if (
      normalized.includes("cabinet") ||
      normalized.includes("conseil") ||
      normalized.includes("consultant") ||
      normalized.includes("expertise") ||
      normalized.includes("audit") ||
      normalized.includes("avocat") ||
      normalized.includes("ingenierie")
    ) return "cabinet_conseil";

    return "entreprise";
  };

  Core.getPerson = function (deal) {
    const p = deal?.person || deal?.personne || deal?.contact || {};
    const firstName = Core.text(p.firstName, p.first_name, deal?.firstName, deal?.prenom, deal?.["Prénom"]);
    const lastName = Core.text(p.lastName, p.last_name, deal?.lastName, deal?.nom, deal?.["Nom"]);

    return {
      fullName: Core.text(p.effectiveName, p.verifiedName, p.name, p.fullName, deal?.personName, deal?.person_name, deal?.personne, deal?.["Personne"], [firstName, lastName].filter(Boolean).join(" ")),
      firstName,
      lastName,
      role: Core.text(p.effectiveRole, p.verifiedRole, p.role, p.title, p.jobTitle, deal?.role, deal?.fonction, deal?.poste, deal?.jobTitle, deal?.["Fonction"], deal?.["Poste"]),
      linkedin: Core.text(p.effectiveLinkedin, p.verifiedLinkedin, p.linkedin, p.linkedinUrl, p.linkedin_url, deal?.linkedin, deal?.linkedinUrl, deal?.linkedin_url, deal?.urlLinkedin, deal?.["LinkedIn"], deal?.["URL LinkedIn"]),
      email: Core.text(p.emailWork, p.email, p.mail, deal?.email, deal?.mail, deal?.["Email"], deal?.["E-mail"])
    };
  };

  Core.getOrganisation = function (deal) {
    const o = deal?.organisation || deal?.organization || deal?.entreprise || {};
    return {
      name: Core.text(o.effectiveName, o.verifiedName, o.name, o.nom, deal?.organisation, deal?.organization, deal?.organizationName, deal?.entreprise, deal?.societe, deal?.["Organisation"], deal?.["Entreprise"], deal?.["Société"]),
      type: Core.getActorType(deal),
      rawType: Core.text(o.type, o.typeActeur, o.type_acteur),
      scale: Core.text(o.echelleIntervention, o.echelle_intervention, deal?.echelleIntervention),
      metiers: Core.text(o.metiersCouverts, o.metiers_couverts, deal?.metiersCouverts),
      territoires: Core.text(o.territoiresCouverts, o.territoires_couverts, deal?.territoiresCouverts)
    };
  };

  Core.getWhy = function (deal) {
    const w = deal?.why || deal?.justification || deal?.justifications || {};
    const e = deal?.editorial || {};
    const p = deal?.personalization || {};
    return {
      organisation: Core.text(w.organisation, w.whyOrganisation, e.whyOrganisation, p.whyOrganisation, deal?.whyOrganisation, deal?.why_organisation, deal?.pourquoiOrganisationEditorial, deal?.pourquoi_organisation_editorial),
      person: Core.text(w.person, w.personne, w.whyPerson, e.whyPerson, p.whyPerson, deal?.whyPerson, deal?.why_person, deal?.pourquoiPersonneEditorial, deal?.pourquoi_personne_editorial),
      position: Core.text(w.position, w.whyThisPosition, e.whyThisPosition, p.whyThisPosition, deal?.whyThisPosition, deal?.why_this_position, deal?.pourquoiPositionEditoriale, deal?.pourquoi_position_editoriale)
    };
  };

  Core.getFormulationLanding = function (angle) {
    return angle?.formulationVariants?.landing || angle?.formulation?.landing || angle?.activationCopy?.landing || {};
  };

  Core.getPersonaFit = function (angle) {
    return angle?.activationPersonaFit || angle?.personaFit || {};
  };

  Core.getCTAFromLandingPage = function (landingPage) {
    return landingPage?.cta || {};
  };

  Core.getDealBundle = function () {
    const dealId = Core.getPublicReference();
    const deal = Core.getDealById(dealId);

    if (!deal) return { dealId, deal: null, angle: null, reading: null, conversation: null, context: null, landingPage: null };

    const angle = Core.getAngleByCode(Core.getAngleCodeFromDeal(deal));
    const readingCode = Core.text(deal?.typeLecture, deal?.type_lecture, deal?.lecture, deal?.editorial?.typeLecture, deal?.editorialContext?.typeLecture, angle?.typeLecture, angle?.type_lecture);
    const reading = Core.getReadingByCode(readingCode);

    return {
      dealId,
      deal,
      angle,
      reading,
      conversation: Core.getConversation(angle),
      context: Core.getContext(angle),
      landingPage: Core.getLandingPageByReading(reading, angle, deal)
    };
  };

  Core.errorHTML = function (title, message) {
    return `
      <section class="landing-loading">
        <div class="landing-loading__box">
          <a class="landing-brand landing-brand--loading" href="/" aria-label="En Plateau — accueil">En Plateau</a>
          <h1>${Core.escapeHTML(title)}</h1>
          <p>${message}</p>
        </div>
      </section>
    `;
  };

  window.EnPlateauRenderCore = Core;
})();
