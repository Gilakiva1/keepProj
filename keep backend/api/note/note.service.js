// const dbService = require('../../services/db.service')
const noteService = require('../../service/notes.service')

module.exports = {
    getNotes,
    addNote,
    removeNote,
    changeColor
}
async function getNotes() {
    const notes = await noteService.getNotes()
    return notes
}

async function addNote(note) {
    const notes = await noteService.addNote(note)
    return notes
}
async function removeNote(noteId) {
    const notes = await noteService.removeNote(noteId)
    return notes
}
async function changeColor(noteId,bgc){
    const notes = await noteService.changeColor(noteId,bgc)
    return notes
}
