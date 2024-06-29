//Dados do Herói
var saldoDeVitorias = 0
var nivel = " "

sistemaDeLevelUp(71, 34)

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




