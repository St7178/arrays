function sumarMatrices(matriz1, matriz2) {
    let n = matriz1.length;
    let resultado = [];
    for (let i = 0; i < n; i++) {
      resultado[i] = [];
      for (let j = 0; j < n; j++) {
        resultado[i][j] = matriz1[i][j] + matriz2[i][j];
      }
    }
    return resultado;
  }
  
  const matriz1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const matriz2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  const matrizResultado = sumarMatrices(matriz1, matriz2);
  console.log(matrizResultado);