document.addEventListener("DOMContentLoaded", () => {
  const WORKER_ENDPOINT = "https://enplateau-etape1.hocine-reguida.workers.dev";
  const CAL_BOOKING_URL = "https://cal.com/en-plateau/echange-editorial-15-min";
  const CAL_FIELD_IDENTIFIER = "selection_editoriale";
  const CAL_FIELD_MAX_LENGTH = 1000;
  const WIZARD_STORAGE_KEY = "enplateau_editorial_wizard_v2";

  const STEP_TITLES = {
    1: "Coordonnées professionnelles",
    2: "Cycle",
    3: "Conversation",
    4: "Contexte",
    5: "Angles",
    6: "Récapitulatif"
  };

  const rawEditorialSource = window.EN_PLATEAU_EDITORIAL_DATA;

  const contactForm = document.getElementById("editorial-contact-form");
  const organisationInput = document.getElementById("organisation-input");
  const activityInput = document.getElementById("activity-input");
  const firstNameInput = document.getElementById("first-name-input");
  const lastNameInput = document.getElementById("last-name-input");
  const emailInput = document.getElementById("email-input");
  const phoneInput = document.getElementById("phone-input");

  const progressLabel = document.getElementById("editorial-progress-label");
  const progressTitle = document.getElementById("editorial-progress-title");
  const progressBarFill = document.getElementById("editorial-progress-bar-fill");
  const progressSteps = document.getElementById("editorial-progress-steps");

  const contactConfirmation = document.getElementById("editorial-contact-confirmation");

  const cycleCards = document.getElementById("cycle-cards");
  const conversationCards = document.getElementById("conversation-cards");
  const contextSelectionPanels = document.getElementById("context-selection-panels");
  const angleSelectionPanels = document.getElementById("angle-selection-panels");

  const summaryLead = document.getElementById("editorial-selection-summary-lead");
  const summaryLines = document.getElementById("editorial-selection-summary-lines");

  const prevButton = document.getElementById("editorial-step-prev");
  const nextButton = document.getElementById("editorial-step-next");
  const submitButton = document.getElementById("editorial-step-submit");
  const resetButton = document.getElementById("reset-selection-button");

  const contactFeedback = document.getElementById("editorial-contact-feedback");
  const step2Feedback = document.getElementById("editorial-step-2-feedback");
  const step3Feedback = document.getElementById("editorial-step-3-feedback");
  const step4Feedback = document.getElementById("editorial-step-4-feedback");
  const step5Feedback = document.getElementById("editorial-step-5-feedback");
  const finalFeedback = document.getElementById("editorial-intake-feedback");

  const stepElements = Array.from(document.querySelectorAll(".editorial-step"));

  if (
    !rawEditorialSource ||
    !Array.isArray(rawEditorialSource.cycles) ||
    !contactForm ||
    !organisationInput ||
    !activityInput ||
    !firstNameInput ||
    !lastNameInput ||
    !emailInput ||
    !progressLabel ||
    !progressTitle ||
    !progressBarFill ||
    !progressSteps ||
    !contactConfirmation ||
    !cycleCards ||
    !conversationCards ||
    !contextSelectionPanels ||
    !angleSelectionPanels ||
    !summaryLead ||
    !summaryLines ||
    !prevButton ||
    !nextButton ||
    !submitButton ||
    !resetButton ||
    !contactFeedback ||
    !step2Feedback ||
    !step3Feedback ||
    !step4Feedback ||
    !step5Feedback ||
    !finalFeedback ||
    !stepElements.length
  ) {
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
    currentStep: 1,
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

  function shortText(text, max = 96) {
    if (!text) return "";
    if (text.length <= max) return text;
    return `${text.slice(0, max - 1).trim()}…`;
  }

  function pluralize(count, singular, plural) {
    return count > 1 ? plural : singular;
  }

  function setFeedback(node, message = "") {
    if (node) node.textContent = message;
  }

  function clearAllFeedbacks() {
    [
      contactFeedback,
      step2Feedback,
      step3Feedback,
      step4Feedback,
      step5Feedback,
      finalFeedback
    ].forEach((node) => setFeedback(node, ""));
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
    return profiles.join(" · ");
  }

  function updateContactStateFromInputs() {
    state.contact.organisation = organisationInput.value.trim();
    state.contact.activity = activityInput.value.trim();
    state.contact.firstName = firstNameInput.value.trim();
    state.contact.lastName = lastNameInput.value.trim();
    state.contact.email = emailInput.value.trim();
    state.contact.phone = phoneInput.value.trim();
  }

  function hydrateInputsFromState() {
    organisationInput.value = state.contact.organisation;
    activityInput.value = state.contact.activity;
    firstNameInput.value = state.contact.firstName;
    lastNameInput.value = state.contact.lastName;
    emailInput.value = state.contact.email;
    phoneInput.value = state.contact.phone;
  }

  function saveWizardState() {
    try {
      localStorage.setItem(WIZARD_STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.warn("Impossible d'enregistrer l'état du wizard.", error);
    }
  }

  function restoreWizardState() {
    try {
      const raw = localStorage.getItem(WIZARD_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return;

      state.currentStep = Number(parsed.currentStep) || 1;
      state.contact = {
        organisation: parsed.contact?.organisation || "",
        activity: parsed.contact?.activity || "",
        firstName: parsed.contact?.firstName || "",
        lastName: parsed.contact?.lastName || "",
        email: parsed.contact?.email || "",
        phone: parsed.contact?.phone || ""
      };
      state.contactValidated = Boolean(parsed.contactValidated);
      state.cycle = parsed.cycle || "";
      state.conversations = Array.isArray(parsed.conversations) ? parsed.conversations : [];
      state.contexts = parsed.contexts && typeof parsed.contexts === "object" ? parsed.contexts : {};
      state.angles = parsed.angles && typeof parsed.angles === "object" ? parsed.angles : {};

      hydrateInputsFromState();
    } catch (error) {
      console.warn("Impossible de restaurer l'état du wizard.", error);
    }
  }

  function resetWizardState() {
    state.currentStep = 1;
    state.contact = {
      organisation: "",
      activity: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    };
    state.contactValidated = false;
    state.cycle = "";
    state.conversations = [];
    state.contexts = {};
    state.angles = {};

    hydrateInputsFromState();
    contactForm.reset();
    localStorage.removeItem(WIZARD_STORAGE_KEY);
    clearAllFeedbacks();
    updateUI();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function getSelectedAnglesCount() {
    return state.conversations.reduce((sum, conversationCode) => {
      return sum + ((state.angles[conversationCode] || []).length);
    }, 0);
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

  function validateStep2() {
    return state.cycle ? "" : "Choisissez un cycle.";
  }

  function validateStep3() {
    return state.conversations.length ? "" : "Sélectionnez au moins une conversation.";
  }

  function validateStep4() {
    const cycle = getCurrentCycle();
    if (!cycle) return "Choisissez d’abord un cycle.";

    for (const conversationCode of state.conversations) {
      const conversation = getConversationByCode(cycle, conversationCode);
      const selectedContext = getContextByCode(conversation, state.contexts[conversationCode] || "");
      if (!selectedContext) {
        return `Choisissez un contexte pour « ${conversation?.title || conversationCode} ».`;
      }
    }

    return "";
  }

  function validateStep5() {
    const cycle = getCurrentCycle();
    if (!cycle) return "Choisissez d’abord un cycle.";

    for (const conversationCode of state.conversations) {
      const conversation = getConversationByCode(cycle, conversationCode);
      const context = getContextByCode(conversation, state.contexts[conversationCode] || "");

      if (!context) {
        return `Choisissez un contexte pour « ${conversation?.title || conversationCode} ».`;
      }

      if (!state.angles[conversationCode] || !state.angles[conversationCode].length) {
        return `Sélectionnez au moins un angle pour « ${conversation?.title || conversationCode} ».`;
      }
    }

    return "";
  }

  function getMaxAccessibleStep() {
    if (!state.contactValidated) return 1;
    if (!state.cycle) return 2;
    if (!state.conversations.length) return 3;

    const step4Validation = validateStep4();
    if (step4Validation) return 4;

    const step5Validation = validateStep5();
    if (step5Validation) return 5;

    return 6;
  }

  function clampCurrentStep() {
    const maxStep = getMaxAccessibleStep();
    if (state.currentStep > maxStep) {
      state.currentStep = maxStep;
    }
    if (state.currentStep < 1) {
      state.currentStep = 1;
    }
  }

  function renderContactConfirmation() {
    const shouldShow = state.contactValidated && state.currentStep > 1;

    if (!shouldShow) {
      contactConfirmation.hidden = true;
      contactConfirmation.innerHTML = "";
      return;
    }

    contactConfirmation.hidden = false;
    contactConfirmation.innerHTML = `
      <strong>Demande confirmée :</strong> ${escapeHtml(state.contact.firstName)} ${escapeHtml(state.contact.lastName)}
      <span> · ${escapeHtml(state.contact.organisation)} · ${escapeHtml(state.contact.activity)}</span>
    `;
  }

  function renderProgress() {
    progressLabel.textContent = `Étape ${state.currentStep} sur 6`;
    progressTitle.textContent = STEP_TITLES[state.currentStep] || "";
    progressBarFill.style.width = `${(state.currentStep / 6) * 100}%`;

    const items = Array.from(progressSteps.querySelectorAll("li"));
    items.forEach((item, index) => {
      const stepNumber = index + 1;
      item.classList.remove("is-current", "is-complete");

      if (stepNumber < state.currentStep) {
        item.classList.add("is-complete");
      } else if (stepNumber === state.currentStep) {
        item.classList.add("is-current");
      }
    });
  }

  function renderStepsVisibility() {
    stepElements.forEach((stepElement) => {
      const stepNumber = Number(stepElement.dataset.step);
      const isActive = stepNumber === state.currentStep;

      stepElement.hidden = !isActive;
      stepElement.classList.toggle("is-active", isActive);
    });
  }

  function renderFooterButtons() {
    prevButton.disabled = state.currentStep === 1;

    if (state.currentStep === 6) {
      nextButton.hidden = true;
      submitButton.hidden = false;
    } else {
      nextButton.hidden = false;
      submitButton.hidden = true;
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
    conversationCards.innerHTML = "";

    if (!cycle) return;

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

  function renderContextSelectionPanels() {
    const cycle = getCurrentCycle();
    contextSelectionPanels.innerHTML = "";

    if (!cycle || !state.conversations.length) {
      contextSelectionPanels.innerHTML = `<p class="editorial-note">Sélectionnez d’abord une ou plusieurs conversations.</p>`;
      return;
    }

    state.conversations.forEach((conversationCode) => {
      const conversation = getConversationByCode(cycle, conversationCode);
      if (!conversation) return;

      const selectedContextCode = state.contexts[conversationCode] || "";

      const contextButtons = conversation.contexts.map((context) => {
        const isSelected = selectedContextCode === context.code;
        return `
          <button
            type="button"
            class="editorial-chip ${isSelected ? "is-selected" : ""}"
            data-context="${escapeHtml(context.code)}"
            data-conversation="${escapeHtml(conversation.code)}"
            aria-pressed="${isSelected ? "true" : "false"}"
            title="${escapeHtml(context.description)}"
          >
            ${escapeHtml(context.label)}
          </button>
        `;
      }).join("");

      const selectedContext = getContextByCode(conversation, selectedContextCode);

      const card = document.createElement("section");
      card.className = "editorial-config-card";
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
      `;

      contextSelectionPanels.appendChild(card);
    });
  }

  function renderAngleSelectionPanels() {
    const cycle = getCurrentCycle();
    angleSelectionPanels.innerHTML = "";

    if (!cycle || !state.conversations.length) {
      angleSelectionPanels.innerHTML = `<p class="editorial-note">Sélectionnez d’abord une ou plusieurs conversations.</p>`;
      return;
    }

    state.conversations.forEach((conversationCode) => {
      const conversation = getConversationByCode(cycle, conversationCode);
      const selectedContext = getContextByCode(conversation, state.contexts[conversationCode] || "");

      if (!conversation) return;

      const card = document.createElement("section");
      card.className = "editorial-config-card";

      if (!selectedContext) {
        card.innerHTML = `
          <div class="editorial-config-card__head">
            <h3>${escapeHtml(conversation.title)}</h3>
            <p>${escapeHtml(conversation.tension)}</p>
          </div>
          <p class="editorial-note">Choisissez d’abord un contexte à l’étape précédente.</p>
        `;
        angleSelectionPanels.appendChild(card);
        return;
      }

      const selectedAngles = state.angles[conversationCode] || [];

      const angleButtons = selectedContext.angles.map((angle) => {
        const isSelected = selectedAngles.includes(angle.fullCode);
        const profilesText = formatProfiles(angle);

        return `
          <button
            type="button"
            class="editorial-chip editorial-chip--angle ${isSelected ? "is-selected" : ""}"
            data-angle="${escapeHtml(angle.fullCode)}"
            data-conversation="${escapeHtml(conversation.code)}"
            aria-pressed="${isSelected ? "true" : "false"}"
            title="${escapeHtml(angle.motherAngle)}"
          >
            ${escapeHtml(angle.question)}
            ${profilesText ? `<small>Profils concernés : ${escapeHtml(profilesText)}</small>` : ""}
          </button>
        `;
      }).join("");

      card.innerHTML = `
        <div class="editorial-config-card__head">
          <h3>${escapeHtml(conversation.title)}</h3>
          <p>${escapeHtml(selectedContext.label)} — ${escapeHtml(selectedContext.description)}</p>
        </div>

        <div class="editorial-config-row">
          <span class="editorial-config-row__label">Angle(s) concerné(s)</span>
          <div class="editorial-chip-list">
            ${angleButtons}
          </div>
        </div>
      `;

      angleSelectionPanels.appendChild(card);
    });
  }

  function renderSummary() {
    const cycle = getCurrentCycle();
    const conversationCount = state.conversations.length;
    const angleCount = getSelectedAnglesCount();

    if (!cycle || !conversationCount) {
      summaryLead.textContent = "";
      summaryLines.innerHTML = "";
      return;
    }

    summaryLead.textContent = `${cycle.label} · ${conversationCount} ${pluralize(conversationCount, "conversation", "conversations")} · ${angleCount} ${pluralize(angleCount, "angle", "angles")}`;

    const lines = [];

    lines.push(`
      <div class="editorial-summary-line">
        <span class="editorial-summary-line__title">${escapeHtml(state.contact.firstName)} ${escapeHtml(state.contact.lastName)}</span>
        <span class="editorial-summary-line__meta">${escapeHtml(state.contact.organisation)} — ${escapeHtml(state.contact.activity)}</span>
      </div>
    `);

    state.conversations.forEach((conversationCode) => {
      const conversation = getConversationByCode(cycle, conversationCode);
      if (!conversation) return;

      const selectedContext = getContextByCode(conversation, state.contexts[conversationCode] || "");
      const selectedAngles = (state.angles[conversationCode] || [])
        .map((fullCode) => getAngleByFullCode(selectedContext, fullCode))
        .filter(Boolean);

      const anglesHtml = selectedAngles.length
        ? selectedAngles.map((angle) => {
            return `<div class="editorial-summary-line__meta">• ${escapeHtml(angle.question)}</div>`;
          }).join("")
        : `<div class="editorial-summary-line__meta">Aucun angle sélectionné</div>`;

      lines.push(`
        <div class="editorial-summary-line">
          <span class="editorial-summary-line__title">${escapeHtml(conversation.title)}</span>
          <span class="editorial-summary-line__meta">${escapeHtml(selectedContext ? selectedContext.label : "Contexte à préciser")}</span>
          ${anglesHtml}
        </div>
      `);
    });

    summaryLines.innerHTML = lines.join("");
  }

  function updateUI() {
    clampCurrentStep();
    renderContactConfirmation();
    renderProgress();
    renderStepsVisibility();
    renderFooterButtons();
    renderCycleCards();
    renderConversationCards();
    renderContextSelectionPanels();
    renderAngleSelectionPanels();
    renderSummary();
    saveWizardState();
  }

  function buildReadableSummary() {
    const cycle = getCurrentCycle();
    if (!cycle) return "";

    const conversationCount = state.conversations.length;
    const angleCount = getSelectedAnglesCount();

    const lines = [
      `Cycle : ${cycle.label}`,
      `${conversationCount} ${pluralize(conversationCount, "conversation", "conversations")} · ${angleCount} ${pluralize(angleCount, "angle", "angles")}`,
      `Intervenant : ${state.contact.firstName} ${state.contact.lastName} — ${state.contact.organisation}`,
      `Fonction / activité : ${state.contact.activity}`,
      `Email : ${state.contact.email}`,
      state.contact.phone ? `Téléphone : ${state.contact.phone}` : ""
    ].filter(Boolean);

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

    if (cycleParam && !state.cycle) {
      const normalizedCycleParam = cycleParam.trim().toLowerCase();

      const cycleMatch = editorialSource.cycles.find((cycle) => {
        return (
          cycle.code.toLowerCase() === normalizedCycleParam ||
          cycle.label.toLowerCase() === normalizedCycleParam ||
          cycle.label.toLowerCase().includes(normalizedCycleParam)
        );
      });

      if (cycleMatch) {
        state.cycle = cycleMatch.code;
      }
    }

    if (state.cycle && conversationParam && !state.conversations.length) {
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
          foundConversation = cycle.conversations.find(
            (conversation) => conversation.title.toLowerCase() === normalizedItem
          ) || null;
        }

        if (foundConversation && !state.conversations.includes(foundConversation.code)) {
          state.conversations.push(foundConversation.code);
        }
      });
    }
  }

  function markContactAsDirty() {
    if (state.contactValidated) {
      state.contactValidated = false;
      saveWizardState();
    }
  }

  [
    organisationInput,
    activityInput,
    firstNameInput,
    lastNameInput,
    emailInput,
    phoneInput
  ].forEach((input) => {
    input.addEventListener("input", markContactAsDirty);
  });

  async function submitContactStep() {
    const validationMessage = validateContactStep();
    if (validationMessage) {
      setFeedback(contactFeedback, validationMessage);
      return false;
    }

    setFeedback(contactFeedback, "");
    nextButton.disabled = true;
    nextButton.textContent = "Enregistrement…";

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
        setFeedback(contactFeedback, data.message || "Impossible d’enregistrer vos coordonnées pour le moment.");
        return false;
      }

      state.contactValidated = true;
      setFeedback(contactFeedback, "");
      return true;
    } catch (error) {
      console.error(error);
      setFeedback(contactFeedback, "Impossible de joindre le service de confirmation pour le moment.");
      return false;
    } finally {
      nextButton.disabled = false;
      nextButton.textContent = "Continuer";
      saveWizardState();
    }
  }

  async function goToNextStep() {
    clearAllFeedbacks();

    if (state.currentStep === 1) {
      const ok = await submitContactStep();
      if (!ok) return;
      state.currentStep = 2;
      updateUI();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (state.currentStep === 2) {
      const message = validateStep2();
      if (message) {
        setFeedback(step2Feedback, message);
        return;
      }
    }

    if (state.currentStep === 3) {
      const message = validateStep3();
      if (message) {
        setFeedback(step3Feedback, message);
        return;
      }
    }

    if (state.currentStep === 4) {
      const message = validateStep4();
      if (message) {
        setFeedback(step4Feedback, message);
        return;
      }
    }

    if (state.currentStep === 5) {
      const message = validateStep5();
      if (message) {
        setFeedback(step5Feedback, message);
        return;
      }
    }

    if (state.currentStep < 6) {
      state.currentStep += 1;
      updateUI();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function goToPreviousStep() {
    clearAllFeedbacks();
    if (state.currentStep > 1) {
      state.currentStep -= 1;
      updateUI();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function changeCycle(nextCycleCode) {
    if (state.cycle !== nextCycleCode) {
      state.cycle = nextCycleCode;
      state.conversations = [];
      state.contexts = {};
      state.angles = {};
    }
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

  function setContextForConversation(conversationCode, contextCode) {
    state.contexts[conversationCode] = contextCode;
    state.angles[conversationCode] = [];
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

  async function submitFinalSelection() {
    clearAllFeedbacks();

    const step5Message = validateStep5();
    if (step5Message) {
      setFeedback(finalFeedback, step5Message);
      return;
    }

    const summary = buildReadableSummary();

    if (summary.length > CAL_FIELD_MAX_LENGTH) {
      setFeedback(finalFeedback, "La sélection est trop longue pour être transmise au calendrier. Réduisez le nombre de conversations ou d’angles sélectionnés.");
      return;
    }

    const url = new URL(CAL_BOOKING_URL);
    url.searchParams.set(CAL_FIELD_IDENTIFIER, summary);
    window.location.href = url.toString();
  }

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (state.currentStep !== 1) return;
    await goToNextStep();
  });

  cycleCards.addEventListener("click", (event) => {
    const button = event.target.closest("[data-cycle]");
    if (!button) return;

    changeCycle(button.dataset.cycle || "");
    clearAllFeedbacks();
    updateUI();
  });

  conversationCards.addEventListener("click", (event) => {
    const button = event.target.closest("[data-conversation]");
    if (!button) return;

    toggleConversation(button.dataset.conversation || "");
    clearAllFeedbacks();
    updateUI();
  });

  contextSelectionPanels.addEventListener("click", (event) => {
    const button = event.target.closest("[data-context]");
    if (!button) return;

    const conversationCode = button.dataset.conversation || "";
    const contextCode = button.dataset.context || "";
    if (!conversationCode || !contextCode) return;

    setContextForConversation(conversationCode, contextCode);
    clearAllFeedbacks();
    updateUI();
  });

  angleSelectionPanels.addEventListener("click", (event) => {
    const button = event.target.closest("[data-angle]");
    if (!button) return;

    const conversationCode = button.dataset.conversation || "";
    const fullCode = button.dataset.angle || "";
    if (!conversationCode || !fullCode) return;

    toggleAngle(conversationCode, fullCode);
    clearAllFeedbacks();
    updateUI();
  });

  prevButton.addEventListener("click", goToPreviousStep);
  nextButton.addEventListener("click", async () => {
    await goToNextStep();
  });
  submitButton.addEventListener("click", submitFinalSelection);

  resetButton.addEventListener("click", () => {
    resetWizardState();
  });

  restoreWizardState();
  applyPrefillFromUrl();
  clampCurrentStep();
  updateUI();
});
