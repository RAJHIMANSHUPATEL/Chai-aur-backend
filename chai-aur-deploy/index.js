const express = require("express")
const app = express()
require('dotenv').config()

app.get('/', (req,res)=> {
    res.send("Hello")
})

app.get('/twitter', (req,res)=> {
    res.send("himanshurajpatel")
})

app.get("/login", (req,res)=> {
    res.send('<h1>Himanshu Raj Patel</h1>')
})


app.listen(process.env.PORT, ()=> {
    console.log("Server is listening on port 3000")
})