var diaData1 = document.getElementById("diaData1")
var mesData1 = document.getElementById("mesData1")
var anoData1 = document.getElementById("anoData1")

function calcDiferenca(){
    var d1Dia = diaData1.value
    var d1Mes = mesData1.value
    var d1Ano = anoData1.value
    var data1 = new Date(d1Ano, d1Mes-1, d1Dia)
    console.log(data1)
}

