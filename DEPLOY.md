# Cloudflare Deployment

This app is a TanStack Start project configured for Cloudflare Workers (with static assets) via `@cloudflare/vite-plugin`.

## One-time setup

1. Install Wrangler (already a devDep, otherwise: `npm i -D wrangler`).
2. Login:
   ```bash
   npx wrangler login
   ```

## Build

```bash
npm run build
```

Output:
- `dist/client` — static assets served by Cloudflare's asset pipeline
- `dist/server` — Worker bundle (entry: `src/server.ts`)

## Deploy

```bash
npm run deploy
```

This runs `vite build` and then `wrangler deploy` using `wrangler.jsonc`.

## Config (`wrangler.jsonc`)

- `name`: Worker name on Cloudflare (`pranav-mercantile`)
- `main`: Server entrypoint
- `compatibility_flags`: `nodejs_compat` enabled
- `assets`: serves `dist/client` with SPA fallback

## Environment variables / secrets

Add at runtime with:

```bash
npx wrangler secret put MY_SECRET
```

## Custom domain

In the Cloudflare dashboard → Workers & Pages → your worker → Settings → Domains & Routes, attach `pranavmercantile.co.in`.
