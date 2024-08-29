function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  return array.map(item => {
    if (typeof item === 'string') {
      return item.toUpperCase();
    }
    return item;
  });
}

module.exports = convertirStringAMayusculas;
