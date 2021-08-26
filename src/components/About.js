import React from 'react'
import aboutImg from '../assets/images/about-img.jpeg'
import { SectionTitleLeft } from '.'
import { Link } from 'react-router-dom'


const About = () => {
 return (
   <section className='section about-section'>
     <div className='section-center about-center'>
       <article className='about-img-container img-container'>
         <img
           src={aboutImg}
           alt='Photographer'
           className='photo-img about-img'
         />
       </article>
       <article className='about-info'>
         <SectionTitleLeft title='about' />
         <p className='about-text'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae,
           eum maiores est enim earum fugiat aspernatur. Fuga qui iste amet
           reiciendis possimus rerum omnis recusandae molestias error
           consequuntur, doloribus inventore reprehenderit officiis. Dolore aut,
           repellendus eius fugiat numquam cumque.
         </p>
         <p className='about-text'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae,
           eum maiores est enim earum fugiat aspernatur. Fuga qui iste amet
           reiciendis possimus rerum omnis recusandae molestias error
           consequuntur, doloribus inventore reprehenderit officiis. Dolore aut,
           repellendus eius fugiat numquam cumque.
         </p>
         <Link to="/about" className="btn">about me</Link>
       </article>
     </div>
   </section>
 )
}

export default About
