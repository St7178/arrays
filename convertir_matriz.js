// Crear una función convertirEnMatriz que tome como argumentos un número entero columnas y un array array y devuelva una matriz con los items de array y la cantidad de columnas columnas por fila. La última fila puede quedarse como menos columnas de las indicadas si no hay más ítems que agregar.




function convertirEnMatriz(columnas, array) {
    const matriz = [];
    let fila = [];
    
    for (let i = 0; i < array.length; i++) {
      fila.push(array[i]);
      
      if (fila.length === columnas || i === array.length - 1) {
        matriz.push(fila);
        fila = [];
      }
    }
    
    return matriz;
  }
  
  console.log(convertirEnMatriz(2, [1, 2, 3, 4])); // [[1, 2], [3, 4]]
//   console.log(convertirEnMatriz(3, [1, 2, 3, 4, 5, 6, 7])); // [[1, 2, 3], [4, 5, 6], [7]]
//   console.log(convertirEnMatriz(4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,34])); // [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11]]