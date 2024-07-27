import React from 'react';
import Image from 'next/image';

export default function PropertyHeaderImage({image}) {
    console.log(image);
  return (
    <section>
      <div class="container-xl m-auto">
        <div class="grid grid-cols-1">
          <Image
            src={image}
            alt=""
            sizes='100vw'
            height={0}
            width={0}
            priority={true}
            class="object-cover h-[400px] w-full"
          
          />
        </div>
      </div>
    </section>
  )
}
