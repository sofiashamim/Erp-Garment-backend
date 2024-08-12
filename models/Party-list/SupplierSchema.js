const mongoose=require('mongoose')


const SupplierSchema=new mongoose.Schema({
    PartyName:String,
    PartyEmail:String,
    Phone:Number,
    Password:String,
    Address:String,
    BalanceType:String,
    OpeningBalance:Number,
    Country:String,
    Remarks:String,
    Image:String
},
{
  timestamps:true  
})
const SupplierModel=mongoose.model('Supplier',SupplierSchema)

module.exports=SupplierModel