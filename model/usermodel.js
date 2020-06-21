const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//User Schema
const UserSchema = new Schema({
  gender: {
    type: String,
    required: true,
  },
  name: {
    title: {
      type: String,
    },
    first: {
      type: String,
    },
    last: {
      type: String,
    },
  },
  location: {
    street: {
      type: String,
    },
    city: {
      type: String,
    },
  },
  email: {
    type: String,
  },
  dob: {
    date: {
      type: Date,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  nat: {
    type: String,
    required: true,
  },
});

module.exports = User = mongoose.model("usermodel", UserSchema);
