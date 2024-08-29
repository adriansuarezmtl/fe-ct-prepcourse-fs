function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:
  if (!Array.isArray(array)) {
    throw new Error('El primer argumento debe ser un array');
  }
  for (let i = 0; i < array.length; i++) {
    cb(array[i]);
  }
}

module.exports = forEach;
