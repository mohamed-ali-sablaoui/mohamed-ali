(() => {
  "use strict";

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-nav");
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const languageButtons = [...document.querySelectorAll(".lang-btn")];
  const languageToggle = document.querySelector(".lang-toggle");
  const translatable = document.querySelectorAll("[data-fr][data-en]:not(meta)");
  const metaDescription = document.querySelector('meta[name="description"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');

  const closeMenu = () => {
    if (!menuButton || !navigation) return;
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    const language = document.documentElement.lang === "en" ? "en" : "fr";
    menuButton.setAttribute("aria-label", language === "en" ? "Open menu" : "Ouvrir le menu");
  };

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      const language = document.documentElement.lang === "en" ? "en" : "fr";
      menuButton.setAttribute("aria-label", isOpen
        ? (language === "en" ? "Close menu" : "Fermer le menu")
        : (language === "en" ? "Open menu" : "Ouvrir le menu"));
    });
    navLinks.forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  function setLanguage(language) {
    const selected = language === "en" ? "en" : "fr";
    document.documentElement.lang = selected;

    translatable.forEach((element) => {
      const value = element.dataset[selected];
      if (value !== undefined) element.innerHTML = value;
    });

    document.querySelectorAll("[data-aria-fr][data-aria-en]").forEach((element) => {
      const label = element.dataset[`aria${selected === "fr" ? "Fr" : "En"}`];
      if (label) element.setAttribute("aria-label", label);
    });

    document.querySelectorAll("[data-alt-fr][data-alt-en]").forEach((element) => {
      element.alt = element.dataset[selected === "fr" ? "altFr" : "altEn"];
    });

    languageButtons.forEach((button) => {
      const active = button.dataset.lang === selected;
      button.classList.toggle("selected", active);
      button.setAttribute("aria-pressed", String(active));
    });

    if (languageToggle) {
      languageToggle.classList.toggle("to-fr", selected === "fr");
      languageToggle.setAttribute("aria-label", selected === "fr" ? "Passer en anglais" : "Switch to French");
    }

    const pageTitle = selected === "fr"
      ? "Mohamed Ali Sablaoui — Portfolio Web"
      : "Mohamed Ali Sablaoui — Web Portfolio";
    document.title = pageTitle;
    if (metaDescription) metaDescription.content = metaDescription.dataset[selected] || metaDescription.content;
    if (ogDescription && metaDescription) ogDescription.content = metaDescription.content;

    try {
      localStorage.setItem("portfolio-language", selected);
    } catch (_) {
      // The site remains usable when browser storage is unavailable.
    }
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });
  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      setLanguage(document.documentElement.lang === "fr" ? "en" : "fr");
    });
  }

  let savedLanguage = "fr";
  try {
    savedLanguage = localStorage.getItem("portfolio-language") || "fr";
  } catch (_) {
    // Use French by default when storage is unavailable.
  }
  setLanguage(savedLanguage);

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const sections = [...document.querySelectorAll("main section[id]")];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if ("IntersectionObserver" in window && !reduceMotion) {
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

    document.querySelectorAll(".content-section, .project-card").forEach((element) => {
      element.classList.add("reveal");
      revealObserver.observe(element);
    });
  } else {
    document.querySelectorAll(".content-section, .project-card").forEach((element) => {
      element.classList.add("visible");
    });
  }
})();
