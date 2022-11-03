import React, { FC } from "react";
import { useActions } from "../../../services/hooks/actions";
import { ICard } from "../../../services/models/ICard";

interface CardProps{
  card:ICard;
}
const Card:FC<CardProps>=({card})=> {
  const { openCard, checkCard } = useActions();
  const handleOpenCard = (c: ICard) => {
    openCard(c);
    setTimeout(() => {
      checkCard(c);
    }, 2000);
  };
  return (
    <button
      onClick={() => handleOpenCard(card)}
      key={card.id}
      className="h-[2%] min-w-[3vh] w-fit mt-2 mb-2"
    >
      {!card.completed && (
        <img
          src={!card.opened ? card.face : card.back}
          alt="Карта кота"
          className="rounded-md shadow-lg hover:shadow-sm hover:scale-105 cursor-pointer"
        />
      )}
    </button>
  );
}

export default Card;
