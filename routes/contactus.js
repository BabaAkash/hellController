const express = require("express")
const router = express.Router()
const path = require('path')
const contactController = require('../controller/contact')

router.get('/contactus',(req, res)=>{
 
  res.render('contact')
 })

 router.post('/contactus',contactController.contactData )


 module.exports = router