# Exult IT Solution — design notes

**Concept: "Signal Blue."** The site keeps Exult's identity (logo, brand blue `#157efb`, Inter, pill buttons, two-tone
headings like "Our **Services**") and rebuilds everything around it as one engineered system: deep-navy stages for
heroes and showcases, white reading surfaces for content, mono-type indices (`01 / 08`) that read like a spec sheet.

## Tokens (src/styles/site.css `:root`)
- Brand: `--blue #157efb`, `--blue-700 #0a57c2` (small text on white), `--cyan #4fe0ff` (accents on navy only)
- Ink: `--ink #0b1531`, `--ink-2`, `--muted`; surfaces `--paper`, `--mist`, `--navy #060f27`, `--navy-2`
- Type: Bricolage Grotesque (display), Inter (body), JetBrains Mono (labels/indices)

## Motion (Annnimate starter pack, src/components/anm)
| Where | Component |
|---|---|
| Home hero (3 slides) | curtain-slider |
| "We engineer → …" band | rotating-words (scroll-scrubbed) |
| Home services (8) | stacking-cards (cards carry title, copy, link) |
| Headings | text-reveal; eyebrows use a dual-scramble style effect (src/components/site/motion.js) |
| Industries index | diagonal-gallery |
| Technologies hero | image-fly-in (tech logos) |
| Remote staff | magnetic-tag-cloud, accordion, process-rail |
| About | elastic-divider |
| Home sign-off | echo-headline |
| Menu (compact/mobile) | drawer after multi-level-drawer-menu |
| Header | floating pill after floating-navbar |

Fixes applied to the starter-pack code are commented in place (text-reveal killed every ScrollTrigger on
unmount; curtain-slider changed GSAP's global timescale; elastic-divider crashed on route change under reduced
motion; accordion did nothing under reduced motion; curtain titles could not wrap).

## Content
Copy is carried over verbatim (services/blogs: `src/content/`, industries: `src/data/industries.json`).
New: **Data & AI** and **ERP System** service pages (`src/content/services/`), with illustrations in
`public/assets/img/services/`.
