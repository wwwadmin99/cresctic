let winnerIndex = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const cells = document.querySelectorAll('.block')


const isWinningCombination = (combination) => {
   return winnerIndex.some(dataCombination => {
       return dataCombination.every(position => combination.includes(position))
    }) 
}

const x = 'x';
const o = 'o';

let currentPlayer = x;
let xMove = [];
let oMove = [];


const endGame = (combionationPalyr) => {
    if (!combionationPalyr) {
        alert ('draw')
    } else {
        alert (combionationPalyr + 'win')
    }

    xMove = [];
    oMove = [];
    cells.forEach(cell => cell.textContent = '')
}

const afterMove = () => {
    currentPlayer = currentPlayer === x ? o : x;
    if (isWinningCombination(xMove)) endGame(currentPlayer)
    if (isWinningCombination(oMove)) endGame(currentPlayer)
      
    if (xMove.length + oMove.length === 9) endGame()
}

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
    cell.textContent = currentPlayer;
    if (cell.textContent === x) xMove.push(index)
    if (cell.textContent === o) oMove.push(index)

    setTimeout(() => {
        afterMove()
    }, 0)
})
})