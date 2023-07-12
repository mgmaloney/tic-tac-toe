/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';

export default function TicTaccer() {
  const blankBoard = ['', '', '', '', '', '', '', '', ''];
  const [tacBoard, setTacBoard] = useState(blankBoard);
  const [count, setCount] = useState(0);

  function handleClick(e) {
    console.warn('registered click');
    if (count === 0 || count % 2 === 0) {
      if (!tacBoard[e.target.id]) {
        setTacBoard((prev) => prev.toSpliced(e.target.id, 1, 'X'));
        setCount((prev) => prev + 1);
        console.warn('X-click');
      }
    } else if (count % 2 !== 0) {
      setTacBoard((prev) => prev.toSpliced(e.target.id, 1, 'O'));
      setCount((prev) => prev + 1);
      console.warn('O click');
    } else if (count === 8) {
      setCount(0);
      setTacBoard(blankBoard);
    }
  }

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <>
      <div className="tac-box">
        <div
          className="tac-square"
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
          className="tac-square"
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
          className="tac-square"
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
          className="tac-square"
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
          className="tac-square"
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
          className="tac-square"
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
          className="tac-square"
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
          className="tac-square"
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
          className="tac-square"
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
    </>
  );
}
