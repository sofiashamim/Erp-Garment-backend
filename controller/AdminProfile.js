const SuperAdminModel = require("../models/AdminProfileSchema")

// const bcrypt=require('bcryptjs')
const bcrypt= require('bcrypt')

const createAdminProfile=async(req,res)=>{
const {Name,Email,Profile_Pic,Password}=req.body

    try {
        const salt =await bcrypt.genSaltSync(10);
        const hashpassword =await bcrypt.hashSync(Password, salt);
        const payload={
            Name,Email,Profile_Pic,
            Password:hashpassword,
            Super_Admin:"Super Admin"
        }
        const createSuperAdmin=await SuperAdminModel.create(payload)
        return  res.json({
            data:createSuperAdmin,
            message:"Super Admin data Created Successfully",
            success:true,
            error:false
        })
        
    } catch (error) {
        return res.json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}

const updateAdminProfile=async(req,res)=>{
    const id=req.params._id
    console.log(id);
    const {Name,Email,Profile_Pic,Password}=req.body

    try {

   
   
            const salt =await bcrypt.genSaltSync(10);
            const hashpassword =await bcrypt.hashSync(Password, salt);
            const updateAdminProfile=await SuperAdminModel.findByIdAndUpdate({_id:id},{$set:{Name,Email,Profile_Pic,Password:hashpassword}},{new:true})
         console.log(updateAdminProfile);
            return res.json({
                data:updateAdminProfile,
                message:"admin profile updated successfully",
                success:true,
                error:false
            })
     
        
    } catch (error) {
        return res.json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}

module.exports={
    createAdminProfile,
    updateAdminProfile

}