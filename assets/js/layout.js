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

  document.addEventListener("click", (event) => {
    const burger = event.target.closest("#burger");
    const mobileTrigger = event.target.closest(".mobile-dropdown-trigger");
    const mobileMenu = document.getElementById("mobile-menu");

    if (burger && mobileMenu) {
      const isOpen = mobileMenu.classList.contains("is-open");
      mobileMenu.classList.toggle("is-open", !isOpen);
      burger.setAttribute("aria-expanded", String(!isOpen));
      return;
    }

    if (mobileTrigger) {
      const targetId = mobileTrigger.getAttribute("data-target");
      const target = document.getElementById(targetId);
      if (!target) return;

      const isOpen = target.classList.contains("is-open");
      target.classList.toggle("is-open", !isOpen);
      mobileTrigger.classList.toggle("is-open", !isOpen);
      mobileTrigger.setAttribute("aria-expanded", String(!isOpen));
      return;
    }
  });
});
