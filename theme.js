const darkBtn = document.querySelector(".dark-btn");
  const lightBtn = document.querySelector(".light-btn");
  const autoBtn = document.querySelector(".auto-btn");
  const rootElement = document.documentElement;

  function applyMode(mode) {
    // Add a smooth transition effect
    rootElement.style.transition = "background-color 0.5s, color 0.5s";

    // Apply the selected mode
    localStorage.setItem("lightMode", mode);

    if (mode === "dark") {
      rootElement.className = "dark";
      darkBtn.classList.add("active");
      lightBtn.classList.remove("active");
      autoBtn.classList.remove("active");
    } else if (mode === "light") {
      rootElement.className = "light";
      darkBtn.classList.remove("active");
      lightBtn.classList.add("active");
      autoBtn.classList.remove("active");
    } else if (mode === "auto") {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      rootElement.className = systemDark ? "dark" : "light";
      darkBtn.classList.remove("active");
      lightBtn.classList.remove("active");
      autoBtn.classList.add("active");
    }
  }

  function initializeMode() {
    const savedMode = localStorage.getItem("lightMode") || "auto";
    applyMode(savedMode);
  }

  darkBtn.addEventListener("click", () => applyMode("dark"));
  lightBtn.addEventListener("click", () => applyMode("light"));
  autoBtn.addEventListener("click", () => applyMode("auto"));

  // Initialize the mode on page load
  initializeMode();
