import canteraLogo from '@/assets/images/cantera.webp';
import prestigeLogo from '@/assets/images/prestige.webp';
import sfaLogo from '@/assets/images/finanzas.webp';
import grupoLiasLogo from '@/assets/images/grupoLias.webp';
import companyDefaultLogo from '@/assets/images/defaultLogo.webp';

export const experience = [
  {
    id: 1,
    branding: {
      logo: canteraLogo,
      alt: 'Logo de cantera digital',
      link: 'https://canteradigital.io/',
      lightModeHelp: true,
    },
    employer: 'CANTERA DIGITAL',
    startDate: '2024/02/01',
    endDate: '2025/11/15',
    jobTitle: 'FULLSTACK DEVELOPER',
    descES: `Trabajar en Cantera Digital me dió la oportunidad de conocer y aprender una gran cantidad de tecnologías y conocimientos nuevos. La variedad de proyectos en la que estuve me permitió conocer diferentes entornos de trabajo, el último y más interesante me permitió trabajar con CI/CD, estuve muy de cerca atendiendo problemas de integración y despliegue consultando los logs del pipeline.
    Durante mi jornada estuve apoyando activamente con React tanto en TypeScript como en JavaScript, además de React Native un par de meses; contribuyendo al desarrollo de componentes reutilizables asegurando una buena experiencia de usuario y un buen rendimiento, manteniendo un código limpio y escalable. También tuve una participación constante en el desarrollo backend con Express y FastAPI utilizando bases de datos como PostgreSQL y MongoDB durante unos meses; generando REST API endpoints y documentando la Api con Swagger para facilitar su uso.`,
    descEn: `Working at Cantera Digital, gave me the opportunity to explore and learn a wide range of technologies and concepts. The variety of projects I was involved in allowed me to experience different work environments. The last and most interesting one gave me hands-on experience with CI/CD, where I closely handled intregation and deployment issues by reviewing pipeline logs.
    During my journey, I actively worked with React in both TypeScript and JavaScript, as well as React Native for a couple months. I helped building reusable components that ensured a smooth user experience and strong performance while maintaining a clean and scalable code. I also helped consistenly in backend development with Express and FastAPI, using databases such as PostgreSQL and MongoDB for a few months. My tasks included building REST API endpoints and documenting the API with Swagger to make it easier to use.
    `,
    tasks: [
      {
        id: 1,
        taskDescES:
          'Desarrollé interfaces modernas, responsivas y de alto valor asegurando una buena UX/UI.',
        taskDescEN:
          'Developed modern-responsive web sites ensuring a proper UI/UX.',
      },
      {
        id: 2,
        taskDescES: `Integré servicios de terceros como Stripe, OpenPay y Api's externas.`,
        taskDescEN: `Implemented third-party services like Stripe, OpenPay and external APIs.`,
      },
      {
        id: 3,
        taskDescES:
          'Definí estándares de código a lo largo del proyecto y en participé en la revisión de pull requests.',
        taskDescEN:
          'Defined code standards across the project and participated in pull request reviews.',
      },
      {
        id: 4,
        taskDescES: 'Diseñé y estructuré tablas/modelos para la base de datos.',
        taskDescEN: 'Designed and structured the database tables.',
      },
      {
        id: 5,
        taskDescES: 'Desarrollé e implementé REST API endpoints.',
        taskDescEN: 'Developed and implemented REST API endpoints.',
      },
      {
        id: 6,
        taskDescES:
          'Utilicé librerías populares para la administración de datos, formularios y estados como zustand/redux, tanstack query, react-hook-form, etc.',
        taskDescEN:
          'Worked with common libraries for data, form and state management such as zustand/redux, tanstack query, context api, react-hook-form, etc.',
      },
      {
        id: 7,
        taskDescES: 'Trabajé Git para el control de versiones.',
        taskDescEN: 'Worked with Git for versioning control.',
      },
      {
        id: 8,
        taskDescES: 'Contribuí en la elaboración de documentación técnica.',
        taskDescEN: 'Helped writing technical documentation.',
      },
      {
        id: 9,
        taskDescES:
          'Trabajé con la metodología SCRUM y Azure DevOps para la gestión de actividades.',
        taskDescEN:
          'Worked with SCRUM methodology and Azure DevOps for task management.',
      },
    ],
  },
  {
    id: 2,
    branding: {
      logo: companyDefaultLogo,
      alt: 'Logo de clínica oftalmológica',
      link: '',
      lightModeHelp: false,
    },
    employer: 'OPTICA',
    startDate: '2023/09/01',
    endDate: '2024/02/01',
    jobTitle: 'FREELANCE FULLSTACK DEVELOPER',
    descES: `Como desarrollador freelance, construí un sistema administrativo hecho a la medida para una óptica. Estuve enfocado mayormente en la parte del backend, donde estuve modelando la base de datos con PostgreSQL, implementando autenticación con JWT, desarrollando REST API endpoints y middlewares haciendo uso de Express y TypeScript en conjunto de librerías populares como Prisma y Zod. Además estuve generando la imagen de docker y realizando las configuraciones necesarias para el correcto funcionamiento en diferentes ambientes.
    También estuve apoyando en el desarrollo frontend mejorando algunos componentes para optimizar las consultas realizadas y mejorar la experiencia de usuario, además de estar involucrado continuamente en la creación del diseño para el sitio web usando herramientas como Figma.
    `,
    descEn: `As a freelance developer, I built an administrative system from scratch based to the client's requirements. I was mainly focused on backend development, where I designed the database structure using PostgreSQL, implemented JWT-based authentication, and developed REST API endpoints and middlewares using Express and TypeScript, along with popular libraries such as Prisma and Zod. I also created the Docker image and configured it to ensure proper operation across different environments.
    I also developed and improved several frontend components to enhance the user experience and optimize the application performance by addressing data-fetching issues. Additionally, I was involved in designing the website layout using tools like Figma.  
    `,
    tasks: [
      {
        id: 1,
        taskDescES:
          'Optimicé las consultas realizadas y componentes asegurando un buen rendimiento y una mejor experiencia de usuario utilizando React.',
        taskDescEN:
          'Improved the user experience and application performance using React.',
      },
      {
        id: 2,
        taskDescES:
          'Diseñé y estructuré tablas/modelos para la base de datos utilizando PostgreSQL.',
        taskDescEN:
          'Designed the database structure from scratch using PostgreSQL.',
      },
      {
        id: 3,
        taskDescES:
          'Generé la imagen del proyecto y configuré Docker para asegurar un buen funcionamiento en diferentes ambientes.',
        taskDescEN:
          'Used and configured Docker to ensure proper operation across different environments.',
      },
      {
        id: 4,
        taskDescES:
          'Desarrollé REST API endpoints usando Express y TypeScript.',
        taskDescEN:
          'Developed REST API endpoints using Express and TypeScript.',
      },
      {
        id: 5,
        taskDescES: 'Utilicé librerías populares como Zod, Prisma, JWT, etc.',
        taskDescEN:
          'Worked with common libraries such as Zod, Prisma, Bcrypt, JWT, etc.',
      },
      {
        id: 6,
        taskDescES: 'Trabajé con Git para el control de versiones.',
        taskDescEN: 'Worked with Git for versioning control.',
      },
      {
        id: 7,
        taskDescES:
          'Participé en el proceso de diseño de interfaces para el sistema utilizando Figma.',
        taskDescEN: `Participated in the website's UI design using Figma.`,
      },
    ],
  },
  {
    id: 3,
    branding: {
      logo: prestigeLogo,
      alt: 'Logo de prestige english school',
      link: 'https://prestige-english.com/',
      lightModeHelp: false,
    },
    employer: 'PRESTIGE ENGLISH SCHOOL',
    startDate: '2023/06/15',
    endDate: '2023/09/28',
    jobTitle: 'FREELANCE SOFTWARE DEVELOPER',
    descES: `Como desarrollador de software freelance, instalé y configuré un repositorio digital mediante el software DSpace. Durante este proyecto fue vital la búsqueda y lectura de documentación para llevar a cabo una instalación y configuración limpia y fluida, así como para solventar los errores que se presentaban debido a diversos factores.
    Antes de realizar el pase a producción fue necesario hacer uso de máquinas virtuales en VMWare para simular el entorno y replicar el ambiente, asegurando que fuera lo más cercano posible y el despliegue fuera sencillo y seguro. También fue importante investigar y explorar alternativas para el DNS y el Hosting, asi como la configuración de estos en conjunto con el certificado SSL y el firewall. 
    `,
    descEn: `As a freelance software developer, I installed and configured a digital repository using the DSpace software. Throughout this project, extensive research and documentation review were essential to achieve a clean and smooth installation and configuration, as well as to resolve the issues that arose due to multiple factors.
    Before moving forward to production, it was necessary to use virtual machines with VMWare to simulate and replicate the target environment, ensuring it was as accurate as possible so that the deployment would be simple and secure. It was also important to research and explore alternatives for DNS and hosting, as well as configure them alongside the SSL certificate and firewall.
    `,
    tasks: [
      {
        id: 1,
        taskDescES:
          'Desarrollé scripts en python para optimizar la descarga, subida y categorización de libros, artículos y otros recursos.',
        taskDescEN:
          'Developed Python scripts to streamline the downloading, uploading and categorization of books and other resources.',
      },
      {
        id: 2,
        taskDescES:
          'Despliegue eficiente y seguro de la aplicación en el entorno productivo.',
        taskDescEN:
          'Efficient and secure application deployment in a production environment.',
      },
      {
        id: 3,
        taskDescES:
          'Apliqué las configuraciones necesarias para el DNS, SSL y firewall.',
        taskDescEN: 'Applied DNS, SSL and firewall configurations.',
      },
      {
        id: 4,
        taskDescES:
          'Instalé y configuré el backend y frontend de DSpace para su funcionamiento.',
        taskDescEN: `Installed and configured DSpace backend and frontend to ensure proper operation.`,
      },
      {
        id: 5,
        taskDescES:
          'Adapté el contenido y estilo del proyecto para alinearlo con las necesidades de la institución.',
        taskDescEN:
          'Tailored style and content following the school branding guidelines.',
      },
    ],
  },
  {
    id: 4,
    branding: {
      logo: sfaLogo,
      alt: 'Logo de secretaria de finanzas y administración de michoacán',
      link: 'https://secfinanzas.michoacan.gob.mx/',
      lightModeHelp: false,
    },
    employer: 'SECRETARÍA DE FINANZAS Y ADMINISTRACIÓN',
    startDate: '2023/01/05',
    endDate: '2023/06/05',
    jobTitle: 'FULLSTACK DEVELOPER',
    descES: `Estuve apoyando activamente en la actualización y migración del sistema para mejorar las operaciones del área financiera utilizando Laravel y React para el desarrollo del sitio web. Se hizo uso de la arquitectura Modelo Vista Controlador (MVC), dónde contribuí a la mejora e implementación de la autenticación así como en el desarrollo de interfaces.
    Tuve una participación continua en la migración de la base de datos de Access a MySQL, coordinando en conjunto con el equipo la transferencia de datos y la estructuración de los mismos. Además estuve involucrado en la definición de estándares de código y en la revisión de pull requests, garantizando la calidad y el cumplimiento de los requisitos del proyecto.
    `,
    descEn: `I actively supported the system's upgrade and migration to improve the financial department's operations, using Laravel and React for web development. Following the Model-View-Controller (MVC) architecture, I enhanced and implemented authentication features, as well as developed user interfaces.
    I was consistently involved in migrating the database from Access to MySQL, coordinating data transfer and restructuring alongside the team. I also defined code standards and participated reviewing pull requests, ensuring code quality and alignment with the project requirements. 
    `,
    tasks: [
      {
        id: 1,
        taskDescES:
          'Coordiné y ejecuté la migración de la base de datos de Access a MySQL.',
        taskDescEN:
          'Coordinated and executed the database migration from Access to MySQL.',
      },
      {
        id: 2,
        taskDescES: 'Utilicé la arquitectura Modelo Vista Controlador (MVC).',
        taskDescEN: 'Worked with the Model-View-Controller architecture.',
      },
      {
        id: 3,
        taskDescES:
          'Definí estándares de código dentro del proyecto y participé en revisión de pull requests.',
        taskDescEN:
          'Defined code standards across the project and participated in pull request reviews.',
      },
      {
        id: 4,
        taskDescES: 'Integré REST API endpoints de servicios externos.',
        taskDescEN: 'Implemented third-party REST API endpoints.',
      },
      {
        id: 5,
        taskDescES: 'Desarrollé el sitio web utilizando React y Laravel.',
        taskDescEN: 'Developed the website using React and Laravel.',
      },
      {
        id: 6,
        taskDescES: 'Trabajé con Git para el control de versiones.',
        taskDescEN: 'Worked with Git for versioning control.',
      },
      {
        id: 7,
        taskDescES: 'Trabajé con Jira para el seguimiento de tareas.',
        taskDescEN: 'Worked with Jira for task management.',
      },
    ],
  },
  {
    id: 5,
    branding: {
      logo: grupoLiasLogo,
      alt: 'Logo de grupo lias',
      link: 'https://www.facebook.com/GRUPOLIAS/',
      lightModeHelp: true,
    },
    employer: 'GRUPO LIAS',
    startDate: '2022/06/03',
    endDate: '2022/12/03',
    jobTitle: 'FULLSTACK DEVELOPER',
    descES: `Desarrollé un CMS (Content Management System) a la medida para una empresa de servicios técnico residenciales. Estuve involucrado durante todo el ciclo de vida del software, apoyando en la obtención y análisis de requerimientos, en la creación del diseño de interfaces para el sitio web usando Figma y desarrollé la aplicación web utilizando React y Django, además de diseñar la estructura de la base de datos utilizando SQLite. Configuré el DNS y realicé el despliegue de la aplicación en colaboración con el equipo, asegurando que cumpliera con los requisitos del cliente.
    `,
    descEn: `Developed a Content Management System based on client requirements for a residential technical services company. Throughout the software lifecycle, I supported requirements gathering and analysis, designed user interfaces for the website using Figma, and developed the web application using React and Django, while also designing the database structure from scratch with SQLite. I Configured the DNS and deployed the web application in collaboration with the team, ensuring it met client requirements.
    `,
    tasks: [
      {
        id: 1,
        taskDescES:
          'Diseñé la estructura de la base de datos utilizando SQLite de acuerdo a las especificaciones de software.',
        taskDescEN:
          'Designed the database structure from scratch using SQLite according to the software specifications.',
      },
      {
        id: 2,
        taskDescES:
          'Definí especificaciones de software de acuerdo a los requerimientos del cliente.',
        taskDescEN:
          'Defined software specifications according to the client requirements.',
      },
      {
        id: 3,
        taskDescES:
          'Desarrollé el frontend y backend utilizando React y Django.',
        taskDescEN: 'Developed the web application using React and Django.',
      },
      {
        id: 4,
        taskDescES:
          'Realicé configuraciones de DNS y desplegué la aplicación de acuerdo a los requerimientos del cliente.',
        taskDescEN:
          'Applied DNS configurations and deployed the web applications according to the client requirements.',
      },
      {
        id: 5,
        taskDescES: 'Trabajé con Git para el control de versiones.',
        taskDescEN: 'Worked with Git for versioning control.',
      },
      {
        id: 6,
        taskDescES: 'Trabajé con la metodología SCRUM.',
        taskDescEN: 'Worked with SCRUM methodology.',
      },
      {
        id: 7,
        taskDescES: 'Participé en el diseño de interfaces del sitio web.',
        taskDescEN: 'Collaborated in designing user interfaces using Figma.',
      },
    ],
  },
];
