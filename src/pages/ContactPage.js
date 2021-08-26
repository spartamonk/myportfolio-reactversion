import React from 'react'
import { SectionTitleCenter } from '../components'

const ContactPage = () => {
  return (
    <section className='section single-page'>
      <SectionTitleCenter title='contact' />
      <div className='section-center page-center'>
        <p>
          If you are looking to get ahold of me, you can send me an email at{' '}
          <a href='mailto:email@email.com'>@your_email</a>
        </p>
        <p>
          You can also reach me on Twitter at{' '}
          <a href='https://www.twitter.com'>@your_social_media</a>
        </p>
      </div>
    </section>
  )
}

export default ContactPage
