import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Section4 = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // handle the submit logic here
    setEmail('');
  };

  return (
    <section id='section4' className='flex flex-col items-center justify-center'>
      <h1 style={{color: '#fffdd0' }}>Join the Newsletter</h1>
      <form onSubmit={handleSubmit}>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' required />
        <button type='submit'>Submit</button>
      </form>
      <a href='https://www.facebook.com' target='_blank' style={{justifyContent: 'space-between',fontSize: 'x-large', color: '#fffdd0'}}><FontAwesomeIcon icon={faFacebook} /></a>
        <a href='https://www.twitter.com' target='_blank' style={{justifyContent: 'space-between',fontSize: 'x-large',color: '#fffdd0'}}><FontAwesomeIcon icon={faTwitter} /></a>
        <a href='https://www.instagram.com' target='_blank' style={{justifyContent: 'space-between',fontSize: 'x-large',color: '#fffdd0'}}><FontAwesomeIcon icon={faInstagram} /></a>
    </section>
  )
}

export default Section4;