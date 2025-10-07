import React from 'react'
import Header from './Header';
import SingleCard from './SingleCard';
import { generateGrid } from '../util/gridGeneration';
import useMemoryGame from '../hooks/useMemoryGame';

function MemoryGame() {
    const { cards, setCards, flippedCards, setFlippledCards, isLocked } = useMemoryGame();
    const handleSingleCardClick = (id) => {
        if (cards[id].isFlipped || isLocked) {
            return;
        }
        const copyCards = [...cards];
        copyCards[id].isFlipped = true;
        setCards(copyCards);
        setFlippledCards([...flippedCards, id]);
    };
    return (
        <>
        <Header text={"Custom Hooks"}></Header>
            <div className="grid grid-cols-6 grid-rows-6 gap-[4px] w-fit mx-auto" >
                {cards.map(({ id, number, isFlipped }) => (
                    <SingleCard
                        key={id}
                        id={id}
                        number={number}
                        isFlipped={isFlipped}
                        handleSingleCardClick={handleSingleCardClick} />

                ))}
            </div>
            <div className='flex flex-row w-fit mx-auto py-4'>
                <button
                    className='w-64 h-16 text-2xl font-bold rounded-full bg-gradient-to-br from-red-400 via-red-300 to-red-500 hover:from-red-500 hover:to-red-400 active:scale-95 transition-all duration-150 focus:outline-none '
                    onClick={() => setCards(generateGrid())}
                >Reset Game</button>
            </div>
        </>
    )
}

export default MemoryGame