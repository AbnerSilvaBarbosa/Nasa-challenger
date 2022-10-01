const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const path = require('path');
const cors = require('cors')

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(cors())
app.use(express.static(path.join(__dirname, '../frontend')));

app.use("/",express.static("../frontend/views"))

app.listen(3000,()=>{
    console.log("servidor iniciado na localhost:3000")
})