import { useState } from "react";
import Summary from "./Summary";
import Container from "./Container";
import { data } from "./product-data";
import Edits from "./Edits";
import Items from "./Items";
import "./App.css"

export default function App() {
  // ******** STATE MANAGEMENT START ********

  const [products, setProducts] = useState(data);

  // ******** STATE MANAGEMENT ENDS ********

  // ******** FUNCTIONS STARTS ********
  // Handle Clear button to empty all items in cart

  function handleClearClick() {
    setProducts(
      products.map((product) => {
        return { ...product, count: 0 };
      })
    );
  }

  // Handle Plus Button Click to increase the count of a selected item

  function handlePlusClick(e) {
    setProducts(
      products.map((product) => {
        if (product.id == e.target.id) {
          return { ...product, count: product.count + 1 };
        } else return { ...product };
      })
    );
  }

  // Handle Decrease Button Click to decrease the count of a selected item

  function handleDecreaseClick(e) {
    let newProducts = products.map((product) => {
      if (product.id == e.target.id && product.count > 0) {
        return { ...product, count: product.count - 1 };
      } else return { ...product };
    });

    setProducts(newProducts);
  }

  // Handler for Delete Button Click
  function handleDeleteClick(e) {
    setProducts(products.filter((product) => product.id != e.target.id));
  }

  // Handle input change on Value input

  function handleInputChange(e) {
    return e.target.value;
  }

  function handleSubmit(e) {
    
    if(e.target[0].value != ""){
    setProducts([
      ...products,
      { id: products.length, name: e.target[0].value, count: 0 },
    ])}
    e.preventDefault();
    
  }

  // ******** FUNCTIONS END ********

  return (
    <Container>
      <Summary products={products} />
      <Edits onClearClick={handleClearClick} handleSubmit={handleSubmit} />
      <ul className="items">
        {products.map((product) => {
          return (
            <Items
              onInputChange={handleInputChange}
              onPlusClick={handlePlusClick}
              onDecreaseClick={handleDecreaseClick}
              onDeleteClick={handleDeleteClick}
              id={product.id}
              name={product.name}
              count={product.count}
            />
          );
        })}
      </ul>
    </Container>
  );
}
