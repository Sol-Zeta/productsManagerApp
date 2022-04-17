# Product Manager App
(ver rama `development`)


## Para ejecutar la aplicación en el emulador de `iOS`:

```
git clone https://github.com/Sol-Zeta/productsManagerApp
cd productsManagerApp
git checkout development
yarn install
react-native start
```

Y en una nueva terminal ejecutar:

```js
npx react-native run-ios
```



## Features desarrolladas:

- Visualización de listado y detalle de los productos
- Filtrado de productos según estado `activo` u `oculto`
- Edición del detalle de un producto
- Borrado de un producto
- Creación de producto nuevo
- Compartir nombre y precio de un producto
- Navegación a través de barra inferior y entre pantallas

## Librerías utilizadas principales:
 - `Redux, react-redux y redux-saga` para la gestión de estados de la aplicación
 - `Axios` para peticiones http
 - `react-hook-form` para gestión de formularios

 ## Tareas pendientes:
 - Guardado de productos en favoritos
 - Revisar y corregir manejo de errores de las respuestas de la api
