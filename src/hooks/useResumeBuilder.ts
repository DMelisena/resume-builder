import { useState } from 'react';
import type { ResumeData, PdfConfig } from '../types';

const defaultResume = {
  contact: {
    fullName: 'Muhammad Arya Hanif',
    headline: 'iOS Developer',
    phone: '+6285173342248',
    email: 'aryasenaria@gmail.com',
    location: 'Yogyakarta, Indonesia',
    website: 'dmelisena.github.io/Homepage-Beta',
    linkedin: 'linkedin.com/in/arya-hanif/'
  },
  education: [
    {
      school: 'Universitas Gadjah Mada',
      degree: 'Nuclear Engineering',
      startDate: '2019',
      endDate: '2024',
      location: 'Yogyakarta, Indonesia'
    },
    {
      school: 'Apple Developer Academy @Binus Bali',
      degree: 'iOS Developer',
      startDate: '2025',
      endDate: '2025',
      location: 'Bali, Indonesia'
    }
  ],
  experience: [
    {
      company: 'Alumni Office UGM',
      title: 'Staff',
      startDate: '04/2023',
      endDate: '08/2023',
      location: 'Yogyakarta',
      bullets: 'Worked as helper on career class events and FGD training.\n\
      Main committee member of biggest job fair in UGM'
    },
    {
      company: 'RSUP Dr. Hasan Sadikin',
      title: 'Medical Physicist Intern',
      startDate: '12/2022',
      endDate: '02/2023',
      location: 'Bandung',
      bullets: 'Performed patient specific treatment planning and QA/QC for radiodiagnostic, radiotherapy and nuclear medicine.' 
      // bullets: 'Helped with SPECT installation',
      // bullets: 'Radiation dose survey surrounding nuclear medicine facility',
      // bullets: 'Calculation on radiation dose surrounding radiotherapy facility',
    },
    {
      company: 'Electronics and Instrumentation Lab',
      title: 'Lab Assistant',
      startDate: '01/2021',
      endDate: '06/2021',
      location: 'Yogyakarta',
      bullets: 'Responsible for updating modules and adapting it with Post COVID'
    }
  ],
  projects: [
    {
      name: 'Monte Carlo Particle Transportation Simulation',
      url: 'bit.ly/NPMAryaH',
      description: 'Comparing radiation dose between simulation, analytic calculation and real measurement.'
    },
    {
      name: 'Sealens',
      url: 'github.com/DMelisena/sealens_mlops',
      description: 'Utilizing machine learning to count and identify fish species\n\
      Pipelining Object Detection,image classification and Re-identification model\n\
      Held model performance monitoring using MLflow and DVC'
    }
  ],
  skills:
    'Particle Transportation Code than a year.)\n' +
    'Linux (More than 3 years experience on using it as personal computer. Used on reading documentation and forum to fix any manifested bugs.)\n' +
    'Python & Data Science (Used python exhaustively as an OpenMC particle transportation code API for my thesis and is comfortable using it for data processing and visualization.)\n' +
    'Web Development (Created several simple amateur projects.)\n' +
    'Courseworks and Journal Documents'
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
