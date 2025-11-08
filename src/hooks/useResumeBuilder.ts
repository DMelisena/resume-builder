import { useState } from 'react';
import type { ResumeData, PdfConfig } from '../types';

const defaultResume: ResumeData = {
  contact: {
    fullName: 'Muhammad Arya Hanif',
    headline: 'ML iOS Developer',
    phone: '+62 851 7334 2248',
    email: 'aryasenaria@gmail.com',
    location: 'Bali, Indonesia',
    website: 'https://dmelisena.github.io/Homepage-Beta/',
    linkedin: 'https://www.linkedin.com/in/arya-hanif/'
  },
  education: [
    { school: 'Universitas Gadjah Mada', degree: 'S.T. Nuclear Engineering', startDate: '2019', endDate: '2024',location: 'Yogyakarta, Indonesia'},
    { school: 'Apple Developer Academy', startDate: '2025', endDate: '2025', location: 'Bali, Indonesia' },
  ],
  experience: [
    { company: 'Kantor Alumni', title: 'Staff', startDate: 'April 2024', endDate: 'July 2024', location: 'Yogyakarta', bullets: 'Create a system of taxation of more than half a billion IDR purchase'},
    { company: 'RSUP Hasan Sadikin', title: 'Medical Phycisist Intern', startDate: 'Dec 2022', endDate: 'Feb 2023', location: 'Bandung', bullets: '' },
    { company: 'Electronics and Instrumentaion Lab', title: 'Lab Assistant', startDate: 'Jun 2024', endDate: 'June 2025', location: 'Yogyakarta', bullets: '' },
  ],
  projects: [
    { name: 'Radiotherapy Bunker Dose Calculation', url: 'https://github.com/DMelisena/LINAC_Dose', description: 'Code that I use for my undergraduate thesis. It will compare the dose on a Linear Accelerator Bunker using analytical method and Monte Carlo Particle Simulation'},
    { name: 'Sealens', url: 'APP STORE?', description: 'Code that I use for my undergraduate thesis. It will compare the dose on a Linear Accelerator Bunker using analytical method and Monte Carlo Particle Simulation'},
  ],
  skills: 
  'Python, Swift, JavaScript, Lua (basic)\n\
  Pytorch, DVC, MLflow\n\
  OpenCV, FFMPEG, numpy, seaborn, matplotlib, Scikit\n\
  github action, tuist\n\
  CBL Framework, Airtable, Confluence'
};

const defaultPdfConfig: PdfConfig = {
  fontSize: 10.5,
  asLinks: {
    email: true,
    linkedin: true,
    website: true
  }
};

export function useResumeBuilder() {
  const [form, setForm] = useState<ResumeData>(defaultResume);
  const [compiled, setCompiled] = useState<ResumeData | null>(defaultResume);
  const [config, setConfig] = useState<PdfConfig>(defaultPdfConfig);
  const [isCompiling, setIsCompiling] = useState(false);

  const compile = async () => {
    setIsCompiling(true);
    // snapshot form to compiled
    await new Promise((resolve) => setTimeout(resolve, 500));
    setCompiled(JSON.parse(JSON.stringify(form)));
    setIsCompiling(false);
  };

  return {
    form, setForm,
    compiled,
    compile,
    isCompiling,
    config, setConfig,
  };
}
