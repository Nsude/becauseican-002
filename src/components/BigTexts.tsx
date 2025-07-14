import ScrollText from "./ScrollText";


const BigTexts = () => {
  return (
    <section className="relative w-full h-full min-h-[120vh] flex flex-col justify-center items-center">
      <ScrollText text="eye" capitalize={true} />
      <ScrollText text="cre-eight" capitalize={true} />
      <ScrollText text="bee" capitalize={true} />
      <ScrollText text="cause" capitalize={true} />
      <ScrollText text="eye-can" capitalize={true} />
    </section>
  )
}

export default BigTexts;