const dbService = require('./db.service')
const logger = require('./logger.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    getNotes,
    getById,
    addNote,
    removeNote,
    editTxt,
    removeTodo,
    doneTodo,
    changeColor
}
async function editTxt(noteId, info) {

    try {
        const collection = await dbService.getCollection('note_db')
        const notes = await collection.updateOne({ _id: ObjectId(noteId) }, { $set: { info: info } })

    } catch (err) {
        console.log(err);
    }
}
async function getNotes(type) {
    const criteria = { type: type }
    let notes
    try {
        const collection = await dbService.getCollection('note_db')
        if (type === 'all') notes = await collection.find().toArray()
        else notes = await collection.find(criteria).toArray()
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
        const notes = await collection.deleteOne(criteria)
        return notes
    } catch (err) {
        logger.error(`while delete note `, err)
        throw err
    }
}
async function removeTodo(noteId, info) {

    try {
        const criteria = { _id: ObjectId(noteId) }
        const collection = await dbService.getCollection('note_db')
        const notes = await collection.updateOne(criteria, { $set: { info: info } })
        return notes
    } catch (err) {
        logger.error(`while delete note `, err)
        throw err
    }
}
async function doneTodo(noteId, info) {

    try {
        const criteria = { _id: ObjectId(noteId) }
        const collection = await dbService.getCollection('note_db')
        const notes = await collection.updateOne(criteria, { $set: { info: info } })
        return notes
    } catch (err) {
        logger.error(`while delete note `, err)
        throw err
    }
}
async function changeColor(noteId, style) {

    try {
        const criteria = { _id: ObjectId(noteId) }
        const collection = await dbService.getCollection('note_db')
        const notes = await collection.updateOne(criteria, { $set: { style: style } })
        return notes
    } catch (err) {
        logger.error(`while delete note `, err)
        throw err
    }
}
async function removeTodo(noteId, info) {
    try {
        const criteria = { _id: ObjectId(noteId) }
        const collection = await dbService.getCollection('note_db')
        const notes = await collection.updateOne(criteria, { $set: { info: info } })
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
        return userData
    } catch (err) {
        logger.error(`while finding user ${userId}`, err)
        throw err
    }
}
