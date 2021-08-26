import React, {useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
import navLogo from '../assets/images/logo.svg'
import { FaBars } from 'react-icons/fa'
import {links} from '../utils/constants'
import {useGlobalContext} from '../context/context' 
const Navbar = () => {
  const { openSidebar} = useGlobalContext();
const navRef = useRef(null)
  // add fixed class to navbar
useEffect(()=> {
  const event = window.addEventListener('scroll', ()=> {
    if(window.pageYOffset>80) {
      navRef.current.classList.add('navbar-fixed')
    } else {
      navRef.current.classList.remove('navbar-fixed');
    }
  })
  return ()=> window.removeEventListener('scroll',event)
},[])
  return (
    <nav className='nav' ref={navRef}>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={navLogo} alt='John Doe' className='nav-logo' />
          </Link>
          <button className='toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
         {  
            links.map(link => {
              const {id, name, url} = link
              return (
                <li key={id}>
                  <Link className='nav-link' to={url}>
                    {name}
                  </Link>
                </li>
              )
            })
         }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
