import React from "react";
import {IndividualCards} from "./example-cards"
import GameCard from "./game-card"

function GameBox () {
    const CardComponent = IndividualCards.map((game, index) => {
        return <GameCard id={IndividualCards[index].id} venue={IndividualCards[index].venue} date={IndividualCards[index].date} time={IndividualCards[index].time} link={IndividualCards[index].joinLink}/>
    });
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {CardComponent};
        </div>
        
    );
}

export default GameBox;