import "./Summary.css"


export default function Summary({products}) {

let sum = 0;

products.forEach(product => {
    sum = sum + product.count
});

  return (
    <div className="summary">
      <p className="summaryItems">{`You have total ${sum} items in your cart.`}</p>
     
    </div>
  );
}
