(function () {
  async function inject(selector, file) {
    const target = document.querySelector(selector);
    if (!target) return;

    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error("Impossible de charger " + file);
      target.innerHTML = await response.text();
    } catch (error) {
      console.error(error);
    }
  }

  function getCurrentPage() {
    const path = window.location.pathname.split("/").pop();
    return path && path.trim() !== "" ? path : "index.html";
  }

  function setActiveLinks() {
    const currentPage = getCurrentPage();

    document.querySelectorAll("#site-header a[href], #site-mobile-menu a[href], #site-footer a[href]").forEach((link) => {
      const href = link.getAttribute("href");
      if (href === currentPage) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });

    const contextPages = ["experts.html", "entrepreneurs.html", "entreprises.html", "secteur-public.html"];
    if (contextPages.includes(currentPage)) {
      const trigger = document.querySelector("#site-header .nav-trigger");
      if (trigger) {
        trigger.classList.add("active");
        trigger.setAttribute("aria-current", "page");
      }
    }
  }

  function initMobileMenu() {
    const burger = document.getElementById("burger");
    const mobileNav = document.getElementById("mobileNav");
    const mobileContextesBtn = document.getElementById("mobileContextesBtn");
    const mobileContextesSubmenu = document.getElementById("mobileContextesSubmenu");

    if (burger && mobileNav) {
      burger.addEventListener("click", function () {
        const open = mobileNav.style.display === "block";
        mobileNav.style.display = open ? "none" : "block";
        burger.setAttribute("aria-expanded", open ? "false" : "true");
      });
    }

    if (mobileContextesBtn && mobileContextesSubmenu) {
      mobileContextesBtn.addEventListener("click", function () {
        const open = mobileContextesSubmenu.style.display === "block";
        mobileContextesSubmenu.style.display = open ? "none" : "block";
        mobileContextesBtn.setAttribute("aria-expanded", open ? "false" : "true");

        const chevron = mobileContextesBtn.querySelector(".chevron");
        if (chevron) {
          chevron.style.transform = open ? "rotate(0deg)" : "rotate(180deg)";
        }
      });
    }
  }

  async function initLayout() {
    await inject("#site-header", "partials/header.html");
    await inject("#site-mobile-menu", "partials/mobile-menu.html");
    await inject("#site-footer", "partials/footer.html");

    setActiveLinks();
    initMobileMenu();
  }

  document.addEventListener("DOMContentLoaded", initLayout);
})();
