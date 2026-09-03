import { 
  JourneyMilestone, 
  SkillItem, 
  ProjectDetail, 
  LearningItem, 
  StrengthItem, 
  CertificationItem 
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Mohammad Natiq",
  shortName: "Natiq",
  role: "Computer Science & Engineering Student",
  subRole: "Aspiring Software Developer",
  philosophy: "Code. Learn. Solve. Grow.",
  intro: "I enjoy turning ideas into practical digital solutions through code, problem solving and continuous learning.",
  bio: "Computer Science & Engineering student and aspiring software developer with a strong interest in programming, problem solving, web development, databases, AI, cybersecurity and practical engineering projects. Focused on continuous learning and building useful, real-world solutions.",
  careerObjective: "To become a skilled software developer and build innovative, reliable solutions that create real-world impact. Committed to improving every day, strengthening technical skills, collaborating with others, and turning ideas into useful projects.",
  location: "Lovely Professional University, Punjab",
  email: "mohdnatiq009@gmail.com",
  phone: "+91 7451815040",
  linkedin: "https://www.linkedin.com/in/mohammad-natiq",
  linkedinDisplay: "Mohammad Natiq",
  github: "https://github.com/mohdnatiq009-collab",
  githubDisplay: "github.com/mohdnatiq009-collab",
  cvFile: "./Mohammad_Natiq_Professional_CV.pdf",
  portraitUrl: "./assets/natiq_portrait.jpg",
  portraitStageUrl: "./assets/natiq_portrait_stage.jpg",
  portraitCampusUrl: "./assets/natiq_portrait_campus.jpg",
  comicStoryUrl: "./assets/natiq_comic_story.png",
  lpuLogoUrl: "./assets/lpu_logo.webp",
  floatingTech: [
    { name: "Python", color: "from-blue-500 to-yellow-500", icon: "Code2" },
    { name: "C", color: "from-blue-600 to-indigo-600", icon: "Terminal" },
    { name: "C++", color: "from-blue-700 to-cyan-500", icon: "Cpu" },
    { name: "JavaScript", color: "from-amber-400 to-yellow-500", icon: "FileCode" },
    { name: "HTML", color: "from-orange-500 to-amber-600", icon: "Globe" },
    { name: "CSS", color: "from-blue-400 to-cyan-400", icon: "Palette" },
    { name: "MySQL", color: "from-cyan-600 to-blue-500", icon: "Database" },
  ]
};

export const JOURNEY_TIMELINE: JourneyMilestone[] = [
  {
    period: "2020 – 2021",
    title: "Class X — ICSE Board",
    subtitle: "Secondary Education",
    description: "Built strong early foundations in analytical mathematics, science principles, and disciplined logical thinking through the rigorous ICSE curriculum.",
    category: "education",
    iconName: "GraduationCap",
    tags: ["ICSE Board", "Foundations", "Science & Math"]
  },
  {
    period: "2023 – 2024",
    title: "Class XII — TS Board",
    subtitle: "Senior Secondary Education (Science Stream)",
    description: "Deepened quantitative and analytical capabilities across physics, mathematics, and computing principles, cementing the dedication to pursue computer science engineering.",
    category: "education",
    iconName: "Award",
    tags: ["TS Board", "Science Stream", "Higher Secondary"]
  },
  {
    period: "2025",
    title: "Started B.Tech in CSE",
    subtitle: "Commenced Undergraduate Degree",
    description: "Embarking on the engineering journey at university, immersing in low-level systems programming, core algorithmic problem solving, and computational foundations.",
    category: "academic",
    iconName: "BookOpen",
    tags: ["B.Tech", "Computer Science", "CSE"]
  },
  {
    period: "2025 – 2029",
    title: "Lovely Professional University",
    subtitle: "B.Tech Computer Science & Engineering (Punjab)",
    description: "Pursuing 4-year rigorous undergraduate curriculum covering Data Structures, Database Systems, Computer Networks, Software Engineering, AI, and Cybersecurity.",
    category: "academic",
    iconName: "Compass",
    tags: ["LPU Punjab", "2025-2029", "Engineering Degree"]
  },
  {
    period: "Present Focus",
    title: "Continuous Growth & Engineering Practice",
    subtitle: "Active Skill Building & Practical Implementation",
    description: "Actively building programming foundations, practicing Data Structures & Algorithms, exploring modern Web Development, designing relational MySQL databases, developing practical IoT concepts, and studying Large Language Models & AI.",
    category: "focus",
    iconName: "Sparkles",
    tags: ["DSA", "Web Dev", "Databases", "AI / LLMs", "IoT"],
    active: true
  }
];

