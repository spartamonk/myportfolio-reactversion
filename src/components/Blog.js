import React from 'react'
import SectionTitleCenter from './SectionTitleCenter'
import { Link } from 'react-router-dom'
import { blogs } from '../utils/constants'
const Blog = () => {
  return (
    <section className='section grey-bg'>
      <SectionTitleCenter title='blog' />
      <div className='section-center blogs-center'>
        {blogs.map((i) => {
          const { id, title, text, time, image, author, url } = i
          return (
            <article key={id} className='blog'>
              <div className='blog-side blog-front'>
                <img src={image} alt={title} className='blog-img' />
                <div className='blog-info'>
                  <h4>{title}</h4>
                  <p>{text}</p>
                  <div className="blog-footer">
                    <img src={author} alt={title} />
                    <p>{time}</p>
                  </div>
                </div>
              </div>
              <div className='blog-side blog-back'>
                <Link className="btn" to={url}>read more</Link>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Blog
