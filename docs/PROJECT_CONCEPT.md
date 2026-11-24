# Neurons of History — Project Concept

> Final project name (decided 2026-11-20). Reference document for every design and coding task that follows.
> Status: **Draft v0.1** — 2026-11-20. Decisions marked **[OPEN]** still need the founder's call.

---

## 1. Vision

A free, ad-free, community-run online library where history is stored as a **network of connected nodes**: people, places, events, works and ideas, linked to each other like neurons.

What sets it apart is **provenance**. Every piece of information shows **how we know it**: which source says it, who wrote that source, when, in what language, and how close the author was to the event. Readers can always tell an original historical source apart from a later interpretation of it.

**One-line pitch:** *Not just what happened, but how we know it.*

### Why it should exist
- Search engines and encyclopedias give you *conclusions*. The sources behind them, and the disagreements between those sources, stay hidden.
- Primary sources, translations, scholarship and commentary are scattered across archives, libraries and websites, in many languages.
- People learn and remember better through connections (the founder's own "neuron" memory technique). Browsing history as a connected network is how the platform works, not a decoration.

---

## 2. Core principles

1. **Provenance first.** No claim without a source. Every source carries full metadata.
2. **Layers are always visible.** Original source, translation, scholarship and community commentary each look clearly different (see §4).
3. **Disagreement is shown, not hidden.** When sources contradict each other, the platform shows both, side by side.
4. **Describe and rate, separately.** Facts about a source (author, date, distance from the event) are kept apart from opinions about its reliability (ratings).
5. **Free forever.** Free to read, no ads, no paywall, open licences, community governance.
6. **Multilingual by design.** Every page, name and source can exist in many languages. Translation is a core community activity.
7. **Start narrow, grow outward.** The first version covers one well-defined topic done thoroughly (see §12).

---

## 3. Users and roles

Anyone can **read** everything without an account. Only registered users can contribute.

| Role | Who | Can do |
|---|---|---|
| **Visitor** | Anyone | Read, search, browse, download open content |
| **Contributor** | Any registered user | Add sources, entities, claims, connections, comments, essays; rate sources; propose edits |
| **Translator** | Contributor with translation activity | Add and edit translations; review other translations in their languages |
| **Editor** | Trusted, experienced contributor (earned by track record) | Approve and merge edits, resolve duplicates, organise categories |
| **Verified Expert** | Historians, archivists, academics (identity and credentials checked) | Everything above, plus **verification marks** and **higher-weight ratings**; badge shown on their content |
| **Moderator** | Elected or appointed by the community | Handle disputes, vandalism, bans, takedown requests |
| **Admin** | Founder plus a small core team | Technical and platform settings |

Reputation grows with accepted contributions. Rights unlock gradually, as on Wikipedia and Stack Overflow.

---

## 4. Content layers (visually distinct)

Every piece of content belongs to exactly one layer. Each layer has its own colour, icon and label, so readers always know what they are looking at.

| Layer | What it is | Example (Fall of Constantinople) |
|---|---|---|
| **L1 · Primary source** | Original document from the period: chronicle, letter, diary, decree, inscription, artefact, image | Nicolò Barbaro's siege diary (1453) |
| **L2 · Edition / Translation** | A transcription, critical edition or translation of an L1 source | An English translation of Barbaro's diary |
| **L3 · Scholarship** | Analysis by historians and researchers: books, papers, academic articles | Steven Runciman, *The Fall of Constantinople 1453* (1965) |
| **L4 · Commentary** | Essays, explanations and analysis by community members: students, enthusiasts, teachers | A community essay comparing Greek and Ottoman accounts |
| **Reference** | Encyclopedias, overviews, summaries (tertiary) | An encyclopedia entry |

**Claims** and **connections** (see §5) sit on top of these layers and always point back to them.

---

## 5. Core data model (conceptual)

### Main object types
- **Entity**: something history is *about*.
  - Types: Person, Place, Event, Period, Polity (state, empire, dynasty, city-state), Group (army, order, guild, people), Work (artwork, building, music, recipe, text as a cultural object), Theme (cuisine, warfare, religion, trade…).
- **Source**: a document or file that *tells us* something (layers L1–L4 and Reference).
- **Source version**: an edition, transcription or translation of a source, linked to its parent ("derived from" chain).
- **Claim**: a single statement, e.g. *"Constantine XI died during the final assault on 29 May 1453."*
- **Evidence link**: connects a Claim to a Source, with a stance: **supports / contradicts / mentions / disputes**, plus the exact passage (page, line, timestamp).
- **Connection**: a typed link between two entities, e.g. *Mehmed II —commanded→ Siege of Constantinople*. Every connection is itself a claim, so it carries evidence.
- **Facet / Tag**: classification along independent dimensions: place, time, theme, source type, language.
- **User, Review, Rating, Comment, Edit history**.

### Hard requirements, built in from the start
- **Fuzzy dates:** exact, approximate ("c. 1200"), ranges, before/after, unknown. Original calendar kept (Byzantine Anno Mundi, Hijri, Julian) alongside the converted date.
- **Places that change over time:** a place belongs to different polities in different periods (Constantinople: Byzantine until 1453, Ottoman after). Names change too (Constantinople / Kostantiniyye / Istanbul).
- **Multilingual names and text** for every entity and source.
- **Full edit history**: every change versioned, attributed, revertible.
- **Any file type**: text, PDF, scans, images, audio, video, 3D, datasets. Each file is attached to a Source record with its metadata.

---

## 6. Source metadata and closeness scale

Each source records:
- Title, author(s), author's role or affiliation (e.g. *Greek courtier*, *Venetian ship's doctor*, *Ottoman secretary*)
- Date written (fuzzy), place written, original language
- **Closeness to the event:**
  - **C1 · Eyewitness**: author was present
  - **C2 · Contemporary**: same period, not present, used direct informants
  - **C3 · Later pre-modern**: written later, compiled from earlier sources
  - **C4 · Modern scholarship**
  - **C5 · Tertiary / popular**
