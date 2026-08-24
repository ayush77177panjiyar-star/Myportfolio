export const portfolioData = {
  personal: {
    name: "Ayush Kumar",
    headline: "Aspiring Software Developer | Web Development & AI-Assisted Coding",
    greeting: "Hi, I'm Ayush Kumar 👋",
    mainHeading: "Aspiring Software Developer Building Real-World Digital Solutions",
    description: "Motivated Computer Science undergraduate with a strong foundation in C and C++ programming, hands-on experience building and deploying websites using AI-assisted tools, and practical exposure to backend integration with Supabase.",
    profileImage: "/assets/ayush-profile.jpg",
    resumeImage: "/assets/ayush-resume.png",
    github: "https://github.com/ayush77177panjiyar-star",
    linkedin: "https://www.linkedin.com/in/ayush-kumar-paniyar/",
    email: "ayush77177panjiyar@gmail.com",
    phone: "+91 7903382446",
    location: "Samastipur, Bihar | Geeta University, Panipat"
  },
  
  about: {
    university: "Geeta University, Panipat",
    degree: "Bachelor of Technology (B.Tech) - Computer Science",
    bio: "I am a dedicated B.Tech Computer Science student at Geeta University with a passion for transforming ideas into production-ready software solutions. My core focus spans C/C++ programming, modern web development, Supabase backend integration, and leveraging AI-assisted coding tools (ChatGPT, Gemini, Claude, Lovable, Cursor, Antigravity) for rapid prototyping and full-stack software development.",
    interests: [
      "Software Development",
      "AI-Assisted Coding ('Vibe Coding')",
      "Frontend & Web Architecture",
      "Supabase Backend & Authentication",
      "Hackathons (SIH 2025, HackForge 2.0)",
      "Continuous Learning"
    ],
    strengths: [
      {
        title: "Problem Solving & Logic",
        desc: "Structured algorithmic thinking and efficient logic execution in C, C++, and JavaScript.",
        icon: "Brain"
      },
      {
        title: "AI-Assisted Development",
        desc: "Fluent with AI tools (ChatGPT, Gemini, Claude, Lovable, Cursor, Antigravity) to accelerate coding and debugging.",
        icon: "Cpu"
      },
      {
        title: "Teamwork & Leadership",
        desc: "Hackathon leadership (Team 'Hack Titans', Team 'Neural Nexus') and collaborative engineering.",
        icon: "Users"
      },
      {
        title: "Adaptability & Management",
        desc: "Quick adaptability to new tools, Supabase database setup, and self-directed project execution.",
        icon: "Target"
      }
    ]
  },

  achievements: [
    {
      id: "hackforge-2026",
      title: "Top 15 — HackForge 2.0 (Team Hack Titans)",
      badge: "Top 15 Teams Awardee",
      organization: "Geeta University & Geeta Technical Hub",
      description: "Secured a place among the Top 15 Teams in the 24-hour internal hackathon (14th-15th April 2026) with Team 'Hack Titans'. Received official Certificate of Appreciation.",
      certificateImage: "/assets/hackforge-certificate.jpg",
      images: [
        { url: "/assets/hackforge-certificate.jpg", caption: "Official Certificate of Appreciation - Top 15 Teams in HackForge 2.0 awarded to Ayush Kumar (Team Hack Titans)." },
        { url: "/assets/hackforge-id-cards.png", caption: "Official HackForge 2.0 Participant ID Cards for Team 'Hack Titans' (Ayush, Abhay, Aaditya, Krishna)." },
        { url: "/assets/hackforge-stage.png", caption: "Ayush presenting project analytics on stage during HackForge 2.0 auditorium pitching round." },
        { url: "/assets/team-photo.jpg", caption: "Ayush Kumar and team members during the HackForge 2.0 hackathon event." }
      ],
      highlights: ["Top 15 Teams Official Certificate", "Team 'Hack Titans' Lead", "Auditorium Stage Presentation"]
    },
    {
      id: "sih-2025",
      title: "Internal Smart India Hackathon (SIH 2025)",
      badge: "Team Neural Nexus",
      organization: "Geeta University | Ministry of Education & AICTE",
      description: "Participated in the Internal Smart India Hackathon (SIH 2025) held at Geeta University on 24th September 2025 as part of Team 'Neural Nexus'.",
      certificateImage: "/assets/sih-2025-certificate.png",
      images: [],
      highlights: ["SIH 2025 Hackathon", "Team 'Neural Nexus'", "Ministry of Education & AICTE Initiative"]
    },
    {
      id: "code-in-the-dark",
      title: "Code in the Dark Competition",
      badge: "Certificate of Appreciation",
      organization: "School of Computer Science Engineering, Geeta University",
      description: "Participated in the 'Code in the Dark' live frontend coding competition organized by the School of Computer Science Engineering.",
      certificateImage: "/assets/code-in-the-dark-certificate.png",
      images: [],
      highlights: ["Live Frontend Coding", "School of CSE Competition", "Speed & Accuracy Coding"]
    },
    {
      id: "oosc-4",
      title: "OOSC 4.0 Hackathon — IIIT Allahabad",
      badge: "Elimination Round 1 Qualified Project",
      organization: "IIIT Allahabad",
      description: "Developed Civil AI, an AI-powered statutory legal and civic co-pilot for Indian citizens, built specifically for the first elimination round of OOSC 4.0 conducted by IIIT Allahabad.",
      github: "https://github.com/ayush77177panjiyar-star/Civil_AI",
      liveDemo: "https://civil-ai-rax3.onrender.com/",
      images: [],
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
      id: "talentgro-global",
      organization: "Talentgro",
      tagline: "Growth Simplified",
      role: "Software Intern",
      duration: "June 2026 – July 2026",
      certId: "TG2607DC2U5A",
      accreditation: "ISO 9001:2015",
      mentor: "Rishabh Chauhan (IT Specialist)",
      rollNo: "2501301058",
      institution: "Geeta University, Panipat",
      description: "Recently completed an internship at Talentgro, gaining hands-on industry exposure to real-world development workflows and practical software tasks. Applied technical and AI-assisted development skills in a professional team environment.",
      skills: ["Web Design & Development", "Software Engineering", "AI-Assisted Workflows", "Responsive UI", "Team Collaboration"],
      certificateImage: "/assets/talentgro-certificate.png"
    },
    {
      id: "saiket-systems",
      organization: "Saiket Systems",
      tagline: "Innovate. Elevate. Excel.",
      role: "Front-end Development Intern",
      duration: "February 2026 – March 2026",
      issuedDate: "17/03/2026",
      internId: "SKS/A2/C101286",
      accreditation: "ISO 9001:2015 Certified | MSME Registered",
      description: "Completed an internship at Saiket Systems, contributing to assigned technical tasks and strengthening core programming and development skills. Gained experience working in a structured environment, improving discipline and execution.",
      skills: ["Front-end Development", "HTML5", "CSS3", "JavaScript", "Communication", "Attention to Detail"],
      certificateImage: "/assets/saiket-certificate.png",
      offerLetterImage: "/assets/saiket-offer-letter.png"
    },
    {
      id: "codsoft",
      organization: "CodSoft",
      tagline: "Code. Create. Succeed.",
      role: "C++ Programming Virtual Intern",
      duration: "01 March 2026 – 31 March 2026",
      issuedDate: "27/02/2026",
      internId: "BY25RY271995",
      accreditation: "ISO 9001:2015 Certified | MSME Registered",
      description: "Selected for 1-Month C++ Programming Virtual Internship position with CodSoft. Executed assigned C++ tasks, data structures, and algorithmic logic.",
      skills: ["C++ Programming", "Data Structures", "Algorithm Logic", "Problem Solving"],
      certificateImage: "/assets/codsoft-offer-letter.png"
    }
  ],

  certifications: [
    {
      id: "cert-sih-2025",
      title: "Internal Smart India Hackathon (SIH 2025) Certificate of Participation",
      organization: "Geeta University | Ministry of Education & AICTE",
      category: "Hackathon",
      date: "24th September 2025",
      credentialId: "Team Neural Nexus - SIH 2025",
      image: "/assets/sih-2025-certificate.png"
    },
    {
      id: "cert-code-in-dark",
      title: "Code in the Dark Competition Certificate of Appreciation",
      organization: "School of Computer Science Engineering, Geeta University",
      category: "Technical",
      date: "2026",
      credentialId: "Code in the Dark Competition",
      image: "/assets/code-in-the-dark-certificate.png"
    },
    {
      id: "cert-hackforge-top15",
      title: "HackForge 2.0 Top 15 Certificate of Appreciation",
      organization: "Geeta University & Geeta Technical Hub",
      category: "Hackathon",
      date: "14-15 April 2026",
      credentialId: "Top 15 Teams - Team Hack Titans",
      image: "/assets/hackforge-certificate.jpg"
    },
    {
      id: "cert-hackforge-cards",
      title: "HackForge 2.0 Participant ID Cards (Team Hack Titans)",
      organization: "Geeta University",
      category: "Hackathon",
      date: "14-15 April 2026",
      credentialId: "Team Hack Titans ID Cards",
      image: "/assets/hackforge-id-cards.png"
    },
    {
      id: "cert-talentgro",
      title: "Web Design and Development Internship Certificate",
      organization: "Talentgro",
      category: "Internship",
      date: "16/07/2026",
      credentialId: "TG2607DC2U5A",
      image: "/assets/talentgro-certificate.png"
    },
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
      id: "cert-codsoft-offer",
      title: "C++ Programming Internship Offer Letter",
      organization: "CodSoft",
      category: "Internship",
      date: "27/02/2026",
      credentialId: "BY25RY271995",
      image: "/assets/codsoft-offer-letter.png"
    },
    {
      id: "cert-yugantran",
      title: "Tech Fest YUGANTRAN 2.0 Certificate of Participation",
      organization: "Geeta University (School of CSE)",
      category: "Technical",
      date: "2026",
      credentialId: "Yugantran 2.0 Participation",
      image: "/assets/yugantran-certificate.png"
    }
  ],

  skills: {
    programming: ["C", "C++"],
    webDev: ["Website Development", "Frontend Development", "Responsive Web Development", "AI-assisted ('Vibe Coding')"],
    backend: ["Supabase (Database, Auth, Connectivity)"],
    ai: ["ChatGPT", "Gemini", "Claude", "Lovable", "Cursor", "Antigravity"],
    soft: ["Problem Solving", "Quick Adaptability", "Self-Directed Learning", "Communication", "Leadership", "Teamwork"]
  },

  education: {
    institution: "Geeta University, Panipat",
    degree: "Bachelor of Technology (B.Tech) - Computer Science",
    field: "Computer Science & Engineering",
    status: "Ongoing",
    location: "Panipat, Haryana, India"
  },

  journey: [
    {
      step: 1,
      title: "B.Tech Computer Science Admission",
      institution: "Geeta University, Panipat",
      description: "Enrolled in B.Tech Computer Science to build a strong engineering foundation."
    },
    {
      step: 2,
      title: "Programming Foundations",
      skills: ["C", "C++"],
      description: "Mastered C and C++ programming fundamentals, logic building, and algorithms."
    },
    {
      step: 3,
      title: "Modern Web & AI-Assisted Development",
      skills: ["Frontend", "AI Tools (ChatGPT, Gemini, Claude, Lovable, Cursor, Antigravity)", "Supabase"],
      description: "Pioneered AI-assisted 'vibe coding' workflows, rapid prototyping, and Supabase backend integration."
    },
    {
      step: 4,
      title: "Real-World Projects",
      projects: ["Civil AI Platform", "Paper Boat Project", "Visionary Edu Legacy"],
      description: "Developed production web applications and statutory AI copilots."
    },
    {
      step: 5,
      title: "Software Internships",
      organizations: ["Talentgro", "Saiket Systems", "CodSoft"],
      description: "Completed software engineering internships gaining hands-on exposure to development workflows."
    },
    {
      step: 6,
      title: "Hackathons & Competitions",
      events: ["HackForge 2.0 (Top 15 - Team Hack Titans)", "Internal SIH 2025 (Team Neural Nexus)", "Code in the Dark"],
      description: "Competed in SIH 2025, HackForge 2.0, and live coding challenges."
    }
  ]
};
