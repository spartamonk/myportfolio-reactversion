import React from 'react'

const SectionTitleCenter = ({title, text}) => {
  if(title === 'about me' || title === "contact" || title === 'my projects') {
    return (
      <div>
        <div className='section-title-center'>
          <h1>{title}</h1>
          <div className='underline'></div>
        </div>
      </div>
    )
  }
 return (
   <div>
     <div className='section-title-center'>
       <h2>{title}</h2>
       <div className='underline'></div>
       {text && <p>{text}</p>}
     </div>
   </div>
 )
}

export default SectionTitleCenter
