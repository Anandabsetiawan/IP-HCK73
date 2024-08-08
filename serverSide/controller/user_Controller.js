const { comparePassword } = require('../helper/bcrypt')
const { signToken, verifyToken } = require('../helper/jwt')
const { User, Menu, Order } = require('../models/index')
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client()


// Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI(process.env.THANKS_AJIZ)


module.exports = class UserController {
    static async register(req, res, next) {
        try {
            const { email, password } = req.body

            let newUser = await User.create({ email, password })

            res.status(201).json({ message: `New User with Email ${newUser.email} been registered successfully` })
        } catch (error) {
            next(error)
        }
    }
    static async login(req, res, next) {

        const { email, password } = req.body
        console.log(req.body);
        try {

            if (!password) {
                throw { name: "Invalid input" }
            }
            if (!email) {
                throw { name: "Invalid input" }
            }
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if (!user) {
                throw { name: "Invalid User" }
            }
            let validPassword = comparePassword(password, user.password)

            if (!validPassword) {
                throw { name: "Invalid User" }
            }
            const token = signToken({
                id: user.id
            })
            res.status(200).json({
                access_token: token,
                email: email,
            })
        } catch (error) {
            // console.log(error);

            next(error)
        }
    }
    static async googleLogin(req, res, next) {
        const { googleToken } = req.body;
        try {
            const ticket = await client.verifyIdToken({
                idToken: googleToken,

                audience: process.env.GOOGLE_CLIENT_ID,// untuk live server
                // audience: "407408718192.apps.googleusercontent.com",// test dummy
            });
            const payload = ticket.getPayload();
            const [user, created] = await User.findOrCreate({
                where: { email: payload.email },
                defaults: {
                    name: payload.name,
                    email: payload.email,
                    picture: payload.picture,
                    provider: 'google',

                    password: 'google_id'
                },

                hooks: false
            });

            const token = signToken({ id: user.id });
            res.status(created ? 201 : 200).json({ access_token: token });
        } catch (error) {
            console.log(error);

        }
    }
    static async upgradeAccount(req, res, next) {
        try {
            res.json({ message: "Upgrade Success" })
        } catch (error) {
            console.log(error,"<<<<<<<<<<<<<INI GOOGLE");
            
        }
    }
}
