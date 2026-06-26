# TIER-1 OFF-GRID — Project Context for Claude Code
> Read this file every session. This is the source of truth for all decisions.

---

## WHO I AM

- **Name:** John Branch
- **Age:** 50, Gen X, Northern California (Roseville area)
- **Day job:** Hastie's Capitol Sand & Gravel
- **Background:** Autodidact, Constitutionalist, practicing Christian, recovering alcoholic
- **Tech:** Windows 11 Pro, AMD Ryzen 7 5825U, 32GB RAM, Pixel 9 (Android 16)
- **GitHub:** floki777
- **Email:** ProtonMail only — never Gmail
- **VPN:** Mullvad (always on when managing accounts)
- **Passwords:** Bitwarden (unique everywhere)
- **2FA:** Aegis app on all accounts

---

## THE BRAND

**Name:** Tier-1 Off-Grid  
**Domain target:** tier1offgrid.com (register on Namecheap with WhoisGuard)  
**Tagline:** "Real tech for people serious about sovereignty."  
**Tone:** Straight talk, peer to peer, no fluff, no corporate hedging. Talk like a brother who knows his stuff.

### Audience
Constitutionalists, homesteaders, preppers, veterans, liberty-minded Christians who distrust mainstream media and government.

### 7 Content Pillars
Each pillar includes a DIY section for budget/emergency alternatives to purchased gear.

1. **Power** — Solar generators, battery banks, EMP hardening, fuel storage
2. **Comms** — Ham radio, Meshtastic, Starlink, Faraday cages, mesh networks
3. **Security** — No-cloud cameras, perimeter sensors, homestead defense, survival gear/EDC/tactics, guns/knives/bows/non-lethal
4. **Digital Privacy** — De-Googling, VPNs, encrypted comms, private OS, OPSEC
5. **Water & Food** — Berkey filtration, freeze drying, food storage, rainwater harvesting
6. **Gear & Tactics** — Tactical clothing, boots, tents, survival kits, weapons, field tactics, EDC loadouts
7. **Health Sovereignty** — Exercise, diet, supplements, anti-Big Pharma/Ag/Food, herbal medicine, health OPSEC

---

## REVENUE MODEL

- Affiliate commissions (high-ticket gear, NO Amazon)
- Paid Substack newsletter ($10–15/month)
- Digital product sales on Gumroad (guides, PDFs, setup protocols)
- Eventually: brand partnerships with aligned companies

### Affiliate Programs to Apply To
| Program | Category | Commission |
|---|---|---|
| My Patriot Supply | Food storage | 10–15% |
| Berkey Filters | Water filtration | 10% |
| Goal Zero / Jackery | Solar generators | 5–8% |
| Faraday Defense | EMP protection | 10% |
| BridgeCom Systems | Ham radios | 8% |
| Harvest Right | Freeze dryers | 5% |
| Mullvad VPN | Privacy | $6/signup |
| Reolink / Amcrest | No-cloud cameras | 8–12% |
| ShareASale | Network | Multiple |
| Impact.com | Network | Multiple |

---

## PLATFORMS (censorship-resistant only)

| Platform | Purpose |
|---|---|
| Substack | Home base newsletter (paid) |
| Rumble | Primary video |
| Gab | Social media |
| Odysee | Backup video |
| TikTok | Short-form only |

---

## TECH STACK

- **Dev:** VS Code, pure HTML/CSS/JS (no frameworks for website)
- **App:** Flutter/Dart (mobile app)
- **Repo:** GitHub username floki777
- **Hosting:** TBD (privacy-respecting, not Big Tech)
- **Scheduling:** Buffer or Publer for content automation

---

## VISUAL IDENTITY (derived from logo)

Logo: Geometric eagle head (dark) with radio tower and signal arcs, crosshair overlay.
Logo file: `assets/logo.png`

### Color Tokens
```css
--t1-black:        #111111;  /* Nav / base layer */
--t1-dark:         #1A1A1A;  /* Page background */
--t1-surface:      #242424;  /* Secondary surfaces */
--t1-card:         #2D2D2D;  /* Cards, panels, inputs */
--t1-border:       #3D3D3D;  /* All dividers and borders */
--t1-orange:       #C44A1A;  /* PRIMARY ACCENT — CTAs, links, icons */
--t1-orange-dim:   #7A2E0E;  /* Accent background fills */
--t1-white:        #F0EDEA;  /* Primary text */
--t1-gray:         #888888;  /* Secondary / body text */
--t1-gray-light:   #AAAAAA;  /* Tertiary text */
```

