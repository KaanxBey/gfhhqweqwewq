const mongoose = require('mongoose')
const Users = mongoose.Schema({
GuildID: String,
UserID: String,
Admin: String,
UserNames: String,
Role: String,
Sex: String,
Date: String
})
module.exports = mongoose.model("Users", Users);