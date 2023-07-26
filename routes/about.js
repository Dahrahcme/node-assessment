// importing express
const express = require("express")

const about = express.Router();

about.post("/about", (req, res)=>{
    res.send("My about page")
})

module.exports.about = about