export const SKILLS: SkillItem[] = [
  // Programming
  {
    id: "python",
    name: "Python",
    levelTag: "Programming & Problem Solving",
    description: "Core language used for problem solving, algorithm scripting, data handling, and exploring modern AI and automation workflows.",
    relatedProjects: ["Code Bug Finder Concept", "Algorithm Scripting", "AI Exploration"],
    category: "programming",
    color: "from-blue-500 to-amber-400",
    icon: "Code2"
  },
  {
    id: "c",
    name: "C",
    levelTag: "Systems & Memory Management",
    description: "Deep foundation in pointers, manual memory management, multi-dimensional arrays, recursion, and low-level algorithmic logic.",
    relatedProjects: ["Matrix Operations Suite", "Sorting & Recursion Library", "Memory Pointers"],
    category: "programming",
    color: "from-blue-600 to-indigo-600",
    icon: "Terminal"
  },
  {
    id: "cpp",
    name: "C++",
    levelTag: "OOP & Algorithmic Practice",
    description: "Object-oriented programming principles, Standard Template Library (STL) exploration, and computational efficiency for Data Structures & Algorithms.",
    relatedProjects: ["DSA Problem Solving", "Algorithmic Practice"],
    category: "programming",
    color: "from-indigo-500 to-cyan-500",
    icon: "Cpu"
  },

  // Web
  {
    id: "html",
    name: "HTML5",
    levelTag: "Semantic Web Structure",
    description: "Structuring modern, accessible, and responsive user interfaces using clean semantic HTML5 markup.",
    relatedProjects: ["Developer Portfolio", "Web UI Prototypes"],
    category: "web",
    color: "from-orange-500 to-amber-500",
    icon: "Globe"
  },
  {
    id: "css",
    name: "CSS3",
    levelTag: "Modern Styling & Layouts",
    description: "Crafting fluid responsive layouts with Flexbox, CSS Grid, custom properties, smooth transitions, and glassmorphic UI effects.",
    relatedProjects: ["Developer Portfolio", "Responsive Layouts"],
    category: "web",
    color: "from-blue-400 to-cyan-500",
    icon: "Palette"
  },
  {
    id: "javascript",
    name: "JavaScript",
    levelTag: "Interactive Web Development",
    description: "Building dynamic clientside interactivity, DOM manipulation, asynchronous operations, and modular web interfaces.",
    relatedProjects: ["Interactive Developer Terminal", "Dynamic Filter Engines", "Portfolio Apps"],
    category: "web",
    color: "from-amber-400 to-yellow-500",
    icon: "FileCode"
  },

  // Database
  {
    id: "mysql",
    name: "MySQL",
    levelTag: "Database Fundamentals",
    description: "Designing normalized relational schemas (1NF-3NF), writing multi-table JOINs, subqueries, and implementing data integrity rules.",
    relatedProjects: ["Normalized Database Schema", "Relational Queries"],
    category: "database",
    color: "from-cyan-600 to-blue-600",
    icon: "Database"
  },

  // Tools & Technologies
  {
    id: "git",
    name: "Git & GitHub",
    levelTag: "Version Control & Collaboration",
    description: "Branching workflows, commits, pull requests, repository management, and tracking project version history.",
    relatedProjects: ["Portfolio Repository", "Team Collaboration"],
    category: "tools",
    color: "from-orange-600 to-red-500",
    icon: "GitBranch"
  },
  {
    id: "ai",
    name: "AI & LLMs",
    levelTag: "Exploration & Applied Intelligence",
    description: "Exploring Large Language Models, prompt engineering patterns, transformer fundamentals, and AI integration for developer productivity.",
    relatedProjects: ["Intro to LLMs Study", "AI Coursework"],
    category: "tools",
    color: "from-purple-500 to-pink-500",
    icon: "Bot"
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    levelTag: "Security Principles & Awareness",
    description: "Understanding the CIA Triad, common web vulnerability vectors (OWASP Top 10, XSS, IDOR), and defensive coding mindset.",
    relatedProjects: ["Security Vulnerability Audit Study", "Defensive Practices"],
    category: "tools",
    color: "from-emerald-500 to-teal-500",
    icon: "ShieldCheck"
  },
  {
    id: "iot",
    name: "IoT & Hardware",
    levelTag: "Connected Smart Solutions",
    description: "Conceptualizing smart hardware devices, sensor integration, GPS location feeds, and emergency communications.",
    relatedProjects: ["Modern Safety Device with Exact Location"],
    category: "tools",
    color: "from-cyan-500 to-indigo-500",
    icon: "Radio"
  }
];

