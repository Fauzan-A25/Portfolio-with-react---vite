// Portfolio Data - Centralized data management for better maintainability

export const personalInfo = {
  name: 'Fauzan Ahsanudin Alfikri',
  title: 'Data Science Student',
  subtitle: 'Machine Learning Enthusiast | Python Developer',
  tagline: 'Passionate about turning data into insights and solving real-world problems through technology',
  university: 'Telkom University',
  location: 'Bandung, Indonesia',
  email: 'fauzanahsanudin@gmail.com',
  gpa: '3.8',
  cvLink: 'https://docs.google.com/document/d/1zm9N7lCHsZPCChdz5zjfQK4wogPMqb5g/',
  profileImage: './images/Fauzan.png'
};

export const socialLinks = {
  github: 'https://github.com/Fauzan-A25',
  linkedin: 'https://linkedin.com/in/fauzanahsanudin',
  instagram: 'https://instagram.com/fauzan_1718',
  email: 'mailto:fauzanahsanudin@gmail.com',
};

export const projects = [
  {
    id: 1,
    title: 'Fossil - Water Potability Prediction',
    slug: 'fossil-water-potability',
    shortDescription: 'ML application for predicting water safety',
    description:
      'An intelligent Streamlit-based Machine Learning application that predicts water potability using various chemical and physical parameters such as pH, sulfate concentration, and organic carbon. Built with MLPClassifier model to assess water safety for drinking purposes.',
    image: './images/Projects/Fossil_App_Screenshot.png',
    tags: ['Machine Learning', 'Streamlit', 'Python', 'MLPClassifier', 'Data Science'],
    technologies: [
      'Python 3.9+',
      'Streamlit',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Matplotlib',
    ],
    features: [
      'Real-time water quality prediction',
      'Interactive parameter input',
      'Visual data analysis',
      'Model performance metrics',
      'User-friendly interface',
    ],
    category: 'Machine Learning',
    status: 'Completed',
    year: 2024,
    duration: '2 months',
    role: 'Full Stack Developer',
    teamSize: 3,
    githubUrl: 'https://github.com/Fauzan-A25/FOSSIL_GDGoC-TUBES',
    demoUrl: 'https://fossil-water-app.streamlit.app',
    videoUrl: null,
    featured: true,
    highlights: [
      'Achieved 89% accuracy in water potability prediction',
      'Deployed on Streamlit Cloud for public access',
      'Processed 3,276 water quality samples',
    ],
  },
  {
    id: 2,
    title: 'COPPA Risk Prediction Model',
    slug: 'coppa-risk-prediction',
    shortDescription: 'XGBoost model for COPPA violation detection',
    description:
      'Advanced machine learning model using XGBoost to predict COPPA (Children\'s Online Privacy Protection Act) violation risks in mobile applications. Features comprehensive data preprocessing, feature engineering, and model optimization to identify apps that may violate children\'s privacy regulations.',
    image: './images/Projects/COPPA_Model.png',
    tags: ['XGBoost', 'Classification', 'Data Science', 'Privacy', 'COPPA'],
    technologies: [
      'Python 3.9+',
      'XGBoost',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'SHAP',
      'Matplotlib',
      'Seaborn',
    ],
    features: [
      'Advanced feature engineering',
      'XGBoost classification model',
      'SHAP value analysis for interpretability',
      'Comprehensive data preprocessing',
      'Model performance evaluation',
    ],
    category: 'Data Science',
    status: 'Completed',
    year: 2025,
    duration: '1 months',
    role: 'Data Scientist',
    teamSize: 1,
    githubUrl: 'https://github.com/Fauzan-A25/coppa-risk-prediction-findit2025-fauzan',
    demoUrl: null,
    videoUrl: null,
    featured: true,
    highlights: [
      'Developed predictive model with 92% accuracy',
      'Analyzed 10,000+ mobile applications',
      'Implemented SHAP for model explainability',
    ],
  },
  {
    id: 3,
    title: 'Crowd Counting with CSRNet',
    slug: 'crowd-counting-csrnet',
    shortDescription: 'Deep learning for crowd density estimation',
    description:
      'Implementation of CSRNet (Congested Scene Recognition Network) using PyTorch for accurate crowd counting and density estimation. The model can handle both sparse and dense crowds, making it suitable for various surveillance and monitoring applications.',
    image: './images/Projects/crowd_counting_csrnet.jpg',
    tags: ['Deep Learning', 'PyTorch', 'Computer Vision', 'CNN', 'CSRNet'],
    technologies: [
      'Python 3.9+',
      'PyTorch',
      'OpenCV',
      'NumPy',
      'Matplotlib',
      'CUDA',
    ],
    features: [
      'Accurate crowd density estimation',
      'Handles sparse and dense scenes',
      'Real-time inference capability',
      'Pre-trained model support',
      'Visualization tools',
    ],
    category: 'Computer Vision',
    status: 'Completed',
    year: 2025,
    duration: '1 weeks',
    role: 'ML Engineer',
    teamSize: 1,
    githubUrl: 'https://github.com/Fauzan-A25/crowd-counting-with-csrnet-competition-hology',
    demoUrl: null,
    videoUrl: null,
    featured: true,
    highlights: [
      'Trained on ShanghaiTech dataset',
      'Achieved MAE of 68.2 on Part A',
      'Optimized learning rate to 1e-4',
    ],
  },
  {
    id: 4,
    title: 'Pacific Data Viz Challenge - Climate Change & Disasters',
    slug: 'pacific-dataviz-climate-disasters',
    shortDescription: 'Data visualization project on Pacific climate change and disaster patterns',
    description:
      'An interactive data visualization project created for the Pacific Dataviz Challenge, analyzing climate change impacts and disaster patterns across Pacific Island nations. The project uses open data from the Pacific Data Hub to visualize trends in natural disasters, climate risks, and their effects on Pacific communities, supporting the Blue Pacific 2050 strategy objectives.',
    image: './images/Projects/Pacific_DataViz_Screenshot.png',
    tags: ['Data Visualization', 'Climate Change', 'Open Data', 'Pacific Islands', 'Dashboard'],
    technologies: [
      'Python',
      'Pandas',
      'Plotly/Matplotlib',
      'JavaScript',
      'D3.js',
      'HTML/CSS',
    ],
    features: [
      'Interactive climate change visualizations',
      'Disaster pattern analysis across Pacific regions',
      'Time-series data exploration',
      'Geographic heat maps',
      'Comparative regional statistics',
      'Responsive dashboard design',
    ],
    category: 'Data Visualization',
    status: 'Completed',
    year: 2025,
    duration: '3 months',
    role: 'Data Visualization Developer',
    teamSize: 1,
    githubUrl: 'https://github.com/Fauzan-A25/Pacific-Data-Viz-challenge_Climate-Change-And-Disasters',
    demoUrl: null,
    videoUrl: null,
    featured: true,
    highlights: [
      'Participated in Pacific Dataviz Challenge competition',
      'Analyzed climate and disaster data from Pacific Data Hub',
      'Created compelling visual narratives for Pacific Island climate issues',
      'Contributed to Blue Pacific 2050 strategy awareness',
    ],
  },
  {
    id: 5,
    title: 'AstroClassify - Stellar Classification System',
    slug: 'astroclassify-stellar-classification',
    shortDescription: 'ML-powered astronomical object classification system',
    description:
      'An intelligent astronomical object classification system powered by machine learning that identifies and classifies celestial objects (stars, galaxies, and quasars) based on spectral characteristics from the Sloan Digital Sky Survey (SDSS). Built with Streamlit interface featuring multiple ML models including Random Forest, XGBoost, and LightGBM for accurate stellar classification.',
    image: './images/Projects/AstroClassify_Screenshot.png',
    tags: ['Machine Learning', 'Astronomy', 'Classification', 'Streamlit', 'Data Science'],
    technologies: [
      'Python 3.x',
      'Streamlit',
      'Scikit-learn',
      'XGBoost',
      'LightGBM',
      'Pandas',
      'NumPy',
      'Matplotlib',
    ],
    features: [
      'Upload and process astronomical observation data (CSV)',
      'Automatic data preprocessing pipeline',
      'Multiple ML model selection (Random Forest, XGBoost, LightGBM)',
      'Interactive classification visualizations',
      'Confusion matrix and classification reports',
      'Export prediction results',
      'Real-time celestial object classification',
    ],
    category: 'Machine Learning',
    status: 'Completed',
    year: 2024,
    duration: '2 months',
    role: 'ML Developer',
    teamSize: 2,
    githubUrl: 'https://github.com/Fauzan-A25/AstroClassify',
    demoUrl: null,
    videoUrl: null,
    featured: true,
    highlights: [
      'Trained on SDSS spectral observation dataset',
      'Three-class classification: GALAXY, STAR, and QSO (Quasar)',
      'Implemented ensemble learning with multiple optimized models',
      'Comprehensive model evaluation with confusion matrices and reports',
      'Interactive Streamlit dashboard for astronomy enthusiasts and researchers',
    ],
  }
];

