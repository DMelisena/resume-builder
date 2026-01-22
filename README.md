# Resume Builder (React + TypeScript + Chakra UI + pdfmake)

A minimal, ATS-friendly Harvard-style résumé builder.

## Quick Start

```bash
npm install
cd ..
npm run dev
```

## Turn On Backend

```bash
cd backend && npm install && npm Start
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

## TODO:
Make https://dmelisena.github.io/resume-builder/download to directly download the CV
- Maybe create a github action in which pdf is created and put into that link
It should be like web/{user_name}/download to download their cv
It should be like web/{user_name} to modify
It should be like web/UUID if they don't have account (automatically deleted in 7/30 days if unopened)
Create cookies system in which people progress is saved / the uuid
Create a database for people to save their CV to
create a backend for people to give access their CV to
Make so that they can switch in and out on what they want to put on the CV

## User Flow:
open the main site
make their CV
automatically save their progress
make an exportable link that they can modify web/{user_name} (can only be accessed by the user)
make an exportable that they could share and for people to download from web/{user_name}/download
have an option to create an account

