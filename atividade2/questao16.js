let frutas = ["Maçã", "Banana", "Laranja"];

console.log(frutas[1]);

frutas.push("manga");

console.log("Array: " + frutas);

frutas.shift();

console.log("Array: " + frutas);

console.log("Tamanho do array frutas: " + frutas.length);

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

console.log("-----------------");

frutas.forEach(frutas => {
    console.log(frutas);
});

console.log("-----------------");

let tamanho = frutas.map(function (letras) {
    return letras.length;
});

console.log("Tamanho das frutas: " + tamanho);

console.log("-----------------");

let maiores = frutas.filter(function (maior) {
    if (maior.length > 5) {
        return maior;
    };
});

console.log("Frutas maiores que 5: " + maiores);

console.log("-----------------");

let soma = frutas.reduce(function(total, letras) {
  return total + letras.length;
}, 0);

console.log("A soma dos números é igual a: " + soma);