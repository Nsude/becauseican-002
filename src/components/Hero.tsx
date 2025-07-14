import DisplayImage from "./DisplayImage";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex justify-center items-center">
        <div className="absolute w-[15rem] aspect-square left-[10%] xl:left-[12%] 2xl:left-[22%] top-[10%]">
          <DisplayImage src="/assets/images/casette.png" />
        </div>

        <h1 className="text-[13.3rem] xl:text-[15rem] 2xl:text-[19.4rem] text-center -tracking-[0.05ch]">
          becauseican
        </h1>
        
        <div className="flex flex-col justify-center absolute z-5 top-[29%] right-[25%] gap-y-[0.3rem]">
          <span>icre8</span>
          <span className="opacity-25">becauseican</span>
        </div>

        <div className="absolute w-[26.56rem] aspect-square">
          <DisplayImage src="/assets/images/box.png" />
        </div>
    </section>
  )
}

export default Hero;