import React from 'react'
import './Home.css'
import shiva from '../../assets/shiva.png'
import { Typewriter } from 'react-simple-typewriter';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

function Home()  {

  useGSAP(() => {

    let tl1 = gsap.timeline();

    tl1.from(".line1", {

      y: 100,
      duration: 1,
      opacity: 0
    })
    tl1.from(".line2", {

      y: 100,
      duration: 1,
      opacity:0
      
    })
    tl1.from(".line3", {

      y: 100,
      duration: 1,
      opacity: 0
    })

    tl1.from(".left-home",{
      x: 100,
      duration: 1,
      opacity: 0
    })
    tl1.from(".right-home",{
      x: 100,
      duration: 1,
      opacity: 0
    })
    
    

  })
  return (
    <div id="home">



      <div className="left-home">
        <div className="home-details">
          <div className="line1"> I AM</div>
          <div className="line2">SHIVA DWIVEDI</div>
          <div className="line3">


            <Typewriter
              words={["WEB DEVELOPER", "SOFTWARE ENGINEER"]}
              loop={true}
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />


          </div>

          <button>Know More</button>

        </div>
      </div>

      <div className="right-home">
        <img src={shiva} alt="" />
      </div>

    </div>
  )
}

export default Home
