import { BellPlus, BookText, Briefcase, Brush, Code, Code2, CodeSquare, Database, Globe, Home, Inbox, Mail, Palette, PanelsTopLeft, Phone, Smartphone, UserRound, UsersRound, Wrench, Zap } from "lucide-react";


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "About Me",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Skills",
        icon: <BookText size={20} />,
        link: "#services",
    },
    {
        id: 4,
        title: "Proyectos",
        icon: <CodeSquare size={20} />,
        link: "#portfolio",
    },
    {
        id: 5,
        title: "Contacto",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];


export const dataRRSS = [
    {
        id: 1,
        name: "GitHub",
        url: "img/icons/github.svg",
        link: "",
    },
    {
        id: 2,
        name: "Linkedin",
        url: "img/icons/linkedin.svg",
        link: "",
    },
    {
        id: 3,
        name: "claudia.diezsan@gmail.com",
        url: "img/icons/email.svg",
        link: "",
    },
];


export const dataAboutGoals = [
    {
        id: 1,
        name: "Experiencia",
        icon: <Briefcase />,
        description: "+4 años de experiencia",
    },
    {
        id: 2,
        name: "Clientes",
        icon: <UsersRound />,
        description: "+200 clientes satisfechos",
    },
    {
        id: 3,
        name: "Proyectos",
        icon: <Wrench />,
        description: "+50 completados",
    },
];


export const dataAboutExperience = [
    {
      id: 1,
      company: 'We Accom',
      position: 'Front-End Developer',
      period: '2022 - Presente',
      location: 'Madrid, España',
      description: 'Lidero el desarrollo de aplicaciones React complejas, implementando arquitecturas escalables y mejorando la experiencia de usuario en un 40%.',
      logo: '/img/accom.png',
      technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL']
    },
    {
      id:2,
      company: 'Ucademy',
      position: 'Junior Front-End Developer',
      period: '2021 - 2022',
      location: 'Madrid, España',
      description: 'Desarrollé interfaces de usuario modernas para startups fintech, colaborando estrechamente con equipos de diseño UX/UI y backend.',
      logo: '/img/ucademy.webp',
      technologies: ['Vue.js', 'JavaScript', 'SASS', 'REST APIs']
    },
    {
      id:3,
      company: 'Codenotch',
      position: 'Student Full-Stack Developer',
      period: '2020 - 2020',
      location: 'Madrid, España',
      description: 'Comencé mi carrera desarrollando sitios web responsive y landing pages, aprendiendo las mejores prácticas de desarrollo web moderno.',
      logo: '/img/codenotch.jpeg',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap']
    }
];


export const dataSlider = [
    {
        id: 1,
        url: "/slider-1.jpg",
    },
    {
        id: 2,
        url: "/slider-2.jpg",
    },
    {
        id: 3,
        url: "/slider-3.jpg",
    },
    {
        id: 4,
        url: "/slider-4.jpg",
    },
]


export const dataPortfolio = [
     {
      title: 'E-Commerce Dashboard',
      description: 'Panel de administración completo para tienda online con gestión de productos, pedidos y análisis en tiempo real.',
      image: '/img/proyectos/landing-jazztel.png',
      videoUrl: 'https://example.com/video1',
      githubUrl: 'https://github.com/claudia/ecommerce-dashboard',
      category: 'Web App',
      year: '2024'
    },
    {
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con funcionalidades avanzadas como colaboración en tiempo real y notificaciones.',
      image: '/img/proyectos/calculadora-dkv.png',
      videoUrl: 'https://example.com/video2',
      githubUrl: 'https://github.com/claudia/task-manager',
      category: 'Productivity',
      year: '2024'
    },
    {
      title: 'Weather Forecast App',
      description: 'Aplicación del clima con diseño moderno, mapas interactivos y pronósticos detallados de múltiples ubicaciones.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://example.com/video3',
      githubUrl: 'https://github.com/claudia/weather-app',
      category: 'Mobile App',
      year: '2023'
    },
    {
      title: 'Social Media Platform',
      description: 'Red social con feed en tiempo real, sistema de mensajería, notificaciones push y modo offline.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://example.com/video4',
      githubUrl: 'https://github.com/claudia/social-platform',
      category: 'Social',
      year: '2024'
    },
    {
      title: 'Learning Management System',
      description: 'Plataforma educativa con cursos interactivos, sistema de calificaciones y panel de progreso estudiantil.',
      image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoUrl: 'https://example.com/video5',
      githubUrl: 'https://github.com/claudia/lms-platform',
      category: 'Education',
      year: '2023'
    },
    {
      title: 'Portfolio Website',
      description: 'Sitio web personal con animaciones avanzadas, modo oscuro/claro y optimización SEO completa.',
      image: '/img/proyectos/portfolio.png',
      videoUrl: 'https://example.com/video6',
      githubUrl: 'https://github.com/claudia/portfolio',
      category: 'Portfolio',
      year: '2024'
    }
];


