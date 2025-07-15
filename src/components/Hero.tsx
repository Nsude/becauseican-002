import { useRef } from "react";
import DisplayImage from "./DisplayImage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const bigTextRef = useRef(null);

  useGSAP(() => {
    gsap.to(bigTextRef.current, {
      yPercent: 150,
      scrollTrigger: {
        scrub: true,
      }
    })
  }, [])

  return (
    <section className="relative w-full h-screen flex justify-center items-center">
        {/* small image */}
        <div className="absolute w-[15rem] aspect-square left-[10%] xl:left-[12%] 2xl:left-[19%] top-[10%]">
          <DisplayImage src="/assets/images/interior.jpg" full={true} parallax={true} />
        </div>
        
        {/* big image */}
        <div className="absolute w-[26.56rem] aspect-square z-1">
          <DisplayImage src="/assets/images/fireplace.jpg" full={true} parallax={true} />
        </div>

        <div className="flex flex-col justify-center absolute z-5 top-[29%] right-[25%] gap-y-[0.3rem]">
          <span>icre8</span>
          <span className="opacity-25">becauseican</span>
        </div>

        <h1 ref={bigTextRef} className="text-[13.3rem] xl:text-[15rem] 2xl:text-[19.4rem] text-center -tracking-[0.05ch]">
          becauseican
        </h1>
    </section>
  )
}

export default Hero;