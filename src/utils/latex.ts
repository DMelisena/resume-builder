import type { ResumeData, LatexConfig } from "../types";

/**
 * Escape special LaTeX characters
 */
function escapeLatex(str: string): string {
  return str
    .replace(/\\/g, "\\textbackslash{}")
    .replace(/&/g, "\\&")
    .replace(/%/g, "\\%")
    .replace(/\$/g, "\\$")
    .replace(/#/g, "\\#")
    .replace(/_/g, "\\_")
    .replace(/\{/g, "\\{")
    .replace(/\}/g, "\\}")
    .replace(/~/g, "\\textasciitilde{}")
    .replace(/\^/g, "\\textasciicircum{}");
}

/**
 * Convert markdown-style bullets to LaTeX items
 * Note: rSubsection already provides a list environment, so we just return \item commands
 */
function formatBullets(text?: string): string {
  if (!text) return "";
  const items = text
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);
  if (!items.length) return "";
  return items.map((item) => `\\item ${escapeLatex(item)}`).join("\n");
}

/**
 * Generate LaTeX document from resume data
 * All resume.cls definitions are embedded in the preamble - no separate .cls file needed
 */
export function buildLatex(data: ResumeData, cfg: LatexConfig): string {
  if (cfg.template === "jp-portfolio") {
    return buildJapanesePortfolioLatex(data, cfg);
  }
  if (cfg.template === "jp-cv") {
    return buildJapaneseCVLatex(data, cfg);
  }
  return buildEnglishLatex(data, cfg);
}

