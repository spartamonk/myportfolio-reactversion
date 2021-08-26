import React from 'react'
import { SocialIcons } from '.'
import { socialIcons } from '../utils/constants'
import { Link } from 'react-router-dom'
import heroImg from '../assets/images/hero-img.jpeg'
const Header = () => {
  return (
    <header className='hero'>
      <div className='hero-banner section-center'>
        <article className='banner-info'>
          <div className='underline'></div>
          <h1>i'm john</h1>
          <h4>freelance web & mobile UI/UX Designer</h4>
          <Link className='btn hero-btn'>hire me</Link>
          <ul className='social-icons banner-social-icons'>
            {socialIcons.map((i) => {
              return <SocialIcons key={i.id} {...i} />
            })}
          </ul>
        </article>
        <article className="img-container banner-img-container">
         <img src={heroImg} alt="John Doe" className="photo-img" />
        </article>
      </div>
    </header>
  )
}

export default Header
