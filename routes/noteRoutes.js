const express = require('express');
const { createNote, deleteNote, updateNote, getNote, getAllNote } = require('../controller/noteController');

const router = express.Router();
router.post('/createNote',createNote);
router.delete('/deleteNote/:id',deleteNote);
router.patch('/updateNote/:id',updateNote);
router.get('/getNote/:id',getNote);
router.get('/getAllNote',getAllNote);
module.exports = router