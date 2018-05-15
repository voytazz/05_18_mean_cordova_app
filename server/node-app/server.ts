import app from './settings/settings'
import db from './db/mongo'

//const port = process.env.PORT || 8080

db.connect()
app.setApp()
app.startServer()

// app.listen(port, () => {
//   console.log('Server is runing on port:   ' + port)
// })
