import React from "react";
import Part from "./Part";
import Total from "./Total";

const Content = (props) => {

    let total = 0

    props.parts.forEach((part) => {
        total += part.exercises
    }
    );

    console.log(total);

    return (
        <div>
            {
                props.parts.map(part => <Part key = {part.id} name = {part.name} exercises={part.exercises}/>)
            }
            <Total total={total}/>
        </div>
    )
  }
  
  export default Content
