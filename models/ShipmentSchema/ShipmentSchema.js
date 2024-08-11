const mongoose=require('mongoose')


const ShipmentSchema=new mongoose.Schema({
    InvoiceNo:String,
    OrderNo:String,
    Creater:String,
    TotalQty : String,
    TotalCM : String,

},
{
    timestamps:true
})

const ShipmentModel=mongoose.model('Shipment',ShipmentSchema)

module.exports=ShipmentModel

