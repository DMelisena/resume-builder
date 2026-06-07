import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: "5mb" }));

const distPath = path.join(__dirname, "../dist");
app.use(express.static(distPath));

async function generatePdf(data) {
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

app.post("/api/compile", async (req, res) => {
  try {
    const { data } = req.body;
    if (!data) return res.status(400).json({ error: "Resume data is required" });
    if (!data.contact) return res.status(400).json({ error: "Invalid resume data" });

    console.log("Generating PDF using pdf-lib...");
    const pdfBytes = await generatePdf(data);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=resume.pdf");
    res.send(Buffer.from(pdfBytes));
  } catch (error) {
    console.error("PDF generation error:", error);
    res.status(500).json({ error: "PDF generation failed", message: error.message });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
