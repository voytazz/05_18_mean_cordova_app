"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const noteModel_1 = require("../models/noteModel");
class AddNote {
    addNote(req, res) {
        const date = new Date();
        date.setHours(date.getHours() + 2);
        const newNote = new noteModel_1.default.noteModel({
            title: req.body.title,
            content: req.body.content,
            subject: req.body.subject,
            user: req.body.user,
            date: date
        });
        noteModel_1.default.addNote(newNote, (err, note) => {
            if (err)
                res.json({ success: false, msg: 'Nie udało się wysłać notatki' });
            else
                res.json({ success: true, msg: 'Notatka Wysłana' });
        });
    }
}
exports.default = new AddNote().addNote;
