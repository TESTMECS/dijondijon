import tourcover from '../assets/tour-asset.jpeg';

const Section2 = () => {
    return (
      <section id='section2' style={{ color: '#fffdd0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <h1 className='text-white' >Tour</h1>
        <h2>Get updates on New Shows,New Music, and More !</h2>
        <button id="tour_bttn" style={{ fontSize: 'x-large', fontFamily: 'Josefin Sans', alignItems: 'center', justifyContent: 'center', height: '50px', marginTop: '10px', width: '25%' }}>Follow</button>
        <img src={tourcover} alt='tourcover' style={{width: '50%'}}></img>
      </section>
    )
  }
  
  export default Section2;