const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const navbar = document.getElementById("navbar");
const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const btnText = document.getElementById("btnText");
const pageLoader = document.getElementById("pageLoader");
const themeToggle = document.getElementById("themeToggle");
const themeLogos = document.querySelectorAll(".theme-logo");
const root = document.documentElement;

function updateThemeLogos(theme) {
  themeLogos.forEach((logo) => {
    const nextSrc = theme === "light" ? logo.dataset.lightSrc : logo.dataset.darkSrc;
    if (nextSrc && logo.getAttribute("src") !== nextSrc) {
      logo.setAttribute("src", nextSrc);
    }
  });
}

function updateThemeToggle(theme) {
  if (!themeToggle) return;

  const isLight = theme === "light";
  themeToggle.setAttribute("aria-pressed", String(isLight));
  themeToggle.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
}

function setTheme(theme, { persist = true } = {}) {
  root.dataset.theme = theme;
  updateThemeLogos(theme);
  updateThemeToggle(theme);

  if (persist) {
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch (error) {
      console.warn("Theme preference could not be saved.", error);
    }
  }
}

updateThemeLogos(root.dataset.theme || "dark");
updateThemeToggle(root.dataset.theme || "dark");

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
  setTheme(nextTheme);
});

function hidePageLoader() {
  if (!pageLoader) return;

  pageLoader.classList.add("is-hidden");
  pageLoader.setAttribute("aria-hidden", "true");

  window.setTimeout(() => {
    pageLoader.remove();
  }, 800);
}

window.addEventListener("load", () => {
  window.setTimeout(hidePageLoader, 450);
});

window.setTimeout(hidePageLoader, 3500);

function addClasses(selector, classes) {
  document.querySelectorAll(selector).forEach((element) => {
    element.classList.add(...classes);
  });
}

addClasses(".nav-link", [
  "text-xs",
  "font-bold",
  "uppercase",
  "tracking-[0.18em]",
  "text-soft",
  "transition",
  "duration-300",
  "hover:text-white"
]);

addClasses(".section-tag", [
  "mb-3",
  "inline-block",
  "text-xs",
  "font-extrabold",
  "uppercase",
  "tracking-[0.22em]",
  "text-electric",
  "before:mr-2",
  "before:text-electric/50",
  "before:content-['//']"
]);

addClasses(".section-title", [
  "font-display",
  "text-4xl",
  "font-extrabold",
  "leading-tight",
  "tracking-tight",
  "text-white",
  "sm:text-5xl"
]);

addClasses(".skill-pill", [
  "rounded-md",
  "border",
  "border-white/10",
  "bg-white/[0.03]",
  "px-3",
  "py-2",
  "text-sm",
  "font-semibold",
  "text-soft",
  "transition",
  "duration-300",
  "hover:-translate-y-1",
  "hover:border-electric/50",
  "hover:text-violet-200"
]);

addClasses(".project-card", [
  "group",
  "overflow-hidden",
  "rounded-lg",
  "border",
  "border-white/10",
  "bg-panel",
  "shadow-card",
  "transition",
  "duration-500",
  "will-change-transform",
  "hover:border-electric/40"
]);

addClasses(".project-shot", [
  "relative",
  "aspect-[16/10]",
  "overflow-hidden",
  "border-b",
  "border-white/10",
  "bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.32),transparent_32%),linear-gradient(135deg,rgba(6,182,212,0.22),rgba(251,113,133,0.12)_45%,rgba(18,18,20,1))]"
]);

addClasses(".project-img", [
  "h-full",
  "w-full",
  "object-cover",
  "transition",
  "duration-700",
  "group-hover:scale-105"
]);

addClasses(".project-fallback", [
  "absolute",
  "inset-4",
  "grid",
  "place-items-center",
  "rounded-md",
  "border",
  "border-dashed",
  "border-white/20",
  "bg-ink/45",
  "p-5",
  "text-center",
  "font-mono",
  "text-xs",
  "leading-6",
  "text-zinc-300"
]);

addClasses(".project-kicker", [
  "font-display",
  "text-xs",
  "font-extrabold",
  "uppercase",
  "tracking-[0.18em]",
  "text-electric"
]);

addClasses(".project-title", [
  "mt-2",
  "font-display",
  "text-2xl",
  "font-extrabold",
  "tracking-tight",
  "text-white"
]);

addClasses(".project-copy", [
  "mt-3",
  "text-sm",
  "leading-7",
  "text-soft"
]);

