import * as Mongoose from 'mongoose'
import * as Bcrypt from 'bcryptjs'

class UserModel {
  constructor(
    private mongoose = Mongoose,
    private bcrypt = Bcrypt,
    private UserSchema = new mongoose.Schema({
      nick: {
        type: String,
        require: true
      },
      password: {
        type: String,
        require: true
      }
    }),
    public userModel = mongoose.model('userModel', UserSchema)
  ) {}

  getUserById(id: any, callback: any) {
    this.userModel.findById(id, callback)
  }

  getUserByNick(nick: any, callback: any) {
    this.userModel.findOne({ nick: nick.nick }, callback)
  }

  addUser(newUser: any, callback: any) {
    this.bcrypt.genSalt(10, (err, salt) => {
      this.bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err
        newUser.password = hash
        newUser.save(callback)
      })
    })
  }

  comparePassword(candidatePassword: any, hash: any, callback: any) {
    this.bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
      if (err) throw err
      callback(undefined, isMatch)
    })
  }
}
export default new UserModel()
