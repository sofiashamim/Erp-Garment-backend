const express=require('express')
const { createBuyerDue, BuyerDuelist, buyerdueSearch } = require('../controller/BuyerDue')
const { createAdminProfile, updateAdminProfile } = require('../controller/AdminProfile')
const { OrderCreate, getallorderdata } = require('../controller/reports/Order')
const { createpurchaseReport, getallpurchasereport } = require('../controller/reports/PurchaseReport')
const { createSalesReport, getallsalesreport } = require('../controller/reports/SalesReport')
const { createSupplierDue, getallSupplierDue } = require('../controller/reports/SupplierDue')
const { createTransaction, getallTransaction } = require('../controller/reports/Transaction')
const { createSample, getallsampledata } = require('../controller/Sample/Sample')

const router=express.Router()






// sample file

router.post('/createsample',createSample)
router.get('/getallsample',getallsampledata)
router.get('/searchsample')



// Report folder router

router.post('/createbuyerdue',createBuyerDue)
router.get('/getallbuyerlist',BuyerDuelist)
router.get('/buyerduesearch',buyerdueSearch)
router.post('/super-admin',createAdminProfile)
router.put('/update-admin-profile/:_id',updateAdminProfile)
router.post('/createorder',OrderCreate)
router.get('/getallorderdata',getallorderdata)
router.post('/createpuchasereport',createpurchaseReport)
router.get('/getallpurchasereport',getallpurchasereport)
router.post('/createsalesreport',createSalesReport)
router.get('/getallsalesreport',getallsalesreport)
router.post('/createsupplierdue',createSupplierDue)
router.get('/getallSupplierDue',getallSupplierDue)
router.post('/createtransaction',createTransaction)
router.get('/getalltransaction',getallTransaction)












module.exports=router