import connectDb from "@/config/database";
import Property from "@/model/Property";
import cloudinary from "@/config/cloudinary";

//GET /api/properties
export const GET=async(request)=>{
try{
await connectDb(); 
const properites=await Property.find();
console.log("Check property length");
console.log(properites.length);
return new Response(JSON.stringify(properites),{status:200});
}catch(error){
return new Response('Something Went Wrong',{status:500});
}
}


//POST /api/properties
export const POST=async(request)=>{

    try{
        const data =await request.formData();
        const amenities=data.getAll('amenities');
        let  images=data.getAll('images').filter((image)=>image.name !=='');
        const propertyData={
            owner:'66894fd50b09ead3385f9c33',
            type:data.get('type'),
            name:data.get('name'),
            description:data.get('description'),
            location:{
                street:data.get('location.street'),
                city:data.get('location.city'),
                state:data.get('location.state'),
                zipcode:data.get('location.zipcode')
            },
            beds:data.get('beds'),
            baths:data.get('baths'),
            square_feet:data.get('square_feet'),
            amenities,
            rates:{
                weekly:data.get('rates.weekly'),
                monthly:data.get('rates.monthly'),
                nightly:data.get('rates.nightly'),
            },
            seller_info:{
            name:data.get('seller_info.name'),
            email:data.get('seller_info.email'),
            phone:data.get('seller_info.phone'),
            },
            images
        }

        //Upload image
        const uploadImageValue=[];
        console.log("iMAGE upLOAD")
        for(const image of images){
            const imageBuffer=await image.arrayBuffer();
            const imageArray=Array.from(new Uint8Array(imageBuffer));
            const imageData=Buffer.from(imageArray);

            //Convert the image
            const imageBase64=imageData.toString('base64');
            console.log(imageBase64);
            //Make request to Upload the image
            const result=await cloudinary.uploader.upload(`data:image/png;base64,${imageBase64}`);
            console.log("aFTER UPLOAD",result);

            uploadImageValue.push(result.secure_url);

            console.log("Result",result);

            //wait for all images to upload
            const uploadedImages=await Promise.all(uploadImageValue);

            //add to property data
            propertyData.images=uploadImageValue;
            console.log("Property Image");
            console.log(propertyData);
        }
        //Create property Data
        
        await connectDb(); 
        const createProperty=await Property.create(propertyData);
       console.log(createProperty);
       return Response.redirect(
        `${process.env.NEXTAUTH_URL}/properties/${createProperty._id}`
       )
    
    }catch(error){
        return new Response(JSON.stringify({message:error}),{status:400})
    }
}