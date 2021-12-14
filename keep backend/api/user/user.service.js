const dbService = require('../../service/db.service')
const logger = require('../../service/logger.service')
const ObjectId = require('mongodb').ObjectId


async function getById(user) {
    console.log(user);
    try {
        const collection = await dbService.getCollection('user_db')
        var user = await collection.findOne(user)
        delete user.password
        console.log('user from DB', user);

        return user
    } catch (err) {
        logger.error('cannot find user', err)
        throw err
    }

}

module.exports = {
    getById,
}