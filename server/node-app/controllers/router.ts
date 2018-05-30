import * as express from 'express'
import login from './login'
import register from './register'
import all from './all'
import profile from './profile'
import android from './android'
import addNote from './addnote'
import home from './home'

class RouterClass {
  setRouter() {
    const router = express.Router()

    const routerPostArray = [
      ['/server/register', register],
      ['/server/login', login],
      ['/server/addnote', addNote]
    ]

    const routerGetArray = [
      ['/server/home', home],
      ['/server/profile', profile],
      ['/server/android', android],
      ['*', all]
    ]

    routerPostArray.forEach(option => {
      const opt1: any = option[0]
      const opt2: any = option[1]
      router.post(opt1, opt2)
    })

    routerGetArray.forEach(option => {
      const opt1: any = option[0]
      const opt2: any = option[1]
      router.get(opt1, opt2)
    })
    return router
  }
}
export default new RouterClass().setRouter()
