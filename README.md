
 Sakura Tarot

Este proyecto tiene como objetivo hacer una aplicación que consuma la API de Sakura que devuelve un archivo JSON con la información de las cartas- un tarot virtual que nos diga nuestro pasado, presente y futuro. El usuario podrá escoger una carta para el pasado, otra para el presente y otra para el futuro, después podrá obtener el significado de cada carta que ha elegido. La versión propuesta está en español y utiliza tecnologías modernas como React.js y Next.js para garantizar escalabilidad y rendimiento y persistencia de datos con Json-server.  

 🛠️ Tecnologías

- HTML
- CSS
- Javascript
- React.js
- Json-server

📌Requisitos para el Funcionamiento Actual
Visual Studio Code
Node.js
Npm

💿 Instalación del Repositorio

1,Clona este repositorio.

https://github.com/01joanna/mystic-sakura.git

2.Instalar Dependencias.

cd mystic-sakura
npm install

⚙️ Configuración
Este proyecto utiliza una API externa para obtener datos de las cartas, para la información de las cartas. Asegúrate de que estos datos estén correctamente configurados antes de ejecutar la aplicación.
- Para obtener todas las cartas : https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/
- Para obtener una carta por id : https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/:id

📂 Estructura del Proyecto
Está organizada de la siguiente manera: mystic-sakura/

| ...
| public/
|   └── assets/
├         |── images/
| src/
|   └── app/
|       ├── layout/
|       |   
|       ├── page/
|       └── ...
|   └── components/
|       ├── button/
|       |   ├── 
|       |   
|       ├── card/
|       ├── cardList/
|       └── placeholderCard