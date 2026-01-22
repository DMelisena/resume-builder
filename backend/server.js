import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174", "http://localhost:3000", "http://127.0.0.1:5173"],
  credentials: true,
}));
app.use(express.json({ limit: "5mb" }));

/**
 * POST /api/compile
 * Compiles LaTeX source code to PDF
 * Body: { code: string }
 * Returns: PDF as binary stream
 */
app.post("/api/compile", async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({ error: "LaTeX code is required" });
    }

    console.log("Compiling LaTeX...");

    // Use latexonline.cc API with correct format
    // The API expects: GET https://latexonline.cc/compile?text=...&engine=pdflatex
    const encodedCode = encodeURIComponent(code);
    const response = await fetch(
      `https://latexonline.cc/compile?text=${encodedCode}&engine=pdflatex`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("LaTeX compilation error:", errorText);
      return res.status(500).json({
        error: "LaTeX compilation failed",
        details: errorText,
      });
    }

    // Get PDF as buffer and send it
    const buffer = await response.arrayBuffer();
    const bufferData = Buffer.from(buffer);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=resume.pdf");
    res.send(bufferData);

    console.log("PDF compiled successfully");
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Internal server error", message: error.message });
  }
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`LaTeX compilation server running on http://localhost:${PORT}`);
});
