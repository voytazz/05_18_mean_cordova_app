import userModel from '../models/userModel'

class Register {
  register(req: any, res: any) {
    if (req.body.nick === '' || req.body.password === '') {
    } else {
      const newUser = new userModel.userModel({
        nick: req.body.nick,
        password: req.body.password
      })

      userModel.getUserByNick(newUser, (err: any, user: any) => {
        if (err) throw err
        if (!user) {
          userModel.addUser(newUser, (err: any, user: any) => {
            if (err) res.json({ success: false, msg: 'Registration failed' })
            else return res.json({ success: true, msg: 'Registration success' })
          })
        } else return res.json({ success: false, msg: 'User already exist' })
      })
    }
  }
}
export default new Register().register
