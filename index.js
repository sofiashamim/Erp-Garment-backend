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
let salary= require('./routes/salariesRoute');
let admin= require('./routes/adminRoute');
let buyer= require('./routes/buyerRoute');
let merchandiser= require('./routes/merchandiserRoute');
let commercial= require('./routes/commercialRoute');
let accountant= require('./routes/accountantRoute');
let production= require('./routes/productionRoute');
const InventoryAL = require('./models/inventory/Accessorylist');
const InventoryAOL = require('./models/inventory/AccessoryOrder');
const Designation = require('./models/HRMmanagement/Designation');
const Employees = require('./models/HRMmanagement/Employees');
const Salary = require('./models/HRMmanagement/Salaries');
const Admin = require('./models/userManage/AdminModel');
const Buyer = require('./models/userManage/Buyer');
const Merchandiser = require('./models/userManage/Merchandiser');
const Commercial = require('./models/userManage/Commercial');
const Accountant = require('./models/userManage/Accountant');
const Production = require('./models/userManage/Production');

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
app.use('/hrm/sal',salary)

app.use('/user/admin',admin)
app.use('/user/buy',buyer)
app.use('/user/merch',merchandiser)
app.use('/user/comm',commercial)
app.use('/user/account',accountant)
app.use('/user/prod',production)


app.listen(port,()=>{
    console.log(`server is listening on ${port}`)
})