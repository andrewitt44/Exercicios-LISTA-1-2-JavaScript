let hoje = new Date();

hoje.setDate(hoje.getDate() + 100);

let dia = String(hoje.getDate()).padStart(2, '0');
let mes = String(hoje.getMonth() + 1).padStart(2, '0');
let ano = hoje.getFullYear();

console.log("A data daqui a 100 dias será: " + dia + "/" + mes + "/" + ano);