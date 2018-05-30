import noteModel from '../models/noteModel'

class AddNote {
  addNote(req: any, res: any) {
    const date = new Date()
    date.setHours(date.getHours() + 2)

    const newNote = new noteModel.noteModel({
      title: req.body.title,
      content: req.body.content,
      subject: req.body.subject,
      user: req.body.user,
      date: date
    })

    noteModel.addNote(newNote, (err: any, note: any) => {
      if (err) res.json({ success: false, msg: 'Nie udało się wysłać notatki' })
      else res.json({ success: true, msg: 'Notatka Wysłana' })
    })
  }
}
export default new AddNote().addNote
