/**
 * Vercel Serverless Function for PDF generation
 * Uses pdf-lib - no Docker or external service needed!
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import type { ResumeData } from '../src/types';

async function generatePdf(data: ResumeData): Promise<Uint8Array> {
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

  const drawText = (text: string, options: { x?: number, size?: number, font?: any, color?: any } = {}) => {
    checkPageBreak();
    page.drawText(text, {
      x: options.x || margin,
      y,
      size: options.size || 10,
      font: options.font || font,
      color: options.color || rgb(0, 0, 0),
    });
  };

  const drawCentered = (text: string, size: number, fontToUse: any) => {
    const textWidth = fontToUse.widthOfTextAtSize(text, size);
    drawText(text, { x: (width - textWidth) / 2, size, font: fontToUse });
  };

  const drawRightAligned = (text: string, size: number, fontToUse: any) => {
    // Only check page break if we are not on the same line as a previous drawText
    // But usually this is called after a drawText on the same line? 
    // Actually, in Education/Experience, we print Title (drawText) then Date (drawRightAligned).
    // So we should NOT check page break here usually, or y would be same.
    // However, if we just decremented y...
    
    // In my logic:
    // drawText(...) -> y is NOT decremented inside drawText? 
    // Wait, previous code: y -= lineHeight.
    
    // Let's fix drawText to decrement y explicitly or let caller do it.
    // Previous code: y -= lineHeight inside drawText.
    
    // If I want Title (Left) and Date (Right) on SAME line:
    // I should NOT decrement y in drawText if I plan to draw more on that line.
    
    // But my current drawText decrements y?
    // Let's check previous implementation.
    // `y -= lineHeight` was inside `drawText`.
    
    // This makes it hard to do same-line.
    // I will remove `y -= lineHeight` from `drawText` and handle it manually?
    // Or I'll add `newLine: boolean` option.
    
    // Let's keep it simple: `drawRightAligned` will use the SAME y as the current cursor
    // assuming it was called BEFORE the line break.
    // But `drawText` does the line break.
    
    // I'll modify `drawText` to NOT decrement `y` by default, but let caller handle it?
    // No, that changes too much logic.
    
    // I'll make `drawRightAligned` take a `yOverride`? 
    // Or simpler: `drawRightAligned` just draws at `y`. 
    // BUT `drawText` (called before it) might have moved `y`.
    
    // Let's refactor: `drawText` decreases `y`.
    // So to draw on same line, I must call `drawRightAligned` BEFORE `drawText`?
    // Or call `drawText(..., { moveY: false })`.
    
    // I'll add `moveY` option to `drawText`.
    // Default true.
    
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
  
  // Refined drawText to handle newlines
  const drawTextLine = (text: string, options: { x?: number, size?: number, font?: any, color?: any, moveDown?: boolean } = {}) => {
    checkPageBreak();
    page.drawText(text, {
      x: options.x || margin,
      y,
      size: options.size || 10,
      font: options.font || font,
      color: options.color || rgb(0, 0, 0),
    });
    if (options.moveDown !== false) {
       y -= 12; // Standard line height
    }
  };

  const wrapText = (text: string, maxWidth: number, size: number, fontToUse: any): string[] => {
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
  const drawSectionTitle = (title: string) => {
    checkPageBreak(25); // Ensure title + line stay together
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
      checkPageBreak(30); // Keep block together-ish
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

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { data } = req.body;

    if (!data) {
      return res.status(400).json({ error: 'Resume data is required' });
    }
    
    // Validation
    if (!data.contact) {
       return res.status(400).json({ error: 'Invalid resume data: missing contact' });
    }

    console.log('Generating PDF using pdf-lib...');

    // Generate PDF from resume data
    const pdfBytes = await generatePdf(data as ResumeData);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');
    res.send(Buffer.from(pdfBytes));

    console.log('PDF generated successfully');
  } catch (error) {
    console.error('PDF generation error:', error);
    res.status(500).json({
      error: 'PDF generation failed',
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}