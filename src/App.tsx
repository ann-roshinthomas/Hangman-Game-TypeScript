import { useState, useEffect, useCallback } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import HangmanKeyboard from "./HangmanKeyboard";
import "./App.css";

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      console.log("inside addguess", letter);
      if (guessedLetters.includes(letter) || isWinner || isLoser) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isLoser, isWinner]
  );

  useEffect(() => {
    console.log("inside useeffect");
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  return (
    <div className="App">
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isWinner && (
          <span style={{ color: "green" }}>
            Congratulations!!You won the game - Refresh to try again
          </span>
        )}
        {isLoser && (
          <span style={{ color: "red" }}>Nice Try - Refresh to try again </span>
        )}
      </div>
      <HangmanDrawing numberofGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        word={wordToGuess}
      />
      <HangmanKeyboard
        correctLetters={guessedLetters.filter((letter) =>
          wordToGuess.includes(letter)
        )}
        disabled={isWinner || isLoser}
        incorrectLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
      />
    </div>
  );
}

export default App;
