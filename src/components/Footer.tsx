import { useEffect, useRef, useState } from "react";
import MoveOnScroll from "./MoveOnScroll";


const Footer = () => {
  const main = useRef(null);
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (main.current) {
      setRender(true);
    }
  }, []);

  return (
    <section ref={main} className="mb-[55vh] relative w-full h-screen flex justify-center items-center">
      {
        render ? (
          <>
            <div className="flex justify-center items-center w-full">
              <MoveOnScroll 
                initialPosition={20}
                targetPosition={-45}
                trigger={main.current}
              >
                <span className="text-[13.3rem] xl:text-[15rem] 2xl:text-[19.4rem] text-center -tracking-[0.05ch]">i</span>
              </MoveOnScroll>

              <MoveOnScroll 
                initialPosition={40}
                targetPosition={-60}
                start="top 80%"
                trigger={main.current}
              >
                <span className="text-[13.3rem] xl:text-[15rem] 2xl:text-[19.4rem] text-center -tracking-[0.05ch]">c</span>
              </MoveOnScroll>

              <MoveOnScroll 
                initialPosition={60}
                targetPosition={-80}
                start="top 70%"
                trigger={main.current}
              >
                <span className="text-[13.3rem] xl:text-[15rem] 2xl:text-[19.4rem] text-center -tracking-[0.05ch]">r</span>
              </MoveOnScroll>

              <MoveOnScroll 
                initialPosition={80}
                targetPosition={-100}
                start="top 60%"
                trigger={main.current}
              >
                <span className="text-[13.3rem] xl:text-[15rem] 2xl:text-[19.4rem] text-center -tracking-[0.05ch]">e</span>
              </MoveOnScroll>

              <MoveOnScroll 
                initialPosition={100}
                targetPosition={-120}
                start="top 50%"
                trigger={main.current}
              >
                <span className="text-[13.3rem] xl:text-[15rem] 2xl:text-[19.4rem] text-center -tracking-[0.05ch]">8</span>
              </MoveOnScroll>
            </div>
          </>
        ) : null
      }

      <span className="text-[2rem] absolute bottom-[2.18rem]">
        <span className="opacity-25">because</span>
        <span>ican.</span>
      </span>
    </section>
  )
}

export default Footer;