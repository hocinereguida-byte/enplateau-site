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
    ".page-hero-inner",
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
    ".page-centered-copy",
    ".theme-nav",
    ".theme-block",
    ".conversations-deadlines",
    ".conversation-visible-card",
    ".conversation-angle",
    ".angle-home-card",
    ".media-logos-band"
  ];

  const revealSet = new Set();

  document.querySelectorAll(revealSelectors.join(",")).forEach((element) => {
    revealSet.add(element);
  });

  document.querySelectorAll(".reveal").forEach((element) => {
    revealSet.add(element);
  });

  const revealElements = Array.from(revealSet);

  if (!revealElements.length) {
    return;
  }

  if (prefersReducedMotion) {
    revealElements.forEach((element) => {
      element.classList.add("reveal", "is-visible");
      element.style.transitionDelay = "0ms";
    });
    return;
  }

  root.classList.add("reveal-ready");

  const heroSequence = [
    ".hero-kicker",
    ".hero-title",
    ".hero-subtitle",
    ".hero-meta",
    ".hero-note",
    ".hero-actions",
    ".page-hero-kicker",
    ".page-hero-title",
    ".page-hero-sub",
    ".page-hero-meta",
    ".page-hero-note",
    ".page-hero-inner"
  ];

  const heroElements = [];
  heroSequence.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => {
      heroElements.push(element);
    });
  });

  revealElements.forEach((element) => {
    element.classList.add("reveal");
    element.style.transitionDelay = "";
    element.classList.remove("is-visible");
  });

  heroElements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target;

        if (!element.classList.contains("is-visible")) {
          const parent = element.parentElement;
          const siblings = parent
            ? Array.from(parent.children).filter((child) => child.classList.contains("reveal"))
            : [];

          const siblingIndex = siblings.indexOf(element);
          const staggerDelay = siblingIndex > -1 ? Math.min(siblingIndex * 70, 280) : 0;

          const isHeroElement = heroElements.includes(element);

          if (!isHeroElement && !element.style.transitionDelay) {
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
    const isAlreadyVisible = rect.top < window.innerHeight * 0.82;

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
    const row = toggle.closest(".conversation-row");
    const panel = row?.querySelector(".conversation-panel");
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

function initCookieBanner() {
  const STORAGE_KEY = "enplateau_cookie_preferences_v1";

  const overlay = document.getElementById("cookie-overlay");
  const modal = document.getElementById("cookie-modal");
  const customizePanel = document.getElementById("cookie-customize-panel");
  const analyticsToggle = document.getElementById("cookie-analytics");

  const acceptBtn = document.getElementById("cookie-accept");
  const refuseBtn = document.getElementById("cookie-refuse");
  const customizeBtn = document.getElementById("cookie-customize");

  if (!overlay || !modal || !acceptBtn || !refuseBtn || !customizeBtn) {
    return;
  }

  function savePreferences(preferences) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  }

  function getPreferences() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }

  function hideBanner() {
    overlay.hidden = true;
    modal.hidden = true;
    document.documentElement.classList.remove("cookies-open");
    document.body.classList.remove("cookies-open");
  }

  function showBanner() {
    overlay.hidden = false;
    modal.hidden = false;
    document.documentElement.classList.add("cookies-open");
    document.body.classList.add("cookies-open");
  }

  function applyPreferences(preferences) {
    if (!preferences) return;

    if (preferences.analytics) {
      console.log("Analytics accepté");
      /* Exemple futur :
      if (!window.gaLoaded) {
        const script = document.createElement("script");
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX";
        script.async = true;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;

        gtag("js", new Date());
        gtag("config", "G-XXXXXXX");

        window.gaLoaded = true;
      }
      */
    } else {
      console.log("Analytics refusé");
    }
  }

  function setConsent(preferences) {
    savePreferences(preferences);
    applyPreferences(preferences);
    hideBanner();
  }

  customizeBtn.addEventListener("click", function () {
    const isHidden = customizePanel.hidden;
    customizePanel.hidden = !isHidden;
    customizeBtn.textContent = isHidden ? "Masquer les options" : "Personnaliser";
  });

  refuseBtn.addEventListener("click", function () {
    setConsent({
      necessary: true,
      analytics: false,
      updatedAt: new Date().toISOString()
    });
  });

  acceptBtn.addEventListener("click", function () {
    setConsent({
      necessary: true,
      analytics: !customizePanel.hidden && analyticsToggle ? !!analyticsToggle.checked : true,
      updatedAt: new Date().toISOString()
    });
  });

  if (analyticsToggle) {
    analyticsToggle.checked = false;
  }

  const existing = getPreferences();

  if (!existing) {
    showBanner();
  } else {
    applyPreferences(existing);
  }

  window.openCookiePreferences = function () {
    const current = getPreferences();

    if (analyticsToggle && current) {
      analyticsToggle.checked = !!current.analytics;
    }

    customizePanel.hidden = false;
    customizeBtn.textContent = "Masquer les options";
    showBanner();
  };
}
