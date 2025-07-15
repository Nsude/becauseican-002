import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface Props {
  text: string;
}

const ScrollText = ({text}: Props) => {
  const texts = useRef(null);
  const main = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!main) return;

    const mainHeight = main.current?.getBoundingClientRect().height;
    if (!mainHeight) return;
    const translateFactor = mainHeight;

    // initialise text positon to middle text
    gsap.set(texts.current, {y: `-${translateFactor}px`});

    gsap.to(texts.current, {
      y: 0,
      scrollTrigger: {
        trigger: main.current,
        start: "top center",
        end: `+=${translateFactor}`,
        scrub: 1,
      }
    })
    
  }, {dependencies: [], scope: main});

  return (
    <div ref={main} className={`
      h-[13.3rem] xl:h-[15rem] 2xl:h-[19.4rem] w-full overflow-hidden
      text-[13.3rem] xl:text-[15rem] 2xl:text-[19.4rem] text-center -tracking-[0.05ch]
      uppercase`
    }>
      <div ref={texts} className="relative flex flex-col items-center justify-center">
        <h1>{text}</h1>
        <h1>{text}</h1>
      </div>
    </div>
  )
}

export default ScrollText;