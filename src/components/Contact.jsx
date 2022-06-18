import React from 'react';


export default function Contact() {

  return (
    <div className="panel" id='contact'>
      <div className='contact-wrapper'>
        <h1>CONTACT</h1>

      </div>
      <div className='contact-wrapper'>
        <form action="" className='contact-form'>
          <label htmlFor="name">NAME</label>
          <input autoComplete='false' type="text" id='name' required="required"/>
          <label htmlFor="email">EMAIL</label>
          <input autoComplete='false' type="email" id='email' required="required"/>
          <label htmlFor="message">MESSAGE</label>
          <textarea id='message' rows="4" required="required" />
          <button >CONTACT</button>
        </form>
      </div>
    </div>
  );
}
