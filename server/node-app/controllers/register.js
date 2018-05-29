"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = require("../models/userModel");
class Register {
    register(req, res) {
        console.log(req.body);
        if (req.body.nick === '' || req.body.password === '') {
            console.log('puste pola');
        }
        else {
            const newUser = new userModel_1.default.userModel({
                nick: req.body.nick,
                password: req.body.password
            });
            console.log(newUser);
            userModel_1.default.getUserByNick(newUser, (err, user) => {
                if (err)
                    throw err;
                if (!user) {
                    userModel_1.default.addUser(newUser, (err, user) => {
                        if (err)
                            res.json({ success: false, msg: 'Registration failed' });
                        else
                            return res.json({ success: true, msg: 'Registration success' });
                    });
                }
                else
                    return res.json({ success: false, msg: 'User already exist' });
            });
        }
    }
}
exports.default = new Register().register;
