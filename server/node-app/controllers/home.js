"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const noteModel_1 = require("../models/noteModel");
class Home {
    home(req, res) {
        noteModel_1.default.getAllNotes({}, (err, notes) => {
            if (err)
                res.json({ success: false, msg: 'Brak notatek' });
            else
                res.json({ success: true, msg: notes });
        });
    }
}
exports.default = new Home().home;
