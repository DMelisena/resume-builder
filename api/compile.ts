/**
 * Vercel Serverless Function for LaTeX compilation
 * Handles POST /api/compile
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({ error: 'LaTeX code is required' });
    }

    console.log('Compiling LaTeX...');

    // Use latexonline.cc API
    const encodedCode = encodeURIComponent(code);
    const response = await fetch(
      `https://latexonline.cc/compile?text=${encodedCode}&engine=pdflatex`,
      { method: 'GET' }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('LaTeX compilation error:', errorText);
      return res.status(500).json({
        error: 'LaTeX compilation failed',
        details: errorText,
      });
    }

    // Get PDF as buffer and send it
    const buffer = await response.arrayBuffer();
    const bufferData = Buffer.from(buffer);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');
    res.send(bufferData);

    console.log('PDF compiled successfully');
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
