import { sculptureList } from "./sculptureData";
import { useState } from "react";
import "./App.css"

export default function Gallery(){
    const [index,setIndex] = useState(0); //image state
    const [toggle,setToggle] = useState(false) // toggle information


    function handleClick() {
        setIndex((index + 1)%(sculptureList.length));
    }

    function handleToggle() {
        setToggle(!toggle)
    }

    let sculpture = sculptureList[index];

    return (
<div className={"myDiv"}>
    <h1>Welcome to my gallery</h1>
    <button onClick={(handleClick)}>Next</button>
    <img src={sculpture.url} alt={sculpture.alt}/>
    <button onClick={(handleToggle)}>More</button>
    {toggle && <p>{sculpture.description}</p>}

</div>
    )
}