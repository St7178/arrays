// function obtenerNumeroMayor(matriz) {
//     let mayorNumero = matriz[0][0];

//     for (let i = 0; i < matriz.length; i++) {
//       for (let j = 0; j < matriz[i].length; j++) {
//         if (matriz[i][j] > mayorNumero) {
//           mayorNumero = matriz[i][j];
//         }
//       }
//     }

//     return mayorNumero;
//   }

//   const matriz = [
//     [2, 7, 12, 1],
//     [8, 23],
//     [9, 45, 7],
//     [22, 3, 24, 4],
//   ];

//   console.log(obtenerNumeroMayor(matriz)); // Devuelve 45


function obtenerNumeroMayor(matriz) {
  let mayorNumero = matriz[0][0];
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] > mayorNumero) {
        mayorNumero = matriz[i][j];
      }

    }
  }
  return mayorNumero
}
const resultado = [
      [2, 7, 12, 1],
      [8, 23],
      [9, 45, 7],
      [22, 3, 24, 4],
    ];
    console.log(resultado);
  