export const PROJECTS: ProjectDetail[] = [
  {
    id: "safety-device",
    title: "Modern Safety Device with Exact Location",
    category: "IoT / Hardware / Safety Technology",
    badge: "Featured IoT Project",
    tagline: "A smart safety concept designed to provide emergency alerts along with the user's exact location.",
    featured: true,
    problem: "During critical emergencies or distress situations, individuals often cannot navigate their phone screens or articulate their exact geographical coordinates, leading to tragic delays in rescue response times.",
    solution: "Designed an emergency safety device concept that pairs compact embedded hardware with dedicated satellite GPS positioning and cellular alert transmission to immediately broadcast real-time distress signals with pinpoint accuracy.",
    technologies: ["IoT Concepts", "GPS Location Tracking", "GSM Emergency Alerting", "Hardware System Design", "Embedded Safety Architecture"],
    howItWorks: [
      "Distress Trigger: A dedicated, tactile emergency trigger activates the device instantaneously without requiring screen interaction.",
      "Exact Satellite Fix: The embedded GPS module acquires precise latitude and longitude coordinates in real-time.",
      "Emergency Transmission: An integrated cellular communication module broadcasts instant SOS alerts with exact map coordinates to designated emergency contacts and authorities.",
      "Continuous Tracking: Updates location intermittently until safe acknowledgment is received."
    ],
    futureImprovements: [
      "Integration with automated accelerometer-based fall detection sensors.",
      "Low-power Bluetooth pairing with smartphone companion app for battery status and silent alarms.",
      "Ruggedized, compact wearable enclosure prototype."
    ],
    highlights: [
      "Exact location tracking",
      "Emergency alerts",
      "Safety-focused technology",
      "Hardware-based implementation",
      "Real-world problem solving"
    ]
  },
  {
    id: "code-bug-finder",
    title: "Code Bug Finder",
    category: "Software / Programming / Developer Tools",
    badge: "Featured Software Project",
    tagline: "A software project concept focused on identifying common coding errors and supporting debugging and problem solving.",
    featured: true,
    problem: "Novice developers and students frequently struggle with elusive bugs like off-by-one loop indexing, uninitialized pointers, boundary condition failures, and syntax oversights, slowing down problem-solving momentum.",
    solution: "Developed an architectural concept for an automated code analysis and debugging assistant that scans source code, analyzes control flow, detects logical/syntax anomalies, and produces actionable explanatory feedback.",
    technologies: ["Python", "Static Code Analysis Concepts", "Syntax Parsing", "Pattern Matching", "Debugging Algorithms"],
    howItWorks: [
      "Code Ingestion: Accepts source code snippets in target languages such as Python or C.",
      "Structural Parsing: Tokenizes code statements and generates an abstract syntax/control flow representation.",
      "Anomaly Detection: Scans against known error patterns (infinite loops, misplaced delimiters, variable scope clashes).",
      "Actionable Feedback: Summarizes the issue and suggests concrete fixes with plain-language explanations."
    ],
    flowSteps: [
      { step: "01", title: "Problem", description: "Receive code with unexpected output, runtime faults, or syntax errors.", icon: "AlertTriangle" },
      { step: "02", title: "Analysis", description: "Parse token streams, inspect variable assignments, and map logic paths.", icon: "Search" },
      { step: "03", title: "Detection", description: "Pinpoint precise line numbers containing logic flaws or boundary bugs.", icon: "Crosshair" },
      { step: "04", title: "Feedback", description: "Deliver clear explanations and clean, corrected code recommendations.", icon: "CheckCircle2" }
    ],
    futureImprovements: [
      "Support for interactive step-through debugging recommendations.",
      "Integration of Large Language Model explanations for customized learning assistance.",
      "Web-based interactive playground interface."
    ],
    highlights: [
      "Automated error pattern detection",
      "Actionable debugging guidance",
      "4-stage interactive analysis pipeline",
      "Educational developer tooling"
    ]
  },
  {
    id: "matrix-suite",
    title: "Matrix Operations Suite",
    category: "Systems Programming / C",
    badge: "Academic Coursework",
    tagline: "Comprehensive C program implementing multi-dimensional matrix arithmetic with raw memory efficiency.",
    featured: false,
    problem: "Handling multi-dimensional numerical data in constrained memory requires careful pointer arithmetic and array indexing without memory leaks.",
    solution: "Built a robust C application handling matrix addition, dynamic multiplication, transposition, and determinant calculations utilizing 2D arrays and pointers.",
    technologies: ["C Language", "Pointer Arithmetic", "Multi-Dimensional Arrays", "Memory Layout", "GCC"],
    howItWorks: [
      "Dynamic allocation and validation of compatible matrix dimensions.",
      "Row-major memory traversal for cache-friendly matrix multiplications.",
      "Clean CLI interface for user input and verified algebraic outputs."
    ],
    futureImprovements: ["Integration of sparse matrix compression algorithms."],
    highlights: ["Pure C implementation", "Pointer manipulation", "Mathematical rigor"]
  },
  {
    id: "sql-schema",
    title: "Normalized Relational Database Schema",
    category: "Database Systems / SQL",
    badge: "Academic Coursework",
    tagline: "End-to-end normalized relational database model designed to 3NF with complex analytical queries.",
    featured: false,
    problem: "Redundant data entries, update anomalies, and disorganized schemas cause performance bottlenecks and data corruption in relational storage.",
    solution: "Architected a comprehensive schema normalized through 1NF, 2NF, and 3NF, including strict primary/foreign key relations and complex multi-table query suites.",
    technologies: ["MySQL", "Relational Algebra", "Normalization (1NF-3NF)", "JOIN Optimizations", "Subqueries"],
    howItWorks: [
      "Entity-Relationship mapping with cardinality constraints.",
      "Decomposition of unnormalized tables to remove transitive dependencies.",
      "Implementation of INNER, LEFT, UNION, and analytical aggregate queries."
    ],
    futureImprovements: ["Indexing strategy benchmark for large-scale datasets."],
    highlights: ["3NF Normalization", "Integrity constraints", "Multi-table JOINs"]
  },
  {
    id: "recursion-sorting",
    title: "Sorting & Recursion Library",
    category: "Algorithms & Data Structures / C",
    badge: "Academic Coursework",
    tagline: "Library of classic algorithms with documented root-cause bug fixing and loop analysis.",
    featured: false,
    problem: "Understanding algorithmic time-complexity and edge-case recursion depths requires rigorous verification and debugging.",
    solution: "Implemented a suite of classic algorithms including bubble sort, recursive prime verification, palindrome checks, and digit extraction with detailed bug analysis.",
    technologies: ["C Language", "Recursion", "Sorting Algorithms", "Boundary Analysis"],
    howItWorks: [
      "Recursive stack traversal for mathematical predicates.",
      "Iterative sorting routines with loop-invariant checks.",
      "Automated test runs comparing expected vs actual outputs."
    ],
    futureImprovements: ["Benchmarking QuickSort and MergeSort implementations."],
    highlights: ["Recursion trees", "Time complexity awareness", "Loop invariant debugging"]
  },
  {
    id: "security-audit",
    title: "Security Vulnerability Audit Study",
    category: "Cybersecurity Research",
    badge: "Independent Study",
    tagline: "Structured inquiry into OWASP Top 10 vulnerabilities, the CIA Triad, and secure development.",
    featured: false,
    problem: "Overlooking basic security measures during development leads to catastrophic web exploits such as Cross-Site Scripting (XSS) and Broken Object Level Authorization (IDOR).",
    solution: "Conducted an in-depth analytical study detailing root causes, attack mechanisms, and code-level defenses across top web vulnerabilities.",
    technologies: ["Cybersecurity Principles", "CIA Triad", "OWASP Top 10", "Input Sanitation", "Session Security"],
    howItWorks: [
      "Deconstruction of attack vectors (reflected/stored XSS, insecure parameters).",
      "Analysis of defense-in-depth principles (parameterized queries, encoding, strict auth).",
      "Documentation of best practices for defensive programming."
    ],
    futureImprovements: ["Hands-on lab simulations in controlled virtual environments."],
    highlights: ["Defensive mindset", "OWASP principles", "Security awareness"]
  }
];

