const SupplierModel = require("../../models/Party-list/SupplierSchema")


const createSupplier=async(req,res)=>{
    try {
        const createdata=await SupplierModel.create({
            PartyName,
            PartyEmail,
            Phone,
            Password,
            Address,
            BalanceType,
            OpeningBalance,
            Country,
            Remarks,
            Image        
        })
        return res.json({
            data:createdata,
            message:'buyer data created successfully',
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

const getallSupplierdata=async(req,res)=>{
    try {
        const getalldata=await SupplierModel.find()
        return res.status(200).json({
            data:getalldata,
            message:'all buyer data get successfully',
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
    createSupplier,
    getallSupplierdata
}