addClasses(".project-problem", [
  "mt-5",
  "rounded-md",
  "border",
  "border-electric/20",
  "bg-electric/10",
  "p-4",
  "text-sm",
  "leading-7",
  "text-violet-200"
]);

addClasses(".project-problem strong", [
  "mb-1",
  "block",
  "text-xs",
  "font-extrabold",
  "uppercase",
  "tracking-[0.18em]",
  "text-violet-300"
]);

addClasses(".project-stack", [
  "mt-5",
  "flex",
  "flex-wrap",
  "gap-2"
]);

addClasses(".project-stack span", [
  "rounded",
  "bg-white/[0.06]",
  "px-2.5",
  "py-1",
  "text-xs",
  "font-semibold",
  "text-soft"
]);

addClasses(".project-actions", [
  "mt-6",
  "flex",
  "flex-wrap",
  "gap-3"
]);

addClasses(".project-link-primary", [
  "rounded-md",
  "bg-electric",
  "px-4",
  "py-2.5",
  "font-display",
  "text-xs",
  "font-bold",
  "text-white",
  "shadow-glow",
  "transition",
  "hover:-translate-y-0.5",
  "hover:bg-violet-500"
]);

addClasses(".project-link-secondary", [
  "rounded-md",
  "border",
  "border-white/10",
  "px-4",
  "py-2.5",
  "font-display",
  "text-xs",
  "font-bold",
  "text-soft",
  "transition",
  "hover:-translate-y-0.5",
  "hover:border-white/30",
  "hover:text-white"
]);

addClasses(".service-card", [
  "rounded-lg",
  "border",
  "border-white/10",
  "bg-panel",
  "p-5",
  "transition",
  "duration-300",
  "hover:-translate-y-2",
  "hover:border-electric/40",
  "hover:shadow-glow"
]);

addClasses(".service-icon", [
  "mb-5",
  "flex",
  "h-11",
  "w-11",
  "items-center",
  "justify-center",
  "rounded-md",
  "border",
  "border-electric/20",
  "bg-electric/10",
  "font-display",
  "text-sm",
  "font-extrabold",
  "text-violet-200"
]);

addClasses(".service-card h3", [
  "font-display",
  "text-base",
  "font-bold",
  "text-white"
]);

addClasses(".service-card p", [
  "mt-3",
  "text-sm",
  "leading-6",
  "text-soft"
]);

addClasses(".step-card", [
  "rounded-lg",
  "border",
  "border-white/10",
  "bg-panel/70",
  "p-5",
  "transition",
  "duration-300",
  "hover:-translate-y-2",
  "hover:border-cyanpop/40"
]);

addClasses(".step-card span", [
  "font-display",
  "text-sm",
  "font-extrabold",
  "text-cyanpop"
]);

addClasses(".step-card h3", [
  "mt-4",
  "font-display",
  "font-bold",
  "text-white"
]);

addClasses(".step-card p", [
  "mt-2",
  "text-sm",
  "leading-6",
  "text-soft"
]);

addClasses(".stat-card", [
  "bg-panel",
  "p-10",
  "text-center",
  "transition",
  "duration-300",
  "hover:bg-zinc-900"
]);

addClasses(".stat-num", [
  "bg-gradient-to-r",
  "from-violet-300",
  "to-cyan-200",
  "bg-clip-text",
  "font-display",
  "text-6xl",
  "font-extrabold",
  "tracking-tight",
  "text-transparent"
]);

addClasses(".stat-card p", [
  "mt-3",
  "text-sm",
  "font-semibold",
  "uppercase",
  "tracking-[0.18em]",
  "text-soft"
]);

addClasses(".reveal", [
  "opacity-0",
  "translate-y-8",
  "transition",
  "duration-700",
  "ease-out",
  "motion-reduce:translate-y-0",
  "motion-reduce:opacity-100"
]);

const mobileMenuClasses = [
  "fixed",
  "inset-x-4",
  "top-20",
  "z-40",
  "flex",
  "flex-col",
  "rounded-lg",
  "border",
  "border-white/10",
  "bg-ink/95",
  "p-6",
  "shadow-card",
  "backdrop-blur-2xl",
  "mobile-menu-panel"
];

let mobileMenuCloseTimer;

function openMenu() {
  window.clearTimeout(mobileMenuCloseTimer);
  navToggle.classList.add("is-open");
  navToggle.setAttribute("aria-expanded", "true");
  navLinks.classList.remove("hidden", "mobile-menu-closing");
  navLinks.classList.toggle("md:flex", true);
  navLinks.classList.add(...mobileMenuClasses);
}

