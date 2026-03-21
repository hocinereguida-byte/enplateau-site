async function loadPartial(selector, path) {
  const mountPoint = document.querySelector(selector);

  if (!mountPoint) {
    return null;
  }

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

  const desktopLinks = document.querySelectorAll(".site-nav a");
  const mobileLinks = document.querySelectorAll(".mobile-top-link");

  desktopLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === pathname) {
      link.setAttribute("aria-current", "page");
    }
  });

  mobileLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === pathname) {
      link.setAttribute("aria-current", "page");
    }
  });
}

function bindMobileMenu() {
  const toggle = document.querySelector(".site-nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeButton = document.querySelector(".mobile-menu-close");
  const mobileLinks = document.querySelectorAll(".mobile-top-link");

  if (!toggle || !mobileMenu) {
    return;
  }

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

  toggle.addEventListener("click", function () {
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

  mobileMenu.addEventListener("click", function (event) {
    if (event.target === mobileMenu) {
      closeMenu();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1024) {
      closeMenu();
    }
  });
}

document.addEventListener("DOMContentLoaded", async function () {
  await Promise.all([
    loadPartial("#site-header", "partials/header.html"),
    loadPartial("#site-mobile-menu", "partials/mobile-menu.html"),
    loadPartial("#site-footer", "partials/footer.html")
  ]);

  markActiveLinks();
  bindMobileMenu();
});
