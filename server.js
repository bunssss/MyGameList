// const express = require("express");
// const app = express();
// const mongoose = require ("mongoose");
// const bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({extended: true}));

// mongoose.connect();

// //data schema
// const reviewSchema = new mongoose.Schema({
//     gameName: String,
//     dateStart: Date,
//     dateComplete: Date,
//     rating: Number,
//     comments: String,

// },

//     { collection: "reviews"}

// )

// const Review = mongoose.model("Review", reviewSchema);

// app.get("/", function(req, res){
//     res.sendFile(__dirname + "/index.html")
// })

// app.post("/", function(req, res){
//     let newReview = new Review({
//         gameName: req.body.gamename,
//         dateStart: req.body.DateStart,
//         dateComplete: req.body.DateComplete,
//         rating: req.body.Rating,
//         comments: req.body.Comments
//     });
//     newReview.save();
//     res.redirect('/');
// })

// app.listen(3000, function(){
//     console.log("Server is running")
// })