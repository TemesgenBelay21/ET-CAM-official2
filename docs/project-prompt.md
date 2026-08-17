# ET-CAM Marketing Website — Build Instructions (HTML/CSS/JS)

## Project Overview
Build a **single-page, multi-section** website for **ET-CAM (Ethiopian Creative Advertisement Media)** — a digital marketing agency based in Addis Ababa, Ethiopia. This is a **pure front-end site — HTML, CSS, and JavaScript only** (no backend, no PHP, no framework). Follow a clean, professional folder structure — do not dump everything into the root or one giant file:

```
et-cam-website/
├── index.html
├── README.md
├── .gitignore
├── assets/
│   ├── css/
│   │   ├── base.css          # resets, variables (colors, fonts, spacing), typography
│   │   ├── layout.css         # grid/flex layout, section spacing, containers
│   │   ├── components.css     # cards, buttons, nav, toggles, accordion, etc.
│   │   ├── themes.css         # dark (Dark Luxury) / light (Neo Minimal) mode variables
│   │   └── responsive.css     # media queries / breakpoints
│   ├── js/
│   │   ├── main.js            # entry point, initializes everything
│   │   ├── theme-toggle.js     # dark/light mode logic
│   │   ├── language-toggle.js  # English/Amharic switching logic
│   │   ├── scroll.js           # scroll-to-top button, scroll-triggered animations
│   │   └── faq-accordion.js    # FAQ expand/collapse behavior
│   ├── images/
│   │   ├── logo/
│   │   ├── projects/
│   │   ├── testimonials/
│   │   └── icons/              # if any custom icon assets beyond the icon library
│   └── lang/
│       ├── en.json
│       └── am.json
└── docs/
    └── project-prompt.md       # this file, for reference
```

Use semantic HTML5 throughout (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, etc.), consistent BEM-style or similarly clear CSS class naming (e.g. `.service-card`, `.service-card__title`, `.service-card--active`), and keep JavaScript modular — one concern per file rather than a single monolithic script.

This is the agency's own showcase site, so design quality and content depth matter as much as functionality.

Remove any framework/starter boilerplate before building actual sections.

---

## Company Description (About Us section)
Write this section with real depth — do not keep it to a single short paragraph. Use the following as source content and expand it into 3-4 paragraphs covering: who ET-CAM is, what makes the agency different, and the mission/vision behind the work.

> ET-CAM (Ethiopian Creative Advertisement Media) is a full-service digital marketing agency based in Addis Ababa, Ethiopia, built to help hospitality, lifestyle, retail, and service-oriented brands grow with strategy, creativity, and consistent execution. Rather than splitting a client's marketing across multiple disconnected vendors — one agency for social media, another for design, a freelancer for the website — ET-CAM brings content production, social media management, web development, branding, paid advertising, and automation together under a single in-house team. This means every touchpoint of a brand, from its Instagram feed to its website to its ad campaigns, speaks with one consistent voice and visual identity.
>
> The agency was founded on a simple observation: Ethiopian businesses — hotels, restaurants, cafes, retail brands, and local service providers — often have strong products and real customer loyalty, but lack the digital presence to match. ET-CAM exists to close that gap, using a combination of creative storytelling, data-driven advertising, and modern web technology tailored specifically to the local market and its customers.
>
> Every engagement starts with understanding the client's specific goals, audience, and competitive landscape — there is no one-size-fits-all package. Whether the objective is more foot traffic to a restaurant, more direct bookings for a hotel, or a completely new brand identity for a retail business, the strategy is built around measurable outcomes, not vanity metrics.
>
> The result is a growing portfolio of brands across Addis Ababa and beyond who have seen real, trackable growth — more bookings, more engagement, more repeat customers — because their marketing finally works as one coordinated system instead of scattered, disconnected efforts.

---

## Why Choose Us
Highlight stats as prominent, animated counters or stat cards:
- **70+ Projects**
- **2+ Years of Experience**
- **97% Client Satisfaction**

In addition to these three, include these additional differentiators as short cards (icon + heading + 1-2 sentence description each):
- **Full In-House Team** — every service (design, content, ads, development) is delivered by ET-CAM directly, not outsourced or fragmented across freelancers.
- **Local Market Expertise** — deep understanding of the Addis Ababa and broader Ethiopian consumer, not a generic global template applied locally.
- **Data-Driven Strategy** — every campaign is measured and optimized against real performance data, not guesswork.
- **Tailored, Not Templated** — no two clients get the same strategy; each plan is built around that business's specific goals.
- **End-to-End Execution** — from initial brand strategy through to live ad campaigns and website launch, one team handles the entire journey.

---

## Services
Present as cards (icon, title, and a detailed 3-4 sentence description — do not keep these short, this section needs real depth). At least 20 services total, organized as below:

1. **Social Media Marketing** — Full-cycle management across Facebook, Instagram, TikTok, and LinkedIn: content calendars, community engagement, platform-specific strategy, and monthly performance analytics. Every post is planned around the client's brand voice and audience behavior, not generic posting schedules.

