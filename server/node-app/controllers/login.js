"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const mongo_1 = require("../db/mongo");
const userModel_1 = require("../models/userModel");
class Login {
    login(req, res, next) {
        const newUser = {
            nick: req.body.nick,
            password: req.body.password
        };
        userModel_1.default.getUserByNick(newUser, (err, user) => {
            if (err)
                throw err;
            if (!user)
                return res.json({
                    success: false,
                    msg: 'nie można znaleść użytkownika'
                });
            userModel_1.default.comparePassword(newUser.password, user.password, (err, isMatch) => {
                if (err)
                    throw err;
                if (isMatch) {
                    const token = jwt.sign({ data: user }, mongo_1.default.secretMongo(), {
                        expiresIn: '7d'
                    });
                    res.json({
                        success: true,
                        token: 'JWT ' + token,
                        user: { id: user._id, nick: user.nick }
                    });
                }
                else
                    return res.json({ success: false, msg: 'Złe haslo' });
            });
        });
    }
}
exports.default = new Login().login;
