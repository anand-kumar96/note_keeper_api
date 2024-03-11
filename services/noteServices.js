const noteModel = require("../model/notesModel")

//  create Note
const createNewNote = async(id,title, description, difficulty,date) =>{
    await noteModel.create({id,title, description, difficulty,date})
}
// delete note
const findAndDeleteNote = async(noteId) =>{
    return await noteModel.deleteOne({id:noteId});
}

const updateNoteData = async(id,title, description, difficulty,date) =>{
   return  await noteModel.updateOne({id:id},{id,title, description, difficulty,date},{ new: true })
}

module.exports = { createNewNote, findAndDeleteNote, updateNoteData}