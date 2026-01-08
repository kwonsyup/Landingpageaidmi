import '../styles/aidmi.css';
import useLandingInteractions from './hooks/useLandingInteractions';

export default function App() {
  useLandingInteractions();

  return (
    <>
      {/* Header */}
      <header id="main-header">
        <div className="header-container">
          <a href="/" className="logo">AidMi</a>
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
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
        
        <div className="container">
          <div className="hero-layout">
            <div className="hero-content">
              <h1>The AI That <em>Briefs</em> You Before Your Patient Walks In.</h1>
              
              <p className="hero-subhead">
                AidMi builds longitudinal context for every patient — what changed, what matters, what to follow up on. Prep in seconds. Document with proof. Answer questions about their history instantly.
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
              
              {/* Social Proof */}
              <div className="hero-social-proof">
                <div className="avatar-cluster">
                  <div className="avatar" style={{ background: '#E0E7FF' }}>P</div>
                  <div className="avatar" style={{ background: '#FCE7F3' }}>M</div>
                  <div className="avatar" style={{ background: '#D1FAE5' }}>T</div>
                  <div className="avatar" style={{ background: '#FEF3C7' }}>K</div>
                  <div className="avatar" style={{ background: '#E0E7FF' }}>S</div>
                </div>
                <span className="social-proof-text">
                  Join <strong>500+ clinicians</strong> using AidMi
                </span>
              </div>
              
              <div className="hero-trust-text">
                <svg viewBox="0 0 24 24" fill="currentColor" className="trust-icon">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                </svg>
                <span>HIPAA compliant · BAA included</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="floating-ui">
                <div className="mockup-frame">
                  <div className="mockup-header">
                    <div className="mockup-dots">
                      <span></span><span></span><span></span>
                    </div>
                    <span className="mockup-title">Today's Brief — 9:30 AM</span>
                  </div>
                  <div className="mockup-body brief-preview">
                    <div className="brief-preview-header">
                      <span className="brief-patient-name">Sarah M.</span>
                      <span className="brief-meta">Session #14 · Last seen Oct 3</span>
                    </div>
                    
                    <div className="brief-preview-section">
                      <div className="brief-preview-label">
                        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '14px', height: '14px' }}>
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        What changed
                      </div>
                      <p className="brief-preview-item">Lexapro increased 10mg → 15mg <span className="brief-citation">(Oct 3)</span></p>
                      <p className="brief-preview-item">Sleep improved: 5 wakings → 2 per night</p>
                    </div>
                    
                    <div className="brief-preview-section">
                      <div className="brief-preview-label">
                        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '14px', height: '14px' }}>
                          <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                        </svg>
                        Follow up
                      </div>
                      <p className="brief-preview-item">Job interview anxiety — mentioned stress about upcoming interview at Google</p>
                    </div>
                    
                    <div className="brief-preview-footer">
                      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '12px', height: '12px', opacity: 0.5 }}>
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                      </svg>
                      <span>Generated by AidMi</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Integration Strip */}
              <div className="integration-strip">
                <span className="integration-label">Works alongside your EHR</span>
                <div className="integration-logos">
                  <div className="integration-logo-text logo-simplepractice">
                    <span>Simple</span><span className="logo-bold">Practice</span>
                  </div>
                  <div className="integration-logo-text logo-therapynotes">
                    <span>Therapy</span><span className="logo-bold">Notes</span>
                  </div>
                  <div className="integration-logo-text logo-alma">
                    alma
                  </div>
                  <div className="integration-logo-text logo-headway">
                    headway
                  </div>
                  <div className="integration-logo-text logo-valant">
                    Valant
                  </div>
                  <div className="integration-logo-more">
                    <span className="more-icon">+</span>
                    <span>More</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip (Marquee) */}
      <section className="trust-strip">
        <div className="trust-label">AidMi users practice at:</div>
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
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" opacity="0.2"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>
                  <div>
                    <strong>Skimming old notes 5 minutes before the patient walks in</strong>
                    <span>Trying to remember: "What did we adjust last time?"</span>
                  </div>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" opacity="0.2"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>
                  <div>
                    <strong>No quick way to find critical context</strong>
                    <span>"When did the panic attacks start? Which session?"</span>
                  </div>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" opacity="0.2"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
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
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" opacity="0.15"/>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <div>
                    <strong>Today's Brief auto-generated before each session</strong>
                    <span>What changed, what to follow up on. Scan in 30 seconds.</span>
                  </div>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" opacity="0.15"/>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <div>
                    <strong>Aimé answers questions across months of sessions</strong>
                    <span>"When did we start Lexapro?" → Instant answer with citation.</span>
                  </div>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" opacity="0.15"/>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <div>
                    <strong>Walk in confident with longitudinal context</strong>
                    <span>Every patient gets the attention they deserve, every time.</span>
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
            <h2>World&apos;s Best Clinical Resident</h2>
            <p className="section-subhead">
              An assistant who reads every note, tracks every trend, and preps your chart before you walk in the room. That&apos;s AidMi.
            </p>
          </div>

          <div className="value-props-grid">
            {/* Card 1: Today's Brief */}
            <div className="value-prop-card">
              <div className="value-prop-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"/>
                </svg>
              </div>
              <h3 className="value-prop-title">Today&apos;s Brief</h3>
              <p className="value-prop-tagline">Walk into every session prepared.</p>
              <p className="value-prop-description">
                Before each appointment, AidMi generates a brief: what changed since last visit, symptom trends, medication updates, open threads to revisit. Scan it in 30 seconds. Walk in ready.
              </p>
            </div>

            {/* Card 2: Aimé */}
            <div className="value-prop-card">
              <div className="value-prop-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"/>
                </svg>
              </div>
              <h3 className="value-prop-title">Aimé</h3>
              <p className="value-prop-tagline">Ask anything. Get answers with proof.</p>
              <p className="value-prop-description">
                &quot;When did we first discuss the insomnia?&quot; &quot;What medications have we tried?&quot; Aimé searches across every session and returns answers with citations. Like a research assistant for every patient.
              </p>
            </div>

            {/* Card 3: Evidence-Backed Notes */}
            <div className="value-prop-card">
              <div className="value-prop-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"/>
                </svg>
              </div>
              <h3 className="value-prop-title">Evidence-Backed Notes</h3>
              <p className="value-prop-tagline">Documentation you can defend.</p>
              <p className="value-prop-description">
                Every claim in your note links directly to the source. Click to verify. If evidence is missing, we flag it. No second-guessing. Sign with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="who-its-for" className="use-cases fade-in-section">
        <div className="container">
          <div className="section-header">
            <h2>Built for How <em>You</em> Practice</h2>
          </div>

          <div className="use-cases-grid">
            {/* Psychiatrists */}
            <div className="use-case-block">
              <h3>For Psychiatrists</h3>
              <p>
                High-volume, short sessions. You need to know what changed and what to refill — fast. Today&apos;s Brief gives you the snapshot. Aimé answers the edge cases. Finish documentation in the 2 minutes between appointments, not after hours.
              </p>
            </div>

            {/* Psychologists */}
            <div className="use-case-block">
              <h3>For Psychologists</h3>
              <p>
                Deep therapeutic work that spans months. Track treatment progress without re-reading every note. Let AidMi remember the threads so you can stay present in the room.
              </p>
            </div>

            {/* Therapists */}
            <div className="use-case-block">
              <h3>For Therapists</h3>
              <p>
                Rapport is everything. AidMi captures the details that build connection — the sister&apos;s name, the job interview, the vacation that helped. Start every session exactly where you left off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="testimonials fade-in-section">
        <div className="container">
          <div className="section-header">
            <h2>Clinicians who practice with confidence.</h2>
          </div>

          <div className="testimonials-grid">
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <blockquote className="testimonial-quote">
                &quot;I used to spend 10 minutes before each session digging through old notes. Now I glance at Today&apos;s Brief and I&apos;m ready.&quot;
              </blockquote>
              <div className="testimonial-footer">
                <div className="testimonial-avatar">P</div>
                <cite className="testimonial-attribution">
                  <span className="testimonial-role">Psychologist</span>
                  <span className="testimonial-location">Palo Alto, CA</span>
                </cite>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <blockquote className="testimonial-quote">
                &quot;Aimé is the feature I didn&apos;t know I needed. I asked &apos;when did we start the Lexapro?&apos; and got the answer with the exact session cited. Took 2 seconds.&quot;
              </blockquote>
              <div className="testimonial-footer">
                <div className="testimonial-avatar">M</div>
                <cite className="testimonial-attribution">
                  <span className="testimonial-role">Psychiatrist</span>
                  <span className="testimonial-location">San Francisco, CA</span>
                </cite>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-card">
              <blockquote className="testimonial-quote">
                &quot;I finally trust my AI notes. One click shows the supporting source. That&apos;s the difference.&quot;
              </blockquote>
              <div className="testimonial-footer">
                <div className="testimonial-avatar">T</div>
                <cite className="testimonial-attribution">
                  <span className="testimonial-role">LMFT</span>
                  <span className="testimonial-location">Mountain View, CA</span>
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
            <p className="section-subhead">Built for behavioral health.</p>
          </div>

          <div className="pricing-grid">
            {/* Free Tier */}
            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="pricing-tier-name">Free</h3>
                <div className="pricing-price">
                  <span className="pricing-amount">$0</span>
                  <span className="pricing-period">/forever</span>
                </div>
                <p className="pricing-tagline">We charge for speed and context, not for seeing patients.</p>
              </div>
              
              <ul className="pricing-features">
                <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Unlimited in-person + telehealth sessions</li>
                <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Unlimited AI note generation</li>
                <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Evidence-backed citations</li>
                <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Today&apos;s Brief (recent sessions)</li>
                <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>20 Aimé queries/month</li>
                <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>HIPAA compliant, BAA included</li>
              </ul>
              
              <div className="pricing-cta">
                <a href="#" className="btn btn-secondary btn-large contact-trigger">Get AidMi Free</a>
                <span className="pricing-cta-note">No credit card required.</span>
              </div>
            </div>

            {/* Professional Tier (Highlighted) */}
            <div className="pricing-card pricing-card-featured">
              <div className="pricing-badge">Most Popular</div>
              <div className="pricing-header">
                <h3 className="pricing-tier-name">Professional</h3>
                <div className="pricing-price">
                  <span className="pricing-amount">$79</span>
                  <span className="pricing-period">/mo</span>
                </div>
                <p className="pricing-billing-note">billed annually ($99 monthly)</p>
                <p className="pricing-tagline">For busy clinicians who need full continuity.</p>
              </div>
              
              <ul className="pricing-features">
                <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Everything in Free, plus:</li>
                <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Today&apos;s Brief (full longitudinal history)</li>
                <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Unlimited Aimé queries</li>
                <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Custom note templates</li>
                <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Priority processing</li>
              </ul>
              
              <div className="pricing-cta">
                <a href="#" className="btn btn-primary btn-large contact-trigger">Start 14-day free trial</a>
              </div>
            </div>

            {/* Clinic Tier */}
            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="pricing-tier-name">Clinic</h3>
                <div className="pricing-price">
                  <span className="pricing-amount">$69</span>
                  <span className="pricing-period">/seat/mo</span>
                </div>
                <p className="pricing-billing-note">billed annually, min. 2 seats ($89 monthly)</p>
                <p className="pricing-tagline">For care teams with compliance needs.</p>
              </div>
              
              <ul className="pricing-features">
                <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Everything in Professional, plus:</li>
                <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Admin dashboard</li>
                <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Shared template library</li>
                <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Role-based access</li>
                <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Audit logs &amp; compliance suite</li>
                <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Priority support</li>
              </ul>
              
              <div className="pricing-cta">
                <a href="#" className="btn btn-secondary btn-large contact-trigger">Talk to us</a>
              </div>
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

      {/* Contact Modal */}
      <div className="contact-modal" id="contactModal" role="dialog" aria-modal="true" aria-labelledby="contactModalTitle">
        <div className="contact-modal-content contact-modal-simple">
          <button className="contact-modal-close" aria-label="Close form">×</button>
          
          <div className="modal-simple-content">
            <div className="modal-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            
            <h3 id="contactModalTitle">Start Free in 60 Seconds</h3>
            <p className="modal-simple-subhead">No credit card. No sales call. Just your email.</p>
            
            <form id="contactForm" className="contact-form-simple">
              <div className="form-row">
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="you@practice.com"
                  className="input-email"
                />
                <button type="submit" className="btn-submit">
                  Get Started
                  <svg viewBox="0 0 20 20" fill="currentColor" className="arrow-icon">
                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>
                  </svg>
                </button>
              </div>
            </form>
            
            <div className="modal-trust-row">
              <span><svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg> HIPAA compliant</span>
              <span><svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg> No credit card</span>
              <span><svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg> Setup in 2 min</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}