export const HOW_I_THINK = [
  {
    step: "01",
    title: "Understand",
    heading: "Understand the Problem Clearly",
    description: "Deeply examine requirements, context, edge cases, and user expectations before writing a single line of code.",
    icon: "Compass",
    color: "from-blue-500 to-cyan-400"
  },
  {
    step: "02",
    title: "Break Down",
    heading: "Divide Complex Problems",
    description: "Deconstruct large challenges into modular, manageable sub-components, flow diagrams, and discrete functions.",
    icon: "Split",
    color: "from-cyan-400 to-indigo-500"
  },
  {
    step: "03",
    title: "Build",
    heading: "Develop Practical Solutions",
    description: "Implement clean, efficient, and readable code adhering to established standards, solid patterns, and best practices.",
    icon: "Hammer",
    color: "from-indigo-500 to-purple-500"
  },
  {
    step: "04",
    title: "Improve",
    heading: "Test, Learn and Refine",
    description: "Stress-test edge cases, debug anomalies, reflect on feedback, and iteratively optimize for performance and maintainability.",
    icon: "TrendingUp",
    color: "from-purple-500 to-emerald-400"
  }
];

export const BUILD_WITH_ME = [
  { stage: "IDEA", label: "Spark", desc: "Identify a real need or concept", icon: "Lightbulb" },
  { stage: "PLAN", label: "Architecture", desc: "Design data flow & structure", icon: "FileSpreadsheet" },
  { stage: "CODE", label: "Implementation", desc: "Write clean, modular code", icon: "Code" },
  { stage: "TEST", label: "Verification", desc: "Catch bugs & edge cases", icon: "CheckCheck" },
  { stage: "IMPROVE", label: "Refinement", desc: "Optimize speed & experience", icon: "Sparkles" },
  { stage: "BUILD", label: "Deployment", desc: "Deliver practical impact", icon: "Rocket" },
];

