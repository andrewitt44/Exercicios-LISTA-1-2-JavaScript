let arrayNumeros = [];
let numero = 33;

function arrayNovo() {
    for (i = 0; i < numero; i++) {
        arrayNumeros.push(i + 1)
    }
}

arrayNovo()

console.log("Array até o número: " + numero + "\n" + arrayNumeros)