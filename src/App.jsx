import {React} from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import WhyMe from './components/WhyMe'
import CallToAction from './components/callToAction'

const App = () => {
  // const [theme, setTheme] = useState('light');
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyMe />
      <Projects />
      <CallToAction />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
