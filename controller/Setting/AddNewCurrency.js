const CurrencyModel = require("../../models/Setting/CurrencySchema")

const createCurrency=async(req,res)=>{
    const {Name,Code,Status,Position,Symbal}=req.body

    try {
        const createdata=await CurrencyModel.create({
            Name,Code,Status,Position,Symbal
        })
        return res.status(200).json({
            data:createdata,
            message:'cureency created successfully',
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

const getallcurrency=async(req,res)=>{
    try {
        const getalldata=await CurrencyModel.find()

        return res.json({
            data:getalldata,
            message:'i have got all data successfully',
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
    createCurrency,
    getallcurrency
}