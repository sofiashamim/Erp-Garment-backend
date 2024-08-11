const SalesReportModel = require("../../models/report/SalesReportSchema")


const createSalesReport=async(req,res)=>{
    const {PartyName,PartyType,Category,TotalBill,TotalPaid,TotalDue,status}=req.body

    try {
        
        const purchaseReport=await SalesReportModel.create({
            PartyName,PartyType,Category,TotalBill,TotalPaid,TotalDue,status
        })
        return res.json({
            data:purchaseReport,
            success:true,
            error:false,
            message:"sales report created successfully"
        })

    } catch (error) {
        return res.json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}


const getallsalesreport=async(req,res)=>{
    try {
        const getalldata=await SalesReportModel.find()
        return res.json({
            data:getalldata,
            message:"all sales report get successfully",
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
    createSalesReport,
    getallsalesreport
}