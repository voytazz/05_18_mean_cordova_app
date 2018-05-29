"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Profile {
    profile(req, res, next) {
        console.log(req.body);
        res.json({ user: req.user });
    }
}
exports.default = new Profile().profile;
