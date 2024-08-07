const { comparePassword } = require('../helper/bcrypt')
const { signToken, verifyToken } = require('../helper/jwt')
const { User, Menu, Order } = require('../models/index')
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.THANKS_AJIZ)


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
    static async gemini(req, res, next) {
        const { query } = req.body
        try {
            const menu = require('../data/menus.json')
                async function run() {
                    // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
                    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

                    const prompt = `${JSON.stringify(menu)} find the cheapest food based on menu above`

                    const result = await model.generateContent(prompt);
                    const response = await result.response;
                    const text = response.text();
                    console.log(text, "XXXXXX");
                }

            run();
        } catch (error) {
            console.log(error);

        }
    }
    static async upgradeAccount(req,res,next){
        try {
            res.json({message:"Upgrade Success"})
        } catch (error) {
            
        }
    }
}
