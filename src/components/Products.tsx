import { useEffect, useRef, useState } from "react";
import DisplayImage from "./DisplayImage";
import MoveOnScroll from "./MoveOnScroll";

const Products = () => {
  const main = useRef(null);
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (main.current) {
      setRender(true);
    }
  }, [main])

  return (
    <section ref={main} className="w-full h-[70vh] flex justify-center items-end gap-x-[1.56rem]">
      {
        render ? (
          <>
            <MoveOnScroll 
              targetPosition={-60}
              initialPosition={60}
              delay={0.4}
              trigger={main.current}
            >
              <div className="w-[20.5rem] h-[26rem] 2xl:w-[30rem] 2xl:h-[35rem]">
                <DisplayImage src="./assets/images/interior-2.png" full={true} />
              </div>
            </MoveOnScroll>

            <MoveOnScroll
              targetPosition={-45}
              initialPosition={40}
              delay={0.3}
              trigger={main.current} 
            >
              <div className="w-[20.5rem] h-[26rem] 2xl:w-[30rem] 2xl:h-[35rem]">
                <DisplayImage src="./assets/images/fireplace.jpg" full={true} />
              </div>
            </MoveOnScroll>

            <MoveOnScroll 
              targetPosition={-30}
              initialPosition={20}
              trigger={main.current}
            >
              <div className="w-[20.5rem] h-[26rem] 2xl:w-[30rem] 2xl:h-[35rem]">
                <DisplayImage src="./assets/images/interior.jpg" full={true} />
              </div>
            </MoveOnScroll>
          </>
        ) : null
      }
    </section>
  )
}

export default Products;