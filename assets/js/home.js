function initRevealOnScroll() {
  const revealTargets = document.querySelectorAll(
    [
      ".home-page .section-head",
      ".home-page .why-editorial-item",
      ".home-page .frame-row",
      ".home-page .dispositif-step",
      ".home-page .rencontre-item",
      ".home-page .series-grid .card",
      ".home-page .access-primary",
      ".home-page .access-secondary",
      ".home-page .why-ep-statement",
      ".home-page .why-ep-text"
    ].join(", ")
  );

  if (!revealTargets.length) return;

  revealTargets.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealTargets.forEach((el) => observer.observe(el));
}

function initRencontresFocus() {
  const items = Array.from(document.querySelectorAll(".home-page .rencontre-item"));
  if (!items.length) return;

  const clearActive = () => {
    items.forEach((item) => item.classList.remove("is-active"));
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (!visible.length) return;

      clearActive();
      visible[0].target.classList.add("is-active");
    },
    {
      threshold: [0.2, 0.4, 0.6],
      rootMargin: "-20% 0px -35% 0px"
    }
  );

  items.forEach((item) => observer.observe(item));

  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      clearActive();
      item.classList.add("is-active");
    });
  });
}

function initSeriesFocus() {
  const cards = Array.from(document.querySelectorAll(".home-page .series-grid .card"));
  if (!cards.length) return;

  const resetCards = () => {
    cards.forEach((card) => card.classList.remove("is-muted"));
  };

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      cards.forEach((other) => {
        if (other !== card) {
          other.classList.add("is-muted");
        } else {
          other.classList.remove("is-muted");
        }
      });
    });

    card.addEventListener("mouseleave", resetCards);
  });
}

function initHomePage() {
  if (!document.body.classList.contains("home-page")) return;

  initRevealOnScroll();
  initRencontresFocus();
  initSeriesFocus();
}

document.addEventListener("DOMContentLoaded", initHomePage);
