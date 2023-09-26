import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  // Add an event listener to detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check to show the navbar if the page is scrolled
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#fffdd0', // Change the background color when sticky
        position: isSticky ? 'fixed' : 'relative', // Change the position to fixed when sticky
        top: 0,
        width: '100%',
        zIndex: 1000, // Add a z-index to make sure it's on top of other content
        transition: 'background-color 0.3s ease', // Add a smooth transition effect
        padding: '10px 20px', // Adjust padding as needed
        boxShadow: isSticky ? '0px 0px 5px rgba(0, 0, 0, 0.2)' : 'none'
      }}
    >
      <div id="logo" onClick={() => window.location.reload()}>
        <a>DijonDijon</a>
      </div>
      <div>
        <a
          href='#section1'
          onClick={(event) => {
            event.preventDefault();
            document.querySelector('#section1')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Music
        </a>
        <a href='https://shop.dijondijon.com/' target="_blank">Store</a>
        <a
          href='#section3'
          onClick={(event) => {
            event.preventDefault();
            document.querySelector('#section3')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Video
        </a>
        <a
          href='#section4'
          onClick={(event) => {
            event.preventDefault();
            document.querySelector('#section4')?.scrollIntoView({ behavior: 'smooth' });
          }}
          
        >
          Join the Newsletter
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
