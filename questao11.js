let carro = {
    marca: "Ford",
    modelo: "Fusion",
    ano: 2019,
    getIdade: function (){
        if ( 2024 - this.ano === 1) {
            return "Idade do carro: " + (2024 - this.ano) + " ano";
        } else {
            return "Idade do carro: " + (2024 - this.ano) + " anos";
        }
    },
    getDescricao: function (){
        return "Marca: " + this.marca + "\nModelo: " + this.modelo + "\nAno: " + this.ano;
    }
};

console.log(carro.getIdade());

console.log(carro.getDescricao());

carro.ano = 2025;

console.log("\nTESTE MUDANÇA DE ANO\n" + carro.getDescricao());
