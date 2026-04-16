document.addEventListener("DOMContentLoaded", () => {
  const CAL_BOOKING_URL = "https://cal.com/en-plateau/echange-editorial-15-min";
  const CAL_FIELD_IDENTIFIER = "selection_editoriale";
  const CAL_FIELD_MAX_LENGTH = 1000;

  const editorialData = {
    "Logement - production & transformation immobilière": {
      "À quel moment une opération ne tient plus ?": {
        "Zone tendue": [
          "À quel moment le prix de sortie dépasse-t-il ce que le marché solvable peut encore absorber ?",
          "À partir de quel niveau de coût la qualité, le programme ou l’équilibre global commencent-ils à être sacrifiés ?",
          "Pourquoi maintenir une opération malgré un équilibre déjà dégradé, dès lors que la tension foncière continue de pousser à produire ?",
          "À quel moment même un marché tendu cesse-t-il de suivre au prix attendu ?"
        ],
        "Territoire en croissance": [
          "À quel moment le projet est-il trop en avance sur la solvabilité réelle de son marché ?",
          "Quels coûts apparaissent parce que le projet a été mal calibré par rapport à la maturité du territoire ?",
          "Pourquoi lancer ou maintenir une opération avant que le territoire soit réellement prêt à l’absorber ?",
          "À quel moment la demande n’est-elle pas encore au rendez-vous malgré un récit de croissance ?"
        ],
        "Territoire en reconversion": [
          "À quel moment le projet dépend-il trop d’un soutien externe pour rester finançable ?",
          "Quels coûts révèlent que le projet n’a pas de base économique suffisamment solide ?",
          "Pourquoi maintenir une opération malgré une valeur économique insuffisante, dans l’espoir de recréer une dynamique ?",
          "À quel moment l’offre ne trouve-t-elle pas preneur malgré les ajustements de positionnement ?"
        ]
      },

      "Jusqu’où un territoire peut-il encore absorber de la construction ?": {
        "Zone tendue": [
          "À quel moment la construction devient-elle politiquement ou socialement inacceptable malgré la pression à construire ?",
          "À quel moment densifier davantage bute-t-il sur des contraintes de site, de réseaux ou de voisinage que le projet ne peut plus absorber ?",
          "À quel moment le coût cumulé du foncier, du carbone, de la réglementation et des compensations change-t-il radicalement l’équation ?",
          "Jusqu’où peut-on interpréter les règles pour continuer à construire dans un territoire déjà saturé ?"
        ],
        "Territoire en croissance": [
          "À quel moment la croissance du bâti dépasse-t-elle ce que le territoire est prêt à accepter ou à organiser ?",
          "Quelles contraintes techniques apparaissent quand le développement va plus vite que les capacités réelles du site ou des infrastructures ?",
          "À quel moment les exigences environnementales, foncières ou de sobriété obligent-elles à recalibrer l’ambition initiale ?",
          "À quel moment le cadre réglementaire ne suit-il plus le rythme des projets et oblige-t-il à arbitrer autrement ?"
        ],
        "Territoire en reconversion": [
          "À quel moment construire redevient-il acceptable localement - et à quelles conditions symboliques, sociales ou politiques ?",
          "Quelles limites de site, de pollution, de démolition ou de remise à niveau rendent la construction plus complexe qu’attendu ?",
          "À quel moment la charge environnementale ou réglementaire d’un foncier dégradé devient-elle plus lourde que son potentiel de redéploiement ?",
          "Jusqu’où les règles peuvent-elles être mobilisées pour rendre possible un redéploiement qui, sans cela, ne tiendrait pas ?"
        ]
      },

      "Transformer ou reconstruire ?": {
        "Zone tendue": [
          "À quel moment la transformation devient-elle techniquement incohérente malgré la rareté du foncier ?",
          "Quand la complexité de transformation fait-elle exploser les coûts au point de remettre en cause l’arbitrage initial ?",
          "À quel moment reconstruire redevient-il plus rationnel que transformer, même dans un contexte de forte tension foncière ?",
          "Comment sécuriser juridiquement et assurantiellement des opérations de transformation déjà fragiles techniquement ?"
        ],
        "Territoire en croissance": [
          "À quel moment reconstruire devient-il techniquement plus rationnel que transformer ?",
          "Quels écarts de coût orientent la décision entre transformation et reconstruction ?",
          "Comment arbitrer entre vitesse, coût et valorisation quand les deux options restent ouvertes ?",
          "Comment sécuriser une décision de transformation ou de reconstruction quand le territoire accélère mais n’a pas encore stabilisé ses repères ?"
        ],
        "Territoire en reconversion": [
          "Quand un actif ne peut-il plus être transformé sans fiction technique ?",
          "Quels coûts révèlent qu’on est face à une impasse économique plus qu’à une difficulté de transformation ?",
          "À quel moment la reconstruction n’est-elle plus rentable, sans pour autant rendre la transformation crédible ?",
          "Comment sécuriser des décisions prises sur des actifs dégradés ou à modèle instable ?"
        ]
      },

      "Qui décide réellement - et qui assume les risques ?": {
        "Zone tendue": [
          "Qui décide réellement de ce qui peut se faire quand le foncier est rare, les oppositions nombreuses et les arbitrages serrés ?",
          "À quel moment le financement décide-t-il à la place du projet en imposant son propre seuil de sécurité ?",
          "Qui assume réellement le risque de montage quand la pression à construire pousse chacun à transférer sa part d’exposition ?",
          "Qui sécurise des décisions fragiles quand le rapport entre pouvoir d’agir et risque assumé devient déséquilibré ?"
        ],
        "Territoire en croissance": [
          "Qui décide réellement du rythme, de la forme et du séquencement du développement ?",
          "À quel moment la structuration financière fixe-t-elle le rythme réel du projet plus que son ambition initiale ?",
          "Qui arbitre réellement quand les rôles sont encore mouvants et le développement plus rapide que sa structuration ?",
          "Comment encadrer des responsabilités encore floues dans un territoire qui accélère plus vite que sa gouvernance ?"
        ],
        "Territoire en reconversion": [
          "Qui impulse réellement les projets quand le marché n’est pas assez moteur à lui seul ?",
          "À quel moment un projet ne tient-il plus que par l’ingénierie financière qui le soutient ?",
          "Qui s’engage réellement malgré l’incertitude quand aucun acteur n’a seul intérêt à porter le projet ?",
          "Comment sécuriser des décisions prises sans modèle stabilisé ni partage clair du risque ?"
        ]
      }
    },

    "Industrie - fabrication & transformation": {
      "À quel moment produire ne tient plus ?": {
        "Développement sous tension": [
          "À partir de quand la croissance détruit-elle plus de marge qu’elle n’en crée ?",
          "Quels arbitrages de cadence, de stock ou de qualité fragilisent l’outil en voulant accélérer ?",
          "À partir de quand un retard d’automatisation, de data ou d’outillage empêche-t-il de changer d’échelle ?",
          "À quel moment l’expansion cesse-t-elle d’être finançable dans ses conditions actuelles ?"
        ],
        "Adaptation sous contrainte": [
          "À partir de quand l’activité paraît-elle encore tenir alors que son équation économique s’est déjà dégradée ?",
          "Quels arbitrages de coûts sauvent temporairement la production mais abîment sa capacité à tenir ?",
          "À partir de quand le maintien d’un outil ou de systèmes trop datés devient-il un facteur direct de décrochage ?",
          "À quel moment un dossier n’est-il plus un sujet d’ajustement mais un sujet de transformation plus lourde ?"
        ],
        "Réinvention sous crise": [
          "À partir de quand le problème n’est-il plus le niveau d’activité, mais le modèle lui-même ?",
          "Quels arbitrages permettent encore de préserver un noyau productif crédible avant recentrage ou cession ?",
          "À partir de quand la dette technologique empêche-t-elle toute remise à niveau crédible ?",
          "À quel moment le cadre actuel n’est-il plus transformable sans redéfinir le périmètre ?"
        ]
      },

      "Où se situent les dépendances qui font basculer la production ?": {
        "Développement sous tension": [
          "Quelle dépendance freine d’abord l’accélération : fournisseurs, énergie, composants ou compétences ?",
          "Quels déséquilibres de chaîne de valeur la croissance révèle-t-elle trop tard ?",
          "Quand les règles du commerce international ralentissent-elles plus qu’elles ne sécurisent la montée en capacité ?",
          "À partir de quand une dépendance logicielle, machine ou système devient-elle critique pour produire ?"
        ],
        "Adaptation sous contrainte": [
          "Quelle dépendance dégrade le plus vite la marge ou la fiabilité d’exécution ?",
          "Qu’est-ce que la lecture de filière montre que l’entreprise sous-estime encore au moment d’arbitrer ?",
          "Quand normes, droits, contrôles ou contraintes import-export aggravent-ils une pression déjà forte ?",
          "À quel moment l’obsolescence d’un système, d’un ERP/MES ou d’un parc machine devient-elle un risque structurel ?"
        ],
        "Réinvention sous crise": [
          "Quelle dépendance enferme l’activité dans une architecture trop vulnérable pour être maintenue telle quelle ?",
          "À quel moment la chaîne de valeur montre-t-elle que l’entreprise a perdu sa place plutôt que seulement sa marge ?",
          "Quand le cadre juridique devient-il un verrou supplémentaire dans une filière déjà fragilisée ?",
          "Quelle dépendance technologique empêche de redéployer, relocaliser ou recomposer l’activité ?"
        ]
      },

      "Qu’est-ce qui transforme réellement un outil productif ?": {
        "Développement sous tension": [
          "Qu’est-ce qui change réellement la capacité productive - et qu’est-ce qui modernise seulement le discours ?",
          "Faut-il d’abord automatiser, recruter, standardiser ou replanifier pour absorber la hausse de volume ?",
          "À quel moment qualité, sécurité, conformité ou formation deviennent-elles le vrai verrou de la montée en charge ?",
          "À partir de quand un projet d’industrialisation devient-il trop lourd, trop lent ou trop risqué pour suivre le marché ?"
        ],
        "Adaptation sous contrainte": [
          "Qu’est-ce qui améliore vraiment la productivité quand l’enjeu n’est pas d’innover, mais de tenir ?",
          "Quel arbitrage entre organisation, cadence et flux restaure la performance sans casser l’exécution ?",
          "Quand la tentation de réduire l’exigence sur qualité, sécurité ou compétences devient-elle un mauvais arbitrage structurel ?",
          "À partir de quand un investissement de transformation ne se justifie-t-il plus dans un modèle trop tendu ?"
        ],
        "Réinvention sous crise": [
          "Qu’est-ce qui transforme encore un outil fragilisé - et qu’est-ce qui n’est qu’un habillage d’un modèle déjà usé ?",
          "Quel arbitrage permet de conserver un noyau industriel crédible quand tout ne peut plus être modernisé ?",
          "Quand les exigences de conformité, de sécurité ou de compétences décident-elles de ce qu’il faut conserver, réoutiller ou abandonner ?",
          "À partir de quand il ne faut plus parler de modernisation de l’outil, mais de redéfinition de l’outil à garder ?"
        ]
      },

      "À partir de quand faut-il redessiner le modèle ?": {
        "Développement sous tension": [
          "À partir de quand les tensions de croissance révèlent-elles un modèle devenu trop étroit pour l’échelle visée ?",
          "À partir de quand un saut technologique n’est-il plus un levier parmi d’autres, mais la condition pour changer de catégorie ?",
          "Quand les contrats, l’organisation ou la gouvernance freinent-ils le passage à une autre échelle ?",
          "Qu’est-ce qui rend crédible une recomposition du périmètre pour continuer à croître proprement ?"
        ],
        "Adaptation sous contrainte": [
          "À partir de quand l’ajustement des coûts ne suffit-il plus parce que la place dans la chaîne de valeur décroche ?",
          "Quand le retard technologique cesse-t-il d’être un handicap réparable et devient-il un problème de modèle ?",
          "À quel moment les rigidités contractuelles ou organisationnelles empêchent-elles l’adaptation nécessaire ?",
          "Qu’est-ce qui rend crédible un redéploiement partiel sans envoyer le signal d’un décrochage plus profond ?"
        ],
        "Réinvention sous crise": [
          "À partir de quand faut-il cesser de sauver l’existant et redessiner l’activité ?",
          "À quel moment la rupture technologique impose-t-elle de changer de produits, de clients ou de place dans la chaîne ?",
          "Quand les cadres existants empêchent-ils de céder, fermer partiellement, recomposer ou nouer un partenariat industriel ?",
          "Qu’est-ce qui distingue une vraie stratégie de réinvention d’un simple report de décision ?"
        ]
      }
    }
  };

  const form = document.getElementById("editorial-intake-form");
  const cycleCards = document.getElementById("cycle-cards");
  const conversationStage = document.getElementById("conversation-stage");
  const conversationCards = document.getElementById("conversation-cards");
  const conversationDetails = document.getElementById("conversation-details");
  const summaryStage = document.getElementById("summary-stage");
  const summaryLead = document.getElementById("editorial-selection-summary-lead");
  const summaryLines = document.getElementById("editorial-selection-summary-lines");
  const resetSelectionButton = document.getElementById("reset-selection-button");
  const feedback = document.getElementById("editorial-intake-feedback");

  if (
    !form ||
    !cycleCards ||
    !conversationStage ||
    !conversationCards ||
    !conversationDetails ||
    !summaryStage ||
    !summaryLead ||
    !summaryLines ||
    !resetSelectionButton ||
    !feedback
  ) {
    return;
  }

  const state = {
    cycle: "",
    conversations: [],
    contexts: {},
    angles: {}
  };

  function setFeedback(message = "") {
    feedback.textContent = message;
  }

  function getCycleShortLabel(cycle) {
    if (cycle.startsWith("Logement")) return "Logement";
    if (cycle.startsWith("Industrie")) return "Industrie";
    return cycle;
  }

  function shortText(text, max = 96) {
    if (!text) return "";
    if (text.length <= max) return text;
    return `${text.slice(0, max - 1).trim()}…`;
  }

  function getSelectedAnglesCount() {
    return state.conversations.reduce((sum, conversation) => {
      return sum + ((state.angles[conversation] || []).length);
    }, 0);
  }

  function resetState(keepCycle = false) {
    const preservedCycle = keepCycle ? state.cycle : "";
    state.cycle = preservedCycle;
    state.conversations = [];
    state.contexts = {};
    state.angles = {};
  }

  function renderCycleCards() {
    cycleCards.innerHTML = "";

    Object.keys(editorialData).forEach((cycle) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `editorial-choice-card ${state.cycle === cycle ? "is-selected" : ""}`;
      button.dataset.cycle = cycle;
      button.setAttribute("aria-pressed", state.cycle === cycle ? "true" : "false");

      button.innerHTML = `
        <span class="editorial-choice-card__eyebrow">Cycle</span>
        <span class="editorial-choice-card__title">${getCycleShortLabel(cycle)}</span>
        <span class="editorial-choice-card__meta">${cycle.replace(/^Logement\s-\s|^Industrie\s-\s/, "")}</span>
      `;

      cycleCards.appendChild(button);
    });
  }

  function renderConversationCards() {
    if (!state.cycle) {
      conversationStage.hidden = true;
      conversationCards.innerHTML = "";
      return;
    }

    conversationStage.hidden = false;
    conversationCards.innerHTML = "";

    Object.keys(editorialData[state.cycle]).forEach((conversation) => {
      const isSelected = state.conversations.includes(conversation);
      const button = document.createElement("button");
      button.type = "button";
      button.className = `editorial-choice-card ${isSelected ? "is-selected" : ""}`;
      button.dataset.conversation = conversation;
      button.setAttribute("aria-pressed", isSelected ? "true" : "false");

      button.innerHTML = `
        <span class="editorial-choice-card__eyebrow">Conversation</span>
        <span class="editorial-choice-card__title">${conversation}</span>
        <span class="editorial-choice-card__meta">${isSelected ? "Sélectionnée" : "Cliquer pour sélectionner"}</span>
      `;

      conversationCards.appendChild(button);
    });
  }

  function renderConversationDetails() {
    conversationDetails.innerHTML = "";

    state.conversations.forEach((conversation) => {
      const contextOptions = Object.keys(editorialData[state.cycle][conversation]);
      const selectedContext = state.contexts[conversation] || "";
      const angleOptions = selectedContext ? editorialData[state.cycle][conversation][selectedContext] : [];
      const selectedAngles = state.angles[conversation] || [];

      const card = document.createElement("section");
      card.className = "editorial-config-card";
      card.dataset.conversationPanel = conversation;

      const contextButtons = contextOptions.map((context) => {
        const selected = selectedContext === context;
        return `
          <button
            type="button"
            class="editorial-chip ${selected ? "is-selected" : ""}"
            data-context="${context}"
            data-conversation="${conversation}"
            aria-pressed="${selected ? "true" : "false"}"
          >
            ${context}
          </button>
        `;
      }).join("");

      const angleButtons = angleOptions.length
        ? angleOptions.map((angle) => {
            const selected = selectedAngles.includes(angle);
            return `
              <button
                type="button"
                class="editorial-chip editorial-chip--angle ${selected ? "is-selected" : ""}"
                data-angle="${angle}"
                data-conversation="${conversation}"
                aria-pressed="${selected ? "true" : "false"}"
              >
                ${angle}
              </button>
            `;
          }).join("")
        : `<p class="editorial-note">Choisissez d’abord un contexte pour afficher les angles.</p>`;

      card.innerHTML = `
        <div class="editorial-config-card__head">
          <h3>${conversation}</h3>
          <p>Précisez le contexte le plus pertinent, puis sélectionnez un ou plusieurs angles.</p>
        </div>

        <div class="editorial-config-row">
          <span class="editorial-config-row__label">Contexte</span>
          <div class="editorial-chip-list">
            ${contextButtons}
          </div>
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
    const conversationCount = state.conversations.length;
    const angleCount = getSelectedAnglesCount();

    if (!state.cycle || conversationCount === 0) {
      summaryStage.hidden = true;
      summaryLead.textContent = "";
      summaryLines.innerHTML = "";
      return;
    }

    summaryStage.hidden = false;
    summaryLead.textContent = `${getCycleShortLabel(state.cycle)} · ${conversationCount} conversation${conversationCount > 1 ? "s" : ""} · ${angleCount} angle${angleCount > 1 ? "s" : ""}`;

    summaryLines.innerHTML = "";

    state.conversations.forEach((conversation) => {
      const selectedContext = state.contexts[conversation] || "Contexte à préciser";
      const selectedAngles = state.angles[conversation] || [];

      let angleMeta = "Angle à préciser";
      if (selectedAngles.length === 1) {
        angleMeta = shortText(selectedAngles[0], 110);
      } else if (selectedAngles.length > 1) {
        angleMeta = `${selectedAngles.length} angles sélectionnés`;
      }

      const line = document.createElement("div");
      line.className = "editorial-summary-line";
      line.innerHTML = `
        <span class="editorial-summary-line__title">${conversation}</span>
        <span class="editorial-summary-line__meta">${selectedContext} — ${angleMeta}</span>
      `;
      summaryLines.appendChild(line);
    });
  }

  function updateUI() {
    renderCycleCards();
    renderConversationCards();
    renderConversationDetails();
    renderSummary();
  }

  function toggleConversation(conversation) {
    const index = state.conversations.indexOf(conversation);

    if (index >= 0) {
      state.conversations.splice(index, 1);
      delete state.contexts[conversation];
      delete state.angles[conversation];
    } else {
      state.conversations.push(conversation);
    }
  }

  function toggleAngle(conversation, angle) {
    if (!state.angles[conversation]) {
      state.angles[conversation] = [];
    }

    const existingIndex = state.angles[conversation].indexOf(angle);

    if (existingIndex >= 0) {
      state.angles[conversation].splice(existingIndex, 1);
    } else {
      state.angles[conversation].push(angle);
    }
  }

  function validateSelection() {
    if (!state.cycle) {
      return "Choisissez d’abord un cycle.";
    }

    if (!state.conversations.length) {
      return "Sélectionnez au moins une conversation.";
    }

    for (const conversation of state.conversations) {
      if (!state.contexts[conversation]) {
        return `Choisissez un contexte pour la conversation « ${conversation} ».`;
      }

      if (!state.angles[conversation] || !state.angles[conversation].length) {
        return `Sélectionnez au moins un angle pour la conversation « ${conversation} ».`;
      }
    }

    return "";
  }

  function buildReadableSummary() {
    const cycleLabel = getCycleShortLabel(state.cycle);
    const conversationCount = state.conversations.length;
    const angleCount = getSelectedAnglesCount();

    const lines = [
      `Cycle : ${cycleLabel}`,
      `${conversationCount} conversation${conversationCount > 1 ? "s" : ""} · ${angleCount} angle${angleCount > 1 ? "s" : ""}`
    ];

    state.conversations.forEach((conversation, index) => {
      const context = state.contexts[conversation];
      const angles = state.angles[conversation] || [];

      let anglePart = "Angle à préciser";
      if (angles.length === 1) {
        anglePart = shortText(angles[0], 120);
      } else if (angles.length > 1) {
        anglePart = `${angles.length} angles sélectionnés`;
      }

      lines.push(`${index + 1}. ${conversation} — ${context} — ${anglePart}`);
    });

    return lines.join("\n");
  }

  function applyPrefillFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const cycleParam = params.get("cycle");
    const conversationParam = params.get("conversation");

    if (cycleParam) {
      const cycleMatch = Object.keys(editorialData).find((cycle) => {
        const normalized = cycle.toLowerCase();
        return (
          normalized.includes(cycleParam.toLowerCase()) ||
          getCycleShortLabel(cycle).toLowerCase() === cycleParam.toLowerCase()
        );
      });

      if (cycleMatch) {
        state.cycle = cycleMatch;
      }
    }

    if (state.cycle && conversationParam) {
      const requested = conversationParam.split(",").map((item) => item.trim()).filter(Boolean);
      const available = Object.keys(editorialData[state.cycle]);

      requested.forEach((item) => {
        let foundConversation = "";

        if (/^C\d+$/i.test(item)) {
          const index = Number(item.slice(1)) - 1;
          if (available[index]) {
            foundConversation = available[index];
          }
        } else {
          foundConversation = available.find((conversation) => conversation.toLowerCase() === item.toLowerCase()) || "";
        }

        if (foundConversation && !state.conversations.includes(foundConversation)) {
          state.conversations.push(foundConversation);
        }
      });
    }
  }

  cycleCards.addEventListener("click", (event) => {
    const button = event.target.closest("[data-cycle]");
    if (!button) return;

    const nextCycle = button.dataset.cycle;
    if (!nextCycle) return;

    if (state.cycle !== nextCycle) {
      state.cycle = nextCycle;
      resetState(true);
    }

    setFeedback("");
    updateUI();
  });

  conversationCards.addEventListener("click", (event) => {
    const button = event.target.closest("[data-conversation]");
    if (!button) return;

    const conversation = button.dataset.conversation;
    if (!conversation) return;

    toggleConversation(conversation);
    setFeedback("");
    updateUI();
  });

  conversationDetails.addEventListener("click", (event) => {
    const contextButton = event.target.closest("[data-context]");
    const angleButton = event.target.closest("[data-angle]");

    if (contextButton) {
      const conversation = contextButton.dataset.conversation;
      const context = contextButton.dataset.context;

      if (conversation && context) {
        state.contexts[conversation] = context;
        state.angles[conversation] = [];
        setFeedback("");
        updateUI();
      }
      return;
    }

    if (angleButton) {
      const conversation = angleButton.dataset.conversation;
      const angle = angleButton.dataset.angle;

      if (conversation && angle) {
        toggleAngle(conversation, angle);
        setFeedback("");
        updateUI();
      }
    }
  });

  resetSelectionButton.addEventListener("click", () => {
    resetState();
    setFeedback("");
    updateUI();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const validationMessage = validateSelection();
    if (validationMessage) {
      setFeedback(validationMessage);
      return;
    }

    const summary = buildReadableSummary();

    if (summary.length > CAL_FIELD_MAX_LENGTH) {
      setFeedback("La sélection est trop longue pour être transmise au calendrier. Réduisez le nombre de conversations ou d’angles sélectionnés.");
      return;
    }

    const url = new URL(CAL_BOOKING_URL);
    url.searchParams.set(CAL_FIELD_IDENTIFIER, summary);

    window.location.href = url.toString();
  });

  applyPrefillFromUrl();
  updateUI();
});
