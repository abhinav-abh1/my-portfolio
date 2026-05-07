// data/portfolio.ts
export const personalInfo = {
  name: "Abhinav A",
  title: "Full Stack Developer",
  subtitle: "MCA Final Year • Building Digital Excellence",
  email: "abhinava818@gmail.com",
  phone: "9961591699",
  location: "Kannur, Kerala",
  github: "https://github.com/abhinav-abh1",
  linkedin: "https://www.linkedin.com/in/abhinav-a-8bb9bb353",
  summary:
    "MCA final-year student crafting elegant, high-performance web applications with modern technologies.",
};

export const skills = {
  "Front-End": ["React.js", "TypeScript", "Tailwind CSS", "Next.js", "JavaScript", "HTML5", "CSS3", "EJS"],
  "Back-End": ["Node.js", "Express.js", "Django", "Flask"],
  Database: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Prisma ORM"],
  "Tools & DevOps": ["Git", "GitHub", "API Integration", "AI Tools", "WhatsApp Cloud API"],
  Programming: ["Python", "C", "C++", "Java"],
  "System Analysis & Design": [
    "BRD (Business Requirements Document)",
    "SRS (Software Requirements Specification)",
    "ER Diagram",
    "UML diagrams",
  ],
};

export const projects = [
  {
    title: "Style Sync",
    subtitle: "AI Custom Dress Design Platform",
    description:
      "Full-stack platform with AI-generated previews, multi-role workflow (User, Tailor, Agent, Delivery, Admin).",
    tech: ["Node.js", "Express", "PostgreSQL", "EJS", "AI Image Gen", "Multer"],
    highlights: [
      "Realistic AI dress previews before order placement",
      "Complete end-to-end workflow system",
      "Multi-role authentication system",
    ],
    github: "https://github.com/abhinav-abh1/style-sync-custom-dress-design",
    color: "#00f5ff",
  },
  {
    title: "Invoice–PO Comparison",
    subtitle: "Intelligent Document Automation",
    description:
      "Automates comparison between invoices and purchase orders using Gemini API + OCR fallback.",
    tech: ["React", "Vite", "Node.js", "Gemini API", "OCR", "Multer"],
    highlights: [
      "AI-powered document intelligence",
      "Match scoring & validation system",
      "Automated CSV report export",
    ],
    github: "https://github.com/abhinav-abh1/Invoice-po-matcher",
    color: "#7b2fff",
  },
  {
    title: "Syllabus Smart Search",
    subtitle: "AI Academic Semantic Engine",
    description:
      "Helps students find accurate textbook content using semantic search and per-user document management.",
    tech: ["Django", "SQLite", "SentenceTransformers", "Gemini API", "Python"],
    highlights: [
      "Semantic search across uploaded PDFs",
      "Confidence scoring per result",
      "Personal document library per user",
    ],
    github: "https://github.com/abhinav-abh1/syllabus-smart-search",
    color: "#00ff88",
  },
  {
    title: "AI ChatBot",
    subtitle: "Full-Stack Conversational AI System",
    description:
      "Production-ready chatbot with persistent PostgreSQL chat history, OpenRouter AI integration, and a clean React UI — built for scalability and real conversational depth.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "OpenRouter API", "Axios"],
    highlights: [
      "Persistent chat history with timestamped PostgreSQL storage",
      "Multi-model AI support via OpenRouter with safe request pipeline",
      "Modular backend service layer with middleware-based security",
    ],
    github: "https://github.com/abhinav-abh1/ChatBot",
    color: "#ff6b35",
  },
  {
    title: "Restaurant Reservation",
    subtitle: "Table Booking & Pre-Order Platform",
    description:
      "Full-stack Flask system that unifies table reservation and food pre-ordering with QR-based verification, multi-role access, and an analytics dashboard for restaurant operations.",
    tech: ["Flask", "PostgreSQL", "Python", "HTML5", "CSS3", "JavaScript", "QR Code"],
    highlights: [
      "QR code generation and scan-based order verification at venue",
      "Three-role system: Admin, Restaurant, and Customer with distinct workflows",
      "Analytics dashboard tracking peak hours, top dishes, and performance",
    ],
    github: "https://github.com/abhinav-abh1/restaurant-reservation-preorder",
    color: "#f7c59f",
  },
];

export const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "Inker Robotics",
    period: "2026",
    points: [
      "Developed a complete SaaS platform using React (TypeScript), Node.js & Supabase, handling both frontend and backend independently",
      "Built real-time data handling, API development, and WhatsApp Cloud API integrations",
      "Implemented robust backend architecture with Prisma ORM and database management",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "College of Engineering Thalassery",
    location: "Kannur",
    period: "2024 — Present",
    score: 80,
    status: "Currently Pursuing",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "SNG College of Advanced Studies",
    location: "Kannur",
    period: "2021 — 2024",
    score: 76,
    status: "Completed",
  },
];

export const certifications = [
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
  },
  {
    name: "Introduction to Internet of Things",
    issuer: "NPTEL",
    year: "2025",
    badge: "Elite Certificate",
  },
];