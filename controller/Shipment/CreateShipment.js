const ShipmentModel = require("../../models/ShipmentSchema/ShipmentSchema")

const createShipment=async(req,res)=>{

    const { InvoiceNo,
        OrderNo,
        Creater,
      TotalQty ,
        TotalCM
 
    }=req.body
    try {
        const shipment=await ShipmentModel.create({
            InvoiceNo,
        OrderNo,
        Creater,
      TotalQty ,
        TotalCM
        })
        return res.status(200).json({
            data:shipment,
            message:'shipment data created successfully',
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


const getallshipmentdata=async(req,res)=>{
    try {
        const getalldata=await ShipmentModel.find()

        return res.status(200).json({
            data:getalldata,
             message:'get all data for shipment ',
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
    createShipment,
    getallshipmentdata
}