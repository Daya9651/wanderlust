const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});

//PassportLocalMongoose is used as plugin, bcz it automatic generate user name and salting, hashing concept
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);