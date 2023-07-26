// importing express
const express = require("express")

const contact = express.Router();

contact.get("/contact", (req, res)=>{
    res.send("My contact page")
})

module.exports.contact = contact