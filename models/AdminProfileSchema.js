const mongoose=require('mongoose')

const adminprofileSchema=new mongoose.Schema({
    Name:String,
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Profile_Pic:String,
    Password:String,

},
{
    timestamps:true
})
const SuperAdminModel=mongoose.model('Super Admin',adminprofileSchema)
module.exports=SuperAdminModel