import './App.css'
import { useState } from 'react'
import confetti from 'canvas-confetti';
import { Square } from './components/Square';
import { TURNS } from './constants';
import { checkWinner, checkEndGame } from './logic/board';
import { Winner } from './components/Winner';
import { saveGameStorage, resetGameStorage } from './logic/storage';

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board');
    if (boardFromStorage) {
      return JSON.parse(boardFromStorage);
    }
    return Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ?? TURNS.X;
  });
  const [winner, setWinner] = useState(null); //null es que no hay ganador, false es un empate

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    console.log(index);
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    //Guardar partida 
    saveGameStorage(newBoard, newTurn);
    //Verificar si hay ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner); // esto no bloquea el codigo q venga dsp
      //alert(`Gano ${newWinner}`);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resetGameStorage();
  }

  return (
    <main className='board'>
      <h1 className='title'>3 en linea</h1>

      <button onClick={resetGame}>Empezar de nuevo</button>


      <section className='game'>
        {
          board.map((cell, index) => {
            return (
              <Square key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {cell}
              </Square>
            )

          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <Winner winner={winner} resetGame={resetGame} />
    </main>
  )

}

export default App;