export const STRENGTHS: StrengthItem[] = [
  {
    name: "Logical Thinker",
    badge: "Core Strength",
    description: "Approaching challenges systematically, evaluating trade-offs, and reasoning through algorithms from first principles.",
    icon: "Brain",
    isCore: true
  },
  {
    name: "Focused & Dedicated",
    badge: "Core Strength",
    description: "Sustaining deep focus during complex technical tasks and persistently seeing challenging solutions through to completion.",
    icon: "Target",
    isCore: true
  },
  {
    name: "Self-Motivated",
    badge: "Core Strength",
    description: "Driven by intrinsic curiosity to explore emerging frameworks, experiment with new ideas, and build practical projects.",
    icon: "Flame",
    isCore: true
  },
  {
    name: "Problem Solver",
    badge: "Core Strength",
    description: "Viewing programming obstacles not as roadblocks, but as puzzles waiting to be debugged, resolved, and documented.",
    icon: "Wrench",
    isCore: true
  },
  {
    name: "Continuous Learner",
    badge: "Supporting Quality",
    description: "Constantly expanding capabilities across algorithms, backend architectures, cybersecurity, and modern web stacks.",
    icon: "BookOpen",
    isCore: false
  },
  {
    name: "Adaptable",
    badge: "Supporting Quality",
    description: "Comfortable pivoting between low-level C programming, relational database schemas, and dynamic frontend code.",
    icon: "RefreshCw",
    isCore: false
  },
  {
    name: "Teamwork",
    badge: "Supporting Quality",
    description: "Actively contributing to team project success, communicating ideas transparently, and supporting fellow peers.",
    icon: "Users",
    isCore: false
  },
  {
    name: "Communication",
    badge: "Supporting Quality",
    description: "Articulating technical design rationale and project ideas with clarity to both technical and non-technical audiences.",
    icon: "MessageSquare",
    isCore: false
  },
  {
    name: "Creativity",
    badge: "Supporting Quality",
    description: "Bringing unique visual aesthetics and user-centric touches to software applications and engineering concepts.",
    icon: "Palette",
    isCore: false
  }
];