2. **Website Design & Development** — Responsive, SEO-ready websites built for speed and conversion, including booking/payment integration for hospitality and retail clients. Every site is designed mobile-first, since most Ethiopian consumers browse and shop primarily from their phones.

3. **Paid Advertising** — Targeted ad campaigns across Meta, TikTok, and Google Ads, including audience research, creative testing (A/B testing), budget optimization, and transparent ROI reporting so clients see exactly what their ad spend is producing.

4. **Search Engine Optimization (SEO)** — Technical SEO audits, keyword research tailored to local search behavior, on-page optimization, and ongoing ranking reports to help businesses get found organically, not just through paid traffic.

5. **Professional Photography** — On-location product, food, interior, and lifestyle photography for use across web, social, and print — shot specifically for how the brand will use the images, not generic stock-style shoots.

6. **Video Production & Short-Form Content** — Reels, TikToks, and short promotional videos shot, edited, and optimized for how each platform's algorithm favors content — from concept through final cut.

7. **Graphic Design** — Marketing collateral, social media graphics, menus, flyers, and print materials designed to match a consistent brand visual system across every channel.

8. **TV Commercial Production** — Full production pipeline from concept and scriptwriting through filming, sound design, and broadcast-ready delivery for clients seeking traditional media reach alongside digital.

9. **Branding & Visual Identity** — Logo design, full brand style guides (color, typography, tone of voice), and consistent application of that identity across every material the business produces.

10. **Chatbot & Conversational AI** — Automated chat systems for websites and social platforms (e.g. Facebook/Instagram DMs) that qualify leads, answer common questions, and route serious inquiries to the client instantly, 24/7.

11. **CRM & Marketing Automation** — Setting up systems that automatically capture, organize, and follow up with leads — so no inquiry falls through the cracks between a customer's first contact and their first purchase.

12. **Event Promotion** — End-to-end promotional campaigns for hosted events: pre-event hype content, day-of coverage, and post-event recap content designed to extend an event's reach far beyond attendees.

13. **Influencer Marketing** — Identifying and coordinating with relevant local influencers and creators to extend brand reach authentically, including negotiation, briefing, and performance tracking.

14. **Email Marketing** — Lead-nurturing email sequences, promotional campaigns, and newsletters designed to convert subscribers into repeat customers, with open/click tracking to continually refine messaging.

15. **SMS Marketing** — Direct, high-open-rate SMS campaigns for promotions, reminders, and time-sensitive offers — particularly effective for driving fast action from local customers.

16. **Cold Call & Outreach Campaigns** — Structured, tracked outbound outreach for clients looking to directly build a B2B or high-value client pipeline rather than relying solely on inbound marketing.

17. **Google Business Profile & Local SEO Management** — Full optimization and ongoing management of Google Business listings — accurate hours, photos, review responses, and local search ranking — critical for any business relying on foot traffic or local discovery.

18. **Analytics & Performance Reporting** — Regular, plain-language reporting that connects marketing activity to real business outcomes, so clients always know what's working and why.

19. **Copywriting & Content Strategy** — Website copy, ad copy, and social captions written to convert, paired with a broader content strategy so every piece of writing serves a specific goal in the customer journey.

20. **Public Relations & Reputation Management** — Managing online reviews, brand mentions, and public-facing communication to protect and strengthen a client's reputation across digital channels.

---

## Projects / Portfolio
Display as cards with a hover effect — **not links**, purely visual cards (image + overlay/caption revealed on hover). Pull images from the `assets/images/projects` folder and match each to its project. Projects:

- Website for Harmony Furniture
- Social Media Management for Joy Burger
- Social Media Management for Mesti Café and Restaurant
- Website for NT Fashion
- Content Production for 251 Delivery
- Event Promotion & Influencer Marketing for Eastern Flower Corporation
- Paid Advertising for Akkoo Coffee

---

## Testimonials
Pull images from the `assets/images/testimonials` folder and match to each testimonial. Display as cards (photo, quote, name, role). **All testimonial cards must render at the same height/length regardless of quote length** — use equal-height card layout (flexbox/grid with stretch, or a fixed min-height) rather than truncating any of the text. Do not alter the wording of the quotes.

- **Mesti** (Owner and General Manager): "ET-CAM doubled our engagement and brought us direct bookings within two months. They didn't just grow our followers—they grew our revenue."
- **Dj Nani** (Owner): "ET-CAM captured our brand's aesthetic perfectly. The website looks premium, feels modern, and gives our customers a seamless shopping experience. We couldn't be happier."
- **Eliyas**: "Our customers love how easy it is to browse and shop on our new site—especially on mobile. ET-CAM delivered beyond our expectations."
- **Habtamu**: "ET-CAM's email marketing helped us connect with the right customers and increase repeat orders. Their targeted, creative approach improved engagement and built stronger customer loyalty for our meat house."

