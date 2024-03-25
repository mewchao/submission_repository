import React from "react";
import { useState ,useEffect } from 'react'

const Filter = (props) => {
    const [filter ,setfilter] = useState('')
  
    const handlefilterChange = (event) => {
      const filterValue = event.target.value;
      setfilter(filterValue);
    //   console.log(filter);
    }
  
    // 添加一个函数来根据过滤条件过滤persons列表
    useEffect(() => {
    const filtered = props.persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
    props.setFilteredPersons(filtered);
    console.log(filtered);
    }, [filter, props.persons]);
  
    return(
      <div>
          filter shown with 
          <input value={filter} onChange={handlefilterChange}></input>
      </div>
    )
  }

  export default Filter