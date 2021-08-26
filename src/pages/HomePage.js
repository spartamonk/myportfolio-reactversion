import React from 'react'
import { Header, About, Services, Projects, Connect, Skills, Timeline, Blog } from '../components'

const HomePage = () => {
    React.useEffect(() => {
      document.title = 'John Doe || Home'
    }, [])
 return (
   <>
   <Header />
     <About />
     <Services />
     <Projects />
     <Connect />
     <Skills />
     <Timeline />
     <Blog />
   </>
 )
}

export default HomePage
