const express = require('express')
const UserController = require('../controller/usercontroller')
const router = express.Router()





// post /register 
router.post('/register', UserController.register)
// post /login
router.post('/login')


//get/menu
router.get('/menus')
//get/menu/detail
router.get('/menu/:id')
//post/order/by id
router.post('/order/:id')
//delete/order/by id
router.delete('/order/:id')
//update/order/by id
router.put('/order/:id')




// router.use(errorHandler)

module.exports = router