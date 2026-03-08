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
  const mobileNav = document.getElementById("mobileNav");
  const mobileSeriesBtn = document.getElementById("mobileSeriesBtn");
  const mobileSeriesSubmenu = document.getElementById("mobileSeriesSubmenu");

  if (burger && mobileNav) {
    burger.addEventListener("click", () => {
      const isOpen = mobileNav.style.display === "block";
      mobileNav.style.display = isOpen ? "none" : "block";
      burger.setAttribute("aria-expanded", String(!isOpen));
    });
  }

  if (mobileSeriesBtn && mobileSeriesSubmenu) {
    mobileSeriesBtn.addEventListener("click", () => {
      const isOpen = mobileSeriesSubmenu.style.display === "block";
      mobileSeriesSubmenu.style.display = isOpen ? "none" : "block";
      mobileSeriesBtn.setAttribute("aria-expanded", String(!isOpen));

      const chevron = mobileSeriesBtn.querySelector(".chevron");
      if (chevron) {
        chevron.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
      }
    });
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("a[href]").forEach((link) => {
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

  if (seriesPages.includes(currentPage)) {
    document.querySelectorAll(".nav-trigger").forEach((trigger) => {
      if (trigger.textContent.includes("Séries éditoriales")) {
        trigger.classList.add("active");
      }
    });
  }
});
