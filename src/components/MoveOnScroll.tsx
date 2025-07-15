import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, type ReactNode } from "react";

interface Props {
  targetPosition: number;
  trigger: HTMLElement | null;
  initialPosition?: number;
  delay?: number;
  start?: string;
  children: ReactNode;
}

const MoveOnScroll = ({
  targetPosition,
  trigger, 
  initialPosition,
  delay,
  start = "top bottom",
  children
} : Props) => {
  const main = useRef(null);

  useGSAP(() => {
    if (!trigger || !main) return;
    
    gsap.set(main.current, {yPercent: initialPosition || 0});
    
    gsap.to(main.current, {
      yPercent: targetPosition,
      delay,
      scrollTrigger: {
        trigger,
        start,
        end: "bottom top",
        scrub: 0.5
      }
    })

  }, {scope: main, dependencies: [trigger]})

  return (
    <div ref={main}>
      {children}
    </div>
  )
}

export default MoveOnScroll;