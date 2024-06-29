//Dados do Herói
var saldoDeVitorias = 0
var nivel = " "
var partidas = 0
var vitorias = 0
var derrotas = 0


partidas = 5

for (let i = 1; i <= partidas; i++){
  vitorias += 0.6
  derrotas += 0.2
  console.log("Partidas jogadas: " + i)

}

console.log("O Herói jogou " + partidas + " partidas!" )


partidas = 10

for (let i = 1; i <= partidas; i++){
  vitorias += 0.5
  derrotas += 0.2
  console.log("Partidas jogadas: " + i)

}

console.log("O Herói jogou " + partidas + " partidas!" )


partidas = 22

for (let i = 1; i <= partidas; i++){
  vitorias += 0.5
  derrotas += 0.5
  console.log("Partidas jogadas: " + i)

}

console.log("O Herói jogou " + partidas + " partidas!" )


partidas = 20

for (let i = 1; i <= partidas; i++){
  vitorias += 2
  derrotas += 0.5
  console.log("Partidas jogadas: " + i)

}

console.log("O Herói jogou " + partidas + " partidas!" )


sistemaDeLevelUp(vitorias, derrotas)

function sistemaDeLevelUp(vitorias, derrotas){
  saldoDeVitorias = vitorias - derrotas
  if ( saldoDeVitorias <= 10 ){
    nivel = "Ferro"
    console.log("O Herói tem saldo de " + saldoDeVitorias + " vitórias, e está no nível " + nivel + "!")
  }else if ( saldoDeVitorias >= 11 && saldoDeVitorias <= 20 ){
    nivel = "Bronze"
    console.log("O Herói tem saldo de " + saldoDeVitorias + " vitórias, e está no nível " + nivel + "!")
  }else if ( saldoDeVitorias >= 21 && saldoDeVitorias <= 50 ){
    nivel = "Prata"
    console.log("O Herói tem saldo de " + saldoDeVitorias + " vitórias, e está no nível " + nivel + "!")
  }else if ( saldoDeVitorias >= 51 && saldoDeVitorias <= 80 ){
    nivel = "Ouro"
    console.log("O Herói tem saldo de " + saldoDeVitorias + " vitórias, e está no nível " + nivel + "!")
  }else if ( saldoDeVitorias >= 81 && saldoDeVitorias <= 90 ){
    nivel = "Diamante"
    console.log("O Herói tem saldo de " + saldoDeVitorias + " vitórias, e está no nível " + nivel + "!")
  }else if ( saldoDeVitorias >= 91 && saldoDeVitorias <= 100 ){
    nivel = "Lendário"
    console.log("O Herói tem saldo de " + saldoDeVitorias + " vitórias, e está no nível " + nivel + "!")
  }else if ( saldoDeVitorias >= 101){
    nivel = "Imortal"
    console.log("O Herói tem saldo de " + saldoDeVitorias + " vitórias, e está no nível " + nivel + "!")
  }
}




