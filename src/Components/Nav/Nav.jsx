import React, { useRef } from 'react'
import './Nav.css'
import {Link} from 'react-scroll'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'




function Nav() {

    
    let menu = useRef()
    let mobile = useRef()

    useGSAP(()=>{

        let tl = gsap.timeline()


        tl.from("nav h1",{

            y:-100,
            duration:0.3,
            opacity:0
        })

        tl.from("nav ul li",{
            y:-100,
            duration:0.2,
            opacity:0,
            stagger:1

        })

    })
   
  return (
   <nav>
    <h1>PORTFOLIO</h1>

    <ul className="desktop-menu">
        <Link to="home"  activeClass='active' spy={true} smooth= {true} ><li>Home</li></Link>
        <Link to="about" activeClass='active' spy={true} smooth= {true}><li>About</li></Link>
        <Link to="projects" activeClass='active' spy={true} smooth= {true}><li>Projects</li></Link>
        <Link to="contact" activeClass='active'  spy={true} smooth= {true}><li>Contact</li></Link>
        
    </ul>
<div className="hamburger" ref={menu} onClick={ ()=>{
   mobile.current.classList.toggle("activemobile")
   menu.current.classList.toggle("activeham")
}

}>
    <div className="ham"></div>
    <div className="ham"></div>
    <div className="ham"></div>
</div>
    <ul className="mobile-menu" ref={mobile}>
        <Link to="home"  activeClass='active' spy={true} smooth= {true} ><li>Home</li></Link>
        <Link to="about" activeClass='active' spy={true} smooth= {true}><li>About</li></Link>
        <Link to="projects" activeClass='active' spy={true} smooth= {true}><li>Projects</li></Link>
        <Link to="contact" activeClass='active'  spy={true} smooth= {true}><li>Contact</li></Link>
        
    </ul>
   </nav>
  )
}

export default Nav
