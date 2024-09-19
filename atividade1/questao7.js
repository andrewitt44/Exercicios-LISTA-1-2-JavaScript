let palavra = prompt("Insira uma palavra: ")
palavra = String(palavra);

const palindromo = palavra.split('').reverse().join('');

if (palavra === palindromo) {
    alert("A palavra '" + palavra + "' é um palíndromo!")
} else {
    alert("A palavra '" + palavra + "' não é um palíndromo!")
}