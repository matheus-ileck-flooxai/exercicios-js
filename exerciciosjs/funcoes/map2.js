const carrinho = [
    '{"nome":"borracha","preco":"3.45"}',
    '{ "nome": "Caderno", "preco": "13.90" }',
    '{ "nome": "Kit de Lapis", "preco": "41.22" }',
    '{ "nome": "Caneta", "preco": "7.50" }',
]

//Retornar um aray apenas com os preços

const paraObjeto = json => JSON.parse(json)

const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
