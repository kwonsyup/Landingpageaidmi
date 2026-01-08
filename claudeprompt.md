# AidMi Landing Page Iteration Plan

## Implementation Phases

| Phase | Scope | Complexity | Est. Time |
|-------|-------|------------|-----------|
| 1 | Hero + Trust Strip | Medium | 15 min |
| 2 | Problem Section (NEW) | Low | 10 min |
| 3 | Value Props (Replace Tabs) | High | 20 min |
| 4 | How It Works | Medium | 15 min |
| 5 | Use Cases (Remove Toggle) | Medium | 15 min |
| 6 | Testimonials | Low | 10 min |
| 7 | Pricing Section (NEW) | High | 20 min |
| 8 | Security Section (NEW) | Low | 10 min |
| 9 | FAQ Rewrite | Medium | 15 min |
| 10 | Final CTA + Footer + Cleanup | Medium | 15 min |

---

# PHASE 1: Hero + Trust Strip

## Figma Make Prompt — Phase 1

```
## OBJECTIVE
Update the Hero section and Trust Strip to match new "longitudinal clinical intelligence" positioning. Change terminology from "patient" to "client" throughout.

---

## HERO SECTION CHANGES

### Current State (to replace):
- Headline: "The AI That Briefs You Before The Patient Walks In."
- Subhead mentions "caseload, risk, and revenue"
- CTA: "Try AidMi Free"
- Secondary CTA: "See Your Morning Brief"

### New Content:

**Headline:**
```html
<h1>The AI That <em style="font-style: italic">Briefs</em> You Before Your Client Walks In.</h1>
```

**Subheadline (replace .hero-subhead content):**
```html
<p class="hero-subhead">
  AidMi builds longitudinal context for every client — what changed, what matters, what to follow up on. Prep in seconds. Document with proof. Answer questions about their history instantly.
