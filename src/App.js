import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {AboutPage, ContactPage, HomePage, ProjectsPage, ErrorPage} from './pages'
import { Navbar, Footer, Sidebar} from './components/'

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route path='/contact'>
          <ContactPage />
        </Route>
        <Route path='/projects'>
          <ProjectsPage />
        </Route>
        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
