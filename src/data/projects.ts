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
    descES: `Desarrollé un foro web completamente responsivo utilizando React, SASS y Material UI en conjunto con SpringBoot para la API. El sistema cuenta con autenticación de usuarios mediante JWT, cuenta con un CRUD para posts/publicaciones y respuestas, así como con la funcionalidad de responder esas mismas respuestas y marcar una respuesta como solución. Además el backend cuenta con documentación en Swagger para facilitar el uso e integración de esta API. 
    `,
    descEN: `For this project I decided to do a full responsive website by using sass and Material UI. This forum allows you to do all CRUD operations on users, posts and answers, furthermore, all operations need a JWT token, also there is a cool feature to select a solution for your post. The REST API is well documented thanks to swagger.`,
    technologies: [
      { id: 1, name: 'React', icon: react },
      { id: 2, name: 'TypeScript', icon: typescript },
      { id: 3, name: 'SpringBoot', icon: springboot },
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
    descES: `Desarrolle una página web interactiva utilizando React y SpringBoot que permite encriptar y desencriptar un texto a través de una terminal web, simulando una experiencia similar mediante el uso de flags para la misma. Desde el backend se gestiona de manera segura las operaciones de cifrado y descrifrado del texto.
    `,
    descEN: `This project focuses on give an user input and encrypt the text, this one is displayed and the decrypt option is given. The project has 2 encryption algorithms and this ones are called through the REST API endpoints. The user interface implements a console component to bring a better experience while encrypting since the encryption algorithms work with some flags which are common on the command lines. `,
    technologies: [
      { id: 1, name: 'React', icon: react },
      { id: 2, name: 'JavaScript', icon: javascript },
      { id: 3, name: 'SpringBoot', icon: springboot },
      { id: 4, name: 'Git', icon: git },
    ],
  },
];
