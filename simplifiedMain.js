
let nomeDoHeroi = "Espadeiro"
let nivelDoHeroi = "Ferro"
let xp = 0
while(xp < 9750){
  xp += 750
  console.log("Você ganhou 750 xp por concluir um desafio")
  

 if(xp < 1000){
  } 
    else if (xp <= 2000){
      nivelDoHeroi = "Bronze"
    }
      else if(xp <= 5000){
        nivelDoHeroi = "Prata"
      }
        else if(xp <= 7000){
        nivelDoHeroi = "Ouro"
        }
          else if(xp <= 8000){
        nivelDoHeroi = "Platina"
        }
           else if(xp <= 9000){
        nivelDoHeroi = "Ascendente"
        }
              else if(xp <= 1000){
        nivelDoHeroi = "Imortal"
        }
               else {
                nivelDoHeroi = "Radiante"
               }


if (xp <= 1000){
  console.log(nomeDoHeroi + " está no nível " + nivelDoHeroi +". Continue sua jornada para subir de nível.")
}else {
  console.log(nomeDoHeroi + " alcançou o nível " + nivelDoHeroi +". Parabéns por alcançar seu limite")
}

}         
        








