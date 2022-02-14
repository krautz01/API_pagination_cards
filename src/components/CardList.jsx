import { Stack } from "@mui/material";
import React from "react";
import PhotoCard from "./PhotoCard";

const CardList = ({cards, removeCard}) => {
    return (
        <div className='cardFlex'>
            {cards.map(card =>
                <PhotoCard removeCard={removeCard} card={card} key={card.id} />
            )}
        </div>
    )
}

export default CardList;