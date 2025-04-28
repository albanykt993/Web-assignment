const mongoose= require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  idUser: {type: Number, required: true},
  name: { type: String, required: true},
  email: {type: sString, required: true},
  age: {type: Number,},
  department: {type:String}
});

module.exports = mongoose.model("User", User);

