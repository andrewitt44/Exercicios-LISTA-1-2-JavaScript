let numero = prompt ("Digite um número aleatório: ")
numero = Number (numero);

if (numero > 0) {
    alert( 'O número digitado é inteiro!')
} else if ( numero < 0 ) {
    alert( 'O número é negativo!')
} else {
    alert( 'O número é igual a 0')
}