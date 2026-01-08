import '../styles/aidmi.css';
import { useState, useEffect } from 'react';
import useLandingInteractions from './hooks/useLandingInteractions';
import heroMockup from 'figma:asset/8d2ce938c8c8186bbbd2352154c59387624b41f5.png';
import aidmiLogo from 'figma:asset/06630e6d0f3cdbeb4d97043d9c269f80ec260d53.png';

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
                      <a href="#features" className="nav-dropdown-link">Evidence-Backed Notes</a>
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
              <li className="nav-item">
                <a href="#security">Security</a>
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
          <a href="#features">Evidence-Backed Notes</a>
          <a href="#pricing">Pricing</a>
          <a href="#features">EHR Integrations</a>
        </div>
        <div className="mobile-menu-section">
          <a href="#faq">Resources</a>
          <a href="#security">Security & HIPAA</a>
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
                Know every patient's story before they walk in. AidMi reads your notes and builds a brief for each session — what changed, what to follow up on, what matters today.
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

            <div className="hero-visual">
              <div className="hero-mockup-wrapper">
                <img 
                  src={heroMockup} 
                  alt="AidMi Today's Brief showing patient status with PHQ-9, GAD-7 scores, recent stressors, symptom patterns, and rapport anchors"
                  className="hero-mockup-image"
                />
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
            <div className="partner-logo">Stanford Medicine</div>
            <div className="partner-logo">Kaiser Permanente</div>
            <div className="partner-logo">UCSF Health</div>
            <div className="partner-logo">Sutter Health</div>
            <div className="partner-logo">The Wright Institute</div>
            <div className="partner-logo">One Medical</div>
            <div className="partner-logo">Mindful Health Solutions</div>
          </div>
          <div className="marquee-content" aria-hidden="true">
            <div className="partner-logo">Stanford Medicine</div>
            <div className="partner-logo">Kaiser Permanente</div>
            <div className="partner-logo">UCSF Health</div>
            <div className="partner-logo">Sutter Health</div>
            <div className="partner-logo">The Wright Institute</div>
            <div className="partner-logo">One Medical</div>
            <div className="partner-logo">Mindful Health Solutions</div>
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
                    <strong>Skimming old notes 5 minutes before the patient walks in</strong>
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
                    <span>"When did the panic attacks start? Which session?"</span>
                  </div>
                </li>
                <li>
                  {/* Question mark icon - uncertainty */}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" opacity="0.2"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                  </svg>
                  <div>
                    <strong>Walking in unprepared, relying on memory</strong>
                    <span>Patients notice when you forget what mattered to them</span>
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
                    <strong>Today's Brief auto-generated before each session</strong>
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
                    <strong>Aimé answers questions across months of sessions</strong>
                    <span>"When did we start Lexapro?" → Instant answer with citation.</span>
                  </div>
                </li>
                <li>
                  {/* Shield/confidence icon */}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" opacity="0.15"/>
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                  </svg>
                  <div>
                    <strong>Walk in confident with longitudinal context</strong>
                    <span>Every patient gets the attention they deserve, every time.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Section CTA */}
          <div className="problem-section-cta">
            <p className="section-cta-text">Ready to stop scrambling?</p>
            <a href="#" className="btn btn-primary contact-trigger">Get AidMi Free</a>
            <span className="section-cta-note">No credit card required · HIPAA compliant</span>
          </div>
        </div>
      </section>

      {/* Core Value Props Section */}
      <section id="features" className="value-props fade-in-section">
        <div className="container">
          <div className="section-header">
            <h2>World&apos;s Best Clinical Resident</h2>
            <p className="section-subhead">
              An assistant who reads every note, tracks every trend, and preps your chart before you walk in the room.
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
                  <p className="bento-tagline">Walk into every session prepared.</p>
                </div>
              </div>
              
              <div className="bento-brief-preview">
                <div className="brief-preview-bar">
                  <span className="brief-time">9:00 AM</span>
                  <span className="brief-patient">Sarah M. — Session #14</span>
                </div>
                <ul className="brief-updates-list">
                  <li>
                    <span className="update-badge update-badge-change">Changed</span>
                    <span>Lexapro increased 10mg → 15mg on Oct 3</span>
                  </li>
                  <li>
                    <span className="update-badge update-badge-trend">Trending</span>
                    <span>Sleep improving: 5 wakings → 2 per night</span>
                  </li>
                  <li>
                    <span className="update-badge update-badge-followup">Follow up</span>
                    <span>Job interview anxiety — mentioned Google interview</span>
                  </li>
                </ul>
                <div className="brief-preview-footer">
                  <span>3 more patients today</span>
                  <span className="brief-ready-badge">✓ Briefs ready</span>
                </div>
              </div>
            </div>

            {/* AIMÉ - Tall Card (spans 2 rows) */}
            <div className="bento-card bento-card-tall">
              <div className="bento-card-header">
                <div className="bento-icon bento-icon-aime">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2zm1.61-9.96c-2.06-.3-3.88.97-4.43 2.79-.18.58.26 1.17.87 1.17h.2c.41 0 .74-.29.88-.67.32-.89 1.27-1.5 2.3-1.28.95.2 1.65 1.13 1.57 2.1-.1 1.34-1.62 1.63-2.45 2.88 0 .01-.01.01-.01.02-.01.02-.02.03-.03.05-.09.15-.18.32-.25.5-.01.03-.03.05-.04.08-.01.02-.01.04-.02.07-.12.34-.2.75-.2 1.25h2c0-.42.11-.77.28-1.07.02-.03.03-.06.05-.09.08-.14.18-.27.28-.39.01-.01.02-.03.03-.04.1-.12.21-.23.33-.34.96-.91 2.26-1.65 1.99-3.56-.24-1.74-1.61-3.21-3.35-3.47z"/>
                  </svg>
                </div>
                <div className="bento-card-titles">
                  <h3>Aimé</h3>
                  <p className="bento-tagline">Ask anything. Get answers with proof.</p>
                </div>
              </div>
              
              <div className="bento-chat-preview">
                <div className="chat-message chat-message-user">
                  <span>When did we start the Lexapro?</span>
                </div>
                <div className="chat-message chat-message-aime">
                  <div className="aime-avatar">A</div>
                  <div className="chat-message-content">
                    <p>Lexapro 10mg was started on <strong>September 5, 2024</strong> (Session #8).</p>
                    <p>Patient reported &quot;feeling ready to try medication&quot; after 2 months of therapy.</p>
                    <a href="#" className="chat-citation">View source →</a>
                  </div>
                </div>
                <div className="chat-input-preview">
                  <span>Ask about this patient...</span>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* EVIDENCE-BACKED NOTES - Standard Card */}
            <div className="bento-card bento-card-standard">
              <div className="bento-card-header">
                <div className="bento-icon bento-icon-notes">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <div className="bento-card-titles">
                  <h3>Evidence-Backed Notes</h3>
                  <p className="bento-tagline">Documentation you can defend.</p>
                </div>
              </div>
              
              <div className="bento-citation-preview">
                <div className="citation-example">
                  <p className="citation-text">
                    &quot;Patient reports <span className="citation-highlight" data-tooltip="Session #12, Oct 3">improved sleep quality</span> since medication adjustment.&quot;
                  </p>
                  <div className="citation-proof">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Click any claim to verify source</span>
                  </div>
                </div>
                <div className="citation-stats">
                  <div className="citation-stat">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Claims cited</span>
                  </div>
                  <div className="citation-stat">
                    <span className="stat-number">0</span>
                    <span className="stat-label">Unsupported</span>
                  </div>
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
                  <div className="persona-header">
                    <span className="persona-emoji">🩺</span>
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
                    <cite>— Psychiatrist, San Francisco</cite>
                  </blockquote>
                </div>
                <div className="persona-visual">
                  <div className="persona-mockup">
                    <div className="mockup-badge">Today&apos;s Brief</div>
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
                  </div>
                </div>
              </div>

              {/* Psychologist Panel */}
              <div className="persona-panel" data-panel="psychologist" role="tabpanel">
                <div className="persona-panel-content">
                  <div className="persona-header">
                    <span className="persona-emoji">🧠</span>
                    <h3>Deep work. Long arcs.</h3>
                  </div>
                  <p className="persona-intro">
                    Therapy that spans months. Treatment goals that evolve. You need to track progress without re-reading every note.
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
                    <div className="mockup-badge">Aimé Q&amp;A</div>
                    <div className="mockup-trend">
                      <span className="trend-label">PHQ-9 Score</span>
                      <div className="trend-chart">
                        <div className="trend-point" style={{ height: '80%' }}></div>
                        <div className="trend-point" style={{ height: '65%' }}></div>
                        <div className="trend-point" style={{ height: '50%' }}></div>
                        <div className="trend-point" style={{ height: '35%' }}></div>
                        <div className="trend-point" style={{ height: '25%' }}></div>
                      </div>
                      <span className="trend-insight">↓ Improving over 5 sessions</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Therapist Panel */}
              <div className="persona-panel" data-panel="therapist" role="tabpanel">
                <div className="persona-panel-content">
                  <div className="persona-header">
                    <span className="persona-emoji">💬</span>
                    <h3>Rapport is everything.</h3>
                  </div>
                  <p className="persona-intro">
                    The details build connection — the sister&apos;s name, the job interview, the vacation that helped. You need to remember what matters to them.
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
                    <div className="mockup-badge">Memory</div>
                    <div className="mockup-memory-list">
                      <div className="memory-item">
                        <span className="memory-icon">👨‍👩‍👧</span>
                        <span>Sister &quot;Maria&quot; — close relationship</span>
                      </div>
                      <div className="memory-item">
                        <span className="memory-icon">💼</span>
                        <span>Google interview on Nov 15</span>
                      </div>
                      <div className="memory-item">
                        <span className="memory-icon">🏖️</span>
                        <span>Hawaii trip helped with stress</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="testimonials fade-in-section">
        <div className="container">
          <div className="section-header">
            <h2>2 hours back. Every single day.</h2>
            <p className="section-subhead">Hear from licensed professionals who transformed their practice.</p>
          </div>

          <div className="testimonials-grid">
            {/* Testimonial 1 - Psychologist */}
            <div className="testimonial-card">
              <blockquote className="testimonial-quote">
                &quot;I used to spend 10 minutes before each session digging through old notes. Now I glance at Today&apos;s Brief and I&apos;m ready.&quot;
              </blockquote>
              <div className="testimonial-footer">
                <div className="license-badge license-badge-psyd">
                  <span className="license-abbrev">PsyD</span>
                </div>
                <cite className="testimonial-attribution">
                  <span className="testimonial-role">Licensed Clinical Psychologist</span>
                  <span className="testimonial-meta">
                    <span className="testimonial-location">Palo Alto, CA</span>
                    <span className="verified-badge">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      Verified
                    </span>
                  </span>
                </cite>
              </div>
            </div>

            {/* Testimonial 2 - Psychiatrist */}
            <div className="testimonial-card">
              <blockquote className="testimonial-quote">
                &quot;Aimé is the feature I didn&apos;t know I needed. I asked &apos;when did we start the Lexapro?&apos; and got the answer with the exact session cited. Took 2 seconds.&quot;
              </blockquote>
              <div className="testimonial-footer">
                <div className="license-badge license-badge-md">
                  <span className="license-abbrev">MD</span>
                </div>
                <cite className="testimonial-attribution">
                  <span className="testimonial-role">Board-Certified Psychiatrist</span>
                  <span className="testimonial-meta">
                    <span className="testimonial-location">San Francisco, CA</span>
                    <span className="verified-badge">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      Verified
                    </span>
                  </span>
                </cite>
              </div>
            </div>

            {/* Testimonial 3 - Therapist */}
            <div className="testimonial-card">
              <blockquote className="testimonial-quote">
                &quot;I finally trust my AI notes. One click shows the supporting source. That&apos;s the difference.&quot;
              </blockquote>
              <div className="testimonial-footer">
                <div className="license-badge license-badge-lmft">
                  <span className="license-abbrev">LMFT</span>
                </div>
                <cite className="testimonial-attribution">
                  <span className="testimonial-role">Licensed Marriage & Family Therapist</span>
                  <span className="testimonial-meta">
                    <span className="testimonial-location">Mountain View, CA</span>
                    <span className="verified-badge">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      Verified
                    </span>
                  </span>
                </cite>
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
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Unlimited sessions
                </li>
                <li>
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Unlimited AI notes
                </li>
                <li>
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Evidence citations
                </li>
                <li>
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Today&apos;s Brief (last 3 sessions)
                </li>
                <li>
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  20 Aimé queries/month
                </li>
                <li>
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
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
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  <strong>Everything in Free, plus:</strong>
                </li>
                <li>
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Today&apos;s Brief (full history)
                </li>
                <li>
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  <strong>Unlimited</strong> Aimé queries
                </li>
                <li>
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Custom note templates
                </li>
                <li>
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Priority processing
                </li>
                <li>
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
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
                  <span className="pricing-amount pricing-amount-custom">Let&apos;s talk</span>
                </div>
                <p className="pricing-tagline">For teams that need compliance + control.</p>
              </div>
              
              <ul className="pricing-features">
                <li className="feature-highlight">
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  <strong>Everything in Pro, plus:</strong>
                </li>
                <li>
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Admin dashboard
                </li>
                <li>
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Shared template library
                </li>
                <li>
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Role-based access control
                </li>
                <li>
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Audit logs + compliance
                </li>
                <li>
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
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

      {/* Security Section */}
      <section id="security" className="security">
        <div className="container">
          <div className="security-content">
            <div className="security-header">
              <div className="security-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z"/>
                </svg>
              </div>
              <h2>Your patients' data, protected.</h2>
              <p className="security-intro">AidMi is built for behavioral health — where privacy isn&apos;t optional.</p>
            </div>

            <div className="security-features">
              <div className="security-feature">
                <div className="security-feature-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <div className="security-feature-text">
                  <strong>HIPAA compliant</strong>
                  <span>BAA included on all plans</span>
                </div>
              </div>

              <div className="security-feature">
                <div className="security-feature-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <div className="security-feature-text">
                  <strong>No audio stored</strong>
                  <span>Recordings are deleted immediately after transcription</span>
                </div>
              </div>

              <div className="security-feature">
                <div className="security-feature-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <div className="security-feature-text">
                  <strong>Configurable transcript retention</strong>
                  <span>Choose to retain, auto-delete after signing, or delete after X days</span>
                </div>
              </div>

              <div className="security-feature">
                <div className="security-feature-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <div className="security-feature-text">
                  <strong>Encrypted everywhere</strong>
                  <span>Data encrypted in transit and at rest</span>
                </div>
              </div>
            </div>

            <a href="#security" className="security-link">
              Learn more about our security practices →
            </a>
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
                <li><a href="#features">Evidence-Backed Notes</a></li>
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
                <a href="https://app.aidmi.ai/" className="getstarted-option-card">
                  <div className="option-illustration option-illustration-start">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55 1.82.36 3.79-1.1 3.79-2.95 0-.1.01-.2.02-.3.12-.92 1.12-1.29 1.79-.64l4.24 4.24c.65.66.28 1.66-.64 1.79-.11.01-.21.02-.31.02-1.85 0-3.31 1.97-2.95 3.79.13.66-.08 1.34-.55 1.81L9.2 17.9l-1.55-3.62c.31-.13 3.61-1.53 5.89-3.57C15.99 8.15 17.61 6 17.61 6s-8.65 1.77-8.42 0.35z"/>
                      <path d="M3.85 19.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.93-2.91-6.5-3.5-6.5s-3.5 4.57-3.5 6.5z"/>
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
                <div className="getstarted-trust-badges">
                  <span>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                    </svg>
                    HIPAA Compliant
                  </span>
                  <span>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                    </svg>
                    No Credit Card
                  </span>
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
              <p className="modal-simple-subhead">To clinical clarity.</p>
              
              {/* Login Form */}
              <div className="login-form">
                <label htmlFor="loginEmail" className="login-label">Email</label>
                <input 
                  type="email" 
                  id="loginEmail" 
                  className="login-input" 
                  placeholder="you@example.com"
                />
                <button className="btn-primary btn-full">Sign in with email</button>
              </div>
              
              {/* Separator */}
              <div className="login-separator">
                <span>or</span>
              </div>
              
              {/* Social Login Options */}
              <div className="login-social">
                <button className="btn-social">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </button>
                <button className="btn-social">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="#F25022" d="M1 1h10v10H1z"/>
                    <path fill="#00A4EF" d="M13 1h10v10H13z"/>
                    <path fill="#7FBA00" d="M1 13h10v10H1z"/>
                    <path fill="#FFB900" d="M13 13h10v10H13z"/>
                  </svg>
                  Continue with Microsoft
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