</p>
```

**EHR compatibility note (replace .hero-ehr-note):**
```html
<p class="hero-ehr-note">Works alongside your existing EHR.</p>
```

**Primary CTA Button:**
- Text: "Get AidMi Free" (was "Try AidMi Free")
- Keep existing .btn-primary styling

**Secondary CTA Button:**
- Text: "Watch a 1-minute demo" (was "See Your Morning Brief")
- Add play icon before text
- Keep existing .btn-secondary styling

### Visual Placeholder Update:
Replace the current placeholder text with:
```html
<div class="product-demo-placeholder" style="height: 400px; flex-direction: column; gap: 12px">
  [Today's Brief UI Preview]
  <small style="display: block; margin-top: 12px; font-size: 13px; opacity: 0.8; max-width: 400px; text-align: center">
    💡 Show a clean "Today's Brief" card with client name, key changes, and action items
  </small>
</div>
```

### Hero Compliance Badge:
Keep as-is: "HIPAA Compliant • AES-256 Encryption"

---

## TRUST STRIP CHANGES

### Current State:
```html
<div class="trust-label">Co-designed with clinicians from</div>
```

### New Content:
```html
<div class="trust-label">Co-designed with US behavioral health clinicians from:</div>
```

Keep the marquee logos exactly as they are.

---

## GLOBAL FIND & REPLACE

Throughout the ENTIRE codebase, replace:
- "patient" → "client" (case-sensitive, check context)
- "Patient" → "Client" (capitalized version)
- "patients" → "clients"
- "Patients" → "Clients"

**Exceptions - DO NOT replace:**
- "patient app" (we're removing Pebble anyway)
- Technical terms like "patient ID" in code comments
- Medical terminology where "patient" is clinically appropriate

---

## CSS REFINEMENTS (optional polish)

Update .hero-ehr-note for slightly more emphasis:
```css
.hero-ehr-note {
  font-size: 16px;
  color: var(--text-gray);
  margin-bottom: 32px;
  font-weight: 600;
  font-style: normal; /* Remove italic */
  background: rgba(0, 64, 140, 0.04);
  padding: 12px 20px;
  border-radius: var(--border-radius-pill);
  display: inline-block;
}
```

---

## VALIDATION CHECKLIST
- [ ] Headline says "Client" not "Patient"
- [ ] Subhead focuses on "longitudinal context"
- [ ] Primary CTA says "Get AidMi Free"
- [ ] Secondary CTA says "Watch a 1-minute demo"
- [ ] Trust strip says "US behavioral health clinicians"
- [ ] No mention of "caseload", "risk", or "revenue" in hero
```

---

# PHASE 2: Problem Section (NEW)

## Figma Make Prompt — Phase 2

```
## OBJECTIVE
Add a new "Problem" section immediately after the Trust Strip. This section creates empathy by describing the pain point before introducing the solution.

---

## PLACEMENT
Insert this new section BETWEEN:
- Trust Strip (.trust-strip)
- Deep Dive Features (.deep-dive)

---

## HTML STRUCTURE

```html
<!-- Problem Section -->
<section class="problem-section">
  <div class="container">
    <div class="problem-content">
      <h2>Your notes are a filing cabinet.<br>Your brain does all the work.</h2>
      
      <div class="problem-body">
        <p class="problem-pain">
          Before every session, the same scramble. Skimming old notes. Trying to remember: 
          <em>What did we adjust last time? When did the panic attacks start? Did I follow up on that job situation?</em>
        </p>
        
        <p class="problem-current">
          Your current tools store information. They don't surface it when you need it.
        </p>
        
        <p class="problem-solution">
          AidMi is different. It synthesizes your client's history into a brief you can scan in 30 seconds. It answers questions across months of sessions — with citations. <strong>Longitudinal context for every client.</strong>
        </p>
      </div>
    </div>
  </div>
</section>
```

---

## CSS STYLING

```css
/* ==================== PROBLEM SECTION ==================== */
.problem-section {
  padding: 100px 0;
  background: linear-gradient(180deg, var(--pure-white) 0%, var(--off-white) 100%);
  position: relative;
}

.problem-content {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
}

.problem-section h2 {
  font-size: clamp(2rem, 4vw, 2.75rem);
  color: var(--dark-navy);
  margin-bottom: 40px;
  line-height: 1.2;
}

.problem-body {
  text-align: left;
}

.problem-pain {
  font-size: 19px;
  line-height: 1.8;
  color: var(--text-dark);
  margin-bottom: 24px;
}

.problem-pain em {
  color: var(--dark-navy);
  font-style: italic;
  background: linear-gradient(180deg, transparent 60%, rgba(249, 184, 175, 0.4) 60%);
  padding: 0 4px;
}

.problem-current {
  font-size: 19px;
  line-height: 1.8;
  color: var(--text-gray);
  margin-bottom: 24px;
  padding-left: 20px;
  border-left: 3px solid var(--pale-blue);
}

.problem-solution {
  font-size: 19px;
  line-height: 1.8;
  color: var(--text-dark);
  background: rgba(0, 64, 140, 0.03);
  padding: 24px 28px;
  border-radius: var(--border-radius-sm);
  border: 1px solid rgba(0, 64, 140, 0.08);
}

.problem-solution strong {
  color: var(--dark-navy);
  font-weight: 700;
}

/* Mobile */
@media (max-width: 768px) {
  .problem-section {
    padding: 80px 0;
  }
  
  .problem-section h2 {
    font-size: 1.75rem;
  }
  
  .problem-pain,
  .problem-current,
  .problem-solution {
    font-size: 17px;
  }
}
```

---

## DESIGN SPECIFICATIONS

**Layout:**
- Centered container, max-width 760px
- Generous whitespace (100px vertical padding)

**Typography:**
- Headline: Merriweather, 2.75rem desktop / 1.75rem mobile
- Body: Inter, 19px / 17px mobile, line-height 1.8

**Visual Hierarchy:**
1. Headline (pain statement) — bold, dark navy
2. Pain description with emphasized italic phrases — salmon highlight
3. Current state observation — indented with pale-blue left border (creates visual separation)
4. Solution intro — subtle background card, ends with bold "Longitudinal context"

**Colors:**
- Highlight on italic text: rgba(249, 184, 175, 0.4) (salmon at 40%)
- Left border: var(--pale-blue)
- Solution card background: rgba(0, 64, 140, 0.03)

---

## VALIDATION CHECKLIST
- [ ] Section appears after Trust Strip, before features
- [ ] Headline breaks on two lines as designed
- [ ] Italic phrases have salmon highlight
- [ ] "Current tools" paragraph has left border
- [ ] Solution paragraph has subtle card treatment
- [ ] "Longitudinal context for every client" is bold
- [ ] Responsive at 768px breakpoint
```

---

# PHASE 3: Value Props (Major Simplification)

## Figma Make Prompt — Phase 3

```
## OBJECTIVE
Replace the complex 4-tab bento grid feature section with 3 simple, equal cards showcasing Today's Brief, Aimé, and Evidence-Backed Notes. Remove all tabs, remove Morning Briefs/Ambient Scribe/Pebble/Practice Health content.

---

## REMOVE ENTIRELY

Delete these elements from the DOM:
- `.feature-tabs` (the tab button row)
- All `.tab-content` containers
- All `.bento-grid` content
- All references to: "Morning Briefs", "Ambient Scribe", "Pebble Companion", "Practice Health"
- The `featureTabs`, `tabContents` JavaScript logic in useLandingInteractions.ts

---

## NEW HTML STRUCTURE

Replace the entire `.deep-dive` section content with:

```html
<!-- Core Value Props Section -->
<section id="features" class="value-props">
  <div class="container">
    <div class="section-header">
      <h2>World's Best Clinical Resident</h2>
      <p class="section-subhead">
        An assistant who reads every note, tracks every trend, and preps your chart before you walk in the room. That's AidMi.
      </p>
    </div>

    <div class="value-props-grid">
      <!-- Card 1: Today's Brief -->
      <div class="value-prop-card">
        <div class="value-prop-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"/>
          </svg>
        </div>
        <h3 class="value-prop-title">Today's Brief</h3>
        <p class="value-prop-tagline">Walk into every session prepared.</p>
        <p class="value-prop-description">
          Before each appointment, AidMi generates a brief: what changed since last visit, symptom trends, medication updates, open threads to revisit. Scan it in 30 seconds. Walk in ready.
        </p>
      </div>

      <!-- Card 2: Aimé -->
      <div class="value-prop-card">
        <div class="value-prop-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"/>
          </svg>
        </div>
        <h3 class="value-prop-title">Aimé</h3>
        <p class="value-prop-tagline">Ask anything. Get answers with proof.</p>
        <p class="value-prop-description">
          "When did we first discuss the insomnia?" "What medications have we tried?" Aimé searches across every session and returns answers with citations. Like a research assistant for every client.
        </p>
      </div>

      <!-- Card 3: Evidence-Backed Notes -->
      <div class="value-prop-card">
        <div class="value-prop-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"/>
          </svg>
        </div>
        <h3 class="value-prop-title">Evidence-Backed Notes</h3>
        <p class="value-prop-tagline">Documentation you can defend.</p>
        <p class="value-prop-description">
          Every claim in your note links directly to the source. Click to verify. If evidence is missing, we flag it. No second-guessing. Sign with confidence.
        </p>
      </div>
    </div>
  </div>
</section>
```

---

## NEW CSS STYLING

Replace all `.deep-dive` and `.bento-*` styles with:

```css
/* ==================== VALUE PROPS SECTION ==================== */
.value-props {
  padding: var(--section-padding) 0;
  background: linear-gradient(180deg, var(--off-white) 0%, #f5f8fc 100%);
}

.value-props .section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 60px;
}

.value-props .section-header h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--dark-navy);
  margin-bottom: 16px;
}

.value-props .section-subhead {
  font-size: 18px;
  color: var(--text-gray);
  line-height: 1.7;
}

/* 3-Column Grid */
.value-props-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

/* Individual Cards */
.value-prop-card {
  background: var(--pure-white);
  border-radius: var(--border-radius-lg);
  padding: 40px 32px;
  box-shadow: 0 4px 24px rgba(0, 64, 140, 0.06);
  border: 1px solid rgba(0, 64, 140, 0.06);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.value-prop-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 64, 140, 0.12);
  border-color: var(--pale-blue);
}

