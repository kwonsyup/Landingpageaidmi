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
    const videoWrapper = document.getElementById("videoWrapper");
    const videoPlaceholder = videoWrapper?.querySelector<HTMLElement>(".video-placeholder-state");
    const videoBackdrop = videoModal?.querySelector<HTMLElement>(".video-modal-backdrop");
    
    let videoIframe: HTMLIFrameElement | null = null;

    const openVideoModal = () => {
      if (!videoModal) return;
      videoModal.classList.add("active");
      document.body.style.overflow = "hidden";
    };

    const closeVideoModal = () => {
      if (!videoModal) return;
      videoModal.classList.remove("active");
      document.body.style.overflow = "";
      
      // CRITICAL: Remove iframe to stop video/audio
      if (videoIframe) {
        videoIframe.remove();
        videoIframe = null;
      }
      
      // Show placeholder again
      if (videoPlaceholder) {
        videoPlaceholder.style.display = "flex";
      }
    };

    const loadVideo = () => {
      if (!videoWrapper || videoIframe) return;
      
      // Hide placeholder
      if (videoPlaceholder) {
        videoPlaceholder.style.display = "none";
      }
      
      // Create and insert iframe
      // Replace YOUR_VIDEO_ID with actual YouTube/Vimeo ID
      videoIframe = document.createElement("iframe");
      videoIframe.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0";
      videoIframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      videoIframe.allowFullscreen = true;
      videoWrapper.appendChild(videoIframe);
    };

    if (videoTrigger) {
      videoTrigger.addEventListener("click", (e) => {
        e.preventDefault();
        openVideoModal();
      }, { signal });
    }

    if (videoClose) {
      videoClose.addEventListener("click", (e) => {
        e.preventDefault();
        closeVideoModal();
      }, { signal });
    }

    if (videoBackdrop) {
      videoBackdrop.addEventListener("click", () => {
        closeVideoModal();
      }, { signal });
    }

    // Click placeholder to load video
    if (videoPlaceholder) {
      videoPlaceholder.addEventListener("click", () => {
        loadVideo();
      }, { signal });
    }

    if (videoModal) {
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && videoModal.classList.contains("active")) {
          closeVideoModal();
        }
      }, { signal });
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

          const emailInput = document.getElementById("email") as HTMLInputElement | null;
          const email = emailInput?.value;

          if (email) {
            // Redirect to app signup with email pre-filled
            window.location.href = `https://app.aidmi.com/signup?email=${encodeURIComponent(email)}`;
          } else {
            // Fallback if no email
            contactModal.classList.remove("active");
            document.body.style.overflow = "";
            alert("Check your email to complete signup!");
          }
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

    // Persona Toggle Tabs
    const personaTabs = document.querySelectorAll<HTMLElement>('.persona-tab');
    const personaPanels = document.querySelectorAll<HTMLElement>('.persona-panel');

    personaTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const persona = tab.getAttribute('data-persona');
        
        // Update tabs
        personaTabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        
        // Update panels
        personaPanels.forEach(panel => {
          panel.classList.remove('active');
          if (panel.getAttribute('data-panel') === persona) {
            panel.classList.add('active');
          }
        });
      }, { signal });
    });

    // Billing Toggle
    const billingToggle = document.querySelector<HTMLElement>('.toggle-switch');
    const billingOptions = document.querySelectorAll<HTMLElement>('.billing-option');
    const priceAmount = document.querySelector<HTMLElement>('.pricing-card-pro .pricing-amount');
    const billingDetail = document.querySelector<HTMLElement>('.billing-detail');
    const billingSavings = document.querySelector<HTMLElement>('.billing-savings');

    if (billingToggle) {
      billingToggle.addEventListener('click', () => {
        const currentState = billingToggle.getAttribute('data-state');
        const newState = currentState === 'annual' ? 'monthly' : 'annual';
        
        billingToggle.setAttribute('data-state', newState);
        billingToggle.setAttribute('aria-checked', newState === 'annual' ? 'true' : 'false');
        
        // Update billing option active states
        billingOptions.forEach(opt => {
          opt.classList.remove('billing-option-active');
          if (opt.getAttribute('data-billing') === newState) {
            opt.classList.add('billing-option-active');
          }
        });
        
        // Update price display
        if (priceAmount) {
          const price = priceAmount.getAttribute(`data-${newState}`);
          priceAmount.textContent = `$${price}`;
        }
        
        // Update billing details
        if (billingDetail) {
          billingDetail.textContent = billingDetail.getAttribute(`data-${newState}`) || '';
        }
        if (billingSavings) {
          billingSavings.textContent = billingSavings.getAttribute(`data-${newState}`) || '';
        }
      }, { signal });
    }

    // Scroll-triggered fade-in for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in-section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      controller.abort();
      observer.disconnect();
    };
  }, []);
}