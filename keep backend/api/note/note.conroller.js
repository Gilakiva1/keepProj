const noteService = require('./note.service')
const logger = require('../../service/logger.service')

module.exports = {
    getNotes,
    addNote,
    deleteNote,
    changeColor
}

async function getNotes(req, res) {
    try {
        const notes = await noteService.getNotes()
        res.status(200).send(notes)

    } catch (err) {
        logger.error('Failed to get note data' + err)
        res.status(400).send({ err: 'Failed to get note data' })
    }
}

async function changeColor(req,res){
    const bgc = req.body
    console.log(req.params.id,bgc);
    try{
        await noteService.changeColor(req.params.id,)
    }catch(err){
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

async function addNote(req, res) {
    var note = req.body
    console.log('note add', note);
    note = await noteService.addNote(note)
    res.send(note)

}

