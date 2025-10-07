import { useState, useEffect } from 'react'
import { generateGrid } from './util/gridGeneration';
import SingleCard from './components/SingleCard';
import Header from './components/Header';
import MemoryGame from './components/MemoryGame';


function App() {
  const [cards, setCards] = useState(generateGrid());
  const [isLocked, setIsLocked] = useState(false);
  const [flippedCards, setFlippledCards] = useState([]);

  const handleClick = (id) => {
    if (cards[id].isFlipped === true || isLocked === true) return;
    const copyCards = [...cards];
    copyCards[id].isFlipped = true;
    setCards(copyCards);
    setFlippledCards([...flippedCards, id]);
  }

  useEffect(() => {
    let timeout = 2000;
    // this effect need to run while flippedCards having any change/ action.
    if (flippedCards.length === 2) {
      setIsLocked(true);
      setTimeout(() => {
        if (cards[flippedCards[0]].number != cards[flippedCards[1]].number) {
          cards[flippedCards[0]].isFlipped = false;
          cards[flippedCards[1]].isFlipped = false;

          /*     setCards((prevCards)=>{
                const copyCards = [...prevCards];
                copyCards[flippedCards[0]].isFlipped = false;
                copyCards[flippedCards[1]].isFlipped = false;
                return copyCards;
              }) */
        }
        else {
          timeout = 500;
        }
        setIsLocked(false); // unfreeze the screen.
        setFlippledCards([]);
      }, timeout)
    }

  }, [flippedCards]);

  return (
    <>
      <div className='grid grid-cols-2' >
        <div>
          <Header text={"Simple React"}></Header>
          <div className="grid grid-cols-6 grid-rows-6 gap-[4px] w-fit mx-auto" >
            {cards.map(({ id, number, isFlipped }) => (
              <SingleCard key={id} id={id} number={number} isFlipped={isFlipped} handleClick={handleClick} />
            ))}
          </div>
          <div className='flex flex-row w-fit mx-auto py-4'>
            <button
              className='w-64 h-16 text-2xl font-bold rounded-full bg-gradient-to-br from-red-400 via-red-300 to-red-500 hover:from-red-500 hover:to-red-400 active:scale-95 transition-all duration-150 focus:outline-none '
              onClick={() => setCards(generateGrid())}
            >Reset Game</button>
          </div>
        </div>
        <div>
          <MemoryGame></MemoryGame>
        </div>
      </div>
    </>
  )
}

export default App
