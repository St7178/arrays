function obtenerCantidad(item, items) {
    let count = 0;
    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < items[i].length; j++) {
        if (items[i][j] === item) {
          count++;
        }
      }
    }
    return count;
  }
  
  
  const cantidad = obtenerCantidad('🍌', [
    ['🍎', '🍏', '🍌', '🍌'],
    ['🍌', '🍎'],
    ['🍎', '🍏', '🍌'],
    ['🍏', '🍌', '🍎', '🍌'],
  ]);
  console.log(cantidad); 