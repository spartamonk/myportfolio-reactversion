import React from 'react'
import { timeline } from '../utils/constants'
import {SectionTitleCenter} from '.'
const Timeline = () => {
 return (
  <section className="section timeline-section">
   <SectionTitleCenter title="timeline" />
   <div className="section-center timeline-center">
      {
       timeline.map( i => {
        const {id, text, year} = i;
        return (
         <article key={id} className="timeline-item">
          <h4>{year}</h4>
          <p>{text}</p>
          <span>{id}</span>
         </article>
        )
       })
      }
   </div>
  </section>
 )
}

export default Timeline
