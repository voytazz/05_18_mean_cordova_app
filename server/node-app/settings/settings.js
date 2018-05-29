"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const errorHandler = require("errorhandler");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const router_1 = require("../controllers/router");
class App {
    constructor(app = express(), router = express.Router(), settingsArray = [
            bodyParser.json(),
            bodyParser.urlencoded({ extended: true }),
            cors(),
            errorHandler(),
            express.static(path.join(__dirname, '../public')),
            express.static(path.join(__dirname, '../'))
        ]) {
        this.app = app;
        this.router = router;
        this.settingsArray = settingsArray;
    }
    setApp() {
        this.settingsArray.forEach(option => {
            this.app.use(option);
        });
        this.app.use('/', router_1.default);
    }
    startServer(port = process.env.PORT || 8080) {
        this.app.listen(port, () => console.log('Server is runing on port:   ' + port));
    }
}
exports.default = new App();
