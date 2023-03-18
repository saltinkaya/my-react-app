import { useState } from "react";
import "./App.css";
import { meals } from "./data.js";

export default function Menu() {
  const [products, setProducts] = useState(meals);

  function handleIncreaseClick(e) {
    let nextProducts = products.map((product) => {
      if (product.id === e) {
        return {
          ...product,
          count: product.count + 1,
        };
      } else {
        return product;
      }
    });

    setProducts(nextProducts);
  }

  function handleDecreaseClick (e) {
    let nextProducts = products.map((product) => {
      if (product.id === e) {
        return {
          ...product,
          count: product.count - 1,
        };
      } 
      
      else {
        return product;
      }
    });

nextProducts = nextProducts.filter(product => product.count > 0)

    setProducts(nextProducts);
  }

  return (
    <ul>
      {products.map((product) => (
        <li className={"listElement"} key={product.id}>
          {product.name} ({product.count})
          <button onClick={() => handleIncreaseClick(product.id)}>+</button>
          <button onClick={() => handleDecreaseClick(product.id)}>-</button>
        </li>
      ))}
    </ul>
  );
}
