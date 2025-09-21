import { BookText, Briefcase, Brush, Code, Code2, CodeSquare, Database, Globe, Home, Inbox, Mail, Palette, Phone, Smartphone, UserRound, UsersRound, Wrench, Zap } from "lucide-react";


export const itemsNavbar = [
    {
        id: 1,
        title: "GitHub",
        icon: <UserRound size={20} />,
        link: "#experience",
    },
        {
        id: 2,
        title: "Proyectos",
        icon: <CodeSquare size={20} />,
        link: "#projects",
    },
    {
        id: 3,
        title: "Skills",
        icon: <BookText size={20} />,
        link: "#skills",
    },
];


export const dataRRSS = [
    {
        id: 1,
        name: "GitHub",
        icon: "img/icons/github.svg",
        link: "https://github.com/ClaudiaD1ez",
    },
    {
        id: 2,
        name: "Linkedin",
        icon: "img/icons/linkedin.svg",
        link: "https://www.linkedin.com/in/claudia-d%C3%ADez-s%C3%A1nchez-510632240/",
    },
    {
        id: 3,
        name: "claudia.diezsan@gmail.com",
        icon: "img/icons/email.svg",
        link: "mailto:claudia.diezsan@gmail.com",
    },
        {
        id: 3,
        name: "telefono",
        icon: "img/icons/phone.svg",
        link: "tel:+34650347503",
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
      description: 'En esta agencia, trabajé en el desarrollo de landing pages optimizadas para conversión de grandes marcas como Jazztel, MásMóvil y Sanitas. El modelo “end-to-end” implicaba participar en todo el proceso: desde la maquetación y desarrollo frontend, hasta la optimización del rendimiento y la integración de formularios de captación. Estas páginas se desarrollaron siguiendo principios de UX/UI, diseño responsivo y buenas prácticas de accesibilidad y la realización de test A/B para mejorar la tasa de conversión.',
      logo: '/img/accom.png',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Webpack', 'jQuery', 'Bootstrap', 'Git']
    },
    {
      id:2,
      company: 'Ucademy',
      position: 'Junior Front-End Developer',
      period: '2021 - 2022',
      location: 'Madrid, España',
      description: 'Formé parte del equipo encargado de la creación y optimización de las páginas de formaciones de Ucademy, una plataforma educativa online. Utilizando WordPress como CMS y aplicando conocimientos de PHP básico para personalizaciones específicas, garantizando una navegación clara, una estructura optimizada para SEO y una experiencia de usuario fluida.',
      logo: '/img/ucademy.webp',
      technologies: ['WordPress', 'PHP', 'HTML', 'CSS']
    },
    {
      id:3,
      company: 'Codenotch',
      position: 'Student Full-Stack Developer',
      period: '2020 - 2020',
      location: 'Madrid, España',
      description: 'Completé un bootcamp intensivo en desarrollo web Full-Stack, adquiriendo una base sólida en los lenguajes y herramientas clave del sector. En el área de frontend, trabajé con HTML5, CSS3, JavaScript y TypeScript, así como con librerías y frameworks que facilitan la creación de interfaces dinámicas y responsivas. En backend, aprendí a desarrollar aplicaciones con Node.js y a gestionar bases de datos relacionales y no relacionales (MySQL y MongoDB). Durante el programa, desarrollé proyectos prácticos de principio a fin, lo que me permitió entender el ciclo completo de desarrollo y aplicar metodologías ágiles.',
      logo: '/img/codenotch.jpeg',
      technologies: ['HTML5', 'CSS3', 'SASS', 'JavaScript', 'Node.js', 'Angular', 'ReactJS', 'MySQL', 'MongoDB', 'Git']
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
        id: 1,
        title: 'Landing de MasMovil',
        description: 'Landing page orientada a la captación de clientes para servicios de telecomunicaciones, con formulario destacado en el banner y un tarificador de precios dinámico e interactivo, desarrollado para calcular en tiempo real las diferentes combinaciones de servicios (internet, telefonía fija, líneas móviles, TV u opciones adicionales).',
        image: '/img/proyectos/landing-jazztel.png',
        videoUrl: 'https://example.com/video1',
        // githubUrl: 'https://github.com/claudia/ecommerce-dashboard',
        category: 'Web App',
        year: '2024'
    },
        {
        id: 2,
        title: 'Tarificador - DKV',
        description: 'Herramienta web interactiva para el cálculo de precios y promociones en tiempo real. El sistema permite al usuario combinar distintos servicios y visualizar de inmediato el coste final con las promociones aplicables. Implementé toda la lógica de cálculo dinámico en el frontend para garantizar respuestas instantáneas, así como una maquetación responsive que asegura una experiencia fluida en móviles, tablets y escritorio.',
        image: '/img/proyectos/calculadora-dkv.png',
        videoUrl: 'https://example.com/video2',
        // githubUrl: 'https://github.com/claudia/task-manager',
        category: 'Tarificador',
        year: '2025'
    },
    {
        id: 3,
        title: 'Portfolio Website con React',
        description: 'Desarrollo de mi propio portfolio como aplicación SPA utilizando React, Sass y TypeScript. El proyecto está estructurado con un enfoque modular y escalable. Implementé animaciones suaves y transiciones fluidas para mejorar la experiencia de usuario, así como secciones dinámicas. Además, se integraron componentes reutilizables y un sistema de estilos basado en Sass para garantizar consistencia visual y flexibilidad en el diseño.',
        image: '/img/proyectos/portfolio.png',
        videoUrl: 'https://example.com/video6',
        githubUrl: 'https://github.com/claudia/portfolio',
        category: 'Portfolio',
        year: '2025'
    },
    // {
    //     id: 4,
    //     title: 'Social Media Platform',
    //     description: 'Red social con feed en tiempo real, sistema de mensajería, notificaciones push y modo offline.',
    //     image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    //     videoUrl: 'https://example.com/video4',
    //     githubUrl: 'https://github.com/claudia/social-platform',
    //     category: 'Social',
    //     year: '2024'
    // },
    // {
    //     id: 5,
    //     title: 'Learning Management System',
    //     description: 'Plataforma educativa con cursos interactivos, sistema de calificaciones y panel de progreso estudiantil.',
    //     image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=800',
    //     videoUrl: 'https://example.com/video5',
    //     githubUrl: 'https://github.com/claudia/lms-platform',
    //     category: 'Education',
    //     year: '2023'
    // },
    // {
    //     id: 6,
    //     title: 'Weather Forecast App',
    //     description: 'Aplicación del clima con diseño moderno, mapas interactivos y pronósticos detallados de múltiples ubicaciones.',
    //     image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    //     videoUrl: 'https://example.com/video3',
    //     githubUrl: 'https://github.com/claudia/weather-app',
    //     category: 'Mobile App',
    //     year: '2023'
    // }
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


export interface Skill {
  name: string;
  level: number;
  category: string;
  logo: string;
  color: string;
}
export const allSkills: Skill[] = [
  // Frontend Core
  { name: 'JavaScript', level: 85, category: 'Frontend Core', logo: '/img/icons/skills/icon-js.png', color: '#F7DF1E' },
  { name: 'TypeScript', level: 70, category: 'Frontend Core', logo: '/img/icons/skills/icon-typescript.png', color: '#3178C6' },
  { name: 'HTML5', level: 95, category: 'Frontend Core', logo: '/img/icons/skills/icon-html.png', color: '#E34F26' },
  { name: 'CSS3', level: 92, category: 'Frontend Core', logo: '/img/icons/skills/icon-css.png', color: '#1572B6' },
  { name: 'PHP', level: 75, category: 'Frontend Core', logo: '/img/icons/skills/icon-php.png', color: '#1572B6' },
  
  // Frontend Frameworks
  { name: 'React', level: 80, category: 'Frontend Frameworks', logo: '/img/icons/skills/icon-react.png', color: '#61DAFB' },
  { name: 'Angular', level: 40, category: 'Frontend Frameworks', logo: '/img/icons/skills/icon-angular.png', color: '#DD0031' },
  { name: 'Next.js', level: 50, category: 'Frontend Frameworks', logo: '/img/icons/skills/icon-next.png', color: '#000000' },
  
  // Frontend Styling
  { name: 'SASS/SCSS', level: 80, category: 'Frontend Styling', logo: '/img/icons/skills/icon-sass.png', color: '#CC6699' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend Styling', logo: '/img/icons/skills/icon-tailwind.png', color: '#06B6D4' },
  { name: 'Bootstrap', level: 95, category: 'Frontend Styling', logo: '/img/icons/skills/icon-bootstrap.png', color: '#7952B3' },
  
  // Backend
  { name: 'Node.js', level: 83, category: 'Backend', logo: '/img/icons/skills/icon-node.png', color: '#339933' },
  
  // Tools
  { name: 'Git', level: 85, category: 'Tools', logo: '/img/icons/skills/icon-git.png', color: '#F05032' },
  { name: 'Docker', level: 77, category: 'Tools', logo: '/img/icons/skills/icon-docker.png', color: '#2496ED' },
  { name: 'Visual', level: 95, category: 'Tools', logo: '/img/icons/skills/icon-vscode.png', color: '#2496ED' },
  { name: 'wordpress', level: 71, category: 'Tools', logo: '/img/icons/skills/icon-wordpress.png', color: '#2496ED' },

];
export const categories = ['Frontend Core', 'Frontend Frameworks', 'Frontend Styling', 'Tools'];
export const skillLevels = {
  ADVANCED: { min: 85, label: 'Avanzado', color: '#f97316' },
  INTERMEDIATE: { min: 75, label: 'Intermedio', color: '#fb923c' },
  LEARNING: { min: 0, label: 'Aprendiendo', color: '#3b82f6' }
};