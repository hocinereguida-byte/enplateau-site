/*
  En Plateau — render-core.js
  Moteur commun de lecture du référentiel éditorial + casting
  Version MVP — landing + exports LinkedIn
*/

(function () {
  "use strict";

  const Core = {};

  Core.getData = function () {
    return (
      window.EN_PLATEAU_EDITORIAL_DATA ||
      window.EN_PLATEAU_MASTER ||
      window.enPlateauEditorialData ||
      null
    );
  };

  Core.getParams = function () {
    return new URLSearchParams(window.location.search || "");
  };

  Core.getParam = function (name, fallback = "") {
    const params = Core.getParams();
    return params.get(name) || fallback;
  };

  Core.normalize = function (value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[’']/g, "'")
      .replace(/\s+/g, " ");
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
      if (value !== undefined && value !== null && String(value).trim() !== "") {
        return String(value).trim();
      }
    }
    return "";
  };

  Core.toArray = function (value) {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    return [value];
  };

  Core.getCycle = function (cycleCode) {
    const data = Core.getData();
    const cycles = data?.cycles || [];
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

    const cycles = data.cycles || [];
    return cycles.flatMap(cycle => Array.isArray(cycle.angles) ? cycle.angles : []);
  };

  Core.getAngleByCode = function (code) {
    if (!code) return null;
    return Core.getAngles().find(angle =>
      Core.normalize(angle.code) === Core.normalize(code) ||
      Core.normalize(angle.code_angle) === Core.normalize(code) ||
      Core.normalize(angle.angleCode) === Core.normalize(code)
    ) || null;
  };

  Core.getReadingTypes = function () {
    const data = Core.getData();
    return data?.readingTypes || data?.readings || {};
  };

  Core.getReadingByCode = function (code) {
    const readings = Core.getReadingTypes();
    if (!code) return null;

    if (readings[code]) return readings[code];

    const wanted = Core.normalize(code);
    return Object.values(readings).find(reading =>
      Core.normalize(reading.code) === wanted ||
      Core.normalize(reading.label) === wanted ||
      Core.normalize(reading.slug) === wanted ||
      Core.normalize(reading.shortLabel) === wanted
    ) || null;
  };

  Core.getConversation = function (angle) {
    if (!angle) return null;
    const cycle = Core.getCycle();
    const conversations = cycle?.conversations || [];
    const code = angle.conversationCode || angle.conversation_code || angle.conversation;
    return conversations.find(conv =>
      Core.normalize(conv.code) === Core.normalize(code) ||
      Core.normalize(conv.title) === Core.normalize(code)
    ) || null;
  };

  Core.getContext = function (angle) {
    if (!angle) return null;
    const cycle = Core.getCycle();
    const contexts = cycle?.contexts || [];
    const code = angle.contextCode || angle.context_code || angle.contexte || angle.context;
    return contexts.find(ctx =>
      Core.normalize(ctx.code) === Core.normalize(code) ||
      Core.normalize(ctx.label) === Core.normalize(code)
    ) || null;
  };

  Core.getCastings = function () {
    const data = Core.getData();
    if (!data) return [];

    const candidates = [
      data.castings,
      data.deals,
      data.positions,
      data.crmDeals,
      data.crm?.deals,
      data.crm?.castings
    ];

    for (const candidate of candidates) {
      if (Array.isArray(candidate)) return candidate;
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
      deal?.["ID"],
      deal?.["Deal ID"],
      deal?.["Affaire - ID"],
      deal?.["Affaire ID"],
      deal?.["ID de l’affaire"],
      deal?.["ID affaire"],
      deal?.["id_affaire"]
    );
  };

  Core.getDealById = function (id) {
    const wanted = Core.normalize(id);
    if (!wanted) return null;

    return Core.getCastings().find(deal => {
      const possibleIds = [
        Core.getDealId(deal),
        deal?.key,
        deal?.slug,
        deal?.externalId,
        deal?.external_id
      ];
      return possibleIds.some(value => Core.normalize(value) === wanted);
    }) || null;
  };

  Core.getAngleCodeFromDeal = function (deal) {
    return Core.text(
      deal?.angleCode,
      deal?.angle_code,
      deal?.codeAngle,
      deal?.code_angle,
      deal?.code,
      deal?.["code_angle"],
      deal?.["Affaire - code_angle"],
      deal?.["Affaire – code_angle"],
      deal?.["Code angle"],
      deal?.["Angle code"]
    );
  };

  Core.getActorType = function (deal) {
    const raw = Core.text(
      deal?.typeActeur,
      deal?.type_acteur,
      deal?.actorType,
      deal?.["type_acteur"],
      deal?.["Type acteur"],
      deal?.["consultant_vs_entreprise"],
      deal?.["Consultant vs entreprise"],
      deal?.["Affaire - type_acteur"],
      deal?.["Affaire – type_acteur"]
    );

    const normalized = Core.normalize(raw);

    if (
      normalized.includes("cabinet") ||
      normalized.includes("conseil") ||
      normalized.includes("consultant") ||
      normalized.includes("expertise")
    ) {
      return "cabinet_conseil";
    }

    return "entreprise";
  };

  Core.getPerson = function (deal) {
    const fullName = Core.text(
      deal?.personName,
      deal?.person_name,
      deal?.personne,
      deal?.nomPersonne,
      deal?.nom_personne,
      deal?.["Personne"],
      deal?.["Personne - Nom"],
      deal?.["Personne – Nom"],
      deal?.["Contact"],
      deal?.["Nom complet"]
    );

    const firstName = Core.text(
      deal?.firstName,
      deal?.first_name,
      deal?.prenom,
      deal?.prénom,
      deal?.["Prénom"],
      deal?.["Personne - Prénom"],
      deal?.["Personne – Prénom"]
    );

    const lastName = Core.text(
      deal?.lastName,
      deal?.last_name,
      deal?.nom,
      deal?.["Nom"],
      deal?.["Personne - Nom de famille"],
      deal?.["Personne – Nom de famille"]
    );

    return {
      fullName: fullName || [firstName, lastName].filter(Boolean).join(" "),
      firstName,
      lastName,
      role: Core.text(
        deal?.role,
        deal?.fonction,
        deal?.poste,
        deal?.jobTitle,
        deal?.job_title,
        deal?.["Fonction"],
        deal?.["Poste"],
        deal?.["Personne - Fonction"],
        deal?.["Personne – Fonction"]
      ),
      linkedin: Core.text(
        deal?.linkedin,
        deal?.linkedinUrl,
        deal?.linkedin_url,
        deal?.urlLinkedin,
        deal?.url_linkedin,
        deal?.["LinkedIn"],
        deal?.["URL LinkedIn"],
        deal?.["Personne - LinkedIn"],
        deal?.["Personne – LinkedIn"]
      ),
      email: Core.text(
        deal?.email,
        deal?.mail,
        deal?.["Email"],
        deal?.["E-mail"],
        deal?.["Personne - Email"],
        deal?.["Personne – Email"]
      )
    };
  };

  Core.getOrganisation = function (deal) {
    return {
      name: Core.text(
        deal?.organisation,
        deal?.organization,
        deal?.organizationName,
        deal?.organization_name,
        deal?.entreprise,
        deal?.societe,
        deal?.société,
        deal?.["Organisation"],
        deal?.["Entreprise"],
        deal?.["Société"],
        deal?.["Organisation - Nom"],
        deal?.["Organisation – Nom"]
      ),
      type: Core.getActorType(deal)
    };
  };

  Core.getWhy = function (deal) {
    return {
      organisation: Core.text(
        deal?.whyOrganisation,
        deal?.why_organisation,
        deal?.pourquoiOrganisationEditorial,
        deal?.pourquoi_organisation_editorial,
        deal?.["whyOrganisation"],
        deal?.["pourquoi_organisation_editorial"]
      ),
      person: Core.text(
        deal?.whyPerson,
        deal?.why_person,
        deal?.pourquoiPersonneEditorial,
        deal?.pourquoi_personne_editorial,
        deal?.["whyPerson"],
        deal?.["pourquoi_personne_editorial"]
      ),
      position: Core.text(
        deal?.whyThisPosition,
        deal?.why_this_position,
        deal?.pourquoiPositionEditoriale,
        deal?.pourquoi_position_editoriale,
        deal?.["whyThisPosition"],
        deal?.["pourquoi_position_editoriale"]
      )
    };
  };

  Core.getDealBundle = function () {
    const dealId = Core.getParam("deal");
    const deal = Core.getDealById(dealId);

    if (!deal) {
      return { dealId, deal: null, angle: null, reading: null, conversation: null, context: null };
    }

    const angleCode = Core.getAngleCodeFromDeal(deal);
    const angle = Core.getAngleByCode(angleCode);

    const readingCode = Core.text(
      deal?.typeLecture,
      deal?.type_lecture,
      deal?.lecture,
      deal?.["type_lecture"],
      deal?.["Type lecture"],
      angle?.typeLecture,
      angle?.type_lecture
    );

    const reading = Core.getReadingByCode(readingCode);
    const conversation = Core.getConversation(angle);
    const context = Core.getContext(angle);

    return { dealId, deal, angle, reading, conversation, context };
  };

  Core.errorHTML = function (title, message) {
    return `
      <section class="lp-error">
        <div class="lp-error-box">
          <h1>${Core.escapeHTML(title)}</h1>
          <p>${message}</p>
        </div>
      </section>
    `;
  };

  window.EnPlateauRenderCore = Core;
})();