export const skills = {
  programming: [
    {
      name: 'Python',
      icon: 'bi-file-code',
      color: '#3776AB',
      yearsOfExperience: 2,
      description: 'Machine Learning, Data Analysis, Backend Development',
      projects: ['CSRNet Crowd Counting', 'FindIT2025', 'ML Pipeline', 'Data Science Portfolio']
    },
    {
      name: 'JavaScript',
      icon: 'bi-braces',
      color: '#F7DF1E',
      yearsOfExperience: 1,
      description: 'React, Node.js, Full-stack Web Development',
      projects: ['Portfolio Website', 'E-commerce Dashboard', 'Real-time Chat App']
    },
    {
      name: 'Java',
      icon: 'bi-cup-hot',
      color: '#007396',
      yearsOfExperience: 1,
      description: 'OOP, Spring Boot, Android Development',
      projects: ['Mobile App', 'Backend API', 'University Projects']
    },
    {
      name: 'SQL',
      icon: 'bi-database',
      color: '#4479A1',
      yearsOfExperience: 2,
      description: 'PostgreSQL, MySQL, Database Design & Optimization',
      projects: ['E-commerce Database', 'Analytics Dashboard', 'Supabase Integration']
    }
  ],
  
  dataScience: [
    {
      name: 'TensorFlow',
      icon: 'bi-diagram-3',
      color: '#FF6F00',
      yearsOfExperience: 2,
      description: 'Deep Learning, Computer Vision, Model Training',
      projects: ['CSRNet Implementation', 'Image Classification', 'Neural Networks']
    },
    {
      name: 'PyTorch',
      icon: 'bi-lightning',
      color: '#EE4C2C',
      yearsOfExperience: 2,
      description: 'Research Projects, Model Fine-tuning',
      projects: ['Crowd Counting Research', 'Transfer Learning']
    },
    {
      name: 'Pandas & NumPy',
      icon: 'bi-table',
      color: '#150458',
      yearsOfExperience: 2,
      description: 'Data Manipulation, Statistical Analysis',
      projects: ['Data Preprocessing Pipeline', 'Analytics Tools', 'Research Analysis']
    },
    {
      name: 'Scikit-learn',
      icon: 'bi-graph-up',
      color: '#F7931E',
      yearsOfExperience: 2,
      description: 'Classical ML, Model Evaluation, Feature Engineering',
      projects: ['Prediction Models', 'Classification Tasks', 'Academic Projects']
    }
  ],
  
  tools: [
    {
      name: 'Git & GitHub',
      icon: 'bi-git',
      color: '#F05032',
      yearsOfExperience: 3,
      description: 'Version Control, Collaboration, CI/CD',
      projects: ['All Projects', 'Open Source Contributions']
    },
    {
      name: 'React',
      icon: 'bi-bootstrap',
      color: '#61DAFB',
      yearsOfExperience: 1,
      description: 'Component Architecture, Hooks, State Management',
      projects: ['Portfolio Website', 'Web Applications', 'UI Components']
    },
    {
      name: 'Docker',
      icon: 'bi-box-seam',
      color: '#2496ED',
      yearsOfExperience: 1,
      description: 'Containerization, Deployment, Environment Setup',
      projects: ['ML Model Deployment', 'Development Environments']
    },
    {
      name: 'Jupyter Notebook',
      icon: 'bi-journal-code',
      color: '#F37626',
      yearsOfExperience: 2,
      description: 'Data Analysis, Research Documentation, Prototyping',
      projects: ['Data Science Projects', 'Research Experiments', 'Tutorials']
    }
  ],
  
  soft: [
    {
      name: 'Problem Solving',
      icon: 'bi-lightbulb',
      color: '#FFD700',
      yearsOfExperience: 3,
      description: 'Analytical thinking, Algorithm design, Debugging',
      projects: ['All Technical Projects']
    },
    {
      name: 'Research & Analysis',
      icon: 'bi-search',
      color: '#9C27B0',
      yearsOfExperience: 2,
      description: 'Academic research, Literature review, Data interpretation',
      projects: ['Academic Papers', 'Research Projects', 'Journal Analysis']
    },
    {
      name: 'Documentation',
      icon: 'bi-file-text',
      color: '#00BCD4',
      yearsOfExperience: 3,
      description: 'Technical writing, Code documentation, README creation',
      projects: ['GitHub Projects', 'Technical Reports', 'API Documentation']
    },
    {
      name: 'Team Collaboration',
      icon: 'bi-people',
      color: '#4CAF50',
      yearsOfExperience: 4,
      description: 'Agile methodologies, Code reviews, Communication',
      projects: ['Group Projects', 'Open Source', 'Academic Teams']
    }
  ]
};

