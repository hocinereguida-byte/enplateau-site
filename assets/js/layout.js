document.addEventListener("DOMContentLoaded", async () => {
  async function loadPartial(selector, filePath) {
    const target = document.querySelector(selector);
    if (!target) return null;

    try {
      const response = await fetch(filePath, { cache: "no-cache" });
      if (!response.ok) {
        throw new Error(`Impossible de charger ${filePath}`);
      }
      const html = await response.text();
      target.innerHTML = html;
      return target;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  await loadPartial("#site-header", "partials/header.html");
  await loadPartial("#site-mobile-menu", "partials/mobile-menu.html");
  await loadPartial("#site-footer", "partials/footer.html");

  const burger =
    document.getElementById("burger") ||
    document.querySelector(".burger") ||
    document.querySelector("[data-menu-toggle]");

  const mobileMenu =
    document.getElementById("mobile-menu") ||
    document.querySelector(".mobile-menu") ||
    document.querySelector("#site-mobile-menu > *");

  function closeMobileMenu() {
    if (!mobileMenu || !burger) return;
    mobileMenu.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }

  function openMobileMenu() {
    if (!mobileMenu || !burger) return;
    mobileMenu.classList.add("is-open");
    burger.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
  }

  if (burger && mobileMenu) {
    if (!burger.hasAttribute("aria-expanded")) {
      burger.setAttribute("aria-expanded", "false");
    }

    burger.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.contains("is-open");
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    });

    document.addEventListener("click", (event) => {
      const clickInsideMenu = mobileMenu.contains(event.target);
      const clickOnBurger = burger.contains(event.target);
      if (!clickInsideMenu && !clickOnBurger) {
        closeMobileMenu();
      }
    });
  }

  const mobileLinks = document.querySelectorAll("#mobile-menu a, .mobile-menu a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  const mobileTriggers = document.querySelectorAll(
    ".mobile-dropdown-trigger, .mobile-section-trigger"
  );

  mobileTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const targetId = trigger.getAttribute("data-target");
      if (!targetId) return;

      const submenu = document.getElementById(targetId);
      if (!submenu) return;

      const isOpen = submenu.classList.contains("is-open");
      submenu.classList.toggle("is-open", !isOpen);
      trigger.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;

    if (
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:")
    ) {
      return;
    }

    const normalizedHref = href.split("#")[0].trim();

    if (!normalizedHref) return;

    if (normalizedHref === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
});
