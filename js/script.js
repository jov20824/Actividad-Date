var fecha = new Date();
var cumpleanios = new Date("2024,7,2");

var tiempoRestante = cumpleanios-fecha;
var diasRestantes = Math.floor((tiempoRestante / (1000 * 60 * 60 *24)));
console.log(diasRestantes);
