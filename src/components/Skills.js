import React, {useEffect} from 'react'
import SectionTitleCenter from './SectionTitleCenter'
import {frontEnd, backEnd} from '../utils/constants'

const Skill = () => {
 useEffect(()=> {
 

  
  
 },[])
 return (
   <section className='section yellow-bg'>
     <SectionTitleCenter title='skills' />
     <div className='section-center skills-center'>
       <article className='skill'>
         <h3>front end</h3>
         {frontEnd.map((s) => {
           const { id, name, score } = s
           return (
             <>
               <p className='skill-text' key={id}>
                 {name}
               </p>
               <div className='skill-container'>
                 <div
                   style={{ width: `${score}%` }}
                   className='skill-value'
                 ></div>
                 <p style={{left: `${score}%`}} className='skill-score'>{score}%</p>
               </div>
             </>
           )
         })}
       </article>
       <article className='skill'>
         <h3>back end</h3>
         {backEnd.map((s) => {
           const { id, name, score } = s
           return (
             <>
               <p className='skill-text' key={id}>
                 {name}
               </p>
               <div className='skill-container'>
                 <div
                   style={{ width: `${score}%` }}
                   className='skill-value'
                 ></div>
                 <p style={{ left: `${score}%` }} className='skill-score'>
                   {score}%
                 </p>
               </div>
             </>
           )
         })}
       </article>
     </div>
   </section>
 )
}

export default Skill
