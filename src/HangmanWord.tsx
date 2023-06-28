type HangmanWordsProps = {
  guessedLetters: string[];
  word: string;
  reveal?: boolean;
};

export default function HangmanWord({
  guessedLetters,
  word,
  reveal = false,
}: HangmanWordsProps) {
  return (
    <div className="Hangman_word">
      {word.split("").map((letter, index) => {
        return (
          <span className="letter" key={index}>
            <span
              style={{
                visibility:
                  guessedLetters.includes(letter) || reveal
                    ? "visible"
                    : "hidden",
                color:
                  !guessedLetters.includes(letter) && reveal ? "red" : "black",
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
}
