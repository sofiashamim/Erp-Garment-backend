const SampleModel = require("../../models/Sample/SampleSchema")

const createSample=async(req,res)=>{

    const { OrderNo,
        Consignee,
            Style,
            Items,
        SampleType,
        GarmentsQty}=req.body

    try {
        const createdata=await SampleModel.create({
            OrderNo,
            Consignee,
                Style,
                Items,
            SampleType,
            GarmentsQty
        })
        return res.status(200).json({
            data:createdata,
            message:'sample data created successfully',
            error:false,
            success:true
        })
    } catch (error) {
        return res.json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}

const getallsampledata=async(req,res)=>{
    try {
        const alldata=await SampleModel.find()

        return res.status(200).json({
            data:alldata,
            message:'all data get successfully',
            error:false,
            success:true
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
    createSample,
    getallsampledata
}