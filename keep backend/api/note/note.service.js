// const dbService = require('../../services/db.service')
const noteService = require('../../service/notes.service')

module.exports = {
    getNotes,
    addNote,
    removeNote,
    editTxt,
    removeTodo,
    doneTodo,
    changeColor
}
async function getNotes(filterBy) {
    const notes = await noteService.getNotes(filterBy)
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
async function changeColor(noteId, style) {
    const notes = await noteService.changeColor(noteId, style)
    return notes
}
async function removeTodo(noteId, info) {
    const notes = await noteService.removeTodo(noteId, info)
    return notes
}
async function doneTodo(noteId, info) {
    const notes = await noteService.doneTodo(noteId, info)
    return notes
}
async function removeTodo(noteId, info) {
    const notes = await noteService.removeTodo(noteId, info)
    return notes
}
async function editTxt(noteId, info) {
    const notes = await noteService.editTxt(noteId, info)
    return notes
}
