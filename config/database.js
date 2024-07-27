import mongoose from "mongoose";



const connectDb=async()=>{
        try{
       let connection= await mongoose.connect(process.env.DB);  
        console.log('Mongodb connected...');
    }catch(error){
        console.log("Error is coming");
        console.log(error);
    }
}

export default connectDb;