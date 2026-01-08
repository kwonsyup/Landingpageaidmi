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
                <a href="/solutions">Who we're for</a>
                <div className="nav-dropdown">
                  <div className="nav-dropdown-columns">
                    <div className="nav-dropdown-column">
                      <h4>By Role</h4>
                      <a href="#psychiatrists" className="nav-dropdown-link">Psychiatrists & Nurse Practitioners</a>
                      <a href="#psychologists" className="nav-dropdown-link">Psychologists</a>
                      <a href="#therapists" className="nav-dropdown-link">Therapists & Counselors</a>
                      <a href="#all-specialties" className="nav-dropdown-link">All Specialties</a>
                    </div>
                    <div className="nav-dropdown-column">
                      <h4>By Organization</h4>
                      <a href="#solo" className="nav-dropdown-link">Solo Private Practice</a>
                      <a href="#group" className="nav-dropdown-link">Group Practices</a>
                      <a href="#enterprise" className="nav-dropdown-link">Clinics & Networks</a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item has-dropdown">
                <a href="/product">Product</a>
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
                      <a href="/integrations" className="nav-dropdown-link">Electronic Health Record (EHR)</a>
                      <a href="/integrations#telehealth" className="nav-dropdown-link">Telehealth</a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a href="/pricing">Pricing</a>
              </li>
              <li className="nav-item has-dropdown">
                <a href="/resources">Clinical Library</a>
                <div className="nav-dropdown">
                  <div className="nav-dropdown-columns three-col">
                    <div className="nav-dropdown-column">
                      <h4>Discover</h4>
                      <a href="/blog" className="nav-dropdown-link">Practice Growth Blog</a>
                      <a href="/templates" className="nav-dropdown-link">
                        Free Documentation Templates
                        <span style={{ display: "inline-block", background: "var(--salmon)", color: "var(--dark-navy)", fontSize: "10px", fontWeight: "700", padding: "2px 6px", borderRadius: "4px", marginLeft: "6px", textTransform: "uppercase" }}>Free</span>
                      </a>
                    </div>
                    <div className="nav-dropdown-column">
                      <h4>Popular Resources</h4>
                      <a href="/templates/superbill" className="nav-dropdown-link">Superbill Template</a>
                      <a href="/templates/soap-note" className="nav-dropdown-link">SOAP Note Template</a>
                      <a href="/templates/treatment-plan" className="nav-dropdown-link">Treatment Plan Template</a>
                    </div>
                    <div className="nav-dropdown-column">
                      <h4>Support</h4>
                      <a href="/support" className="nav-dropdown-link">Contact Us</a>
                      <a href="/careers" className="nav-dropdown-link">Careers</a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a href="/security">Security</a>
              </li>
            </ul>
          </nav>
          <div className="header-cta">
            <a href="https://app.aidmi.com/login" className="nav-signin">Sign In</a>
            <a href="#" className="btn btn-primary contact-trigger">Try AidMi Free</a>
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
          <a href="#psychiatrists">Psychiatrists & Nurse Practitioners</a>
          <a href="#psychologists">Psychologists</a>
          <a href="#therapists">Therapists & Counselors</a>
          <a href="#all-specialties">All Specialties</a>
          <a href="#solo">Solo Private Practice</a>
          <a href="#group">Group Practices</a>
          <a href="#enterprise">Clinics & Networks</a>
        </div>
        <div className="mobile-menu-section">
          <h4>Product</h4>
          <a href="#features">Today&apos;s Brief</a>
          <a href="#features">Aimé Q&A</a>
          <a href="#features">Evidence-Backed Notes</a>
          <a href="#pricing">Pricing</a>
          <a href="/integrations">EHR Integrations</a>
        </div>
        <div className="mobile-menu-section">
          <h4>Clinical Library</h4>
          <a href="/blog">Practice Growth Blog</a>
          <a href="/templates">
            Free Documentation Templates
            <span style={{ display: "inline-block", background: "var(--salmon)", color: "var(--dark-navy)", fontSize: "10px", fontWeight: "700", padding: "2px 6px", borderRadius: "4px", marginLeft: "6px", textTransform: "uppercase" }}>Free</span>
          </a>
          <a href="/templates/superbill">Superbill Template</a>
          <a href="/templates/soap-note">SOAP Note Template</a>
          <a href="/templates/treatment-plan">Treatment Plan Template</a>
          <a href="/support">Contact Us</a>
          <a href="/careers">Careers</a>
        </div>
        <div className="mobile-menu-section">
          <a href="/pricing">Pricing</a>
          <a href="/security">Security & HIPAA</a>
        </div>
        <div className="mobile-menu-cta">
          <a href="https://app.aidmi.com/login" className="btn btn-secondary btn-large">Sign In</a>
          <a href="#" className="btn btn-primary btn-large contact-trigger">Try AidMi Free</a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-blob" style={{
          position: "absolute",
          top: "-10%",
          right: "-10%",
          width: "500px",
          height: "500px",
          background: "var(--pastel-pink)",
          filter: "blur(80px)",
          borderRadius: "50%",
          opacity: "0.4",
          zIndex: 0
        }}></div>
        <div className="hero-blob-2" style={{
          position: "absolute",
          bottom: "-10%",
          left: "-10%",
          width: "300px",
          height: "300px",
          background: "var(--pale-blue)",
          filter: "blur(60px)",
          borderRadius: "50%",
          opacity: "0.3",
          zIndex: 0
        }}></div>
        
        <div className="container">
          <div className="hero-layout">
            <div className="hero-content">
              <h1>The AI That <em style={{ fontStyle: "italic" }}>Briefs</em> You Before Your Client Walks In.</h1>
              <p className="hero-subhead">AidMi builds longitudinal context for every client — what changed, what matters, what to follow up on. Prep in seconds. Document with proof. Answer questions about their history instantly.</p>
              <p className="hero-ehr-note">Works alongside your existing EHR.</p>
              
              <div className="hero-buttons">
                <a href="#" className="btn btn-primary btn-large contact-trigger">Get AidMi Free</a>
                <button className="btn btn-secondary btn-large video-trigger">
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "18px", height: "18px", marginRight: "8px" }}>
                    <path d="M8 5V19L19 12L8 5Z" />
                  </svg>
                  Watch a 1-minute demo
                </button>
              </div>
              
              <div className="hero-compliance">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" />
                </svg>
                <span>HIPAA Compliant • AES-256 Encryption</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="floating-ui">
                <div className="product-demo-placeholder" style={{ height: "400px", flexDirection: "column", gap: "12px" }}>
                  {"[Today's Brief UI Preview]"}
                  <small style={{ display: "block", marginTop: "12px", fontSize: "13px", opacity: "0.8", maxWidth: "400px", textAlign: "center" }}>
                    💡 Show a clean &quot;Today&apos;s Brief&quot; card with client name, key changes, and action items
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip (Marquee) */}
      <section className="trust-strip">
        <div className="trust-label">Co-designed with US behavioral health clinicians from:</div>
        <div className="marquee">
          <div className="marquee-content">
            <div className="partner-logo">Meta</div>
            <div className="partner-logo">AlchemistX</div>
            <div className="partner-logo">Stanford Medicine</div>
            <div className="partner-logo">Kaiser Permanente</div>
            <div className="partner-logo">The Wright Institute (Berkeley)</div>
            <div className="partner-logo">Sutter Health</div>
            <div className="partner-logo">UCSF Health</div>
            <div className="partner-logo">National University of Singapore</div>
            <div className="partner-logo">Nanyang Technological University</div>
          </div>
          <div className="marquee-content">
            <div className="partner-logo">Meta</div>
            <div className="partner-logo">AlchemistX</div>
            <div className="partner-logo">Stanford Medicine</div>
            <div className="partner-logo">Kaiser Permanente</div>
            <div className="partner-logo">The Wright Institute (Berkeley)</div>
            <div className="partner-logo">Sutter Health</div>
            <div className="partner-logo">UCSF Health</div>
            <div className="partner-logo">National University of Singapore</div>
            <div className="partner-logo">Nanyang Technological University</div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="container">
          <div className="problem-content">
            <h2>Your notes are a filing cabinet.<br />Your brain does all the work.</h2>
            
            <div className="problem-body">
              <p className="problem-pain">
                Before every session, the same scramble. Skimming old notes. Trying to remember: 
                <em> What did we adjust last time? When did the panic attacks start? Did I follow up on that job situation?</em>
              </p>
              
              <p className="problem-current">
                Your current tools store information. They don&apos;t surface it when you need it.
              </p>
              
              <p className="problem-solution">
                AidMi is different. It synthesizes your client&apos;s history into a brief you can scan in 30 seconds. It answers questions across months of sessions — with citations. <strong>Longitudinal context for every client.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Props Section */}
      <section id="features" className="value-props">
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
                &quot;When did we first discuss the insomnia?&quot; &quot;What medications have we tried?&quot; Aimé searches across every session and returns answers with citations. Like a research assistant for every client.
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
      <section className="use-cases">
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
      <section className="testimonials">
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
              <cite className="testimonial-attribution">
                — Psychologist, Palo Alto
              </cite>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <blockquote className="testimonial-quote">
                &quot;Aimé is the feature I didn&apos;t know I needed. I asked &apos;when did we start the Lexapro?&apos; and got the answer with the exact session cited. Took 2 seconds.&quot;
              </blockquote>
              <cite className="testimonial-attribution">
                — Psychiatrist, San Francisco
              </cite>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-card">
              <blockquote className="testimonial-quote">
                &quot;I finally trust my AI notes. One click shows the supporting source. That&apos;s the difference.&quot;
              </blockquote>
              <cite className="testimonial-attribution">
                — LMFT, Mountain View
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
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
      <section className="security">
        <div className="container">
          <div className="security-content">
            <div className="security-header">
              <div className="security-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z"/>
                </svg>
              </div>
              <h2>Your clients&apos; data, protected.</h2>
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

            <a href="/security" className="security-link">
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
                <p className="step-description">Each signed note updates your client&apos;s profile. Today&apos;s Brief evolves. Aimé gets smarter. Your clinical intelligence compounds.</p>
              </div>
            </div>

            <div className="dynamic-visual">
              <div className="visual-content active" data-visual="capture">
                <div className="product-demo-placeholder" style={{ height: "320px", flexDirection: "column", gap: "12px" }}>
                  [Session Recording Interface]
                  <small style={{ display: "block", marginTop: "12px", fontSize: "13px", opacity: "0.8", maxWidth: "380px", textAlign: "center" }}>
                    💡 Audio waveform with real-time transcription and speaker labels
                  </small>
                </div>
              </div>

              <div className="visual-content" data-visual="sign">
                <div className="product-demo-placeholder" style={{ height: "320px", flexDirection: "column", gap: "12px" }}>
                  [Note Review Interface]
                  <small style={{ display: "block", marginTop: "12px", fontSize: "13px", opacity: "0.8", maxWidth: "380px", textAlign: "center" }}>
                    💡 SOAP note with highlighted citations — click any claim to see source
                  </small>
                </div>
              </div>

              <div className="visual-content" data-visual="context">
                <div className="product-demo-placeholder" style={{ height: "320px", flexDirection: "column", gap: "12px" }}>
                  [Client Profile Growth]
                  <small style={{ display: "block", marginTop: "12px", fontSize: "13px", opacity: "0.8", maxWidth: "380px", textAlign: "center" }}>
                    💡 Timeline showing sessions compounding into longitudinal intelligence
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof (Testimonial Carousel) */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>Loved by Clinicians &amp; Clients</h2>
          </div>

          <div className="testimonials-scroll">
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">SK</div>
                <div className="testimonial-meta">
                  <div className="testimonial-stars">
                    <svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                    <svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                    <svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                    <svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                    <svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                  </div>
                  <div className="testimonial-author">Dr. Sarah K. ✓</div>
                  <div className="testimonial-role">Psychiatrist, Private Practice, San Francisco, CA</div>
                </div>
              </div>
              <p className="testimonial-quote">&quot;Honestly, I move fast. Last week, a client mumbled a side effect I completely missed because I was looking at their chart. AidMi flagged it in the summary. It&apos;s not just about speed; it&apos;s the anxiety relief of having a second set of eyes on my work.&quot;</p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">MR</div>
                <div className="testimonial-meta">
                  <div className="testimonial-stars">
                    <svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                    <svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                    <svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                    <svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                    <svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                  </div>
                  <div className="testimonial-author">Dr. Michael R. ✓</div>
                  <div className="testimonial-role">Clinical Psychologist, Santa Monica, CA</div>
                </div>
              </div>
              <p className="testimonial-quote">"My Sundays used to be for writing reports. My kids would be playing outside, and I'd be stuck inside staring at WAIS scores. AidMi drafts the 'Findings' section so well that I actually got my weekend back. It gave me my Sundays back."</p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">DL</div>
                <div className="testimonial-meta">
                  <div className="testimonial-stars">
                    <svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                    <svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                    <svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                    <svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                    <svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                  </div>
                  <div className="testimonial-author">David L., LCSW ✓</div>
                  <div className="testimonial-role">Trauma Therapist, Berkeley, CA</div>
                </div>
              </div>
              <p className="testimonial-quote">"I was the biggest skeptic. I thought, 'No robot can understand trauma.' Then it picked up on a client's sarcasm that even I barely caught. It captured the tone, not just the words. I was humbled. It actually gets it."</p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">JM</div>
                <div className="testimonial-meta">
                  <div className="testimonial-stars">
                    <svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                    <svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                    <svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                    <svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                    <svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                  </div>
                  <div className="testimonial-author">Jessica M.</div>
                  <div className="testimonial-role">Client, San Diego, CA</div>
                </div>
              </div>
              <p className="testimonial-quote">"It used to be click-clack-click on the keyboard while I was crying. It felt so cold. Now, Dr. Lee just sits there and looks at me. I didn't realize how much the typing hurt our connection until it stopped."</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <div className="section-header">
            <h2>Questions? We've got answers.</h2>
          </div>

          <div className="faq-list">
            {/* Question 1 */}
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false">
                <span>Is the Free plan really unlimited?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  Yes. Unlimited sessions and unlimited notes. We charge for speed and advanced continuity features (full longitudinal history, unlimited Aimé queries) — not per client or per session.
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false">
                <span>What happens to my recordings?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  Audio is deleted immediately after transcription. We never store recordings. Transcripts are retained to power citations, Today&apos;s Brief, and Aimé — but you can configure retention settings (auto-delete after signing, after X days, etc.).
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false">
                <span>Does AidMi work with my current EHR?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  Yes. AidMi works alongside SimplePractice, TherapyNotes, Valant, and other EHRs. One-button to paste your signed note into your existing system, or use it standalone.
                </div>
              </div>
            </div>

            {/* Question 4 */}
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false">
                <span>Is it HIPAA compliant?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  Yes. AidMi is HIPAA compliant with a BAA included on all plans — including Free. Data is encrypted in transit and at rest.
                </div>
              </div>
            </div>

            {/* Question 5 */}
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false">
                <span>Do you train your AI on my client data?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  No. Your client data is siloed, stored securely, and only used to power your clinical intelligence — Today&apos;s Brief, Aimé, and citations.
                </div>
              </div>
            </div>

            {/* Question 6 */}
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false">
                <span>How accurate are the AI notes?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
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
                <li><a href="/psychiatrists">Psychiatrists & Nurse Practitioners</a></li>
                <li><a href="/psychologists">Psychologists</a></li>
                <li><a href="/therapists">Therapists & Counselors</a></li>
                <li><a href="/all-specialties">All Specialties</a></li>
                <li><a href="/solo">Solo Private Practice</a></li>
                <li><a href="/group-practices">Group Practices</a></li>
                <li><a href="/enterprise">Clinics & Networks</a></li>
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
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      <div className="video-modal" id="videoModal">
        <div className="video-modal-content">
          <button className="video-modal-close" aria-label="Close video">×</button>
          <div className="video-placeholder">[Video Player: 90-second Product Demo]</div>
        </div>
      </div>

      {/* Contact Modal */}
      <div className="contact-modal" id="contactModal">
        <div className="contact-modal-content">
          <button className="contact-modal-close" aria-label="Close form">×</button>
          <div className="contact-modal-header">
            <h3>Secure Your Spot in the AidMi Pilot</h3>
            <p>We are currently onboarding a limited number of practices for our next cohort. Tell us about your workflow to see if you qualify for early access.</p>
          </div>
          <div className="contact-modal-body">
            <form id="contactForm" className="contact-form">
              <div className="contact-form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input type="text" id="fullName" name="fullName" required placeholder="Dr. Jane Smith" />
              </div>
              <div className="contact-form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" required placeholder="jane.smith@practice.com" />
              </div>
              <div className="contact-form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="(555) 123-4567" />
              </div>
              <div className="contact-form-group">
                <label htmlFor="role">Your Role *</label>
                <select id="role" name="role" required>
                  <option value="">Select your role...</option>
                  <option value="psychiatrist">Psychiatrist</option>
                  <option value="psychologist">Psychologist</option>
                  <option value="therapist">Therapist / LCSW / LPC</option>
                  <option value="psychiatric-np">Psychiatric Nurse Practitioner</option>
                  <option value="practice-manager">Practice Manager</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="contact-form-group">
                <label htmlFor="practiceSize">Practice Size *</label>
                <select id="practiceSize" name="practiceSize" required>
                  <option value="">Select practice size...</option>
                  <option value="solo">Solo Practitioner</option>
                  <option value="small">Small Group (2-5 clinicians)</option>
                  <option value="medium">Medium Group (6-15 clinicians)</option>
                  <option value="large">Large Practice (16+ clinicians)</option>
                </select>
              </div>
              <div className="contact-form-group">
                <label htmlFor="message">Tell Us About Your Workflow (Optional)</label>
                <textarea id="message" name="message" placeholder="What are your biggest documentation challenges? What EHR do you use?"></textarea>
              </div>
              <button type="submit" className="contact-submit-btn">Request Access</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
