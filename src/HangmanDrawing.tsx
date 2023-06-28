import "./App.css";

const HEAD = <div className="hangman_drawing_head"></div>;
const BODY = <div className="hangman_drawing_body"></div>;
const RIGHT_ARM = <div className="hangman_drawing_right_arm"></div>;
const LEFT_ARM = <div className="hangman_drawing_left_arm"></div>;
const RIGHT_LEG = <div className="hangman_drawing_right_leg"></div>;
const LEFT_LEG = <div className="hangman_drawing_left_leg"></div>;
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberofGuesses: number;
};

export default function HangmanDrawing({
  numberofGuesses,
}: HangmanDrawingProps) {
  return (
    <div className="hangman_drawing">
      {BODY_PARTS.slice(0, numberofGuesses)}
      <div className="hangman_drawing_side"></div>
      <div className="hangman_drawing_top"></div>
      <div className="hangman_drawing_middle"></div>
      <div className="hangman_drawing_bottom"></div>
    </div>
  );
}
