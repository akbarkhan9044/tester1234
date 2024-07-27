import React from 'react';
import {FaBed,FaBath,FaRulerCombined,FaTimes,FaCheck,FaMapMarker} from 'react-icons/fa';

export default function PropertyDetails({property}) {
  return (
    <main>
    <div
      class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
    >
      <div class="text-gray-500 mb-4">{property.type}</div>
      <h1 class="text-3xl font-bold mb-4">{property.name}</h1>
      <div
        class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
      >
        <FaMapMarker
          className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
        />
        <p class="text-orange-700">
       {property.location.street},   {property.location.city}    {property.location.state}
        </p>
      </div>

      <h3 class="text-lg font-bold my-6 bg-gray-800 text-white p-2">
        Rates & Options
      </h3>
      <div class="flex flex-col md:flex-row justify-around">
        <div
          class="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0"
        >
          <div class="text-gray-500 mr-2 font-bold">Nightly</div>
          <div class="text-2xl font-bold">
            {property.rates.nightly?(
                
                <div class="text-2xl font-bold text-blue-500">
                {property.rates.nightly.toLocaleString()}
                </div>
                ):(<FaTimes className="fa fa-xmark text-red-700"/>)}
            

           
          </div>
        </div>
        <div
          class="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0"
        >
          <div class="text-gray-500 mr-2 font-bold">Weekly</div>
          <div class="text-2xl font-bold text-blue-500">
          {property.rates.weekly?(
                
                <div class="text-2xl font-bold text-blue-500">
                {property.rates.weekly.toLocaleString()}
                </div>
                ):(<FaTimes className="fa fa-xmark text-red-700"/>)}
            
          </div>
        </div>
        <div class="flex items-center justify-center mb-4 pb-4 md:pb-0">
          <div class="text-gray-500 mr-2 font-bold">Monthly</div>
          <div class="text-2xl font-bold text-blue-500">
          {property.rates.monthly?(
                
                <div class="text-2xl font-bold text-blue-500">
                {property.rates.monthly.toLocaleString()}
                </div>
                ):(<FaTimes className="fa fa-xmark text-red-700"/>)}
            </div>
        </div>
      </div>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 class="text-lg font-bold mb-6">Description & Details</h3>
      <div
        class="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9"
      >
        <p>
          <FaBed class="inline-block mr-2"/>{property.beds}{' '}
          <span class="hidden sm:inline">Beds</span>
        </p>
        <p>
        <FaBath class="inline-block mr-2"/>{property.baths}{' '}
          <span class="hidden sm:inline">Baths</span>
        </p>
        <p>
        <FaRulerCombined class="inline-block mr-2"/>{property.square_feet}{' '}
          <span class="hidden sm:inline">sqft</span>
        </p>
      </div>
      <p class="text-gray-500 mb-4 text-center">
        {property.description}
      </p>
   
    </div>

    <div class="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 class="text-lg font-bold mb-6">Amenities</h3>

      <ul
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none space-y-2"
      >
       {property && property.amenities.map((amenity,index)=>(
        <li key={index}>
       <FaCheck className='inline-block text-green-600 mr-2' /> {' '}{amenity}
      </li>
       ))}
        
      </ul>
    </div>
    <div class="bg-white p-6 rounded-lg shadow-md mt-6">
      <div id="map"></div>
    </div>
  </main>

  )
}
