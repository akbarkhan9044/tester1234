

import PropertyCard from './PropertyCard';
import Link from 'next/link';
import {fetchProperties} from '@/utils/request';





const HomeComponentPage= async() =>{
    
    const properites=await fetchProperties();
    const recentProperties=properites.sort(()=>{Math.random()-Math.random()}).slice(0,3);
    console.log(recentProperties);
  return (
    <>
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-blue-500 mb-6 text-center">
          Recent Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentProperties.length ===0?(
                <p>No Properties Found</p>
            ):(
                recentProperties && recentProperties.map((item)=>(
                    <PropertyCard key={item.owner} property={item} />
                ))
            )}
           
        </div>
        </div>
        </section>
        
    <section className="m-auto max-w-lg my-10 px-6">
    <Link
      href="/properties"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Properties</Link
    >
  </section>
  </>

  )
}

export default HomeComponentPage;
