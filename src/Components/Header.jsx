//#region components import
import Navbar from "./Navbar"
//#endregion
//#region icons import
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from "../Assets/Images/logo.png";
//#endregion
//#region library imports
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//#endregion

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleHandler = () => {
    setMenuOpen((p) => !p)
  };

  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  },[]);

  useEffect(() => {
    if(size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }

  },[size.width, menuOpen]);



  return (
    <header className='header'>
      <div className='header__content'>
        <Link to="/" className="header__content__logo"><img src={logo} alt="logo" /></Link>
      
        <Navbar cname={`${'header__content__nav'} ${menuOpen && size.width < 768 ? 'isMenu' : ''}`} menutoggle={menuToggleHandler}/>
        <div className='header__content__toggle'>
          {!menuOpen ? (<BiMenuAltRight onClick={menuToggleHandler} /> ) : ( <AiOutlineClose onClick={menuToggleHandler} />)}
        </div>
      </div>
    </header>
  )
}

export default Header;