const { User, Menu, Order } = require('../models/index')


class UserController {
    static async register(req, res, next) {
        try {
            const { email, password } = req.body

            let newUser = await User.create({ email, password })

            res.status(201).json({ message: `New User with Email ${newUser.email} been registered successfully` })
        } catch (error) {
            next(error)
        }

    }
}
module.exports = UserController