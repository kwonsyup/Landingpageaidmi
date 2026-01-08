import { useEffect } from "react";

export default function useLandingInteractions() {
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    // Header scroll effect
    const header = document.getElementById("main-header");
    const onScroll = () => {
      if (!header) return;
      if (window.scrollY > 10) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true, signal });
    onScroll();

    // Video modal functionality
    const videoModal = document.getElementById("videoModal");
    const videoTrigger = document.querySelector<HTMLElement>(".video-trigger");
    const videoClose = document.querySelector<HTMLElement>(".video-modal-close");

    if (videoTrigger && videoModal) {
      videoTrigger.addEventListener(
        "click",
        (e) => {
          e.preventDefault();
          videoModal.classList.add("active");
          document.body.style.overflow = "hidden";
        },
        { signal }
      );
    }

    if (videoClose && videoModal) {
      videoClose.addEventListener(
        "click",
        (e) => {
          e.preventDefault();
          videoModal.classList.remove("active");
          document.body.style.overflow = "";
        },
        { signal }
      );
    }

    if (videoModal) {
      videoModal.addEventListener(
        "click",
        (e) => {
          if (e.target === videoModal) {
            videoModal.classList.remove("active");
            document.body.style.overflow = "";
          }
        },
        { signal }
      );

      document.addEventListener(
        "keydown",
        (e) => {
          if (e.key === "Escape" && videoModal.classList.contains("active")) {
            videoModal.classList.remove("active");
            document.body.style.overflow = "";
          }
        },
        { signal }
      );
    }

    // Contact modal functionality
    const contactModal = document.getElementById("contactModal");
    const contactTriggers = document.querySelectorAll<HTMLElement>(".contact-trigger");
    const contactClose = document.querySelector<HTMLElement>(".contact-modal-close");
    const contactForm = document.getElementById("contactForm") as HTMLFormElement | null;

    if (contactModal) {
      contactTriggers.forEach((trigger) => {
        trigger.addEventListener(
          "click",
          (e) => {
            e.preventDefault();
            contactModal.classList.add("active");
            document.body.style.overflow = "hidden";
          },
          { signal }
        );
      });

      if (contactClose) {
        contactClose.addEventListener(
          "click",
          (e) => {
            e.preventDefault();
            contactModal.classList.remove("active");
            document.body.style.overflow = "";
          },
          { signal }
        );
      }

      contactModal.addEventListener(
        "click",
        (e) => {
          if (e.target === contactModal) {
            contactModal.classList.remove("active");
            document.body.style.overflow = "";
          }
        },
        { signal }
      );

      document.addEventListener(
        "keydown",
        (e) => {
          if (e.key === "Escape" && contactModal.classList.contains("active")) {
            contactModal.classList.remove("active");
            document.body.style.overflow = "";
          }
        },
        { signal }
      );
    }

    // Handle form submission
    if (contactForm && contactModal) {
      contactForm.addEventListener(
        "submit",
        (e) => {
          e.preventDefault();

          const formData = new FormData(contactForm);
          const data = Object.fromEntries(formData.entries());

          // TEMPORARY: For demo purposes only
          // (matches the HTML behavior)
          // eslint-disable-next-line no-console
          console.log("Form submitted:", data);
          alert(
            "Welcome to AidMi! Check your email to complete your free account setup."
          );

          contactModal.classList.remove("active");
          document.body.style.overflow = "";
          contactForm.reset();
        },
        { signal }
      );
    }

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector<HTMLElement>(".mobile-menu-toggle");
    const mobileMenu = document.querySelector<HTMLElement>(".mobile-menu");

    if (mobileMenuToggle && mobileMenu) {
      mobileMenuToggle.addEventListener(
        "click",
        () => {
          mobileMenuToggle.classList.toggle("active");
          mobileMenu.classList.toggle("active");
          document.body.style.overflow = mobileMenu.classList.contains("active") ? "hidden" : "";
        },
        { signal }
      );
    }

    // Desktop dropdown navigation
    const dropdownItems = document.querySelectorAll<HTMLElement>(".has-dropdown");
    dropdownItems.forEach((item) => {
      item.addEventListener("mouseenter", () => item.classList.add("open"), { signal });
      item.addEventListener("mouseleave", () => item.classList.remove("open"), { signal });
    });

    // Interactive Feature Switcher (How It Works)
    const stepItems = document.querySelectorAll<HTMLElement>(".step-item");
    const visualContents = document.querySelectorAll<HTMLElement>(".visual-content");

    stepItems.forEach((step) => {
      step.addEventListener(
        "click",
        () => {
          const stepType = step.getAttribute("data-step");
          if (!stepType) return;

          stepItems.forEach((s) => s.classList.remove("active"));
          visualContents.forEach((v) => v.classList.remove("active"));

          step.classList.add("active");
          document.querySelector<HTMLElement>(`[data-visual="${stepType}"]`)?.classList.add("active");
        },
        { signal }
      );
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll<HTMLElement>(".faq-item");
    faqItems.forEach((item) => {
      const question = item.querySelector<HTMLElement>(".faq-question");
      if (!question) return;

      question.addEventListener(
        "click",
        () => {
          const isActive = item.classList.contains("active");

          // Close all items and update aria-expanded
          faqItems.forEach((i) => {
            i.classList.remove("active");
            const btn = i.querySelector<HTMLElement>(".faq-question");
            if (btn) btn.setAttribute("aria-expanded", "false");
          });

          // Open clicked item if it wasn't active
          if (!isActive) {
            item.classList.add("active");
            question.setAttribute("aria-expanded", "true");
          }
        },
        { signal }
      );
    });

    // Smooth scroll for anchor links
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener(
        "click",
        (e) => {
          const href = anchor.getAttribute("href");
          if (!href || href === "#") return;

          const target = document.querySelector<HTMLElement>(href);
          if (!target) return;

          e.preventDefault();

          const headerOffset = 100;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          // Close mobile menu if open
          if (mobileMenu && mobileMenuToggle && mobileMenu.classList.contains("active")) {
            mobileMenuToggle.classList.remove("active");
            mobileMenu.classList.remove("active");
            document.body.style.overflow = "";
          }
        },
        { signal }
      );
    });

    return () => controller.abort();
  }, []);
}