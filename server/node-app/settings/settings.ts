import express = require('express')
import errorHandler = require('errorhandler')
import cors = require('cors')
import bodyParser = require('body-parser')
import path = require('path')

import homeControler from '../controlers/homeControler'

class App {
  constructor(
    private app = express(),
    private settingsArray = [
      bodyParser.json(),
      bodyParser.urlencoded({ extended: true }),
      cors(),
      errorHandler(),
      express.static(path.join(__dirname, '../public'))
    ]
  ) {}

  setApp() {
    this.settingsArray.forEach(option => {
      this.app.use(option)
    })
    this.app.use('/', homeControler)
  }

  startServer(port = process.env.PORT || 8080) {
    this.app.listen(port, () =>
      console.log('Server is runing on port:   ' + port)
    )
  }
}
export default new App()
