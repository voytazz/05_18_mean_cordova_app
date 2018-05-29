"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
const Bcrypt = require("bcryptjs");
class UserModel {
    constructor(mongoose = Mongoose, bcrypt = Bcrypt, UserSchema = new mongoose.Schema({
            nick: {
                type: String,
                require: true
            },
            password: {
                type: String,
                require: true
            }
        }), userModel = mongoose.model('userModel', UserSchema)) {
        this.mongoose = mongoose;
        this.bcrypt = bcrypt;
        this.UserSchema = UserSchema;
        this.userModel = userModel;
    }
    getUserById(id, callback) {
        this.userModel.findById(id, callback);
    }
    getUserByNick(nick, callback) {
        this.userModel.findOne({ nick: nick.nick }, callback);
    }
    addUser(newUser, callback) {
        this.bcrypt.genSalt(10, (err, salt) => {
            this.bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err)
                    throw err;
                newUser.password = hash;
                newUser.save(callback);
            });
        });
    }
    comparePassword(candidatePassword, hash, callback) {
        this.bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
            if (err)
                throw err;
            callback(undefined, isMatch);
        });
    }
}
exports.default = new UserModel();
