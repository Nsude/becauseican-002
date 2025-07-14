import DisplayImage from "./DisplayImage";

const Products = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center gap-x-[1.56rem]">
      <div className="w-[30rem] h-[35rem]">
        <DisplayImage src="./assets/images/casette.png" />
      </div>
      <div className="w-[30rem] h-[35rem]">
        <DisplayImage src="./assets/images/box.png" />
      </div>
      <div className="w-[30rem] h-[35rem]">
        <DisplayImage src="./assets/images/radio.png" />
      </div>
    </section>
  )
}

export default Products;