import { useState } from "react";
import AlphabetDropdown from "./AlphabetDropdown";
import Timer from "./Timer";

function App() {
  const [selectedLetters, setSelectedLetters] = useState("");
  const [showRickroll, setShowRickroll] = useState(false);

  const toggleRickroll = () => {
    setShowRickroll(!showRickroll);
  };

  const handleLetterSelection = (letter) => {
    setSelectedLetters((prevLetters) => prevLetters + letter);
  };

  const alphabetDropdowns = [];
  for (let i = 0; i < 4; i++) {
    alphabetDropdowns.push(<AlphabetDropdown key={i} />);
  }

  return (
    <div id="App">
      {showRickroll ? (
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="Rickroll"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="column">
          <h1>Enter your name</h1>
          <Timer setShowRickroll={setShowRickroll} />
          <p>
            Your name:
            <p className="bold" as="span">
              {selectedLetters}
            </p>
          </p>
          <div id="input-container">
            <AlphabetDropdown onSelect={handleLetterSelection} />
            <button onClick={toggleRickroll}>Submit</button>
          </div>
        </div>
      )}

      {/* Display selected letters */}
    </div>
  );
}

export default App;
