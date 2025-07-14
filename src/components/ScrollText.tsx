
interface Props {
  text: string;
  capitalize?: boolean;
}

const ScrollText = ({text, capitalize}: Props) => {
  return (
    <div className={`
      h-[13.3rem] xl:h-[15rem] 2xl:h-[19.4rem]
      w-full py-[0.3rem] overflow-hidden
      text-[13.3rem] xl:text-[15rem] 2xl:text-[19.4rem] text-center -tracking-[0.05ch]
      ${capitalize ? 'uppercase' : ''} `
    }>
      <div className="relative flex flex-col items-center justify-center gap-y-[1.56rem]">
        <h1>{text}</h1>
        <h1>{text}</h1>
        <h1>{text}</h1>
      </div>
    </div>
  )
}

export default ScrollText;