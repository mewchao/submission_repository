import React from "react";
import { useState ,useEffect } from 'react'

const Filter = (props) => {
    const [filter ,setfilter] = useState('')
  
    const handlefilterChange = (event) => {
      const filterValue = event.target.value;
      setfilter(filterValue);
    }
  
    // 添加一个函数来根据过滤条件过滤persons列表
    useEffect(() => {
      // console.log("2");
      const filterPersons = () => {
        if (Array.isArray(props.persons)) {
          // console.log(props.persons)
          const filtered = props.persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
          props.setFilteredPersons(filtered);
        } else {
          console.error('props.persons is not an array');
        }
      }
      filterPersons();
    }, [filter, props.persons, props.setFilteredPersons]);
  
    return(
      <div>
          filter shown with 
          <input value={filter} onChange={handlefilterChange}></input>
      </div>
    )
  }

  export default Filter