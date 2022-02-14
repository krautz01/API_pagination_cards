import React from "react";
import PhotoCard from "./PhotoCard";


const CardList = ({cards, removeCard}) => {
    return (
        <div>
            {cards.map(card =>
                <PhotoCard removeCard={removeCard} card={card} key={card.id} />
            )}
        </div>
    )
}

export default CardList;