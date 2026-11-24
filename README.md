# Neurons of History

*Not just what happened, but how we know it.*

A free, ad-free, community-run library where history is stored as a network of connected
people, places, events, works and ideas, and every statement shows the source it comes from.
First topic: the Fall of Constantinople (1453).

The full concept is in [docs/PROJECT_CONCEPT.md](docs/PROJECT_CONCEPT.md).

## Run locally

Needs Node.js 20 or newer.

```bash
npm install
cp .env.example .env.local   # then fill in the Supabase URL and publishable key
npm run dev
```

Open http://localhost:3000.

## Stack

Next.js · Supabase (Postgres) · next-intl · Tailwind · hosted on Vercel.

## Licences

- Code: [AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.html)
- Text contributed by users: CC BY-SA 4.0
- Structured data: CC0
