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
                      <a href="#precharting" className="nav-dropdown-link">Morning Briefs</a>
                      <a href="#ambient" className="nav-dropdown-link">Ambient Scribe</a>
                      <a href="#pebble" className="nav-dropdown-link">Pebble Client App</a>
                      <a href="#practice-health" className="nav-dropdown-link">Practice Health</a>
                      <a href="#features" className="nav-dropdown-link">See All Features</a>
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
          <a href="#precharting">Morning Briefs</a>
          <a href="#ambient">Ambient Scribe</a>
          <a href="#pebble">Pebble Client App</a>
          <a href="#practice-health">Practice Health</a>
          <a href="#features">See All Features</a>
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

        {/* FAQ */}
        <section className="faq">
          <div className="container">
            <div className="section-header">
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="faq-list">

            <div className="segment-card psychologists" data-segment="psychologist">
              <div className="segment-card-content">
                <div className="segment-card-text">
                  <h3 className="segment-title">Assessment and Therapy in One Place</h3>
                  <p className="segment-description">Whether you're doing a full psych eval or long-term therapy, AidMi pulls standardized measures into your narrative so your notes show objective progress and medical necessity—without turning sessions into form-filling.</p>
                  <ul className="segment-features">
                    <li>✓ <strong>Integrated measures</strong> – PHQ-9, GAD-7, and other scales pulled in automatically, not copy-pasted.</li>
                    <li>✓ <strong>Eval-friendly structure</strong> – Intakes and assessments organized the way you already write, in your own voice.</li>
                    <li>✓ <strong>Clear progress over time</strong> – Symptom and functioning trends surfaced alongside key interventions.</li>
                    <li>✓ <strong>Between-Visit Visibility</strong> – Pebble captures mood trends and homework completion during the week, giving you objective data to guide the next session.</li>
                  </ul>
                </div>
                <div className="segment-card-visual">
                  <div className="segment-mockup">
                    <div className="mockup-title">Embedded Progress Visualization</div>
                    <div className="product-demo-placeholder" style={{ height: "100%", minHeight: "250px", flexDirection: "column", gap: "8px" }}>
                      [Visual: A "Progress Note" interface where a graph of "Symptom Reduction" is embedded directly between the "Subjective" and "Assessment" text blocks.]
                      <small style={{ display: "block", marginTop: "8px", fontSize: "12px", opacity: "0.8", maxWidth: "90%", textAlign: "center" }}>
                        💡 Insert visualization showing symptom reduction graph embedded within progress note structure
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="segment-card therapists" data-segment="therapist">
              <div className="segment-card-content">
                <div className="segment-card-text">
                  <h3 className="segment-title">Stay in the Story</h3>
                  <p className="segment-description">AidMi captures the narrative arc and key moments while you keep eye contact—and quietly tracks your capacity so you don't burn out.</p>
                  <ul className="segment-features">
                    <li>✓ <strong>Presence-first notes</strong> – Choose ambient listening or quick post-session dictation, depending on the client.</li>
                    <li>✓ <strong>Recall Assistant:</strong> "What was her sister's name?" – Ask the sidebar before you start.</li>
                    <li>✓ <strong>Realistic capacity planning</strong> – See how many open spots you actually have once cancellations and no-shows are factored in.</li>
                    <li>✓ <strong>Warm waitlist nurture</strong> – Light-touch check-ins between sessions and 1-click "Convert to active" when a spot opens.</li>
                  </ul>
                </div>
                <div className="segment-card-visual">
                  <div className="segment-mockup">
                    <div className="mockup-title">Detected Interventions</div>
                    <div className="product-demo-placeholder" style={{ height: "100%", minHeight: "250px", flexDirection: "column", gap: "8px" }}>
                      [Visual: A sidebar showing "Detected Interventions." It lists tags like "Cognitive Restructuring," "Validation," and "Grounding Techniques" extracted from the transcript.]
                      <small style={{ display: "block", marginTop: "8px", fontSize: "12px", opacity: "0.8", maxWidth: "90%", textAlign: "center" }}>
                        💡 Insert visualization showing detected therapeutic interventions sidebar with tags extracted from session
                      </small>
                    </div>
                  </div>
                </div>
              </div>
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

      {/* The AidMi Difference */}
      <section className="difference">
        <div className="container">
          <div className="section-header">
            <h2>Why AidMi?</h2>
            <p className="section-subhead">AidMi is built for behavioral health. It closes the loop from intake to follow-up, gives you back eye contact in session.</p>
          </div>

          <div className="difference-grid">
            <div className="difference-card">
              <div className="difference-visual">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "48px", height: "48px", color: "var(--dark-navy)" }}>
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z" />
                </svg>
              </div>
              <h3 className="difference-title">Built for Behavioral Health</h3>
              <p className="difference-description">AidMi is co-designed with psychiatrists, psychologists, therapists, and counselors. It understands 50-minute therapy, 15-minute med checks, risk language, and prior auth—not just "primary care notes with extra steps."</p>
            </div>

            <div className="difference-card">
              <div className="difference-visual">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "48px", height: "48px", color: "var(--dark-navy)" }}>
                  <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z" />
                </svg>
              </div>
              <h3 className="difference-title">One Assistant for each Session</h3>
              <p className="difference-description">Morning Brief preps you before, Session Scribe captures the encounter in your voice, and Pebble nudges clients between visits. One loop, instead of three disconnected apps.</p>
            </div>

            <div className="difference-card">
              <div className="difference-visual">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "48px", height: "48px", color: "var(--dark-navy)" }}>
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" />
                </svg>
              </div>
              <h3 className="difference-title">Safe, Source-Linked</h3>
              <p className="difference-description">Every line the AI suggests can be traced back to real data: intake answers, measures, or transcript snippets. Your data stays siloed, and documentation stays insurance-ready without extra clicks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            {/* SAFETY & LIABILITY BLOCK */}
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false" aria-controls="faq-answer-1">
                <span>Does the AI "hallucinate" or make things up?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer" id="faq-answer-1">
                <div className="faq-answer-content">
                  We use a "Constrained Clinical Model." Unlike ChatGPT, which is creative, AidMi is restrictive. It is programmed to prioritize accuracy over fluency. If the audio is unclear, it won't guess—it will flag the section for you to review. We never invent clinical details.
                </div>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question" aria-expanded="false" aria-controls="faq-answer-2">
                <span>If clients track their mood in Pebble, am I liable if I don&apos;t see a suicide flag?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer" id="faq-answer-2">
                <div className="faq-answer-content">
                  No. Pebble is designed as a clinical insight tool, not a crisis monitoring service. During onboarding, clients explicitly acknowledge that data is reviewed only during scheduled appointments. Crucially, if a client logs a high-risk entry (e.g., high suicidality score), the app automatically intervenes by directing them to immediate crisis resources (988, Crisis Text Line) and displaying their safety plan. This ensures clients get immediate help while protecting your license and your boundaries outside of office hours.
                </div>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question" aria-expanded="false" aria-controls="faq-answer-3">
                <span>What happens to the session audio? Is it recorded?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer" id="faq-answer-3">
                <div className="faq-answer-content">
                  We are a &quot;Zero-Retention&quot; platform. Once the note is generated and exported to your EHR, the audio is permanently scrubbed from our servers. Your clients&apos; privacy is our highest priority, and we never hold recordings longer than necessary to complete documentation.
                </div>
              </div>
            </div>

            {/* CAN IT HANDLE MY MESSY REALITY BLOCK */}
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false" aria-controls="faq-answer-4">
                <span>Can it handle couples or family therapy?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer" id="faq-answer-4">
                <div className="faq-answer-content">
                  Yes. AidMi utilizes advanced speaker diarization to distinguish between multiple distinct voice signatures (e.g., "Partner A" vs. "Partner B"). The AI automatically attributes quotes and affect to the correct speaker in the generated note, so you don't have to untangle the conversation later.
                </div>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question" aria-expanded="false" aria-controls="faq-answer-5">
                <span>My practice is niche (e.g., Somatic, Psychoanalytic, Child). Can it handle that?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer" id="faq-answer-5">
                <div className="faq-answer-content">
                  Yes. AidMi doesn't force you into a rigid box. You can toggle between formats—standard medical SOAP for a med check, or narrative DAP for a psychodynamic session, or your very own format. It listens for the interventions you use, whether that's CBT homework or somatic experiencing.
                </div>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question" aria-expanded="false" aria-controls="faq-answer-6">
                <span>Does AidMi work with telehealth (Zoom, Google Meet, etc.)?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  Yes. AidMi runs alongside whatever telehealth platform you already use—Zoom, Google Meet, Doxy, or your EMR's built-in video. For online sessions, you simply start the visit in AidMi and your AI assistant securely listens in.
                  <br /><br />
                  <strong>Prefer not to stream live?</strong> You can also drag-and-drop past audio files directly into AidMi to generate notes retroactively.
                </div>
              </div>
            </div>

            {/* LOGISTICS & BUSINESS BLOCK */}
            <div className="faq-item">
              <button className="faq-question">
                <span>Do I need to change my EHR to use AidMi?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  No. Integrating new tech is usually a nightmare, so we skipped it. AidMi lives alongside your EHR (SimplePractice, Epic, etc.) rather than inside it. You get the power of advanced AI without asking your IT department for permission. Just copy, paste, sign.
                </div>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question">
                <span>Is the Pebble client app required?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  No, Pebble is completely optional. Many clinicians use only the ambient documentation feature. However, clinicians who offer Pebble to clients report significantly better session prep and improved treatment outcomes due to continuous data between sessions.
                </div>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question">
                <span>How does pricing work?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  We offer simple per-clinician pricing starting at $99/month. This includes unlimited documentation, morning briefs, and EHR integrations. The Pebble client app is available as an add-on for practices that want between-session tracking. No contracts, cancel anytime.
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
              <h2>Go Home On Time Tonight</h2>
              <p>You didn't become a clinician to do data entry.<br /><br />Let AidMi handle the paperwork while you handle the care.</p>
              <div className="cta-buttons">
                <a href="#" className="btn btn-primary btn-large contact-trigger">Reclaim Your Evening</a>
                <a href="#" className="btn btn-secondary btn-large contact-trigger">Book a Demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-newsletter">
            <h3>The Private Practice Growth Memo</h3>
            <p>Join thousands of clinicians receiving weekly tips on billing codes, audit-proofing, and therapeutic workflows. No fluff, just practice management.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Dr.Email@practice.com" aria-label="Email" />
              <button type="submit">Subscribe</button>
            </form>
            <div className="newsletter-privacy">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z" />
              </svg>
              We respect your privacy. Unsubscribe anytime.
            </div>
          </div>
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
                <li><a href="#ambient">Ambient Scribe</a></li>
                <li><a href="#precharting">Morning Briefs</a></li>
                <li><a href="#pebble">Pebble Client App</a></li>
                <li><a href="#practice-health">Practice Health</a></li>
                <li><a href="#features">See All Features</a></li>
                <li><a href="/integrations">Electronic Health Record (EHR)</a></li>
                <li><a href="/integrations#telehealth">Telehealth</a></li>
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
