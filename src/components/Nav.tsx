import React, { FC, useEffect, useState } from 'react'
import logo from '../assets/netflix-logo.png'
import avatar from '../assets/Netflix-avatar.png'
import '../style/Nav.css'

const Nav:FC = ()=>{
  const [show, setShow] = useState<boolean>(false);

  const scroll = () => {
    if (window.scrollY >= 80) setShow(true)        
    else setShow(false)
  }

  useEffect(()=>{    
    window.addEventListener('scroll', scroll)

    return () => window.removeEventListener('scroll', scroll)
  }, [])

  return (
    <nav className= {`navbar ${show && 'black-navbar'}`}>
        <img src={logo} alt="netflix logo" className='logo' />
        <img src={avatar} alt="avatar" className='avatar' />
    </nav>
  )
}

export default Nav