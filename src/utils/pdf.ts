import type { ResumeData, PdfConfig } from "../types";
import { buildLatex } from "./latex";

function sanitizeFilename(name: string) {
  return name.replace(/[^a-z0-9\u00C0-\u024F\s._-]+/gi, "_").trim() || "resume";
}

export async function generatePdf(data: ResumeData | null, cfg: PdfConfig) {
  if (!data) throw new Error("No compiled snapshot found.");

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

  const response = await fetch(`${BACKEND_URL}/api/compile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`PDF generation failed: ${errorText}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  const blob = new Blob([arrayBuffer], { type: "application/pdf" });

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
