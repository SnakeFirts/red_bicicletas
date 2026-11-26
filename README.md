# Red de Bicicletas

Proyecto del módulo de **Node.js y Express**. Es una aplicación web que muestra un mapa de Tegucigalpa con marcadores en las ubicaciones de unas bicicletas, y una API para administrarlas. Los datos se guardan **en memoria** (todavía no hay base de datos).

## Tecnologías

- Node.js y Express
- Pug (motor de vistas)
- Leaflet y OpenStreetMap (mapa)
- Nodemon (desarrollo)
- Git y GitHub (control de versiones)
- Postman (pruebas de la API)

## Cómo correrlo

```bash
git clone https://github.com/SnakeFirts/red_bicicletas.git
cd red_bicicletas
npm install
npm start
```

Para desarrollo, con reinicio automático al guardar cambios:

```bash
npm run devstart
```

Luego abre <http://localhost:3000> en el navegador.

## Qué se ve en la página

Al abrir la página aparece el mensaje de bienvenida de Express y un mapa centrado en Tegucigalpa. Hay un marcador por cada bicicleta del modelo, y al hacer clic en uno sale un popup con su color y modelo. A un lado hay un panel con la lista de bicicletas: al hacer clic en una, el mapa se acerca a su ubicación.

## Estructura del proyecto

| Archivo | Para qué sirve |
|---|---|
| `models/bicicleta.js` | Modelo de bicicleta y colección en memoria (trae 2 bicis de prueba cerca del centro del mapa) |
| `controllers/api/bicicletaControllerAPI.js` | Lógica de cada endpoint |
| `routes/api/bicicletas.js` | Rutas de la API |
| `public/javascripts/mapa.js` | Crea el mapa, los marcadores y la lista lateral |
| `views/` | Vistas en Pug |

## API

| Método | Ruta | Qué hace |
|---|---|---|
| GET | `/api/bicicletas` | Lista todas las bicicletas |
| POST | `/api/bicicletas/create` | Crea una bicicleta |
| PUT | `/api/bicicletas/update` | Actualiza una bicicleta existente |
| DELETE | `/api/bicicletas/delete` | Elimina una bicicleta por su id |

Los datos se envían en el body como JSON. Ejemplo para crear:

```json
{ "id": 3, "color": "verde", "modelo": "urbana", "lat": 14.07, "lng": -87.19 }
```

Para actualizar se usa el mismo formato con el id de una bici que ya exista. Para eliminar solo se manda el id:

```json
{ "id": 3 }
```

## Tests con Postman

Probé los cuatro endpoints en una colección llamada **Red Bicicletas**. El GET devuelve las bicis en JSON, el POST agrega una nueva, el PUT cambia sus datos y el DELETE la elimina (responde `204`, sin contenido).

## Notas

Como los datos están en memoria, al reiniciar el servidor se pierden los cambios y vuelven las dos bicis iniciales.
