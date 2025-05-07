const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: false },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: true },
    { nome: 'Copo de Vidro', preco: 20.00, fragil: false },
]

const verificaFragil = produto => { return produto.fragil  }
const verificaCaro = produto => produto.preco > 500

const resultado = produtos.filter(verificaCaro).filter(verificaFragil)

console.log(resultado);
