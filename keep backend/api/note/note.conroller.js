const noteService = require('./note.service')
const logger = require('../../service/logger.service')

module.exports = {
    getNotes,
    addNote,
    deleteNote,
    editTxt,
    deleteTodo,
    doneTodo,
    changeColor
}

async function getNotes(req, res) {
    const type = req.params.filterBy
    try {
        const notes = await noteService.getNotes(type)
        res.status(200).send(notes)

    } catch (err) {
        logger.error('Failed to get note data' + err)
        res.status(400).send({ err: 'Failed to get note data' })
    }
}

async function editTxt(req, res) {
    const info = req.body
    try {
        await noteService.editTxt(req.params.id, info)
    } catch (err) {
        console.log(err);
    }
}
async function deleteNote(req, res) {

    try {
        await noteService.removeNote(req.params.id)
        res.send({ msg: 'Deleted successfully' })

    } catch (err) {
        logger.error('Failed to delete note', err)
        res.status(500).send({ err: 'Failed to delete note' })
    }
}

async function deleteTodo(req, res) {
    const noteId = req.params.id
    const info = req.body
    try {
        await noteService.removeTodo(noteId, info)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete todo', err)
        res.status(500).send({ err: 'Failed to delete todo' })

    }
}
async function doneTodo(req, res) {
    const noteId = req.params.id
    const info = req.body
    try {
        await noteService.doneTodo(noteId, info)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete todo', err)
        res.status(500).send({ err: 'Failed to delete todo' })

    }
}
async function changeColor(req, res) {
    const noteId = req.params.id
    const style = req.body
    try {
        await noteService.changeColor(noteId, style)
        res.send({ msg: 'change successfully' })
    } catch (err) {
        logger.error('Failed to change color', err)
        res.status(500).send({ err: 'Failed to change color' })

    }
}

async function addNote(req, res) {
    var note = req.body
    note = await noteService.addNote(note)
    res.send(note)

}

