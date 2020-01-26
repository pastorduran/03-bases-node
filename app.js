const argv = require('./config/yargs').argv;

/* requireds
existen tres tipos de requireds
1- Incluidos con versión de Node (Nativos) ej: const fs = require('express');
2- Paquetes no nativos de node
3- Requireds de archivos creados pro el desarrollador generalmente inician ./ ej: const fs = require('./pathArchivo');
*/

// Formas de importar archivos creados
const multiplicar = require('./multiplicar/multiplicar');

// con destructuracion puedo definir la función que voy a utilizar
const { crearArchivo } = require('./multiplicar/multiplicar');

const { listarTabla } = require('./multiplicar/multiplicar');

//Tomo la lista de comandos ingresados en consola
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}