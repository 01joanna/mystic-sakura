English

 Sakura Tarot

 This project aims to make an application that consumes the Sakura API that returns a JSON file with the information of the cards- a virtual tarot that tells us our past, present and future. The user will be able to choose a card for the past, another for the present and another for the future, then he will be able to obtain the meaning of each card he has chosen. The proposed version is in Spanish and uses modern technologies such as React.js and Next.js to guarantee scalability and performance and data persistence with Json-server.

🛠️ Technological tools

- HTML
- CSS
- Javascript
- React.js
- Json-server

📌Requirements for Current Operation

Visual Studio Code
Node.js
Npm


💿 Installing the Repository

1.Clone this repository.

https://github.com/01joanna/mystic-sakura.git

2.Install dependencies.

cd mystic-sakura

npm install

 🌈 Getting Started

First, run the development server:
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Open http://localhost:3000 with your browser to see the result.

⚙️ Configuration
This project uses an external API to get data from the charts, for the information from the cards. Make sure this data is set up correctly before running the app.

 - To get all the cards : https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/
 - To get a card by id : https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/:id


 📂 Project Structure
It is organized as follows: mystic-sakura/

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
|       ├── card/
|       ├── cardList/
|       └── placeholderCard

🧪 Tests
The project uses Jest for unit testing and cypress for integration. Run the tests with:

npm test

0

npm run test /*nombre del test*/


Español

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

1.Clona este repositorio.

https://github.com/01joanna/mystic-sakura.git

2.Instalar Dependencias.

cd mystic-sakura

npm install

🌈Start

Ejecutar el servidor de desarrollo con: 

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Abre  http://localhost:3000 con su navegador para ver el resultado.

⚙️ Configuración
Este proyecto utiliza una API externa para obtener datos de las cartas. Asegúrate de que estos datos estén correctamente configurados antes de ejecutar la aplicación.
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
|       ├── card/
|       ├── cardList/
|       └── placeholderCard

🧪 Pruebas
El proyecto utiliza  Jest para realizar pruebas unitarias y cypress para integracion. Ejecuta las pruebas con:

npm test

0

npm run test /*nombre del test*/


📷 Images from the web / Imagenes de la web
