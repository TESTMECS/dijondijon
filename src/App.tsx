import Navbar from './components/Navbar'
import MainSection from './components/MainSection'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'

import './App.css'

function App() {
  

  return (
    <div className="main">
          <Navbar />
          <MainSection />
          <br></br>
          <Section1 />
          <br></br>
          <Section2 />
          <br></br>
          <Section3 />
          <Section4 />
    </div>
  )
}

export default App
