import React from 'react'
const Footer = ()=>{
  const toDay = new Date();
  return(
    <footer>
        <p> Copyrigt &copy; {toDay.getFullYear()} </p>
    </footer>
  );
};

export default Footer;
