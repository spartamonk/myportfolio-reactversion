import React from 'react'
import connectVideo from '../assets/videos/connect2.mp4'
import posterImage from '../assets/images/project-1.jpeg'
import SectionTitleCenter from './SectionTitleCenter'
import {Link} from 'react-router-dom'

const Connect = () => {
 return (
   <section className='connect'>
     <video
       autoPlay
       controls
       muted
       loop
       className='video-container'
       poster={posterImage}
     >
       <source src={connectVideo} type='video/mp4' />
       Sorry, your browser does not support embeded videos
     </video>
     <div className='video-banner'>
       <SectionTitleCenter title="let's get in touch" />
       <p className='video-banner-text'>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione
         perferendis exercitationem sit. Beatae eius commodi officiis rem soluta
         ratione dignissimos quisquam tempore laudantium, porro vitae cupiditate
         dicta magni quas corrupti aperiam, rerum minus odio totam repellendus
         delectus nostrum veniam!{' '}
       </p>
       <Link className='btn'>contact me</Link>
     </div>
   </section>
 )
}

export default Connect
