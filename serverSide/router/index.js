const express = require('express')
const UserController = require('../controller/userController')
const errorHandler = require('../middleware/errorHandle')
const MenuController = require('../controller/menuController')
const OrderController = require('../controller/orderController')
const authentication = require('../middleware/authentication')
const PaymentController = require('../controller/paymentController')
const router = express.Router()
const cors = require('cors')


router.use(cors())





// post /register 
router.post('/register', UserController.register)
// post /login
router.post('/login', UserController.login)


//get/menu
router.get('/menus',authentication, MenuController.getAllMenu)
//get/menu/detail
router.get('/menus/:id',authentication, MenuController.getMenuById)
//post/order
router.post('/order',authentication, OrderController.addOrder)
//delete/order
router.delete('/order',authentication, OrderController.deleteOrder)
// get/gemini
router.get('/gemini', UserController.gemini)

router.patch('/user/me/upgrade',UserController.upgradeAccount)

router.get('/payment/token', PaymentController.getMidtransToken)

router.post('https://app.sandbox.midtrans.com/snap/v1/transactions')



router.use(errorHandler)

module.exports = router