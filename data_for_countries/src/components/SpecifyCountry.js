import React from "react"
import Image from "./Image";

const SpecifyCountry =(props) => {

    const languages=  props.country.languages

    let mappedLanguages = Object.keys(languages).map(function(key) {
        return {
          key: key,
          value: languages[key]
        };
      });
      
      
    return (
        <div>
            <p>{props.country.name.common}</p>
            <div>capital:    {props.country.capital}</div>
            <div>area:       {props.country.area}</div>
            <div>population: {props.country.population}</div>
            <p>Languages</p>
            <ul>
                {mappedLanguages.map(language => <li key={language.key}>{language.value}</li>)}
            </ul>
            <Image imageSrc={props.country.maps.openStreetMaps} />
        </div>
    )
}

export default SpecifyCountry