import { useState } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  return (
    <>
      <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        margin: "0 auto"
      }}>

        <div style={{fontSize: "2rem", textAlign:"center"}}>
          Lose
          Win
        </div>

        <HangmanDrawing />
        <HangmanWord />
        <Keyboard />
      </div>
    </>
  );
}

export default App;