"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class Db {
    constructor(dbUrl = 'mongodb://wsb:wsb@ds119080.mlab.com:19080/mean-wsb-db') {
        this.dbUrl = dbUrl;
    }
    connect() {
        mongoose
            .connect(this.dbUrl)
            .then(() => console.log('connected to db'))
            .catch(err => console.log('error connected db'));
    }
}
exports.default = new Db();
