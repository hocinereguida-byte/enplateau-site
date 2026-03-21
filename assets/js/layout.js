document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     HEADER LOAD (si externalisé)
     ========================= */

  const headerContainer = document.getElementById("site-header");
  const mobileMenuContainer = document.getElementById("site-mobile-menu");

  // Si tu charges header/footer en AJAX, sinon ignoré
  if (headerContainer && headerContainer.children.length === 0) {
    fetch("partials/header.html")
      .then(res => res.text())
      .then(html => {
        headerContainer.innerHTML = html;
        initMenu(); // important après injection
      });
  } else {
    initMenu();
  }

  /* =========================
     MENU MOBILE
     ========================= */

  function initMenu() {

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuClose = document.querySelector(".mobile-menu-close");

    if (!menuToggle || !mobileMenu) return;

    function openMenu() {
      mobileMenu.classList.add("is-open");
      menuToggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }

    function closeMenu() {
      mobileMenu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    menuToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.contains("is-open");
      isOpen ? closeMenu() : openMenu();
    });

    if (menuClose) {
      menuClose.addEventListener("click", closeMenu);
    }

    // Fermer si clic en dehors
    document.addEventListener("click", (e) => {
      if (!mobileMenu.classList.contains("is-open")) return;

      if (
        !mobileMenu.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        closeMenu();
      }
    });

    // Fermer avec ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    // Fermer quand on clique sur un lien
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });
  }

  /* =========================
     ACTIVE LINK (MENU)
     ========================= */

  const currentPath = window.location.pathname.split("/").pop();

  document.querySelectorAll("a[href]").forEach(link => {
    const href = link.getAttribute("href");

    if (!href || href.startsWith("#")) return;

    if (href === currentPath) {
      link.classList.add("is-active");
    }
  });

});
