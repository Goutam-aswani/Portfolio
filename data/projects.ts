export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  features: string[];
  tech: string[];
  year: number;
  links?: {
    github?: string;
    live?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "documentor",
    title: "DocuMentor - Ask More, Search Less",
    summary: "Secure RAG chatbot with LangChain, Gemini API and ChromaDB",
    description: "Full-stack AI application with secure, scalable architecture featuring FastAPI backend and React frontend. Implements advanced RAG pipeline with ChromaDB for real-time document querying and JWT/OTP email verification.",
    features: [
      "Advanced RAG Pipeline with ChromaDB for document-based Q&A",
      "Dual-mode conversational AI (general chat + document-specific queries)",
      "Token-based security with JWT and OTP email verification",
      "Real-time streaming responses",
      "Session-based document management"
    ],
    tech: ["Python", "FastAPI", "LangChain", "Gemini API", "RAG", "ChromaDB", "SQLite", "React", "JavaScript", "Tailwind CSS"],
    year: 2025
  },
  {
    slug: "job-automation",
    title: "Job Search & Cold Email Automation",
    summary: "End-to-end job application pipeline with AI-powered outreach",
    description: "Comprehensive automation system using n8n that scrapes job listings from LinkedIn, Naukri, and Indeed, finds company contacts, and generates personalized outreach emails with AI.",
    features: [
      "Multi-platform job scraping (LinkedIn, Naukri, Indeed) via Apify",
      "Automated company website discovery and email extraction",
      "AI-powered email personalization with Google Gemini",
      "Google Sheets ATS integration for tracking",
      "Batched Gmail SMTP with rate limiting and retry logic"
    ],
    tech: ["n8n", "Apify", "Google Gemini", "Gmail SMTP", "Google Sheets", "HTTP APIs", "Python", "FastAPI", "Docker"],
    year: 2025
  },
  {
    slug: "slidetalk-ai",
    title: "SlideTalk AI - Automated Presentation-to-Video Converter",
    summary: "Convert PowerPoint presentations into narrated MP4 videos",
    description: "Full-stack web application that converts PowerPoint files into fully narrated video presentations with AI-generated scripts and text-to-speech narration.",
    features: [
      "AI-powered script generation analyzing slide visuals and notes",
      "High-fidelity slide conversion preserving complex formatting",
      "Text-to-speech narration with gTTS",
      "Interactive carousel preview with real-time Q&A",
      "MP4 export with synced audio-visual output"
    ],
    tech: ["Python", "FastAPI", "LangChain", "Google Gemini", "gTTS", "MoviePy", "pywin32", "React", "Vite", "Tailwind CSS"],
    year: 2025
  },
  {
    slug: "pdf-to-html",
    title: "PDF-to-HTML Intelligent Converter",
    summary: "Two-stage AI pipeline converting PDFs into responsive HTML",
    description: "Sophisticated conversion pipeline that transforms PDF content into structured Markdown using LLMs, then generates responsive HTML with embedded CSS styling.",
    features: [
      "Hybrid PDF parsing (PyMuPDF + pdfplumber for tables)",
      "Multi-LLM support (Gemini, Groq, OpenAI)",
      "Robust image extraction with Poppler fallback",
      "Responsive mobile-first HTML output",
      "Drag-and-drop file upload interface"
    ],
    tech: ["Python", "FastAPI", "LangChain", "PyMuPDF", "pdfplumber", "Google Gemini", "Groq", "OpenAI", "JavaScript", "CSS"],
    year: 2025
  },
  {
    slug: "html-to-pdf",
    title: "HTML-to-PDF Advanced Converter Service",
    summary: "High-performance PDF generation with browser pool management",
    description: "Production-ready web service with asynchronous PDF generation using headless Chromium via Playwright, featuring browser pool optimization and comprehensive customization.",
    features: [
      "Asynchronous PDF generation with browser pooling",
      "Advanced customization (page format, orientation, margins, headers/footers)",
      "Resource optimization with memory management",
      "LangChain document processing integration",
      "Docker containerization with health checks"
    ],
    tech: ["Python", "FastAPI", "Playwright", "Docker", "Jinja2", "LangChain", "Pytest", "Uvicorn"],
    year: 2025
  },
  {
    slug: "ims",
    title: "Intern Management System (IMS)",
    summary: "Role-based intern management platform with task tracking",
    description: "Comprehensive platform with distinct roles (Admin, Manager, Intern) featuring project creation, task assignment, progress monitoring, and automated reporting.",
    features: [
      "Role-based access control (Admin, Manager, Intern)",
      "Project and task assignment workflow",
      "Daily work reports with automated weekly Excel generation",
      "JWT authentication with OTP email verification",
      "Asynchronous operations with Celery + Redis"
    ],
    tech: ["Django 5.2.3", "Python 3.13", "Django REST Framework", "JWT", "Celery", "Redis", "PostgreSQL", "Docker", "Gunicorn"],
    year: 2025
  },
  {
    slug: "monument-detection",
    title: "Indian Monument Detection",
    summary: "Deep learning classifier for 24 Indian monuments",
    description: "Pre-trained Keras model integrated with OpenCV to identify and classify Indian monuments including Taj Mahal, Qutub Minar, and Ajanta Caves with 78.8% accuracy.",
    features: [
      "24-monument classification capability",
      "Automated image preprocessing (resize, normalization)",
      "Real-time monument identification",
      "78.8% prediction confidence"
    ],
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Jupyter Notebook"],
    year: 2025
  },
  {
    slug: "nutriguide",
    title: "NutriGuide - Smart Nutrition Analyzer",
    summary: "Real-time barcode scanning and AI-powered health scoring",
    description: "OpenCV-based barcode scanner with machine learning model to analyze nutritional content and provide health scores with healthier product recommendations.",
    features: [
      "Real-time barcode scanning with image recognition",
      "AI-powered health scoring (1-5 scale)",
      "Intelligent product recommendation system",
      "Point-of-purchase decision support"
    ],
    tech: ["Python", "OpenCV", "Machine Learning", "Image Recognition", "Barcode Scanning"],
    year: 2024
  }
];
