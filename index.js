const express= require('express');
const app = express();
const port=2000
const connectToDb =require('./db')
connectToDb()
const cors = require('cors')
const router = require('./routes/Route')

let Unit= require('./models/inventory/UnitModel')

let unitRoutes= require('./routes/unitRoute');
let accessorylistRoutes= require('./routes/accessorylistRoute');
let accessoryOrderlistRoutes= require('./routes/accessoryOrdeRoute');
let designation= require('./routes/designationRoute');
let employee= require('./routes/employee');
const InventoryAL = require('./models/inventory/Accessorylist');
const InventoryAOL = require('./models/inventory/AccessoryOrder');
const Designation = require('./models/HRMmanagement/Designation');
const Employees = require('./models/HRMmanagement/Employees');

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('welcome')
})                              
app.use('/api',router),
app.use('/api/unit',unitRoutes)
app.use('/inv/accList',accessorylistRoutes)
app.use('/inv/accOrderList',accessoryOrderlistRoutes)

app.use('/hrm/des',designation)
app.use('/hrm/emp',employee)


app.listen(port,()=>{
    console.log(`server is listening on ${port}`)
})