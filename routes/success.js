const express = require("express")
const router = express.Router()
const path = require('path')
const succesController = require('../controller/success')



 router.get('/success',succesController.getSucces )


 module.exports = router