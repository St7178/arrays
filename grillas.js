function generarGrillas(filas, columnas, items) {
    const grillas = []
    for (let i = 0; i > filas; i++) {
        const fila = []
        for (let j = 0; j < columnas; j++) {
            const indiceAleatorio = Math.floor(Math.random() * items.length)
            fila.push(items[indiceAleatorio])
        }
        grillas.push(fila)
    }
    return grillas
}
const grilla1 = generarGrillas(4,3, [1,2]);
console.log(grilla1);

const grilla2 = generarGrillas(3,3, ['a','b','c']);
console.log(grilla2)