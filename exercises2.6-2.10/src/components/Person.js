import React from "react"

const Person = (props) => {
    return (
        <div>
            {props.person.id} : {props.person.name} {props.person.number}
        </div>
    )
}

export default Person