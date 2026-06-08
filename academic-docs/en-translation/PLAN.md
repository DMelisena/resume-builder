# English Translation + PDF — LINAC Bunker Safety Thesis

**Goal:** Produce an English PDF of the Indonesian thesis "Evaluasi Keselamatan Bunker LINAC 10 MeV RSUP Dr. Hasan Sadikin Menggunakan Metode Simulasi OpenMC".

**Architecture:** Source `.md` (pdftotext output) split into 3 narrative chunks + 1 verbatim appendix. Three subagents translate ID->EN in parallel, each writing a `.en.md` part. Orchestrator assembles parts + appendices, then renders to PDF via pandoc + tectonic.

**Tech Stack:** pandoc 3.9, tectonic (LaTeX engine, install via brew), Python for assembly.

**Dependency Graph:**
- Phase 1 (parallel): Tasks 1-3 — translate the three chunks.
- Phase 2 (serial, orchestrator): Task 4 — assemble + render PDF.

**Working dir:** `/Users/eliserver/resume-builder/academic-docs/en-translation/`

---

## Translation rules (all subagents)
- Translate Indonesian -> natural academic English. Keep meaning faithful.
- Keep ALL: numbers, units, equations, variable symbols, table data, figure/table captions' numbering (e.g. "Tabel V.1" -> "Table V.1", "Gambar III.1" -> "Figure III.1").
- Keep proper nouns: people names, institution names (Universitas Gadjah Mada, RSUP Dr. Hasan Sadikin), OpenMC, LINAC, Elekta Synergy.
- Preserve document order and structure. Output Markdown with `#`/`##` headings for chapters/sections (BAB -> CHAPTER).
- Do NOT translate code, file paths, or program listings.
- Do NOT add commentary. Output only the translated content.
- Page-number artifacts / form-feed junk from pdftotext can be dropped.

### Task 1 -> part1
Input: `part1_frontmatter_intro.src.md` (title page, plagiarism statement, approval page, preface/acknowledgments, TOC, list of tables/figures/symbols, INTISARI/ABSTRACT, CHAPTER I Introduction, CHAPTER II Literature Review).
Output: `part1.en.md`. Note: the ABSTRACT block is already English — keep it; translate INTISARI as "ABSTRACT (Indonesian original)" is NOT needed, just render INTISARI in English too. Render the symbol/abbreviation list as a Markdown table.

### Task 2 -> part2
Input: `part2_theory_methods.src.md` (CHAPTER III Theory, CHAPTER IV Research Methodology).
Output: `part2.en.md`. Equations: render inline or as fenced blocks readable as text; keep symbols.

### Task 3 -> part3
Input: `part3_results_refs.src.md` (CHAPTER V Results & Discussion incl. dose-rate tables, CHAPTER VI Conclusions & Suggestions, References).
Output: `part3.en.md`. Render dose-rate tables as Markdown tables. Do NOT translate the reference list entries (citations stay as-is); only translate the "DAFTAR PUSTAKA" heading -> "REFERENCES".

### Task 4 (orchestrator)
Assemble `part1.en.md + part2.en.md + part3.en.md + appendices.verbatim.md` -> `Thesis_EN_LINAC_Bunker_OpenMC.md`, then pandoc -> `Thesis_EN_LINAC_Bunker_OpenMC.pdf`.
