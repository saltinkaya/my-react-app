import "./App.css";

function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

function Toolbar({ children }) {
  return <div className={"toolbar"}>{children}</div>;
}

export default function Navbar() {
  function handleClick() {
    return alert("hello");
  }

  return (
    <div>
      <div onClick={() => {alert("you clicked to toolbar")}}>
        <Button onClick={handleClick}>Click Me!</Button>
      </div>
    </div>
  );
}
