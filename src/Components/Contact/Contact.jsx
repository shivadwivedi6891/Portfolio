// import React from 'react'
// import './Contact.css'
// import contact from '../../assets/contact.png'

// function Contact() {
//   return (
//     <div id="contact">
//         <div className="left-contact">
//             <img src={contact} alt="" />
//         </div>
//         <div className="right-contact">
//             <form action="https://formspree.io/f/xyzedbdr" method="POST">
//                 <input name="UserName" type="text" placeholder='Name' />
//                 <input  name="email" type="email" placeholder='Email Id' />
//                 <textarea name="Message" id="txt" placeholder='Message'></textarea>
//                 <input type="Submit"  id="btn" />
//             </form>
//         </div>
//     </div>
    
//   )
// }

// export default Contact



// import React from 'react';
// import './Contact.css';
// import contact from '../../assets/contact.png';

// function Contact() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     console.log("Form Submitted");

//     // Reset the form
//     e.target.reset();
//   };

//   return (
//     <div id="contact">
//       <div className="left-contact">
//         <img src={contact} alt="Contact" />
//       </div>
//       <div className="right-contact">
//         <form action="https://formspree.io/f/xyzedbdr" method="POST" onSubmit={handleSubmit}>
//           <input name="UserName" type="text" placeholder="Name" />
//           <input name="email" type="email" placeholder="Email Id" />
//           <textarea name="Message" id="txt" placeholder="Message"></textarea>
//           <input type="submit" id="btn" />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Contact;



import React from 'react';
import './Contact.css';
import contact from '../../assets/contact.png';

function Contact() {
  const handleSubmit = (e) => {
    setTimeout(() => {
      e.target.reset(); // Reset the form after submission
    }, 500); // Give Formspree time to process before reset
  };

  return (
    <div id="contact">
      <div className="left-contact">
        <img src={contact} alt="Contact" />
      </div>
      <div className="right-contact">
        <form action="https://formspree.io/f/xyzedbdr" method="POST" onSubmit={handleSubmit}>
          <input name="UserName" type="text" placeholder="Name" required />
          <input name="email" type="email" placeholder="Email Id" required />
          <textarea name="Message" id="txt" placeholder="Message" required></textarea>
          <input type="submit" id="btn" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
