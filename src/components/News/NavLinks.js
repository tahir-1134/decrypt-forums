import React, { useState } from 'react'
import './NavLinks.css'
import NavLink from "./NavLink"

function NavLinks() {
    const [active, setActive] = useState(false);
    const catagories = ["Bitcoin","Blockchain","Ethereum","Altcoins","DeFi","Policy & Regulation","Adoption"];

    // const [windowStatus, setWindowStatus] = useState(
    //   window.innerWidth > 800 ? true : false
    // );
  
    // function checkWindowSize() {
    //   setWindowStatus(window.innerWidth > 800 ? true : false);
    // }
    // window.onresize = checkWindowSize;
  

    function makeActive(){
        setActive(true)
        console.log(active);
    }

  return (
    // windowStatus && (
      <nav className='navLinks'>
    {catagories.map((catagory)=>(
        <NavLink key={catagory} catagory={catagory} isActive={active} onMouseOver={makeActive}/>
    ))}
</nav>)
  // )
}

export default NavLinks