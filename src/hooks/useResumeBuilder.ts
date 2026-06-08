import { useState } from 'react';
import type { ResumeData, PdfConfig, LatexConfig } from '../types';

const defaultResume = {
  contact: {
    fullName: 'Muhammad Arya Hanif',
    headline: 'Engineer with a background in scientific computing and hands-on experience building end-to-end systems, from Web and iOS applications to backend services and ML pipelines. Passionate about applying engineering and machine learning to real-world, data-driven problems.',
    phone: '+6285173342248',
    email: 'aryasenaria@gmail.com',
    location: 'Yogyakarta, Indonesia',
    website: 'portfolio.aryahanif.xyz',
    linkedin: 'linkedin.com/in/arya-hanif/'
  },
  education: [
    {
      school: 'Universitas Gadjah Mada',
      degree: 'Nuclear Engineering',
      startDate: '',
      endDate: 'Jul 2024',
      location: 'Yogyakarta, Indonesia',
      notes: ''
    },
    {
      school: 'Apple Developer Academy @Binus Bali',
      degree: 'ML Engineer',
      startDate: '',
      endDate: 'Dec 2025',
      location: 'Bali, Indonesia',
      notes: ''
    },
    {
      school: 'Apple Institute Jakarta',
      degree: 'ML Engineer',
      startDate: '',
      endDate: 'Aug 2026',
      location: 'Jakarta, Indonesia',
      notes: ''
    }
  ],
  experience: [
    {
      company: 'Radikari',
      title: 'AI System Engineer',
      startDate: 'Mar 2026',
      endDate: 'Mar 2027',
      location: 'Yogyakarta, Indonesia',
      bullets: 'Maintain the development of .'
    },
    {
      company: 'Summon',
      title: 'AI Engineer',
      startDate: 'June 2025',
      endDate: 'Feb 2026',
      location: 'Bali, Indonesia',
      bullets: 'Create the computer vision model for helmet and vest object detection and create the flow for RAG implemented on a knowledge/learning management system.'
    },
    {
      company: 'Dr. Hasan Sadikin Public Hospital',
      title: 'Medical Physics Intern',
      startDate: 'Dec 2022',
      endDate: 'Feb 2023',
      location: 'Bandung, Indonesia',
      bullets: 'Executed supervised patient-specific treatment planning for **linear accelerator** and **teletherapy** for **cancer patients**.\nPerformed **Quality Assurance** & **Quality Control** for **radiodiagnostic**, **radiotherapy** and **nuclear medicine** departments.'
    },
    {
      company: 'Electronics and Instrumentation Lab',
      title: 'Teaching & Lab Assistant',
      startDate: 'Jan 2021',
      endDate: 'Jun 2021',
      location: 'Yogyakarta, Indonesia',
      bullets: '**Initiated curriculum update** for lab learning modules and pre-/post-test assessments for post covid classes.\nMonitored assessments and grading procedures for **100+ students** across department.\nAssisted students with instrumentation tools, sensors, measurement devices, and troubleshooting during practical sessions.'
    }
  ],
  projects: [
    {
      name: 'HR Management System',
      url: 'Radikari Ownwed',
      description: 'Handled the postgresql and python functions in necessary for the systems'
    },
    {
      name: 'Agentic System',
      url: 'Radikari Owned',
      description: 'Whatsapp, Telegram and google workspace integrated systems that utilizes python functions'
    },
    {
      name: 'Sealens',
      url: 'testflight.apple.com/join/Gq3z5Pus',
      description: '**1st place winner** of the **EU-Conexus Innovation Contest 2025**, organized by biomarine technology programs affiliated with **Erasmus**.\nArchitected and implemented an end-to-end ML system spanning **dataset creation**, **video preprocessing**, **object detection**, **feature extraction**, **clustering**, **classification**, and **re-identification** and **object tracking** accessed through **REST API**s **microservices**.\nDeveloped and benchmarked multiple computer vision models (**YOLOv11/v12)**, **ResNet**, **Vision Transformers**, **Siamese networks** and custom CNNs to support rapid experimentation and iteration.\nBuilt automated **clustering** using **DBSCAN**, **KMeans**, and **PCA** for large-scale visual analysis.\nDesigned a modular MLOps framework using **DVC** to version-control **60k+ images**, raw videos, embeddings, and experiment artifacts, enabling reproducible training and evaluation.\nBuilt a reliable video ingestion pipeline with resumable, chunked uploads (**TUS**), integrity verification, and automated frame extraction using **FFmpeg**.\nDeployed and operated backend services using **Flask** secured via **Cloudflare Tunnel** (production) and **Ngrok** deployed in **Railway**,  (development).'
    },
    {
      name: 'Knowledge/Learning Management System',
      url: 'Summon and Radikari owned',
      description: 'Created the necessary qdrant system from the file ingestion to vector database storing for customer service and KYB service\n'
    },
    {
      name: 'Occupational Safety and Health (OSH) Computer Vision',
      url: 'Summon owned',
      description: '**1st place winner** of the **EU-Conexus Innovation Contest 2025**, organized by biomarine technology programs affiliated with **Erasmus**.\nArchitected and implemented an end-to-end ML system spanning **dataset creation**, **video preprocessing**, **object detection**, **feature extraction**, **clustering**, **classification**, and **re-identification** and **object tracking** accessed through **REST API**s **microservices**.\nDeveloped and benchmarked multiple computer vision models (**YOLOv11/v12)**, **ResNet**, **Vision Transformers**, **Siamese networks** and custom CNNs to support rapid experimentation and iteration.\nBuilt automated **clustering** using **DBSCAN**, **KMeans**, and **PCA** for large-scale visual analysis.\nDesigned a modular MLOps framework using **DVC** to version-control **60k+ images**, raw videos, embeddings, and experiment artifacts, enabling reproducible training and evaluation.\nBuilt a reliable video ingestion pipeline with resumable, chunked uploads (**TUS**), integrity verification, and automated frame extraction using **FFmpeg**.\nDeployed and operated backend services using **Flask** secured via **Cloudflare Tunnel** (production) and **Ngrok** deployed in **Railway**,  (development).'
    },
    {
      name: 'Particle Transportation Simulation',
      url: 'portfolio.aryahanif.xyz/linac_dose',
      description: 'Developed radiation dose distribution heatmap visualizations to correct misunderstandings in radiotherapy bunker shielding design using **Monte Carlo particle transportation simulation**.\nEstablished a **Linux**-based simulation server accessed via an **SSH** tunnel, secured through **VPN** access to the university network.\nEvaluate the simulation results by doing comparison using **analytical calculations** and **real** radiation **dose measurement** of radiotherapy bunker in **Hasan Sadikin Public Hospital**.'
    },
    {
      name: 'Resume Builder',
      url: 'resume.aryahanif.xyz',
      description: 'Implemented custom **LaTeX-to-PDF** resume maker with **ATS-friendly** document output using **React 18** and **TypeScript**, serving users with split-screen real-time editing and PDF preview\nEngineered **Express.js** backend with **RESTful API** proxy for secure LaTeX compilation, including CORS configuration and production deployment on **Vercel**'
    },
    {
      name: 'Odin Projects',
      url: 'portfolio.aryahanif.xyz',
      description: 'Created **vanilla html** and **css** projects to deepen understand the fundamental styling layer behind web framework.\ncreated different projects spanning from Etch a Sketch, Tic Tac Toe, Library, and Admin Dashboard Layout.'
    }
  ],
  skills: 'Programming: Python, Swift, SwiftUI, Git, Shell | DataScience: PyTorch, OpenCV, NumPy, Pandas, Scikit-Learn, SciPy | Ops: Linux, Docker, Railway, Flask, vercel, npm, pip, ngrok, cloudflare | Web: ChakraUI'
};

const defaultPdfConfig: PdfConfig = {
  fontSize: 10.5,
  template: "english",
  asLinks: {
    email: true,
    linkedin: true,
    website: true
  }
};

const defaultLatexConfig: LatexConfig = {
  template: "english",
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
    console.log("Starting compilation...");
    console.log("Form data:", form);
    setIsCompiling(true);
    // snapshot form to compiled
    await new Promise((resolve) => setTimeout(resolve, 500));
    const snapshot = JSON.parse(JSON.stringify(form));
    console.log("Snapshot created:", snapshot);
    setCompiled(snapshot);
    setIsCompiling(false);
    console.log("Compilation complete. Compiled state updated.");
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
