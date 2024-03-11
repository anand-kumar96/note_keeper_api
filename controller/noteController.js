const noteModel = require("../model/notesModel");
const { findAndDeleteNote, updateNoteData, createNewNote } = require("../services/noteServices");

exports.createNote = async(req,res,next) =>{
    const {id,title, description, difficulty,date} = req.body;
    try{
    await createNewNote(id,title, description, difficulty,date);
    res.json({status : 'success', message:'note created successfully'});
    } catch(err){
        console.log('Error while creating notes')
        throw err;
    }
}

exports.deleteNote = async(req,res,next) =>{
    const noteId = parseInt(req.params.id);
    console.log(noteId)
    try{
       const note = await findAndDeleteNote(noteId);
    res.json({status : 'success', message:'note deleted successfully'});
    } catch(err){
        console.log('Error while deleting notes')
        throw err;
    }
}

exports.updateNote = async(req,res,next) =>{
    const noteId = parseInt(req.params.id);
    let {id,title, description, difficulty,date} = req.body;
    try{
    const note = await updateNoteData(id,title, description, difficulty,date);
    res.json({status : 'success', message:'note updated successfully'});
    } catch(err){
        console.log('Error while updating notes')
        throw err;
    }
}
exports.getAllNote = async(req,res,next) =>{
    try{
        const allNotes = await noteModel.find();
        res.json({status : 'success', length : allNotes.length, data: allNotes});
        } catch(err){
            console.log('Error while fetching notes')
            throw err;
        }
    }
exports.getNote = async(req,res,next) =>{
    const noteId = parseInt(req.params.id);
    try{
        const note = await noteModel.findOne({id:noteId});
        res.json({status : 'success',data: note});
        } catch(err){
            console.log('Error while fetching note')
            throw err;
        }
    }