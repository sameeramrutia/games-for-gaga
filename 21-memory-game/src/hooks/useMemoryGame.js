import React from 'react'
import { generateGrid } from '../util/gridGeneration';
import { useState, useEffect } from 'react';
export default function useMemoryGame() {
    const [cards, setCards] = useState(generateGrid());
    const [flippedCards, setFlippledCards] = useState([]);
    const [isLocked, setIsLocked] = useState(false);

    useEffect(() => {
    let timeout = 2000;
    // this effect need to run while flippedCards having any change/ action.
    if (flippedCards.length === 2) {
      setIsLocked(true);
      setTimeout(()=> {
        if(cards[flippedCards[0]].number != cards[flippedCards[1]].number){
       
         setCards((prevCards)=>{
              const copyCards = [...prevCards];
              copyCards[flippedCards[0]].isFlipped = false;
              copyCards[flippedCards[1]].isFlipped = false;
              return copyCards;
            });
        }
        else{
          timeout = 500;
        }
        setIsLocked(false); // unfreeze the screen.
        setFlippledCards([]);
      },timeout)
    }

  }, [flippedCards]);

    return { cards, setCards, flippedCards, setFlippledCards, isLocked, setIsLocked };
}