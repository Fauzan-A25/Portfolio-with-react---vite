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
  profileImage: './public/images/Fauzan.png'
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
    duration: '3 months',
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
    image: './images/projects/csrnet-crowd.png',
    thumbnail: '/images/projects/csrnet-thumb.png',
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
    status: 'In Progress',
    year: 2025,
    duration: '2 months',
    role: 'ML Engineer',
    teamSize: 1,
    githubUrl: 'https://github.com/Fauzan-A25/csrnet-crowd-counting',
    demoUrl: null,
    videoUrl: null,
    featured: true,
    highlights: [
      'Trained on ShanghaiTech dataset',
      'Achieved MAE of 68.2 on Part A',
      'Optimized learning rate to 1e-4',
    ],
  },
];

export const skills = {
  programming: [
    { name: 'Python', level: 90, icon: 'bi-file-code', color: '#3776AB' },
    { name: 'JavaScript', level: 85, icon: 'bi-braces', color: '#F7DF1E' },
    { name: 'SQL', level: 80, icon: 'bi-database', color: '#00758F' },
    { name: 'R', level: 75, icon: 'bi-bar-chart', color: '#276DC3' },
    { name: 'Java', level: 70, icon: 'bi-code-slash', color: '#007396' },
  ],
  dataScience: [
    { name: 'Machine Learning', level: 88, icon: 'bi-robot', color: '#00d4aa' },
    { name: 'Data Analysis', level: 90, icon: 'bi-graph-up', color: '#00a8e8' },
    { name: 'Statistics', level: 85, icon: 'bi-calculator', color: '#7b2cbf' },
    { name: 'Deep Learning', level: 80, icon: 'bi-cpu', color: '#ff006e' },
    { name: 'Data Visualization', level: 87, icon: 'bi-pie-chart', color: '#fb5607' },
  ],
  tools: [
    { name: 'TensorFlow', level: 85, icon: 'bi-gear', color: '#FF6F00' },
    { name: 'Pandas', level: 90, icon: 'bi-table', color: '#150458' },
    { name: 'Scikit-learn', level: 88, icon: 'bi-diagram-3', color: '#F7931E' },
    { name: 'Streamlit', level: 85, icon: 'bi-window', color: '#FF4B4B' },
    { name: 'PyTorch', level: 82, icon: 'bi-lightning', color: '#EE4C2C' },
    { name: 'Git', level: 88, icon: 'bi-git', color: '#F05032' },
  ],
  soft: [
    { name: 'Problem Solving', level: 92, icon: 'bi-puzzle' },
    { name: 'Team Collaboration', level: 88, icon: 'bi-people' },
    { name: 'Communication', level: 85, icon: 'bi-chat-dots' },
    { name: 'Critical Thinking', level: 90, icon: 'bi-lightbulb' },
  ],
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
