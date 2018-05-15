"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
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
exports.default = homeControler;