export const dataSkills = [
    {
        title: 'Frontend Frameworks',
        icon: <Code size={24} />,
        skills: [
        { name: 'React', level: 95, color: 'bg-blue-500' },
        { name: 'Vue.js', level: 85, color: 'bg-green-500' },
        { name: 'Angular', level: 75, color: 'bg-red-500' },
        { name: 'Next.js', level: 90, color: 'bg-gray-700' }
        ]
    },
    {
        title: 'Lenguajes',
        icon: <Zap size={24} />,
        skills: [
        { name: 'TypeScript', level: 90, color: 'bg-blue-600' },
        { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
        { name: 'HTML5', level: 98, color: 'bg-orange-500' },
        { name: 'CSS3', level: 95, color: 'bg-blue-400' }
        ]
    },
    {
        title: 'Herramientas & Diseño',
        icon: <Palette size={24} />,
        skills: [
        { name: 'Tailwind CSS', level: 92, color: 'bg-teal-500' },
        { name: 'SASS/SCSS', level: 88, color: 'bg-pink-500' },
        { name: 'Figma', level: 80, color: 'bg-purple-500' },
        { name: 'Adobe XD', level: 75, color: 'bg-pink-600' }
        ]
    },
    {
        title: 'Backend & APIs',
        icon: <Database size={24} />,
        skills: [
        { name: 'REST APIs', level: 90, color: 'bg-green-500' },
        { name: 'GraphQL', level: 80, color: 'bg-pink-500' },
        { name: 'Node.js', level: 75, color: 'bg-green-600' },
        { name: 'Firebase', level: 85, color: 'bg-orange-500' }
        ]
    },
    {
        title: 'DevOps & Tools',
        icon: <Globe size={24} />,
        skills: [
        { name: 'Git', level: 92, color: 'bg-orange-600' },
        { name: 'Webpack', level: 80, color: 'bg-blue-500' },
        { name: 'Docker', level: 70, color: 'bg-blue-600' },
        { name: 'AWS', level: 65, color: 'bg-yellow-600' }
        ]
    },
    {
        title: 'Mobile & Testing',
        icon: <Smartphone size={24} />,
        skills: [
        { name: 'React Native', level: 80, color: 'bg-blue-500' },
        { name: 'PWA', level: 85, color: 'bg-purple-500' },
        { name: 'Jest', level: 78, color: 'bg-red-500' },
        { name: 'Cypress', level: 72, color: 'bg-green-500' }
        ]
    }
];


export const dataServices = [
    {
        id: 1,
        title: "Código Limpio",
        url: "/icons/codigo.png",
        name: "Escribo código mantenible, bien documentado y siguiendo las mejores prácticas de desarrollo para facilitar la colaboración en equipo.",
    },
    {
        id: 2,
        title: "Diseño Responsive",
        url: "/icons/movil.png",
        name: "Creo interfaces que se adaptan perfectamente a cualquier dispositivo, garantizando una experiencia óptima en móvil, tablet y desktop.",
    },
    {
        id: 3,
        title: "Seguridad & Testing",
        url: "/icons/proteger.png",
        name: "Implemento medidas de seguridad frontend, validaciones robustas y testing automatizado para garantizar aplicaciones confiables.",
    },
        {
        id: 4,
        title: "Escalabilidad",
        url: "/icons/crecer.png",
        name: "Desarrollo aplicaciones con arquitecturas modulares y escalables que crecen con las necesidades del negocio a largo plazo.",
    },
        {
        id: 5,
        title: "Conexión a APIs",
        url: "/icons/api.png",
        name: "Integro aplicaciones frontend con APIs REST y GraphQL, manejando estados complejos y sincronización de datos en tiempo real.",
    },
        {
        id: 6,
        title: "Rendimiento Optimizado",
        url: "/icons/rayo.png",
        name: "Optimizo la velocidad de carga y la experiencia de usuario implementando técnicas avanzadas de performance y lazy loading.",
    },
];


export const dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "+34 677 66 66 33",
        link: "tel:+34677666633",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "github.com/ratasi",
        link: "github.com/ratasi",
        icon: <Code2 />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "email@email.com",
        link: "mailto:test@test.com",
        icon: <Inbox />,
    },
];
