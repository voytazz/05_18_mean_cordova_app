import noteModel from '../models/noteModel'

class Home {
  home(req: any, res: any) {
    noteModel.getAllNotes({}, (err: any, notes: any) => {
      if (err) res.json({ success: false, msg: 'Brak notatek' })
      else res.json({ success: true, msg: notes })
    })
  }
}
export default new Home().home
