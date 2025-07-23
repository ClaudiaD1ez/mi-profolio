import { BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench } from "lucide-react";
import { id } from "zod/v4/locales";


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
        url: "/icons/github.svg",
        link: "",
    },
    {
        id: 2,
        name: "Linkedin",
        url: "/icons/linkedin.svg",
        link: "",
    },
    {
        id: 3,
        name: "claudia.diezsan@gmail.com",
        url: "/icons/email.svg",
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
        name: "Accom",
        description: "Creación y mantenimiento de lading pages para lo que utilizamos tecnologías como PHP, JavaScript, jQuery...",
    },
    {
        id: 2,
        name: "Ucademy",
        description: "Participé en el desarrollo de su pagina web y plataforma de cursos on-line",
    },
    {
        id: 3,
        name: "Codenotch",
        description: " +4 años de experiencia+4 años de experiencia +4 años de experiencia+4 años de experiencia+4 años de experiencia",
    },
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
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Navegando Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Sitios Web Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Proyectos Web Dinámicos",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
];


export const dataSkills = [
    {
        id: 1,
        url: "/icons/icon-html.png",
        name: "HTML",
        subtitle: "Experimentado",
        value: 85,
    },
    {
        id: 2,
        url: "/icons/icon-css.png",
        name: "CSS",
        subtitle: "Intermedio",
        value: 85,
    },
    {
        id: 3,
        url: "/icons/icon-js.png",
        name: "JavaScript",
        subtitle: "Experimentado",
        value: 60,
    },
    {
        id: 4,
        url: "/icons/icon-sass.png",
        name: "Sass",
        subtitle: "Experimentado",
        value: 50,
    },
        {
        id: 5,
        url: "/icons/icon-php.png",
        name: "PHP",
        subtitle: "PHP",
        value: 50,
    },
    {
        id: 6,
        url: "/icons/icon-typescript.png",
        name: "Typescript",
        subtitle: "Typescript",
        value: 50,
    },
    {
        id: 7,
        url: "/icons/icon-react.png",
        name: "React",
        subtitle: "Experimentado",
        value: 60,
    },
        {
        id: 8,
        url: "/icons/icon-node.png",
        name: "NodeJS",
        subtitle: "Experimentado",
        value: 60,
    },
    {
        id: 9,
        url: "/icons/icon-docker.png",
        name: "Docker",
        subtitle: "Experimentado",
        value: 60,
    },
    {
        id: 10,
        url: "/icons/icon-vscode.png",
        name: "Visual Studio Code",
        subtitle: "Intermedio",
        value: 80,
    },
        {
        id: 11,
        url: "/icons/icon-git.png",
        name: "Git",
        subtitle: "Experimentado",
        value: 50,
    },
    {
        id: 12,
        url: "/icons/icon-figma.png",
        name: "Figma",
        subtitle: "Experimentado",
        value: 30,
    },
    {
        id: 13,
        url: "/icons/icon-bootstrap.png",
        name: "Bootstrap",
        subtitle: "Basic",
        value: 50,
    },
    {
        id: 14,
        url: "/icons/icon-tailwind.png",
        name: "Tailwind",
        subtitle: "Basic",
        value: 50,
    },
];


export const dataServices = [
    {
        id: 1,
        title: "Clean code",
        url: "/icons/codigo.png",
        features: [
            {
                name: "Estructura clara, código comentado y organizado para que sea fácil de actualizar.",
            },
        ],
    },
    {
        id: 2,
        title: "Responsive design",
        url: "/icons/movil.png",
        features: [
            {
                name: "Diseño pensado desde el celular hacia arriba, para cubrir a todos los usuarios.",
            },
        ],
    },
    {
        id: 3,
        title: "Buenas prácticas de seguridad",
        url: "/icons/proteger.png",
        features: [
            {
                name: "Manejo correcto de formularios, validación básica, HTTPS y CORS.",
            },
        ],
    },
        {
        id: 4,
        title: "Escalabilidad",
        url: "/icons/crecer.png",
        features: [
            {
                name: "Desarrollo basado en componentes con React para que tu sitio escale fácilmente.",
            },
        ],
    },
        {
        id: 5,
        title: "Integración de APIs",
        url: "/icons/api.png",
        features: [
            {
                name: "Mostrar datos externos",
            },
            {
                name: "APIs públicas o privadas.",
            },
        ],
    },
        {
        id: 6,
        title: "Aprendizaje constante",
        url: "/icons/cerebro.png",
        features: [
            {
                name: "Siempre explorando nuevas herramientas y buenas prácticas del desarrollo web.",
            },
        ],
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


export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile-1.jpeg",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile-3.jpeg",
    },
];