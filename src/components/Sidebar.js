import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links, socialIcons } from '../utils/constants'
import { SocialIcons } from '.'
import { useGlobalContext } from '../context/context'
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <ul className='sidebar-links'>
          {links.map((link) => {
            const { id, name, url } = link
            return (
              <li key={id}>
                <Link onClick={closeSidebar} className='sidebar-link' to={url}>
                  {name}
                </Link>
              </li>
            )
          })}
        </ul>
        <ul className='social-icons'>
          {socialIcons.map((i) => {
            
            return (
              <SocialIcons key={i.id} {...i} />
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
