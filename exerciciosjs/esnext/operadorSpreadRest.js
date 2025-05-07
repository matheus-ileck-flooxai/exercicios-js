//operator .... rest(juntar)/spread(espalhar)
//usar rest com parametro de função

//usar spread com objeto

const funcionario = {nome: 'Maria', salario: 12348.99}

const clone = {ativo: true, ...funcionario}

//usar spread com array
const grupoA = ['João', 'Maria', 'josé']
const grupoB= ['Matheus', 'Larissa', 'Dani']
const grupoC = ['Ekko', 'Zedao', ...grupoB, ...grupoA ,'Carlos']

console.log(grupoC);
