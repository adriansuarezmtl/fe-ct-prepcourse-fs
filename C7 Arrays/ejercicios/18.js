function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  if (resultadosTest.length === 0) {
    return undefined;
  }
  const suma = resultadosTest.reduce((acc, nota) => acc + nota, 0);
  const promedio = suma / resultadosTest.length;
  return promedio;
}

module.exports = promedioResultadosTest;
