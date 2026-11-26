Red de Bicicletas

Este proyecto lo hice para el modulo de Node.js y Express del curso. Es una aplicacion web que muestra un mapa de Tegucigalpa con marcadores donde estan ubicadas unas bicicletas. Los datos de las bicicletas se guardan en memoria (todavia no hay base de datos) y se pueden administrar a traves de una API.

Tecnologias que use
- Node.js y Express
- Pug como motor de vistas
- Leaflet y OpenStreetMap para el mapa
- Nodemon para el desarrollo
- Git y GitHub para el control de versiones
- Postman para probar la API

Como correrlo
1. Clonar el repositorio:
   git clone https://github.com/SnakeFirts/red_bicicletas.git
2. Entrar a la carpeta:
   cd red_bicicletas
3. Instalar las dependencias:
   npm install
4. Levantar el servidor:
   npm start
   (o npm run devstart para que se reinicie solo al guardar cambios)
5. Abrir http://localhost:3000 en el navegador

Que se ve en la pagina
Al abrir la pagina aparece el mensaje de bienvenida de Express y un mapa centrado en Tegucigalpa. En el mapa hay un marcador por cada bicicleta que esta guardada en el modelo.

Estructura del proyecto
- models/bicicleta.js: modelo de la bicicleta y la coleccion en memoria. Ya trae dos bicicletas de prueba cerca del centro del mapa.
- controllers/api/bicicletaControllerAPI.js: logica de cada endpoint.
- routes/api/bicicletas.js: rutas de la API.
- public/javascripts/mapa.js: crea el mapa y pone los marcadores.
- views/: vistas en Pug.

Endpoints de la API
GET    /api/bicicletas          Lista todas las bicicletas
POST   /api/bicicletas/create   Crea una bicicleta
PUT    /api/bicicletas/update   Actualiza una bicicleta existente
DELETE /api/bicicletas/delete   Elimina una bicicleta por su id

Los datos se envian en el body como JSON. Ejemplo para crear:
{ "id": 3, "color": "verde", "modelo": "urbana", "lat": 14.07, "lng": -87.19 }

Para actualizar se usa el mismo formato con el id de una bicicleta que ya exista. Para eliminar solo se manda el id:
{ "id": 3 }

Notas
Como los datos estan en memoria, al reiniciar el servidor se pierden los cambios y vuelven las dos bicicletas iniciales.
