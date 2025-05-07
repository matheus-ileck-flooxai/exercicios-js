Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this))
            newArray.push(this[i])
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: false },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: true },
    { nome: 'Copo de Vidro', preco: 20.00, fragil: false },
]


const verificaFragil = produto => { return produto.fragil }
const verificaCaro = produto => produto.preco > 500

const resultado = produtos.filter2(verificaCaro).filter2(verificaFragil)

console.log(resultado);

