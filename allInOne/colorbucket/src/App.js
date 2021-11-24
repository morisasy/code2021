import React from 'react'
import {useState} from 'react';
import './App.css';

import Square from './Square';
import Input from './Input';
import Footer from './Footer';

function App() {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true)

  return (
    <div className="App">
      <Square
        colorValue ={colorValue}
        hexValue = {hexValue}
        isDarkText = {isDarkText}
        />
      <Input
        colorValue = {colorValue}
        setColorValue = {setColorValue}
        setHexValue = {setHexValue}
        setIsDarkText = {setIsDarkText}
       />
       <Footer />
    </div>
  );
}

export default App;
