import * as express from 'express'
import login from './login'
import register from './register'
import all from './all'
import profile from './profile'
import android from './android'

class RouterClass {
  setRouter() {
    const router = express.Router()
    //---------------------------------------
    const routerPostArray = [
      ['/server/register', register],
      ['/server/login', login]
    ]
    const routerGetArray = [
      ['/server/profile', profile],
      ['/server/android', android],
      ['*', all]
    ]
    //---------------------------------------
    // router.get('/server/home', (request, response) => {
    //   console.log('home')
    //   response.json({ data: 'hello from heloControler' })
    // })

    // router.post('/server/home', (request, response) => {
    //   console.log(request.body)
    //   response.json({
    //     data: `response message >> ${request.body.data} << from server`
    //   })
    // })
    //---------------------------------------
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
