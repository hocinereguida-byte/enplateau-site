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

  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobile-menu");

  if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
      const isOpen = mobileMenu.style.display === "block";
      mobileMenu.style.display = isOpen ? "none" : "block";
      burger.setAttribute("aria-expanded", String(!isOpen));
    });
  }

  const mobileDropdownTriggers = document.querySelectorAll(".mobile-dropdown-trigger");

  mobileDropdownTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const targetId = trigger.getAttribute("data-target");
      const target = document.getElementById(targetId);
      if (!target) return;

      const isOpen = target.style.display === "block";
      target.style.display = isOpen ? "none" : "block";
      trigger.classList.toggle("is-open", !isOpen);
      trigger.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll('a[href]').forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;

    if (href === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  const contextPages = [
    "experts.html",
    "entrepreneurs.html",
    "entreprises.html",
    "secteur-public.html",
    "associations.html"
  ];

  const seriesPages = [
    "les-eclaireurs.html",
    "les-batisseurs.html",
    "les-architectes.html"
  ];

  document.querySelectorAll(".nav-trigger").forEach((trigger) => {
    const label = trigger.textContent.trim();

    if (label.includes("Contextes") && contextPages.includes(currentPage)) {
      trigger.classList.add("active");
    }

    if (label.includes("Séries éditoriales") && seriesPages.includes(currentPage)) {
      trigger.classList.add("active");
    }
  });
});
