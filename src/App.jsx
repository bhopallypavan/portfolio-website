import React from 'react'
import { Toaster } from "react-hot-toast";

import Navbar from './layout/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Footer from './sections/Footer'



const App = () => {
  return (
    <div className='min-h-screen bg-dark-600 text-white-900 dark:bg-black dark:text-white transition-colors duration-300'>

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
        }}
      />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer/>

    </div>
  )
}

export default App