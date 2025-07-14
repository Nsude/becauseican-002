import ReactLenis, { type LenisRef } from 'lenis/react'
import './App.css'
import BigTexts from './components/BigTexts'
import Footer from './components/footer'
import Hero from './components/Hero'
import Products from './components/Products'
import Showcase from './components/Showcase'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function App() {
  const lenisRef = useRef<LenisRef>(null);

   useEffect(() => {
    function update(time: number) {
      if (!lenisRef.current?.lenis) return;
      lenisRef.current.lenis.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
  
    return () => gsap.ticker.remove(update)
  }, [])

  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.05, 
        smoothWheel: true,
        autoRaf: false
      }} 
      ref={lenisRef}
    >
      <div className='w-[100vw] h-full'>
        <Hero />
        <Showcase />
        <BigTexts />
        <Products />
        <Footer />
      </div>
    </ReactLenis>
  )
}

export default App
