function matrizEscalonada (filas){
    const matriz = [];
    for(let i=0; i<=filas; i++){
        const fila= new Array(i).fill(0)
        matriz.push(fila)
    }
return matriz
}

const mat1 = matrizEscalonada(3)
console.log(mat1)

const mat2 = matrizEscalonada(5)
console.log(mat2)