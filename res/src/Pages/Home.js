import React from 'react'
import Nav from '../Components/NavBar'
import Learning from '../Components/Learning'
import Problem from '../Components/Problem'
import Professional from '../Components/Professional'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills' 
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'

const Home = () => {
  return (
    <div>
        <Nav/>
        <Banner/>
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