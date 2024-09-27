let numero1 = prompt("Digite um número: ")
numero1 = Number(numero1);

function ehPar(numero1) {
    if (numero1 % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

alert("O número "+ numero1 + " é par?\n"+ehPar(numero1))