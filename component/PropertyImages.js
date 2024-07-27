import Image from "next/image"

export default function PropertyImages({images}) {
  return (
    <section className="bg-blue-50 p-4">
     <div className="container mx-auto">
    {images.length ===1?(
        <Image
        src={images[0]}
        alt=""
        className="object-cover h-[400] max-auto rounded-xl"
        width={1800}
        height={400}
        priority={true}
        />
    ):(
        <div className="grid grid-cols-2 gap-4">
            {images.map((item,index)=>(
                <div 
                key={index} className={`${images.length ===3 && index===2? 'col-span-2':'col-span-1' }`}
                >
                      <Image
        src={images[0]}
        alt=""
        className="object-cover h-[400] w-full rounded-xl"
        width={0}
        sizes="100vw"
        height={0}
        priority={true}
        />
                </div>
            ))}
        </div>
    )}
    </  div>
    </section>
  )
}
