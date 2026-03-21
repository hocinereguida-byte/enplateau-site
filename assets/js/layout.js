(function () {
  "use strict";

  async function loadPartials() {
    const includeNodes = document.querySelectorAll("[data-include]");
    const jobs = Array.from(includeNodes).map(async (node) => {
      const file = node.getAttribute("data-include");
      if (!file) return;

      try {
        const response = await fetch(file, { cache: "no-cache" });
        if (!response.ok) {
          throw new Error(`Impossible de charger ${file} (${response.status})`);
        }

        const html = await response.text();
        node.outerHTML = html;
      } catch (error) {
        console.error(error);
      }
    });

    await Promise.all(jobs);
  }

  function initMobileMenu() {
    const menu = document.getElementById("mobile-menu");
    const toggle = document.querySelector("[data-menu-toggle]");
    const closeButtons = document.querySelectorAll("[data-menu-close]");
    const menuLinks = menu ? menu.querySelectorAll("a") : [];

    if (!menu || !toggle) return;

    function openMenu() {
      menu.classList.add("is-open");
      menu.setAttribute("aria-hidden", "false");
      toggle.setAttribute("aria-expanded", "true");
      document.body.classList.add("menu-open");
    }

    function closeMenu() {
      menu.classList.remove("is-open");
      menu.setAttribute("aria-hidden", "true");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    }

    toggle.addEventListener("click", function () {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      if (expanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    closeButtons.forEach(function (button) {
      button.addEventListener("click", closeMenu);
    });

    menuLinks.forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menu.classList.contains("is-open")) {
        closeMenu();
      }
    });
  }

  function setActiveNav() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".main-nav a, .mobile-menu-nav a, .footer-nav a");

    navLinks.forEach(function (link) {
      const href = link.getAttribute("href");
      if (!href) return;

      const linkPath = href.split("/").pop();
      if (linkPath === currentPath) {
        link.classList.add("is-active");
      }
    });
  }

  async function initLayout() {
    await loadPartials();
    initMobileMenu();
    setActiveNav();
  }

  document.addEventListener("DOMContentLoaded", initLayout);
})();
