import React from "react"

const Person = (props) => {
    const lable = "delete"
    return (
        <div>
            {props.person.id} : {props.person.name} {props.person.number}
            <button onClick={()=>{props.deletePerson(props.person.id)}}>{lable}</button>
        </div>
    )
}

export default Person