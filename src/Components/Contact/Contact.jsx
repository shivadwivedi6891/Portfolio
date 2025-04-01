import React from 'react'
import './Contact.css'
import contact from '../../assets/contact.png'

function Contact() {
  return (
    <div id="contact">
        <div className="left-contact">
            <img src={contact} alt="" />
        </div>
        <div className="right-contact">
            <form action="https://formspree.io/f/xyzedbdr" method="POST">
                <input name="UserName" type="text" placeholder='Name' />
                <input  name="email" type="email" placeholder='Email Id' />
                <textarea name="Message" id="txt" placeholder='Message'></textarea>
                <input type="Submit"  id="btn" />
            </form>
        </div>
    </div>
    
  )
}

export default Contact
