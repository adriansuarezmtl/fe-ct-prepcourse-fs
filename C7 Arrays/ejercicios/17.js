function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  const suma = arrayOfNums.reduce((acc, num) => acc + num, 0);
  return suma;
}

module.exports = agregarNumeros;
