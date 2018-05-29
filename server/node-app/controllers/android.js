"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Android {
    android(req, res) {
        res.download('files/app-debug.apk', 'app.apk');
    }
}
exports.default = new Android().android;
