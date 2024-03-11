const mongoose = require('mongoose');

// Define schema for todo items
const noteSchema = new mongoose.Schema({
  id:{
    type: Number, 
    required: true
  },
  title: { 
    type: String, 
    required: true 
   },
  description: { 
    type: String, 
    required: true 
   },
  difficulty:{
    type: Number, 
    required: true
  },
  date: { 
    type: String, 
    required: true 
  } 
});

// Define todo model
const noteModel = mongoose.model('note', noteSchema);
module.exports = noteModel;
