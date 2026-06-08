import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3004;

app.disable('x-powered-by');
app.use(cors());
app.use(express.json({ limit: "5mb" }));

const distPath = path.join(__dirname, "../dist");
app.use(express.static(distPath));

async function generatePdf(data, template = "english") {
  if (template === "jp-portfolio") {
    return generateJpPdf(data);
  }
  if (template === "jp-cv") {
    return generateJpCvPdf(data);
  }
  return generateEnglishPdf(data);
}

async function generateEnglishPdf(data) {
  const pdfDoc = await PDFDocument.create();
  let page = pdfDoc.addPage([612, 792]); // Letter size 8.5 x 11
  const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const fontBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

  const { width, height } = page.getSize();
  let y = height - 50;
  const margin = 50;
  const contentWidth = width - margin * 2;

  // Helpers
  const checkPageBreak = (neededSpace = 12) => {
    if (y < margin + neededSpace) {
      page = pdfDoc.addPage([612, 792]);
      y = height - 50;
    }
  };

  const drawText = (text, options = {}) => {
    checkPageBreak();
    page.drawText(text, {
      x: options.x || margin,
      y,
      size: options.size || 10,
      font: options.font || font,
      color: options.color || rgb(0, 0, 0),
    });
  };

  const drawTextLine = (text, options = {}) => {
    checkPageBreak();
    page.drawText(text, {
      x: options.x || margin,
      y,
      size: options.size || 10,
      font: options.font || font,
      color: options.color || rgb(0, 0, 0),
    });
    if (options.moveDown !== false) {
       y -= 12;
    }
  };

  const drawCentered = (text, size, fontToUse) => {
    const textWidth = fontToUse.widthOfTextAtSize(text, size);
    drawText(text, { x: (width - textWidth) / 2, size, font: fontToUse });
  };

  const drawRightAligned = (text, size, fontToUse) => {
    const textWidth = fontToUse.widthOfTextAtSize(text, size);
    page.drawText(text, { x: width - margin - textWidth, y, size, font: fontToUse });
  };

  const drawLine = () => {
    checkPageBreak(5);
    page.drawLine({
      start: { x: margin, y: y - 2 },
      end: { x: width - margin, y: y - 2 },
      thickness: 0.5,
      color: rgb(0, 0, 0),
    });
    y -= 5;
  };

  const wrapText = (text, maxWidth, size, fontToUse) => {
    const words = text.split(' ');
    const lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = fontToUse.widthOfTextAtSize(`${currentLine} ${word}`, size);
      if (width < maxWidth) {
        currentLine += ` ${word}`;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  };

  // --- CONTENT ---

  // Name
  if (data.contact.fullName) {
    drawCentered(data.contact.fullName.toUpperCase(), 20, fontBold);
    y -= 20;
  }

  // Contact Info
  const contactLines = [];
  const line1 = [data.contact.phone, data.contact.location].filter(Boolean).join(' | ');
  if (line1) contactLines.push(line1);
  
  const line2Parts = [data.contact.website, data.contact.email, data.contact.linkedin].filter(Boolean);
  if (line2Parts.length > 0) contactLines.push(line2Parts.join(' | '));

  contactLines.forEach(line => {
    drawCentered(line, 10, font);
    y -= 12;
  });
  y -= 10;

  // Helper for Sections
  const drawSectionTitle = (title) => {
    checkPageBreak(25);
    y -= 5;
    page.drawText(title.toUpperCase(), { x: margin, y, size: 11, font: fontBold });
    y -= 3;
    drawLine();
    y -= 10;
  };

  // Summary
  if (data.contact.headline) {
    const lines = wrapText(data.contact.headline, contentWidth, 10, font);
    lines.forEach(line => {
      drawTextLine(line, { size: 10, font });
    });
    y -= 10;
  }

  // Projects
  if (data.projects && data.projects.length > 0) {
    drawSectionTitle('PROJECTS');
    for (const p of data.projects) {
      if (p.name) {
        const nameText = p.name;
        const displayName = p.url ? `${nameText} (Link)` : nameText;
        drawTextLine(displayName, { size: 10, font: fontBold });
      }
      
      if (p.description) {
        const bullets = p.description.split('\n');
        for (const bullet of bullets) {
          if (!bullet.trim()) continue;
          const cleanBullet = bullet.replace(/\*\*/g, '');
          const lines = wrapText(cleanBullet, contentWidth - 15, 10, font);
          lines.forEach((line, idx) => {
            checkPageBreak();
            if (idx === 0) {
              page.drawCircle({ x: margin + 5, y: y + 3, size: 1.5 });
              page.drawText(line, { x: margin + 15, y, size: 10, font });
            } else {
              page.drawText(line, { x: margin + 15, y, size: 10, font });
            }
            y -= 12;
          });
        }
      }
      y -= 5;
    }
    y -= 5;
  }

  // Skills
  if (data.skills) {
    drawSectionTitle('SKILLS');
    const categories = data.skills.split('|').map(s => s.trim()).filter(Boolean);
    for (const cat of categories) {
      const splitIdx = cat.indexOf(':');
      if (splitIdx > 0) {
        const category = cat.substring(0, splitIdx).trim();
        const items = cat.substring(splitIdx + 1).trim();
        
        checkPageBreak();
        const catWidth = fontBold.widthOfTextAtSize(category, 10);
        page.drawText(category, { x: margin, y, size: 10, font: fontBold });
        page.drawText(items, { x: margin + catWidth + 10, y, size: 10, font });
        y -= 12;
      }
    }
    y -= 10;
  }

  // Education
  if (data.education && data.education.length > 0) {
    drawSectionTitle('EDUCATION');
    for (const edu of data.education) {
      checkPageBreak(30);
      if (edu.degree) {
        page.drawText(edu.degree, { x: margin, y, size: 10, font: fontBold });
        if (edu.endDate) {
          drawRightAligned(edu.endDate, 10, font);
        }
        y -= 12;
      }
      if (edu.school) {
        drawTextLine(edu.school, { size: 10, font });
      }
      if (edu.location) {
        drawTextLine(edu.location, { size: 10, font: fontItalic });
      }
      y -= 5;
    }
    y -= 5;
  }

  // Experience
  if (data.experience && data.experience.length > 0) {
    drawSectionTitle('EXPERIENCE');
    for (const exp of data.experience) {
      checkPageBreak(30);
      if (exp.company) {
        page.drawText(exp.company, { x: margin, y, size: 10, font: fontBold });
        const dates = [exp.startDate, exp.endDate].filter(Boolean).join(' - ');
        if (dates) {
          drawRightAligned(dates, 10, font);
        }
        y -= 12;
      }

      const subLine = [exp.title, exp.location].filter(Boolean).join(', ');
      if (subLine) {
        drawTextLine(subLine, { size: 10, font: fontItalic });
      }

      if (exp.bullets) {
        const bullets = exp.bullets.split('\n');
        for (const bullet of bullets) {
          if (!bullet.trim()) continue;
          const cleanBullet = bullet.replace(/\*\*/g, '');
          const lines = wrapText(cleanBullet, contentWidth - 15, 10, font);
          lines.forEach((line, idx) => {
            checkPageBreak();
            if (idx === 0) {
              page.drawCircle({ x: margin + 5, y: y + 3, size: 1.5 });
              page.drawText(line, { x: margin + 15, y, size: 10, font });
            } else {
              page.drawText(line, { x: margin + 15, y, size: 10, font });
            }
            y -= 12;
          });
        }
      }
      y -= 8;
    }
  }

  return await pdfDoc.save();
}

/**
 * 職務経歴書 (Shokumukeirekisho) layout — Japanese engineer portfolio.
 * Uses A4 paper. Section order matches the LaTeX jp-portfolio template:
 *   Contact → Summary → Skills → Projects → Experience → Education
 *
 * NOTE: pdf-lib StandardFonts lack CJK glyphs. Labels use English + romaji.
 * For proper Japanese character rendering, use the LaTeX → Overleaf path.
 */
async function generateJpPdf(data) {
  const pdfDoc = await PDFDocument.create();
  let page = pdfDoc.addPage([595, 842]); // A4 size
  const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const fontBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

  const { width, height } = page.getSize();
  let y = height - 45;
  const margin = 45;
  const contentWidth = width - margin * 2;

  const checkPageBreak = (neededSpace = 12) => {
    if (y < margin + neededSpace) {
      page = pdfDoc.addPage([595, 842]);
      y = height - 45;
    }
  };

  const drawText = (text, options = {}) => {
    checkPageBreak();
    page.drawText(text, {
      x: options.x || margin,
      y,
      size: options.size || 10,
      font: options.font || font,
      color: options.color || rgb(0, 0, 0),
    });
  };

  const drawTextLine = (text, options = {}) => {
    checkPageBreak();
    page.drawText(text, {
      x: options.x || margin,
      y,
      size: options.size || 10,
      font: options.font || font,
      color: options.color || rgb(0, 0, 0),
    });
    if (options.moveDown !== false) y -= 13;
  };

  const drawCentered = (text, size, fontToUse) => {
    const textWidth = fontToUse.widthOfTextAtSize(text, size);
    drawText(text, { x: (width - textWidth) / 2, size, font: fontToUse });
  };

  const drawRightAligned = (text, size, fontToUse) => {
    const textWidth = fontToUse.widthOfTextAtSize(text, size);
    page.drawText(text, { x: width - margin - textWidth, y, size, font: fontToUse });
  };

  const drawLine = () => {
    checkPageBreak(5);
    page.drawLine({
      start: { x: margin, y: y - 2 },
      end: { x: width - margin, y: y - 2 },
      thickness: 0.8,
      color: rgb(0.1, 0.1, 0.1),
    });
    y -= 5;
  };

  const wrapText = (text, maxWidth, size, fontToUse) => {
    const words = text.split(" ");
    const lines = [];
    let currentLine = words[0];
    for (let i = 1; i < words.length; i++) {
      const width = fontToUse.widthOfTextAtSize(`${currentLine} ${words[i]}`, size);
      if (width < maxWidth) {
        currentLine += ` ${words[i]}`;
      } else {
        lines.push(currentLine);
        currentLine = words[i];
      }
    }
    lines.push(currentLine);
    return lines;
  };

  const drawSectionTitle = (title) => {
    checkPageBreak(25);
    y -= 2;
    const tw = fontBold.widthOfTextAtSize(title, 12);
    const barStart = margin + tw + 8;
    const barEnd = width - margin;
    page.drawText(title, { x: margin, y, size: 12, font: fontBold, color: rgb(0.05, 0.05, 0.05) });
    page.drawLine({
      start: { x: barStart, y: y - 2 },
      end: { x: barEnd, y: y - 2 },
      thickness: 0.6,
      color: rgb(0.6, 0.6, 0.6),
    });
    y -= 14;
  };

  // --- HEADER ---
  const jpDate = new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "short", day: "numeric" });
  drawRightAligned(`${jpDate}`, 8, font);
  y -= 8;

  if (data.contact.fullName) {
    drawCentered("Shokumukeirekisho", 12, fontBold);
    y -= 14;
    drawCentered(data.contact.fullName.toUpperCase(), 18, fontBold);
    y -= 18;
  }

  // Contact
  const contactLines = [];
  const line1 = [data.contact.phone, data.contact.location].filter(Boolean).join(" | ");
  if (line1) contactLines.push(line1);
  const line2Parts = [data.contact.website, data.contact.email, data.contact.linkedin].filter(Boolean);
  if (line2Parts.length) contactLines.push(line2Parts.join(" | "));
  contactLines.forEach((line) => {
    drawCentered(line, 9, font);
    y -= 12;
  });
  y -= 8;

  // --- SUMMARY (職務要約 / 自己PR) ---
  if (data.contact.headline) {
    drawSectionTitle("SUMMARY");
    const lines = wrapText(data.contact.headline, contentWidth, 10, font);
    lines.forEach((line) => drawTextLine(line, { size: 10, font }));
    y -= 8;
  }

  // --- SKILLS (first — engineer priority in JP portfolios) ---
  if (data.skills) {
    drawSectionTitle("SKILLS");
    const categories = data.skills.split("|").map((s) => s.trim()).filter(Boolean);
    for (const cat of categories) {
      const idx = cat.indexOf(":");
      if (idx > 0) {
        const category = cat.substring(0, idx).trim();
        const items = cat.substring(idx + 1).trim();
        checkPageBreak();
        const catWidth = fontBold.widthOfTextAtSize(category, 10);
        page.drawText(category, { x: margin, y, size: 10, font: fontBold });
        const lines = wrapText(items, contentWidth - catWidth - 12, 10, font);
        lines.forEach((line, i) => {
          if (i === 0) {
            page.drawText(line, { x: margin + catWidth + 10, y, size: 10, font });
          } else {
            page.drawText(line, { x: margin + catWidth + 10, y, size: 10, font });
          }
          y -= 13;
        });
        y -= 2;
      }
    }
    y -= 6;
  }

  // --- PROJECTS (制作実績) ---
  if (data.projects?.length) {
    drawSectionTitle("PROJECTS");
    for (const p of data.projects) {
      if (p.name) {
        const nameText = p.name;
        drawTextLine(nameText, { size: 10, font: fontBold });
      }
      if (p.description) {
        const bullets = p.description.split("\n");
        for (const bullet of bullets) {
          if (!bullet.trim()) continue;
          const clean = bullet.replace(/\*\*/g, "");
          const lines = wrapText(clean, contentWidth - 15, 10, font);
          lines.forEach((line, i) => {
            checkPageBreak();
            if (i === 0) {
              page.drawCircle({ x: margin + 5, y: y + 3, size: 1.5 });
              page.drawText(line, { x: margin + 15, y, size: 10, font });
            } else {
              page.drawText(line, { x: margin + 15, y, size: 10, font });
            }
            y -= 13;
          });
        }
      }
      y -= 5;
    }
    y -= 5;
  }

  // --- EXPERIENCE (職務経歴) ---
  if (data.experience?.length) {
    drawSectionTitle("EXPERIENCE");
    for (const ex of data.experience) {
      checkPageBreak(30);
      if (ex.company) {
        page.drawText(ex.company, { x: margin, y, size: 10, font: fontBold });
        const dates = [ex.startDate, ex.endDate].filter(Boolean).join(" ~ ");
        if (dates) drawRightAligned(dates, 10, font);
        y -= 13;
      }
      const subLine = [ex.title, ex.location].filter(Boolean).join(", ");
      if (subLine) drawTextLine(subLine, { size: 10, font: fontItalic });
      if (ex.bullets) {
        const bullets = ex.bullets.split("\n");
        for (const bullet of bullets) {
          if (!bullet.trim()) continue;
          const clean = bullet.replace(/\*\*/g, "");
          const lines = wrapText(clean, contentWidth - 15, 10, font);
          lines.forEach((line, i) => {
            checkPageBreak();
            if (i === 0) {
              page.drawCircle({ x: margin + 5, y: y + 3, size: 1.5 });
              page.drawText(line, { x: margin + 15, y, size: 10, font });
            } else {
              page.drawText(line, { x: margin + 15, y, size: 10, font });
            }
            y -= 13;
          });
        }
      }
      y -= 6;
    }
  }

  // --- EDUCATION (学歴) ---
  if (data.education?.length) {
    drawSectionTitle("EDUCATION");
    for (const ed of data.education) {
      checkPageBreak(30);
      if (ed.degree) {
        page.drawText(ed.degree, { x: margin, y, size: 10, font: fontBold });
        if (ed.endDate) drawRightAligned(ed.endDate, 10, font);
        y -= 13;
      }
      if (ed.school) drawTextLine(ed.school, { size: 10, font });
      if (ed.location) drawTextLine(ed.location, { size: 10, font: fontItalic });
      y -= 5;
    }
  }

  return await pdfDoc.save();
}

