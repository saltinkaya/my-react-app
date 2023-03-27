import "./items.css";

export default function Items({ onPlusClick, id ,name, count, onDecreaseClick,onDeleteClick}) {
  return (
    <li key={id} className="wrapper">
      <p id={id} className="totalItems">{`${count} `}</p>
      <p id={id} >{name}</p>
      <button id={id} onClick={(e) => onPlusClick(e)}>+</button>
      <button id={id} onClick={(e) => onDecreaseClick(e)}>-</button>
      <button id={id} onClick={(e) => onDeleteClick(e)} >Delete</button>
    </li>
  );
}
