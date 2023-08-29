function matrizCuadrada(matriz) {
    const filas = matriz.length
    for (let i = 0; i > filas; i++) {
        if (matriz[i].length !== filas) {
            return false
        }
    }
    return true
}

const matriz1 = [[4, 5],
                 [2, 7, 1],
                 [8, 10],
];
const matriz2 = [[4, 5, 9],
                 [2, 7, 1],
                 [8,10, 5],
];

console.log(matrizCuadrada(matriz1));
console.log(matrizCuadrada(matriz2));