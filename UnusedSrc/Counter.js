import "./App.css";
import { useState } from "react";
export default function Counter() {
  const [answer, setAnswer] = useState(0);

  function handleIncrease() {
    setAnswer(answer + 1);
  }

  function handleDecrease() {
    setAnswer(answer - 1);
  }

  return (
    <div className={"counter-area"}>
      <div className={"count-box"} onClick={handleIncrease}>
        +
      </div>
      <div className={"answer-box"}>{answer}</div>
      <div className={"count-box"} onClick={handleDecrease}>
        -
      </div>
    </div>
  );
}