/* Icon */
.value-prop-icon {
  width: 72px;
  height: 72px;
  margin: 0 auto 24px;
  background: linear-gradient(135deg, var(--pale-blue), var(--dark-navy));
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.value-prop-card:hover .value-prop-icon {
  transform: scale(1.1) rotate(5deg);
  background: linear-gradient(135deg, var(--salmon), var(--orangey-red));
}

.value-prop-icon svg {
  width: 32px;
  height: 32px;
  fill: currentColor;
}

/* Title */
.value-prop-title {
  font-family: 'Merriweather', serif;
  font-size: 24px;
  font-weight: 700;
  color: var(--dark-navy);
  margin-bottom: 8px;
}

/* Tagline (italic) */
.value-prop-tagline {
  font-size: 16px;
  font-style: italic;
  color: var(--text-gray);
  margin-bottom: 16px;
}

/* Description */
.value-prop-description {
  font-size: 15px;
  line-height: 1.7;
  color: var(--text-gray);
  flex-grow: 1;
}

/* Responsive */
@media (max-width: 1024px) {
  .value-props-grid {
    grid-template-columns: 1fr;
    gap: 24px;
    max-width: 500px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .value-props {
    padding: 80px 0;
  }
  
  .value-prop-card {
    padding: 32px 24px;
  }
  
  .value-prop-icon {
    width: 64px;
    height: 64px;
  }
  
  .value-prop-icon svg {
    width: 28px;
    height: 28px;
  }
  
  .value-prop-title {
    font-size: 22px;
  }
}
```

---

## JAVASCRIPT CLEANUP

In `useLandingInteractions.ts`, REMOVE these blocks:

```typescript
// REMOVE: Feature Tabs logic (lines ~180-200)
const featureTabs = document.querySelectorAll<HTMLElement>(".feature-tab");
const tabContents = document.querySelectorAll<HTMLElement>(".tab-content");
// ... all related event listeners
```

---

## DESIGN SPECIFICATIONS

**Layout:**
- 3-column grid, equal width cards
- 32px gap between cards
- Cards have equal height (flexbox stretch)

**Card Anatomy:**
1. Icon (72x72px, gradient background, rounded corners)
2. Title (Merriweather, 24px, bold)
3. Tagline (Inter, 16px, italic, gray)
4. Description (Inter, 15px, gray, grows to fill)

**Hover State:**
- Card lifts 8px (`translateY(-8px)`)
- Shadow deepens
- Border becomes pale-blue
- Icon scales 1.1x and rotates 5deg
- Icon gradient changes to salmon→orangey-red

**Mobile (< 1024px):**
- Single column, stacked cards
- Max-width 500px, centered

---

## VALIDATION CHECKLIST
- [ ] No tabs visible
- [ ] No bento grid visible
- [ ] No Pebble/Practice Health content
- [ ] 3 equal cards in a row (desktop)
- [ ] Cards stack on mobile
- [ ] Icons animate on hover
- [ ] Cards lift on hover
- [ ] "Today's Brief" is first card
- [ ] "Aimé" is second card  
- [ ] "Evidence-Backed Notes" is third card
```

---

# PHASE 4: How It Works (Simplification)

## Figma Make Prompt — Phase 4

```
## OBJECTIVE
Simplify the "How It Works" section. Update copy to match v3. Remove complex jargon and focus on the simple 3-step flow: Capture → Sign → Context Builds.

---

## CONTENT UPDATES ONLY (Keep existing layout structure)

### Section Header

**Headline:**
```html
<h2>From session to signed note in 2 minutes.</h2>
```

**Subheadline:** REMOVE the existing subhead ("Wake up to a briefing. Flow through your sessions. Go home with empty charts.")

---

### Step 1: Capture

**Title:** "Capture" (was "Before: The Morning Brief")

**Number:** 1

**Description:**
```html
<p class="step-description">
  Start your in-person or telehealth session. AidMi transcribes in real-time with speaker separation.
</p>
```

**Visual placeholder text:**
```
[Session Recording Interface]
💡 Show audio waveform visualization with speaker labels (Clinician / Client)
```

---

### Step 2: Sign

**Title:** "Sign" (was "During: 2-Minute Notes, Your Way")

**Number:** 2

**Description:**
```html
<p class="step-description">
  End the session. Your note appears — fully drafted, with every clinical claim linked to the source. Verify with a click. Edit if needed. Sign.
</p>
```

**Visual placeholder text:**
```
[Note Review Interface]
💡 Show a SOAP note with clickable citation highlights linking to transcript excerpts
```

---

### Step 3: Context Builds

**Title:** "Context Builds" (was "After: Verify, Click, Vanish.")

**Number:** 3

**Description:**
```html
<p class="step-description">
  Each signed note updates your client's profile. Today's Brief evolves. Aimé gets smarter. Your clinical intelligence compounds.
</p>
```

**Visual placeholder text:**
```
[Client Profile Growth]
💡 Show a timeline visualization where each session adds to the client's longitudinal record
```

---

## UPDATED HTML (replace existing step items)

```html
<div class="steps-list">
  <div class="step-item active" data-step="capture">
    <div class="step-number">1</div>
    <h3 class="step-title">Capture</h3>
    <p class="step-description">Start your in-person or telehealth session. AidMi transcribes in real-time with speaker separation.</p>
  </div>

  <div class="step-item" data-step="sign">
    <div class="step-number">2</div>
    <h3 class="step-title">Sign</h3>
    <p class="step-description">End the session. Your note appears — fully drafted, with every clinical claim linked to the source. Verify with a click. Edit if needed. Sign.</p>
  </div>

  <div class="step-item" data-step="context">
    <div class="step-number">3</div>
    <h3 class="step-title">Context Builds</h3>
    <p class="step-description">Each signed note updates your client's profile. Today's Brief evolves. Aimé gets smarter. Your clinical intelligence compounds.</p>
  </div>
</div>
```

---

## UPDATED VISUAL PANELS

```html
<div class="dynamic-visual">
  <div class="visual-content active" data-visual="capture">
    <div class="product-demo-placeholder" style="height: 320px; flex-direction: column; gap: 12px">
      [Session Recording Interface]
      <small style="display: block; margin-top: 12px; font-size: 13px; opacity: 0.8; max-width: 380px; text-align: center">
        💡 Audio waveform with real-time transcription and speaker labels
      </small>
    </div>
  </div>

  <div class="visual-content" data-visual="sign">
    <div class="product-demo-placeholder" style="height: 320px; flex-direction: column; gap: 12px">
      [Note Review Interface]
      <small style="display: block; margin-top: 12px; font-size: 13px; opacity: 0.8; max-width: 380px; text-align: center">
        💡 SOAP note with highlighted citations — click any claim to see source
      </small>
    </div>
  </div>

  <div class="visual-content" data-visual="context">
    <div class="product-demo-placeholder" style="height: 320px; flex-direction: column; gap: 12px">
      [Client Profile Growth]
      <small style="display: block; margin-top: 12px; font-size: 13px; opacity: 0.8; max-width: 380px; text-align: center">
        💡 Timeline showing sessions compounding into longitudinal intelligence
      </small>
    </div>
  </div>
</div>
```

---

## JAVASCRIPT UPDATE

In `useLandingInteractions.ts`, update the step data attributes:

```typescript
// Update step items selector to use new data-step values
// Change: data-step="prep" → data-step="capture"
// Change: data-step="listen" → data-step="sign"  
// Change: data-step="sign" → data-step="context"

// Update visual content selector to match
// Change: data-visual="prep" → data-visual="capture"
// Change: data-visual="listen" → data-visual="sign"
// Change: data-visual="sign" → data-visual="context"
```

---

## VALIDATION CHECKLIST
- [ ] Headline says "From session to signed note in 2 minutes."
- [ ] No subhead below headline
- [ ] Step 1 is "Capture"
- [ ] Step 2 is "Sign"
- [ ] Step 3 is "Context Builds"
- [ ] No Morning Brief references
- [ ] No "Constrained Clinical Model" jargon
- [ ] Step switching still works on click
- [ ] Visual panels update correctly
```

---

# PHASE 5: Use Cases (Remove Toggle)

## Figma Make Prompt — Phase 5

```
## OBJECTIVE
Simplify the "Who We're For" section by removing the persona toggle UI. Replace with 3 simple stacked text blocks. Remove mockups and complex animations.

---

## REMOVE ENTIRELY

- `.persona-toggle-container` (the toggle buttons)
- `.persona-toggle` and `.persona-slider`
- `.persona-btn` elements
- `.segment-card-visual` (the mockup areas)
- All persona toggle JavaScript in useLandingInteractions.ts
- Background color transition logic

---

## NEW HTML STRUCTURE

Replace the entire `.who-for` section content:

```html
<!-- Use Cases Section -->
<section class="use-cases">
  <div class="container">
    <div class="section-header">
      <h2>Built for How <em>You</em> Practice</h2>
    </div>

    <div class="use-cases-grid">
      <!-- Psychiatrists -->
      <div class="use-case-block">
        <h3>For Psychiatrists</h3>
        <p>
          High-volume, short sessions. You need to know what changed and what to refill — fast. Today's Brief gives you the snapshot. Aimé answers the edge cases. Finish documentation in the 2 minutes between appointments, not after hours.
        </p>
      </div>

      <!-- Psychologists -->
      <div class="use-case-block">
        <h3>For Psychologists</h3>
        <p>
          Deep therapeutic work that spans months. Track treatment progress without re-reading every note. Let AidMi remember the threads so you can stay present in the room.
        </p>
      </div>

      <!-- Therapists -->
      <div class="use-case-block">
        <h3>For Therapists</h3>
        <p>
          Rapport is everything. AidMi captures the details that build connection — the sister's name, the job interview, the vacation that helped. Start every session exactly where you left off.
        </p>
      </div>
    </div>
  </div>
</section>
```

---

## NEW CSS STYLING

Replace all `.who-for`, `.persona-*`, `.segment-*` styles:

```css
/* ==================== USE CASES SECTION ==================== */
.use-cases {
  padding: var(--section-padding) 0;
  background: var(--pure-white);
}

.use-cases .section-header {
  text-align: center;
  margin-bottom: 60px;
}

.use-cases .section-header h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--dark-navy);
}

