import '../styles/aidmi.css';
import { useState, useEffect } from 'react';
import useLandingInteractions from './hooks/useLandingInteractions';
import aidmiLogo from '../aidmi-logo.svg';

export default function App() {
  const [modalView, setModalView] = useState<'onboarding' | 'login'>('onboarding');
  
  useLandingInteractions();
  
  // Reset modal view when modal closes
  useEffect(() => {
    const contactModal = document.getElementById('contactModal');
    if (!contactModal) return;
    
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const isActive = contactModal.classList.contains('active');
          if (!isActive) {
            setModalView('onboarding');
          }
        }
      });
    });
    
    observer.observe(contactModal, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Header */}
      <header id="main-header">
        <div className="header-container">
          <a href="/" className="logo">
            <img src={aidmiLogo} alt="AidMi" />
          </a>
          <nav>
            <ul>
              <li className="nav-item has-dropdown">
                <a href="#who-its-for">Who we're for</a>
                <div className="nav-dropdown">
                  <div className="nav-dropdown-columns">
                    <div className="nav-dropdown-column">
                      <h4>By Role</h4>
                      <a href="#who-its-for" className="nav-dropdown-link">Psychiatrists & Nurse Practitioners</a>
                      <a href="#who-its-for" className="nav-dropdown-link">Psychologists</a>
                      <a href="#who-its-for" className="nav-dropdown-link">Therapists & Counselors</a>
                      <a href="#who-its-for" className="nav-dropdown-link">All Specialties</a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item has-dropdown">
                <a href="#features">Product</a>
                <div className="nav-dropdown">
                  <div className="nav-dropdown-columns">
                    <div className="nav-dropdown-column">
                      <h4>Core Features</h4>
                      <a href="#features" className="nav-dropdown-link">Today&apos;s Brief</a>
                      <a href="#features" className="nav-dropdown-link">Aimé Q&A</a>
                      <a href="#features" className="nav-dropdown-link">Evidence-Backed Scribe</a>
                    </div>
                    <div className="nav-dropdown-column">
                      <h4>Integrations</h4>
                      <a href="#features" className="nav-dropdown-link">Electronic Health Record (EHR)</a>
                      <a href="#features" className="nav-dropdown-link">Telehealth</a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a href="#pricing">Pricing</a>
              </li>
              <li className="nav-item">
                <a href="#faq">Resources</a>
              </li>
            </ul>
          </nav>
          <div className="header-cta">
            <a href="https://app.aidmi.com/login" className="nav-signin">Sign In</a>
            <a href="#" className="btn btn-primary contact-trigger">Get AidMi Free</a>
            <button className="mobile-menu-toggle" aria-label="Toggle mobile menu">
              <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <div className="mobile-menu-section">
          <h4>Who we're for</h4>
          <a href="#who-its-for">Psychiatrists & Nurse Practitioners</a>
          <a href="#who-its-for">Psychologists</a>
          <a href="#who-its-for">Therapists & Counselors</a>
          <a href="#who-its-for">All Specialties</a>
        </div>
        <div className="mobile-menu-section">
          <h4>Product</h4>
          <a href="#features">Today&apos;s Brief</a>
          <a href="#features">Aimé Q&A</a>
          <a href="#features">Evidence-Backed Scribe</a>
          <a href="#pricing">Pricing</a>
          <a href="#features">EHR Integrations</a>
        </div>
        <div className="mobile-menu-section">
          <a href="#faq">Resources</a>
        </div>
        <div className="mobile-menu-cta">
          <a href="https://app.aidmi.com/login" className="btn btn-secondary btn-large">Sign In</a>
          <a href="#" className="btn btn-primary btn-large contact-trigger">Get AidMi Free</a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="hero-glow hero-glow-3"></div>
        
        <div className="container">
          <div className="hero-layout">
            <div className="hero-content">
              <h1>The AI That <em>Briefs</em> You Before Your Patient Walks In.</h1>
              
              <p className="hero-subhead">
                Know every patient's story before you meet. AidMi bridges the gap between sessions and builds a brief — what changed, what to follow up on, what matters today.
              </p>
              
              <div className="hero-buttons">
                <a href="#" className="btn btn-primary btn-large contact-trigger">Get AidMi Free</a>
                <button className="btn btn-secondary btn-large video-trigger">
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "18px", height: "18px", marginRight: "8px" }}>
                    <path d="M8 5V19L19 12L8 5Z" />
                  </svg>
                  Watch Demo
                </button>
              </div>
              

              <div className="hero-trust-text">
                <svg viewBox="0 0 24 24" fill="currentColor" className="trust-icon">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                </svg>
                <span>HIPAA Compliant · BAA Included · AES-256 Encrypted</span>
              </div>
              
              {/* Integration Strip - Sidebar Cluster */}
              <div className="integration-strip">
                <span className="integration-label">Works alongside your EHR</span>
                <div className="integration-logos">
                  <div className="integration-logo-text logo-simplepractice">
                    <span>Simple</span><span className="logo-bold">Practice</span>
                  </div>
                  <div className="integration-logo-text logo-therapynotes">
                    <span>Therapy</span><span className="logo-bold">Notes</span>
                  </div>
                  <div className="integration-logo-text logo-valant">
                    Valant
                  </div>
                  <div className="integration-logo-text logo-theranest">
                    <span>Thera</span><span className="logo-bold">Nest</span>
                  </div>
                  <div className="integration-logo-text logo-icanotes">
                    <span>ICA</span><span className="logo-bold">Notes</span>
                  </div>
                </div>
              </div>
            </div>

