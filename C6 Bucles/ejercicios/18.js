function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let inicio = Math.min(a, b);
  let fin = Math.max(a, b);
  if (inicio <= 0 && fin >= 0) {
    return 0;
  }
  let producto = 1;
  for (let i = inicio; i <= fin; i++) {
    producto *= i;
  }
  return producto;
}

module.exports = productoEntreNúmeros;