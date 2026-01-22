import { useState } from 'react';
import type { ResumeData, PdfConfig, LatexConfig } from '../types';

const defaultResume = {
  contact: {
    fullName: 'Muhammad Arya Hanif',
    headline: 'Motivated, detail-oriented engineer with a strong passion for learning, experimenting, and solving complex problems. I enjoy building practical solutions from scratch, exploring new technologies, and improving systems with structured, data-driven thinking. Experienced on using python for particle simulations for nuclear health application and ML pipeline for video based fish identification application. I have been daily driving unix based operating system for four years. I am proficient with advanced Git workflows including interactive rebasing, custom patch creation and clean version control.',
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
      startDate: 'Jul 2025',
      endDate: '',
      location: 'Yogyakarta, Indonesia',
      notes: 'Graduation Date: Jul 2025'
    },
    {
      school: 'Apple Developer Academy @Binus Bali',
      degree: 'iOS Developer',
      startDate: 'Dec 2025',
      endDate: '',
      location: 'Bali, Indonesia',
      notes: 'Graduation Date: Dec 2025'
    }
  ],
  experience: [
    {
      company: 'Dr. Hasan Sadikin Public Hospital',
      title: 'Medical Physics Intern',
      startDate: 'Dec 2022',
      endDate: 'Feb 2023',
      location: 'Bandung, Indonesia',
      bullets: 'Executed supervised patient-specific treatment planning on linear accelerator and teletherapy.\nPerformed patient specific treatment planning and Quality Assurance & Quality Control for radiodiagnostic, radiotherapy and nuclear medicine departments.'
    },
    {
      company: 'Electronics and Instrumentation Lab',
      title: 'Teaching & Lab Assistant',
      startDate: 'Jan 2021',
      endDate: 'Jun 2021',
      location: 'Yogyakarta, Indonesia',
      bullets: 'Initiated curriculum update for lab learning modules and pre-/post-test assessments for post covid classes.\nMonitored assessments and grading procedures for 100+ students across department.\nAssisted students with instrumentation tools, sensors, measurement devices, and troubleshooting during practical sessions.'
    }
  ],
  projects: [
    {
      name: 'Sealens',
      title: 'AI Engineer',
      startDate: 'Jul 2025',
      endDate: 'Present',
      location: 'Bali, Indonesia',
      url: 'github.com/DMelisena/sealens_mlops',
      description: 'Held an in depth research regarding possible solution concept that could help coral restoration communities.\nConduct technical feasibilities and CI for iOS development.\nDesigned and implemented a comprehensive end-to-end ML pipeline covering dataset creation, video preprocessing, object detection, deep feature extraction, clustering, classification, re-identification, quantitative evaluation, and deployment-ready inference flows.\nBuilt a modular and scalable MLOps framework leveraging DVC to version-control 60k+ images, raw videos, cleaned datasets, model checkpoints, embeddings, and experiment artifacts, ensuring full reproducibility across the machine learning lifecycle.\nDeveloped and benchmarked multiple object detection and classification models—including YOLOv11/v12, ResNet, Vision Transformers, Siamese networks, and custom CNN architectures—to support experimentation and continuous model improvement.\nCreated an automated cluster analysis system using DBSCAN, KMeans, and PCA to cluster the cropped images.'
    },
    {
      name: 'Monte Carlo Particle Transportation Simulation',
      title: 'Project Owner',
      startDate: 'Jun 2023',
      endDate: 'Jul 2024',
      location: 'Bandung, Indonesia',
      url: 'bit.ly/NPMAryaH',
      description: 'Developed radiation dose distribution heatmap visualizations to correct misunderstandings in radiotherapy shielding design.\nCompared radiation dose between simulation, analytic calculation and real measurement of bunker in Hasan Sadikin Public Hospital.'
    }
  ],
  skills: 'Programming: Python, Swift, SwiftUI, Git, Shell Script | DataScience: PyTorch, OpenCV, NumPy, Pandas, Scikit-Learn, SciPy | Ops: Linux, Docker, Railway, Flask, npm, ngrok'
};

const defaultPdfConfig: PdfConfig = {
  fontSize: 10.5,
  asLinks: {
    email: true,
    linkedin: true,
    website: true
  }
};

const defaultLatexConfig: LatexConfig = {
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
  const [latexConfig, setLatexConfig] = useState<LatexConfig>(defaultLatexConfig);
  const [isCompiling, setIsCompiling] = useState(false);
  const [isLatexEditorOpen, setIsLatexEditorOpen] = useState(false);

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
    latexConfig, setLatexConfig,
    isLatexEditorOpen, setIsLatexEditorOpen,
  };
}
