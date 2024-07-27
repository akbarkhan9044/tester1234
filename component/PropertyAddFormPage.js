'use client';
import React from 'react';
import { useState,useEffect } from 'react';

export default function PropertyAddFormPage() {
  const [mounted,setMounted]=useState(false);
  const [fields,setFeilds]=useState({
    type:'Apartment',
    name:'Test Property',
    description:'',
    location:{
      street:"",
      city:"",
      state:"",
      zipcode:""
    },
    beds:'3',
    baths:'2',
    square_feet:"1800",
    amenities:[],
    rates:{
      weekly:'',
      monthly:'20000',
      nightly:''
    },
    seller_info:{
      name:'',
      email:'test@test.com',
      phone:''
    },
    images:[]
  });


  useEffect(()=>{
    setMounted(true);
  },[]);


  const handleChange=(e)=>{
    const {name,value}=e.target;
    if(name.includes('.')){
      const [outerKey,innerKey]=name.split('.');
      console.log(outerKey);
      console.log(innerKey);

      setFeilds((previousFeild)=>({
        ...previousFeild,
        [outerKey]:{
          ...previousFeild[outerKey],
          [innerKey]:value
        }
      }))
    }
    else{
      setFeilds((previousFeild)=>({
        ...previousFeild,
        [name]:value
      }))
    }

  };

  //Handle Amendties
  const handleAmenitiesChange=(e)=>{
   const {value}=e.target;
    const index=fields.amenities.indexOf(value);
    console.log("Index",index);
    const updatedAmenties=[...fields.amenities];
    if(index === -1){
      updatedAmenties.push(value);
    }else{
      updatedAmenties.splice(index,1);
    }
    setFeilds((prev)=>({
      ...prev,
      amenities:updatedAmenties
    }))
  console.log(fields.amenities);
  };
  const handleImageChange=(e)=>{
    const {files}=e.target;
   const updatedImages=[...fields.images];
   for(const file of files){
    updatedImages.push(file);
   }
   setFeilds((prev)=>({
    ...prev,
    images:updatedImages
   }));
  
  };
  return     mounted &&(
    <form action='/api/properties' 
    method='POST'
     encType='multipart/form-data'>
    <h2 className="text-3xl text-center font-semibold mb-6">
      Add Property
    </h2>

    <div className="mb-4">
      <label
        htmlFor="type"
        class="block text-gray-700 font-bold mb-2"
        >Property Type</label
      >
      <select
        id="type"
        name="type"
        class="border rounded w-full py-2 px-3"
        value={fields.type}
        onChange={handleChange}
        required
      >
        <option value="Apartment">Apartment</option>
        <option value="Condo">Condo</option>
        <option value="House">House</option>
        <option value="Cabin Or Cottage">Cabin or Cottage</option>
        <option value="Room">Room</option>
        <option value="Studio">Studio</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <div className="mb-4">
      <label class="block text-gray-700 font-bold mb-2"
        >Listing Name</label
      >
      <input
        type="text"
        id="name"
        name="name"
        className="border rounded w-full py-2 px-3 mb-2"
        placeholder="eg. Beautiful Apartment In Miami"
        value={fields.name}
        onChange={handleChange}
        required
      />
    </div>
    <div class="mb-4">
      <label
        for="description"
        className="block text-gray-700 font-bold mb-2"
        >Description</label
      >
      <textarea
        id="description"
        name="description"
        className="border rounded w-full py-2 px-3"
        rows="4"
        value={fields.description}
        onChange={handleChange}
        placeholder="Add an optional description of your property"
      ></textarea>
    </div>

    <div className="mb-4 bg-blue-50 p-4">
      <label className="block text-gray-700 font-bold mb-2">Location</label>
      <input
        type="text"
        id="street"
        name="location.street"
        value={fields.location.street}
        onChange={handleChange}
        className="border rounded w-full py-2 px-3 mb-2"
        placeholder="Street"
      />
      <input
        type="text"
        id="city"
        name="location.city"
        value={fields.location.city}
        onChange={handleChange}
        className="border rounded w-full py-2 px-3 mb-2"
        placeholder="City"
        required
      />
      <input
        type="text"
        id="state"
        name="location.state"
        value={fields.location.state}
        onChange={handleChange}
        className="border rounded w-full py-2 px-3 mb-2"
        placeholder="State"
        required
      />
      <input
        type="text"
        id="zipcode"
        value={fields.location.zipcode}
        onChange={handleChange}
        name="location.zipcode"
        className="border rounded w-full py-2 px-3 mb-2"
        placeholder="Zipcode"
      />
    </div>

    <div class="mb-4 flex flex-wrap">
      <div class="w-full sm:w-1/3 pr-2">
        <label for="beds" class="block text-gray-700 font-bold mb-2"
          >Beds</label
        >
        <input
          type="number"
          id="beds"
          name="beds"
          value={fields.beds}
        onChange={handleChange}
          className="border rounded w-full py-2 px-3"
          required
        />
      </div>
      <div class="w-full sm:w-1/3 px-2">
        <label for="baths" class="block text-gray-700 font-bold mb-2"
          >Baths</label
        >
        <input
          type="number"
          id="baths"
          name="baths"
          value={fields.baths}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3"
          required
        />
      </div>
      <div class="w-full sm:w-1/3 pl-2">
        <label
          for="square_feet"
          className="block text-gray-700 font-bold mb-2"
          >Square Feet</label
        >
        <input
          type="number"
          id="square_feet"
          name="square_feet"
          value={fields.square_feet}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3"
          required
        />
      </div>
    </div>

    <div class="mb-4">
      <label className="block text-gray-700 font-bold mb-2"
        >Amenities</label
      >
      <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
        <div>
          <input
            type="checkbox"
            id="amenity_wifi"
            name="amenities"
            value="Wifi"
            checked={fields.amenities.includes('Wifi')}
            onChange={handleAmenitiesChange}
            className="mr-2"
          />
          <label for="amenity_wifi">Wifi</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_kitchen"
            name="amenities"
            value="Full Kitchen"
            checked={fields.amenities.includes('Full Kitchen')}
            onChange={handleAmenitiesChange}
            className="mr-2"
          />
          <label for="amenity_kitchen">Full kitchen</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_washer_dryer"
            name="amenities"
            value="Washer & Dryer"
            checked={fields.amenities.includes('Washer & Dryer')}
            onChange={handleAmenitiesChange}
            className="mr-2"
          />
          <label for="amenity_washer_dryer">Washer & Dryer</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_free_parking"
            name="amenities"
            value="Free Parking"
            checked={fields.amenities.includes('Free Parking')}
            onChange={handleAmenitiesChange}
            className="mr-2"
          />
          <label for="amenity_free_parking">Free Parking</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_pool"
            name="amenities"
            value="Swimming Pool"
            checked={fields.amenities.includes('Swimming Pool')}
            onChange={handleAmenitiesChange}
            className="mr-2"
          />
          <label for="amenity_pool">Swimming Pool</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_hot_tub"
            name="amenities"
            value="Hot Tub"
            checked={fields.amenities.includes('Hot Tub')}
            onChange={handleAmenitiesChange}
            class="mr-2"
          />
          <label for="amenity_hot_tub">Hot Tub</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_24_7_security"
            name="amenities"
            value="24/7 Security"
            checked={fields.amenities.includes('24/7 Security')}
            onChange={handleAmenitiesChange}
            class="mr-2"
          />
          <label for="amenity_24_7_security">24/7 Security</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_wheelchair_accessible"
            name="amenities"
            value="Wheelchair Accessible"
            checked={fields.amenities.includes('Wheelchair Accessible')}
            onChange={handleAmenitiesChange}
            class="mr-2"
          />
          <label for="amenity_wheelchair_accessible"
            >Wheelchair Accessible</label
          >
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_elevator_access"
            name="amenities"
            value="Elevator Access"
            checked={fields.amenities.includes('Elevator Access')}
            onChange={handleAmenitiesChange}
            class="mr-2"
          />
          <label for="amenity_elevator_access">Elevator Access</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_dishwasher"
            name="amenities"
            value="Dishwasher"
            checked={fields.amenities.includes('Dishwasher')}
            onChange={handleAmenitiesChange}
            class="mr-2"
          />
          <label for="amenity_dishwasher">Dishwasher</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_gym_fitness_center"
            name="amenities"
            value="Gym/Fitness Center"
            checked={fields.amenities.includes('Gym/Fitness Center')}
            onChange={handleAmenitiesChange}
            class="mr-2"
          />
          <label for="amenity_gym_fitness_center"
            >Gym/Fitness Center</label
          >
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_air_conditioning"
            name="amenities"
            value="Air Conditioning"
            checked={fields.amenities.includes('Air Conditioning')}
            onChange={handleAmenitiesChange}
            class="mr-2"
          />
          <label for="amenity_air_conditioning">Air Conditioning</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_balcony_patio"
            name="amenities"
            value="Balcony/Patio"
            checked={fields.amenities.includes('Balcony/Patio')}
            onChange={handleAmenitiesChange}
            class="mr-2"
          />
          <label for="amenity_balcony_patio">Balcony/Patio</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_smart_tv"
            name="amenities"
            value="Smart TV"
            checked={fields.amenities.includes('Smart TV')}
            onChange={handleAmenitiesChange}
            class="mr-2"
          />
          <label for="amenity_smart_tv">Smart TV</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="amenity_coffee_maker"
            name="amenities"
            value="Coffee Maker"
            checked={fields.amenities.includes('Coffee Maker')}
            onChange={handleAmenitiesChange}
            class="mr-2"
          />
          <label for="amenity_coffee_maker">Coffee Maker</label>
        </div>
      </div>
    </div>

    <div class="mb-4 bg-blue-50 p-4">
      <label class="block text-gray-700 font-bold mb-2"
        >Rates (Leave blank if not applicable)</label
      >
      <div
        class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
      >
        <div class="flex items-center">
          <label for="weekly_rate" class="mr-2">Weekly</label>
          <input
            type="number"
            id="weekly_rate"
            name="rates.weekly"
            value={fields.rates.weekly}
            onChange={handleChange}
            class="border rounded w-full py-2 px-3"
          />
        </div>
        <div class="flex items-center">
          <label for="monthly_rate" class="mr-2">Monthly</label>
          <input
            type="number"
            id="monthly_rate"
            name="rates.monthly"
            value={fields.rates.monthly}
            onChange={handleChange}
            class="border rounded w-full py-2 px-3"
          />
        </div>
        <div class="flex items-center">
          <label for="nightly_rate" class="mr-2">Nightly</label>
          <input
            type="number"
            id="nightly_rate"
            name="rates.nightly"
            value={fields.rates.nightly}
            onChange={handleChange}
            class="border rounded w-full py-2 px-3"
          />
        </div>
      </div>
    </div>

    <div class="mb-4">
      <label
        for="seller_name"
        class="block text-gray-700 font-bold mb-2"
        >Seller Name</label
      >
      <input
        type="text"
        id="seller_name"
        value={fields.seller_info.name}
        onChange={handleChange}
        name="seller_info.name"
        class="border rounded w-full py-2 px-3"
        placeholder="Name"
      />
    </div>
    <div class="mb-4">
      <label
        for="seller_email"
        class="block text-gray-700 font-bold mb-2"
        >Seller Email</label
      >
      <input
        type="email"
        id="seller_email"
        name="seller_info.email"
        value={fields.seller_info.email}
        onChange={handleChange}
        class="border rounded w-full py-2 px-3"
        placeholder="Email address"
        required
      />
    </div>
    <div class="mb-4">
      <label
        for="seller_phone"
        class="block text-gray-700 font-bold mb-2"
        >Seller Phone</label
      >
      <input
        type="tel"
        id="seller_phone"
        name="seller_info.phone"
        value={fields.seller_info.phone}
        onChange={handleChange}
        class="border rounded w-full py-2 px-3"
        placeholder="Phone"
      />
    </div>

    <div class="mb-4">
      <label for="images" class="block text-gray-700 font-bold mb-2"
        >Images (Select up to 4 images)</label
      >
      <input
        type="file"
        id="images"
        name="images"
        onChange={handleImageChange}
        class="border rounded w-full py-2 px-3"
        accept="image/*"
        multiple
        required
      />
    </div>

    <div>
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Add Property
      </button>
    </div>
  </form>
  )
}
