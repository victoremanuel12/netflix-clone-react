import React, { useEffect,useState } from 'react';
import './Nav.css'
import LogoNetflix from '../img/netflix.ico'
import NetflixAvatar from '../img/Netflix-avatar.ico'

// import { Container } from './styles';

function Nav() {
  const [show,handleShow] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", function listener(){
      if(window.scrollY > 100){
        handleShow(true)
      }else handleShow(false)
      
      return () => {
        window.removeEventListener("scroll",listener)
      }
    })
  },[])
  return (
      <nav className={`nav ${show &&  "nav__black" }`}>
        <img src={LogoNetflix} alt="Netflix Logo" className="nav__logo" />    
        <img src={NetflixAvatar} alt="Netflix Logo" className="nav__avatar" />     
      </nav>     
  )
}

export default Nav;
