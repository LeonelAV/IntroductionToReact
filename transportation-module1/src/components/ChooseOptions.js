import React from 'react'

function ChooseOptions(){
  return(
  <div>
     <label>New Only<input type="checkbox" checked /></label>
      <br/>
      <label>Select type 
        <select>
          <option>{props.options[0]}</option>
          <option>{props.options[1]}</option>
          <option>{props.options[2]}</option>
          <option>{props.options[3]}</option>
        </select>
      </label>
  </div>
  )
}