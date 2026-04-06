async function loadPartial(selector, path) {
  const mountPoint = document.querySelector(selector);

  if (!mountPoint) return null;

  try {
    const response = await fetch(path, { cache: "no-cache" });
    if (!response.ok) throw new Error(`Impossible de charger ${path}`);

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

  if (!toggle || !mobileMenu) return;

  const openMenu = () => {
    toggle.setAttribute("aria-expanded", "true");
    mobileMenu.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    expanded ? closeMenu() : openMenu();
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
  const STORAGE_KEY = "enplateau_cookie_preferences_v1";

  const overlay = document.getElementById("cookie-overlay");
  const modal = document.getElementById("cookie-modal");

  if (!overlay || !modal) return;

  const customizePanel = document.getElementById("cookie-customize-panel");
  const analyticsToggle = document.getElementById("cookie-analytics");

  const acceptBtn = document.getElementById("cookie-accept");
  const refuseBtn = document.getElementById("cookie-refuse");
  const customizeBtn = document.getElementById("cookie-customize");

  function savePreferences(p) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  }

  function getPreferences() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY));
    } catch {
      return null;
    }
  }

  function hide() {
    overlay.hidden = true;
    modal.hidden = true;
    document.documentElement.classList.remove("cookies-open");
    document.body.classList.remove("cookies-open");
  }

  function show() {
    overlay.hidden = false;
    modal.hidden = false;
    document.documentElement.classList.add("cookies-open");
    document.body.classList.add("cookies-open");
  }

  function apply(p) {
    if (!p) return;

    if (p.analytics) {
      console.log("GA activé");
      // 👉 ici tu pourras injecter Google Analytics plus tard
    }
  }

  function setConsent(p) {
    savePreferences(p);
    apply(p);
    hide();
  }

  customizeBtn?.addEventListener("click", () => {
    const isHidden = customizePanel.hidden;
    customizePanel.hidden = !isHidden;
    customizeBtn.textContent = isHidden ? "Masquer les options" : "Personnaliser";
  });

  acceptBtn?.addEventListener("click", () => {
    const analytics = !customizePanel.hidden && analyticsToggle
      ? analyticsToggle.checked
      : true;

    setConsent({
      necessary: true,
      analytics,
      updatedAt: new Date().toISOString()
    });
  });

  refuseBtn?.addEventListener("click", () => {
    setConsent({
      necessary: true,
      analytics: false
    });
  });

  window.openCookiePreferences = function () {
    show();
    customizePanel.hidden = false;
  };

  const existing = getPreferences();

  if (!existing) show();
  else apply(existing);
}

/* ========================= */

async function initLayout() {
  await Promise.all([
    loadPartial("#site-header", "partials/header.html"),
    loadPartial("#site-mobile-menu", "partials/mobile-menu.html"),
    loadPartial("#site-footer", "partials/footer.html"),
    loadPartial("#cookie-container", "partials/cookies.html") // 🔥 AJOUT
  ]);

  markActiveLinks();
  bindMobileMenu();
  bindHeaderScroll();
  initCookies(); // 🔥 AJOUT
}

document.addEventListener("DOMContentLoaded", initLayout);
