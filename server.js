const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.get('/',(req,res)=>res.send("Hello, world!"))

app.listen(8000,()=>console.log("listening on port " + 8000))