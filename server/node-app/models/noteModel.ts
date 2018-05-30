import * as Mongoose from 'mongoose'

class NoteModel {
  constructor(
    private mongoose = Mongoose,
    private NoteSchema = new mongoose.Schema({
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
    }),
    public noteModel = mongoose.model('noteModel', NoteSchema)
  ) {}

  addNote(newNote: any, callback: any) {
    newNote.save(callback)
  }

  getAllNotes(all: any, callback: any) {
    this.noteModel.find(all, callback).sort({ date: -1 })
  }
}
export default new NoteModel()
