const express = require('express')
const { getNotes, addNote, deleteNote, editTxt, deleteTodo, doneTodo, changeColor } = require('./note.conroller')

const router = express.Router()

router.get('/:filterBy', getNotes)
router.post('/', addNote)
router.delete('/:id', deleteNote)
router.delete('/todo/:id', deleteTodo)
router.put('/edit/:id', editTxt)
router.put('/todo/done/:id', doneTodo)
router.put('/todo/color/:id', changeColor)

module.exports = router