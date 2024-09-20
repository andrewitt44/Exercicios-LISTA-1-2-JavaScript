let texto = "Exemplo de uma string para teste da questão"

let contador = 0;

function contarVogais() {

  for (i = 0; i < texto.length; i++) {

    if (texto.charAt(i) == "a" || texto.charAt(i) == "e" || texto.charAt(i) == "i" || texto.charAt(i) == "o" || texto.charAt(i) == "u") {
      contador++
    } else if (texto.charAt(i) == "A" || texto.charAt(i) == "E" || texto.charAt(i) == "I" || texto.charAt(i) == "O" || texto.charAt(i) == "U") {
      contador++
    }

  }

  return contador;

}

console.log(contarVogais())