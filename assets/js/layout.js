document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (toggle && mobileMenu) {
    toggle.addEventListener("click", function () {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      mobileMenu.classList.toggle("is-open");
    });
  }

  const pathname = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".desktop-editorial-nav__link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");

    const isSeriesPage =
      pathname === "les-batisseurs.html" ||
      pathname === "les-eclaireurs.html" ||
      pathname === "les-architectes.html";

    if (
      (href === "les-batisseurs.html" && isSeriesPage) ||
      (href === pathname)
    ) {
      link.classList.add("is-active");
    }
  });
});
