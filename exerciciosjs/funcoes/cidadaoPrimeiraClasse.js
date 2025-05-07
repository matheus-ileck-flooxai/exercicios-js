//Função em JS é First-Class Object (Citizen)
//High-order function

//criar de forma literal

function fun1() { }

// Armazenar em uma varíavel
const fun2 = function () { }


//Armazenar em um array 
const array = [function (a, b) { return a + b }, fun1, fun2]

//Armazenar em um atributo de objeto 
const obj = {}
obj.falar = function () { return 'Opa' }


//Passar função como param
function run(fun) {
    fun()
}

run(function () { console.log('Executando') })

//uma funçao pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        return function (c) {
            console.log(a + b + c)
        }
    }
}

soma(2, 3)(4)