import userModel from '../models/userModel'
import * as path from 'path'

class All {
  all(req: any, res: any) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  }
}
export default new All().all
