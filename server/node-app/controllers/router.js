"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const login_1 = require("./login");
const register_1 = require("./register");
const all_1 = require("./all");
const profile_1 = require("./profile");
const android_1 = require("./android");
const addnote_1 = require("./addnote");
const home_1 = require("./home");
class RouterClass {
    setRouter() {
        const router = express.Router();
        const routerPostArray = [
            ['/server/register', register_1.default],
            ['/server/login', login_1.default],
            ['/server/addnote', addnote_1.default]
        ];
        const routerGetArray = [
            ['/server/home', home_1.default],
            ['/server/profile', profile_1.default],
            ['/server/android', android_1.default],
            ['*', all_1.default]
        ];
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
