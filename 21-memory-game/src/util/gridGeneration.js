export function generateGrid() {
    // Create array [1, 2, ..., 18]
    const arr = Array.from({ length: 18 }, (_, i) => i + 1);
    // Duplicate the array
    const doubled = [...arr, ...arr].sort(() => Math.random() - 0.5)
    // Shuffle using Fisher-Yates algorithm
    const cards =doubled.map((item,index) =>{
        return {
            id:index,
            number: item,
            isFlipped: false
        }
    })
    return cards;
}