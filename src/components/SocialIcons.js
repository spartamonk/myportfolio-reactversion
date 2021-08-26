import React from 'react'
const SocialIcons = ({url, icon}) => {
 return (
   <li >
     <a className='social-icon' href={url}>
       {icon}
     </a>
   </li>
 )
}

export default SocialIcons
