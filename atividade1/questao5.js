let ano = prompt("Digite um ano: ")
ano = Number(ano);

if (ano % 4 == 0) {
    alert("O ano " + ano + " é bissexto!")
} else {
    alert("O ano " + ano + " não é bissexto!")
}