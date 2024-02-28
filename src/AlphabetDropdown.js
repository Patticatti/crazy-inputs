import React, { useState } from "react";

function shuffleAlphabet() {
  const alphabetOptions = [];
  const letters = [];
  for (let i = 65; i <= 90; i++) {
    letters.push(String.fromCharCode(i));
  }

  // Shuffle the array of letters using Fisher-Yates shuffle algorithm
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }

  // Push each letter into the alphabetOptions array
  letters.forEach((letter, index) => {
    alphabetOptions.push(
      <option key={index} value={letter}>
        {letter}
      </option>
    );
  });
  return alphabetOptions;
}

function AlphabetDropdown({ onSelect }) {
  const [selectedLetter, setSelectedLetter] = useState("");

  const handleChange = (event) => {
    shuffleAlphabet();
    setSelectedLetter(event.target.value);
    onSelect(event.target.value);
  };
  return (
    <div className="letter-select">
      <select
        id="lettersDropdown"
        value={selectedLetter}
        onChange={handleChange}
      >
        <option value="">Select</option>
        {shuffleAlphabet()}
      </select>
    </div>
  );
}

export default AlphabetDropdown;
