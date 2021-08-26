import React from 'react'
import { allProjects } from '../utils/constants'

const AllSingleProject = () => {
 return (
  <div className="section-center single-project-center">
   {
    allProjects.map(i => {
     const { id, title, text, image, socialIcon, url, urlIcon, sourceCode } = i
     return (
       <article className='project-card' key={id}>
         <div className='project-img-container'>
           <img src={image} alt='title' className='project-card-img' />
           <a href={url}>{urlIcon}</a>
         </div>
         <div className='project-card-info'>
           <h4>{title}</h4>
           <p>{text}</p>
           <div className='project-card-footer'>
             <span>{socialIcon}</span>
             <a href={sourceCode}>source code</a>
           </div>
         </div>
       </article>
     )
    })
   }
  </div>
 )
}

export default AllSingleProject
