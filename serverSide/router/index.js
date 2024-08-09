const express = require('express')
const UserController = require('../controller/user_Controller')
const errorHandler = require('../middleware/errorHandle')
const MenuController = require('../controller/menu_Controller')
const OrderController = require('../controller/order_Controller')
const authentication = require('../middleware/authentication')
const PaymentController = require('../controller/payment_Controller')
const router = express.Router()
const cors = require('cors')



router.use(cors())





// post /register 
router.post('/register', UserController.register)
// post /login
router.post('/login', UserController.login)

router.post('/login/google', UserController.googleLogin)


//get/menu
router.get('/menus',authentication, MenuController.getAllMenu)
//get/menu/detail
router.get('/menus/:id',authentication, MenuController.getMenuById)
//post/order
router.get('/order/:id',authentication, OrderController.getOrder)
router.post('/order',authentication, OrderController.addOrder)
//delete/order
router.delete('/order',authentication, OrderController.deleteOrder)
// get/gemini
router.post('/gemini', MenuController.getGemini)

router.patch('/user/me/upgrade',UserController.upgradeAccount)

router.post('/payment/token', PaymentController.getMidtransToken)

router.post('https://app.sandbox.midtrans.com/snap/v1/transactions')



router.use(errorHandler)

module.exports = router