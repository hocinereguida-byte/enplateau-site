function initReveal() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const root = document.documentElement;

  const revealSelectors = [
    ".hero-kicker",
    ".hero-title",
    ".hero-subtitle",
    ".hero-actions",
    ".hero-meta",
    ".hero-note",
    ".page-hero-kicker",
    ".page-hero-title",
    ".page-hero-sub",
    ".page-hero-meta",
    ".page-hero-note",
    ".section-head",
    ".why-editorial-item",
    ".frame-row",
    ".conversation-row",
    ".rencontre-item",
    ".dispositif-step",
    ".why-ep-statement",
    ".why-ep-text p",
    ".series-grid .card",
    ".access-primary",
    ".access-secondary",
    ".section-footnote",
    ".programme-step",
    ".season-card",
    ".programme-list__item",
    ".programme-value__item",
    ".programme-position",
    ".programme-access__item",
    ".programme-link-row",
    ".page-centered-copy"
  ];

  const revealElements = document.querySelectorAll(revealSelectors.join(","));

  if (!revealElements.length) {
    return;
  }

  if (prefersReducedMotion) {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
      element.style.transitionDelay = "0ms";
    });
    return;
  }

  root.classList.add("reveal-ready");

  revealElements.forEach((element, index) => {
    element.classList.add("reveal");

    if (
      element.classList.contains("hero-kicker") ||
      element.classList.contains("hero-title") ||
      element.classList.contains("hero-subtitle") ||
      element.classList.contains("hero-actions") ||
      element.classList.contains("hero-meta") ||
      element.classList.contains("hero-note") ||
      element.classList.contains("page-hero-kicker") ||
      element.classList.contains("page-hero-title") ||
      element.classList.contains("page-hero-sub") ||
      element.classList.contains("page-hero-meta") ||
      element.classList.contains("page-hero-note")
    ) {
      element.style.transitionDelay = `${Math.min(index * 60, 240)}ms`;
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

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
            !element.classList.contains("hero-note") &&
            !element.classList.contains("page-hero-kicker") &&
            !element.classList.contains("page-hero-title") &&
            !element.classList.contains("page-hero-sub") &&
            !element.classList.contains("page-hero-meta") &&
            !element.classList.contains("page-hero-note")
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

function initConversationToggles() {
  const toggles = document.querySelectorAll(".conversation-toggle");

  if (!toggles.length) {
    return;
  }

  toggles.forEach((toggle) => {
    const panel = toggle.closest(".conversation-row")?.querySelector(".conversation-panel");
    const label = toggle.querySelector(".conversation-toggle-label");

    if (!panel) {
      return;
    }

    toggle.addEventListener("click", () => {
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";
      const nextState = !isExpanded;

      toggle.setAttribute("aria-expanded", String(nextState));
      panel.hidden = !nextState;

      if (label) {
        label.textContent = nextState ? "Masquer les 4 angles" : "Voir les 4 angles";
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  try {
    initReveal();
  } catch (error) {
    document.documentElement.classList.remove("reveal-ready");
    console.error("Reveal init failed:", error);
  }

  try {
    initConversationToggles();
  } catch (error) {
    console.error("Conversation toggle init failed:", error);
  }
});
