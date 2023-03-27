import { useState } from "react";
import "./App.css";

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
];

export default function App() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent((current + 1)%images.length)
  }

  function previousSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1)

  }

  return (
    <div className="container">
      <button onClick={previousSlide}>{"<-"}</button>
      {images.map((image, index) => {
        return (
          current === index && (
            <div key={index} className="image-slider">
              <h1>{`Image ${index}`}</h1>
              <img src={image} alt="image" />
            </div>
          )
        );
      })}
      <button onClick={nextSlide}>{"->"}</button>
    </div>
  );
}
