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
const insertManyNotes = async(notes)=>{
    const bulkOps = notes.map(note => ({
        updateOne: {
          filter: { id: note.id }, 
          update: { $set: note },
          upsert: true 
        }
      }));
  
      // Execute the bulk write operation
      return result = await noteModel.bulkWrite(bulkOps);
}

module.exports = { createNewNote, findAndDeleteNote, updateNoteData,insertManyNotes}