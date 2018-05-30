"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
class NoteModel {
    constructor(mongoose = Mongoose, NoteSchema = new mongoose.Schema({
            title: {
                type: String,
                require: true
            },
            content: {
                type: String,
                require: true
            },
            subject: {
                type: String,
                require: true
            },
            user: {
                type: Object,
                require: true
            },
            date: {
                type: Date,
                require: true
            }
        }), noteModel = mongoose.model('noteModel', NoteSchema)) {
        this.mongoose = mongoose;
        this.NoteSchema = NoteSchema;
        this.noteModel = noteModel;
    }
    addNote(newNote, callback) {
        newNote.save(callback);
    }
    getAllNotes(all, callback) {
        this.noteModel.find(all, callback).sort({ date: -1 });
    }
}
exports.default = new NoteModel();
