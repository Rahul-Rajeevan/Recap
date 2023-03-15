import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const [searchParams,setSearchParams]=useSearchParams()
const [category,setCategory]=useState(searchParams.getAll("category")||[])


  const handleChange=(e)=>{
    // console.log(e.target.value)
    let newCategory=[...category];
    let value=e.target.value;
    if(newCategory.includes(value))
    newCategory.splice(newCategory.indexOf(value),1);
    else
    newCategory.push(value)
    setCategory(newCategory)
    console.log(category);
  }
  useEffect(() => {
    setSearchParams({category})
  }, [category])
  
  return (
    <div>
      <div>
        <input type="checkbox" value="male" onChange={handleChange} 
        checked={category.includes("male")}
        />
        <label>Men</label>
      </div>
      <div>
        <input type="checkbox" value="female" onChange={handleChange} 
        checked={category.includes("female")}
        />
        <label>Women</label>
      </div>
      <div>
        <input type="checkbox" value="kids" onChange={handleChange} 
        checked={category.includes("kids")}
        />
        <label>Kids</label>
      </div>
    </div>
  );
};

export default Sidebar;
