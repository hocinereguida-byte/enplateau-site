async function loadPartial(selector, path) {
  const mountPoint = document.querySelector(selector);

  if (!mountPoint) return null;

  try {
    const response = await fetch(path, { cache: "no-cache" });

    if (!response.ok) {
      throw new Error(`Impossible de charger ${path} (${response.status})`);
    }

    const html = await response.text();
    mountPoint.innerHTML = html;
    return mountPoint;
  } catch (error) {
    console.error(`[loadPartial] ${error.message}`);
    return null;
  }
}

function getCurrentPage() {
  const pathname = window.location.pathname.split("/").pop();
  return pathname && pathname.length ? pathname : "index.html";
}

function normalizeHref(href) {
  if (!href) return "";
  return href.split("#")[0].split("?")[0].replace(/^\//, "");
}

function markActiveLinks() {
  const currentPage = getCurrentPage();
  const allLinks = document.querySelectorAll(".site-nav a, .mobile-top-link");

  allLinks.forEach((link) => {
    const href = normalizeHref(link.getAttribute("href"));

    if (href === currentPage) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function bindMobileMenu() {
  const toggle = document.querySelector(".site-nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeButton = document.querySelector(".mobile-menu-close");
  const mobileLinks = document.querySelectorAll(".mobile-top-link");

  if (!toggle || !mobileMenu) return;

  const firstFocusable = closeButton || mobileLinks[0] || mobileMenu;

  const openMenu = () => {
    toggle.setAttribute("aria-expanded", "true");
    mobileMenu.classList.add("is-open");
    mobileMenu.setAttribute("aria-hidden", "false");
    document.body.classList.add("menu-open");
    firstFocusable.focus();
  };

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("is-open");
    mobileMenu.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-open");
    toggle.focus();
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

  mobileMenu.addEventListener("click", (event) => {
    if (event.target === mobileMenu) {
      closeMenu();
    }
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

document.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([
    loadPartial("#site-header", "partials/header.html"),
    loadPartial("#site-mobile-menu", "partials/mobile-menu.html"),
    loadPartial("#site-footer", "partials/footer.html")
  ]);

  markActiveLinks();
  bindMobileMenu();
});
