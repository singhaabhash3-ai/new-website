import { SkillCategory, ProjectItem, EcosystemNode, TrajectoryFocus } from './types';

export const PERSONAL_INFO = {
  name: 'Aabhash Singh',
  role: 'AI & Data Science Student',
  institution: 'REVA University',
  degree: 'B.Tech CSE — AI & Data Science',
  semester: '3rd Semester',
  email: 'singhaabhash3@gmail.com',
  linkedinUrl: 'https://linkedin.com',
  githubUrl: 'https://github.com',
  headline: 'Building at the intersection of Artificial Intelligence, Data Science, Python, SQL and the Web.',
  bio: "I'm Aabhash Singh, a B.Tech Computer Science student specializing in Artificial Intelligence & Data Science at REVA University. I'm interested in building practical technology solutions and developing my skills across AI/ML, Data Science, Python, SQL and Web Development.",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'ai-ml',
    title: 'AI / ML',
    badge: 'ML/DS',
    badgeType: 'ml',
    icon: 'neurology',
    description: 'Fundamental principles of intelligent processing, exploratory data algorithms, and predictive modeling.',
    tags: ['Artificial Intelligence', 'Machine Learning', 'Data Science'],
    meterLabel: 'CONCEPT MATURITY',
    meterStatus: 'PROGRESSING',
    meterFill: 70,
    colorClass: 'text-primary',
    accentHex: '#c0c1ff',
    details: [
      'Supervised & Unsupervised Learning foundations',
      'Feature Engineering & Data Preprocessing',
      'Model Evaluation Metrics (Accuracy, Precision, Recall, F1)',
      'Neural network architectures & loss optimization fundamentals'
    ]
  },
  {
    id: 'programming',
    title: 'Programming',
    badge: 'CORE',
    badgeType: 'core',
    icon: 'code',
    description: 'Algorithm design, object-oriented paradigms, data structure orchestration, and computational problem-solving.',
    tags: ['Python'],
    meterLabel: 'SYNTAX & LOGIC',
    meterStatus: 'ACTIVE',
    meterFill: 85,
    colorClass: 'text-secondary',
    accentHex: '#7bd0ff',
    details: [
      'Core Python, OOP, Modular Code Structures',
      'Data Structures (Arrays, Linked Lists, Trees, Hash Maps)',
      'Algorithms & Computational Complexity (Big-O analysis)',
      'Scientific computation libraries (NumPy, Pandas, Scikit-learn)'
    ]
  },
  {
    id: 'database',
    title: 'Database',
    badge: 'STORAGE',
    badgeType: 'storage',
    icon: 'database',
    description: 'Relational schemas, structured querying, schema modeling, normalization, and efficient data retrieval.',
    tags: ['SQL'],
    meterLabel: 'QUERY PIPELINES',
    meterStatus: 'ACTIVE',
    meterFill: 75,
    colorClass: 'text-tertiary',
    accentHex: '#bdc2ff',
    details: [
      'Relational Database Management Systems (PostgreSQL, MySQL)',
      'DDL, DML, Complex Joins, Subqueries & Aggregations',
      'Entity-Relationship (ER) Modeling & Normalization (1NF - 3NF)',
      'Index optimization & structured query analysis'
    ]
  },
  {
    id: 'development',
    title: 'Development',
    badge: 'INTERFACE',
    badgeType: 'interface',
    icon: 'web',
    description: 'Constructing responsive digital platforms, user experience systems, and web-enabled client application flows.',
    tags: ['Web Development'],
    meterLabel: 'DEPLOYMENT',
    meterStatus: 'PROGRESSING',
    meterFill: 70,
    colorClass: 'text-secondary-fixed',
    accentHex: '#c4e7ff',
    details: [
      'Modern Frontend Architecture (HTML5, CSS3, Tailwind CSS)',
      'JavaScript & TypeScript component paradigms',
      'RESTful API consumption & asynchronous data fetching',
      'Responsive design systems with dark/obsidian aesthetics'
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'project-1',
    frameNumber: 'FRAME // 001',
    title: '01 — Web Project',
    shortDesc: 'Short description of the project will appear here.',
    fullDesc: 'An intelligent algorithmic web application exploring machine learning inference pipelines integrated into a responsive client interface with real-time feedback loops.',
    stackTag: 'STACK: WEB + PY',
    buildStatus: 'BUILD: PASS',
    canvasType: 'neural',
    primaryTag: 'Web Development',
    secondaryTag: 'Python',
    tags: ['Web Development', 'Python'],
    githubUrl: 'https://github.com',
    architectureDetails: {
      overview: 'Micro-pipeline connecting lightweight Python backend services to a modern web application front-end.',
      keyModules: ['API Route Handler', 'Feature Extraction Layer', 'Asynchronous Web Client'],
      metrics: [
        { label: 'Latency', value: '< 45ms' },
        { label: 'State Sync', value: 'Instant' },
        { label: 'Architecture', value: 'Modular' }
      ]
    }
  },
  {
    id: 'project-2',
    frameNumber: 'FRAME // 002',
    title: '02 — Web Project',
    shortDesc: 'Short description of the project will appear here.',
    fullDesc: 'A relational data analytics portal designed for structured schema exploration, automated SQL query benchmarking, and exploratory data reporting.',
    stackTag: 'STACK: WEB + SQL',
    buildStatus: 'BUILD: PASS',
    canvasType: 'database',
    primaryTag: 'Web Development',
    secondaryTag: 'SQL',
    tags: ['Web Development', 'SQL'],
    githubUrl: 'https://github.com',
    architectureDetails: {
      overview: 'Structured data querying engine providing interactive table transformations and schema visualizers.',
      keyModules: ['Relational Query Optimizer', 'Schema Inspector', 'Interactive Data Visualizer'],
      metrics: [
        { label: 'Query Engine', value: 'SQL / Relational' },
        { label: 'Normalization', value: '3NF Compliant' },
        { label: 'Data Retrieval', value: 'Indexed' }
      ]
    }
  },
  {
    id: 'project-3',
    frameNumber: 'FRAME // 003',
    title: '03 — Web Project',
    shortDesc: 'Short description of the project will appear here.',
    fullDesc: 'Machine learning exploratory lab providing predictive classification modeling, dataset preprocessing visualizers, and interactive decision boundaries.',
    stackTag: 'STACK: WEB + ML',
    buildStatus: 'BUILD: PASS',
    canvasType: 'matrix',
    primaryTag: 'Web Development',
    secondaryTag: 'AI / ML',
    tags: ['Web Development', 'AI / ML'],
    githubUrl: 'https://github.com',
    architectureDetails: {
      overview: 'Predictive intelligence workflow pairing mathematical statistical evaluation with client-side interactive parameter tuning.',
      keyModules: ['Dataset Preprocessor', 'Model Loss Evaluator', 'Decision Boundary Visualizer'],
      metrics: [
        { label: 'Model Type', value: 'Classification' },
        { label: 'Validation', value: 'K-Fold CV' },
        { label: 'Interface', value: 'Interactive Web' }
      ]
    }
  }
];