{/* Hero Visual - Coded Today's Brief Mockup */}
            <div className="hero-visual">
              <div className="hero-mockup-wrapper">
                <div className="hero-mockup-frame">
                  {/* App Chrome / Window Frame */}
                  <div className="mockup-chrome">
                    <div className="chrome-dots">
                      <span className="chrome-dot chrome-dot-red"></span>
                      <span className="chrome-dot chrome-dot-yellow"></span>
                      <span className="chrome-dot chrome-dot-green"></span>
                    </div>
                    <div className="chrome-title">
                      <svg className="chrome-logo" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/>
                      </svg>
                      <span>AidMi</span>
                    </div>
                    <div className="chrome-actions">
                      <span className="chrome-time">2:15 PM</span>
                      <span className="chrome-next-session">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                        Next: 15 min
                      </span>
                    </div>
                  </div>

                  {/* Patient Header - COMPACT VERSION */}
                  <div className="mockup-patient-header">
                    <div className="patient-info">
                      <div className="patient-avatar patient-avatar-teal">
                        <span>SC</span>
                      </div>
                      <div className="patient-details-inline">
                        <span className="patient-name">Sarah Chen</span>
                        <span className="patient-meta-inline">
                          <span className="meta-diagnosis">PTSD + Adjustment</span>
                          <span className="meta-dot">·</span>
                          <span className="meta-session">#8</span>
                        </span>
                      </div>
                    </div>
                    <div className="patient-badges-compact">
                      <span className="badge-status badge-stabilizing">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                        Stabilizing
                      </span>
                      <span className="badge-time">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                        15 min
                      </span>
                    </div>
                  </div>

                  {/* Today's Brief Card - UNIQUE DATA */}
                  <div className="mockup-brief-card">
                    <div className="brief-card-header">
                      <div className="brief-title-row">
                        <svg className="brief-icon" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                        </svg>
                        <h3>Today&apos;s Brief</h3>
                      </div>
                      <span className="brief-updated">Updated 4 min ago</span>
                    </div>

                    {/* Clinical Sections - ALL DIFFERENT FROM BENTO */}
                    <div className="brief-sections">
                      {/* Current Status - PCL-5 for trauma (not GAD-7) */}
                      <div className="brief-section-row">
                        <div className="section-indicator indicator-blue"></div>
                        <div className="section-content">
                          <h5>Current Status</h5>
                          <p>
                            <span className="metric metric-positive">PCL-5: 48 → 32</span>
                            <span className="metric-sep">·</span>
                            <span className="metric metric-positive">PHQ-9: 14 → 9</span>
                            <span className="metric-sep">·</span>
                            <span className="metric-text">First full week without nightmares</span>
                          </p>
                        </div>
                      </div>

                      {/* Recent Stressors - Healthcare worker (not tech) */}
                      <div className="brief-section-row">
                        <div className="section-indicator indicator-orange"></div>
                        <div className="section-content">
                          <h5>Recent Stressors</h5>
                          <p>Pediatric code last month · Understaffed ER unit · 12-hour night shifts</p>
                        </div>
                      </div>

                      {/* Symptom Patterns - Trauma symptoms (not sleep/stress) */}
                      <div className="brief-section-row">
                        <div className="section-indicator indicator-purple"></div>
                        <div className="section-content">
                          <h5>Symptom Patterns</h5>
                          <p>
                            <span className="metric metric-positive">Hypervigilance: 7/10 → 4/10</span>
                            <span className="metric-sep">·</span>
                            <span className="metric metric-positive">Intrusions: daily → 2x/week</span>
                          </p>
                        </div>
                      </div>

                      {/* What's Helping - EMDR (not PMR/yoga) */}
                      <div className="brief-section-row">
                        <div className="section-indicator indicator-green"></div>
                        <div className="section-content">
                          <h5>What&apos;s Helping</h5>
                          <p>EMDR processing · 5-4-3-2-1 grounding · Bedtime journaling · Dog walks</p>
                        </div>
                      </div>
                    </div>

                    {/* Rapport Anchors - COMPLETELY DIFFERENT interests */}
                    <div className="brief-rapport-compact">
                      <div className="rapport-compact-header">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                        <span>Rapport Anchors</span>
                      </div>
                      <div className="rapport-tags">
                        <span className="rapport-tag">🐕 Golden retriever Max</span>
                        <span className="rapport-tag">📚 True crime podcasts</span>
                        <span className="rapport-tag">🎨 Watercolor painting</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Aimé Bubble - DIFFERENT QUERY */}
                  <div className="mockup-aime-bubble">
                    <div className="aime-bubble-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/>
                      </svg>
                    </div>
                    <div className="aime-bubble-content">
                      <span className="aime-label">Aimé</span>
                      <p>&quot;Nightmares improved after session #5 when EMDR began...&quot;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip (Marquee) */}
      <section className="trust-strip">
        <div className="trust-label">Co-designed with clinicians from:</div>
        <div className="marquee">
          <div className="marquee-content">
            <div className="partner-logo">
              <svg viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                  <rect x="0" y="10" width="2" height="12" rx="1"/>
                  <rect x="4" y="10" width="2" height="12" rx="1"/>
                  <path d="M10 15.5C10 13.567 11.567 12 13.5 12H14.5C16.433 12 18 13.567 18 15.5C18 17.433 16.433 19 14.5 19H13.5C11.567 19 10 17.433 10 15.5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <text x="22" y="20" fontSize="13" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif" fill="currentColor">Stanford Medicine</text>
                </g>
              </svg>
            </div>
            <div className="partner-logo">
              <svg viewBox="0 0 150 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                  <circle cx="8" cy="16" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M5 16L7 18L11 14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <text x="18" y="20" fontSize="13" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif" fill="currentColor">Kaiser Permanente</text>
                </g>
              </svg>
            </div>
            <div className="partner-logo">
              <svg viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                  <path d="M6 16L10 12L14 16L10 20L6 16Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
                  <text x="18" y="20" fontSize="13" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif" fill="currentColor">UCSF Health</text>
                </g>
              </svg>
            </div>
            <div className="partner-logo">
              <svg viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                  <path d="M4 20C4 18 6 12 10 12C14 12 16 18 16 20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <circle cx="10" cy="14" r="2" fill="currentColor"/>
                  <text x="20" y="20" fontSize="13" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif" fill="currentColor">Sutter Health</text>
                </g>
              </svg>
            </div>
            <div className="partner-logo">
              <svg viewBox="0 0 150 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                  <rect x="4" y="11" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M7 11V9C7 8.44772 7.44772 8 8 8H12C12.5523 8 13 8.44772 13 9V11" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <text x="20" y="20" fontSize="13" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif" fill="currentColor">The Wright Institute</text>
                </g>
              </svg>
            </div>
            <div className="partner-logo">
              <svg viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                  <path d="M10 12C12.2091 12 14 13.7909 14 16C14 18.2091 12.2091 20 10 20C7.79086 20 6 18.2091 6 16C6 13.7909 7.79086 12 10 12Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="10" cy="16" r="1.5" fill="currentColor"/>
                  <text x="18" y="20" fontSize="13" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif" fill="currentColor">One Medical</text>
                </g>
              </svg>
            </div>
            <div className="partner-logo">
              <svg viewBox="0 0 180 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                  <circle cx="10" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M10 13V16M10 16V19M10 16H13M10 16H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <text x="20" y="20" fontSize="13" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif" fill="currentColor">Mindful Health Solutions</text>
                </g>
              </svg>
            </div>
          </div>
          <div className="marquee-content" aria-hidden="true">
            <div className="partner-logo">
              <svg viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                  <rect x="0" y="10" width="2" height="12" rx="1"/>
                  <rect x="4" y="10" width="2" height="12" rx="1"/>
                  <path d="M10 15.5C10 13.567 11.567 12 13.5 12H14.5C16.433 12 18 13.567 18 15.5C18 17.433 16.433 19 14.5 19H13.5C11.567 19 10 17.433 10 15.5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <text x="22" y="20" fontSize="13" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif" fill="currentColor">Stanford Medicine</text>
                </g>
              </svg>
            </div>
            <div className="partner-logo">
              <svg viewBox="0 0 150 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                  <circle cx="8" cy="16" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M5 16L7 18L11 14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <text x="18" y="20" fontSize="13" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif" fill="currentColor">Kaiser Permanente</text>
                </g>
              </svg>
            </div>
            <div className="partner-logo">
              <svg viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                  <path d="M6 16L10 12L14 16L10 20L6 16Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
                  <text x="18" y="20" fontSize="13" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif" fill="currentColor">UCSF Health</text>
                </g>
              </svg>
            </div>
            <div className="partner-logo">
              <svg viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                  <path d="M4 20C4 18 6 12 10 12C14 12 16 18 16 20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <circle cx="10" cy="14" r="2" fill="currentColor"/>
                  <text x="20" y="20" fontSize="13" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif" fill="currentColor">Sutter Health</text>
                </g>
              </svg>
            </div>
            <div className="partner-logo">
              <svg viewBox="0 0 150 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                  <rect x="4" y="11" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M7 11V9C7 8.44772 7.44772 8 8 8H12C12.5523 8 13 8.44772 13 9V11" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <text x="20" y="20" fontSize="13" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif" fill="currentColor">The Wright Institute</text>
                </g>
              </svg>
            </div>
            <div className="partner-logo">
              <svg viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                  <path d="M10 12C12.2091 12 14 13.7909 14 16C14 18.2091 12.2091 20 10 20C7.79086 20 6 18.2091 6 16C6 13.7909 7.79086 12 10 12Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="10" cy="16" r="1.5" fill="currentColor"/>
                  <text x="18" y="20" fontSize="13" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif" fill="currentColor">One Medical</text>
                </g>
              </svg>
            </div>
            <div className="partner-logo">
              <svg viewBox="0 0 180 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor">
                  <circle cx="10" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M10 13V16M10 16V19M10 16H13M10 16H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <text x="20" y="20" fontSize="13" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif" fill="currentColor">Mindful Health Solutions</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section fade-in-section">
        <div className="container">
          <div className="section-header">
            <h2>Your notes are a filing cabinet.<br />Your brain does all the work.</h2>
            <p className="section-subhead">
              Current tools store information. AidMi surfaces it when you need it.
            </p>
          </div>

          <div className="before-after-card">
            {/* BEFORE (Problem) */}
            <div className="before-column">
              <div className="column-label">
                <svg viewBox="0 0 24 24" fill="currentColor" className="label-icon">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
                <span>Without AidMi</span>
              </div>
              
              <h3 className="column-title">The Pre-Session Scramble</h3>
              
              <ul className="problem-list">
                <li>
                  {/* Clock icon - time pressure */}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" opacity="0.2"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                  <div>
                    <strong>Skimming old notes 10 minutes before the session</strong>
                    <span>Trying to remember: "What did we adjust last time?"</span>
                  </div>
                </li>
                <li>
                  {/* Search icon - can't find */}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" opacity="0.2"/>
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                  <div>
                    <strong>No quick way to find critical context</strong>
                    <span>"Was the insomnia before or after the job loss?"</span>
                  </div>
                </li>
                <li>
                  {/* Question mark icon - uncertainty */}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" opacity="0.2"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                  </svg>
                  <div>
                    <strong>Walking in cold, relying on memory</strong>
                    <span>Patients notice when you've forgotten what matters to them</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* AFTER (Solution) */}
            <div className="after-column">
              <div className="column-label">
                <svg viewBox="0 0 24 24" fill="currentColor" className="label-icon">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>With AidMi</span>
              </div>
              
              <h3 className="column-title">Briefed & Ready</h3>
              
              <ul className="solution-list">
                <li>
                  {/* Document/Brief icon - Today's Brief */}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" opacity="0.15"/>
                    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                  </svg>
                  <div>
                    <strong>Today's Brief auto-generated before each visit</strong>
                    <span>What changed, what to follow up on. Scan in 30 seconds.</span>
                  </div>
                </li>
                <li>
                  {/* Chat/AI icon - Aimé */}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" opacity="0.15"/>
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
                    <circle cx="8" cy="10" r="1.5"/>
                    <circle cx="12" cy="10" r="1.5"/>
                    <circle cx="16" cy="10" r="1.5"/>
                  </svg>
                  <div>
                    <strong>Ask anything about a patient's history</strong>
                    <span>"How was their sleep in September?" → Cited answer, instantly</span>
                  </div>
                </li>
                <li>
                  {/* Shield/confidence icon */}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" opacity="0.15"/>
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                  </svg>
                  <div>
                    <strong>Know the story before they sit down</strong>
                    <span>No more "remind me" moments — you remember what matters</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Props Section */}
      <section id="features" className="value-props fade-in-section">
        <div className="container">
          <div className="section-header">
            <h2>Your AI Clinical Resident</h2>
            <p className="section-subhead">
              Months of context, surfaced in seconds.
            </p>
          </div>

          <div className="bento-grid">
            {/* TODAY'S BRIEF - Wide Card (spans 2 columns) */}
            <div className="bento-card bento-card-wide">
              <div className="bento-card-header">
                <div className="bento-icon bento-icon-brief">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <div className="bento-card-titles">
                  <h3>Today&apos;s Brief</h3>
                  <p className="bento-tagline">Always know what matters.</p>
                </div>
              </div>
              
              <div className="bento-brief-preview">
                {/* Clinical sections */}
                <div className="brief-section">
                  <div className="brief-section-header">
                    <span className="section-dot dot-blue"></span>
                    <h4>Current Status</h4>
                  </div>
                  <p><span className="inline-citation">GAD-7: 12 → 5</span> · <span className="inline-citation">PHQ-9: 4 (↓ from 6)</span> · Patient reports enjoying activities again.</p>
                </div>

                <div className="brief-section">
                  <div className="brief-section-header">
                    <span className="section-dot dot-orange"></span>
                    <h4>Recent Stressors</h4>
                  </div>
                  <p>Senior PM at tech startup · 50-60 hr weeks · Managing better with coping strategies.</p>
                </div>

                <div className="brief-section">
                  <div className="brief-section-header">
                    <span className="section-dot dot-purple"></span>
                    <h4>Symptom Patterns</h4>
                  </div>
                  <p><span className="inline-citation">Sleep: 6-7 hrs (↑ from 4-5)</span> · <span className="inline-citation">Stress: 8/10 → 4/10</span></p>
                </div>

                <div className="brief-section">
                  <div className="brief-section-header">
                    <span className="section-dot dot-green"></span>
                    <h4>What's Helping</h4>
                  </div>
                  <p>PMR daily · Exercise routine · Yoga · <span className="inline-citation">Psych eval scheduled at Stanford BH</span></p>
                </div>

                {/* Divider */}
                <div className="brief-divider"></div>

                {/* Rapport & Friends - Side by side gray zones */}
                <div className="brief-rapport-grid">
                  <div className="brief-rapport-section">
                    <div className="rapport-header">
                      <div className="rapport-icon rapport-icon-pink">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                        </svg>
                      </div>
                      <div className="rapport-title">
                        <h5>Rapport Anchor</h5>
                        <span className="rapport-timestamp">Last updated 5 min ago</span>
                      </div>
                    </div>
                    <ul className="rapport-list">
                      <li>
                        <span className="rapport-emoji">🏀</span>
                        <div>
                          <div className="rapport-text">Enjoys basketball league games on Tuesday evenings<sup className="citation-num">1</sup></div>
                        </div>
                      </li>
                      <li>
                        <span className="rapport-emoji">🧘</span>
                        <div>
                          <div className="rapport-text">Practices yoga at lunchtime to manage work stress<sup className="citation-num">2</sup></div>
                        </div>
                      </li>
                      <li>
                        <span className="rapport-emoji">👋</span>
                        <div>
                          <div className="rapport-text">Sister Emma visiting for holidays<sup className="citation-num">3</sup></div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="brief-rapport-section social-dynamics-section">
                    <div className="rapport-header">
                      <div className="rapport-icon rapport-icon-purple">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                      </div>
                      <div className="rapport-title">
                        <h5>Social Dynamics</h5>
                        <span className="rapport-timestamp">Last updated 3 min ago</span>
                      </div>
                    </div>
                    <div className="social-dynamics-grid">
                      <div className="dynamics-item">
                        <div className="dynamics-icon dynamics-icon-blue">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                          </svg>
                        </div>
                        <div className="dynamics-label">Family</div>
                        <div className="dynamics-status status-supportive">Supportive · 4</div>
                      </div>
                      <div className="dynamics-item">
                        <div className="dynamics-icon dynamics-icon-green">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 16H4V8h16v12z"/>
                          </svg>
                        </div>
                        <div className="dynamics-label">Work</div>
                        <div className="dynamics-status status-stressful">Stressful · 4</div>
                      </div>
                      <div className="dynamics-item">
                        <div className="dynamics-icon dynamics-icon-gray">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                          </svg>
                        </div>
                        <div className="dynamics-label">Social</div>
                        <div className="dynamics-status status-neutral">Neutral · 2</div>
                      </div>
                      <div className="dynamics-item">
                        <div className="dynamics-icon dynamics-icon-rose">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                          </svg>
                        </div>
                        <div className="dynamics-label">Romantic</div>
                        <div className="dynamics-status status-supportive">Supportive · 1</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AIMÉ - Tall Card (spans 2 rows) */}
            <div className="bento-card bento-card-tall">
              <div className="bento-card-header">
                <div className="bento-icon bento-icon-aime">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
                    <circle cx="8" cy="10" r="1.5"/>
                    <circle cx="12" cy="10" r="1.5"/>
                    <circle cx="16" cy="10" r="1.5"/>
                  </svg>
                </div>
                <div className="bento-card-titles">
                  <h3>Aimé</h3>
                  <p className="bento-tagline">Ask anything. Get answers with proof.</p>
                </div>
              </div>
              
              <div className="bento-chat-preview aime-mockup">
                {/* User query bubble */}
                <div className="aime-query">
                  <span>Show recent medication changes</span>
                </div>

                {/* AI response */}
                <div className="aime-response">
                  <div className="aime-response-avatar">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/>
                    </svg>
                  </div>
                  <div className="aime-response-content">
                    <div className="aime-response-label">Key takeaways:</div>
                    <ul className="aime-takeaways">
                      <li>Sertraline recently increased to 100mg daily with good tolerance<sup className="citation-num">1</sup></li>
                      <li>Client reports improved mood stability with minimal side effects<sup className="citation-num">2</sup></li>
                      <li>Sleep quality has improved significantly to 6-7 hours consistently<sup className="citation-num">3</sup></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* AMBIENT DOCUMENTATION - Standard Card (combines Scribe + Evidence-Backed Notes) */}
            <div className="bento-card bento-card-standard">
              <div className="bento-card-header">
                <div className="bento-icon bento-icon-documentation">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" opacity="0.6"/>
                  </svg>
                </div>
                <div className="bento-card-titles">
                  <h3>Evidence-Backed Scribe</h3>
                  <p className="bento-tagline">Every claim linked to the source.</p>
                </div>
              </div>
              
              <div className="bento-documentation-preview scribe-mockup">
                {/* Note content */}
                <div className="scribe-note">
                  <h4 className="scribe-section-title">Assessment</h4>
                  <p className="scribe-text">
                    Client continues to demonstrate steady progress in managing generalized anxiety disorder and mild depression. Medication regimen appears effective with <span className="scribe-cited-text">no reported adverse effects<span className="scribe-citation-trigger">⁸</span></span>. Client is actively engaging in therapeutic interventions...
                  </p>
                  
                  <h4 className="scribe-section-title">Plan</h4>
                  <ul className="scribe-plan-list">
                    <li>Continue current medication regimen (Sertraline 10...</li>
                    <li>Introduce 5-4-3-2-1 grounding technique for acut...</li>
                    <li>Continue daily mindfulness practice (10 minutes m...</li>
                    <li>Maintain sleep and anxiety tracking journal</li>
                  </ul>
                </div>
                
                {/* Citation popup overlay */}
                <div className="scribe-citation-popup">
                  <div className="citation-popup-header">
                    <span className="citation-popup-label">Citation [8]</span>
                    <span className="citation-popup-time">02:48</span>
                  </div>
                  <div className="citation-popup-source">Client</div>
                  <div className="citation-popup-quote">
                    <div className="quote-bar"></div>
                    <p>"The Sertraline seems to be working well. I haven't had any side effects, and I think it's helping level things out."</p>
                  </div>
                  <a className="citation-popup-link">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/>
                    </svg>
                    Click to view in transcript
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section - Persona Toggle */}
      <section id="who-its-for" className="use-cases fade-in-section">
        <div className="container">
          <div className="section-header">
            <h2>Built for How <em>You</em> Practice</h2>
            <p className="section-subhead">Click your role to see how AidMi fits your workflow.</p>
          </div>

          <div className="persona-toggle-container">
            {/* Segmented Control / Tabs */}
            <div className="persona-tabs" role="tablist">
              <button 
                className="persona-tab active" 
                role="tab" 
                aria-selected="true"
                data-persona="psychiatrist"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-4H6v-2h4V7h2v4h4v2h-4v4z"/>
                </svg>
                <span>Psychiatrists</span>
              </button>
              <button 
                className="persona-tab" 
                role="tab" 
                aria-selected="false"
                data-persona="psychologist"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                <span>Psychologists</span>
              </button>
              <button 
                className="persona-tab" 
                role="tab" 
                aria-selected="false"
                data-persona="therapist"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
                </svg>
                <span>Therapists</span>
              </button>
            </div>

            {/* Persona Content Panels */}
            <div className="persona-panels">
              {/* Psychiatrist Panel */}
              <div className="persona-panel active" data-panel="psychiatrist" role="tabpanel">
                <div className="persona-panel-content">
                  <div className="persona-text-content">
                    <div className="persona-header">
                      <span className="persona-emoji">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                          <path d="M19 8h-1V5a3 3 0 00-6 0v3H8a3 3 0 00-3 3v4a9 9 0 0018 0v-4a3 3 0 00-3-3zm-5-3a1 1 0 012 0v3h-2V5zm4 10a7 7 0 01-14 0v-4a1 1 0 011-1h12a1 1 0 011 1v4z"/>
                        </svg>
                      </span>
                      <h3>Speed is everything.</h3>
                    </div>
                    <p className="persona-intro">
                      15-minute med checks. Back-to-back patients. You need the critical info instantly — what changed, what to refill, what to flag.
                    </p>
                    <ul className="persona-benefits">
                      <li>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                        <span>Medication timeline at a glance</span>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                        <span>Today&apos;s Brief ready in 30 seconds</span>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                        <span>Finish notes before your next patient</span>
                      </li>
                    </ul>
                    <blockquote className="persona-quote">
                      &quot;I document between appointments now, not after hours.&quot;
                      <cite>— MD, San Francisco</cite>
                    </blockquote>
                  </div>
                  
                  <div className="persona-visual">
                    <div className="persona-mockup">
                      <div className="mockup-card">
                        <div className="mockup-header">
                          <span className="mockup-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                              <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                            </svg>
                          </span>
                          <div className="mockup-title-group">
                            <div className="mockup-title">Today's Brief</div>
                            <div className="mockup-subtitle">Sarah M. · 9:00 AM</div>
                          </div>
                        </div>
                        <div className="mockup-divider"></div>
                        <div className="mockup-section-label">
                          <span className="section-label-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                              <path d="M4.22 11.29l6.07-6.07a5.006 5.006 0 017.08 0 5.006 5.006 0 010 7.08l-6.07 6.07a5.006 5.006 0 01-7.08 0 5.006 5.006 0 010-7.08zm1.41 1.42a3.004 3.004 0 000 4.24 3.004 3.004 0 004.24 0l2.83-2.83-4.24-4.24-2.83 2.83z"/>
                            </svg>
                          </span>
                          <span>Medication Changes</span>
                        </div>
                        <div className="mockup-med-list">
                          <div className="med-item">
                            <span className="med-name">Lexapro 15mg</span>
                            <span className="med-status med-status-current">Current</span>
                          </div>
                          <div className="med-item">
                            <span className="med-name">Wellbutrin 150mg</span>
                            <span className="med-status med-status-new">+New</span>
                          </div>
                          <div className="med-item">
                            <span className="med-name">Trazodone 50mg</span>
                            <span className="med-status med-status-discontinued">Stopped</span>
                          </div>
                        </div>
                        <div className="mockup-alert">
                          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                          </svg>
                          <span>Flag: Check BP after Wellbutrin add</span>
                        </div>
                        <a className="mockup-link">View full brief →</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Psychologist Panel */}
              <div className="persona-panel" data-panel="psychologist" role="tabpanel">
                <div className="persona-panel-content">
                  <div className="persona-text-content">
                    <div className="persona-header">
                      <span className="persona-emoji">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                          <path d="M13 3C9.23 3 6.19 5.95 6 9.66l-1.92.58C3.76 10.41 3.5 10.61 3.5 11s.26.59.58.76L6 12.34c.19 3.71 3.23 6.66 7 6.66 3.87 0 7-3.13 7-7V8c0-2.76-2.24-5-5-5h-2zm0 2h2c1.66 0 3 1.34 3 3v4c0 2.76-2.24 5-5 5s-5-2.24-5-5V9c0-2.21 1.79-4 4-4zm-1 3v3h2V8h-2zm0 4v2h2v-2h-2z"/>
                        </svg>
                      </span>
                      <h3>Context is everything.</h3>
                    </div>
                    <p className="persona-intro">
                      Therapy that spans months. Treatment goals that evolve. Tracking progress shouldn't mean re-reading every note.
                    </p>
                    <ul className="persona-benefits">
                      <li>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                        <span>Track symptom trends across sessions</span>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                        <span>Ask Aimé about treatment history</span>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                        <span>Stay present — let AidMi remember</span>
                      </li>
                    </ul>
                    <blockquote className="persona-quote">
                      &quot;I can finally see the full treatment arc without digging through notes.&quot;
                      <cite>— Clinical Psychologist, Palo Alto</cite>
                    </blockquote>
                  </div>
                  
                  <div className="persona-visual">
                    <div className="persona-mockup">
                      <div className="mockup-card">
                        <div className="mockup-header">
                          <span className="mockup-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                          </span>
                          <div className="mockup-title-group">
                            <div className="mockup-title">Aimé</div>
                          </div>
                        </div>
                        <div className="mockup-query">
                          <span>Was the insomnia before or after the job loss?</span>
                        </div>
                        <div className="mockup-response">Here&apos;s the PHQ-9 trend:</div>
                        <div className="mockup-trend">
                          <div className="trend-header">PHQ-9 Trend (5 sessions)</div>
                          <div className="trend-chart">
                            <div className="trend-point" style={{ height: '80%' }}><span className="point-label">14</span></div>
                            <div className="trend-point" style={{ height: '65%' }}><span className="point-label">12</span></div>
                            <div className="trend-point" style={{ height: '50%' }}><span className="point-label">10</span></div>
                            <div className="trend-point" style={{ height: '35%' }}><span className="point-label">8</span></div>
                            <div className="trend-point" style={{ height: '25%' }}><span className="point-label">6</span></div>
                          </div>
                          <div className="trend-months">
                            <span>Sep</span>
                            <span>Oct</span>
                            <span>Nov</span>
                            <span>Dec</span>
                            <span>Jan</span>
                          </div>
                          <div className="trend-insight">↓ Improving · 14 → 6 over 5 sessions</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Therapist Panel */}
              <div className="persona-panel" data-panel="therapist" role="tabpanel">
                <div className="persona-panel-content">
                  <div className="persona-text-content">
                    <div className="persona-header">
                      <span className="persona-emoji">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
                        </svg>
                      </span>
                      <h3>Rapport is everything.</h3>
                    </div>
                    <p className="persona-intro">
                      The details build connection — the sister&apos;s name, the job interview, the vacation that helped. Remembering what matters builds the connection.
                    </p>
                    <ul className="persona-benefits">
                      <li>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                        <span>Personal details surfaced automatically</span>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                        <span>Pick up exactly where you left off</span>
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                        <span>Never forget what mattered to them</span>
                      </li>
                    </ul>
                    <blockquote className="persona-quote">
                      &quot;My clients feel heard because I actually remember their lives.&quot;
                      <cite>— LMFT, Mountain View</cite>
                    </blockquote>
                  </div>
                  
                  <div className="persona-visual">
                    <div className="persona-mockup">
                      <div className="mockup-card">
                        <div className="mockup-header">
                          <span className="mockup-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                              <path d="M13 3C9.23 3 6.19 5.95 6 9.66l-1.92.58C3.76 10.41 3.5 10.61 3.5 11s.26.59.58.76L6 12.34c.19 3.71 3.23 6.66 7 6.66 3.87 0 7-3.13 7-7V8c0-2.76-2.24-5-5-5h-2zm0 2h2c1.66 0 3 1.34 3 3v4c0 2.76-2.24 5-5 5s-5-2.24-5-5V9c0-2.21 1.79-4 4-4zm-1 3v3h2V8h-2zm0 4v2h2v-2h-2z"/>
                            </svg>
                          </span>
                          <div className="mockup-title-group">
                            <div className="mockup-title">Memory</div>
                            <div className="mockup-subtitle">Auto-surfaced before session</div>
                          </div>
                        </div>
                        <div className="mockup-divider"></div>
                        <div className="mockup-memory-list">
                          <div className="memory-item">
                            <span className="memory-icon">
                              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                              </svg>
                            </span>
                            <div className="memory-content">
                              <div className="memory-text">Sister &quot;Maria&quot; — close relationship</div>
                              <div className="memory-context">Last discussed: 3 weeks ago</div>
                            </div>
                          </div>
                          <div className="memory-item">
                            <span className="memory-icon">
                              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                <path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z"/>
                              </svg>
                            </span>
                            <div className="memory-content">
                              <div className="memory-text">Google interview on Nov 15</div>
                              <div className="memory-context">Feeling anxious but prepared</div>
                            </div>
                          </div>
                          <div className="memory-item">
                            <span className="memory-icon">
                              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                <path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v3c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2zm-8-9L7 6.99h3v5h4v-5h3L13 1z"/>
                              </svg>
                            </span>
                            <div className="memory-content">
                              <div className="memory-text">Hawaii trip helped with stress</div>
                              <div className="memory-context">&quot;First real vacation in 2 years&quot;</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing fade-in-section">
        <div className="container">
          <div className="section-header">
            <h2>Unlimited telehealth + AI notes on every plan.</h2>
            <p className="section-subhead">Built for behavioral health. HIPAA compliant from day one.</p>
          </div>

          {/* Billing Toggle */}
          <div className="billing-toggle">
            <span className="billing-option" data-billing="monthly">Monthly</span>
            <button 
              className="toggle-switch" 
              role="switch" 
              aria-checked="true"
              data-state="annual"
            >
              <span className="toggle-knob"></span>
            </button>
            <span className="billing-option billing-option-active" data-billing="annual">
              Annual
              <span className="save-badge">Save 20%</span>
            </span>
          </div>

          <div className="pricing-grid">
            {/* Free Tier - Demoted */}
            <div className="pricing-card pricing-card-free">
              <div className="pricing-header">
                <h3 className="pricing-tier-name">Free</h3>
                <div className="pricing-price">
                  <span className="pricing-amount">$0</span>
                  <span className="pricing-period">/forever</span>
                </div>
                <p className="pricing-tagline">Get started, no strings attached.</p>
              </div>
              
              <ul className="pricing-features">
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/></svg>
                  Unlimited sessions
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/></svg>
                  Unlimited AI notes
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/></svg>
                  Evidence citations
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/></svg>
                  Today&apos;s Brief (recent sessions only)
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/></svg>
                  20 Aimé queries/month
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/></svg>
                  HIPAA compliant + BAA
                </li>
              </ul>
              
              <div className="pricing-cta">
                <a href="#" className="btn btn-tertiary contact-trigger">Start Free</a>
                <span className="pricing-cta-note">No credit card required</span>
              </div>
            </div>

            {/* Professional Tier - HERO */}
            <div className="pricing-card pricing-card-pro">
              <div className="pricing-badge">Most Popular</div>
              <div className="pricing-header">
                <h3 className="pricing-tier-name">Professional</h3>
                <div className="pricing-price">
                  <span className="pricing-amount" data-annual="79" data-monthly="99">$79</span>
                  <span className="pricing-period">/mo</span>
                </div>
                <p className="pricing-billing-note">
                  <span className="billing-detail" data-annual="billed annually" data-monthly="billed monthly">billed annually</span>
                  <span className="billing-savings" data-annual="($948/yr — save $240)" data-monthly="">($948/yr — save $240)</span>
                </p>
                <p className="pricing-tagline">For clinicians who need full continuity.</p>
              </div>
              
              <ul className="pricing-features">
                <li className="feature-highlight">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/></svg>
                  <strong>Everything in Free, plus:</strong>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/></svg>
                  Today&apos;s Brief (full history)
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/></svg>
                  <strong>Unlimited</strong> Aimé queries
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/></svg>
                  Custom note templates
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/></svg>
                  Full HD telehealth (built-in)
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/></svg>
                  Priority processing
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/></svg>
                  Email support
                </li>
              </ul>
              
              <div className="pricing-cta">
                <a href="#" className="btn btn-primary btn-large contact-trigger">Start 14-Day Free Trial</a>
              </div>
            </div>

            {/* Clinic Tier - Relationship */}
            <div className="pricing-card pricing-card-clinic">
              <div className="pricing-header">
                <h3 className="pricing-tier-name">Clinic</h3>
                <div className="pricing-price">
                  <span className="pricing-amount pricing-amount-custom">From $69</span>
                  <span className="pricing-period">/seat/mo</span>
                </div>
                <p className="pricing-billing-note">2+ seats · volume discounts available</p>
                <p className="pricing-tagline">For teams that need compliance + control.</p>
              </div>
              
              <ul className="pricing-features">
                <li className="feature-highlight">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/></svg>
                  <strong>Everything in Pro, plus:</strong>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/></svg>
                  Admin dashboard
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/></svg>
                  Shared template library
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/></svg>
                  Role-based access control
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/></svg>
                  Audit logs + compliance
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/></svg>
                  Dedicated support
                </li>
              </ul>
              
              <div className="pricing-cta">
                <a href="#" className="btn btn-secondary contact-trigger">Schedule a Call</a>
                <span className="pricing-cta-note">Usually responds within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Trust footer */}
          <div className="pricing-trust">
            <div className="pricing-trust-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
              <span>HIPAA compliant on all plans</span>
            </div>
            <div className="pricing-trust-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              <span>BAA included</span>
            </div>
            <div className="pricing-trust-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (Interactive Feature Switcher) */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>From session to signed note in 2 minutes.</h2>
          </div>

          <div className="split-layout">
            <div className="steps-list">
              <div className="step-item active" data-step="capture">
                <div className="step-number">1</div>
                <h3 className="step-title">Capture</h3>
                <p className="step-description">Start your in-person or telehealth session. AidMi transcribes in real-time with speaker separation.</p>
              </div>

              <div className="step-item" data-step="sign">
                <div className="step-number">2</div>
                <h3 className="step-title">Sign</h3>
                <p className="step-description">End the session. Your note appears — fully drafted, with every clinical claim linked to the source. Verify with a click. Edit if needed. Sign.</p>
              </div>

              <div className="step-item" data-step="context">
                <div className="step-number">3</div>
                <h3 className="step-title">Context Builds</h3>
                <p className="step-description">Each signed note updates your patient&apos;s profile. Today&apos;s Brief evolves. Aimé gets smarter. Your clinical intelligence compounds.</p>
              </div>
            </div>

            <div className="dynamic-visual">
              <div className="visual-content active" data-visual="capture">
                <div className="mockup-frame">
                  <div className="mockup-header">
                    <div className="mockup-dots">
                      <span></span><span></span><span></span>
                    </div>
                    <span className="mockup-title">Recording Session</span>
                  </div>
                  <div className="mockup-body">
                    <div className="mockup-skeleton mockup-skeleton-title"></div>
                    <div className="mockup-skeleton mockup-skeleton-text"></div>
                    <div className="mockup-skeleton mockup-skeleton-text short"></div>
                    <div className="mockup-skeleton mockup-skeleton-card"></div>
                  </div>
                </div>
              </div>

              <div className="visual-content" data-visual="sign">
                <div className="mockup-frame">
                  <div className="mockup-header">
                    <div className="mockup-dots">
                      <span></span><span></span><span></span>
                    </div>
                    <span className="mockup-title">Review & Sign</span>
                  </div>
                  <div className="mockup-body">
                    <div className="mockup-skeleton mockup-skeleton-title"></div>
                    <div className="mockup-skeleton mockup-skeleton-text"></div>
                    <div className="mockup-skeleton mockup-skeleton-text"></div>
                    <div className="mockup-skeleton mockup-skeleton-card"></div>
                  </div>
                </div>
              </div>

              <div className="visual-content" data-visual="context">
                <div className="mockup-frame">
                  <div className="mockup-header">
                    <div className="mockup-dots">
                      <span></span><span></span><span></span>
                    </div>
                    <span className="mockup-title">Patient Profile</span>
                  </div>
                  <div className="mockup-body">
                    <div className="mockup-skeleton mockup-skeleton-text short"></div>
                    <div className="mockup-skeleton mockup-skeleton-card"></div>
                    <div className="mockup-skeleton mockup-skeleton-text"></div>
                    <div className="mockup-skeleton mockup-skeleton-text short"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="faq">
        <div className="container">
          <div className="section-header">
            <h2>Questions? We've got answers.</h2>
          </div>

          <div className="faq-list">
            {/* Question 1 */}
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false" aria-controls="faq-answer-1">
                <span>Is the Free plan really unlimited?</span>
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              <div className="faq-answer" id="faq-answer-1">
                <div className="faq-answer-content">
                  Yes. Unlimited sessions and unlimited notes. We charge for speed and advanced continuity features (full longitudinal history, unlimited Aimé queries) — not per patient or per session.
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false" aria-controls="faq-answer-2">
                <span>What happens to my recordings?</span>
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              <div className="faq-answer" id="faq-answer-2">
                <div className="faq-answer-content">
                  Audio is deleted immediately after transcription. We never store recordings. Transcripts are retained to power citations, Today&apos;s Brief, and Aimé — but you can configure retention settings (auto-delete after signing, after X days, etc.).
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false" aria-controls="faq-answer-3">
                <span>Does AidMi work with my current EHR?</span>
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              <div className="faq-answer" id="faq-answer-3">
                <div className="faq-answer-content">
                  Yes. AidMi works alongside SimplePractice, TherapyNotes, Valant, and other EHRs. One-button to paste your signed note into your existing system, or use it standalone.
                </div>
              </div>
            </div>

            {/* Question 4 */}
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false" aria-controls="faq-answer-4">
                <span>Is it HIPAA compliant?</span>
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              <div className="faq-answer" id="faq-answer-4">
                <div className="faq-answer-content">
                  Yes. AidMi is HIPAA compliant with a BAA included on all plans — including Free. Data is encrypted in transit and at rest.
                </div>
              </div>
            </div>

            {/* Question 5 */}
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false" aria-controls="faq-answer-5">
                <span>Do you train your AI on my patient data?</span>
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              <div className="faq-answer" id="faq-answer-5">
                <div className="faq-answer-content">
                  No. Your patient data is siloed, stored securely, and only used to power your clinical intelligence — Today&apos;s Brief, Aimé, and citations.
                </div>
              </div>
            </div>

            {/* Question 6 */}
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false" aria-controls="faq-answer-6">
                <span>How accurate are the AI notes?</span>
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              <div className="faq-answer" id="faq-answer-6">
                <div className="faq-answer-content">
                  Every claim in your note links to the source in the transcript. Click to verify. If evidence is missing, we flag it as &quot;Needs confirmation.&quot; You review and sign — nothing goes into the chart without your approval.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2>Go home on time tonight.</h2>
              <p>You didn&apos;t become a clinician to do paperwork.<br /><br />Let AidMi handle the documentation while you handle the care.</p>
              <a href="#" className="btn btn-primary btn-large contact-trigger">Get AidMi Free</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-compliance">
            <div className="compliance-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
              </svg>
              HIPAA-Compliant
            </div>
            <div className="compliance-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
              </svg>
              AES-256 Encrypted
            </div>
            <div className="compliance-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
              </svg>
              Built for Mental Health
            </div>
          </div>
          <div className="footer-grid">
            <div className="footer-column">
              <h4>Who we're for</h4>
              <ul>
                <li><a href="#who-its-for">Psychiatrists & Nurse Practitioners</a></li>
                <li><a href="#who-its-for">Psychologists</a></li>
                <li><a href="#who-its-for">Therapists & Counselors</a></li>
                <li><a href="#who-its-for">All Specialties</a></li>
                <li><a href="#who-its-for">Solo Private Practice</a></li>
                <li><a href="#who-its-for">Group Practices</a></li>
                <li><a href="#who-its-for">Clinics & Networks</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Today&apos;s Brief</a></li>
                <li><a href="#features">Aimé Q&A</a></li>
                <li><a href="#features">Evidence-Backed Scribe</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="/integrations">EHR Integrations</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/security">Security & Compliance</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/support">Contact Us</a></li>
                <li>
                  <a href="https://status.aidmi.com" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ display: "inline-block", width: "8px", height: "8px", background: "#10b981", borderRadius: "50%" }}></span>
                    System Status
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Clinical Library</h4>
              <ul>
                <li><a href="/templates">Free Documentation Templates</a></li>
                <li><a href="/templates/superbill">Superbill Template</a></li>
                <li><a href="/templates/soap-note">SOAP Note Template</a></li>
                <li><a href="/templates/treatment-plan">Treatment Plan Template</a></li>
                <li><a href="/blog">Practice Growth Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>© 2025 AidMi Inc. All rights reserved. • Palo Alto, California</p>
              <p className="footer-tagline">AI that augments, not automates, the therapeutic alliance.</p>
            </div>
            <div className="footer-legal-links" style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", marginBottom: "16px", fontSize: "14px" }}>
              <a href="/privacy" style={{ color: "var(--text-light)", textDecoration: "none" }}>Privacy Policy</a>
              <a href="/terms" style={{ color: "var(--text-light)", textDecoration: "none" }}>Terms of Service</a>
              <a href="/cookies" style={{ color: "var(--text-light)", textDecoration: "none" }}>Cookie Settings</a>
            </div>
            <div className="social-links">
              <a href="https://linkedin.com/company/aidmi" className="social-icon" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a href="https://twitter.com/aidmi" className="social-icon" aria-label="Twitter/X">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      <div className="video-modal" id="videoModal" role="dialog" aria-modal="true" aria-labelledby="videoModalTitle">
        <div className="video-modal-backdrop"></div>
        <div className="video-modal-content">
          <button className="video-modal-close" aria-label="Close video">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <h2 id="videoModalTitle" className="sr-only">AidMi Product Demo</h2>
          <div className="video-container">
            <div className="video-wrapper" id="videoWrapper">
              {/* Placeholder until video loads */}
              <div className="video-placeholder-state">
                <div className="play-button-large">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5V19L19 12L8 5Z"/>
                  </svg>
                </div>
                <p>AidMi Product Demo</p>
                <span>90 seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get Started Modal */}
      <div className="getstarted-modal" id="contactModal" role="dialog" aria-modal="true" aria-labelledby="getStartedModalTitle">
        <div className="getstarted-modal-backdrop"></div>
        <div className="getstarted-modal-content">
          <button className="getstarted-modal-close" aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          
          {modalView === 'onboarding' ? (
            <>
              {/* Logo */}
              <div className="getstarted-logo">
                <img src={aidmiLogo} alt="AidMi" />
              </div>
              
              <h2 id="getStartedModalTitle" className="getstarted-title">Let&apos;s get you started</h2>
              
              {/* Option Cards */}
              <div className="getstarted-options">
                {/* Option 1: Start Free */}
                <a href="https://app.aidmi.ai/" className="getstarted-option-card choice-card-primary">
                  <div className="option-illustration option-illustration-start">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="choice-icon">
                      <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/>
                    </svg>
                  </div>
                  <div className="option-content">
                    <h3>Start Free Now</h3>
                    <p>Create your account and begin immediately</p>
                  </div>
                  <svg className="option-arrow" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </a>
                
                {/* Option 2: Book Demo */}
                <a href="https://calendly.com/aidmi/demo" className="getstarted-option-card" target="_blank" rel="noopener noreferrer">
                  <div className="option-illustration option-illustration-demo">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div className="option-content">
                    <h3>Book a Demo</h3>
                    <p>See AidMi in action with a quick walkthrough</p>
                  </div>
                  <svg className="option-arrow" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </a>
              </div>
              
              {/* Trust Footer - Grounded */}
              <div className="getstarted-trust">
                <div className="getstarted-trust-inline">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="trust-shield">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                  </svg>
                  <span>HIPAA Compliant · No Credit Card Required</span>
                </div>
                <div className="getstarted-footer-link">
                  Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); setModalView('login'); }}>Log in</a>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Logo */}
              <div className="getstarted-logo">
                <img src={aidmiLogo} alt="AidMi" />
              </div>
              
              <h3 className="getstarted-title">Welcome back</h3>
              
              {/* Login Form */}
              <div className="login-form">
                <label htmlFor="loginEmail" className="login-label">Email</label>
                <input 
                  type="email" 
                  id="loginEmail" 
                  className="login-input" 
                  placeholder="you@example.com"
                  autoComplete="email"
                />
                <a href="https://app.aidmi.ai/forgot-password" className="forgot-password-link">
                  Forgot password?
                </a>
                <button className="btn btn-primary btn-full">Sign in with email</button>
              </div>
              
              {/* Separator */}
              <div className="login-separator">
                <span>or</span>
              </div>
              
              {/* Social Login Options */}
              <div className="login-social">
                <button className="btn-social btn-sso">
                  <svg viewBox="0 0 24 24" width="20" height="20" className="sso-icon">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </button>
              </div>
              
              {/* Footer Link */}
              <div className="getstarted-footer-link">
                No account? <a href="#" onClick={(e) => { e.preventDefault(); setModalView('onboarding'); }}>Create one</a>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}