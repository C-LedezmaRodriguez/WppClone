const fs = require('fs');
const path = require('path');

const files = [
    'firebase-services.js',
    'google-services.json',
    'GoogleService-Info.plist',
];

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    fs.writeFile(filePath, '', (err) => {
        if (err) {
            console.error(`Error creando el archivo ${file}:`, err);
        } else {
            console.log(`Archivo ${file} creado exitosamente en la raíz del proyecto.`);
        }
    });
});
