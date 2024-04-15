var inputN1 = document.getElementById("n1")
var inputN2 = document.getElementById("n2")

//console.log(inputN1)

var labelResultado = document.getElementById("resultado")
console.log(labelResultado)

function somar(){
    var n1 = parseFloat(inputN1.value)
    var n2 = parseFloat(inputN2.value)
    var resultado = n1 + n2
    //return resultado
    labelResultado.innerHTML = resultado
    //inputN1.value=""
    //inputN2.value=""
    console.log(resultado)
}

