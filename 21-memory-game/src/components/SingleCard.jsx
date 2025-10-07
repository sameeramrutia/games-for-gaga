import {memo} from 'react'

function SingleCard({ id, number, isFlipped, handleSingleCardClick }) {
    return (
        <button
            key={id}
            className={`w-24 h-24 text-2xl  font-bold text-black rounded-lg shadow-lg bg-gradient-to-br ${isFlipped ? " from-green-400 via-green-300 to-green-500 hover:from-green-500 hover:to-green-400" : "from-blue-400 via-blue-300 to-blue-500 hover:from-blue-500 hover:to-blue-400"} active:scale-95 transition-all duration-150 focus:outline-none`}
            onClick={() => handleSingleCardClick(id)}
        >
            {isFlipped ? number : " X "}
        </button>
    )
}

export default memo(SingleCard);