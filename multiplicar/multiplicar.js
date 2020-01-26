const fs = require('fs');

let listarTabla = (base, limite) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        //Verifico si el parametro que ingresan es un numero
        if (!Number(base)) {
            //reject solo lanza el error, el codigo sigue ejecutandose
            reject(`El valor introducido ${ base } no es un nro`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`)
            }
        });
    });
}

//Para permitir la utilización de la función en otros archivos se define en exports de module
module.exports = {
    crearArchivo,
    listarTabla
}