"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const login_1 = require("./login");
const register_1 = require("./register");
const all_1 = require("./all");
const profile_1 = require("./profile");
const android_1 = require("./android");
class RouterClass {
    setRouter() {
        const router = express.Router();
        //---------------------------------------
        const routerPostArray = [
            ['/server/register', register_1.default],
            ['/server/login', login_1.default]
        ];
        const routerGetArray = [
            ['/server/profile', profile_1.default],
            ['/server/android', android_1.default],
            ['*', all_1.default]
        ];
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
            const opt1 = option[0];
            const opt2 = option[1];
            router.post(opt1, opt2);
        });
        routerGetArray.forEach(option => {
            const opt1 = option[0];
            const opt2 = option[1];
            router.get(opt1, opt2);
        });
        return router;
    }
}
exports.default = new RouterClass().setRouter();
