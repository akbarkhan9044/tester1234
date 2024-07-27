import connectDb from "@/config/database";
import Property from "@/model/Property";

//GET /api/properties
export const GET=async(request,{params})=>{
try{
await connectDb(); 
const properites=await Property.findById(params.id);
return new Response(JSON.stringify(properites),{status:200});
}catch(error){
return new Response('Something Went Wrong',{status:500});
}
}