/** English CV (existing) */
function buildEnglishLatex(data: ResumeData, cfg: LatexConfig): string {
  const lines: string[] = [];

  // Standard document class
  lines.push("\\documentclass[11pt,letterpaper]{article}");
  lines.push("");

  // Required packages
  lines.push("\\usepackage[parfill]{parskip}");
  lines.push("\\usepackage{array}");
  lines.push("\\usepackage{ifthen}");
  lines.push("\\usepackage[hidelinks]{hyperref}");
  lines.push("\\usepackage[left=0.4in,top=0.3in,right=0.4in,bottom=0.3in]{geometry}");
  lines.push("\\usepackage{fontawesome5}");
  lines.push("");

  // Page style
  lines.push("\\pagestyle{empty}");
  lines.push("");

  // Begin preamble with @-command access
  lines.push("\\makeatletter");
  lines.push("");

  // Name and address commands
  lines.push("\\def\\name#1{\\def\\@name{#1}}");
  lines.push("\\def\\@name{}");
  lines.push("");
  lines.push("\\def\\addressSep{$\\diamond$}");
  lines.push("");
  lines.push("\\let\\@addressone\\relax");
  lines.push("\\let\\@addresstwo\\relax");
  lines.push("\\let\\@addressthree\\relax");
  lines.push("");
  lines.push("\\def\\address#1{%");
  lines.push("  \\@ifundefined{@addresstwo}{%");
  lines.push("    \\def\\@addresstwo{#1}%");
  lines.push("  }{%");
  lines.push("    \\@ifundefined{@addressthree}{%");
  lines.push("      \\def\\@addressthree{#1}%");
  lines.push("    }{%");
  lines.push("      \\def\\@addressone{#1}%");
  lines.push("    }%");
  lines.push("  }%");
  lines.push("}");
  lines.push("");
  lines.push("\\def\\printaddress#1{%");
  lines.push("  \\begingroup");
  lines.push("    \\def\\\\{\\addressSep\\ }");
  lines.push("    \\centerline{#1}");
  lines.push("  \\endgroup");
  lines.push("  \\par");
  lines.push("  \\addressskip");
  lines.push("}");
  lines.push("");
  lines.push("\\def\\printname{%");
  lines.push("  \\begingroup");
  lines.push("    \\hfil{\\MakeUppercase{\\namesize\\bf\\@name}}\\hfil");
  lines.push("    \\nameskip\\break");
  lines.push("  \\endgroup");
  lines.push("}");
  lines.push("");

  // Redefine \\document to print name and addresses
  lines.push("\\let\\ori@document=\\document");
  lines.push("\\renewcommand{\\document}{%");
  lines.push("  \\ori@document");
  lines.push("  \\printname");
  lines.push("  \\@ifundefined{@addressone}{}{\\printaddress{\\@addressone}}");
  lines.push("  \\@ifundefined{@addresstwo}{}{\\printaddress{\\@addresstwo}}");
  lines.push("  \\@ifundefined{@addressthree}{}{\\printaddress{\\@addressthree}}");
  lines.push("}");
  lines.push("");

  // Section formatting
  lines.push("\\newenvironment{rSection}[1]{%");
  lines.push("  \\sectionskip");
  lines.push("  \\MakeUppercase{\\bf#1}");
  lines.push("  \\sectionlineskip");
  lines.push("  \\hrule");
  lines.push("  \\begin{list}{}{\\setlength{\\leftmargin}{1.5em}}");
  lines.push("  \\item[]");
  lines.push("}{%");
  lines.push("  \\end{list}");
  lines.push("}");
  lines.push("");

  // Subsection formatting
  lines.push("\\newenvironment{rSubsection}[4]{%");
  lines.push("  {\\bf#1}\\hfill{#2}");
  lines.push("  \\ifthenelse{\\equal{#3}{}}{}{\\\\{\\em#3}\\hfill{\\em#4}}");
  lines.push("  \\smallskip");
  lines.push("  \\begin{list}{$\\cdot$}{\\leftmargin=0em}");
  lines.push("    \\itemsep-0.5em \\vspace{-0.5em}");
  lines.push("  }{%");
  lines.push("  \\end{list}");
  lines.push("  \\vspace{0.5em}");
  lines.push("}");
  lines.push("");

  // Spacing definitions
  lines.push("\\def\\namesize{\\huge}");
  lines.push("\\def\\addressskip{\\smallskip}");
  lines.push("\\def\\sectionlineskip{\\medskip}");
  lines.push("\\def\\nameskip{\\bigskip}");
  lines.push("\\def\\sectionskip{\\medskip}");
  lines.push("");

  // End @-command access
  lines.push("\\makeatother");
  lines.push("");

  // Name and addresses (BEFORE \begin{document})
  lines.push(`\\name{${escapeLatex(data.contact.fullName || "Your Name")}}`);

  // First address block with phone and location
  const firstAddressParts: string[] = [];
  if (data.contact.phone) {
    const phoneLink = cfg.asLinks.email && data.contact.phone
      ? `\\href{http://wa.me/${data.contact.phone.replace(/[^0-9]/g, "")}}{${escapeLatex(data.contact.phone)}}`
      : escapeLatex(data.contact.phone);
    firstAddressParts.push(phoneLink);
  }
  if (data.contact.location) {
    firstAddressParts.push(`{${escapeLatex(data.contact.location)}}`);
  }
  if (firstAddressParts.length) {
    lines.push("\\address{");
    lines.push("    " + firstAddressParts.join(" \\\\"));
    lines.push("}");
  }

  // Second address block with website, email, linkedin
  const secondAddressParts: string[] = [];
  if (data.contact.website) {
    const websiteLink = cfg.asLinks.website
      ? `\\href{https://${escapeLatex(data.contact.website)}}{${escapeLatex(data.contact.website)}}`
      : escapeLatex(data.contact.website);
    secondAddressParts.push(websiteLink);
  }
  if (data.contact.email) {
    const emailLink = cfg.asLinks.email
      ? `\\href{mailto:${escapeLatex(data.contact.email)}}{${escapeLatex(data.contact.email)}}`
      : escapeLatex(data.contact.email);
    secondAddressParts.push(emailLink);
  }
  if (data.contact.linkedin) {
    const linkedinLink = cfg.asLinks.linkedin
      ? `\\href{https://${escapeLatex(data.contact.linkedin)}}{${escapeLatex(data.contact.linkedin)}}`
      : escapeLatex(data.contact.linkedin);
    secondAddressParts.push(linkedinLink);
  }
  if (secondAddressParts.length) {
    lines.push("\\address{");
    lines.push("  " + secondAddressParts.join(" \\\\\n  "));
    lines.push("}");
  }

  lines.push("\\begin{document}");
  lines.push("");

  // Summary Section (first) - empty section name
  if (data.contact.headline) {
    lines.push("\\begin{rSection}{}");
    lines.push("");
    lines.push(escapeLatex(data.contact.headline));
    lines.push("");
    lines.push("\\end{rSection}");
    lines.push("");
  }

  // Projects Section (second)
  if (data.projects?.length) {
    lines.push("\\begin{rSection}{Projects}");
    lines.push("");
    lines.push("");
    lines.push("");

    data.projects.forEach((p) => {
      const projectName = p.name ? escapeLatex(p.name) : "Project";

      if (p.url) {
        const url = p.url.startsWith('http') ? p.url : `https://${p.url}`;
        lines.push(`\\href{${url}}{\\textbf{${projectName}}~\\faLink}`);
      } else {
        lines.push(`\\textbf{${projectName}}`);
      }

      const bullets = formatBullets(p.description);
      if (bullets) {
        lines.push("");
        lines.push("\\begin{itemize}");
        lines.push("\\itemsep -0.45em");
        lines.push(bullets);
        lines.push("\\end{itemize}");
      }

      lines.push("");
      lines.push("");
    });

    lines.push("\\end{rSection}");
    lines.push("");
  }

  // Skills Section (third)
  if (data.skills) {
    lines.push("\\begin{rSection}{Skills}");
    lines.push("");
    lines.push("\\begin{tabular}{ @{} >{\\bfseries}l @{\\hspace{6ex}} l }");

    const categories = data.skills
      .split("|")
      .map((s) => s.trim())
      .filter(Boolean);

    categories.forEach((cat) => {
      const colonIndex = cat.indexOf(":");
      if (colonIndex > 0) {
        const category = cat.substring(0, colonIndex).trim();
        const skillList = cat.substring(colonIndex + 1).trim();
        const skills = skillList.split(",").map((s) => s.trim()).filter(Boolean);

        lines.push(`${escapeLatex(category)} & ${escapeLatex(skills.join(", "))}\\\\`);
        lines.push("");
      }
    });

    lines.push("\\end{tabular}");
    lines.push("");
    lines.push("\\end{rSection}");
    lines.push("");
  }

  // Education Section (before Experience)
  if (data.education?.length) {
    lines.push("\\begin{rSection}{Education}");
    lines.push("");

    data.education.forEach((ed) => {
      const degree = ed.degree ? `{\\bf ${escapeLatex(ed.degree)}}` : "";
      const endDate = ed.endDate ? `{${escapeLatex(ed.endDate)}}` : "";

      if (degree || endDate) {
        lines.push(`${degree} \\hfill ${endDate} \\\\`);
      }

      if (ed.school) {
        lines.push(escapeLatex(ed.school));
        lines.push("\\\\");
      }

      if (ed.location) {
        lines.push(escapeLatex(ed.location));
      }

      lines.push("");
    });

    lines.push("\\end{rSection}");
    lines.push("");
  }

  // Experience Section (last)
  if (data.experience?.length) {
    lines.push("\\begin{rSection}{Experience}");

    data.experience.forEach((ex) => {
      const company = ex.company ? escapeLatex(ex.company) : "Company";
      const dates = [ex.startDate, ex.endDate].filter(Boolean).join(" - ");
      const title = ex.title || "Position";
      const location = ex.location ? escapeLatex(ex.location) : "";

      const titleWithLocation = location ? `${escapeLatex(title)}, ${location}` : escapeLatex(title);
      lines.push(`\\begin{rSubsection}{${company}}{${escapeLatex(dates)}}{${titleWithLocation}}{}`);

      const bullets = formatBullets(ex.bullets);
      if (bullets) {
        lines.push(bullets);
      }

      lines.push("\\end{rSubsection}");
      lines.push("");
    });

    lines.push("\\end{rSection}");
    lines.push("");
  }

  lines.push("\\end{document}");

  return lines.join("\n");
}

