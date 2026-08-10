// data/portfolio.ts
export const personalInfo = {
  name: "Abhinav A",
  title: "Machine Learning Engineer & Full Stack Developer",
  subtitle: "MCA Final Year • Building Intelligent AI & Scalable Software Solutions",
  email: "abhinava818@gmail.com",
  phone: "9961591699",
  location: "Kannur, Kerala",
  github: "https://github.com/abhinav-abh1",
  linkedin: "https://www.linkedin.com/in/abhinav-a-8bb9bb353",
  summary:
    "MCA Final Year student specializing in Machine Learning, Artificial Intelligence, and Full Stack Development. Passionate about building production-ready AI applications, scalable backend systems, and intelligent software solutions using Python, FastAPI, TensorFlow, React, and Node.js.",
};

export const skills = {
  "Programming Languages": [
    "Python",
    "JavaScript",
    "TypeScript",
    "C",
    "C++",
    "Java",
  ],

  "Machine Learning & AI": [
    "Scikit-learn",
    "TensorFlow",
    "Keras",
    "XGBoost",
    "Random Forest",
    "Neural Networks",
    "Feature Engineering",
    "Model Evaluation",
    "Cross Validation",
    "Supervised Learning",
    "Unsupervised Learning",
    "Reinforcement Learning",
  ],

  "Data Science": [
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Data Preprocessing",
    "Data Visualization",
  ],

  "Backend Development": [
    "FastAPI",
    "Flask",
    "Django",
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT Authentication",
  ],

  "Frontend Development": [
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Next.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "EJS",
  ],

  Databases: [
    "PostgreSQL",
    "Supabase",
    "MySQL",
    "MongoDB",
    "Prisma ORM",
  ],

  "Tools & Technologies": [
    "Git",
    "GitHub",
    "Postman",
    "VS Code",
    "Jupyter Notebook",
    "WhatsApp Cloud API",
    "AI APIs",
  ],

  "System Design": [
    "Software Development Life Cycle",
    "Agile Methodology",
    "Business Requirement Document (BRD)",
    "Software Requirement Specification (SRS)",
    "ER Diagram",
    "UML Diagrams",
    "API Integration",
  ],
};

export const projects = [
  {
    title: "Federated Credit Card Default Prediction",
    subtitle: "Production-Style Machine Learning System",
    description:
      "Privacy-preserving federated learning system that predicts credit card default risk across multiple simulated bank branches without sharing raw customer data.",
    tech: [
      "Python",
      "FastAPI",
      "Scikit-learn",
      "TensorFlow",
      "XGBoost",
      "PostgreSQL",
    ],
    highlights: [
      "Federated Learning with multi-branch model aggregation",
      "Ensemble models achieving ~0.78 ROC-AUC",
      "FastAPI prediction APIs with role-based authentication",
    ],
    github: "https://github.com/abhinav-abh1/federated-credit-default",
    color: "#00e5ff",
  },

  {
    title: "Multi-Tenant WhatsApp Ticket Booking SaaS",
    subtitle: "Cloud-Based Event Management Platform",
    description:
      "Multi-tenant SaaS platform for WhatsApp-based ticket booking with QR ticketing, secure payments, and role-based management.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Supabase",
      "Prisma ORM",
      "WhatsApp Cloud API",
    ],
    highlights: [
      "WhatsApp-based ticket booking workflow",
      "QR ticket generation & validation",
      "Multi-tenant architecture with secure payments",
    ],
    github: "YOUR_GITHUB_LINK",
    color: "#00f5ff",
  },

  {
    title: "Invoice–PO Comparison Automation",
    subtitle: "AI-Powered Intelligent Document Processing",
    description:
      "Automates invoice and purchase order comparison using OCR and AI to reduce manual verification and improve document accuracy.",
    tech: [
      "React",
      "Node.js",
      "OCR",
      "Gemini API",
      "PostgreSQL",
    ],
    highlights: [
      "OCR-based text extraction",
      "AI-powered document validation",
      "Automated report generation",
    ],
    github: "https://github.com/abhinav-abh1/Invoice-po-matcher",
    color: "#7b2fff",
  },

  {
    title: "Style Sync",
    subtitle: "AI-Powered Fashion Design Platform",
    description:
      "Full-stack platform enabling users to customize clothing with AI-generated previews and complete order workflow management.",
    tech: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "AI Image Generation",
      "Multer",
    ],
    highlights: [
      "AI-generated clothing previews",
      "Multi-role workflow management",
      "Secure authentication system",
    ],
    github: "https://github.com/abhinav-abh1/style-sync-custom-dress-design",
    color: "#00ff88",
  },

  {
    title: "Syllabus Smart Search",
    subtitle: "AI Semantic Search Engine",
    description:
      "Semantic search platform that helps students retrieve textbook content using transformer embeddings and intelligent document indexing.",
    tech: [
      "Python",
      "Django",
      "Sentence Transformers",
      "Gemini API",
    ],
    highlights: [
      "Semantic PDF search",
      "Confidence-based ranking",
      "Per-user document management",
    ],
    github: "https://github.com/abhinav-abh1/syllabus-smart-search",
    color: "#ff9f1c",
  },
];

export const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "Inker Robotics Pvt. Ltd.",
    period: "Feb 2026 – May 2026",
    points: [
      "Designed and developed a production-ready multi-tenant SaaS platform using React, TypeScript, Node.js, Supabase, and Prisma ORM.",
      "Built scalable REST APIs, secure authentication, database architecture, and integrated WhatsApp Cloud API for real-time business workflows.",
      "Collaborated in Agile development, contributing to system design, technical documentation (BRD/SRS), testing, and deployment.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Cochin University of Science and Technology",
    location: "Kochi",
    period: "2024 — 2026",
    score: 82,
    status: "Completed",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Kannur University",
    location: "Kannur",
    period: "2021 — 2024",
    score: 76,
    status: "Completed",
  },
];

export const certifications = [
  {
    name: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford University",
    instructor: "Andrew Ng",
    year: "2026",
    badge: "Coursera Specialization",
  },

  {
    name: "Python Data Structures & Algorithms + LeetCode Exercises",
    issuer: "Udemy",
    instructor: "Scott Barrett",
    year: "2026",
    badge: "Certificate of Completion",
  },

  {
    name: "JavaScript Algorithms and Data Structures Masterclass",
    issuer: "Udemy",
    year: "2026",
    badge: "Masterclass",
  },

  {
    name: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    year: "2025",
    badge: "Certificate of Completion",
  },

  {
    name: "Introduction to Internet of Things",
    issuer: "NPTEL",
    year: "2025",
    badge: "Elite Certificate",
  },
];