import React from 'react'
import { SectionTitleCenter } from '../components'
import { AllSingleProject } from '../components'

const ProjectsPage = () => {
 return (
   <>
     <header className='single-page-projects'>
       <SectionTitleCenter title='my projects' />
     </header>
     <section className='section'>
       <AllSingleProject />
     </section>
   </>
 )
}

export default ProjectsPage
