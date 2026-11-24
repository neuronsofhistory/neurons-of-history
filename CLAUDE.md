# Neurons of History: rules for AI assistants

Read `docs/PROJECT_CONCEPT.md` before any design or coding task. It is the source of truth;
when it and the code disagree, ask the founder rather than guessing.

## Working with the founder
- The founder reviews and decides; you build. Explain choices in plain language, not jargon.
- Each piece of work ends with something the founder can see and check (a page, a screenshot, a query result).
- Ask before anything that costs money, creates accounts, publishes, or deletes data.

## Stack
- Next.js (App Router, TypeScript, Tailwind) in `src/`, hosted on Vercel (free tier).
- Supabase (Postgres, auth, storage), project ref `erjsphwhfkxuccmkhkak`, region ap-southeast-1,
  in the founder's `constantineokribashvili-lab` Supabase account.
  Clients: `src/lib/supabase/{client,server}.ts`. Only the publishable key goes in `NEXT_PUBLIC_*`;
  the secret key never enters the repo or the browser.
- i18n via next-intl. All user-facing text lives in `messages/<locale>.json`, never hard-coded.
  Planned languages are listed in `src/i18n/languages.ts`; English is live, Georgian (ka), Greek (el),
  Turkish (tr) and Russian (ru) are placeholders until translated (Phase 7).

## Visual direction
- Look & feel: the "Neurons of History" design system (dark "Night" theme first, mosaic gold as the only accent,
  EB Garamond / IBM Plex Sans / IBM Plex Mono): https://claude.ai/artifact/FtmMjmhLSCV6owHzSX2ySh
- The neuron view is **3D** (three.js, bloom, organic neurons, firing pulses). Match the reference mockup:
  https://claude.ai/artifact/W7E8o4zDFMLLPZ3uRP9K1M. Always pair it with an accessible text list and honour
  `prefers-reduced-motion`.

## Non-negotiable product rules
- **Provenance first:** no claim without an evidence link to a source.
- **Layers stay visually distinct:** L1 primary, L2 edition/translation, L3 scholarship, L4 commentary,
  Reference. Use the `--layer-*` colour tokens in `globals.css`; never reuse a layer colour for anything else.
- **Show disagreement:** never collapse contradicting sources into one answer.
- **Describe and rate separately:** objective source metadata is never mixed with ratings.
- **Multilingual data:** names and texts are stored per language from the start, even while the UI is English-only.
- **Fuzzy dates and places that change over time** are part of the data model, not afterthoughts.
- **Copyright:** host public-domain and openly licensed material only; copyrighted works get a record,
  summary, short quotation and links (concept §9).

## Database
- All schema changes go through migrations, never ad-hoc edits on the live database.
- Enable Row Level Security on every table. Reading is public; writing requires an account (from Phase 5).

## Licences
Code AGPL-3.0 · user text CC BY-SA 4.0 · structured data CC0.
