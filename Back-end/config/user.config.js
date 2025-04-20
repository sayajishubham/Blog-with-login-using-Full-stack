const userModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const AdduserToDb = async ({ email, username, password, role }) => {
    try {
        bcrypt.hash(password, 8, (err, hash) => {
            if (err) {
                return console.log(err)
            }
            const newUser = new userModel({ email, username, password: hash, role })
            newUser.save()
        })

    } catch (error) {
        console.log(error)
    }
}

module.exports = { AdduserToDb }