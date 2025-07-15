import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface Props {
  src: string;
  alt?: string;
  full?: boolean;
  parallax?: boolean;
}

const DisplayImage = ({src, alt, full, parallax}: Props) => {
  const image = useRef(null);
  const main = useRef(null);

  useGSAP(() => {
    if (!parallax) return;

    gsap.to(image.current, {
      yPercent: -20,
      scrollTrigger: {
        trigger: main.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })

  }, [])

  return (
    <div ref={main} className="w-full h-full overflow-hidden flex items-center justify-center">
        <img ref={image} src={src} alt={alt || "image"} className={`object-cover translate-y-[25%] will-change-transform ${full ? 'w-full h-[130%]' : 'w-[75%]'}`}/>
    </div>
  )
}

export default DisplayImage;