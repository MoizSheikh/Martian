import React, { useState } from 'react';
import { Link } from "react-router-dom";

export const UpperNavbar = () => {
    const [ToggleBtn, setToggleBtn] = useState("☰");
    const handleBurgerMenu = () => {
        const home = document.getElementById("nav-home");
        const Links = document.getElementById("NavLinks");
        const CloseBtn = document.getElementById("closebtn");
        if(ToggleBtn === "X"){
            Links.style.display = "none";
            home.innerHTML = "";
            setToggleBtn("☰");
            CloseBtn.style.position = "absolute";
        }
        else{
            Links.style.display = "block";
            home.innerHTML = "HOME";
            setToggleBtn("X");
            CloseBtn.style.position = "fixed";
        }
    }
    return (
        <nav className='navbar FontFamily'>
            <div className='nav-links' id='NavLinks'>
                <div id="nav-home" className='nav-link'><img class="nav-homelogo" src={process.env.PUBLIC_URL + '/homelogo.png'} alt="logo" /></div>
                <div className='nav-shop'><Link to='/shop' className='nav-link'>SHOP</Link></div>
                <div className='nav-dome'><Link to='/domes' className='nav-link'>DOMES</Link></div>
                <div className='nav-build'><Link to='/build' className='nav-link'>BUILD</Link></div>
                <div className='nav-about'><Link to='/about' className='nav-link'>ABOUT</Link></div>
                {/* <Link to='/' className='nav-paper nav-link'>WHITE PAPER</Link> */}
                <div className='nav-event'><Link to='/event' className='nav-link'>EVENTS</Link></div>
                <div className='nav-blog'><Link to='/blog' className='nav-link'>BLOGS</Link></div>
                <div className='nav-more'><Link to='/more' className='nav-link'>MORE</Link></div>
            </div>
            <div class="nav-button" id="closebtn" onClick={handleBurgerMenu}>{ToggleBtn}</div>
        </nav>
    );
}

export function LowerNavbar() {
  return (
    <nav className='lower-navbar'>
        <div className='nav-contact'>Contact Us</div>
        <div className='nav-privacy'>Privacy Policy</div>
        <div className='nav-terms'>Terms</div>
        <div className='nav-policy'>Contact Policy</div>
        <div className='nav-ethics'>Ethics</div>
        <div className='nav-forums'>Forums</div>
    </nav>
  )
}