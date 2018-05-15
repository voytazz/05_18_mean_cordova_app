"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
//import { Express } from 'express'
const bodyParser = require("body-parser");
const errorHandler = require("errorhandler");
const path = require("path");
const cors = require("cors");
const homeControler_1 = require("./controlers/homeControler");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(errorHandler());
app.use(express.static(path.join(__dirname, '../../client/ng-app/src')));
app.use('/', homeControler_1.default);
exports.default = app;
