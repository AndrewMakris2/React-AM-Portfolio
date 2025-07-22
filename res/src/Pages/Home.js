import React from 'react'
import Nav from '../Components/NavBar'
import Learning from '../Components/Learning'
import Problem from '../Components/Problem'
import Professional from '../Components/Professional'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills' 
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <Nav/>
        <Professional/>
        <Skills/>
        <Projects/>
        <Problem/>
        <Learning/>
        <Footer/>
    </div>
  )
}

export default Home