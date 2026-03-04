"use strict";

(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Menu mobile
  const header = document.querySelector(".header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");

  if (header && toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Fecha menu quando clica em um link (mobile UX)
    nav.addEventListener("click", (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.classList.contains("nav__link")) {
        header.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Back to top 
  const backToTop = document.querySelector(".back-to-top");

  if (backToTop) {
    const toggleBackToTop = () => {
      const shouldShow = window.scrollY > 500;
      backToTop.classList.toggle("is-visible", shouldShow);
    };

    toggleBackToTop();
    window.addEventListener("scroll", toggleBackToTop, { passive: true });

    // Scroll para o topo ao clicar
    backToTop.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Back to top clicado");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

})();