function closeMenu({ animate = true } = {}) {
  window.clearTimeout(mobileMenuCloseTimer);
  navToggle.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");

  if (!animate || navLinks.classList.contains("hidden")) {
    navLinks.classList.add("hidden");
    navLinks.classList.remove(...mobileMenuClasses, "mobile-menu-closing");
    return;
  }

  navLinks.classList.add("mobile-menu-closing");

  mobileMenuCloseTimer = window.setTimeout(() => {
    navLinks.classList.add("hidden");
    navLinks.classList.remove(...mobileMenuClasses, "mobile-menu-closing");
  }, 260);
}

navToggle.addEventListener("click", () => {
  if (navToggle.classList.contains("is-open")) {
    closeMenu();
  } else {
    openMenu();
  }
});

document.querySelectorAll("#navLinks a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", () => {
  navbar.classList.toggle("bg-ink/95", window.scrollY > 40);
  navbar.classList.toggle("py-3", window.scrollY > 40);
  navbar.classList.toggle("shadow-card", window.scrollY > 40);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove("opacity-0", "translate-y-8");
      entry.target.classList.add("opacity-100", "translate-y-0");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

function animateCounter(element) {
  const target = Number(element.dataset.target || 0);
  const suffix = element.dataset.suffix || "";
  const duration = 1800;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = `${Math.round(eased * target)}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.45 }
);

document.querySelectorAll("[data-target]").forEach((counter) => {
  counterObserver.observe(counter);
});

const projectCarouselTrack = document.getElementById("projectCarouselTrack");
const projectSlides = projectCarouselTrack ? Array.from(projectCarouselTrack.querySelectorAll(".project-slide")) : [];
const projectCarouselPrev = document.querySelector("[data-project-carousel-prev]");
const projectCarouselNext = document.querySelector("[data-project-carousel-next]");
const projectCarouselDots = document.querySelector(".project-carousel-dots");
const projectCarouselCurrent = document.getElementById("projectCarouselCurrent");
const projectCarouselTotal = document.getElementById("projectCarouselTotal");
let activeProjectSlide = 0;
let projectSwipeStartX = 0;
let projectSwipeStartY = 0;
let projectSwipeDeltaX = 0;
let projectSwipePointerId = null;
let isProjectSwipeDragging = false;

function formatProjectNumber(number) {
  return String(number).padStart(2, "0");
}

function updateProjectCarousel() {
  if (!projectCarouselTrack || !projectSlides.length) return;

  projectCarouselTrack.style.transform = `translateX(-${activeProjectSlide * 100}%)`;

  projectSlides.forEach((slide, index) => {
    const isActive = index === activeProjectSlide;
    slide.setAttribute("aria-hidden", String(!isActive));
    slide.tabIndex = isActive ? 0 : -1;
    slide.querySelectorAll("a, button").forEach((control) => {
      control.tabIndex = isActive ? 0 : -1;
    });
  });

  projectCarouselDots?.querySelectorAll(".project-carousel-dot").forEach((dot, index) => {
    dot.classList.toggle("is-active", index === activeProjectSlide);
    dot.setAttribute("aria-current", index === activeProjectSlide ? "true" : "false");
  });

  if (projectCarouselCurrent) {
    projectCarouselCurrent.textContent = formatProjectNumber(activeProjectSlide + 1);
  }
}

function goToProjectSlide(index) {
  if (!projectSlides.length) return;
  activeProjectSlide = (index + projectSlides.length) % projectSlides.length;
  updateProjectCarousel();
}

function setProjectCarouselDragging(isDragging) {
  if (!projectCarouselTrack) return;
  projectCarouselTrack.classList.toggle("is-dragging", isDragging);
}

function resetProjectCarouselSwipe() {
  projectSwipePointerId = null;
  projectSwipeDeltaX = 0;
  isProjectSwipeDragging = false;
  setProjectCarouselDragging(false);
}

function cancelProjectCarouselSwipe() {
  resetProjectCarouselSwipe();
  updateProjectCarousel();
}

if (projectSlides.length) {
  if (projectCarouselTotal) {
    projectCarouselTotal.textContent = formatProjectNumber(projectSlides.length);
  }

  projectSlides.forEach((slide, index) => {
    const dot = document.createElement("button");
    dot.className = "project-carousel-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Show project ${index + 1}`);
    dot.addEventListener("click", () => goToProjectSlide(index));
    projectCarouselDots?.appendChild(dot);
  });

  projectCarouselPrev?.addEventListener("click", () => goToProjectSlide(activeProjectSlide - 1));
  projectCarouselNext?.addEventListener("click", () => goToProjectSlide(activeProjectSlide + 1));

  projectCarouselTrack.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    projectSwipePointerId = event.pointerId;
    projectSwipeStartX = event.clientX;
    projectSwipeStartY = event.clientY;
    projectSwipeDeltaX = 0;
    isProjectSwipeDragging = true;
    setProjectCarouselDragging(true);
    projectCarouselTrack.setPointerCapture(event.pointerId);
  });

  projectCarouselTrack.addEventListener("pointermove", (event) => {
    if (!isProjectSwipeDragging || event.pointerId !== projectSwipePointerId) return;

    projectSwipeDeltaX = event.clientX - projectSwipeStartX;
    const deltaY = event.clientY - projectSwipeStartY;

    if (Math.abs(projectSwipeDeltaX) <= Math.abs(deltaY)) return;

    const viewportWidth = projectCarouselTrack.getBoundingClientRect().width || 1;
    const dragOffset = (projectSwipeDeltaX / viewportWidth) * 100;
    projectCarouselTrack.style.transform = `translateX(calc(-${activeProjectSlide * 100}% + ${dragOffset}%))`;
  });

  projectCarouselTrack.addEventListener("pointerup", (event) => {
    if (!isProjectSwipeDragging || event.pointerId !== projectSwipePointerId) return;

    const deltaY = event.clientY - projectSwipeStartY;
    const swipeThreshold = Math.min(90, (projectCarouselTrack.getBoundingClientRect().width || 1) * 0.18);
    const isHorizontalSwipe = Math.abs(projectSwipeDeltaX) > Math.abs(deltaY) && Math.abs(projectSwipeDeltaX) > swipeThreshold;

    const nextSlide = activeProjectSlide + (projectSwipeDeltaX < 0 ? 1 : -1);
    resetProjectCarouselSwipe();

    if (isHorizontalSwipe) {
      goToProjectSlide(nextSlide);
    } else {
      updateProjectCarousel();
    }
  });

  projectCarouselTrack.addEventListener("pointercancel", cancelProjectCarouselSwipe);
  projectCarouselTrack.addEventListener("lostpointercapture", resetProjectCarouselSwipe);

  projectCarouselTrack.closest(".project-carousel")?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      goToProjectSlide(activeProjectSlide - 1);
    }

    if (event.key === "ArrowRight") {
      goToProjectSlide(activeProjectSlide + 1);
    }
  });

  updateProjectCarousel();
}

