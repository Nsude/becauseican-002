

const Showcase = () => {
  return (
    <section className="relative w-full h-screen flex justify-center items-center">
      <div>
        {/* image 1 */}
        <div className="absolute w-full h-full top-0 left-0 z-0">
          <img src="./assets/images/bg-image-1.png" alt="bg-image-1" className="object-cover w-full h-full" />
        </div>
        {/* image 2 */}
        <div className="absolute w-full h-full top-0 left-0 z-1 scale-0">
          <img src="./assets/images/bg-image-2.png" alt="bg-image-2" className="object-cover w-full h-full" />
        </div>
        {/* image 3 */}
        <div className="absolute w-full h-full top-0 left-0 z-2 scale-0">
          <img src="./assets/images/bg-image-3.png" alt="bg-image-3" className="object-cover w-full h-full" />
        </div>
      </div>
      
      <img src="./assets/images/logo.png" alt="logo" className="relative z-5" />
      <span className="absolute bottom-[2.18rem] left-[50%] -translate-x-1/2 text-white">( i think you should scroll )</span>
    </section>
  )
}

export default Showcase;