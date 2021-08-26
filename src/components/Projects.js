import React from 'react'
import { SectionTitleCenter } from '.'
import { projects } from '../utils/constants'
import{Link} from 'react-router-dom'

const Projects = () => {
  return (
    <section className='section projects-section'>
      <SectionTitleCenter
        title='latest works'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repudiandae cupiditate ea facilis incidunt, non sapiente! Debitis magnam, earum assumenda obcaecati cum quaerat facere ratione molestiae dignissimos aliquid blanditiis architecto voluptates delectus voluptate animi nulla! Autem explicabo perspiciatis officia ea. '
      />
      <div className='section-center projects-center'>
        {projects.map((p) => {
          const { id, title, clientName, image, layout, url } = p
          return (
            <Link className={layout} to={url}>
              <article className='project' key={id}>
                <img className='project-img' src={image} alt={title} />
                <div className='project-info'>
                  <h4>{title}</h4>
                  <p>{clientName}</p>
                </div>
              </article>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
