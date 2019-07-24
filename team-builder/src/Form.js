import React from 'react';
import { useState } from "react";
import ReactDOM from "react-dom";


function Form() {
const [member, setMember] = useState("");

const handleChange = event => {
     setName(event.target.value);
      };

  return (
   <div>
    <form>
      <h3>Name: <input type='field' onChange={event => handleChange(event)}/></h3>
      <h4>Role:<input type='field'/></h4>
      <h4>Email:<input type='field'/> </h4>
      <input type='button' value='submit'/>
    </form> 
    </div>
    );
}


export default Form;


