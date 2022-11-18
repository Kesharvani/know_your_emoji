import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🏁": "Chequered Flag",
  "🏳️‍🌈": "Rainbow Flag",
  "🏴": "Black Flag",
  "🏳️": "White Flag",
  "🚩": "Triangular Flag",
  "🎌": "Crossed Flags",
  "🏳️‍⚧️": "Transgender Flag",
  "🏴‍☠️": "Pirate Flag",
  "🏴󠁵󠁳󠁴󠁸󠁿": "Flag for Texas (US-TX)",
  "🏳‍🟧‍⬛‍🟧": "Refugee Nation Flag",
};

var emojiWeKnow = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setMeaning] = useState("");
  function clickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }
  function emojiHandler(event) {
    const userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "No value in our database. Please try different emoji";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Flag Finder</h1>
      <input onChange={emojiHandler}></input>
      <div>{meaning}</div>

      <h3>Flag We Know</h3>

      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            style={{ cursor: "pointer", fontSize: "2rem", padding: "0.5rem" }}
            onClick={() => clickHandler(emoji)}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
