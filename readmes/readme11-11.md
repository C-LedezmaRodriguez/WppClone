
### Usar firebase

Firebase es una plataforma de desarrollo de aplicaciones, la cual nos ayuda en el almacenamiento en la nube.

Hay dos formas diferentes de usar Firebase en sus proyectos:

- Usar Firebase JS SDK
- Usar React Native Firebase

En este caso usaremos Firebase JS SDK ya que tiene compatibilidad con el Managed Workflow de Expo Go. Ademas para crear una app para android iOS y web.

### Instalación
Despues de crear Expo, instalamos el Firebase JS SDK con:
`npx expo install firebase`

### Inicialización
Para inicializar la instancia de Firebase en el proyecto, se debe crear un objeto de configuración y pasarlo al método initializeApp() importado desde el módulo firebase/app.

Creamos el archivo firebaseConfig.js en el directorio principal y copiamos el codigo de la documentación de expo. 

En el cual dividimos la configuarción por el riesgo de exposición de la apikey u otros credenciales que pondriamos directo.

Asimismo al usar los archivos de configuracion comentados a continuacion, se puede ignorar facilmente en git.

## Configuración de firebase

Para que la aplicación se conecte a Firebase, son necearias algunas configuraciones específicas para la conexion de firebase y google.

### Archivos de Configuración

Se debe incluir los siguientes archivos el proyecto para la configuración con firebase:

- **firebase-service.json** Este archivo contiene credenciales y configuraciones para que la aplicación se conecte a Firebase. 
- **google-services.json** Este archivo es necesario para la integracion con Firebase en Android.
- **GoogleService-Info.plist** Este archivo es necesario para la integracion con Firebase en iOs.

**Importante**: Como estos archivos contienen los credenciales de Firebase y deben mantenerse seguros. No se debe compartir ni subirse a github para que no se encuentre público.

Por lo que es fundamental incluir estos archivos en el archivo `.gitignore` para evitar que se suban accidentalmente al repositorio.

Asimismo en nuestro archivo app.json habilitamos los módulos de Firebase de React Native App, Auth y Crashlytics, que especifica los archivos de la cuenta de servicio para ambas plataformas móviles y que establece el ID de la aplicación como en nuestro caso es "com.camilaledezma.wppclone". Asimismo
agregamos ciertos plugins importantes para nuestra aplicación de expo:

**expo-router** Que nos ayuda a simplificar la nacegación de nuestras aplicaciones de React Native. 

**@react-native-firebase/app** Ayuda a integrar Firebase xon nuestra aplicación para usar los servicios que ofrece.
**expo-build-properties** Nos permite personalizar configuraciones especificas para iOS y Android. Asi Ajustar esas configuraciones que no están predeterminadamente en expo.

### Instalacion de dependecias

Después de que se  realizó el cambio de las dependencias en el archivo package.json y subió estos cambios al repositorio, es neceascrio ejecutar npm install para actualizar las mismas en el respositorio local.





