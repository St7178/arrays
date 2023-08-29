function obtenerFilaMasLarga(matriz) {
    let filaMasLarga = matriz[0];

    for (let i = 1; i < matriz.length; i++) {
        if (matriz[i].length > filaMasLarga.length) {
            filaMasLarga = matriz[i];
        }
    }

    return filaMasLarga;
}

//   console.log(obtenerFilaMasLarga([[1, 4], [3, 7, 5], [1]])); // [3, 7, 5]
console.log(obtenerFilaMasLarga([[1], [3,7], [6,8]])); // [3, 7]




