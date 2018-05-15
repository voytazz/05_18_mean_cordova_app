"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const errorHandler = require("errorhandler");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const homeControler_1 = require("../controlers/homeControler");
class App {
    constructor(app = express(), settingsArray = [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        cors(),
        errorHandler(),
        express.static(path.join(__dirname, '../public'))
    ]) {
        this.app = app;
        this.settingsArray = settingsArray;
    }
    setApp() {
        this.settingsArray.forEach(option => {
            this.app.use(option);
        });
        this.app.use('/', homeControler_1.default);
    }
    startServer(port = process.env.PORT || 8080) {
        this.app.listen(port, () => console.log('Server is runing on port:   ' + port));
    }
}
exports.default = new App();
