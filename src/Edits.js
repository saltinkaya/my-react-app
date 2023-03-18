import "./Edits.css";
import { useState } from "react";

export default function Edits({ onClearClick, handleSubmit }) {
  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div className="edits">
      <button onClick={onClearClick}>Clear</button>
      {isEditing ? (
        <button onClick={(e) => setIsEditing(!isEditing)}>+1</button>
      ) : (
        <form
          onSubmit={(e) => {
            handleSubmit(e);
            setInputValue("");
            setIsEditing(!isEditing)

          }}
        >
          <label>
            <input type="text" value={inputValue} onChange={e=> setInputValue(e.target.value)} />
          </label>

          <input type="submit" value="Save" />
        </form>
      )}
    </div>
  );
}
