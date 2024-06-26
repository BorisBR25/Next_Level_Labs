

type Props = {
    title: string;
    description: string;
    image: string;
    video: string;
}

const AboutUsCard = ({title, description, image}: Props) => {

  const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center
    whitespace-normal bg-zinc-500 text-center text-white opacity-0 transition duratio-500 hover:opacity-80`

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]" style={{
      backgroundImage: `url(${image})`,
      backgroundPosition:'center',
      backgroundSize:'cover'
    }}>
        <div className={overlayStyles}>
            <p className="text-2xl">{title}</p>
            <p className="mt-5">{description}</p>
        </div>
        

    </li>
  )
}

export default AboutUsCard