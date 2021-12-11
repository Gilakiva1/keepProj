const express = require('express')
const { getNotes, addNote, deleteNote,changeColor } = require('./note.conroller')

const router = express.Router()

router.get('/', getNotes)
router.post('/', addNote)
router.delete('/:id', deleteNote)
router.put('/:id', changeColor)


module.exports = router