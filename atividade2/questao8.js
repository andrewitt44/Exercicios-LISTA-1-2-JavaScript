let numeros = [1, 2, 3, 4, 5, 3, 6, 9, 2, 3, 3, 4, 5, 3, 3, 3];
let iguais = numeros.filter(function (numero) {
    return numero === 3;
});
let valor = iguais.length;
console.log("O array original é: " + numeros + "\nA" +
    + "quantidade de vezes que o valor aparece é: " + valor);