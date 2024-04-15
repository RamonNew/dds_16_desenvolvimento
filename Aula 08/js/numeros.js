// Objeto Math
var resultado

resultado = Math.pow(2,53)          // 2 elevado à 53
resultado = Math.round(0.5)         // Arredonda para o inteiro mais próximo
resultado = Math.floor(0.9)         // Arredonda pra o inteiro mais baixo
resultado = Math.ceil(0.1)          // Arredonda para um inteiro acima
resultado = Math.abs(-2.8)          // Retorna o valor sempre positivo o absoluto
resultado = Math.max(99,88,8,54)    // Retorna o Maior valor
resultado = Math.min(99,88,8,54)    // Retorna o Menor valor
resultado = Math.PI                 // Número PI
resultado = Math.sqrt(3)            // Raizquadrada
//console.log(resultado)

// Data e hora
var antes = new Date (2020, 0,1)    // O 1º dia do 1º mês de 2020
var depois = new Date(2020, 0,30,    // Mesmo dia, às 17:10:30 da tarde
                        17,10,30)
var agora = new Date ()             // Pega a data e hora da hora
var duracao = depois - antes        // Pega a duração em milisegundos
duracao = duracao/1000/60/60        // Convertendo duração em horas

var elemento
elemento = depois.getFullYear()     // Pegando o ano
elemento = depois.getMonth()        // Pegando o mês
elemento = depois.getDay()          // Pegando o dia da semanda começando em 0
elemento = depois.getDate()         // Pegando o dia do mês
elemento = depois.getHours()        // Pegando a Hora
elemento = depois.getUTCHours()     // Pegando hora no formato UTC (+3 usando o de brasilia)
elemento = depois.toString()        // Exibindo como String
elemento = depois.toLocaleDateString() // Data padrão
console.log(elemento)   
