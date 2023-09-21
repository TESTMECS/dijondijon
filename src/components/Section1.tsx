
import img1 from '../assets/Dijon_Absolutely_AlbumCover.jpeg';
import img2 from '../assets/howdoyoufeel.png';
import img3 from '../assets/scifi.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Section1 = () => {
    const imageHeight = '200px';
    const imageWidth = '200px';
  return (
    <section id='section1' style={{ backgroundColor: '#fffdd0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ color: 'black'}}>Music</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={img1} alt='Image 1' style={{ width: imageWidth, height: imageHeight }} /> 
            <a href='https://open.spotify.com/album/4E691gbRgo2Zb6ToII2DWO' target='_blank' style={{  fontFamily: 'Josefin Sans', color: 'black', display: 'block' }}>Absolutley</a>
            <p style={{  fontFamily: 'Josefin Sans', color: 'black', display: 'block' }}>2021</p>
        </div>
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={img2} alt='Image 2' style={{ width: imageWidth, height: imageHeight }} />
            
            <a href='https://open.spotify.com/album/2Ff38vAray2gR1xfw8z12S' target='_blank' style={{  fontFamily: 'Josefin Sans', color: 'black', display: 'block' }}>How Do You Feel About Getting Married?</a>
            <p style={{  fontFamily: 'Josefin Sans', color: 'black', display: 'block' }}>2020</p>
        </div>
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={img3} alt='Image 3' style={{ width: imageWidth, height: imageHeight }} />
            <a href='https://genius.com/albums/Dijon/Sci-fi-1' target='_blank' style={{ fontFamily: 'Josefin Sans', color: 'black', display: 'block' }}>Sci Fi 1</a>
            <p style={{ fontFamily: 'Josefin Sans', color: 'black', display: 'block' }}>2019</p>
        </div>
      </div>
      <div>
      <a href='https://www.facebook.com' target='_blank' style={{justifyContent: 'space-between',fontSize: 'x-large', color: 'black'}}><FontAwesomeIcon icon={faFacebook} /></a>
        <a href='https://www.twitter.com' target='_blank' style={{justifyContent: 'space-between',fontSize: 'x-large',color: 'black'}}><FontAwesomeIcon icon={faTwitter} /></a>
        <a href='https://www.instagram.com' target='_blank' style={{justifyContent: 'space-between',fontSize: 'x-large',color: 'black'}}><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
    </section>
  )
}

export default Section1;