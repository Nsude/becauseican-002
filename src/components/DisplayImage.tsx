
interface Props {
    src: string;
    alt?: string;
}

const DisplayImage = ({src, alt}: Props) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-myGray">
        <img src={src} alt={alt || "image"} className="object-cover w-[75%]"/>
    </div>
  )
}

export default DisplayImage;