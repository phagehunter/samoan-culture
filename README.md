# No Family Is an Island — Study Companion

A single-page study aid for Ilana Gershon's ethnography *No Family Is an Island: Cultural Expertise among Samoans in Diaspora* (Cornell University Press, 2012), built as a companion for an anthropology exam focused on the **Introduction and Chapters 1–4**.

It combines **distant reading** (interactive concept and relationship maps) with **close reading** (a chapter-by-chapter guide and scene-level commentary), all in a dark academic theme.

## Four views

| View | What it shows |
|---|---|
| **Study / Exam** | The landing cram sheet: the book in one idea, the central Ben-vs-Alofa clash side by side (systems carrier vs. cultural broker), the cultural/acultural contrast, every ★ exam-flagged term grouped by domain, and a chapter-by-chapter nutshell. |
| **Key Terms** | The book's vocabulary as a force-directed concept map — Gershon's analytic terms plus the Samoan and bureaucratic terms the exam turns on, linked by the relations the text draws. A **gold ring** marks terms flagged KEY / on the exam. |
| **People & Systems** | Who meets whom across the social orders — families & chiefs, churches, government bureaucracies, and the community brokers between them. **Red dashed edges** mark a *clash of reflexivities* (e.g. Ben ↔ Alofa). Node size ∝ degree centrality. |
| **Narrative Gravity** | A D3 stream graph of what each section attends to (families, churches, systems, brokers, theory), with the exam-focus window (Intro + Chs. 1–4) marked and a setting strip (US / NZ / Samoa). |

A **global section slider** (Introduction … Conclusion) and **group toggles** re-render every view, and a **playback control** animates the book section by section. Clicking any node, edge, or term opens the **Commentary** panel with summaries, thematic tags, and page citations — each linking into the **Guide** tab, original per-section synopses written for this project.

The book is in copyright and is not reproduced here; the guides are original summaries and all terms/glosses are paraphrased. Buy the book — it is excellent.

All data is embedded as TypeScript constants (`src/data/`); the guides are static per-section JSON in `public/text/`. No backend, no API keys, no map.

## Develop & build

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

## Deploy to GitHub Pages

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds on every push to `main` and force-pushes `dist/` to the `gh-pages` branch. In the repository settings, set **Pages → Source: Deploy from a branch → `gh-pages` → `/ (root)`**.

## Caveats

- Focalization percentages and interaction weights are editorial estimates for visualization, not counts.
- Personal names of Gershon's interlocutors (Alofa, Ben, Sara, Rita…) are her own, mostly pseudonyms.
