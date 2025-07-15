
interface Props {
    src: string;
    alt?: string;
    full?: boolean;
}

const DisplayImage = ({src, alt, full}: Props) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-myGray">
        <img src={src} alt={alt || "image"} className={`object-cover ${full ? 'w-full h-full' : 'w-[75%]'}`}/>
    </div>
  )
}

export default DisplayImage;