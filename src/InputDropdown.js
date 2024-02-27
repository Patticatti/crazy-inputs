import React, { useState } from "react";

const AlphabetDropdown = () => {
  const [selectedLetter, setSelectedLetter] = useState("");

  const handleChange = (event) => {
    setSelectedLetter(event.target.value);
  };

  // Generating options for letters A to Z
  const alphabetOptions = [];
  for (let i = 65; i <= 90; i++) {
    alphabetOptions.push(
      <option key={i} value={String.fromCharCode(i)}>
        {String.fromCharCode(i)}
      </option>
    );
  }

  return (
    <div>
      <label htmlFor="lettersDropdown">Select a letter:</label>
      <select
        id="lettersDropdown"
        value={selectedLetter}
        onChange={handleChange}
      >
        <option value="">Select</option>
        {alphabetOptions}
      </select>
      <p>Selected letter: {selectedLetter}</p>
    </div>
  );
};

export default AlphabetDropdown;