### Typography
| Role | Font | Weight | Usage |
|---|---|---|---|
| Display / Headings | Rajdhani | 700 | All headings, buttons, nav, pillar labels |
| Labels / Eyebrows / Captions | Share Tech Mono | 400 | Dates, tags, categories, code |
| Body copy | Inter | 400 | Articles, descriptions, paragraphs |

Google Fonts import:
```html
<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Share+Tech+Mono&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

### Design Rules
- Dark backgrounds only — never white/light background pages
- Orange is the ONLY accent color — use it sparingly, it earns its place
- Buttons use angled clip-path: `clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)`
- Left orange border on content cards: `border-left: 3px solid #C44A1A`
- Mono eyebrow labels above all card titles (e.g. `PILLAR-01 // POWER`)
- Crosshair `+` marks used as decorative dividers (orange)
- Military/tactical aesthetic — geometric, structured, no rounded softness
- No shadows, no gradients — flat and hard-edged

### Component Patterns
**Primary Button:**
```css
background: #C44A1A;
font-family: 'Rajdhani', sans-serif;
font-weight: 700;
letter-spacing: 0.15em;
text-transform: uppercase;
clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
```

**Content Card:**
```css
background: #242424;
border: 1px solid #3D3D3D;
border-left: 3px solid #C44A1A;
border-radius: 4px;
```

**Nav:**
```css
background: #111111;
border-bottom: 1px solid #3D3D3D;
font-family: 'Share Tech Mono';
letter-spacing: 0.12em;
text-transform: uppercase;
```

---

## PROJECT BUILD ORDER

### Phase 1 — Foundation (Now)
- [ ] Lock brand name / register tier1offgrid.com on Namecheap + WhoisGuard
- [ ] Set up GitHub repo (floki777/tier1offgrid-site)
- [ ] Create platform accounts: Substack, Rumble, Gab, Odysee
- [ ] Build website v1 in pure HTML/CSS/JS

### Phase 2 — Content Engine
- [ ] Apply to affiliate programs (list above)
- [ ] Launch Substack (free tier first, then paid)
- [ ] First piece of content published across all platforms
- [ ] Set up Buffer/Publer scheduling

### Phase 3 — Scale
- [ ] Build Flutter mobile app
- [ ] Gumroad digital products (first: Beginner's Off-Grid Power Guide PDF)
- [ ] Weekly content cadence (Saturday sessions, 2–3 hrs max)
- [ ] Paid Substack launch ($10/month)

---

## WEBSITE STRUCTURE (pure HTML/CSS/JS)

```
tier1offgrid-site/
├── index.html          # Homepage
├── pillars/
│   ├── power.html
│   ├── comms.html
│   ├── security.html
│   ├── privacy.html
│   ├── water-food.html
│   ├── gear.html
│   └── health.html
├── gear/               # Affiliate gear reviews
├── newsletter/         # Substack redirect / signup page
├── about.html
├── css/
│   └── style.css       # All styles, tokens at top
├── js/
│   └── main.js
└── assets/
    └── logo.png        # The eagle/tower logo
```

---

## CONTENT WORKFLOW

- Claude AI writes 90% of first drafts
- John reviews, adds personal voice and field experience, publishes
- One topic per week across all platforms
- Saturday morning sessions (2–3 hours max)
- Everything scheduled via Buffer or Publer

### Prompt to use for content drafts:
> "Write a [article/newsletter/video script] about [topic] for Tier-1 Off-Grid. Audience: liberty-minded Americans, preppers, homesteaders, veterans. Tone: straight talk, peer to peer, no fluff. Pillar: [Power/Comms/Security/Privacy/Water & Food]. Include affiliate angle for [product] where natural."

---

## SECURITY RULES (non-negotiable)

- ProtonMail only for all business communication
- Bitwarden unique passwords on every account
- Aegis 2FA on everything
- WhoisGuard on domain registration
- Mullvad VPN active when managing any accounts
- Never connect personal social accounts to brand accounts
- No Big Tech platforms for core infrastructure

---

## VALUES (inform all content and copy decisions)

- Privacy and self-sovereignty above all
- Distrust of big government, big media, big pharma
- Constitutional rights — non-negotiable
- Faith-based worldview (Christian)
- No alcohol references or recommendations ever
- Truth-seeking, alternative media consumer
- No party loyalty — both sides of the uniparty are suspect

---

## JOHN'S WIFE'S BUSINESS (separate — do not mix)

**Whole Health Consulting** — natural health, peptides, clean beauty, non-GMO food.
Separate repos, separate platforms, separate everything. Don't reference or mix.

---

*Last updated: June 2026 — Session 1 brand build*
