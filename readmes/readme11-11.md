## Configuración de firebase

Para que la aplicación se conecte a Firebase, son necearias algunas configuraciones específicas para la conexion de firebase y google.

### Archivos de Configuración

Asegúrate de incluir los siguientes archivos en las ubicaciones indicadas dentro de tu proyecto:

- **`firebase-service.json`** Este archivo contiene credenciales y configuraciones para que la aplicación se conecte a Firebase. 
- **`google-services.json`** Este archivo es necesario para la integracion con Firebase en Android.
- **`GoogleService-Info.plist`** Este archivo es necesario para la integracion con Firebase en iOs.

> **Importante**: Como estos archivos contienen los credenciales de Firebase y deben mantenerse seguros. No se debe compartir ni subirse a github para que no se encuentre público.

### Agregar archivos al `.gitignore`

Por lo que es fundamental incluir estos archivos en el archivo `.gitignore` para evitar que se suban accidentalmente al repositorio.


### Instalacion de dependecias

Después de que se  realizó el cambio de las dependencias en el archivo package.json y subió estos cambios al repositorio, es neceascrio ejecutar npm install para actualizar las mismas en el respositorio local