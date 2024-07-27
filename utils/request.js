const APIDOMAIN=process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchProperties(){

    try{
        //Handle the case of not domaim
        if(!APIDOMAIN){
            return [];
        }



      const res=await fetch(`${APIDOMAIN}/properties`,{cache:'no-store'});
      if(!res.ok){
        throw new Error("Error  to fetch the data");
      }
      return res.json();
    }catch(error){
      console.log(error);
      return [];
    }
  }

  async function fetchSingleProperties(id){

    try{
        //Handle the case of not domaim
        



      const res=await fetch(`${APIDOMAIN}/properties/${id}`);
      if(!res.ok){
        throw new Error("Error  to fetch the data");
      }
      return res.json();
    }catch(error){
      console.log(error);
      return [];
    }
  }


//   //Fetch Single Property

//   async function fetchSingleProperties(id){

//     try{
//         //Handle the case of not domaim
//         if(!APIDOMAIN){
//             return null;
//         }

//       console.log("Tester...........");

//       const res=await fetch("http://localhost:3000/api/properties/"+id);
  
//       if(!res.ok){
//         throw new Error("Error  to fetch the data");
//       }
//       return res.json();
//     }catch(error){
//       console.log("Error============",error);
//       return null;
//     }
//   }
  
  export {fetchProperties,fetchSingleProperties};