/**
 * 履歴書 (Rirekisho) layout — formal Japanese CV.
 * A4, grid-style with combined Education+Experience chronological table.
 *
 * NOTE: pdf-lib StandardFonts lack CJK glyphs. Labels use English + romaji.
 * For proper Japanese character rendering, use the LaTeX → Overleaf path.
 */
async function generateJpCvPdf(data) {
  const pdfDoc = await PDFDocument.create();
  let page = pdfDoc.addPage([595, 842]); // A4
  const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const fontBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

  const { width, height } = page.getSize();
  let y = height - 45;
  const margin = 45;
  const contentWidth = width - margin * 2;

  const checkPageBreak = (neededSpace = 12) => {
    if (y < margin + neededSpace) {
      page = pdfDoc.addPage([595, 842]);
      y = height - 45;
    }
  };

  const drawText = (text, options = {}) => {
    checkPageBreak();
    page.drawText(text, {
      x: options.x || margin, y,
      size: options.size || 10,
      font: options.font || font,
      color: options.color || rgb(0, 0, 0),
    });
  };

  const drawTextLine = (text, options = {}) => {
    drawText(text, options);
    if (options.moveDown !== false) y -= 13;
  };

  const drawCentered = (text, size, fontToUse) => {
    const tw = fontToUse.widthOfTextAtSize(text, size);
    drawText(text, { x: (width - tw) / 2, size, font: fontToUse });
  };

  const drawRightAligned = (text, size, fontToUse) => {
    const tw = fontToUse.widthOfTextAtSize(text, size);
    page.drawText(text, { x: width - margin - tw, y, size, font: fontToUse });
  };

  const wrapText = (text, maxWidth, size, fontToUse) => {
    const words = text.split(" ");
    const lines = [];
    let cur = words[0] || "";
    for (let i = 1; i < words.length; i++) {
      const w = fontToUse.widthOfTextAtSize(`${cur} ${words[i]}`, size);
      if (w < maxWidth) cur += ` ${words[i]}`;
      else { lines.push(cur); cur = words[i]; }
    }
    lines.push(cur);
    return lines;
  };

  // --- TITLE (Rirekisho header) ---
  const jpDate = new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "short", day: "numeric" });
  drawRightAligned(`${jpDate}`, 8, font);
  y -= 10;

  drawCentered("RIREKISHO", 16, fontBold);
  y -= 18;

  if (data.contact.fullName) {
    drawCentered(data.contact.fullName.toUpperCase(), 14, fontBold);
    y -= 20;
  }

  // horizontal rule
  checkPageBreak();
  page.drawLine({
    start: { x: margin, y: y },
    end: { x: width - margin, y: y },
    thickness: 0.8, color: rgb(0.1, 0.1, 0.1),
  });
  y -= 14;

  // --- PERSONAL INFO TABLE (基本情報) ---
  const tblLabelX = margin;
  const tblValueX = margin + 80;
  const tblRowH = 16;

  const drawTableRow = (label, value) => {
    checkPageBreak(tblRowH + 4);
    page.drawText(label, { x: tblLabelX, y, size: 10, font: fontBold });
    page.drawText(value || "", { x: tblValueX, y, size: 10, font });
    // line separator
    page.drawLine({
      start: { x: margin, y: y - 4 },
      end: { x: width - margin, y: y - 4 },
      thickness: 0.4, color: rgb(0.7, 0.7, 0.7),
    });
    y -= tblRowH;
  };

  drawTableRow("Name (氏名)", data.contact.fullName);
  if (data.contact.location) drawTableRow("Address (現住所)", data.contact.location);
  if (data.contact.phone) drawTableRow("Tel (電話番号)", data.contact.phone);
  if (data.contact.email) drawTableRow("Email (メール)", data.contact.email);
  if (data.contact.website) drawTableRow("Portfolio", data.contact.website);
  if (data.contact.linkedin) drawTableRow("LinkedIn", data.contact.linkedin);
  y -= 10;

  // --- EDUCATION + EXPERIENCE TABLE (学歴・職歴) ---
  const sectionTitle = (title) => {
    checkPageBreak(32);
    y -= 6;
    page.drawText(title, { x: margin, y, size: 12, font: fontBold });
    y -= 3;
    page.drawLine({
      start: { x: margin, y: y },
      end: { x: width - margin, y: y },
      thickness: 0.8, color: rgb(0.1, 0.1, 0.1),
    });
    y -= 12;
  };

  sectionTitle("Gakureki / Shokureki (学歴・職歴)");

  // combined chronological: education first (oldest→newest), then experience (oldest→newest)
  const chronoEntries = [];

  if (data.education?.length) {
    chronoEntries.push({ type: "label", text: "--- EDUCATION (学歴) ---" });
    const sortedEd = [...data.education].sort((a, b) =>
      (a.endDate || "").localeCompare(b.endDate || "")
    );
    for (const ed of sortedEd) {
      const line = [ed.endDate, ed.school, ed.degree].filter(Boolean).join(" | ");
      chronoEntries.push({ type: "ed", text: line, bullets: null });
    }
  }

  if (data.experience?.length) {
    chronoEntries.push({ type: "label", text: "--- EXPERIENCE (職歴) ---" });
    const sortedEx = [...data.experience].sort((a, b) =>
      (a.startDate || "").localeCompare(b.startDate || "")
    );
    for (const ex of sortedEx) {
      const date = [ex.startDate, ex.endDate].filter(Boolean).join(" ~ ");
      const line = [date, ex.company, ex.title].filter(Boolean).join(" | ");
      chronoEntries.push({ type: "ex", text: line, bullets: ex.bullets });
    }
  }

  for (const entry of chronoEntries) {
    checkPageBreak(14);
    if (entry.type === "label") {
      drawTextLine(entry.text, { font: fontItalic, size: 9 });
      y -= 2;
    } else {
      drawTextLine(entry.text, { size: 10, font: fontBold });
      if (entry.bullets) {
        const bullets = entry.bullets.split("\n").map(s => s.replace(/\*\*/g, "").trim()).filter(Boolean);
        for (const b of bullets) {
          const lines = wrapText(b, contentWidth - 15, 9, font);
          lines.forEach((line, i) => {
            checkPageBreak();
            if (i === 0) {
              page.drawCircle({ x: margin + 5, y: y + 3, size: 1.3 });
              page.drawText(line, { x: margin + 15, y, size: 9, font });
            } else {
              page.drawText(line, { x: margin + 15, y, size: 9, font });
            }
            y -= 12;
          });
        }
      }
      y -= 3;
    }
  }
  y -= 8;

  // --- SKILLS (免許・資格 / 技術スキル) ---
  if (data.skills) {
    sectionTitle("Menkyo / Shikaku / Gijutsu Skill (免許・資格 / 技術スキル)");
    const categories = data.skills.split("|").map(s => s.trim()).filter(Boolean);
    for (const cat of categories) {
      const idx = cat.indexOf(":");
      if (idx > 0) {
        const category = cat.substring(0, idx).trim();
        const items = cat.substring(idx + 1).trim();
        checkPageBreak();
        drawTextLine(`${category}:`, { font: fontBold, size: 10, moveDown: false });
        page.drawText(items, { x: margin + fontBold.widthOfTextAtSize(`${category}:`, 10) + 8, y, size: 10, font });
        y -= 13;
      }
    }
    y -= 6;
  }

  // --- PROJECTS (研究・制作実績) ---
  if (data.projects?.length) {
    sectionTitle("Kenkyu / Seisaku Jisseki (研究・制作実績)");
    for (const p of data.projects) {
      if (p.name) drawTextLine(p.name, { size: 10, font: fontBold });
      if (p.description) {
        const bullets = p.description.split("\n").map(s => s.replace(/\*\*/g, "").trim()).filter(Boolean);
        for (const b of bullets) {
          const lines = wrapText(b, contentWidth - 15, 9, font);
          lines.forEach((line, i) => {
            checkPageBreak();
            if (i === 0) {
              page.drawCircle({ x: margin + 5, y: y + 3, size: 1.3 });
              page.drawText(line, { x: margin + 15, y, size: 9, font });
            } else {
              page.drawText(line, { x: margin + 15, y, size: 9, font });
            }
            y -= 12;
          });
        }
      }
      y -= 5;
    }
    y -= 5;
  }

  // --- SELF PR / MOTIVATION (自己PR / 志望動機) ---
  if (data.contact.headline) {
    sectionTitle("Jiko PR / Shibou Douki (自己PR / 志望動機)");
    const lines = wrapText(data.contact.headline, contentWidth, 10, font);
    lines.forEach(line => drawTextLine(line, { size: 10, font }));
  }

  return await pdfDoc.save();
}

app.post("/api/compile", async (req, res) => {
  try {
    const { data, template } = req.body;
    if (!data) return res.status(400).json({ error: "Resume data is required" });
    if (!data.contact) return res.status(400).json({ error: "Invalid resume data" });

    const pdfBytes = await generatePdf(data, template);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=resume.pdf");
    res.send(Buffer.from(pdfBytes));
  } catch (error) {
    res.status(500).json({ error: "PDF generation failed", message: error.message });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {});
