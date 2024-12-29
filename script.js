document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle
  const themeToggleButton = document.getElementById("theme-toggle");
  themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Language Toggle
  const languageToggleButton = document.getElementById("language-toggle");
  let isEnglish = true;
  languageToggleButton.addEventListener("click", () => {
    isEnglish = !isEnglish;
    switchLanguage(isEnglish ? "en" : "mr");
  });

  // Scroll Animation
  const sections = document.querySelectorAll("section");
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Language Switch Functionality
  function switchLanguage(language) {
    document.querySelectorAll("[data-en]").forEach((element) => {
      element.textContent = element.getAttribute(`data-${language}`);
    });
  }
});
