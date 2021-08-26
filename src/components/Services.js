import React from 'react'
import { services } from '../utils/constants'
import {SectionTitleCenter} from '.'

const Services = () => {
 return (
   <section className='section grey-bg'>
     <SectionTitleCenter title='services' />
     <div className='section-center services-center'>
      {
       services.map(service => {
        const {id, icon, text, title} = service;
        return (
         <article key={id} className="service">
          {icon}
          <h4>{title}</h4>
          <div className="underline"></div>
          <p>{text}</p>
         </article>
        )
       })
      }
     </div>
   </section>
 )
}

export default Services