export const ECOSYSTEM_NODES: EcosystemNode[] = [
  {
    id: 'ai-ml',
    title: 'AI / ML',
    role: 'Predictive Core',
    icon: 'psychology',
    accent: '#c0c1ff',
    description: 'Forms the predictive foundation through feature learning, probabilistic modeling, and intelligent pattern recognition.',
    inputsFrom: 'Data Science (Cleaned features)',
    outputsTo: 'Python Engine (Model weights & inference)',
    keyLibraries: ['Scikit-learn', 'TensorFlow basics', 'Model Evaluation']
  },
  {
    id: 'data-science',
    title: 'Data Science',
    role: 'Pattern Analysis',
    icon: 'insights',
    accent: '#7bd0ff',
    description: 'Performs exploratory data analysis (EDA), anomaly detection, statistical distribution mapping, and feature normalization.',
    inputsFrom: 'SQL (Raw database records)',
    outputsTo: 'AI / ML (Normalized tensors & data splits)',
    keyLibraries: ['Pandas', 'NumPy', 'Matplotlib / Seaborn']
  },
  {
    id: 'python',
    title: 'Python',
    role: 'Algorithmic Engine',
    icon: 'terminal',
    accent: '#8083ff',
    description: 'Executes core business logic, automated processing pipelines, asynchronous routines, and mathematical algorithms.',
    inputsFrom: 'AI / ML & SQL',
    outputsTo: 'Web Development (Clean JSON payload APIs)',
    keyLibraries: ['FastAPI / Flask', 'Python 3.11+', 'Virtual Envs']
  },
  {
    id: 'sql',
    title: 'SQL',
    role: 'Data Extraction',
    icon: 'table_chart',
    accent: '#bdc2ff',
    description: 'Maintains transactional integrity, normalized relational schemas, analytical joins, and fast persistent query execution.',
    inputsFrom: 'Transactional user actions & logs',
    outputsTo: 'Data Science (Filtered query datasets)',
    keyLibraries: ['PostgreSQL', 'MySQL', 'Relational Schemas']
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    role: 'Interactive UI',
    icon: 'desktop_windows',
    accent: '#7bd0ff',
    description: 'Translates backend data pipelines into high-performance, accessible, and intuitive visual interfaces for end users.',
    inputsFrom: 'Python APIs & Backend services',
    outputsTo: 'End User Devices (Responsive Obsidian UX)',
    keyLibraries: ['React / Vite', 'Tailwind CSS', 'TypeScript']
  }
];

export const TRAJECTORY_FOCUS: TrajectoryFocus[] = [
  {
    id: 'focus-01',
    tag: 'FOCUS_01',
    title: 'AI / ML',
    icon: 'psychology',
    description: 'Exploring artificial intelligence and machine learning concepts.',
    accentColor: '#c0c1ff',
    currentMilestone: 'Studying supervised learning algorithms and model accuracy metrics.'
  },
  {
    id: 'focus-02',
    tag: 'FOCUS_02',
    title: 'Data Science',
    icon: 'bar_chart',
    description: 'Developing skills in data analysis and working with data.',
    accentColor: '#7bd0ff',
    currentMilestone: 'Data cleaning, feature scaling, and statistical distributions with Pandas.'
  },
  {
    id: 'focus-03',
    tag: 'FOCUS_03',
    title: 'Python',
    icon: 'code',
    description: 'Building programming and problem-solving skills.',
    accentColor: '#8083ff',
    currentMilestone: 'Object-oriented architecture, recursion, and algorithm efficiency.'
  },
  {
    id: 'focus-04',
    tag: 'FOCUS_04',
    title: 'SQL',
    icon: 'database',
    description: 'Working with databases and data queries.',
    accentColor: '#bdc2ff',
    currentMilestone: 'Mastering subqueries, aggregate grouping, and relational schema designs.'
  },
  {
    id: 'focus-05',
    tag: 'FOCUS_05',
    title: 'Web Development',
    icon: 'language',
    description: 'Building and exploring web-based projects.',
    accentColor: '#7bd0ff',
    currentMilestone: 'Constructing modern full-screen responsive interfaces with Tailwind CSS.'
  }
];
