async function loadPartial(selector, path) {
  const mountPoint = document.querySelector(selector);

  if (!mountPoint) {
    return null;
  }

  try {
    mountPoint.style.opacity = "0";

    const response = await fetch(path, { cache: "no-cache" });

    if (!response.ok) {
      throw new Error(`Impossible de charger ${path}`);
    }

    const html = await response.text();
    mountPoint.innerHTML = html;

    requestAnimationFrame(() => {
      mountPoint.style.transition = "opacity 0.35s ease";
      mountPoint.style.opacity = "1";
    });

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

  const desktopLinks = document.querySelectorAll(".desktop-editorial-nav__link");
  const mobileLinks = document.querySelectorAll(".mobile-top-link, .mobile-secondary-link");

  desktopLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;

    if (href === pathname || (isSeriesPage && href === "positions.html")) {
      link.classList.add("is-active");
    }
  });

  mobileLinks.forEach((link) => {
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

  if (!toggle || !mobileMenu) {
    return;
  }

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
    if (expanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (closeButton) {
    closeButton.addEventListener("click", closeMenu);
  }

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      closeMenu();
    }
  });
}

function bindHeaderScroll() {
  const header = document.querySelector(".site-header");

  if (!header) {
    return;
  }

  const onScroll = () => {
    if (window.scrollY > 24) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

async function initLayout() {
  await Promise.all([
    loadPartial("#site-header", "partials/header.html"),
    loadPartial("#site-mobile-menu", "partials/mobile-menu.html"),
    loadPartial("#site-footer", "partials/footer.html")
  ]);

  markActiveLinks();
  bindMobileMenu();
  bindHeaderScroll();
}

document.addEventListener("DOMContentLoaded", initLayout);
