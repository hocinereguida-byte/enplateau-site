document.addEventListener("DOMContentLoaded", () => {
  const WORKER_ENDPOINT = "https://enplateau-etape1.hocine-reguida.workers.dev";
  const CAL_BOOKING_URL = "https://cal.com/en-plateau/echange-editorial-15-min";
  const CAL_FIELD_IDENTIFIER = "selection_editoriale";
  const CAL_FIELD_MAX_LENGTH = 1000;
  const CONTACT_STORAGE_KEY = "enplateau_editorial_contact_v1";

  const contactForm = document.getElementById("editorial-contact-form");
  const organisationInput = document.getElementById("organisation-input");
  const activityInput = document.getElementById("activity-input");
  const firstNameInput = document.getElementById("first-name-input");
  const lastNameInput = document.getElementById("last-name-input");
  const emailInput = document.getElementById("email-input");
  const phoneInput = document.getElementById("phone-input");
  const contactSubmitButton = document.getElementById("editorial-contact-submit");
  const contactFeedback = document.getElementById("editorial-contact-feedback");
  const selectionStage = document.getElementById("editorial-selection-stage");
  const contactConfirmation = document.getElementById("editorial-contact-confirmation");

  const selectionForm = document.getElementById("editorial-intake-form");
  const cycleCards = document.getElementById("cycle-cards");
  const conversationStage = document.getElementById("conversation-stage");
  const conversationCards = document.getElementById("conversation-cards");
  const conversationDetails = document.getElementById("conversation-details");
  const summaryStage = document.getElementById("summary-stage");
  const summaryLead = document.getElementById("editorial-selection-summary-lead");
  const summaryLines = document.getElementById("editorial-selection-summary-lines");
  const resetSelectionButton = document.getElementById("reset-selection-button");
  const selectionFeedback = document.getElementById("editorial-intake-feedback");

  if (
    !contactForm ||
    !organisationInput ||
    !activityInput ||
    !firstNameInput ||
    !lastNameInput ||
    !emailInput ||
    !contactSubmitButton ||
    !contactFeedback ||
    !selectionStage ||
    !contactConfirmation ||
    !selectionForm ||
    !cycleCards ||
    !conversationStage ||
    !conversationCards ||
    !conversationDetails ||
    !summaryStage ||
    !summaryLead ||
    !summaryLines ||
    !resetSelectionButton ||
    !selectionFeedback
  ) {
    return;
  }

  const rawEditorialSource = window.EN_PLATEAU_EDITORIAL_DATA;

  if (!rawEditorialSource || !Array.isArray(rawEditorialSource.cycles)) {
    selectionFeedback.textContent =
      "Les données éditoriales ne sont pas disponibles. Vérifiez le chargement de /assets/js/data/editorial-data.js avant echange-editorial-form.js.";
    return;
  }

  function normalizeAngle(angle) {
    const profiles = Array.isArray(angle.profiles) && angle.profiles.length
      ? angle.profiles
      : [angle.primaryProfile, angle.alternateProfile].filter(Boolean);

    return {
      code: angle.code || "",
      fullCode: angle.fullCode || "",
      motherAngle: angle.motherAngle || "",
      question: angle.question || "",
      primaryProfile: angle.primaryProfile || "",
      alternateProfile: angle.alternateProfile || "",
      profiles
    };
  }

  function normalizeContext(context) {
    return {
      code: context.code || "",
      label: context.label || "",
      description: context.description || "",
      angles: Array.isArray(context.angles) ? context.angles.map(normalizeAngle) : []
    };
  }

  function normalizeConversation(conversation) {
    return {
      code: conversation.code || "",
      title: conversation.title || "",
      tension: conversation.tension || "",
      description: conversation.description || "",
      contexts: Array.isArray(conversation.contexts)
        ? conversation.contexts.map(normalizeContext)
        : []
    };
  }

  function normalizeCycle(cycle) {
    return {
      code: cycle.code || "",
      label: cycle.label || "",
      sourceLabel: cycle.sourceLabel || "",
      description: cycle.description || "",
      contexts: Array.isArray(cycle.contexts) ? cycle.contexts.map(normalizeContext) : [],
      conversations: Array.isArray(cycle.conversations)
        ? cycle.conversations.map(normalizeConversation)
        : []
    };
  }

  const editorialSource = {
    version: rawEditorialSource.version || "",
    cycles: rawEditorialSource.cycles.map(normalizeCycle)
  };

  const state = {
    contact: {
      organisation: "",
      activity: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    },
    contactValidated: false,
    cycle: "",
    conversations: [],
    contexts: {},
    angles: {}
  };

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function setContactFeedback(message = "") {
    contactFeedback.textContent = message;
  }

  function setSelectionFeedback(message = "") {
    selectionFeedback.textContent = message;
  }

  function shortText(text, max = 96) {
    if (!text) return "";
    if (text.length <= max) return text;
    return `${text.slice(0, max - 1).trim()}…`;
  }

  function pluralize(count, singular, plural) {
    return count > 1 ? plural : singular;
  }

  function getSelectedAnglesCount() {
    return state.conversations.reduce((sum, conversationCode) => {
      return sum + ((state.angles[conversationCode] || []).length);
    }, 0);
  }

  function getCycleShortLabel(cycle) {
    if (!cycle) return "";
    if (cycle.code === "LOG") return "Logement";
    if (cycle.code === "IND") return "Industrie";
    return cycle.label || cycle.code || "";
  }

  function getCycleByCode(cycleCode) {
    return editorialSource.cycles.find((cycle) => cycle.code === cycleCode) || null;
  }

  function getCurrentCycle() {
    return getCycleByCode(state.cycle);
  }

  function getConversationByCode(cycle, conversationCode) {
    if (!cycle) return null;
    return cycle.conversations.find((conversation) => conversation.code === conversationCode) || null;
  }

  function getContextByCode(conversation, contextCode) {
    if (!conversation) return null;
    return conversation.contexts.find((context) => context.code === contextCode) || null;
  }

  function getAngleByFullCode(context, fullCode) {
    if (!context) return null;
    return context.angles.find((angle) => angle.fullCode === fullCode) || null;
  }

  function formatProfiles(angle) {
    const profiles = Array.isArray(angle.profiles) ? angle.profiles.filter(Boolean) : [];
    if (!profiles.length) return "";
    return profiles.join(" · ");
  }

  function saveContactState() {
    try {
      sessionStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(state.contact));
    } catch (error) {
      console.warn("Impossible d'enregistrer l'étape contact en sessionStorage.", error);
    }
  }

  function restoreContactState() {
    try {
      const raw = sessionStorage.getItem(CONTACT_STORAGE_KEY);
      if (!raw) return false;

      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return false;

      state.contact = {
        organisation: parsed.organisation || "",
        activity: parsed.activity || "",
        firstName: parsed.firstName || "",
        lastName: parsed.lastName || "",
        email: parsed.email || "",
        phone: parsed.phone || ""
      };

      organisationInput.value = state.contact.organisation;
      activityInput.value = state.contact.activity;
      firstNameInput.value = state.contact.firstName;
      lastNameInput.value = state.contact.lastName;
      emailInput.value = state.contact.email;
      phoneInput.value = state.contact.phone;

      state.contactValidated = Boolean(
        state.contact.organisation &&
        state.contact.activity &&
        state.contact.firstName &&
        state.contact.lastName &&
        state.contact.email
      );

      return state.contactValidated;
    } catch (error) {
      console.warn("Impossible de restaurer l'étape contact depuis sessionStorage.", error);
      return false;
    }
  }

  function showSelectionStage() {
    selectionStage.hidden = false;
    renderContactConfirmation();
  }

  function hideSelectionStage() {
    selectionStage.hidden = true;
  }

  function renderContactConfirmation() {
    if (!state.contactValidated) {
      contactConfirmation.innerHTML = "";
      return;
    }

    contactConfirmation.innerHTML = `
      <strong>Demande confirmée :</strong> ${escapeHtml(state.contact.firstName)} ${escapeHtml(state.contact.lastName)}
      <span> · ${escapeHtml(state.contact.organisation)} · ${escapeHtml(state.contact.activity)}</span>
    `;
  }

  function updateContactStateFromInputs() {
    state.contact.organisation = organisationInput.value.trim();
    state.contact.activity = activityInput.value.trim();
    state.contact.firstName = firstNameInput.value.trim();
    state.contact.lastName = lastNameInput.value.trim();
    state.contact.email = emailInput.value.trim();
    state.contact.phone = phoneInput.value.trim();
  }

  function validateContactStep() {
    updateContactStateFromInputs();

    if (!state.contact.organisation) {
      return "Renseignez votre organisation / structure.";
    }

    if (!state.contact.activity) {
      return "Renseignez votre domaine d’activité.";
    }

    if (!state.contact.firstName) {
      return "Renseignez votre prénom.";
    }

    if (!state.contact.lastName) {
      return "Renseignez votre nom.";
    }

    if (!state.contact.email) {
      return "Renseignez votre email professionnel.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(state.contact.email)) {
      return "Renseignez un email valide.";
    }

    return "";
  }

  function resetSelectionState(keepCycle = false) {
    const preservedCycle = keepCycle ? state.cycle : "";
    state.cycle = preservedCycle;
    state.conversations = [];
    state.contexts = {};
    state.angles = {};
  }

  function toggleConversation(conversationCode) {
    const index = state.conversations.indexOf(conversationCode);

    if (index >= 0) {
      state.conversations.splice(index, 1);
      delete state.contexts[conversationCode];
      delete state.angles[conversationCode];
    } else {
      state.conversations.push(conversationCode);
    }
  }

  function toggleAngle(conversationCode, fullCode) {
    if (!state.angles[conversationCode]) {
      state.angles[conversationCode] = [];
    }

    const existingIndex = state.angles[conversationCode].indexOf(fullCode);

    if (existingIndex >= 0) {
      state.angles[conversationCode].splice(existingIndex, 1);
    } else {
      state.angles[conversationCode].push(fullCode);
    }
  }

  function renderCycleCards() {
    cycleCards.innerHTML = "";

    editorialSource.cycles.forEach((cycle) => {
      const isSelected = state.cycle === cycle.code;
      const button = document.createElement("button");
      button.type = "button";
      button.className = `editorial-choice-card ${isSelected ? "is-selected" : ""}`;
      button.dataset.cycle = cycle.code;
      button.setAttribute("aria-pressed", isSelected ? "true" : "false");

      button.innerHTML = `
        <span class="editorial-choice-card__eyebrow">Cycle</span>
        <span class="editorial-choice-card__title">${escapeHtml(cycle.label)}</span>
        <span class="editorial-choice-card__meta">${escapeHtml(cycle.description)}</span>
      `;

      cycleCards.appendChild(button);
    });
  }

  function renderConversationCards() {
    const cycle = getCurrentCycle();

    if (!cycle) {
      conversationStage.hidden = true;
      conversationCards.innerHTML = "";
      return;
    }

    conversationStage.hidden = false;
    conversationCards.innerHTML = "";

    cycle.conversations.forEach((conversation) => {
      const isSelected = state.conversations.includes(conversation.code);
      const button = document.createElement("button");
      button.type = "button";
      button.className = `editorial-choice-card ${isSelected ? "is-selected" : ""}`;
      button.dataset.conversation = conversation.code;
      button.setAttribute("aria-pressed", isSelected ? "true" : "false");

      button.innerHTML = `
        <span class="editorial-choice-card__eyebrow">Conversation</span>
        <span class="editorial-choice-card__title">${escapeHtml(conversation.title)}</span>
        <span class="editorial-choice-card__meta">${escapeHtml(conversation.description || conversation.tension)}</span>
      `;

      conversationCards.appendChild(button);
    });
  }

  function renderConversationDetails() {
    conversationDetails.innerHTML = "";

    const cycle = getCurrentCycle();
    if (!cycle) return;

    state.conversations.forEach((conversationCode) => {
      const conversation = getConversationByCode(cycle, conversationCode);
      if (!conversation) return;

      const selectedContextCode = state.contexts[conversationCode] || "";
      const selectedContext = getContextByCode(conversation, selectedContextCode);
      const angleOptions = selectedContext ? selectedContext.angles : [];
      const selectedAngles = state.angles[conversationCode] || [];

      const card = document.createElement("section");
      card.className = "editorial-config-card";
      card.dataset.conversationPanel = conversation.code;

      const contextButtons = conversation.contexts.map((context) => {
        const selected = selectedContextCode === context.code;
        return `
          <button
            type="button"
            class="editorial-chip ${selected ? "is-selected" : ""}"
            data-context="${escapeHtml(context.code)}"
            data-conversation="${escapeHtml(conversation.code)}"
            aria-pressed="${selected ? "true" : "false"}"
            title="${escapeHtml(context.description)}"
          >
            ${escapeHtml(context.label)}
          </button>
        `;
      }).join("");

      const angleButtons = angleOptions.length
        ? angleOptions.map((angle) => {
            const selected = selectedAngles.includes(angle.fullCode);
            const profilesText = formatProfiles(angle);
            return `
              <button
                type="button"
                class="editorial-chip editorial-chip--angle ${selected ? "is-selected" : ""}"
                data-angle="${escapeHtml(angle.fullCode)}"
                data-conversation="${escapeHtml(conversation.code)}"
                aria-pressed="${selected ? "true" : "false"}"
                title="${escapeHtml(angle.motherAngle)}"
              >
                ${escapeHtml(angle.question)}
                ${profilesText ? `<br><small>Profils concernés : ${escapeHtml(profilesText)}</small>` : ""}
              </button>
            `;
          }).join("")
        : `<p class="editorial-note">Choisissez d’abord un contexte pour afficher les angles.</p>`;

      card.innerHTML = `
        <div class="editorial-config-card__head">
          <h3>${escapeHtml(conversation.title)}</h3>
          <p>${escapeHtml(conversation.tension)}</p>
        </div>

        <div class="editorial-config-row">
          <span class="editorial-config-row__label">Contexte</span>
          <div class="editorial-chip-list">
            ${contextButtons}
          </div>
          ${selectedContext ? `<p class="editorial-note">${escapeHtml(selectedContext.description)}</p>` : ""}
        </div>

        <div class="editorial-config-row">
          <span class="editorial-config-row__label">Angle(s) concerné(s)</span>
          <div class="editorial-chip-list">
            ${angleButtons}
          </div>
        </div>
      `;

      conversationDetails.appendChild(card);
    });
  }

  function renderSummary() {
    const cycle = getCurrentCycle();
    const conversationCount = state.conversations.length;
    const angleCount = getSelectedAnglesCount();

    if (!cycle || conversationCount === 0) {
      summaryStage.hidden = true;
      summaryLead.textContent = "";
      summaryLines.innerHTML = "";
      return;
    }

    summaryStage.hidden = false;
    summaryLead.textContent = `${cycle.label} · ${conversationCount} ${pluralize(conversationCount, "conversation", "conversations")} · ${angleCount} ${pluralize(angleCount, "angle", "angles")}`;

    summaryLines.innerHTML = "";

    state.conversations.forEach((conversationCode) => {
      const conversation = getConversationByCode(cycle, conversationCode);
      if (!conversation) return;

      const selectedContext = getContextByCode(conversation, state.contexts[conversationCode] || "");
      const selectedAngles = (state.angles[conversationCode] || [])
        .map((fullCode) => getAngleByFullCode(selectedContext, fullCode))
        .filter(Boolean);

      let angleMeta = "Angle à préciser";
      if (selectedAngles.length === 1) {
        angleMeta = shortText(selectedAngles[0].question, 110);
      } else if (selectedAngles.length > 1) {
        angleMeta = `${selectedAngles.length} angles sélectionnés`;
      }

      const line = document.createElement("div");
      line.className = "editorial-summary-line";
      line.innerHTML = `
        <span class="editorial-summary-line__title">${escapeHtml(conversation.title)}</span>
        <span class="editorial-summary-line__meta">${escapeHtml(selectedContext ? selectedContext.label : "Contexte à préciser")} — ${escapeHtml(angleMeta)}</span>
      `;
      summaryLines.appendChild(line);
    });
  }

  function updateSelectionUI() {
    renderContactConfirmation();
    renderCycleCards();
    renderConversationCards();
    renderConversationDetails();
    renderSummary();
  }

  function validateSelection() {
    const cycle = getCurrentCycle();

    if (!cycle) {
      return "Choisissez d’abord un cycle.";
    }

    if (!state.conversations.length) {
      return "Sélectionnez au moins une conversation.";
    }

    for (const conversationCode of state.conversations) {
      const conversation = getConversationByCode(cycle, conversationCode);

      if (!conversation) {
        return "Une conversation sélectionnée est introuvable.";
      }

      const selectedContext = getContextByCode(conversation, state.contexts[conversationCode] || "");
      if (!selectedContext) {
        return `Choisissez un contexte pour la conversation « ${conversation.title} ».`;
      }

      if (!state.angles[conversationCode] || !state.angles[conversationCode].length) {
        return `Sélectionnez au moins un angle pour la conversation « ${conversation.title} ».`;
      }
    }

    return "";
  }

  function buildReadableSummary() {
    const cycle = getCurrentCycle();
    if (!cycle) return "";

    const conversationCount = state.conversations.length;
    const angleCount = getSelectedAnglesCount();

    const lines = [
      `Cycle : ${cycle.label}`,
      `${conversationCount} ${pluralize(conversationCount, "conversation", "conversations")} · ${angleCount} ${pluralize(angleCount, "angle", "angles")}`,
      `Intervenant : ${state.contact.firstName} ${state.contact.lastName} — ${state.contact.organisation}`
    ];

    state.conversations.forEach((conversationCode, index) => {
      const conversation = getConversationByCode(cycle, conversationCode);
      if (!conversation) return;

      const context = getContextByCode(conversation, state.contexts[conversationCode] || "");
      const selectedAngles = (state.angles[conversationCode] || [])
        .map((fullCode) => getAngleByFullCode(context, fullCode))
        .filter(Boolean);

      lines.push(`${index + 1}. ${conversation.title}`);
      lines.push(`Contexte : ${context ? context.label : "À préciser"}`);

      selectedAngles.forEach((angle) => {
        lines.push(`- ${angle.question}`);
      });
    });

    return lines.join("\n");
  }

  function applyPrefillFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const cycleParam = params.get("cycle");
    const conversationParam = params.get("conversation");

    if (cycleParam) {
      const normalizedCycleParam = cycleParam.trim().toLowerCase();

      const cycleMatch = editorialSource.cycles.find((cycle) => {
        return (
          cycle.code.toLowerCase() === normalizedCycleParam ||
          cycle.label.toLowerCase() === normalizedCycleParam ||
          getCycleShortLabel(cycle).toLowerCase() === normalizedCycleParam ||
          cycle.label.toLowerCase().includes(normalizedCycleParam)
        );
      });

      if (cycleMatch) {
        state.cycle = cycleMatch.code;
      }
    }

    if (state.cycle && conversationParam) {
      const cycle = getCurrentCycle();
      if (!cycle) return;

      const requested = conversationParam.split(",").map((item) => item.trim()).filter(Boolean);

      requested.forEach((item) => {
        const normalizedItem = item.toLowerCase();
        let foundConversation = null;

        if (/^c\d+$/i.test(item)) {
          foundConversation = cycle.conversations.find(
            (conversation) => conversation.code.toLowerCase() === normalizedItem
          ) || null;
        } else {
          foundConversation = cycle.conversations.find((conversation) => {
            return conversation.title.toLowerCase() === normalizedItem;
          }) || null;
        }

        if (foundConversation && !state.conversations.includes(foundConversation.code)) {
          state.conversations.push(foundConversation.code);
        }
      });
    }
  }

  async function submitContactStep() {
    const validationMessage = validateContactStep();
    if (validationMessage) {
      setContactFeedback(validationMessage);
      return;
    }

    setContactFeedback("");
    contactSubmitButton.disabled = true;
    contactSubmitButton.textContent = "Enregistrement en cours…";

    try {
      const response = await fetch(WORKER_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName: state.contact.firstName,
          lastName: state.contact.lastName,
          email: state.contact.email,
          organisation: state.contact.organisation,
          role: state.contact.activity,
          phone: state.contact.phone
        })
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        setContactFeedback(data.message || "Impossible d’enregistrer vos coordonnées pour le moment.");
        return;
      }

      state.contactValidated = true;
      saveContactState();
      showSelectionStage();
      updateSelectionUI();
      setContactFeedback("");
      selectionStage.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (error) {
      setContactFeedback("Impossible de joindre le service de confirmation pour le moment.");
      console.error(error);
    } finally {
      contactSubmitButton.disabled = false;
      contactSubmitButton.textContent = "Sélectionner les sujets sur lesquels vous souhaitez intervenir";
    }
  }

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    await submitContactStep();
  });

  cycleCards.addEventListener("click", (event) => {
    const button = event.target.closest("[data-cycle]");
    if (!button) return;

    const nextCycleCode = button.dataset.cycle;
    if (!nextCycleCode) return;

    if (state.cycle !== nextCycleCode) {
      state.cycle = nextCycleCode;
      resetSelectionState(true);
    }

    setSelectionFeedback("");
    updateSelectionUI();
  });

  conversationCards.addEventListener("click", (event) => {
    const button = event.target.closest("[data-conversation]");
    if (!button) return;

    const conversationCode = button.dataset.conversation;
    if (!conversationCode) return;

    toggleConversation(conversationCode);
    setSelectionFeedback("");
    updateSelectionUI();
  });

  conversationDetails.addEventListener("click", (event) => {
    const contextButton = event.target.closest("[data-context]");
    const angleButton = event.target.closest("[data-angle]");

    if (contextButton) {
      const conversationCode = contextButton.dataset.conversation;
      const contextCode = contextButton.dataset.context;

      if (conversationCode && contextCode) {
        state.contexts[conversationCode] = contextCode;
        state.angles[conversationCode] = [];
        setSelectionFeedback("");
        updateSelectionUI();
      }
      return;
    }

    if (angleButton) {
      const conversationCode = angleButton.dataset.conversation;
      const fullCode = angleButton.dataset.angle;

      if (conversationCode && fullCode) {
        toggleAngle(conversationCode, fullCode);
        setSelectionFeedback("");
        updateSelectionUI();
      }
    }
  });

  resetSelectionButton.addEventListener("click", () => {
    resetSelectionState();
    setSelectionFeedback("");
    updateSelectionUI();
  });

  selectionForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const validationMessage = validateSelection();
    if (validationMessage) {
      setSelectionFeedback(validationMessage);
      return;
    }

    const summary = buildReadableSummary();

    if (summary.length > CAL_FIELD_MAX_LENGTH) {
      setSelectionFeedback("La sélection est trop longue pour être transmise au calendrier. Réduisez le nombre de conversations ou d’angles sélectionnés.");
      return;
    }

    const url = new URL(CAL_BOOKING_URL);
    url.searchParams.set(CAL_FIELD_IDENTIFIER, summary);
    window.location.href = url.toString();
  });

  const restored = restoreContactState();
  applyPrefillFromUrl();

  if (restored) {
    showSelectionStage();
  } else {
    hideSelectionStage();
  }

  updateSelectionUI();
});
