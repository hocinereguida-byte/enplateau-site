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
      const isOpen = mobileMenu.classList.contains("is-open");
      mobileMenu.classList.toggle("is-open", !isOpen);
      burger.setAttribute("aria-expanded", String(!isOpen));
      document.body.classList.toggle("menu-open", !isOpen);
    });
  }

  const mobileLinks = document.querySelectorAll("#mobile-menu a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (!mobileMenu || !burger) return;
      mobileMenu.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;

    const normalizedHref = href.split("#")[0];
    if (normalizedHref === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
});