export const experiences = [
  {
    id: 1,
    title: 'Data Science Intern',
    company: 'Tech Company XYZ',
    location: 'Jakarta, Indonesia',
    period: 'Jun 2024 - Aug 2024',
    duration: '3 months',
    type: 'Internship',
    description:
      'Worked on machine learning projects and data analysis tasks, contributing to product recommendation systems.',
    responsibilities: [
      'Developed ML models for product recommendations',
      'Performed exploratory data analysis on customer behavior',
      'Collaborated with senior data scientists on feature engineering',
      'Created data visualizations for stakeholder presentations',
    ],
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'SQL', 'Tableau'],
    achievements: [
      'Improved recommendation accuracy by 15%',
      'Automated data preprocessing pipeline',
    ],
  },
  {
    id: 2,
    title: 'Research Assistant',
    company: 'Telkom University',
    location: 'Bandung, Indonesia',
    period: 'Jan 2024 - Present',
    duration: 'Ongoing',
    type: 'Part-time',
    description:
      'Assisting in research projects related to computer vision and deep learning applications.',
    responsibilities: [
      'Conducted literature reviews on CV and DL',
      'Implemented research papers',
      'Collected and preprocessed datasets',
      'Documented experimental results',
    ],
    technologies: ['Python', 'PyTorch', 'OpenCV', 'NumPy'],
    achievements: [
      'Published 1 conference paper',
      'Developed novel data augmentation technique',
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: 'Bachelor of Data Science',
    institution: 'Telkom University',
    location: 'Bandung, Indonesia',
    period: '2023 - Present',
    gpa: '3.8 / 4.0',
    status: 'In Progress',
    relevantCourses: [
      'Machine Learning',
      'Deep Learning',
      'Statistical Analysis',
      'Data Mining',
      'Big Data Analytics',
      'Natural Language Processing',
    ],
    achievements: [
      'Dean\'s List (2023, 2024)',
      'Best Student Project Award 2024',
      'Academic Excellence Scholarship',
    ],
  },
];

