import React, { useState } from 'react';

const Section4 = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // handle the submit logic here
    setEmail('');
  };

  return (
    <section id='section4' className='flex flex-col items-center justify-center'>
      <h1 className='text-white'>Join the Newsletter</h1>
      <form onSubmit={handleSubmit}>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' required />
        <button type='submit'>Submit</button>
      </form>
    </section>
  )
}

export default Section4;