"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
class All {
    all(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    }
}
exports.default = new All().all;