.use-cases .section-header h2 em {
  font-style: italic;
  color: var(--dark-navy);
}

/* Grid Layout */
.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;
}

/* Individual Blocks */
.use-case-block {
  padding: 32px;
  background: var(--off-white);
  border-radius: var(--border-radius-sm);
  border-left: 4px solid var(--pale-blue);
  transition: all 0.3s ease;
}

.use-case-block:nth-child(1) {
  border-left-color: var(--dark-navy);
}

.use-case-block:nth-child(2) {
  border-left-color: var(--pale-blue);
}

.use-case-block:nth-child(3) {
  border-left-color: var(--salmon);
}

.use-case-block:hover {
  background: var(--pure-white);
  box-shadow: var(--shadow-soft);
  transform: translateY(-4px);
}

.use-case-block h3 {
  font-family: 'Merriweather', serif;
  font-size: 22px;
  font-weight: 700;
  color: var(--dark-navy);
  margin-bottom: 16px;
}

.use-case-block p {
  font-size: 16px;
  line-height: 1.7;
  color: var(--text-gray);
}

/* Responsive */
@media (max-width: 1024px) {
  .use-cases-grid {
    grid-template-columns: 1fr;
    gap: 24px;
    max-width: 600px;
  }
}

@media (max-width: 768px) {
  .use-cases {
    padding: 80px 0;
  }
  
  .use-case-block {
    padding: 24px;
  }
  
  .use-case-block h3 {
    font-size: 20px;
  }
}
```

---

## JAVASCRIPT CLEANUP

In `useLandingInteractions.ts`, REMOVE these blocks entirely:

```typescript
// REMOVE: Persona Toggle (Who We're For) - approximately lines 130-175
const personaBtns = document.querySelectorAll<HTMLElement>(".persona-btn");
const personaToggle = document.querySelector<HTMLElement>(".persona-toggle");
const segmentCards = document.querySelectorAll<HTMLElement>(".segment-card");
const whoForSection = document.querySelector<HTMLElement>(".who-for");
// ... all related event listeners and logic
```

---

## DESIGN SPECIFICATIONS

**Layout:**
- 3-column grid on desktop
- Single column on tablet/mobile
- Max-width 1100px, centered

**Card Anatomy:**
- Light gray background (--off-white)
- 4px left border (different color per persona)
- 32px padding
- Role name as H3
- Description paragraph

**Border Colors:**
- Psychiatrists: --dark-navy (authority, precision)
- Psychologists: --pale-blue (calm, analytical)
- Therapists: --salmon (warmth, connection)

**Hover State:**
- Background → white
- Add soft shadow
- Lift 4px

**No Mockups, No Toggle, No Animations**
This section is intentionally simple text to let the copy speak.

---

## VALIDATION CHECKLIST
- [ ] No toggle buttons visible
- [ ] No mockup placeholders
- [ ] 3 cards in a row (desktop)
- [ ] Cards stack on mobile
- [ ] Each card has different left border color
- [ ] Hover effect works
- [ ] Section headline has italicized "You"
- [ ] No JavaScript errors from removed code
```

---

# PHASE 6: Testimonials (Simplification)

## Figma Make Prompt — Phase 6

```
## OBJECTIVE
Simplify testimonials to 3 clean quote cards. Remove avatars, star ratings, and verified badges. Update quotes to match v3 copy.

---

## NEW HTML STRUCTURE

Replace the entire `.testimonials` section content:

```html
<!-- Social Proof Section -->
<section class="testimonials">
  <div class="container">
    <div class="section-header">
      <h2>Clinicians who practice with confidence.</h2>
    </div>

    <div class="testimonials-grid">
      <!-- Testimonial 1 -->
      <div class="testimonial-card">
        <blockquote class="testimonial-quote">
          "I used to spend 10 minutes before each session digging through old notes. Now I glance at Today's Brief and I'm ready."
        </blockquote>
        <cite class="testimonial-attribution">
          — Psychologist, Palo Alto
        </cite>
      </div>

      <!-- Testimonial 2 -->
      <div class="testimonial-card">
        <blockquote class="testimonial-quote">
          "Aimé is the feature I didn't know I needed. I asked 'when did we start the Lexapro?' and got the answer with the exact session cited. Took 2 seconds."
        </blockquote>
        <cite class="testimonial-attribution">
          — Psychiatrist, San Francisco
        </cite>
      </div>

      <!-- Testimonial 3 -->
      <div class="testimonial-card">
        <blockquote class="testimonial-quote">
          "I finally trust my AI notes. One click shows the supporting source. That's the difference."
        </blockquote>
        <cite class="testimonial-attribution">
          — LMFT, Mountain View
        </cite>
      </div>
    </div>
  </div>
