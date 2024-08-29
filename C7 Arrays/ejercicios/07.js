function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  const arrayCopia = [...array];
  if (arrayCopia.length <= 1) {
    return arrayCopia;
  }
  arrayCopia.sort((a, b) => {
    if (typeof a === 'number') {
      return a - b;
    } else if (typeof a === 'string') {
      return a.localeCompare(b, 'es');
    } else {
      throw new Error('Tipo de dato no soportado');
    }
  });
  return arrayCopia;
}

module.exports = ordenarArray;
