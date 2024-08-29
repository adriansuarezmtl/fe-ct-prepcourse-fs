function deEuroAdolar(euro) {
  // La función recibe un argumento llamado euro el cual es un numero.
  // Debes calcular el valor recibido como argumento pasándolo a dólares.
  // Suponiendo que 1 euro equivale a 1.20 dólares.
  // Retornar el valor en dolares.
  // Por ejemplo: 
  // 1 ---> 1.20
  // 0 ---> 0
  // Tu código:
  if (euro < 0) {
    return "El valor en euros debe ser positivo";
  } else {
    // Calculamos el valor en dólares y lo retornamos
    const tipoDeCambio = 1.20;
    return euro * tipoDeCambio;
  }
}

module.exports = deEuroAdolar;