</section>
```

---

## NEW CSS STYLING

Replace all existing `.testimonial-*` styles:

```css
/* ==================== TESTIMONIALS SECTION ==================== */
.testimonials {
  padding: var(--section-padding) 0;
  background: linear-gradient(180deg, var(--off-white) 0%, var(--pure-white) 100%);
}

.testimonials .section-header {
  text-align: center;
  margin-bottom: 60px;
}

.testimonials .section-header h2 {
  font-size: clamp(2rem, 4vw, 2.75rem);
  color: var(--dark-navy);
}

/* Grid Layout (not horizontal scroll) */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 1100px;
  margin: 0 auto;
}

/* Individual Cards */
.testimonial-card {
  background: var(--pure-white);
  border-radius: var(--border-radius-lg);
  padding: 40px 32px;
  box-shadow: 0 4px 24px rgba(0, 64, 140, 0.06);
  border: 1px solid rgba(0, 64, 140, 0.06);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  position: relative;
}

.testimonial-card::before {
  content: '"';
  position: absolute;
  top: 24px;
  left: 28px;
  font-family: 'Merriweather', serif;
  font-size: 64px;
  line-height: 1;
  color: var(--salmon);
  opacity: 0.3;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0, 64, 140, 0.1);
  border-color: var(--salmon);
}

/* Quote */
.testimonial-quote {
  font-size: 17px;
  line-height: 1.7;
  color: var(--text-dark);
  margin: 0;
  padding: 0;
  border: none;
  flex-grow: 1;
  font-style: normal;
}

/* Attribution */
.testimonial-attribution {
  margin-top: 24px;
  font-size: 14px;
  font-style: normal;
  color: var(--text-light);
  font-weight: 600;
}

/* Responsive */
@media (max-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 24px;
    max-width: 600px;
  }
}

@media (max-width: 768px) {
  .testimonials {
    padding: 80px 0;
  }
  
  .testimonial-card {
    padding: 32px 24px;
  }
  
  .testimonial-card::before {
    font-size: 48px;
    top: 20px;
    left: 20px;
  }
  
  .testimonial-quote {
    font-size: 16px;
  }
}
```

---

## REMOVED ELEMENTS

Delete from HTML:
- `.testimonials-scroll` (horizontal scroll wrapper)
- `.testimonial-header`
- `.testimonial-avatar`
- `.testimonial-stars`
- `.testimonial-meta`
- `.testimonial-author` (replaced by `.testimonial-attribution`)
- `.testimonial-role`
- `.testimonial-tag`
- 4th testimonial (patient testimonial - remove entirely)

---

## DESIGN SPECIFICATIONS

**Layout:**
- 3-column grid (not horizontal scroll)
- Max-width 1100px, centered
- 32px gap

**Card Anatomy:**
- Large decorative quotation mark (top-left, faded salmon)
- Quote text (17px, dark)
- Em-dash attribution (14px, gray, bottom)

**Visual Treatment:**
- Soft shadow
- Subtle border
- Hover: lift + salmon border

**No Avatars, No Stars, No Verified Badges**
Clean, minimal, trust-through-simplicity.

---

## VALIDATION CHECKLIST
- [ ] Only 3 testimonials (not 4)
- [ ] No horizontal scrolling
- [ ] No avatars or initials
- [ ] No star ratings
- [ ] No "verified" badges
- [ ] Decorative quotation mark visible
- [ ] Attribution uses em-dash format
- [ ] Cards are in grid (not flex scroll)
- [ ] No patient testimonial (removed)
```

---

# PHASE 7: Pricing Section (NEW)

## Figma Make Prompt — Phase 7

```
## OBJECTIVE
Add a new Pricing section with 3 tiers: Free, Professional, and Clinic. Place it after Testimonials, before Security section.

---

## PLACEMENT
Insert this new section AFTER `.testimonials` and BEFORE the new Security section (Phase 8).

---

## HTML STRUCTURE

```html
<!-- Pricing Section -->
<section id="pricing" class="pricing">
  <div class="container">
    <div class="section-header">
      <h2>Unlimited telehealth + AI notes on every plan.</h2>
      <p class="section-subhead">Built for behavioral health.</p>
    </div>

    <div class="pricing-grid">
      <!-- Free Tier -->
      <div class="pricing-card">
        <div class="pricing-header">
          <h3 class="pricing-tier-name">Free</h3>
          <div class="pricing-price">
            <span class="pricing-amount">$0</span>
            <span class="pricing-period">/forever</span>
          </div>
          <p class="pricing-tagline">We charge for speed and context, not for seeing patients.</p>
        </div>
        
        <ul class="pricing-features">
          <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Unlimited in-person + telehealth sessions</li>
          <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Unlimited AI note generation</li>
          <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Evidence-backed citations</li>
          <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Today's Brief (recent sessions)</li>
          <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>20 Aimé queries/month</li>
          <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>HIPAA compliant, BAA included</li>
        </ul>
        
        <div class="pricing-cta">
          <a href="#" class="btn btn-secondary btn-large contact-trigger">Get AidMi Free</a>
          <span class="pricing-cta-note">No credit card required.</span>
        </div>
      </div>

      <!-- Professional Tier (Highlighted) -->
      <div class="pricing-card pricing-card-featured">
        <div class="pricing-badge">Most Popular</div>
        <div class="pricing-header">
          <h3 class="pricing-tier-name">Professional</h3>
          <div class="pricing-price">
            <span class="pricing-amount">$79</span>
            <span class="pricing-period">/mo</span>
          </div>
          <p class="pricing-billing-note">billed annually ($99 monthly)</p>
          <p class="pricing-tagline">For busy clinicians who need full continuity.</p>
        </div>
        
        <ul class="pricing-features">
          <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Everything in Free, plus:</li>
          <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Today's Brief (full longitudinal history)</li>
          <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Unlimited Aimé queries</li>
          <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Custom note templates</li>
          <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Priority processing</li>
        </ul>
        
        <div class="pricing-cta">
          <a href="#" class="btn btn-primary btn-large contact-trigger">Start 14-day free trial</a>
        </div>
      </div>

      <!-- Clinic Tier -->
      <div class="pricing-card">
        <div class="pricing-header">
          <h3 class="pricing-tier-name">Clinic</h3>
          <div class="pricing-price">
            <span class="pricing-amount">$69</span>
            <span class="pricing-period">/seat/mo</span>
          </div>
          <p class="pricing-billing-note">billed annually, min. 2 seats ($89 monthly)</p>
          <p class="pricing-tagline">For care teams with compliance needs.</p>
        </div>
        
        <ul class="pricing-features">
          <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Everything in Professional, plus:</li>
          <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Admin dashboard</li>
          <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Shared template library</li>
          <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Role-based access</li>
          <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Audit logs & compliance suite</li>
          <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Priority support</li>
        </ul>
        
        <div class="pricing-cta">
          <a href="#" class="btn btn-secondary btn-large contact-trigger">Talk to us</a>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## CSS STYLING

