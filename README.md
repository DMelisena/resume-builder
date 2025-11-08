# Resume Builder (React + TypeScript + Chakra UI + pdfmake)

A minimal, ATS-friendly Harvard-style résumé builder.

## Quick Start

```bash
npm install
npm run dev
```

- **Compile** updates the preview with the current form (not automatic).
- **Download** downloads a PDF generated with **pdfmake**.
- **Generate Shareable Link** creates a temporary link to the generated PDF that can be shared.

## Features

- **ATS-Friendly**: Generates a clean, text-based PDF that can be easily parsed by Applicant Tracking Systems.
- **Live Preview**: See your changes in real-time as you type.
- **PDF Generation**: Export your resume as a PDF using **pdfmake**.
- **Shareable Links**: Generate a temporary link to your resume to share with others.
- **Customization**: Adjust the font size and toggle hyperlinks for email, LinkedIn, and your portfolio.
- **Multi-language**: Supports English and Spanish.

## Tech
- React + TypeScript
- Chakra UI (light theme)
- pdfmake for PDF
- i18next (English/Spanish)

Project layout:
```
src/
 ├── components/
 ├── hooks/
 ├── pages/
 ├── utils/
 ├── locales/
 └── App.tsx
```

## Notes
- PDF export uses the **last compiled snapshot** to ensure reproducibility.
- The "Generate Shareable Link" feature creates a temporary blob URL that is valid for the current session.
- The UI is designed to be clean and intuitive, with a focus on user experience.
- Code is modular to allow future AI/ATS integrations.
