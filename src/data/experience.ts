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
    endDate: '2025/11/14',
    jobTitle: 'FULLSTACK DEVELOPER',
    descES: `Trabajar en Cantera Digital me dio la oportunidad de conocer y aprender una gran cantidad de tecnologías y conocimientos nuevos. La variedad de proyectos en la que estuve me permitió conocer diferentes entornos de trabajo, el último y más interesante me permitió trabajar con CI/CD, aunque no fui yo propiamente quien lo configuró, estuve muy de cerca atendiendo problemas de integración y despliegue consultando los logs del pipeline.
    Durante mi jornada estuve apoyando mayormente en el desarrollo frontend con React tanto en TypeScript como en JavaScript, además de React Native un par de meses; contribuyendo al desarrollo de componentes reutilizables asegurando una buena experiencia de usuario y un buen rendimiento, manteniendo un código limpio y escalable. También tuve una participación activa en el desarrollo backend con Express y FastAPI utilizando bases de datos como MongoDB y PostgreSQL durante unos meses; generando REST API endpoints y documentando con Swagger para facilitar el uso de la API.`,
    descEn: `Currently working here, at an excellent software consulting company. This experience has allowed me to keep growing both technically and professionally. I've learned a lot from my teammates, and working closely with them has helped me strengthen my communication and problem-solving skills. The projects I've been involved in have mainly focused on CMS (Content Management System) platforms, where I've contributed to improving performance, enhancing user experience, and delivering scalable solutions tailored to the client needs. Lately I have also been involved in the backend development, creating REST API endpoints and ensuring a well-structured data model, as well as providing documentation using Swagger.`,
    tasks: [
      {
        id: 1,
        taskDescES:
          'Desarrollo de interfaces modernas, responsivas y de alto valor usando React.',
        taskDescEN: 'Develop responsive software interfaces.',
      },
      {
        id: 2,
        taskDescES: 'Consumo y desarrollo de REST API endpoints.',
        taskDescEN: 'Consume REST API endpoints.',
      },
      {
        id: 3,
        taskDescES:
          'Participar en la definición de estándares de código a lo largo del proyecto y en la revisión de pull requests.',
        taskDescEN: 'Consume REST API endpoints.',
      },
      {
        id: 4,
        taskDescES:
          'Uso de librerías para la administración de datos, formularios y estados como zustand/redux, tanstack query, react-hook-form, etc.',
        taskDescEN:
          'Usage of libraries for data, form handling and state management such as zustand/redux, tanstack query, context api, etc.',
      },
      {
        id: 5,
        taskDescES:
          'Uso de la metodología SCRUM y Azure DevOps para la gestión de actividades.',
        taskDescEN: 'Work with SCRUM methodology.',
      },
      {
        id: 6,
        taskDescES: 'Manejo de Git para el control de versiones.',
        taskDescEN: 'Work with versioning systems (GIT).',
      },
      {
        id: 7,
        taskDescES: `Integración de servicios de terceros como Stripe, OpenPay y Api's externas.`,
        taskDescEN: 'Third-party services integration.',
      },
      {
        id: 8,
        taskDescES: 'Elaboración de documentación técnica.',
        taskDescEN: 'Write technical documentation.',
      },
      {
        id: 9,
        taskDescES:
          'Diseño y estructuración de tablas/modelos en la base de datos.',
        taskDescEN: 'Data model design.',
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
    startDate: '2024/04/01',
    endDate: '2024/09/16',
    jobTitle: 'FULLSTACK DEVELOPER',
    descES: `Participé como desarrollador freelance en el desarollo de un sistema administrativo hecho a la medida para una óptica. Estuve enfocado mayormente en la parte del backend, donde estuve modelando la base de datos con PostgreSQL, implementando autenticación con JWT, desarrollando REST API endpoints y middlewares haciendo uso de Express y TypeScript en conjunto de librerías populares como Prisma y Zod. Además estuve generando la imagen de docker y realizando las configuraciones necesarias para el correcto funcionamiento en diferentes ambientes.
    También estuve apoyando en el desarrollo frontend mejorando algunos componentes para optimizar las consultas realizadas y mejorar la experiencia de usuario, además de estar involucrado continuamente en la creación del diseño para el sitio web usando herramientas como Figma.
    `,
    descEn: `Together with two teammates, we developed a web-based administrative system for an optical clinic, covering the entire software development process—from gathering requirements to deploying the system on a LAN network. The user interfaces were designed in Figma according to the client's requirements. 
    On the backend, we implemented basic authentication and data storage in a relational database using PostgreSQL, combined with Express and TypeScript.
    On the frontend, we built the user interfaces with React and JavaScript, leveraging the Material UI library for a consistent component management.
    In addition, the application was dockerized to streamline the production release, ensuring an environment as close as possible to development.`,
    tasks: [
      {
        id: 1,
        taskDescES: 'Diseño de interfaces de usuario para el sistema.',
        taskDescEN: 'Participate in the website UI design using Figma.',
      },
      {
        id: 2,
        taskDescES:
          'Desarrollo de REST API endpoints usando Express y TypeScript.',
        taskDescEN: 'Develop REST API endpoints using Express with TypeScript.',
      },
      {
        id: 3,
        taskDescES: 'Uso de librerías populares como Zod, Prisma, JWT, etc.',
        taskDescEN:
          'Usage of common libraries such as Zod, Prisma, Bcrypt, JWT, etc.',
      },
      {
        id: 4,
        taskDescES:
          'Optimización de consultas realizadas y mejora de componentes asegurando un buen rendimiento y una mejor experiencia de usuario utilizando React.',
        taskDescEN:
          'Paticipate in the frontend development by enhancing the components to improve the performance and UI/UX using React.',
      },
      {
        id: 5,
        taskDescES:
          'Generación de imagen del proyecto y configuración de Docker para el correcto funcionamiento en diferentes ambientes.',
        taskDescEN:
          'Docker usage and configuration to ensure work properly in different environments',
      },
      {
        id: 6,
        taskDescES:
          'Diseño y estructuración de tablas/modelos en la base de datos.',
        taskDescEN: 'Data model design using PostgreSQL.',
      },
      {
        id: 7,
        taskDescES: 'Manejo de Git para el control de versiones.',
        taskDescEN: 'Work with versioning systems (GIT).',
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
    endDate: '2023/10/28',
    jobTitle: 'FREELANCE SOFTWARE DEVELOPER',
    descES: `Participé como desarrollador freelance en la instalación y configuración de un repositorio digital mediante el software DSpace. Durante este proyecto fue vital la búsqueda y lectura de documentación para llevar a cabo la correcta instalación y configuración, así como solventar los errores que se presentaban debido a diversos factores. DSpace está hecho en Angular y SpringBoot, por lo que las configuraciones y modificaciones que se llevaron a cabo requirieron de conocimientos en estos frameworks.
    Antes de realizar el pase a producción fue necesario hacer uso de máquinas virtuales en VMWare para simular el entorno y replicar el ambiente, asegurando que fuera lo más cercano posible y el despliegue fuera sencillo y seguro. También fue importante investigar y explorar alternativas para el DNS y el Hosting, asi como la configuración de estos en conjunto con el certificado SSL y el firewall. 
    `,
    descEn: `This project was a freelance job, a big challenge, but also a great learning experience. I had to rely heavily on my self-learning skills, as I was
      unfamiliar with the software required by the client. This pushed me to dive deep into its documentation, even though it was outdated and certain steps varied between versions. To overcome this, I had to explore external resources such as community forums and technical articles.
      Throughout the project, I also strengthened my teamwork and time management skills by coordinating with others and ensuring we stayed on schedule. We used VMware to manage the environment carefully before moving everything into production. In the end, I was able to deliver a functional solution, overcoming technical and informational limitations, which helped the client move forward with their operations more efficiently.`,
    tasks: [
      {
        id: 1,
        taskDescES:
          'Instalación y configuración del backend y frontend de DSpace.',
        taskDescEN: `Install and configure DSpace backend and frontend for its proper operation.`,
      },
      {
        id: 2,
        taskDescES:
          'Personalización de estilos y contenido basado en los requerimientos e identidad de la escuela.',
        taskDescEN:
          'Customization of styles and content based on the school branding.',
      },
      {
        id: 3,
        taskDescES: 'Configuración de DNS, SSL y firewall.',
        taskDescEN: 'DNS, SSL and firewall configurations.',
      },
      {
        id: 4,
        taskDescES:
          'Lectura y exploración de documentación, foros, artículos y otros recursos externos.',
        taskDescEN:
          'Script development to download, upload and categorize books.',
      },
      {
        id: 5,
        taskDescES:
          'Desarrollo de scripts en python para descargar, subir y categorizar libros, artículos y otros recursos.',
        taskDescEN:
          'Script development to download, upload and categorize books.',
      },
      {
        id: 6,
        taskDescES: 'Despliegue de la aplicación.',
        taskDescEN: 'App deployment.',
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
    descES: `Apoyé activamente en la actualización y migración del sistema para mejorar las operaciones del área financiera utilizando Laravel para el desarrollo del sitio web. Se hizo uso de la arquitectura Modelo Vista Controlador (MVC), dónde contribuí a la mejora e implementación de la autenticación así como en el desarrollo de interfaces haciendo uso de la plantilla AdminLTE en conjunto con Bootstrap y JQuery.
    Tuve una participación continua en la migración de la base de datos de Access a MySQL, coordinando en conjunto con el equipo la transferencia de datos y la estructuración de los mismos. Además estuve involucrado en la definición de estándares de código y en la revisión de pull requests, garantizando la calidad y el cumplimiento de los requisitos del proyecto.
    `,
    descEn: `I participated in the system upgrade and migration to help improve the financial area's operations. I enhanced my knowledge of Laravel and its best practices,
      collaborating with the team by using Bootstrap and implementing AdminLTE with proper customization to meet the specific needs of the project. Through this process, I contributed to streamlining operations and enhancing the user interface, which ultimately improved the overall efficiency and user satisfaction in the financial department.`,
    tasks: [
      {
        id: 1,
        taskDescES:
          'Coordinación y ejecución de migración de datos de Access a MySQL.',
        taskDescEN: 'Migrate the database from Access to MySQL.',
      },
      {
        id: 2,
        taskDescES: 'Desarrollo frontend y backend utilizando Laravel.',
        taskDescEN:
          'Participate in the development of the website using Laravel.',
      },
      {
        id: 3,
        taskDescES: 'Uso de la arquitectura Modelo Vista Controlador (MVC).',
        taskDescEN:
          'Define code standards across the project and participate in pull request reviews.',
      },
      {
        id: 4,
        taskDescES:
          'Definición de estándares de código dentro del proyecto y participación en revisión de pull requests.',
        taskDescEN:
          'Define code standards across the project and participate in pull request reviews.',
      },
      {
        id: 5,
        taskDescES: 'Uso de Jira para el seguimiento de tareas.',
        taskDescEN: 'Work with Jira.',
      },
      {
        id: 6,
        taskDescES: 'Manejo de Git para el control de versiones.',
        taskDescEN: 'Work with versioning systems (GIT).',
      },
      {
        id: 7,
        taskDescES: 'Consumo de REST API endpoints de servicios externos.',
        taskDescEN: 'Consume third-party REST API endpoints.',
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
    startDate: '2022/01/03',
    endDate: '2022/06/03',
    jobTitle: 'FULLSTACK DEVELOPER',
    descES: `Participé en el desarrollo de un CMS (Content Management System) a la medida para una empresa de servicios técnico residenciales. Estuve involucrado durante todo el ciclo del proyecto, apoyando en la obtención y análisis de requerimientos, en la creación del diseño de interfaces para el sitio web y en el desarrollo utilizando DJango y JavaScript, además de participar en el modelado y estructuración de la base de datos utilizando SQLite.
    `,
    descEn: `This project was my first real-world experience. I participated in the development of a CMS (Content Management System) for a technical residential services 
      company. The software was built from scratch, and we held several meetings to define and analyze the software requirements, review progress, and deliver the final product. We used Django for the backend and HTML and JavaScript for the frontend. Through this project, I gained valuable hands-on experience with both backend and frontend development, which strengthened my problem-solving skills and ability to work collaboratively with a team. The successful completion of this project helped streamline the client's operations and improved their service delivery.`,
    tasks: [
      {
        id: 1,
        taskDescES:
          'Definición de especificaciones de software de acuerdo a los requerimientos del cliente.',
        taskDescEN:
          'Define software specifications according to the client requirements.',
      },
      {
        id: 2,
        taskDescES: 'Diseño de interfaces del sitio web.',
        taskDescEN: 'Participated in designing software interfaces.',
      },
      {
        id: 3,
        taskDescES: 'Desarrollo frontend y backend con Django.',
        taskDescEN:
          'Participate in the development of backend and frontend with Django.',
      },
      {
        id: 4,
        taskDescES:
          'Diseño de la base de datos utilizando SQLite de acuerdo a las especificaciones de software.',
        taskDescEN: 'Designed SQL database based on software specifications.',
      },
      {
        id: 5,
        taskDescES: 'Uso de la metodología SCRUM.',
        taskDescEN: 'Work with SCRUM methodology.',
      },
      {
        id: 6,
        taskDescES: 'Manejo de git para el control de versiones.',
        taskDescEN: 'Work with versioning systems (GIT).',
      },
    ],
  },
];
