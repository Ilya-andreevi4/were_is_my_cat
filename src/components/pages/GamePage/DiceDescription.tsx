import React, { FC } from 'react'

export function textDescription(t:string) {
  if(t==="./dices/dice_sit.png") {
    return "Кот сидит"
  } else if (t==="./dices/dice_stand.png"){
    return "Кот стоит"
  } else if (t==="./dices/dice_rest.png"){
    return "Кот лежит"
  } else if (t==="./dices/dice_white.png"){
    return "Кот белый"
  } else if (t==="./dices/dice_gray.png"){
    return "Кот серый"
  } else if (t==="./dices/dice_ginger.png"){
    return "Кот рыжий"
  } else if (t==="./dices/dice_clear.png"){
    return "Кот однотонный"
  } else if (t==="./dices/dice_spotted.png"){
    return "Пятнистый кот"
  } else if (t==="./dices/dice_striped.png"){
    return "Полосатый кот"
  }else {'Кот потерялся'}
}
