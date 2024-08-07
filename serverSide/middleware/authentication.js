const { verifyToken } = require('../helper/jwt')
const { User } = require('../models/index')

async function authentication(req, res, next) {
    try {
        let access_token = req.headers.authorization

        if (!access_token) {
            throw { name: "invalid token" }
        }
        let [Bearer, token] = access_token.split(" ")

        if (Bearer !== "Bearer") {
            throw { name: "invalid token" }
        }
        // console.log(token, "token auth<<<<<");
        let payload = verifyToken(token)

        let user = await User.findByPk(payload.id)

        // console.log(user, "ini di auth user");

        if (!user) {
            throw { name: "User 404" }
        }
        req.user = {
            id: user.id
        }
        next()
    } catch (error) {
        console.log(error, "error auth<<<<<");
        next(error)
    }
}

module.exports = authentication