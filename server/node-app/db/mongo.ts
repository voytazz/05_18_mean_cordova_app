import * as mongoose from 'mongoose'

class Db {
  constructor(
    private dbUrl = 'mongodb://wsb:wsb@ds119080.mlab.com:19080/mean-wsb-db'
  ) {}

  connect() {
    mongoose
      .connect(this.dbUrl)
      .then(() => console.log('connected to db'))
      .catch(err => console.log('error connected db'))
  }
}
export default new Db()
