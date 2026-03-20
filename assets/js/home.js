document.addEventListener("DOMContentLoaded", function () {
  const tabsRoot = document.querySelector("[data-tabs]");

  if (!tabsRoot) return;

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
});