export const certifications = [
  {
    id: 1,
    name: 'Machine Learning Specialization',
    issuer: 'Coursera - Stanford University',
    date: 'Dec 2023',
    credentialId: 'ABC123XYZ',
    url: 'https://coursera.org/verify/ABC123XYZ',
  },
  {
    id: 2,
    name: 'Deep Learning Specialization',
    issuer: 'Coursera - deeplearning.ai',
    date: 'Mar 2024',
    credentialId: 'DEF456UVW',
    url: 'https://coursera.org/verify/DEF456UVW',
  },
  {
    id: 3,
    name: 'Data Science Professional Certificate',
    issuer: 'IBM',
    date: 'Jun 2024',
    credentialId: 'GHI789RST',
    url: 'https://ibm.com/verify/GHI789RST',
  },
];

export const achievements = [
  {
    id: 1,
    title: '2nd Place - Data Science Competition',
    event: 'National Data Science Challenge 2024',
    date: 'Aug 2024',
    description: 'Competed against 100+ teams in predictive modeling challenge',
  },
  {
    id: 2,
    title: 'Best Project Award',
    event: 'Telkom University Academic Expo',
    date: 'Dec 2023',
    description: 'Awarded for innovative ML application in healthcare',
  },
  {
    id: 3,
    title: 'Top 10 Finalist',
    event: 'Hackathon Indonesia 2024',
    date: 'May 2024',
    description: 'Developed AI-powered solution for smart city initiative',
  },
];

export const stats = [
  { icon: 'bi-award', value: '3.8+', label: 'GPA', color: '#00d4aa' },
  { icon: 'bi-code-slash', value: '15+', label: 'Projects', color: '#00a8e8' },
  { icon: 'bi-trophy', value: '5+', label: 'Competitions', color: '#7b2cbf' },
  { icon: 'bi-people', value: '100%', label: 'Team Work', color: '#ff006e' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Dr. John Doe',
    position: 'Professor at Telkom University',
    avatar: '/images/testimonials/john-doe.jpg',
    rating: 5,
    text: 'Fauzan is an exceptional student with strong analytical skills and dedication to learning. His projects demonstrate deep understanding of data science concepts.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Data Science Manager at Tech Corp',
    avatar: '/images/testimonials/jane-smith.jpg',
    rating: 5,
    text: 'During his internship, Fauzan showed remarkable problem-solving abilities and quickly adapted to our tech stack. Highly recommended!',
  },
];

// Navigation links
export const navLinks = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

// Filter categories for projects
export const projectCategories = [
  'All',
  'Machine Learning',
  'Data Science',
  'Computer Vision',
  'Natural Language Processing',
  'Data Visualization',
];

// Contact form configuration
export const contactFormConfig = {
  emailJsServiceId: 'YOUR_SERVICE_ID',
  emailJsTemplateId: 'YOUR_TEMPLATE_ID',
  emailJsPublicKey: 'YOUR_PUBLIC_KEY',
};

export default {
  personalInfo,
  socialLinks,
  projects,
  skills,
  experiences,
  education,
  certifications,
  achievements,
  stats,
  testimonials,
  navLinks,
  projectCategories,
  contactFormConfig,
};