- **Derivation chain:** original → copy → edition → translation (e.g. a 16th-century reworking of an earlier chronicle)
- **Perspective / allegiance:** whose side the author was on, who they wrote for
- Where the original is held (archive, library, manuscript shelfmark), link to digitised copy
- Copyright / licence status of *this* file (see §9)

### Reliability: described and rated (both)
- **Described:** the objective metadata above, always shown.
- **Rated:** community and expert ratings on criteria such as *accuracy*, *closeness*, *bias awareness*, *completeness*.
  - Verified Experts' ratings carry more weight.
  - The page shows the **breakdown** (experts vs community, number of ratings), never just one opaque score.
  - Ratings need a short written justification.

---

## 7. Multilingual and translation

- Interface available in several languages from launch. **[OPEN]** Which ones? Proposed: English, Russian, Turkish, Greek, Spanish (the pilot's source languages are Greek, Latin, Italian, Ottoman Turkish and Old Slavonic, so Greek and Turkish readers are natural early users).
- Community translations of primary sources are a **core feature**: side-by-side view (original | translation), linked passage by passage.
- Several translations of the same source can coexist, each rated and reviewed.
- Machine translation may be offered as a clearly labelled **draft** that a human translator can improve, never shown as a finished translation.

---

## 8. Search, navigation and views

- **Entity page:** the reading view. Summary, key claims with evidence, sources grouped by layer, connections.
- **Neuron view:** a local graph centred on one node. Click to expand neighbours step by step; filter by connection type, layer and time.
  - **Decided (2026-11-24): the main neuron view is 3D (WebGL / three.js).** Organic neurons with branching dendrites and bloom glow; firing a node sends pulses along curved axons; unexplored nodes stay dark until discovered; supporting evidence travels as blue pulses, contradicting as orange; a gold "suggested next" highlight. Reference mockup: https://claude.ai/artifact/W7E8o4zDFMLLPZ3uRP9K1M (2D canvas fallback: https://claude.ai/artifact/XEx5ssoRUDsxbBPJPT5Acf).
  - Must also offer a plain text list of the same connections (screen readers, phones, weak devices) and respect reduced-motion settings. Detailed interaction, animation and VFX rules to be defined later.
- **Timeline view:** events and sources over time; zoom from centuries to hours (the siege had a day-by-day timeline).
- **Map view:** places, with borders and names that change over time.
- **Faceted browsing:** combine place + time + theme + layer + language, e.g. *"Constantinople, 1452–1453, primary sources, eyewitness only."*
- **Contradiction view:** for one claim, every source that supports or contradicts it, side by side.

### AI features (phased, cost-aware)
1. **Search by meaning:** "how did the Venetians react to the fall?" (can run on free, open-source models).
2. **Contributor assistant:** when a source is uploaded, suggest the people, places, dates and claims it mentions.
3. **OCR and transcription** of scans and manuscripts.
4. **Cited answers:** answers built *only* from the library's own sources, every sentence linked to its evidence. Costs money per use, so it comes after funding.

---

## 9. Copyright and access policy (recommended approach)

**Goal:** the widest possible free access to knowledge, while keeping the project alive and legally safe. A library that hosts copyrighted books without permission gets taken offline, and as sole founder the legal risk would fall on you personally. Losing everything to one takedown would hurt the mission more than any restriction.

**"Our own way": maximise what can be fully open, and point precisely to everything else.**

| Material | What the platform does |
|---|---|
| Original historical sources (pre-1900 originals are almost always public domain) | **Host in full.** Most of the pilot's primary sources are 15th-century texts, so this covers the core of the library. |
| Old editions and translations already in the public domain | **Host in full.** |
| **Community translations** made on the platform | **Host in full, openly licensed.** This directly replaces copyrighted modern translations and is the platform's biggest gift to the world. |
| Open-access scholarship (CC-licensed papers, theses, open books) | **Host in full**, with licence shown. |
| Material whose rights-holder gives permission (authors uploading their own work) | **Host in full**, with permission recorded. |
| Copyrighted modern books, articles, translations | **Full bibliographic record, summary, short quotations as evidence for claims, and links** to where it can be read: libraries, open repositories, publisher, borrowing services. |
| All content | A **takedown process** for rights-holders (required to stay online). |

**[OPEN]** The founder wants fewer restrictions than this. The recommendation is to launch on this basis, revisit as the project grows, and get legal advice once there is a foundation or legal entity.

---

## 10. Licensing (recommended)

- **Text contributed by users** (essays, translations, summaries): **CC BY-SA 4.0**. Same as Wikipedia, so content can flow between them. Anyone may reuse it with attribution and must share it on the same terms, so nobody can close it off.
- **Structured data** (entities, claims, connections, metadata): **CC0** (public domain dedication). Same as Wikidata, for maximum reuse.
- **Source code:** **AGPL-3.0**. Fully open source, and anyone running a modified copy online must publish their changes too, which keeps the platform free.
- **Uploaded files:** each keeps its own licence, recorded on the source.

---

## 11. Moderation and governance

- Every edit is versioned and revertible. New contributors' edits can go through a review queue.
- Contested topics get **dispute flags**, a talk page, and a "show all positions" rule: the platform never declares one national narrative the winner.
- Neutrality rule: describe what sources say and who says it, and keep interpretation in L3/L4.
- Anti-vandalism: rate limits for new accounts, reputation thresholds, file scanning (malware), reporting tools.
- Long term: community-elected moderators, a public policy wiki, and a non-profit foundation to hold the domain, donations and legal responsibility.

---

## 12. Pilot domain: the Fall of Constantinople (1453)

Chosen because it has abundant primary sources from **several sides and languages** that openly contradict each other. It's an ideal showcase for provenance.

### Seed entities (initial)
- **People:** Mehmed II · Constantine XI Palaiologos · Giovanni Giustiniani Longo · Loukas Notaras · Orban (the cannon founder) · Çandarlı Halil Pasha · Zaganos Pasha · Cardinal Isidore of Kiev · George Sphrantzes
- **Places:** Constantinople · Theodosian Walls · Golden Horn · Galata/Pera · Rumelihisarı · Hagia Sophia · Gate of St Romanus · Kerkoporta
- **Polities / groups:** Byzantine Empire · Ottoman Empire · Republic of Venice · Republic of Genoa · Janissaries
- **Events:** Construction of Rumelihisarı (1452) · Proclamation of Church Union in Hagia Sophia (Dec 1452) · Siege of Constantinople (Apr–May 1453) · Ottoman ships moved overland into the Golden Horn · Final assault and fall (29 May 1453)

### Seed sources (to be verified and catalogued in Phase 3)
- **Greek:** George Sphrantzes (and the later expanded chronicle attributed to him: a classic derivation-chain case) · Doukas · Laonikos Chalkokondyles · Michael Kritoboulos (wrote for Mehmed II)
- **Latin / Italian:** Nicolò Barbaro's diary · Leonard of Chios · letters of Isidore of Kiev · Giacomo Tetaldi
- **Ottoman Turkish:** Tursun Beg · Aşıkpaşazade
- **Slavic:** the *Tale of Constantinople* attributed to Nestor Iskander · Konstantin Mihailović's memoirs
- **Modern scholarship (L3, reference records):** Runciman (1965) · Philippides & Hanak (2011) · Babinger's biography of Mehmed II · Crowley, *1453* (2005)

### Showcase "contradiction" claims
- **How did Constantine XI die?** Accounts differ, and the body was never securely identified.
- **The Kerkoporta story:** was a small gate left open? It appears in Doukas; historians debate it.
- **Size of the armies:** numbers vary hugely between sources.

---

## 13. Technology direction (zero-cost start)

**[OPEN]**: to be confirmed in Phase 2. Guiding rules: free tiers only, managed services (no servers for the founder to maintain), everything in one public code repository.

Candidate stack:
- **Database, accounts, file storage, AI search vectors:** Supabase (Postgres) — already connected
- **Website:** Next.js, hosted on a free tier (Vercel or Cloudflare Pages)
- **Large files:** cheap or free object storage (e.g. Cloudflare R2) once Supabase's free storage fills up
- **Code:** public GitHub repository
- **Seed data:** imported from Wikidata (CC0) and Wikisource

Known limits: free tiers have small storage caps and may pause inactive projects. Video hosting and AI answers are the first things that will need money.

---

## 14. Roadmap

Each phase ends with something you can see and check. Opus does the building; the founder reviews and decides.

| Phase | Goal | Done when |
|---|---|---|
| **0 · Concept** | This document | Founder approves v1.0 |
| **1 · Accounts & setup** | GitHub, Supabase, hosting accounts; project repo; rules file for Opus | Empty site is live at a free URL |
| **2 · Data model** | Database design for §5–§6 (fuzzy dates, places over time, layers, claims, evidence) | Schema in database, reviewed against pilot examples |
| **3 · Pilot seed data** | Catalogue §12 entities and sources, with first claims and evidence | ~50 entities, ~20 sources, ~100 claims loaded |
| **4 · Read-only site** | Entity pages, source pages, layer colours, neuron view, timeline | A visitor can explore the 1453 siege end to end |
| **5 · Accounts & contributing** | Registration, add/edit sources, entities, claims; file upload; edit history | A new user can add a source with a file |
| **6 · Trust layer** | Roles, reputation, reviews, ratings (described + rated), expert verification, moderation tools | Expert-weighted ratings visible on sources |
| **7 · Multilingual** | Interface translations, side-by-side source translations | Pilot in ≥3 languages |
| **8 · Search & AI** | Faceted search, search by meaning, contributor assistant | "Show eyewitness accounts of the final assault" works |
| **9 · Launch & community** | Policies, about/donate pages, first volunteers, outreach to historians | Public launch of the pilot |
| **10 · Expansion** | Next domains, map view, cited AI answers, foundation | Ongoing |

---

## 15. Open decisions

1. Interface languages at launch (§7)
2. Copyright policy: accept the recommended approach for launch? (§9)
3. ~~Final project name~~ **Decided: "Neurons of History"** (short form "Neurons"; avoid "Neuron History", which reads as history of neuroscience). Domain still to choose.
4. Tech stack confirmation (§13)
5. How Verified Experts are checked (credentials? institutional email? peer endorsement?)

---

## 16. Glossary

- **Entity:** a person, place, event, etc. that history is about.
- **Source:** a document or file that tells us something about entities.
- **Claim:** one statement that can be supported or contradicted by sources.
- **Evidence link:** the connection between a claim and a source, with a stance and the exact passage.
- **Connection:** a typed link between two entities (itself a claim).
- **Layer:** L1 primary, L2 edition/translation, L3 scholarship, L4 commentary, Reference.
- **Closeness:** how near a source's author was to the event (C1–C5).
- **Derivation chain:** the line from an original to its copies, editions and translations.
