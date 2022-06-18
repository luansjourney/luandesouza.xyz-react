//#region components import
import Navbar from "./Navbar"
//#endregion
//#region icons import
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
//#endregion
//#region library imports
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//#endregion

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    heigth: undefined,
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

  const menuToggleHandler = () => {setMenuOpen((p) => !p)};

  return (
    <header className='header'>
      <div className='header__content'>
        <Link to="/" className="header__content__logo">Navbar</Link>
      
        <Navbar cname={`${'header__content__nav'} ${menuOpen ? 'isMenu' : ""}`} menutoggle={menuToggleHandler}/>
        <div className='header__content__toggle'>
          {menuOpen ? <AiOutlineClose  onClick={menuToggleHandler}/> : <BiMenuAltRight onClick={menuToggleHandler} />}
        </div>
      </div>
    </header>
  )
}

export default Header;