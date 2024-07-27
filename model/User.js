import mongoose, {Schema,model,models} from 'mongoose';


const userSchema=new Schema({
    email:{
        type:String,
        unique:[true,'Email already exits'],
        required:[true,'Email is requireed']
    },
    username:{
        type:String,
        required:[true,'Username is required']
    },
    image:{
        type:String
    },
    bookmarks:[{
        type:Schema.Types.ObjectId,
        ref:'Property'
    }]
},{timestamps:true})


const User=models.user || model('User',userSchema);

export default User;