export const portfolioData = {
  personal: {
    name: "Ayush Kumar",
    headline: "Aspiring Software Developer | C++ | JavaScript | Frontend Development | AI Enthusiast",
    greeting: "Hi, I'm Ayush Kumar 👋",
    mainHeading: "Aspiring Software Developer Building Real-World Digital Solutions",
    description: "I'm a Computer Science & Engineering student passionate about software development, frontend technologies, artificial intelligence and building practical solutions through technology.",
    profileImage: "/assets/ayush-profile.jpg",
    github: "https://github.com/ayush77177panjiyar-star",
    linkedin: "https://www.linkedin.com/in/ayush-kumar-paniyar/",
    email: "ayush.panjiyar.dev@gmail.com",
    location: "Panipat, Haryana, India"
  },
  
  about: {
    university: "Geeta University, Panipat",
    degree: "B.Tech – Computer Science & Engineering",
    bio: "I am a dedicated B.Tech CSE student at Geeta University with a passion for transforming ideas into production-ready software solutions. My core focus spans software engineering, frontend web architecture, artificial intelligence applications, and active participation in competitive hackathons.",
    interests: [
      "Software Development",
      "Frontend Development",
      "Artificial Intelligence",
      "Web Technologies",
      "Hackathons & Innovation",
      "Building Real-World Projects",
      "Continuous Learning"
    ],
    strengths: [
      {
        title: "Problem Solving",
        desc: "Structured algorithmic thinking and efficient debugging in C++ & JavaScript.",
        icon: "Brain"
      },
      {
        title: "Communication",
        desc: "Articulate presentation of technical ideas, code architecture, and team pitches.",
        icon: "MessageSquare"
      },
      {
        title: "Leadership & Teamwork",
        desc: "Coordinating hackathon teams, organizing tasks, and fostering seamless collaboration.",
        icon: "Users"
      },
      {
        title: "Management",
        desc: "Project timeline planning, git workflow management, and feature execution.",
        icon: "Target"
      }
    ]
  },

  achievements: [
    {
      id: "hackforge-2026",
      title: "Top 15 — HackForge 2.0",
      badge: "Top 15 Team",
      organization: "Geeta University",
      description: "Achieved a Top 15 position in HackForge 2.0 through project development, rapid prototyping, and high-impact stage team presentation.",
      images: [
        { url: "/assets/hackforge-stage.png", caption: "Ayush presenting project analytics on stage during HackForge 2.0 auditorium pitching round." },
        { url: "/assets/team-photo.jpg", caption: "Ayush Kumar and team members during the HackForge 2.0 hackathon event." }
      ],
      highlights: ["Auditorium Stage Presentation", "Project Development", "Team Collaboration"]
    },
    {
      id: "oosc-4",
      title: "OOSC 4.0 Hackathon — IIIT Allahabad",
      badge: "Elimination Round 1 Qualified Project",
      organization: "IIIT Allahabad",
      description: "Developed Civil AI, an AI-powered statutory legal and civic co-pilot for Indian citizens, built specifically for the first elimination round of OOSC 4.0 conducted by IIIT Allahabad.",
      github: "https://github.com/ayush77177panjiyar-star/Civil_AI",
      liveDemo: "https://civil-ai-rax3.onrender.com/",
      highlights: ["First Elimination Round Project", "Gemini 2.5 AI Integration", "RTI & Statutory Guidance"]
    }
  ],

  featuredProject: {
    id: "civil-ai",
    name: "Civil_AI",
    subtitle: "AI-Powered Civic & Statutory Legal Assistance Platform for Indian Citizens",
    github: "https://github.com/ayush77177panjiyar-star/Civil_AI",
    liveDemo: "https://civil-ai-rax3.onrender.com/",
    hackathonBadge: "OOSC 4.0 — IIIT Allahabad",
    statusBadge: "First Elimination Round Project",
    problemStatement: "In India, navigating public administration, municipal services, and legal rights presents high friction for everyday citizens due to complex statutory jargon, unknown 3-tier escalation pathways, tedious RTI drafting formats, and fragmented government schemes.",
    solution: "Civil_AI bridges this gap by providing an intelligent plain-language civic co-pilot powered by Google Gemini 2.5 Flash, enabling citizens to parse bureaucratic documents, draft legally compliant RTI petitions under Section 6(1), navigate statutory escalation ladders, and evaluate scheme eligibility.",
    keyFeatures: [
      {
        title: "Open Bureaucratic Document Interpreter & Ask AI",
        desc: "Accepts uploaded text or notices, extracts issuing authorities, reference numbers, compliance deadlines, and supports direct follow-up document Q&A."
      },
      {
        title: "RTI Drafting Agent (Section 6(1) RTI Act 2005)",
        desc: "Prompts for targeted details and generates structured, legally compliant RTI petitions complete with Public Information Officer (PIO) address blocks and fee payment instructions."
      },
      {
        title: "Grounded Rights & Escalation Navigator",
        desc: "Outlines a clear 3-tier statutory escalation ladder (Direct Representation → CPGRAMS/NCH 1915 → Statutory Commission/e-Daakhil) and builds evidence checklists."
      },
      {
        title: "Government Scheme Eligibility Evaluator",
        desc: "Matches citizen demographic details (age, income, state, occupation) against verified welfare schemes like PM-JAY, PM-KISAN, and National Scholarship Portal."
      },
      {
        title: "Conversational Form Assistant & AI Legal Drafter",
        desc: "Generates formal representations for Income Certificate requests, Public Grievances, or Consumer Demand Notices with clean PDF export."
      },
      {
        title: "Universal Civic Chat Stream",
        desc: "Real-time streaming civic advice using Gemini 2.5 Flash API endpoint with strict statutory grounding."
      }
    ],
    legalGuiderNote: {
      title: "Legal Guider Ecosystem Component",
      repo: "https://github.com/ayush77177panjiyar-star/Legal_guider",
      description: "Legal Guider represents the underlying full-stack React + TypeScript + Express repository and architectural backend foundation for the Civil AI civic platform."
    },
    techStack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express", "Google Gemini 2.5 Flash API", "Render", "Supabase", "jsPDF"],
    contribution: "Designed and implemented the responsive frontend UI components, AI query prompts, statutory response structures, and backend API routes."
  },

  otherProjects: [
    {
      id: "paper-boat",
      name: "Paper Boat Project",
      tagline: "Interactive & Modern Web Experience",
      description: "A sleek, responsive, and visually dynamic web application crafted with modern web technologies, seamless UI components, and optimized client performance.",
      github: "https://github.com/ayush77177panjiyar-star/Paper_Boat-Project",
      liveDemo: "https://paper-boat-project.vercel.app/",
      techStack: ["HTML5", "CSS3", "JavaScript", "Vercel"],
      features: ["Responsive Grid Layout", "Interactive UI Elements", "Clean Micro-animations", "Vercel Production Deployment"]
    },
    {
      id: "visionary-edu",
      name: "Visionary Edu Legacy",
      tagline: "Educational Resource & Learning Hub",
      description: "An educational platform designed to empower students with accessible learning resources, structured study pathways, and interactive content navigation.",
      github: "https://github.com/ayush77177panjiyar-star/visionary-edu-legacy",
      liveDemo: null,
      techStack: ["JavaScript", "HTML", "CSS", "Frontend Architecture"],
      features: ["Educational Content Modules", "Intuitive Navigation", "Clean Typography", "Modular Design"]
    }
  ],

  internships: [
    {
      id: "saiket-systems",
      organization: "Saiket Systems",
      tagline: "Innovate. Elevate. Excel.",
      role: "Front-end Development Intern",
      duration: "14/02/2026 to 14/03/2026",
      issuedDate: "17/03/2026",
      internId: "SKS/A2/C101286",
      accreditation: "ISO 9001:2015 Certified | MSME Registered",
      description: "Served as Front-end Development Intern. Displayed remarkable dedication, attention to detail, and built user-centric frontend interfaces using modern web standards.",
      skills: ["Front-end Development", "HTML5", "CSS3", "JavaScript", "Communication", "Attention to Detail"],
      certificateImage: "/assets/saiket-certificate.png"
    },
    {
      id: "talentgro-global",
      organization: "TalentGro Global",
      tagline: "Growth Simplified",
      role: "Web Design and Development Intern",
      duration: "01 Jun 2026 to 16 Jul 2026",
      certId: "TG2607DC2U5A",
      accreditation: "ISO 9001:2015",
      mentor: "Rishabh Chauhan (IT Specialist)",
      rollNo: "2501301058",
      institution: "Geeta University, Panipat",
      description: "Successfully carried out internship in Web Design and Development. Designed responsive layouts, implemented dynamic features, and worked on real-world web assignments.",
      skills: ["Web Design", "Web Development", "UI/UX Layouts", "Responsive Design", "Teamwork"],
      certificateImage: "/assets/talentgro-certificate.png"
    }
  ],

  certifications: [
    {
      id: "cert-saiket",
      title: "Front-end Development Internship Certificate",
      organization: "Saiket Systems",
      category: "Internship",
      date: "17/03/2026",
      credentialId: "SKS/A2/C101286",
      image: "/assets/saiket-certificate.png"
    },
    {
      id: "cert-talentgro",
      title: "Web Design and Development Internship Certificate",
      organization: "TalentGro Global",
      category: "Internship",
      date: "16/07/2026",
      credentialId: "TG2607DC2U5A",
      image: "/assets/talentgro-certificate.png"
    },
    {
      id: "cert-hackforge",
      title: "HackForge 2.0 Top 15 Achievement & Presentation",
      organization: "Geeta University",
      category: "Hackathon",
      date: "2026",
      credentialId: "HackForge 2.0 Top 15",
      image: "/assets/hackforge-stage.png"
    }
  ],

  skills: {
    programming: ["C", "C++"],
    webDev: ["HTML", "CSS", "JavaScript", "Frontend Development", "Responsive Web Development"],
    tools: ["Git", "GitHub"],
    ai: ["Generative AI", "AI Tools", "AI-assisted Development"],
    soft: ["Communication", "Leadership", "Teamwork", "Management", "Problem Solving", "Presentation", "Collaboration"]
  },

  education: {
    institution: "Geeta University, Panipat",
    degree: "B.Tech – Computer Science & Engineering",
    field: "Computer Science & Engineering",
    status: "Currently Pursuing",
    location: "Panipat, Haryana, India"
  },

  journey: [
    {
      step: 1,
      title: "B.Tech CSE Admission",
      institution: "Geeta University, Panipat",
      description: "Enrolled in B.Tech Computer Science & Engineering to build a robust foundation in computer science."
    },
    {
      step: 2,
      title: "Programming Foundations",
      skills: ["C", "C++"],
      description: "Mastered core programming concepts, data structures, and problem-solving techniques in C and C++."
    },
    {
      step: 3,
      title: "Frontend Engineering",
      skills: ["HTML", "CSS", "JavaScript"],
      description: "Learned modern web technologies, responsive layouts, client-side scripting, and frontend architecture."
    },
    {
      step: 4,
      title: "Real-World Projects",
      projects: ["Civil AI", "Paper Boat Project", "Visionary Edu Legacy"],
      description: "Built practical digital solutions, including AI civic platforms and web applications."
    },
    {
      step: 5,
      title: "Professional Internships",
      organizations: ["Saiket Systems", "TalentGro Global"],
      description: "Completed industry internships in Front-end Development and Web Design & Development."
    },
    {
      step: 6,
      title: "Hackathons & Achievements",
      events: ["HackForge 2.0 (Top 15)", "OOSC 4.0 IIIT Allahabad"],
      description: "Competed in high-stakes hackathons, pitched on auditorium stages, and developed AI-driven tools."
    }
  ]
};
