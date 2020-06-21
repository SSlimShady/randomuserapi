const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 1234;

//User model
const User = require("./model/usermodel");

//BodyParser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
//Add new user in db
app.post("/adduser", (req, res) => {
  console.log(req.body);
  const newUser = new User({
    gender: req.body.gender,
    nat: req.body.nat,
    dob: { age: req.body.age },
  });
  newUser.save().then((newuser) => res.json(newuser));
});

//Get male users stored in db
app.get("/getusers", (req, res) => {
  // User.find().then((usr) => res.json(usr));
  User.aggregate([{
    $facet: {
      "first": [

        {
          $match: {
            $and:
              [
                { "dob.age": { $gte: 0, $lte: 30 } },
                { "gender": "male" }
              ]
          }
        },
        {
          $group: {
            _id: "$nat",
            count: { $sum: 1 },
          },
        }],
      "second": [
        {
          $match: {
            $and:
              [
                { "dob.age": { $gte: 31, $lte: 50 } },
                { "gender": "male" }
              ]
          }
        },
        {
          $group: {
            _id: "$nat",
            count: { $sum: 1 },
          },
        }
      ],
      "third": [
        {
          $match: {
            $and:
              [
                { "dob.age": { $gte: 51 } },
                { "gender": "male" }
              ]
          }
        },
        {
          $group: {
            _id: "$nat",
            count: { $sum: 1 },
          },
        }
      ],
    }
  }]).then((allusrs) => res.json(allusrs))
    .catch((err) => console.log(err));
});

//Get female users stored in db
app.get("/getusersfe", (req, res) => {
  // User.find().then((usr) => res.json(usr));
  User.aggregate([{
    $facet: {
      "first": [

        {
          $match: {
            $and:
              [
                { "dob.age": { $gte: 0, $lte: 30 } },
                { "gender": "female" }
              ]
          }
        },
        {
          $group: {
            _id: "$nat",
            count: { $sum: 1 },
          },
        }],
      "second": [
        {
          $match: {
            $and:
              [
                { "dob.age": { $gte: 31, $lte: 50 } },
                { "gender": "female" }
              ]
          }
        },
        {
          $group: {
            _id: "$nat",
            count: { $sum: 1 },
          },
        }
      ],
      "third": [
        {
          $match: {
            $and:
              [
                { "dob.age": { $gte: 51 } },
                { "gender": "female" }
              ]
          }
        },
        {
          $group: {
            _id: "$nat",
            count: { $sum: 1 },
          },
        }
      ],
    }
  }]).then((allusrs) => res.json(allusrs))
    .catch((err) => console.log(err));
});
mongoose
  .connect("mongodb://localhost:27017/gibotdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"));
