# ANITHIUM

The official website for ANITHIUM, an independent technology and innovation company.

The website presents the company's identity, perspective, guiding principles, and contact information.

## Frontend

The Next.js application lives in the `frontend/` directory.

### Requirements

- Node.js 20 or later
- npm

### Local development

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Quality checks

Run these before pushing frontend changes:

```bash
npm run lint
npm run typecheck
npm run build
```

### Production

```bash
npm run build
npm run start
```

## Project structure

```text
frontend/
  public/
    images/
  src/
    app/
      globals.css
      layout.tsx
      page.tsx
      robots.ts
      sitemap.ts
  package.json
  next.config.ts
  tsconfig.json
```
