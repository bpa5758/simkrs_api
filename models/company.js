const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

const UserSchema = new Schema({
    nama: {
        type: String,
        trim: true,
    },
    alias: {
        type: String,
        trim: true,
    },
    alamat: {
        type: String,
        trim: true,
    },
    telp: {
        type: String,
        trim: true,
    },
    alamat: {
        type: String,
        trim: true,
    },
    createdAt: {
        type: String,
        default: moment().format("YYYY-MM-DD HH:mm:ss"),
    },
    updatedAt: {
        type: String,
        default: null,
    },
});

module.exports = mongoose.model("User", UserSchema);
