import * as jwt from 'jsonwebtoken'
import mongo from '../db/mongo'
import userModel from '../models/userModel'

class Login {
  login(req: any, res: any, next: any) {
    console.log(req.body)
    const newUser = {
      nick: req.body.nick,
      password: req.body.password
    }
    console.log(newUser)

    userModel.getUserByNick(newUser, (err: any, user: any) => {
      if (err) throw err
      if (!user)
        return res.json({
          success: false,
          msg: 'nie można znaleść użytkownika'
        })

      userModel.comparePassword(
        newUser.password,
        user.password,
        (err: any, isMatch: any) => {
          if (err) throw err
          if (isMatch) {
            const token = jwt.sign({ data: user }, mongo.secretMongo(), {
              expiresIn: '7d'
            })
            res.json({
              success: true,
              token: 'JWT ' + token,
              user: { id: user._id, nick: user.nick }
            })
          } else return res.json({ success: false, msg: 'Złe haslo' })
        }
      )
    })
  }
}
export default new Login().login
