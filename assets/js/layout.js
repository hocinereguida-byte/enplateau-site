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

  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobile-menu");

  function closeMobileMenu() {
    if (!mobileMenu || !burger) return;
    mobileMenu.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }

  function openMobileMenu() {
    if (!mobileMenu || !burger) return;
    mobileMenu.classList.add("open");
    burger.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
  }

  if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.contains("open");
      if (isOpen) closeMobileMenu();
      else openMobileMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMobileMenu();
    });

    document.querySelectorAll("#mobile-menu a").forEach((link) => {
      link.addEventListener("click", () => closeMobileMenu());
    });
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;

    if (
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("#")
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