document.querySelectorAll(".project-img").forEach((image) => {
  image.addEventListener("error", () => {
    if (!image.nextElementSibling) return;
    image.classList.add("hidden");
    image.nextElementSibling.classList.remove("hidden");
  });

  image.addEventListener("load", () => {
    if (!image.nextElementSibling) return;
    image.nextElementSibling.classList.add("hidden");
  });
});

if (contactForm && submitBtn) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const originalText = btnText ? btnText.textContent : submitBtn.textContent;

    if (btnText) {
      btnText.textContent = "Sending...";
    } else {
      submitBtn.textContent = "Sending...";
    }
    submitBtn.disabled = true;
    submitBtn.classList.remove("is-success", "is-error");

    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        if (btnText) {
          btnText.textContent = "Message Sent";
        } else {
          submitBtn.textContent = "Message Sent";
        }
        submitBtn.classList.add("is-success");

        contactForm.reset();

        setTimeout(() => {
          if (btnText) {
            btnText.textContent = originalText;
          } else {
            submitBtn.textContent = originalText;
          }
          submitBtn.disabled = false;
          submitBtn.classList.remove("is-success");
        }, 2200);

      } else {
        throw new Error("Form submission failed");
      }

    } catch (error) {
      if (btnText) {
        btnText.textContent = "Failed. Try Again";
      } else {
        submitBtn.textContent = "Failed. Try Again";
      }
      submitBtn.disabled = false;
      submitBtn.classList.add("is-error");

      setTimeout(() => {
        if (btnText) {
          btnText.textContent = originalText;
        } else {
          submitBtn.textContent = originalText;
        }
        submitBtn.classList.remove("is-error");
      }, 2200);

      console.error(error);
    }
  });
}

document.querySelectorAll(".project-card").forEach((card) => {
  if (card.closest(".project-carousel")) return;

  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -10;
    card.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) translateY(-6px)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});
