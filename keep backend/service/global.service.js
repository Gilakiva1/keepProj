const dbService = require('../service/db.service')
const logger = require('../service/logger.service')
const ObjectId = require('mongodb').ObjectId
const list = require('mongodb').list


module.exports = {
    getGlobalData,

}
async function getGlobalData() {
    try {
        const collection = await dbService.getCollection('global_db')
        const globalData = await collection.findOne()
        console.log('globalData', globalData);
        return globalData
    } catch (err) {
        logger.error(`while getting global data`, err)
        throw err
    }
}

