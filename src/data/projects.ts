import texEncryptorBanner from '@/assets/images/textEncryptor.webp';
import forumBanner from '@/assets/images/forum.webp';
import react from '@/assets/icons/react.svg';
import springboot from '@/assets/icons/springboot.svg';
import javascript from '@/assets/icons/javascript.svg';
import git from '@/assets/icons/git.svg';
import typescript from '@/assets/icons/typescript.svg';
import mysql from '@/assets/icons/mysql.svg';
import sass from '@/assets/icons/sass.svg';
import mui from '@/assets/icons/mui.svg';

export const projects = [
  {
    id: 1,
    title: 'Forum',
    banner: forumBanner,
    descES: `Desarrollé un foro web completamente responsivo utilizando React, SASS y Material UI en conjunto con Spring Boot para la API. El sistema cuenta con autenticación de usuarios mediante JWT, cuenta con un CRUD para posts/publicaciones y respuestas, así como con la funcionalidad de responder esas mismas respuestas y marcar una respuesta como solución. Además el backend cuenta con documentación en Swagger para facilitar el uso e integración de esta API. 
    `,
    descEN: `Developed a fully responsive web forum using React, SASS and Material UI alongside Spring Boot for the API. The system features include user authentication via JWT, CRUD operations on posts, replies and users, the ability to reply to responses, and mark a reply as the accepted solution. Additionally the API is documented with Swagger to facilitate usage and integration.`,
    technologies: [
      { id: 1, name: 'React', icon: react },
      { id: 2, name: 'TypeScript', icon: typescript },
      { id: 3, name: 'Spring Boot', icon: springboot },
      { id: 4, name: 'Git', icon: git },
      { id: 5, name: 'MySQL', icon: mysql },
      { id: 6, name: 'SASS', icon: sass },
      { id: 7, name: 'Material UI', icon: mui },
    ],
  },
  {
    id: 2,
    title: 'Text Encryptor',
    banner: texEncryptorBanner,
    descES: `Desarrolle una página web interactiva utilizando React y Spring Boot que permite encriptar y desencriptar un texto a través de una terminal web, simulando una experiencia similar mediante el uso de flags para la misma. Desde el backend se gestiona de manera segura las operaciones de cifrado y descrifrado del texto.
    `,
    descEN: `Developed an interactive web application using React and Spring Boot that allows users to encrypt and decrypt their desired text throug a web terminal, simulating a command-line experience with the usage of flags. The backend securelt handles all encryption and decryption operations.`,
    technologies: [
      { id: 1, name: 'React', icon: react },
      { id: 2, name: 'JavaScript', icon: javascript },
      { id: 3, name: 'Spring Boot', icon: springboot },
      { id: 4, name: 'Git', icon: git },
    ],
  },
];
