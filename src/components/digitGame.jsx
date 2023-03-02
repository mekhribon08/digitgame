import React, { useState } from "react";
import "./digitGame.css";

export default function DigitGame() {
  const [randomNumber, setRandomNumber] = useState(random(0, 100));
  const [enteredNumber, setEnteredNumber] = useState(0);

  const text = document.querySelector(".text");

  function handleSubmit(evt) {
    evt.preventDefault();

    if (randomNumber === enteredNumber) {
      text.textContent = "You win! )";
      setRandomNumber(random(0, 100));
      return;
    }

    if (randomNumber > enteredNumber) {
      text.textContent = "Higher number";
    }

    if (randomNumber < enteredNumber) {
      text.textContent = "Lower number";
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="title">GUESS GAME</h1>
      <input
        className="input"
        onChange={(evt) => setEnteredNumber(+evt.target.value)}
        value={enteredNumber}
        type="number"
      />
      <button className="btn" type="submit">
        Guess
      </button>
      <h2 className="text"></h2>
    </form>
  );
}

function random(start, end) {
  return Math.trunc(start + Math.random() * end);
}
