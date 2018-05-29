import app from './settings/settings'
import db from './db/mongo'

db.connect()
app.setApp()
app.startServer()
