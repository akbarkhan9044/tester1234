import Link from "next/link";
// import properies from '@/component/properties.json';
import PropertyCard from "@/component/PropertyCard";
import {fetchProperties} from '@/utils/request';




const PropertyPage =async()=> {

const properies=await fetchProperties();

properies.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt))
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properies.lenth ===0?(
          <p>No Properties Found</p>
        ):(
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properies && properies.map((item)=>(
           <PropertyCard key={item._id} property={item}/>
          ))}
        </div>
        )}
     
        </div>
        </section>

)
}

export default PropertyPage