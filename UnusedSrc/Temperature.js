import "./App.css";
import { useState } from "react";
export default function Temperature() {
  const [temp, setTemp] = useState(0);
  const [bgColor, setbgColor] = useState("olivedrab");

  function handleIncrement() {
    setTemp(temp + 1);
    temp > 8 ? setbgColor("red") : setbgColor("olivedrab");
  }

  function handleDecrement() {
    temp > 0 ? setTemp(temp - 1) : setTemp(temp);
    temp > 11 ? setbgColor("red") : setbgColor("olivedrab");
  }

  return (
    <div className={"container"}>
      <div className="temperature" style={{ backgroundColor: bgColor }}>
        {temp}
      </div>
      <div className={"button-container"}>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
}
