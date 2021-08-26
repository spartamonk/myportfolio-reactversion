import React from 'react'
import SocialIcons from './SocialIcons'
import { socialIcons } from '../utils/constants'

const Footer = () => {
 return (
   <footer className='footer'>
     <ul className='social-icons footer-icons'>
       {socialIcons.map((i) => {
         return <SocialIcons key={i.id} {...i} />
       })}
     </ul>
     <p className='footer-text'>
       &copy; <span>{new Date().getFullYear()}</span> john doe. all rights
       reserved
     </p>
   </footer>
 )
}

export default Footer
