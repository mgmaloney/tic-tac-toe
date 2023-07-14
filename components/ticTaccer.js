/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useEffect } from 'react';

export default function TicTaccer() {
  const blankBoard = ['', '', '', '', '', '', '', '', ''];
  const [tacBoard, setTacBoard] = useState(blankBoard);
  const [count, setCount] = useState(0);
  const [winMessage, setWinMessage] = useState('');
  const [winState, setWinState] = useState(false);
  const [winClass, setWinClass] = useState('');

  async function checkWin() {
    if (tacBoard[0] === 'X' && tacBoard[1] === 'X' && tacBoard[2] === 'X') {
      setWinMessage('X Wins!');
      setWinState(true);
      setWinClass('012');
    } else if (tacBoard[3] === 'X' && tacBoard[4] === 'X' && tacBoard[5] === 'X') {
      setWinMessage('X Wins!');
      setWinState(true);
      setWinClass('345');
    } else if (tacBoard[6] === 'X' && tacBoard[7] === 'X' && tacBoard[8] === 'X') {
      setWinMessage('X Wins!');
      setWinState(true);
      setWinClass('678');
    } else if (tacBoard[0] === 'X' && tacBoard[3] === 'X' && tacBoard[6] === 'X') {
      setWinMessage('X Wins!');
      setWinState(true);
      setWinClass('036');
    } else if (tacBoard[1] === 'X' && tacBoard[4] === 'X' && tacBoard[7] === 'X') {
      setWinMessage('X Wins!');
      setWinState(true);
      setWinClass('147');
    } else if (tacBoard[2] === 'X' && tacBoard[5] === 'X' && tacBoard[8] === 'X') {
      setWinMessage('X Wins!');
      setWinState(true);
      setWinClass('258');
    } else if (tacBoard[0] === 'X' && tacBoard[4] === 'X' && tacBoard[8] === 'X') {
      setWinMessage('X Wins!');
      setWinState(true);
      setWinClass('048');
    } else if (tacBoard[2] === 'X' && tacBoard[4] === 'X' && tacBoard[6] === 'X') {
      setWinMessage('X Wins!');
      setWinState(true);
      setWinClass('246');
    } else if (tacBoard[0] === 'O' && tacBoard[1] === 'O' && tacBoard[2] === 'O') {
      setWinMessage('O Wins!');
      setWinState(true);
      setWinClass('012');
    } else if (tacBoard[3] === 'O' && tacBoard[4] === 'O' && tacBoard[5] === 'O') {
      setWinMessage('O Wins!');
      setWinState(true);
      setWinClass('345');
    } else if (tacBoard[6] === 'O' && tacBoard[7] === 'O' && tacBoard[8] === 'O') {
      setWinMessage('O Wins!');
      setWinState(true);
      setWinClass('678');
    } else if (tacBoard[0] === 'O' && tacBoard[3] === 'O' && tacBoard[6] === 'O') {
      setWinMessage('O Wins!');
      setWinState(true);
      setWinClass('036');
    } else if (tacBoard[1] === 'O' && tacBoard[4] === 'O' && tacBoard[7] === 'O') {
      setWinMessage('O Wins!');
      setWinState(true);
      setWinClass('147');
    } else if (tacBoard[2] === 'O' && tacBoard[5] === 'O' && tacBoard[8] === 'O') {
      setWinMessage('O Wins!');
      setWinState(true);
      setWinClass('258');
    } else if (tacBoard[0] === 'O' && tacBoard[4] === 'O' && tacBoard[8] === 'O') {
      setWinMessage('O Wins!');
      setWinState(true);
      setWinClass('048');
    } else if (tacBoard[2] === 'O' && tacBoard[4] === 'O' && tacBoard[6] === 'O') {
      setWinMessage('O Wins!');
      setWinState(true);
      setWinClass('246');
    }
  }

  useEffect(() => {
    checkWin();
    console.warn(tacBoard);
  }, [tacBoard]);

  function handleClick(e) {
    if (!winState) {
      console.warn('registered click');
      if (count === 0 || count % 2 === 0) {
        if (!tacBoard[e.target.id]) {
          setTacBoard((prev) => prev.toSpliced(e.target.id, 1, 'X'));
          setCount((prev) => prev + 1);
          console.warn('X-click');
          console.warn(tacBoard);
        }
      } else if (count % 2 !== 0) {
        setTacBoard((prev) => prev.toSpliced(e.target.id, 1, 'O'));
        setCount((prev) => prev + 1);
        console.warn('O click');
        console.warn(tacBoard);
      }
    }
  }

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <>
      <div className="tac-box">
        <div
          className={`tac-square ${winClass.includes('0') ? 'win' : ''}`}
          onClick={handleClick}
          id="0"
          style={{
            borderBottom: 'solid 1px black',
            borderRight: 'solid 1px black',
          }}
        >
          {tacBoard[0]}
        </div>
        <div
          className={`tac-square ${winClass.includes('1') ? 'win' : ''}`}
          onClick={handleClick}
          id="1"
          style={{
            borderBottom: 'solid 1px black',
            borderLeft: 'solid 1px black',
            borderRight: 'solid 1px black',
          }}
        >
          {tacBoard[1]}
        </div>
        <div
          className={`tac-square ${winClass.includes('2') ? 'win' : ''}`}
          onClick={handleClick}
          id="2"
          style={{
            borderBottom: 'solid 1px black',
            borderLeft: 'solid 1px black',
          }}
        >
          {tacBoard[2]}
        </div>

        <div
          className={`tac-square ${winClass.includes('3') ? 'win' : ''}`}
          onClick={handleClick}
          id="3"
          style={{
            borderBottom: 'solid 1px black',
            borderTop: 'solid 1px black',
            borderRight: 'solid 1px black',
          }}
        >
          {tacBoard[3]}
        </div>
        <div
          className={`tac-square ${winClass.includes('4') ? 'win' : ''}`}
          onClick={handleClick}
          id="4"
          style={{
            borderBottom: 'solid 1px black',
            borderLeft: 'solid 1px black',
            borderRight: 'solid 1px black',
            borderTop: 'solid 1px black',
          }}
        >
          {tacBoard[4]}
        </div>
        <div
          className={`tac-square ${winClass.includes('5') ? 'win' : ''}`}
          onClick={handleClick}
          id="5"
          style={{
            borderBottom: 'solid 1px black',
            borderTop: 'solid 1px black',
            borderLeft: 'solid 1px black',
          }}
        >
          {tacBoard[5]}
        </div>

        <div
          className={`tac-square ${winClass.includes('6') ? 'win' : ''}`}
          onClick={handleClick}
          id="6"
          style={{
            borderTop: 'solid 1px black',
            borderRight: 'solid 1px black',
          }}
        >
          {tacBoard[6]}
        </div>
        <div
          className={`tac-square ${winClass.includes('7') ? 'win' : ''}`}
          onClick={handleClick}
          id="7"
          style={{
            borderTop: 'solid 1px black',
            borderLeft: 'solid 1px black',
            borderRight: 'solid 1px black',
          }}
        >
          {tacBoard[7]}
        </div>
        <div
          className={`tac-square ${winClass.includes('8') ? 'win' : ''}`}
          onClick={handleClick}
          id="8"
          style={{
            borderTop: 'solid 1px black',
            borderLeft: 'solid 1px black',
          }}
        >
          {tacBoard[8]}
        </div>
      </div>
      <h1>{winMessage}</h1>
      <div id="btns">
        <button
          type="button"
          onClick={() => {
            setCount(0);
            setTacBoard(blankBoard);
            setWinMessage('');
            setWinState(false);
            setWinClass('');
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}
