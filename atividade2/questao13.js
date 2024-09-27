const nascimentoAndre = '2007-01-17';

const nascimentoFernanda = '2006-10-31';

const diferencaMeses = new Date(nascimentoAndre) - new Date(nascimentoFernanda)

const diferencaDias = diferencaMeses / (1000 * 60 * 60 * 24);

console.log("A diferença de dias da data: " + nascimentoAndre + " para a data: " + nascimentoFernanda +" é de " +diferencaDias + " dias.");