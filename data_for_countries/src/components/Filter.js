import React from "react";
import { useState ,useEffect } from 'react'

const Filter = (props) => {
    const [filter ,setfilter] = useState('')
  
    const handlefilterChange = (event) => {
      const filterValue = event.target.value;
      setfilter(filterValue);
    }
  
    // 添加一个函数来根据过滤条件过滤countries列表
    useEffect(() => {
    const filtered = props.countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()));
    props.setFilteredcountries(filtered);
    // console.log(filtered);
    }, [filter, props.countries]);
  
    return(
      <div>
          filter shown with 
          <input value={filter} onChange={handlefilterChange}></input>
      </div>
    )
  }

  export default Filter