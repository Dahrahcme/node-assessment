// importing express
const express = require("express")


const home = express.Router();

home.get("/home", (req, res)=>{
    res.send("My Homepage")
    console.log("my homepage");
})

// exporting
module.exports = home