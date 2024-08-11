const BuyerDueModel = require("../models/BuyerDueSchema")

const createBuyerDue=async(req,res)=>{

    const {PartyName,PartyType,Phone,Address,DueAmount,Remarks}=req.body
    try {
        const buyercreate=await BuyerDueModel.create({
            PartyName,PartyType,Phone,Address,DueAmount,Remarks
        })
        res.status(200).json({
            data:buyercreate,
            message:'data created Successfully',
            success:true,
            error:false,

        })
        
    } catch (error) {

        return res.json({
            message:error.message||error,
            success:false,
            error:true
        })
    }
}


const BuyerDuelist=async(req,res)=>{
try {

    const buyerlist=await BuyerDueModel.find()
    if(buyerlist){
        return res.json({
            data:buyerlist,
            success:true,
            error:false,
            message:'i have fetched all data'
        })
    }
    
} catch (error) {
    return res.json({
        message:error.message||error,
        success:false,
        error:true
    })
}
}

const buyerdueSearch=async(req,res)=>{
    const query=req.query.q

try {
    
const regexp=new RegExp(query ,'i' ,'g')
const searchdata=await BuyerDueModel.find({
    '$or':[

            {
                PartyName:regexp
            },
            {
                PartyType :regexp
            }
    ]
})

res.json({
    data:searchdata,
    message:'searching start successfully',
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
    createBuyerDue,
    BuyerDuelist,
    buyerdueSearch
}