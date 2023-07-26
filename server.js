// import required datas

const express = require("express")
const home = require("./routes/home")
const {about} = require("./routes/about")
const {contact} = require("./routes/contact")

// creating an instance of 

var app = express()

// the routes

app.use("/server/", home)
app.use("/server/", contact)
app.use("/server/", about)

// the port 
app.listen(5000, ()=>{
    console.log("Node.js is running");
})