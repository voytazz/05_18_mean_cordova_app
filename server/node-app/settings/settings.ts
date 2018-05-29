import * as express from 'express'
import * as errorHandler from 'errorhandler'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as path from 'path'

import router from '../controllers/router'

class App {
  constructor(
    private app = express(),
    private router = express.Router(),
    private settingsArray = [
      bodyParser.json(),
      bodyParser.urlencoded({ extended: true }),
      cors(),
      errorHandler(),
      express.static(path.join(__dirname, '../public')),
      express.static(path.join(__dirname, '../'))
    ]
  ) {}

  setApp() {
    this.settingsArray.forEach(option => {
      this.app.use(option)
    })
    this.app.use('/', router)
  }

  startServer(port = process.env.PORT || 8080) {
    this.app.listen(port, () =>
      console.log('Server is runing on port:   ' + port)
    )
  }
}
export default new App()