```css
/* ==================== PRICING SECTION ==================== */
.pricing {
  padding: var(--section-padding) 0;
  background: linear-gradient(180deg, var(--pure-white) 0%, var(--off-white) 100%);
}

.pricing .section-header {
  text-align: center;
  margin-bottom: 60px;
}

.pricing .section-header h2 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  color: var(--dark-navy);
  margin-bottom: 8px;
}

.pricing .section-subhead {
  font-size: 18px;
  color: var(--text-gray);
}

/* Grid Layout */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
  align-items: start;
}

/* Individual Cards */
.pricing-card {
  background: var(--pure-white);
  border-radius: var(--border-radius-lg);
  padding: 40px 32px;
  box-shadow: 0 4px 24px rgba(0, 64, 140, 0.06);
  border: 2px solid rgba(0, 64, 140, 0.06);
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0, 64, 140, 0.1);
}

/* Featured Card (Professional) */
.pricing-card-featured {
  border-color: var(--dark-navy);
  box-shadow: 0 8px 40px rgba(0, 64, 140, 0.15);
  transform: scale(1.02);
  z-index: 1;
}

.pricing-card-featured:hover {
  transform: scale(1.02) translateY(-4px);
}

/* Badge */
.pricing-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--dark-navy);
  color: var(--pure-white);
  padding: 6px 16px;
  border-radius: var(--border-radius-pill);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Header */
.pricing-header {
  text-align: center;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(0, 64, 140, 0.08);
  margin-bottom: 24px;
}

.pricing-tier-name {
  font-family: 'Merriweather', serif;
  font-size: 24px;
  font-weight: 700;
  color: var(--dark-navy);
  margin-bottom: 12px;
}

.pricing-price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 4px;
  margin-bottom: 8px;
}

.pricing-amount {
  font-family: 'Merriweather', serif;
  font-size: 48px;
  font-weight: 700;
  color: var(--dark-navy);
  line-height: 1;
}

.pricing-period {
  font-size: 16px;
  color: var(--text-gray);
  font-weight: 500;
}

.pricing-billing-note {
  font-size: 13px;
  color: var(--text-light);
  margin-bottom: 8px;
}

.pricing-tagline {
  font-size: 14px;
  color: var(--text-gray);
  font-style: italic;
  margin: 0;
}

/* Features List */
.pricing-features {
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
  flex-grow: 1;
}

.pricing-features li {
  display: flex;
  align-items: start;
  gap: 12px;
  padding: 10px 0;
  font-size: 15px;
  color: var(--text-dark);
  border-bottom: 1px solid rgba(0, 64, 140, 0.04);
}

.pricing-features li:last-child {
  border-bottom: none;
}

.pricing-features li svg {
  width: 20px;
  height: 20px;
  fill: #10b981;
  flex-shrink: 0;
  margin-top: 2px;
}

.pricing-features li:first-child {
  font-weight: 600;
  color: var(--dark-navy);
}

/* CTA */
.pricing-cta {
  text-align: center;
}

.pricing-cta .btn {
  width: 100%;
}

.pricing-cta-note {
  display: block;
  margin-top: 12px;
  font-size: 13px;
  color: var(--text-light);
}

/* Responsive */
@media (max-width: 1024px) {
  .pricing-grid {
    grid-template-columns: 1fr;
    gap: 32px;
    max-width: 450px;
  }
  
  .pricing-card-featured {
    transform: none;
    order: -1; /* Move featured to top on mobile */
  }
  
  .pricing-card-featured:hover {
    transform: translateY(-4px);
  }
}

@media (max-width: 768px) {
  .pricing {
    padding: 80px 0;
  }
  
  .pricing-card {
    padding: 32px 24px;
  }
  
  .pricing-amount {
    font-size: 40px;
  }
}
```

---

## DESIGN SPECIFICATIONS

**Layout:**
- 3-column grid
- Professional tier slightly scaled up (1.02x) and elevated
- Max-width 1100px

**Card Anatomy:**
1. Badge (featured only): "Most Popular"
2. Tier name
3. Price + period
4. Billing note (paid tiers)
5. Tagline (italic)
6. Features list with green checkmarks
7. CTA button
8. CTA note (Free tier only)

**Visual Hierarchy:**
- Free: Secondary button, "No credit card required" note
- Professional: Primary button, highlighted border, badge
- Clinic: Secondary button

**Colors:**
- Checkmarks: #10b981 (green)
- Featured border: --dark-navy
- Badge: --dark-navy bg, white text

---

## VALIDATION CHECKLIST
- [ ] 3 pricing tiers visible
- [ ] Professional tier has "Most Popular" badge
- [ ] Professional tier is slightly larger/elevated
- [ ] All feature lists have green checkmarks
- [ ] Free tier says "$0/forever"
- [ ] Free tier has "No credit card required"
- [ ] Professional shows both annual ($79) and monthly ($99) pricing
- [ ] Clinic shows per-seat pricing
- [ ] All CTAs trigger contact modal
- [ ] Responsive stacking on mobile
- [ ] Professional tier moves to top on mobile
```

---

# PHASE 8: Security Section (NEW)

## Figma Make Prompt — Phase 8

```
## OBJECTIVE
Add a new Security section after Pricing, before FAQ. Communicate HIPAA compliance, data handling, and privacy practices.

---

## PLACEMENT
Insert AFTER `.pricing` and BEFORE `.faq`

---

## HTML STRUCTURE

