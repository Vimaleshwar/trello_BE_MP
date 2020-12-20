const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    board : Object
})
const BoardSchema =new  mongoose.model("boardSchemas",schema)

module.exports = BoardSchema