---

## FAQ Section
Include the following 6 questions with answers, displayed as an accordion/expandable list:

1. **What services does ET-CAM offer?**
   ET-CAM provides full-service digital marketing including social media management, website design and development, paid advertising, SEO, content production (photo/video/graphic design), branding, automation, and more — all delivered by one in-house team.

2. **How long does it take to see results from social media marketing?**
   Most clients begin seeing measurable engagement improvements within the first 4-6 weeks, with stronger conversion results (bookings, sales, leads) typically building over 2-3 months as strategy and content are refined based on performance data.

3. **Do you work with businesses outside Addis Ababa?**
   Yes. While ET-CAM is based in Addis Ababa and has deep expertise in the local market, the agency works with clients across Ethiopia and can support remote collaboration for businesses in other regions.

4. **How much do your services cost?**
   Pricing depends on the scope and combination of services a business needs. ET-CAM builds custom packages rather than fixed one-size-fits-all pricing — reach out for a consultation and a tailored quote.

5. **Can you handle both social media and website development for my business?**
   Yes — this is exactly what sets ET-CAM apart. Because every service is handled in-house, clients can combine social media, website development, branding, and advertising into one coordinated strategy instead of managing separate vendors.

6. **How do I get started working with ET-CAM?**
   Reach out through the contact section — phone, email, or social media — for an initial consultation. From there, ET-CAM will assess your goals and put together a tailored plan.

---

## Contact
**No contact form.** This section should only include:
- A short intro line: "Reach out to us through the details below. We're available for inquiries, collaborations, and consultations."
- **Our Location:** Addis Ababa, Nifas Silk-Lafto (with a location icon)
- **Phone Numbers:** +251-936113051, +251-969153870 (with a phone icon)
- **Email Address:** etcamagency@gmail.com (with an email icon)
- **Social media links** with their respective icons: Telegram, LinkedIn, TikTok, Instagram, Twitter

---

## Language Toggle (English / Amharic)
Add a language toggle (English ⇄ Amharic) at the top of the page, alongside the dark/light toggle. Implement this with a proper i18n structure:
- Store all UI text/content strings in `assets/lang/en.json` and `assets/lang/am.json` as key-value objects, not hardcoded inline text — this makes the site fully translatable and maintainable.
- Use JavaScript (`language-toggle.js`) to fetch/load the appropriate JSON and swap `textContent`/`innerHTML` of elements (tagged with `data-i18n` attributes or similar) based on the selected language — no page reload needed.
- Default language: English. Persist the user's choice (e.g. `localStorage`) so it's remembered on return visits.
- **Note:** populate `en.json` with the content in this document. For `am.json`, insert accurate Amharic translations before launch — do not publish machine-translated Amharic without a native speaker review, since this is client-facing content representing the agency itself.

---

## Design System — "Dark Luxury / Neo Minimal" (from reference palette)
Use the two trending palettes from the reference image, mapped directly to the dark/light toggle so the mode switch feels like a deliberate design choice rather than just an inverted color scheme:

**Dark mode — "Dark Luxury":**
- Background: deep black (`#0D0D0D` / `#111111`)
- Primary accent: gold (`#D4AF37` or similar warm gold)
- Secondary accent: burgundy (`#5B0A1B` or similar deep wine red)
- Use gold for headings/highlights and CTAs, burgundy for secondary accents, glows, and hover states. This should feel premium and high-impact — the "wow" first impression.

**Light mode — "Neo Minimal":**
- Background: white / off-white (`#FAFAF8`)
- Accent palette: sage green, tan, and warm neutral tones (as shown in the reference)
- Clean, airy, minimal — huge whitespace, understated accent color use, elegant rather than loud.

**Both modes:**
- Bold, modern display typography for headings (large, confident sizing).
- Smooth 300ms transition when toggling between modes — no jarring instant flips.
- Card hover effects: subtle lift (`translateY(-4px)`) with accent-colored glow/shadow intensifying on hover — applies to project cards, service cards, and testimonial cards.
- Generous section spacing — avoid a cramped layout given the amount of content on this page.

---

## Assets
- Logo: `assets/images/logo/`
- Project images: `assets/images/projects/`
- Testimonial images: `assets/images/testimonials/`
- Use an icon library (e.g. Font Awesome or Lucide, loaded via CDN or local) for stat icons, service icons, and contact/social icons.

---

## Git Workflow
- When a file/component is fully complete and working, commit it immediately with a clear, semantic commit message (`feat:`, `fix:`, `style:`, etc.) describing what that file/component does.
- Do not push after every commit.
- Only push to the remote once the full project (or the current session's planned scope) is complete and verified working.
- In later sessions, when changes are made to existing files, create a new commit for that change with its own appropriate message — do not amend or squash into prior commits.
- Before committing a file, verify it works correctly in-browser (no JS console errors, valid HTML/CSS, no broken layout).