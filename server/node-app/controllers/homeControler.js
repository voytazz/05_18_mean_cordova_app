"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const userModel_1 = require("../models/userModel");
const homeControler = express.Router();
homeControler.get('/home', (request, response) => {
    response.json({ data: 'hello from heloControler' });
});
homeControler.post('/home', (request, response) => {
    console.log(request.body);
    response.json({
        data: `response message >> ${request.body.data} << from server`
    });
});
homeControler.get('/android', (request, response) => {
    response.download('files/app-debug.apk', 'app.apk');
});
//----------------------------------------------------
//-----register------//
homeControler.post('/register', (req, res) => {
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
                user.addUser(newUser, (err, user) => {
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
});
//--------------------------------------------------
//-----login-------//
// homeControler.post('/auth', (req, res, next) => {
//   console.log(req.body)
//   const newUser = {
//     nick: req.body.nick,
//     password: req.body.password
//   }
//   console.log(newUser)
//   user.getUserByNick(newUser, (err, user) => {
//     if (err) throw err
//     if (!user)
//       return res.json({ success: false, msg: 'nie można znaleść użytkownika' })
//     user.comparePassword(newUser.password, user.password, (err, isMatch) => {
//       if (err) throw err
//       if (isMatch) {
//         const token = jwt.sign({ data: user }, mongo.secretMongo(), {
//           expiresIn: '7d'
//         })
//         res.json({
//           success: true,
//           token: 'JWT ' + token,
//           user: { id: user._id, nick: user.nick }
//         })
//       } else return res.json({ success: false, msg: 'Złe haslo' })
//     })
//   })
// })
//------------------------------------------------------
//-----profile-----//
homeControler.get('/profile', (req, res, next) => {
    res.json({ user: req.user });
});
//--------------------------------------------------------
//-----all-diffent-pages-----//
homeControler.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
exports.default = homeControler;
