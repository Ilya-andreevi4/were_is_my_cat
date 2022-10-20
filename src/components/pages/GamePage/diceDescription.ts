import React from 'react'

export default function diceDescription(t:string) {
  if(t==="./dices/dice_sit.png") {
    return "Кот сидит"
  } else if (t==="./dices/dice_stand.png"){
    return "Кот стоит"
  } else if (t==="./dices/dice_rest.png"){
    return "Кот лежит"
  } else if (t==="./dices/dice_white.png"){
    return "Кот белого цвета"
  } else if (t==="./dices/dice_gray.png"){
    return "Кот серого цвета"
  } else if (t==="./dices/dice_ginger.png"){
    return "Кот рыжего цвета"
  } else if (t==="./dices/dice_clear.png"){
    return "Кот однотонный"
  } else if (t==="./dices/dice_spotted.png"){
    return "Пятнистый кот"
  } else if (t==="./dices/dice_striped.png"){
    return "Кот с полосками"
  }
}