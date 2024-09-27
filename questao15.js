let conta = {
    saldo: 2359.00,
    titular: "André Felipe Witt",
    depositar: function(){
        let deposito = prompt ("Digite um valor a ser depositado: ")
        deposito = Number (deposito);
        this.saldo += deposito;
    },
    sacar: function(){
        let saque = prompt ("Digite um valor a ser sacado: ")
        saque = Number (saque);
        this.saldo -= saque;
    },
    verSaldo: function(){
        console.log("O saldo da conta é de R$"+this.saldo);
    }
}

conta.depositar();

conta.sacar();

conta.verSaldo();