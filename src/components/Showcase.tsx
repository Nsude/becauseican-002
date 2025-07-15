import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";


const Showcase = () => {
  const section = useRef(null);
  const image1 = useRef(null);
  const image2 = useRef(null);
  const image3 = useRef(null);

  useGSAP(() => {
    // set initial states 
    gsap.set([image2.current, image3.current], {scale: 0});

    // parallax animation
    gsap.to(image1.current, {
      yPercent: 20,
      scrollTrigger: {
        trigger: section.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })

    // reveal next image
    gsap.to([image2.current, image3.current], {
      scale: 1,
      stagger: 0.4,
      scrollTrigger: {
        trigger: section.current,
        start: "top top",
        end: "+=150%",
        pin: section.current,
        scrub: 0.5
      }
    })
    
  }, [])

  return (
    <section ref={section} className="relative w-full h-screen flex justify-center items-center mb-[6.25rem]">
      <div>
        {/* image 1 */}
        <div className="absolute w-full h-full top-0 left-0 z-0 overflow-hidden">
          <img ref={image1} src="./assets/images/bg-image-1.png" alt="bg-image-1" className="object-cover translate-y-[-22%] w-full h-[135%] will-change-transform" />
        </div>
        {/* image 2 */}
        <div className="absolute w-[85%] top-1/2 left-1/2 -translate-1/2 z-1 overflow-hidden">
          <img ref={image2} src="./assets/images/bg-image-2.png" alt="bg-image-2" className="object-cover w-full h-full will-change-transform" />
        </div>
        {/* image 3 */}
        <div className="absolute w-[75%] aspect-video top-1/2 left-1/2 -translate-1/2 z-2 overflow-hidden">
          <img ref={image3} src="./assets/images/interior.jpg" alt="bg-image-3" className="object-cover w-full h-full will-change-transform" />
        </div>
      </div>
      
      <img src="./assets/images/logo.png" alt="logo" className="relative z-5" />
      <span className="absolute bottom-[2.18rem] left-[50%] -translate-x-1/2 text-white opacity-25">( i think you should scroll )</span>
    </section>
  )
}

export default Showcase;