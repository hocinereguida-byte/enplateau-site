// landing-industrie-premium.js
// Renderer dynamique EN PLATEAU — Landing page premium Industrie

(function () {
  const DATA = window.EN_PLATEAU_EDITORIAL_DATA;

  if (!DATA) {
    console.error("Référentiel éditorial introuvable.");
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const angleCode = params.get("angle") || "IND-C1-ASC-01";

  const angle = DATA.cycles
    .flatMap(c => c.angles || [])
    .find(a => a.code === angleCode);

  if (!angle) {
    console.error("Angle introuvable :", angleCode);
    return;
  }

  const reading = DATA.readingTypes[angle.typeLecture];

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el && value) el.textContent = value;
  };

  setText("hero-reading", reading.label);
  setText("hero-title", angle.questionEditoriale);
  setText("hero-intro", angle.introMecanisme);
  setText("hero-tension", angle.tensionArbitrage);
  setText("hero-bascule", angle.pointBascule);

  setText("angle-title", angle.questionPublique);
  setText("angle-text", angle.questionActivation);

  const cards = document.getElementById("profiles-grid");

  if (cards && angle.primaryProfiles) {
    cards.innerHTML = angle.primaryProfiles.map(profile => `
      <article class="programme-list__item">
        <h3>${profile}</h3>
        <p>
          Lecture particulièrement pertinente pour éclairer les arbitrages,
          tensions et mécanismes associés à cette position éditoriale.
        </p>
      </article>
    `).join("");
  }

  const complementary = document.getElementById("complementary-grid");

  if (complementary && angle.complementaryCodes) {
    complementary.innerHTML = angle.complementaryCodes.map(code => {
      const related = DATA.cycles
        .flatMap(c => c.angles || [])
        .find(a => a.code === code);

      if (!related) return "";

      return `
        <article class="programme-access__item">
          <h3>${related.typeLectureLabelSource}</h3>
          <p>${related.questionEditoriale}</p>
        </article>
      `;
    }).join("");
  }

})();
