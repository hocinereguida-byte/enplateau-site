document.addEventListener("DOMContentLoaded", async () => {
  async function loadPartial(selector, filePath) {
    const target = document.querySelector(selector);
    if (!target) return;

    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`Impossible de charger ${filePath}`);
      }
      const html = await response.text();
      target.innerHTML = html;
    } catch (error) {
      console.error(error);
    }
  }

  await loadPartial("#site-header", "partials/header.html");
  await loadPartial("#site-mobile-menu", "partials/mobile-menu.html");
  await loadPartial("#site-footer", "partials/footer.html");

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll('a[href]').forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;

    if (href === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobile-menu");

  if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.contains("is-open");
      mobileMenu.classList.toggle("is-open", !isOpen);
      burger.setAttribute("aria-expanded", String(!isOpen));
    });
  }

  const mobileDropdownTrigger = document.querySelector(".mobile-dropdown-trigger");
  const mobileSubmenu = document.querySelector(".mobile-submenu");

  if (mobileDropdownTrigger && mobileSubmenu) {
    mobileDropdownTrigger.addEventListener("click", () => {
      const isOpen = mobileSubmenu.classList.contains("is-open");
      mobileSubmenu.classList.toggle("is-open", !isOpen);
      mobileDropdownTrigger.setAttribute("aria-expanded", String(!isOpen));
    });
  }

  document.addEventListener("click", (event) => {
    const clickedInsideHeader = event.target.closest(".header-wrap");
    const clickedInsideMobileMenu = event.target.closest("#mobile-menu");

    if (!clickedInsideHeader && !clickedInsideMobileMenu && mobileMenu) {
      mobileMenu.classList.remove("is-open");
      if (burger) {
        burger.setAttribute("aria-expanded", "false");
      }
    }
  });

  const seriesPages = [
    "les-eclaireurs.html",
    "les-batisseurs.html",
    "les-architectes.html"
  ];

  document.querySelectorAll(".nav-trigger").forEach((trigger) => {
    const label = trigger.textContent.trim();
    if (label.includes("Séries") && seriesPages.includes(currentPage)) {
      trigger.classList.add("active");
    }
  });
});