/**
 * Export LaTeX as .tex file download
 */
export function downloadLatex(latexCode: string, filename: string) {
  const blob = new Blob([latexCode], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Sanitize filename for .tex export
 */
export function sanitizeFilename(name: string): string {
  return name.replace(/[^a-z0-9\u00C0-\u024F\s._-]+/gi, "_").trim() || "resume";
}

/**
 * Japanese portfolio template (職務経歴書 style, engineer-focused)
 * Tailored for fastoffer.co.jp engineer applications:
 *   - skills-first layout (technical stack up top)
 *   - projects with role + period + tech stack
 *   - education with 西暦 format
 *   - uses ltjsarticle + luatexja for clean Japanese rendering on Overleaf
 *
 * Note: Compile with LuaLaTeX on Overleaf. Do NOT escape Japanese characters.
 */
function buildJapanesePortfolioLatex(data: ResumeData, cfg: LatexConfig): string {
  const lines: string[] = [];

  lines.push("% !TEX program = lualatex");
  lines.push("\\documentclass[11pt,a4paper]{ltjsarticle}");
  lines.push("");
  lines.push("\\usepackage{luatexja-fontspec}");
  lines.push("\\usepackage[hidelinks]{hyperref}");
  lines.push("\\usepackage[left=20mm,top=18mm,right=20mm,bottom=18mm]{geometry}");
  lines.push("\\usepackage{array}");
  lines.push("\\usepackage{enumitem}");
  lines.push("\\usepackage{titlesec}");
  lines.push("\\usepackage{fontawesome5}");
  lines.push("");
  lines.push("\\setlist{nosep,leftmargin=1.2em}");
  lines.push("");
  lines.push("% Section: bold Japanese heading with full-width underline");
  lines.push("\\titleformat{\\section}{\\large\\bfseries}{}{0pt}{}[\\vspace{-0.4em}\\hrule]");
  lines.push("\\titlespacing*{\\section}{0pt}{1.1em}{0.5em}");
  lines.push("");
  lines.push("\\pagestyle{empty}");
  lines.push("");
  lines.push("\\begin{document}");
  lines.push("");

  // ===== Header: name + date (right) =====
  const fullName = data.contact.fullName || "氏名";
  lines.push("\\begin{flushright}");
  lines.push("\\small 作成日: \\today");
  lines.push("\\end{flushright}");
  lines.push("");
  lines.push("\\begin{center}");
  lines.push(`{\\LARGE\\bfseries 職務経歴書}\\\\[0.4em]`);
  lines.push(`{\\large ${escapeLatex(fullName)}}`);
  lines.push("\\end{center}");
  lines.push("");

  // ===== Contact (連絡先) =====
  lines.push("\\section*{■ 連絡先}");
  lines.push("\\begin{tabular}{@{}p{3.2cm}p{12cm}@{}}");
  if (data.contact.location) {
    lines.push(`所在地 & ${escapeLatex(data.contact.location)} \\\\`);
  }
  if (data.contact.phone) {
    lines.push(`電話番号 & ${escapeLatex(data.contact.phone)} \\\\`);
  }
  if (data.contact.email) {
    const emailLink = cfg.asLinks.email
      ? `\\href{mailto:${data.contact.email}}{${escapeLatex(data.contact.email)}}`
      : escapeLatex(data.contact.email);
    lines.push(`メール & ${emailLink} \\\\`);
  }
  if (data.contact.website) {
    const url = data.contact.website.startsWith("http")
      ? data.contact.website
      : `https://${data.contact.website}`;
    const link = cfg.asLinks.website
      ? `\\href{${url}}{${escapeLatex(data.contact.website)}}`
      : escapeLatex(data.contact.website);
    lines.push(`ポートフォリオ & ${link} \\\\`);
  }
  if (data.contact.linkedin) {
    const url = data.contact.linkedin.startsWith("http")
      ? data.contact.linkedin
      : `https://${data.contact.linkedin}`;
    const link = cfg.asLinks.linkedin
      ? `\\href{${url}}{${escapeLatex(data.contact.linkedin)}}`
      : escapeLatex(data.contact.linkedin);
    lines.push(`LinkedIn & ${link} \\\\`);
  }
  lines.push("\\end{tabular}");
  lines.push("");

  // ===== Summary (自己PR / 職務要約) =====
  if (data.contact.headline) {
    lines.push("\\section*{■ 職務要約 / 自己PR}");
    lines.push(escapeLatex(data.contact.headline));
    lines.push("");
  }

  // ===== Skills (技術スキル) — first, engineer-priority =====
  if (data.skills) {
    lines.push("\\section*{■ 技術スキル (Technical Skills)}");
    lines.push("\\begin{tabular}{@{}>{\\bfseries}p{3.5cm}p{12cm}@{}}");
    const categories = data.skills.split("|").map((s) => s.trim()).filter(Boolean);
    categories.forEach((cat) => {
      const idx = cat.indexOf(":");
      if (idx > 0) {
        const category = cat.substring(0, idx).trim();
        const list = cat.substring(idx + 1).trim();
        lines.push(`${escapeLatex(category)} & ${escapeLatex(list)} \\\\`);
      }
    });
    lines.push("\\end{tabular}");
    lines.push("");
  }

  // ===== Projects (制作実績 / プロジェクト) =====
  if (data.projects?.length) {
    lines.push("\\section*{■ プロジェクト / 制作実績}");
    data.projects.forEach((p) => {
      const name = p.name ? escapeLatex(p.name) : "プロジェクト";
      if (p.url) {
        const url = p.url.startsWith("http") ? p.url : `https://${p.url}`;
        lines.push(`\\textbf{${name}}~\\href{${url}}{\\faLink}`);
      } else {
        lines.push(`\\textbf{${name}}`);
      }
      lines.push("\\vspace{0.2em}");

      const bullets = (p.description || "")
        .split(/\r?\n/)
        .map((s) => s.trim())
        .filter(Boolean);
      if (bullets.length) {
        lines.push("\\begin{itemize}");
        bullets.forEach((b) => lines.push(`\\item ${escapeLatex(b)}`));
        lines.push("\\end{itemize}");
      }
      lines.push("\\vspace{0.4em}");
      lines.push("");
    });
  }

  // ===== Experience (職務経歴) =====
  if (data.experience?.length) {
    lines.push("\\section*{■ 職務経歴 (Work Experience)}");
    data.experience.forEach((ex) => {
      const company = ex.company ? escapeLatex(ex.company) : "会社名";
      const dates = [ex.startDate, ex.endDate].filter(Boolean).join(" 〜 ");
      const title = ex.title ? escapeLatex(ex.title) : "";
      const loc = ex.location ? escapeLatex(ex.location) : "";

      lines.push(`\\noindent\\textbf{${company}} \\hfill ${escapeLatex(dates)}\\\\`);
      const subParts = [title, loc].filter(Boolean).join(" / ");
      if (subParts) {
        lines.push(`\\textit{${subParts}}`);
      }
      lines.push("\\vspace{0.2em}");

      const bullets = (ex.bullets || "")
        .split(/\r?\n/)
        .map((s) => s.trim())
        .filter(Boolean);
      if (bullets.length) {
        lines.push("\\begin{itemize}");
        bullets.forEach((b) => lines.push(`\\item ${escapeLatex(b)}`));
        lines.push("\\end{itemize}");
      }
      lines.push("\\vspace{0.4em}");
      lines.push("");
    });
  }

  // ===== Education (学歴) =====
  if (data.education?.length) {
    lines.push("\\section*{■ 学歴 (Education)}");
    lines.push("\\begin{tabular}{@{}p{2.8cm}p{13cm}@{}}");
    data.education.forEach((ed) => {
      const date = ed.endDate ? escapeLatex(ed.endDate) : "";
      const school = ed.school ? escapeLatex(ed.school) : "";
      const degree = ed.degree ? escapeLatex(ed.degree) : "";
      const loc = ed.location ? escapeLatex(ed.location) : "";
      const right = [school, degree, loc].filter(Boolean).join(" — ");
      lines.push(`${date} & ${right} \\\\`);
    });
    lines.push("\\end{tabular}");
    lines.push("");
  }

  lines.push("\\vfill");
  lines.push("\\begin{flushright}");
  lines.push("\\small 以上");
  lines.push("\\end{flushright}");
  lines.push("");
  lines.push("\\end{document}");

  return lines.join("\n");
}

/**
 * Japanese formal CV (履歴書 / Rirekisho style).
 * Structured grid layout with combined Education+Experience table
 * and dedicated Licenses/Qualifications section.
 *
 * Compile with LuaLaTeX on Overleaf.
 */
function buildJapaneseCVLatex(data: ResumeData, cfg: LatexConfig): string {
  const lines: string[] = [];

  lines.push("% !TEX program = lualatex");
  lines.push("\\documentclass[11pt,a4paper]{ltjsarticle}");
  lines.push("");
  lines.push("\\usepackage{luatexja-fontspec}");
  lines.push("\\usepackage[hidelinks]{hyperref}");
  lines.push("\\usepackage[left=18mm,top=16mm,right=18mm,bottom=16mm]{geometry}");
  lines.push("\\usepackage{array}");
  lines.push("\\usepackage{enumitem}");
  lines.push("\\usepackage{titlesec}");
  lines.push("\\usepackage{fontawesome5}");
  lines.push("\\usepackage{multirow}");
  lines.push("");
  lines.push("\\setlist{nosep,leftmargin=1.2em}");
  lines.push("\\pagestyle{empty}");
  lines.push("");
  lines.push("\\renewcommand{\\arraystretch}{1.3}");
  lines.push("");
  lines.push("\\begin{document}");
  lines.push("");

  const fullName = data.contact.fullName || "氏名";
  const now = new Date();
  const jpYear = now.getFullYear();
  const jpMonth = String(now.getMonth() + 1).padStart(2, "0");
  const jpDay = String(now.getDate()).padStart(2, "0");

  // ===== TITLE =====
  lines.push("\\begin{center}");
  lines.push(`{\\LARGE\\bfseries 履 歴 書}\\\\[1em]`);
  lines.push(`\\hrule`);
  lines.push(`\\vspace{0.5em}`);
  lines.push(`{\\large ${escapeLatex(fullName)}}\\\\[0.3em]`);
  lines.push(`{\\small ${jpYear}年${jpMonth}月${jpDay}日 現在}`);
  lines.push("\\end{center}");
  lines.push("");

  // ===== PERSONAL INFO (基本情報) =====
  lines.push("\\section*{■ 基本情報}");
  lines.push("\\begin{tabular}{|p{3.5cm}|p{12cm}|}");
  lines.push("\\hline");
  lines.push(`氏名 & ${escapeLatex(fullName)} \\\\`);
  lines.push("\\hline");
  if (data.contact.location) {
    lines.push(`現住所 & ${escapeLatex(data.contact.location)} \\\\`);
    lines.push("\\hline");
  }
  if (data.contact.phone) {
    lines.push(`電話番号 & ${escapeLatex(data.contact.phone)} \\\\`);
    lines.push("\\hline");
  }
  if (data.contact.email) {
    const emailLink = cfg.asLinks.email
      ? `\\href{mailto:${data.contact.email}}{${escapeLatex(data.contact.email)}}`
      : escapeLatex(data.contact.email);
    lines.push(`メール & ${emailLink} \\\\`);
    lines.push("\\hline");
  }
  if (data.contact.website) {
    const url = data.contact.website.startsWith("http")
      ? data.contact.website
      : `https://${data.contact.website}`;
    const link = cfg.asLinks.website
      ? `\\href{${url}}{${escapeLatex(data.contact.website)}}`
      : escapeLatex(data.contact.website);
    lines.push(`ポートフォリオ & ${link} \\\\`);
    lines.push("\\hline");
  }
  if (data.contact.linkedin) {
    const url = data.contact.linkedin.startsWith("http")
      ? data.contact.linkedin
      : `https://${data.contact.linkedin}`;
    const link = cfg.asLinks.linkedin
      ? `\\href{${url}}{${escapeLatex(data.contact.linkedin)}}`
      : escapeLatex(data.contact.linkedin);
    lines.push(`LinkedIn & ${link} \\\\`);
    lines.push("\\hline");
  }
  lines.push("\\end{tabular}");
  lines.push("");

  // ===== EDUCATION + EXPERIENCE TABLE (学歴・職歴) =====
  lines.push("\\section*{■ 学歴・職歴}");
  lines.push("\\begin{tabular}{|p{2.8cm}|p{1.5cm}|p{11cm}|}");
  lines.push("\\hline");
  lines.push("\\textbf{年月} & \\textbf{区分} & \\textbf{内容} \\\\");
  lines.push("\\hline");

  // Education rows (oldest first, classic JP CV style)
  if (data.education?.length) {
    const sortedEd = [...data.education].sort((a, b) =>
      (a.endDate || "").localeCompare(b.endDate || "")
    );
    sortedEd.forEach((ed, i) => {
      const date = ed.endDate ? escapeLatex(ed.endDate) : "";
      const school = ed.school ? escapeLatex(ed.school) : "";
      const degree = ed.degree ? escapeLatex(ed.degree) : "";
      const right = [school, degree].filter(Boolean).join(" / ");
      const label = i === 0 ? "\\textbf{学歴}" : "";
      lines.push(`${date} & ${label} & ${right} \\\\`);
      lines.push("\\hline");
    });
  }

  // Experience rows
  if (data.experience?.length) {
    const sortedEx = [...data.experience].sort((a, b) =>
      (a.startDate || "").localeCompare(b.startDate || "")
    );
    sortedEx.forEach((ex, i) => {
      const date = [ex.startDate, ex.endDate].filter(Boolean).join(" 〜 ");
      const dateEsc = escapeLatex(date);
      const company = ex.company ? escapeLatex(ex.company) : "";
      const title = ex.title ? escapeLatex(ex.title) : "";
      const right = [company, title].filter(Boolean).join(" — ");
      const label = i === 0 ? "\\textbf{職歴}" : "";
      lines.push(`${dateEsc} & ${label} & ${right} \\\\`);
      if (ex.bullets) {
        const bullets = ex.bullets.split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
        bullets.forEach((b) => {
          const clean = b.replace(/\*\*/g, "");
          lines.push(` & & \\small{${escapeLatex(clean)}} \\\\`);
        });
      }
      lines.push("\\hline");
    });
  }

  lines.push(" & & \\hfill\\textbf{以上} \\\\");
  lines.push("\\hline");
  lines.push("\\end{tabular}");
  lines.push("");

  // ===== SKILLS (免許・資格 / 技術スキル) =====
  if (data.skills) {
    lines.push("\\section*{■ 免許・資格 / 技術スキル}");
    lines.push("\\begin{tabular}{|p{4.5cm}|p{11cm}|}");
    lines.push("\\hline");
    const categories = data.skills.split("|").map((s) => s.trim()).filter(Boolean);
    categories.forEach((cat) => {
      const idx = cat.indexOf(":");
      if (idx > 0) {
        const category = cat.substring(0, idx).trim();
        const items = cat.substring(idx + 1).trim();
        lines.push(`${escapeLatex(category)} & ${escapeLatex(items)} \\\\`);
        lines.push("\\hline");
      }
    });
    lines.push("\\end{tabular}");
    lines.push("");
  }

  // ===== PROJECTS (研究・制作実績) =====
  if (data.projects?.length) {
    lines.push("\\section*{■ 研究・制作実績}");
    data.projects.forEach((p) => {
      const name = p.name ? escapeLatex(p.name) : "プロジェクト";
      if (p.url) {
        const url = p.url.startsWith("http") ? p.url : `https://${p.url}`;
        lines.push(`\\noindent\\textbf{${name}}~\\href{${url}}{\\faLink}\\\\`);
      } else {
        lines.push(`\\noindent\\textbf{${name}}\\\\`);
      }
      if (p.description) {
        const bullets = p.description.split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
        if (bullets.length) {
          lines.push("\\begin{itemize}");
          bullets.forEach((b) => lines.push(`\\item ${escapeLatex(b)}`));
          lines.push("\\end{itemize}");
        }
      }
      lines.push("\\vspace{0.4em}");
    });
    lines.push("");
  }

  // ===== SELF PR / MOTIVATION (自己PR / 志望動機) =====
  if (data.contact.headline) {
    lines.push("\\section*{■ 自己PR / 志望動機}");
    lines.push(escapeLatex(data.contact.headline));
    lines.push("");
  }

  lines.push("\\vfill");
  lines.push("\\begin{flushright}");
  lines.push("\\small 以上");
  lines.push("\\end{flushright}");
  lines.push("");
  lines.push("\\end{document}");

  return lines.join("\n");
}
