function initHomeReveal() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const revealSelectors = [
    ".hero-kicker",
    ".hero-title",
    ".hero-subtitle",
    ".hero-actions",
    ".hero-meta",
    ".hero-note",
    ".section-head",
    ".why-editorial-item",
    ".frame-row",
    ".rencontre-item",
    ".dispositif-step",
    ".why-ep-statement",
    ".why-ep-text p",
    ".series-grid .card",
    ".access-primary",
    ".access-secondary",
    ".section-footnote"
  ];

  const revealElements = document.querySelectorAll(revealSelectors.join(","));

  if (!revealElements.length) {
    return;
  }

  if (prefersReducedMotion) {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
    return;
  }

  revealElements.forEach((element, index) => {
    element.classList.add("reveal");

    if (
      element.classList.contains("hero-kicker") ||
      element.classList.contains("hero-title") ||
      element.classList.contains("hero-subtitle") ||
      element.classList.contains("hero-actions") ||
      element.classList.contains("hero-meta") ||
      element.classList.contains("hero-note")
    ) {
      element.style.transitionDelay = `${Math.min(index * 60, 240)}ms`;
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const element = entry.target;

        if (!element.classList.contains("is-visible")) {
          const siblings = Array.from(element.parentElement?.children || []).filter((child) =>
            child.classList.contains("reveal")
          );

          const siblingIndex = siblings.indexOf(element);
          const staggerDelay = siblingIndex > -1 ? Math.min(siblingIndex * 70, 280) : 0;

          if (
            !element.style.transitionDelay &&
            !element.classList.contains("hero-kicker") &&
            !element.classList.contains("hero-title") &&
            !element.classList.contains("hero-subtitle") &&
            !element.classList.contains("hero-actions") &&
            !element.classList.contains("hero-meta") &&
            !element.classList.contains("hero-note")
          ) {
            element.style.transitionDelay = `${staggerDelay}ms`;
          }

          requestAnimationFrame(() => {
            element.classList.add("is-visible");
          });
        }

        observer.unobserve(element);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isAlreadyVisible = rect.top < window.innerHeight * 0.92;

    if (isAlreadyVisible) {
      element.classList.add("is-visible");
    } else {
      observer.observe(element);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (!document.body.classList.contains("home-page")) {
    return;
  }

  initHomeReveal();
});
