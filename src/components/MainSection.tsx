
import albumCover from '../assets/Dijon_Absolutely_AlbumCover.jpeg';
const MainSection = () => {
  const openWebsiteInNewTab = () => {
    
    const urlToOpen = 'https://open.spotify.com/album/4E691gbRgo2Zb6ToII2DWO'; 

    // Open the URL in a new tab
    window.open(urlToOpen, '_blank');
  };
  return (
    <main id="main_section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ color: '#fffdd0'}}>The New Album "Absolutley" Avaliable Now !</h1>
        <img src={albumCover} alt='Music Image' style={{ width: '25%' }} />
        <button onClick={openWebsiteInNewTab} id='main_button' style={{ marginTop: '10px', width: '25%' }}>Listen Now</button>
    </main>
  )
}

export default MainSection