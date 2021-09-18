import React, { useEffect, useState } from 'react'
import './Nav.css'
import logo from '../../assets/logo_light.png'
const Nav = () => {
  const [show, handleShow] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else {
        handleShow(false)
      }
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])
  
  return (
    <nav className={`nav ${show && 'nav__black'}`}>
      <img src={logo} alt="logo" className='nav__logo'/>
      <span className='logo_name'>dlscoccia</span>
    </nav>
  )
}

export default Nav
