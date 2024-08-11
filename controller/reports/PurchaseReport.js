const PurchaseReportModel = require("../../models/report/PurchaseReportSchema")

const createpurchaseReport=async(req,res)=>{
    const {PartyName,PartyType,Category,TotalBill,TotalPaid,TotalDue,status}=req.body

    try {
        
        const purchaseReport=await PurchaseReportModel.create({
            PartyName,PartyType,Category,TotalBill,TotalPaid,TotalDue,status
        })
        return res.json({
            data:purchaseReport,
            success:true,
            error:false,
            message:"purchase report created successfully"
        })

    } catch (error) {
        return res.json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}


const getallpurchasereport=async(req,res)=>{
    try {
        const getalldata=await PurchaseReportModel.find()
        return res.json({
            data:getalldata,
            message:"all purchase report get successfully",
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
    createpurchaseReport,
    getallpurchasereport
}