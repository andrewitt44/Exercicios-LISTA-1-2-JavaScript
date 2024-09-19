let numeros = [8, 23, 2, 0, 59];
let maiores = numeros.filter(function (numero) {
    return numero > 3;
});
console.log("Os números maiores que o número fornecido são: " + maiores);