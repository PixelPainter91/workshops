import { useState } from "react";

function Btn({ happy, defaultText }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button onClick={() => setIsClicked(true)}>
      {isClicked ? happy : defaultText}
    </button>
  );
}

export default function GrumpyButton() {
  return (
    <>
      <Btn happy="😠" defaultText="Don't Click Me!" />
      <Btn happy="😊" defaultText="Click Me!" />
    </>
  );
}
