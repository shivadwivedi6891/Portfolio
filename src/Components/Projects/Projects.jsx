import React from 'react'
import './Projects.css'
import Cards from '../Cards/Cards'
import va from '../../assets/va.png'
import cb from '../../assets/cb.png'
import e from '../../assets/e.webp'
import download from '../../assets/download.jpg'


const Projects = () => {
  return (
    <div id="projects">
        <h1 id="font">PROJECTS</h1>
        <div className="slider">
            <Cards title="VIRTUAL ASSISTANCE" image={va}/>
            <Cards title="AI CHATBOT" image={cb}/>
            <Cards title="MULTI VENDER E-COMMERCE WEBSITE" image={e}/>
            <Cards title="WEATHER APP" image={download}/>
            
        
        
            
        </div>
       
    </div>
  )
}

export default Projects
