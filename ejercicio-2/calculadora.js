const operando1 = document.getElementById('operando1');
const operando2 = document.getElementById('operando2');

const mostrarResultado = document.getElementById('resultado')
const sumar = document.getElementById('sumar')
const restar = document.getElementById('restar')
const multiplicar = document.getElementById('multiplicar')
const dividir = document.getElementById('dividir')



function suma(){
    sumar.addEventListener('click',()=>{
        let valor1 = parseInt(operando1.value)
        let valor2 = parseInt(operando2.value)
        const resultado = valor1+valor2
        mostrarResultado.value=resultado
    })
}
suma()


function resta(){
    restar.addEventListener('click',()=>{
        let valor1 = parseInt(operando1.value)
        let valor2 = parseInt(operando2.value)
        const resultado = valor1-valor2
        mostrarResultado.value=resultado
    })
}
resta()

function multiplicacion(){
    multiplicar.addEventListener('click',()=>{
        let valor1 = parseInt(operando1.value)
        let valor2 = parseInt(operando2.value)
        const resultado = valor1*valor2
        mostrarResultado.value=resultado
    })
}
multiplicacion()

function division(){
    dividir.addEventListener('click',()=>{
        let valor1 = parseInt(operando1.value)
        let valor2 = parseInt(operando2.value)
        const resultado = valor1/valor2
        mostrarResultado.value=resultado
    })
}
division()
