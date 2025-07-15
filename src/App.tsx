import ReactLenis, { type LenisRef } from 'lenis/react'
import './App.css'
import BigTexts from './components/BigTexts'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Products from './components/Products'
import Showcase from './components/Showcase'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const lenisRef = useRef<LenisRef>(null);

   useGSAP(() => {
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