```html
<!-- Security Section -->
<section class="security">
  <div class="container">
    <div class="security-content">
      <div class="security-header">
        <div class="security-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z"/>
          </svg>
        </div>
        <h2>Your clients' data, protected.</h2>
        <p class="security-intro">AidMi is built for behavioral health — where privacy isn't optional.</p>
      </div>

      <div class="security-features">
        <div class="security-feature">
          <div class="security-feature-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          </div>
          <div class="security-feature-text">
            <strong>HIPAA compliant</strong>
            <span>BAA included on all plans</span>
          </div>
        </div>

        <div class="security-feature">
          <div class="security-feature-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          </div>
          <div class="security-feature-text">
            <strong>No audio stored</strong>
            <span>Recordings are deleted immediately after transcription</span>
          </div>
        </div>

        <div class="security-feature">
          <div class="security-feature-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          </div>
          <div class="security-feature-text">
            <strong>Configurable transcript retention</strong>
            <span>Choose to retain, auto-delete after signing, or delete after X days</span>
          </div>
        </div>

        <div class="security-feature">
          <div class="security-feature-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          </div>
          <div class="security-feature-text">
            <strong>Encrypted everywhere</strong>
            <span>Data encrypted in transit and at rest</span>
          </div>
        </div>
      </div>

      <a href="/security" class="security-link">
        Learn more about our security practices →
      </a>
    </div>
  </div>
</section>
```

---

## CSS STYLING

```css
/* ==================== SECURITY SECTION ==================== */
.security {
  padding: 80px 0;
  background: var(--dark-navy);
  color: var(--pure-white);
}

.security-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.security-header {
  margin-bottom: 48px;
}

.security-icon {
  width: 72px;
  height: 72px;
  margin: 0 auto 24px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.security-icon svg {
  width: 36px;
  height: 36px;
  fill: var(--salmon);
}

.security h2 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  color: var(--pure-white);
  margin-bottom: 12px;
}

.security-intro {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
}

/* Features Grid */
.security-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 40px;
  text-align: left;
}

.security-feature {
  display: flex;
  gap: 16px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius-sm);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.security-feature:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
}

.security-feature-icon {
  width: 32px;
  height: 32px;
  background: rgba(16, 185, 129, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.security-feature-icon svg {
  width: 18px;
  height: 18px;
  fill: #10b981;
}

.security-feature-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.security-feature-text strong {
  font-size: 16px;
  font-weight: 600;
  color: var(--pure-white);
}

.security-feature-text span {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
}

/* Link */
.security-link {
  display: inline-flex;
  align-items: center;
  color: var(--salmon);
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.2s ease;
}

.security-link:hover {
  color: var(--pure-white);
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
  .security {
    padding: 60px 0;
  }
  
  .security-features {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .security-feature {
    padding: 20px;
  }
}
```

---

## DESIGN SPECIFICATIONS

**Layout:**
- Full-width dark navy background
- Content max-width 800px, centered
- 2-column grid for features (1 column on mobile)

**Visual Hierarchy:**
1. Shield icon (salmon fill, semi-transparent bg)
2. Headline (white)
3. Intro text (80% white)
4. 4 feature cards in 2x2 grid
5. "Learn more" link (salmon, underlines on hover)

**Colors:**
- Background: --dark-navy
- Icon: --salmon
- Checkmarks: #10b981 (green)
- Text: white and 70-80% white

**Contrast:**
This section uses inverted colors (dark bg, light text) to create visual separation and emphasize trust/security messaging.

---

## VALIDATION CHECKLIST
- [ ] Dark navy background
- [ ] Shield icon centered at top
- [ ] 4 feature items in 2x2 grid
- [ ] Green checkmark icons
- [ ] "Learn more" link at bottom
- [ ] Hover effects on feature cards
- [ ] Single column on mobile
- [ ] Links to /security page
```

---

# PHASE 9: FAQ Rewrite

## Figma Make Prompt — Phase 9

```
## OBJECTIVE
Rewrite FAQ section with 6 focused questions. Remove all Pebble, couples therapy, and niche practice questions. Update answers to match v3 positioning.

---

## REPLACE ENTIRE FAQ CONTENT

Delete all existing `.faq-item` elements and replace with:

```html
<!-- FAQ Section -->
<section class="faq">
  <div class="container">
    <div class="section-header">
      <h2>Questions? We've got answers.</h2>
    </div>

    <div class="faq-list">
      <!-- Question 1 -->
      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          <span>Is the Free plan really unlimited?</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-content">
            Yes. Unlimited sessions and unlimited notes. We charge for speed and advanced continuity features (full longitudinal history, unlimited Aimé queries) — not per client or per session.
          </div>
        </div>
      </div>

      <!-- Question 2 -->
      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          <span>What happens to my recordings?</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-content">
            Audio is deleted immediately after transcription. We never store recordings. Transcripts are retained to power citations, Today's Brief, and Aimé — but you can configure retention settings (auto-delete after signing, after X days, etc.).
          </div>
        </div>
      </div>

      <!-- Question 3 -->
      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          <span>Does AidMi work with my current EHR?</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-content">
            Yes. AidMi works alongside SimplePractice, TherapyNotes, Valant, and other EHRs. One-button to paste your signed note into your existing system, or use it standalone.
          </div>
        </div>
      </div>

      <!-- Question 4 -->
      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          <span>Is it HIPAA compliant?</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-content">
            Yes. AidMi is HIPAA compliant with a BAA included on all plans — including Free. Data is encrypted in transit and at rest.
          </div>
        </div>
      </div>

      <!-- Question 5 -->
      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          <span>Do you train your AI on my client data?</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-content">
            No. Your client data is siloed, stored securely, and only used to power your clinical intelligence — Today's Brief, Aimé, and citations.
          </div>
        </div>
      </div>

      <!-- Question 6 -->
      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          <span>How accurate are the AI notes?</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-content">
            Every claim in your note links to the source in the transcript. Click to verify. If evidence is missing, we flag it as "Needs confirmation." You review and sign — nothing goes into the chart without your approval.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## REMOVED QUESTIONS

Delete these FAQ items entirely:
- "Does the AI 'hallucinate' or make things up?" (merged into accuracy question)
- "If patients track their mood in Pebble..." (Pebble removed)
- "Can it handle couples or family therapy?" (niche)
- "My practice is niche (e.g., Somatic, Psychoanalytic, Child)..." (niche)
- "Does AidMi work with telehealth?" (implied in product)
- "Do I need to change my EHR to use AidMi?" (merged into EHR question)
- "Is the Pebble patient app required?" (Pebble removed)
- "How does pricing work?" (now has dedicated section)

---

## CSS UPDATES (minor refinements)

Keep existing FAQ styling but ensure:

```css
.faq-list {
  max-width: 800px;
  margin: 60px auto 0;
}

/* Ensure clean typography in answers */
.faq-answer-content {
  padding: 0 24px 24px;
  color: var(--text-gray);
  line-height: 1.7;
  font-size: 16px;
}
```

---

## VALIDATION CHECKLIST
- [ ] Only 6 FAQ items (not 9)
- [ ] No Pebble questions
- [ ] No couples/niche therapy questions
- [ ] No pricing question (has own section)
- [ ] Questions use "client" not "patient"
- [ ] Accordion expand/collapse works
- [ ] Answers mention Today's Brief, Aimé, citations
```

---

# PHASE 10: Final CTA + Footer + Cleanup

