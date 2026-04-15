document.addEventListener("DOMContentLoaded", () => {
  const CAL_BOOKING_URL = "https://cal.com/en-plateau/echange-editorial-15-min";
  const CAL_FIELD_IDENTIFIER = "selection_editoriale";

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

  const cycleCodes = {
    "Logement - production & transformation immobilière": "LOG",
    "Industrie - fabrication & transformation": "IND"
  };

  const form = document.getElementById("editorial-intake-form");
  const cycleSelect = document.getElementById("cycle-select");
  const selectionBlocksContainer = document.getElementById("selection-blocks");
  const addSelectionButton = document.getElementById("add-selection-button");
  const feedback = document.getElementById("editorial-intake-feedback");

  if (!form || !cycleSelect || !selectionBlocksContainer || !addSelectionButton || !feedback) {
    return;
  }

  function setFeedback(message = "") {
    feedback.textContent = message;
  }

  function makeOption(value, label = value) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    return option;
  }

  function resetSelect(select, placeholder) {
    select.innerHTML = "";
    select.appendChild(makeOption("", placeholder));
    select.value = "";
  }

  function fillSelect(select, values, placeholder) {
    resetSelect(select, placeholder);
    values.forEach((value) => {
      select.appendChild(makeOption(value));
    });
  }

  function populateCycles() {
    resetSelect(cycleSelect, "Choisir un cycle");
    Object.keys(editorialData).forEach((cycle) => {
      cycleSelect.appendChild(makeOption(cycle));
    });
  }

  function getCurrentCycle() {
    return cycleSelect.value.trim();
  }

  function getConversationCode(cycle, conversation) {
    const conversations = Object.keys(editorialData[cycle] || {});
    const index = conversations.indexOf(conversation);
    return index >= 0 ? `C${index + 1}` : "C?";
  }

  function getContextCode(cycle, conversation, context) {
    const contexts = Object.keys(editorialData[cycle]?.[conversation] || {});
    const index = contexts.indexOf(context);
    return index >= 0 ? `T${index + 1}` : "T?";
  }

  function getAngleCode(cycle, conversation, context, angle) {
    const angles = editorialData[cycle]?.[conversation]?.[context] || [];
    const index = angles.indexOf(angle);
    return index >= 0 ? `A${index + 1}` : "A?";
  }

  function createBlock(index) {
    const block = document.createElement("div");
    block.className = "editorial-selection-block";
    block.dataset.index = String(index);

    block.innerHTML = `
      <div class="editorial-selection-block__head">
        <h3 class="editorial-selection-block__title">Sélection <span>${index + 1}</span></h3>
        <button type="button" class="editorial-selection-block__remove" aria-label="Supprimer cette sélection">
          Supprimer
        </button>
      </div>

      <div class="editorial-intake-grid editorial-intake-grid--stacked">
        <div class="editorial-field">
          <label>Conversation</label>
          <select class="conversation-select" required disabled>
            <option value="">Choisir d’abord un cycle</option>
          </select>
        </div>

        <div class="editorial-field">
          <label>Contexte</label>
          <select class="context-select" required disabled>
            <option value="">Choisir d’abord une conversation</option>
          </select>
        </div>

        <div class="editorial-field">
          <label>Angle</label>
          <select class="angle-select" required disabled>
            <option value="">Choisir d’abord un contexte</option>
          </select>
        </div>
      </div>
    `;

    const conversationSelect = block.querySelector(".conversation-select");
    const contextSelect = block.querySelector(".context-select");
    const angleSelect = block.querySelector(".angle-select");
    const removeButton = block.querySelector(".editorial-selection-block__remove");

    conversationSelect.addEventListener("change", () => {
      const cycle = getCurrentCycle();
      const conversation = conversationSelect.value;

      resetSelect(contextSelect, "Choisir d’abord une conversation");
      resetSelect(angleSelect, "Choisir d’abord un contexte");
      contextSelect.disabled = true;
      angleSelect.disabled = true;

      if (!cycle || !conversation || !editorialData[cycle]?.[conversation]) {
        return;
      }

      fillSelect(
        contextSelect,
        Object.keys(editorialData[cycle][conversation]),
        "Choisir un contexte"
      );
      contextSelect.disabled = false;
    });

    contextSelect.addEventListener("change", () => {
      const cycle = getCurrentCycle();
      const conversation = conversationSelect.value;
      const context = contextSelect.value;

      resetSelect(angleSelect, "Choisir d’abord un contexte");
      angleSelect.disabled = true;

      if (!cycle || !conversation || !context || !editorialData[cycle]?.[conversation]?.[context]) {
        return;
      }

      fillSelect(
        angleSelect,
        editorialData[cycle][conversation][context],
        "Choisir un angle"
      );
      angleSelect.disabled = false;
    });

    removeButton.addEventListener("click", () => {
      const allBlocks = selectionBlocksContainer.querySelectorAll(".editorial-selection-block");
      if (allBlocks.length <= 1) {
        setFeedback("Au moins une sélection doit être conservée.");
        return;
      }

      block.remove();
      renumberBlocks();
      setFeedback("");
    });

    return block;
  }

  function renumberBlocks() {
    const blocks = selectionBlocksContainer.querySelectorAll(".editorial-selection-block");
    blocks.forEach((block, idx) => {
      block.dataset.index = String(idx);
      const titleNumber = block.querySelector(".editorial-selection-block__title span");
      if (titleNumber) {
        titleNumber.textContent = String(idx + 1);
      }
    });
  }

  function populateConversationSelects() {
    const cycle = getCurrentCycle();
    const blocks = selectionBlocksContainer.querySelectorAll(".editorial-selection-block");

    blocks.forEach((block) => {
      const conversationSelect = block.querySelector(".conversation-select");
      const contextSelect = block.querySelector(".context-select");
      const angleSelect = block.querySelector(".angle-select");

      const previousConversation = conversationSelect.value;
      const previousContext = contextSelect.value;
      const previousAngle = angleSelect.value;

      resetSelect(contextSelect, "Choisir d’abord une conversation");
      resetSelect(angleSelect, "Choisir d’abord un contexte");
      contextSelect.disabled = true;
      angleSelect.disabled = true;

      if (!cycle || !editorialData[cycle]) {
        resetSelect(conversationSelect, "Choisir d’abord un cycle");
        conversationSelect.disabled = true;
        return;
      }

      fillSelect(
        conversationSelect,
        Object.keys(editorialData[cycle]),
        "Choisir une conversation"
      );
      conversationSelect.disabled = false;

      if (previousConversation && editorialData[cycle][previousConversation]) {
        conversationSelect.value = previousConversation;

        fillSelect(
          contextSelect,
          Object.keys(editorialData[cycle][previousConversation]),
          "Choisir un contexte"
        );
        contextSelect.disabled = false;

        if (
          previousContext &&
          editorialData[cycle][previousConversation][previousContext]
        ) {
          contextSelect.value = previousContext;

          fillSelect(
            angleSelect,
            editorialData[cycle][previousConversation][previousContext],
            "Choisir un angle"
          );
          angleSelect.disabled = false;

          if (
            previousAngle &&
            editorialData[cycle][previousConversation][previousContext].includes(previousAngle)
          ) {
            angleSelect.value = previousAngle;
          }
        }
      }
    });
  }

  function addBlock() {
    const cycle = getCurrentCycle();

    if (!cycle) {
      setFeedback("Choisissez d’abord un cycle.");
      cycleSelect.focus();
      return;
    }

    const index = selectionBlocksContainer.querySelectorAll(".editorial-selection-block").length;
    const block = createBlock(index);
    selectionBlocksContainer.appendChild(block);
    populateConversationSelects();
    setFeedback("");
  }

  function ensureAtLeastOneBlock() {
    if (!selectionBlocksContainer.querySelector(".editorial-selection-block")) {
      selectionBlocksContainer.appendChild(createBlock(0));
    }
    populateConversationSelects();
    renumberBlocks();
  }

  function getSelections() {
    const blocks = selectionBlocksContainer.querySelectorAll(".editorial-selection-block");

    return Array.from(blocks).map((block) => {
      const conversation = block.querySelector(".conversation-select")?.value.trim() || "";
      const context = block.querySelector(".context-select")?.value.trim() || "";
      const angle = block.querySelector(".angle-select")?.value.trim() || "";

      return { conversation, context, angle };
    });
  }

  function validateSelections(cycle, selections) {
    if (!cycle) {
      return "Choisissez un cycle avant de continuer.";
    }

    if (!selections.length) {
      return "Ajoutez au moins une sélection.";
    }

    for (let i = 0; i < selections.length; i += 1) {
      const item = selections[i];
      if (!item.conversation || !item.context || !item.angle) {
        return `Complétez entièrement la sélection ${i + 1}.`;
      }
    }

    return "";
  }

  function formatSummary(cycle, selections) {
    const cycleCode = cycleCodes[cycle] || cycle;
    const lines = [`Cycle: ${cycleCode}`];

    selections.forEach((item, idx) => {
      const conversationCode = getConversationCode(cycle, item.conversation);
      const contextCode = getContextCode(cycle, item.conversation, item.context);
      const angleCode = getAngleCode(cycle, item.conversation, item.context, item.angle);

      lines.push(`${idx + 1}. ${conversationCode}-${contextCode}-${angleCode}`);
    });

    return lines.join("\n");
  }

  populateCycles();
  ensureAtLeastOneBlock();

  cycleSelect.addEventListener("change", () => {
    populateConversationSelects();
    setFeedback("");
  });

  addSelectionButton.addEventListener("click", () => {
    addBlock();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const cycle = getCurrentCycle();
    const selections = getSelections();
    const validationMessage = validateSelections(cycle, selections);

    if (validationMessage) {
      setFeedback(validationMessage);
      return;
    }

    const summary = formatSummary(cycle, selections);
    const url = new URL(CAL_BOOKING_URL);

    url.searchParams.set(CAL_FIELD_IDENTIFIER, summary);

    window.location.href = url.toString();
  });
});
