import React from 'react';
import colorNames from 'colornames';

const Input = ({colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText}) => {
    return(
      <form onSubmit ={(e)=>e.preventDefault()}>
          <label htmlFor="addColorName">Add color Name: </label>
          <input
              autoFocus
              id='addColorName'
              type='text'
              role='addcolor'
              placeholder = " Add color name "
              required
              value = {colorValue}
              onChange = {(e)=> {
                setColorValue(e.target.value);
                setHexValue(colorNames(e.target.value));
              }}

          />
          <button
          type = "button"
          onClick ={()=> setIsDarkText(!setIsDarkText)}
          >
          Toggle Text Color
          </button>
      </form>
    )
}


export default Input;
