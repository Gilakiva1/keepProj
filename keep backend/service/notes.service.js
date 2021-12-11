const dbService = require('./db.service')
const logger = require('./logger.service')
const ObjectId = require('mongodb').ObjectId


module.exports = {
    getNotes,
    getById,
    addNote,
    removeNote,
    changeColor
}
async function changeColor(noteId,bgc){
    try{
        const collection = await dbService.getCollection('note_db')
        const notes = await collection.updateOne({_id:ObjectId(noteId) },{$set:{backgroundColor:bgc}})
        
    }catch(err){
        console.log(err);
    }
}
async function getNotes() {
    try {
        const collection = await dbService.getCollection('note_db')
        const notes = await collection.find().toArray()
        return notes
    } catch (err) {
        logger.error(`while finding notes `, err)
        throw err
    }
}
async function removeNote(noteId) {

    try {
        const criteria = { _id: ObjectId(noteId) }
        const collection = await dbService.getCollection('note_db')
        const notes =  await collection.deleteOne(criteria)
        return notes
    } catch (err) {
        logger.error(`while delete note `, err)
        throw err
    }
}
async function addNote(note) {
    try {
        const collection = await dbService.getCollection('note_db')
        await collection.insertOne(note)
        console.log('from db', note);
        return note
    } catch (err) {
        logger.error(`add note `, err)
        throw err
    }
}

async function getById(userId) {
    try {
        const collection = await dbService.getCollection('user_data')
        const userData = await collection.findOne({ userId })
        console.log('userData', userData);
        return userData
    } catch (err) {
        logger.error(`while finding user ${userId}`, err)
        throw err
    }
}
