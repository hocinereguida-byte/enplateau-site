async function loadPartial(selector, path) {
  const mountPoint = document.querySelector(selector);
  if (!mountPoint) return null;

  try {
    const response = await fetch(path, { cache: "no-cache" });
    if (!response.ok) {
      throw new Error(`Impossible de charger ${path}`);
    }

    const html = await response.text();
    mountPoint.innerHTML = html;
    return mountPoint;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function getCurrentPage() {
  const pathname = window.location.pathname.split("/").pop();
  return pathname && pathname.length ? pathname : "index.html";
}

function markActiveLinks() {
  const pathname = getCurrentPage();

  const isSeriesPage =
    pathname === "les-batisseurs.html" ||
    pathname === "les-eclaireurs.html" ||
    pathname === "les-architectes.html";

  document.querySelectorAll(".desktop-editorial-nav__link").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;

    if (href === pathname || (isSeriesPage && href === "positions.html")) {
      link.classList.add("is-active");
    }
  });

  document.querySelectorAll(".mobile-top-link, .mobile-secondary-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;

    const cleanHref = href.split("#")[0];

    if (cleanHref === pathname || (isSeriesPage && cleanHref === "positions.html")) {
      link.classList.add("is-active");
    }
  });
}

function bindMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeButton = document.querySelector(".mobile-menu-close");
  const mobileLinks = document.querySelectorAll(".mobile-top-link, .mobile-secondary-link");

  if (!toggle || !mobileMenu) return;

  const openMenu = () => {
    toggle.setAttribute("aria-expanded", "true");
    mobileMenu.setAttribute("aria-hidden", "false");
    mobileMenu.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
    mobileMenu.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    expanded ? closeMenu() : openMenu();
  });

  if (closeButton) {
    closeButton.addEventListener("click", closeMenu);
  }

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileMenu.classList.contains("is-open")) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024 && mobileMenu.classList.contains("is-open")) {
      closeMenu();
    }
  });
}

function bindHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* =========================
   COOKIE SYSTEM
========================= */

function initCookies() {
  if (window.__cookiesInitialized) return;
  window.__cookiesInitialized = true;

  const STORAGE_KEY = "enplateau_cookie_preferences_v1";

  const overlay = document.getElementById("cookie-overlay");
  const modal = document.getElementById("cookie-modal");
  const customizePanel = document.getElementById("cookie-customize-panel");
  const analyticsToggle = document.getElementById("cookie-analytics");

  const acceptBtn = document.getElementById("cookie-accept");
  const refuseBtn = document.getElementById("cookie-refuse");
  const customizeBtn = document.getElementById("cookie-customize");

  if (
    !overlay ||
    !modal ||
    !customizePanel ||
    !acceptBtn ||
    !refuseBtn ||
    !customizeBtn
  ) {
    return;
  }

  function savePreferences(preferences) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
      return true;
    } catch (error) {
      console.error("Impossible d’enregistrer les préférences cookies :", error);
      return false;
    }
  }

  function getPreferences() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (error) {
      console.error("Impossible de lire les préférences cookies :", error);
      return null;
    }
  }

  function showBanner() {
    overlay.hidden = false;
    modal.hidden = false;
    overlay.setAttribute("aria-hidden", "false");
    modal.setAttribute("aria-hidden", "false");
    document.documentElement.classList.add("cookies-open");
    document.body.classList.add("cookies-open");
  }

  function hideBanner() {
    overlay.hidden = true;
    modal.hidden = true;
    overlay.setAttribute("aria-hidden", "true");
    modal.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("cookies-open");
    document.body.classList.remove("cookies-open");
  }

  function applyPreferences(preferences) {
    if (!preferences) return;

    if (preferences.analytics) {
      console.log("Analytics accepté");
      // Intégration future Google Analytics ici si besoin
    } else {
      console.log("Analytics refusé");
    }
  }

  function setConsent(preferences) {
    const saved = savePreferences(preferences);
    if (!saved) return;

    applyPreferences(preferences);
    hideBanner();
  }

  customizeBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const isHidden = customizePanel.hidden;
    customizePanel.hidden = !isHidden;
    customizeBtn.textContent = isHidden ? "Masquer les options" : "Personnaliser";
  });

  acceptBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const analytics =
      !customizePanel.hidden && analyticsToggle
        ? !!analyticsToggle.checked
        : true;

    setConsent({
      necessary: true,
      analytics,
      updatedAt: new Date().toISOString()
    });
  });

  refuseBtn.addEventListener("click", (event) => {
    event.preventDefault();

    setConsent({
      necessary: true,
      analytics: false,
      updatedAt: new Date().toISOString()
    });
  });

  window.openCookiePreferences = function () {
    const current = getPreferences();

    if (analyticsToggle && current) {
      analyticsToggle.checked = !!current.analytics;
    } else if (analyticsToggle) {
      analyticsToggle.checked = false;
    }

    customizePanel.hidden = false;
    customizeBtn.textContent = "Masquer les options";
    showBanner();
  };

  const existing = getPreferences();

  if (existing && existing.necessary === true) {
    if (analyticsToggle) {
      analyticsToggle.checked = !!existing.analytics;
    }
    applyPreferences(existing);
    hideBanner();
  } else {
    if (analyticsToggle) {
      analyticsToggle.checked = false;
    }
    showBanner();
  }
}

/* ========================= */

async function initLayout() {
  if (window.__layoutInitialized) return;
  window.__layoutInitialized = true;

  await Promise.all([
    loadPartial("#site-header", "/partials/header.html"),
    loadPartial("#site-mobile-menu", "/partials/mobile-menu.html"),
    loadPartial("#site-footer", "/partials/footer.html"),
    loadPartial("#cookie-container", "/partials/cookies.html")
  ]);

  markActiveLinks();
  bindMobileMenu();
  bindHeaderScroll();
  initCookies();

  if (typeof initReveal === "function") {
    try {
      initReveal();
    } catch (error) {
      console.error("Reveal init failed:", error);
    }
  }

  if (typeof initConversationToggles === "function") {
    try {
      initConversationToggles();
    } catch (error) {
      console.error("Conversation toggle init failed:", error);
    }
  }
}

document.addEventListener("DOMContentLoaded", initLayout);