## Figma Make Prompt — Phase 10

```
## OBJECTIVE
Simplify Final CTA to single button. Remove newsletter from footer. Clean up any remaining "patient" references and Pebble mentions throughout codebase.

---

## FINAL CTA SECTION UPDATE

Replace the `.final-cta` content:

```html
<!-- Final CTA Section -->
<section class="final-cta">
  <div class="container">
    <div class="cta-card">
      <div class="cta-content">
        <h2>Go home on time tonight.</h2>
        <p>
          You didn't become a clinician to do paperwork.
          <br><br>
          Let AidMi handle the documentation while you handle the care.
        </p>
        <a href="#" class="btn btn-primary btn-large contact-trigger">Get AidMi Free</a>
      </div>
    </div>
  </div>
</section>
```

**Changes:**
- Single CTA button (was 2 buttons)
- CTA text: "Get AidMi Free" (was "Reclaim Your Evening" + "Book a Demo")
- Remove `.cta-buttons` wrapper (just single button)

---

## FOOTER UPDATES

### Remove Newsletter Section

Delete the entire `.footer-newsletter` block:
```html
<!-- DELETE THIS ENTIRE BLOCK -->
<div class="footer-newsletter">
  <h3>The Private Practice Growth Memo</h3>
  ...
</div>
```

### Update Footer Links

In `.footer-grid`, update the "Product" column to match new features:

```html
<div class="footer-column">
  <h4>Product</h4>
  <ul>
    <li><a href="#features">Today's Brief</a></li>
    <li><a href="#features">Aimé Q&A</a></li>
    <li><a href="#features">Evidence-Backed Notes</a></li>
    <li><a href="#pricing">Pricing</a></li>
    <li><a href="/integrations">EHR Integrations</a></li>
  </ul>
</div>
```

Remove from Product column:
- "Morning Briefs" → replaced with "Today's Brief"
- "Ambient Scribe" → removed
- "Pebble Patient App" → removed
- "Practice Health" → removed
- "See All Features" → removed

---

## GLOBAL CLEANUP

### Find and Replace Throughout Codebase

1. **patient → client** (case-sensitive)
   - Check: hero, testimonials, FAQ, footer
   - Exceptions: leave "patient ID" in technical code

2. **Pebble** - Remove ALL references:
   - Navigation dropdown items
   - Mobile menu items
   - Footer links
   - Any remaining HTML

3. **Practice Health** - Remove ALL references

4. **Morning Brief** → **Today's Brief**

5. **Memory Sidekick / Memory Agent** → **Aimé**

### Remove "Difference" Section

Delete the entire `.difference` section (between testimonials and FAQ). This content is now covered in the Value Props section.

```html
<!-- DELETE THIS ENTIRE SECTION -->
<section class="difference">
  ...
</section>
```

---

## NAVIGATION CLEANUP

In the header navigation, update the "Product" dropdown:

```html
<div class="nav-dropdown-column">
  <h4>Core Features</h4>
  <a href="#features" class="nav-dropdown-link">Today's Brief</a>
  <a href="#features" class="nav-dropdown-link">Aimé Q&A</a>
  <a href="#features" class="nav-dropdown-link">Evidence-Backed Notes</a>
</div>
<div class="nav-dropdown-column">
  <h4>Integrations</h4>
  <a href="/integrations" class="nav-dropdown-link">Electronic Health Record (EHR)</a>
  <a href="/integrations#telehealth" class="nav-dropdown-link">Telehealth</a>
</div>
```

Remove:
- "Morning Briefs" → use "Today's Brief"
- "Ambient Scribe" → removed
- "Pebble Patient App" → removed
- "Practice Health" → removed

---

## MOBILE MENU CLEANUP

Update `.mobile-menu` to match header nav changes:

```html
<div class="mobile-menu-section">
  <h4>Product</h4>
  <a href="#features">Today's Brief</a>
  <a href="#features">Aimé Q&A</a>
  <a href="#features">Evidence-Backed Notes</a>
  <a href="#pricing">Pricing</a>
  <a href="/integrations">EHR Integrations</a>
</div>
```

---

## CSS CLEANUP

Remove unused CSS for deleted components:

```css
/* REMOVE: Newsletter styles */
.footer-newsletter { ... }
.newsletter-form { ... }
.newsletter-privacy { ... }

/* REMOVE: Difference section styles */
.difference { ... }
.difference-grid { ... }
.difference-card { ... }
.difference-visual { ... }

/* REMOVE: Old bento grid styles (if not already removed) */
.bento-grid { ... }
.bento-card { ... }

/* REMOVE: Persona toggle styles */
.persona-toggle-container { ... }
.persona-toggle { ... }
.persona-btn { ... }
.persona-slider { ... }
```

---

## FINAL VALIDATION CHECKLIST

### Content
- [ ] All "patient" → "client" throughout
- [ ] All "Morning Brief" → "Today's Brief"
- [ ] No Pebble references anywhere
- [ ] No Practice Health references anywhere
- [ ] No "Difference" section
- [ ] No newsletter signup

### Navigation
- [ ] Header dropdown updated
- [ ] Mobile menu updated
- [ ] Footer links updated

### Sections (in order)
- [ ] Hero ✓
- [ ] Trust Strip ✓
- [ ] Problem Section ✓ (new)
- [ ] Value Props ✓ (3 cards, no tabs)
- [ ] How It Works ✓
- [ ] Use Cases ✓ (no toggle)
- [ ] Testimonials ✓ (3 simple cards)
- [ ] Pricing ✓ (new)
- [ ] Security ✓ (new)
- [ ] FAQ ✓ (6 questions)
- [ ] Final CTA ✓ (single button)
- [ ] Footer ✓ (no newsletter)

### Functionality
- [ ] All CTAs trigger contact modal
- [ ] FAQ accordion works
- [ ] How It Works step switching works
- [ ] Mobile menu works
- [ ] No JavaScript errors in console
```

---

# Summary: Complete Phase Sequence

| Phase | Action | Key Deliverable |
|-------|--------|-----------------|
| 1 | Hero + Trust Strip | Updated messaging, "client" terminology |
| 2 | Problem Section | NEW empathy section |
| 3 | Value Props | 3 simple cards (no tabs) |
| 4 | How It Works | Simplified 3 steps |
| 5 | Use Cases | Remove toggle, simple text blocks |
| 6 | Testimonials | 3 clean quotes |
| 7 | Pricing | NEW 3-tier pricing |
| 8 | Security | NEW trust section |
| 9 | FAQ | Rewritten, 6 questions |
| 10 | Cleanup | Footer, nav, global find/replace |

Each prompt is designed to be **paste-ready** into Figma Make. Run them sequentially, validating after each phase before proceeding.