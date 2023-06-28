const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  correctLetters: string[];
  disabled?: boolean;
  incorrectLetters: string[];
  addGuessedLetter: (letter: string) => void;
};
export default function HangmanKeyboard({
  correctLetters,
  disabled,
  incorrectLetters,
  addGuessedLetter,
}: KeyboardProps) {
  return (
    <div className="Hangman_keyboard">
      {KEYS.map((key) => {
        const isActive = correctLetters.includes(key);
        const isInactive = incorrectLetters.includes(key);
        return (
          <button
            className={`btn ${isActive ? "active" : ""} ${
              isInactive ? "inactive" : ""
            }`}
            key={key}
            onClick={() => addGuessedLetter(key)}
            disabled={isActive || isInactive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
