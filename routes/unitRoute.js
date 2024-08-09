const express= require ('express');
const { createUnit, updateUnitStatus, deleteUnit, editUnitDetails } = require('../controller/inventory/createunit');
const router = express.Router()

router.post('/create',createUnit)
router.put('/update-status/:id',updateUnitStatus);
router.delete('/delete/:id', deleteUnit);
router.put('/edit/:id', editUnitDetails);



module.exports= router;