export const LEARNING_LAB: LearningItem[] = [
  {
    name: "Data Structures & Algorithms",
    status: "Practicing",
    focus: "Arrays, Linked Lists, Trees, Sorting, and Time Complexity optimization.",
    color: "border-blue-500/40 text-blue-400 bg-blue-500/10",
    icon: "Binary"
  },
  {
    name: "Web Development",
    status: "Building",
    focus: "Modern responsive interfaces, component architectures, and client-server interactivity.",
    color: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
    icon: "Globe"
  },
  {
    name: "Databases (MySQL)",
    status: "Practicing",
    focus: "Relational modeling, multi-table joins, subqueries, and ACID transaction rules.",
    color: "border-indigo-500/40 text-indigo-400 bg-indigo-500/10",
    icon: "Database"
  },
  {
    name: "Backend Development",
    status: "Learning",
    focus: "Server-side logic, RESTful API endpoints, request handling, and data persistence.",
    color: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    icon: "Server"
  },
  {
    name: "System Design",
    status: "Exploring",
    focus: "High-level architecture, modular micro-components, scalability basics, and caching.",
    color: "border-purple-500/40 text-purple-400 bg-purple-500/10",
    icon: "LayoutGrid"
  },
  {
    name: "Large Language Models",
    status: "Exploring",
    focus: "Understanding transformer foundations, prompt engineering, and LLM application design.",
    color: "border-pink-500/40 text-pink-400 bg-pink-500/10",
    icon: "Bot"
  },
  {
    name: "Artificial Intelligence",
    status: "Learning",
    focus: "Core AI principles, pattern recognition, heuristic search, and intelligent agents.",
    color: "border-amber-500/40 text-amber-400 bg-amber-500/10",
    icon: "BrainCircuit"
  },
  {
    name: "Cybersecurity",
    status: "Exploring",
    focus: "Defensive coding, CIA triad, OWASP Top 10 vulnerabilities, and security best practices.",
    color: "border-rose-500/40 text-rose-400 bg-rose-500/10",
    icon: "ShieldAlert"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Python Certification",
    field: "Programming & Problem Solving",
    skills: ["Python Fundamentals", "Control Flow", "Data Structures", "Functions & Modules"],
    badgeColor: "from-blue-500 to-indigo-600",
    icon: "FileCode2"
  },
  {
    title: "Cybersecurity Certification",
    field: "Security Fundamentals & Defensive Awareness",
    skills: ["CIA Triad", "Threat Vectors", "OWASP Principles", "Secure Practices"],
    badgeColor: "from-emerald-500 to-teal-600",
    icon: "ShieldCheck"
  },
  {
    title: "Artificial Intelligence Certification",
    field: "AI Foundations & Applied Concepts",
    skills: ["AI Fundamentals", "Machine Intelligence Concepts", "Problem Formulation", "Search & Logic"],
    badgeColor: "from-purple-500 to-pink-600",
    icon: "Cpu"
  }
];

export const ACHIEVEMENTS = [
  {
    title: "Consistent Academic Performance",
    desc: "Maintaining strong, consistent grades across core mathematical, scientific, and engineering coursework.",
    icon: "Award",
    color: "text-amber-400"
  },
  {
    title: "Technical Event Participation",
    desc: "Engaging in university and departmental technical workshops, seminars, and collaborative sessions.",
    icon: "CalendarCheck",
    color: "text-blue-400"
  },
  {
    title: "Team Project Contributor",
    desc: "Collaborating with fellow engineers on hardware concepts and software problem-solving prototypes.",
    icon: "Users2",
    color: "text-cyan-400"
  },
  {
    title: "Hardware & Software Project Development",
    desc: "Building both physical IoT safety concepts and software code-analysis utilities.",
    icon: "Wrench",
    color: "text-emerald-400"
  },
  {
    title: "AI & Emerging Tech Exploration",
    desc: "Proactively studying Large Language Models, prompt crafting, and applied computational intelligence.",
    icon: "Sparkles",
    color: "text-purple-400"
  },
  {
    title: "Continuous Learning Mindset",
    desc: "Committed to expanding computer science foundations daily through coursework and hands-on coding.",
    icon: "Flame",
    color: "text-rose-400"
  }
];
