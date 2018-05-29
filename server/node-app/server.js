"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const settings_1 = require("./settings/settings");
const mongo_1 = require("./db/mongo");
mongo_1.default.connect();
settings_1.default.setApp();
settings_1.default.startServer();
