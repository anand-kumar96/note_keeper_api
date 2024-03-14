const noteModel = require("../model/notesModel")

//  create Note
const createNewNote = async(id,title, description, difficulty,date) =>{
    await noteModel.create({
      id,
      title, 
      description, 
      difficulty,
      date
    })
}
// delete note
const findAndDeleteNote = async(noteId) =>{
    return await noteModel.deleteOne(
      {
      id:noteId
    });
}

const updateNoteData = async(id,title, description, difficulty,date) =>{
   return  await noteModel.updateOne(
    {id:id},
    {
      id,
      title, 
      description, 
      difficulty,date
    },
    { new: true }
    )
}

const insertManyNotes = async (notes) => {
  // Fetch existing notes from MongoDB
  const existingNotes = await noteModel.find({}, { _id: 0, id: 1 }).lean();
  const existingNoteIds = existingNotes.map(note => note.id);

  // Separate notes into add, update, and delete arrays
  const notesToAdd = notes.filter(note => !existingNoteIds.includes(note.id));
  const notesToUpdate = notes.filter(note => existingNoteIds.includes(note.id));
  const notesToDelete = existingNoteIds.filter(id => !notes.find(note => note.id === id));

  // Execute bulk operations
  const bulkOps = [];

  // Add new notes
  if (notesToAdd.length > 0) {
      bulkOps.push(...notesToAdd.map(note => ({
          insertOne: {
              document: note
          }
      })));
  }

  // Update existing notes
  if (notesToUpdate.length > 0) {
      bulkOps.push(...notesToUpdate.map(note => ({
          updateOne: {
              filter: { id: note.id }, // Filter based on the 'id' field
              update: { $set: note }
          }
      })));
  }

  // Delete notes
  if (notesToDelete.length > 0) {
      bulkOps.push(...notesToDelete.map(id => ({
          deleteOne: {
              filter: { id }
          }
      })));
  }

  // Execute the bulk write operation
  return await noteModel.bulkWrite(bulkOps);
}


module.exports = { createNewNote, findAndDeleteNote, updateNoteData,insertManyNotes}