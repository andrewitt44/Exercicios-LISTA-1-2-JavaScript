let nota1 = prompt("Digite a primeira nota: ")
nota1 = Number(nota1);

let nota2 = prompt("Digite a segunda nota: ")
nota2 = Number(nota2);

let nota3 = prompt("Digite a terceira nota: ")
nota3 = Number(nota3);

media = (nota1 + nota2 + nota3) / 3

if (media >= 7) {
    alert("Você está aprovado!")
} else if (media <= 2.5) {
    alert("Você está reprovado!")
} else {
    alert("Você está de recuperação!")
}