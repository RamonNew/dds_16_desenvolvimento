var frase = "Olá Júlio o programador \"Front End\" da \nDDS 3-16" // o contrabarra \ é usado para escapar caracteres

var uc = "PROJETO INTEGRADOR III: GRAND PRIX"

var abreviado = uc.charAt(0)            // O primeiro caractere            
abreviado = uc.charAt(uc.length-1)      // Pegando o último elemento
abreviado = uc.substring(8,18)          // Pegando intervalos
abreviado = uc.substring(18)            // pegando a partir de determinado ponto
abreviado = uc.slice(0,7)               // Funciona de forma similar ao substring
abreviado = uc.slice(-10)               // Pegando os últimos 10 caracteres
abreviado = uc.indexOf("III")           // Buscando termos
abreviado = uc.split(" ")
abreviado = abreviado[0].substring(0,4)+". "+abreviado[abreviado.length-1]
abreviado = uc.replace("PROJETO", "trabalho")
abreviado = abreviado.toLocaleUpperCase() // Transformando tudo em maisculo
abreviado = abreviado.toLocaleLowerCase() // Transformando tudo em minusculo
console.log(abreviado)


//Criando uma função para resumir
function resumo(arrayAula){
    arrayAula = arrayAula.split(" ")
    arrayAula = arrayAula[0].substring(0,4)+". "+arrayAula[arrayAula.length-1]
    return arrayAula
}

//console.log(resumo("INTRODUÇÃO A INDÚSTRIA 4.0"))