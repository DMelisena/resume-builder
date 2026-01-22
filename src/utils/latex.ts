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
  const lines: string[] = [];

  // Standard document class
  lines.push("\\documentclass[11pt,letterpaper]{article}");
  lines.push("");

  // Required packages
  lines.push("\\usepackage[parfill]{parskip}");
  lines.push("\\usepackage{array}");
  lines.push("\\usepackage{ifthen}");
  lines.push("\\usepackage[left=0.4in,top=0.3in,right=0.4in,bottom=0.3in]{geometry}");
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

  if (data.contact.location) {
    lines.push(`\\address{${escapeLatex(data.contact.location)}}`);
  }

  const contactParts: string[] = [];
  if (data.contact.phone) {
    contactParts.push(escapeLatex(data.contact.phone));
  }
  if (data.contact.email) {
    contactParts.push(escapeLatex(data.contact.email));
  }
  if (contactParts.length) {
    const sep = " \\\\";
    lines.push("\\address{" + contactParts.join(sep) + "}");
  }

  lines.push("");
  lines.push("\\begin{document}");
  lines.push("");

  // Summary Section (first)
  if (data.contact.headline) {
    lines.push("\\begin{rSection}{Summary}");
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

    data.projects.forEach((p) => {
      const projectName = p.name ? escapeLatex(p.name) : "Project";
      const dates = [p.startDate, p.endDate].filter(Boolean).join(" - ");
      const title = p.title || "Project";

      lines.push(`\\begin{rSubsection}{${projectName}}{${escapeLatex(dates)}}{${escapeLatex(title)}}{}`);

      const bullets = formatBullets(p.description);
      if (bullets) {
        lines.push(bullets);
      }

      lines.push("\\end{rSubsection}");
      lines.push("");
    });

    lines.push("\\end{rSection}");
    lines.push("");
  }

  // Skills Section (third)
  if (data.skills) {
    lines.push("\\begin{rSection}{Skills and Interests}");
    lines.push("");
    lines.push("\\begin{tabular}{ @{} >{\\bfseries}l @{\\hspace{6ex}} l }");

    const categories = data.skills
      .split("|")
      .map((s) => s.trim())
      .filter(Boolean);

    categories.forEach((cat, index) => {
      const colonIndex = cat.indexOf(":");
      if (colonIndex > 0) {
        const category = cat.substring(0, colonIndex).trim();
        const skillList = cat.substring(colonIndex + 1).trim();
        const skills = skillList.split(",").map((s) => s.trim()).filter(Boolean);
        const maxPerLine = 4;

        // Format matches original template: ...skills4, \\& skills5\\
        let lineParts: string[] = [];
        const firstChunk = skills.slice(0, maxPerLine).join(", ");
        lineParts.push(`${escapeLatex(category)} & ${escapeLatex(firstChunk)}`);

        for (let j = maxPerLine; j < skills.length; j += maxPerLine) {
          const chunk = skills.slice(j, j + maxPerLine).join(", ");
          lineParts.push(` \\\\& ${escapeLatex(chunk)}`);
        }

        lines.push(lineParts.join(" ") + "\\\\");
        // Blank line between categories (except last)
        if (index < categories.length - 1) {
          lines.push("");
        }
      }
    });

    lines.push("\\end{tabular}");
    lines.push("");
    lines.push("\\end{rSection}");
    lines.push("");
  }

  // Experience Section (fourth)
  if (data.experience?.length) {
    lines.push("\\begin{rSection}{Experience}");
    lines.push("");

    data.experience.forEach((ex) => {
      const company = ex.company ? escapeLatex(ex.company) : "Company";
      const dates = [ex.startDate, ex.endDate].filter(Boolean).join(" - ");
      const title = ex.title || "Position";
      const location = ex.location ? escapeLatex(ex.location) : "";

      const titleWithLocation = location ? `${escapeLatex(title)}, ${escapeLatex(location)}` : escapeLatex(title);
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

  // Education Section (last)
  if (data.education?.length) {
    lines.push("\\begin{rSection}{Education}");
    lines.push("");

    data.education.forEach((ed) => {
      const degree = ed.degree ? `{\\bf ${escapeLatex(ed.degree)}}` : "";
      const dates = [ed.startDate, ed.endDate].filter(Boolean).join(" - ");
      const dateStr = dates ? `{${escapeLatex(dates)}}` : "";

      if (degree || dateStr) {
        lines.push(`${degree} \\hfill ${dateStr} \\\\`);
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
