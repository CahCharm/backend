class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    mostrarDados() {
        console.log(`Nome: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, Quantidade: ${this.quantidade}`);
    }

    vender(qtd) {
        if (qtd > this.quantidade) {
            console.log("Quantidade insuficiente para venda.");
        } else {
            this.quantidade -= qtd;
            console.log(`Quantidade atual: ${this.quantidade}`);
        }
    }

    repor(qtd) {
        this.quantidade += qtd;
        console.log(`Quantidade atual: ${this.quantidade}`);
    }
}


let produto = new Produto("Caneta", 2.5, 100);
//produto.mostrarDados();
//produto.vender(10);     
produto.repor(20);     