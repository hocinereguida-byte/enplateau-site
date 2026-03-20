document.addEventListener("DOMContentLoaded", function () {
  const tabsRoot = document.querySelector("[data-tabs]");

  if (tabsRoot) {
    const buttons = tabsRoot.querySelectorAll("[data-tab]");
    const panels = tabsRoot.querySelectorAll("[data-panel]");

    function activateTab(tabName) {
      buttons.forEach((button) => {
        const isActive = button.getAttribute("data-tab") === tabName;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-selected", String(isActive));
      });

      panels.forEach((panel) => {
        const isActive = panel.getAttribute("data-panel") === tabName;
        panel.classList.toggle("is-active", isActive);
        panel.hidden = !isActive;
      });
    }

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        activateTab(button.getAttribute("data-tab"));
      });
    });
  }

  const constitutionSection = document.querySelector("#constitution-home .editorial-reading-block");

  if (constitutionSection) {
    const paragraphs = constitutionSection.querySelectorAll("p");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            paragraphs.forEach((paragraph, index) => {
              setTimeout(() => {
                paragraph.classList.add("is-visible");
              }, index * 120);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(constitutionSection);
  }
});
