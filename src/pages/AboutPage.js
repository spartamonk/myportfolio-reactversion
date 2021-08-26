import React from 'react'
import { SectionTitleCenter } from '../components'
const AboutPage = () => {
  return (
    <section className='section single-page'>
      <SectionTitleCenter title='about me' />
      <div className='section-center page-center'>
        <p>
          Hello, I am John Doe and I am a web developer. I live and work in
          somewhere warm. I spend most of my day, experimenting with HTML, CSS
          and JavaScript (and its endless list of frameworks). I enjoy coding
          and the challenge of learning something new everyday. You can also
          find me at youtube channel{' '}
          <a href='https://www.youtube.com/channel/UC5xR76cCy_8YN1JMdyzuPgQ'>
            askademia
          </a>
        </p>
      </div>
    </section>
  )
}

export default AboutPage
