// let produto = 'MousePad Star Wars';
const desconto = 0.1;
// let valor_produto = 100;
// let codigo_produto = '8290385';

let produto = {
    codigo: '829844',
    nome: 'MousePad star wars',
    valor: 500
};

//utilização do objeto
produto.valor //saida disto é 100


function efetuarDesconto(produtoParaDarDesconto){
    //criando variável e separando apenas o valor do produto
    let valor = produtoParaDarDesconto.valor;
    //Criando uma variável que vai receber o valor do produto vezes
    //o valor do const desconto lá no início do código 100 * 0.1, qual
    //valor está inserido em valorDesconto
    let valorDescontado = valor * desconto
    console.log(valor - valorDescontado)
}

efetuarDesconto(produto);


function compraParcelada(produto, numParcela){
    const juros = 0.02;
    if (numParcela <= 12){
        if (numParcela <= 10){
            let valorParcelado = produto.valor/numParcela
            console.log(valorParcelado)
        }else{
            let valorParcelaJuros = (produto.valor * juros + produto.valor)/numParcela
            console.log(valorParcelaJuros)
        }
    }else{
        console.log('O número maior de parcelas são 12')
    }
}

compraParcelada(produto, 15);
compraParcelada(produto, 12);
