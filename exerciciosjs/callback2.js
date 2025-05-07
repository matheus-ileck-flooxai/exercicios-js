const notas = [7.7, 6.6, 5.2, 3.4, 2.4, 9.0]

//Sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1);



//Com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2);


const notasBaixas3 = notas.filter(nota => nota < 7)

console.log(notasBaixas3);

