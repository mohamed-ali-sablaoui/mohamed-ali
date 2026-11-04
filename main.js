(() => {
  "use strict";

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-nav");
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const languageButtons = [...document.querySelectorAll(".lang-btn")];
  const languageToggle = document.querySelector(".lang-toggle");
  const translatable = document.querySelectorAll("[data-fr][data-en]");

  const closeMenu = () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Ouvrir le menu");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
  });

  navLinks.forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  function setLanguage(language) {
    const selected = language === "en" ? "en" : "fr";
    document.documentElement.lang = selected;
    translatable.forEach((element) => {
      const value = element.dataset[selected];
      if (value !== undefined) element.innerHTML = value;
    });
    languageButtons.forEach((button) => {
      const active = button.dataset.lang === selected;
      button.classList.toggle("selected", active);
      button.setAttribute("aria-pressed", String(active));
    });
    languageToggle.classList.toggle("to-fr", selected === "fr");
    try {
      localStorage.setItem("portfolio-language", selected);
    } catch (_) {
      // The site still works when browser storage is unavailable.
    }
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });
  languageToggle.addEventListener("click", () => {
    setLanguage(document.documentElement.lang === "fr" ? "en" : "fr");
  });

  let savedLanguage = "fr";
  try {
    savedLanguage = localStorage.getItem("portfolio-language") || "fr";
  } catch (_) {
    // Use French by default when storage is unavailable.
  }
  setLanguage(savedLanguage);

  document.getElementById("year").textContent = new Date().getFullYear();

  const sections = [...document.querySelectorAll("main section[id]")];
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
    sections.forEach((section) => sectionObserver.observe(section));

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".content-section").forEach((section) => {
      section.classList.add("reveal");
      revealObserver.observe(section);
    });
  }
})();
