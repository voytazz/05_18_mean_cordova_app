import userModel from '../models/userModel'
import * as path from 'path'

class Profile {
  profile(req: any, res: any, next: any) {
    res.json({ user: req.user })
  }
}

export default new Profile().profile
