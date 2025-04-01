import React from 'react'
import './About.css'
import Cards from '../Cards/Cards'
import mern from '../../assets/mern.png'
import dsa from '../../assets/dsa.png'
import COVER from '../../assets/COVER.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

function About () {
    return (
        <div id="about">
            <div className="left-about">
                <div className="circle-line">

                    <div className="circle"></div>
                    <div className="line"> </div>

                    <div className="circle"> </div>
                    <div className="line"></div>

                    <div className="circle"> </div>




                </div>
                <div className="about-details">
                    <div className="personal-info">
                        <h1>Personal Info</h1>
                        <ul>
                            <li>
                                <span>NAME</span> : SHIVA DWIVEDI

                            </li>

                            <li>
                                <span>AGE</span> : 20 YEARS

                            </li>
                            <li>
                                <span>GENDER</span> : MALE

                            </li>

                            <li>
                                <span>LANGUAGE</span> : ENGLISH, HINDI

                            </li>

                        </ul>
                    </div>

                    <div className="education">
                        <h1>Education</h1>
                        <ul>
                            <li>
                                <span>DEGREE</span> : BTECH

                            </li>

                            <li>
                                <span>BRANCH</span> : COMPUTER SCIENCE & ENGINEERING

                            </li>
                            <li>
                                <span>UNIVERCITY</span> : RGPV

                            </li>

                           

                        </ul>
                    </div>

                    <div className="skills">
                        <h1>Skills</h1>
                        <ul>
                            <li>
                               MERN STACK WEB DEVELOPER

                            </li>

                            <li>
                                 REACT JS, C++, C#

                            </li>
                            <li>
                               DATA STUCTURE & ALGORITHM

                            </li>

                            

                        </ul>
                    </div>



                </div>

            </div>
            <div className="right-about">
                <Cards title="MERN STACK WEB DEVELOPER" image={mern}/>
                <Cards title="DSA" image={dsa}/>
                <Cards title="C++,C#" image={COVER}/>
               

            </div>
        </div>
    )
}

export default About
