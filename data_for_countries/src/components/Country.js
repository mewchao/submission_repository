import React, { useState } from "react"

import SpecifyCountry from "./SpecifyCountry"

const Country = (props) => {
    let [show , setShow] = useState(true)
    return ( 
        <div>
             {!show ? <SpecifyCountry country={props.country}/> : <div>{props.country.name.common}</div>}
            <button onClick={() => setShow(!show)}>
                show {show ? 'specific' : 'easy' }
            </button>
        </div>
    )
}

export default Country