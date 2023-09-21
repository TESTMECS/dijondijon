

const Navbar = () => {
    
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#fffdd0' }}>
      <div id="logo" onClick={() => window.location.reload()}>
        <a>DijonDijon</a>
        </div>
      <div>
      <a href='#section1' onClick={(event) => {event.preventDefault(); document.querySelector('#section1')?.scrollIntoView({ behavior: 'smooth' });}}>Music</a>
        <a href='https://shop.dijondijon.com/' target="_blank">Store</a>
        <a href='#section3' onClick={(event) => {event.preventDefault(); document.querySelector('#section3')?.scrollIntoView({ behavior: 'smooth' });}}>Video</a>
        <a href='#section4' onClick={(event) => {event.preventDefault(); document.querySelector('#section4')?.scrollIntoView({ behavior: 'smooth' });}}>Join the Newsletter</a>
      </div>
    </nav>
  )
}

export default Navbar;