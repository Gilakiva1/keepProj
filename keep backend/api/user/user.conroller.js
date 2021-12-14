const userService = require('./user.service')
const logger = require('../../service/logger.service')

async function login(req, res) {
    const  user  = req.body
    console.log('userName',user);
    try {
        const userData = await userService.getById(user)
        res.status(200).send(userData)
    } catch (err) {
        logger.error('Failed to get user data' + err)
        res.status(400).send({ err: 'Failed to get user data' })
    }
}

module.exports = {
    login
}