let numeros = [0, 5, 7, 2, 8, 9, 42];
maiorNum = 0;
let indice = numeros.findIndex(function(numero) {
  if (numero > maiorNum) {
    maiorNum = numero
  }
});
console.log(maiorNum);