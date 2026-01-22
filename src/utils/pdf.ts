import type { ResumeData, PdfConfig } from "../types";
import { buildLatex } from "./latex";

function sanitizeFilename(name: string) {
  return name.replace(/[^a-z0-9\u00C0-\u024F\s._-]+/gi, "_").trim() || "resume";
}

/**
 * Compile LaTeX source to PDF using backend proxy
 */
async function compileLatexToPdf(latexCode: string): Promise<Blob> {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

  const response = await fetch(`${BACKEND_URL}/api/compile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code: latexCode,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`LaTeX compilation failed: ${errorText}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  return new Blob([arrayBuffer], { type: "application/pdf" });
}

/**
 * Generate PDF from resume data using LaTeX compilation
 * @param data - Resume data
 * @param cfg - PDF/LaTeX configuration
 * @returns PDF blob and filename
 */
export async function generatePdf(data: ResumeData | null, cfg: PdfConfig) {
  if (!data) throw new Error("No compiled snapshot found.");

  // Generate LaTeX source
  const latexCode = buildLatex(data, cfg);

  // Compile LaTeX to PDF
  const blob = await compileLatexToPdf(latexCode);

  const filename =
    sanitizeFilename((data.contact.fullName || "resume") + "_CV") + ".pdf";

  return { blob, filename };
}

/**
 * Trigger browser download of PDF blob
 */
export function downloadPdf(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
