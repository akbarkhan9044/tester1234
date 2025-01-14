'use client';

import { useState,useEffect } from "react";
import { useParams } from "next/navigation";
import {fetchSingleProperties} from '@/utils/request';
import PropertyHeaderImage from "@/component/PropertyHeaderImage";
import PropertyDetails from "@/component/PropertyDetails";
import Link from "next/link";
import {FaArrowLeft} from 'react-icons/fa';
import Spinner from "@/component/Spinner";
import PropertyImages from "@/component/PropertyImages";

const PropertyPage=async()=> {
 const {id}=useParams();
 const [property,setProperty]=useState(null);
 const [loading,setLoading]=useState(true);


 useEffect(()=>{
  const fetchData=async()=>{
    if(!id){
      return;
    }try{
    const response=await fetchSingleProperties(id);
    setProperty(response);
    console.log(response);
    }catch(error){
      console.log('Error while fetching data');
    }finally{
      setLoading(false);
    }
  }
  if(property === null ){
    fetchData();
  }
 },[id,property])

 if(!property && !loading)
 {
  return(
    <h1 className="text-center text-2xl font-bold mt-10">
      Property Not Found
    </h1>
  )
 }
  return (
  <>
  {loading && <Spinner loading={loading} />}
  {!loading && property &&(
    <>
    <PropertyHeaderImage image={property.images[0]}/>
    <section>
      <div className="container m-auto py-6 px-6">
        <Link
          href="/properties.html"
          class="text-blue-500 hover:text-blue-600 flex items-center"
        >
          <FaArrowLeft className="mr-2"/> Back to Properties
        </Link>
      </div>
      </section>

      <section class="bg-blue-50">
      <div class="container m-auto py-10 px-6">
        <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <PropertyDetails property={property}/>
        
          <aside class="space-y-4">       
            <button
              class="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
            >
              <i class="fas fa-bookmark mr-2"></i> Bookmark Property
            </button>
            <button
              class="bg-orange-500 hover:bg-orange-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
            >
              <i class="fas fa-share mr-2"></i> Share Property
            </button>

         
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-6">Contact Property Manager</h3>
              <form>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  for='name'
                >
                  Name:
                </label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='name'
                  type='text'
                  placeholder='Enter your name'             
                  required
                />
              </div>
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="email"
                  >
                    Email:
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label
                    className='block text-gray-700 text-sm font-bold mb-2'
                    for='phone'
                  >
                    Phone:
                  </label>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='phone'
                    type='text'
                    placeholder='Enter your phone number'
                  />
                </div>
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="message"
                  >
                    Message:
                  </label>
                  <textarea
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div>
                  <button
                    class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center"
                    type="submit"
                  >
                    <i class="fas fa-paper-plane mr-2"></i> Send Message
                  </button>
                </div>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </section>
    {property.images &&(<PropertyImages images={property.images}/>)}


    </>

  )}</>
  )
}

export default PropertyPage
