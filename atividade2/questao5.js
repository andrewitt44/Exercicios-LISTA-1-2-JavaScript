let numeros = [1, 2, 3, 4, 5, 6, 7];
let soma = numeros.reduceRight(function(total, numero) {
  return total + numero;
}, 0);


let media = soma / numeros.length;

console.log("A média é igual a: "+media);