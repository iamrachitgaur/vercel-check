const express  = require('express');
const app = express();
const port = 2000 || process.env.PORT

app.get('/',(req,res)=>{
    res.send('hello world!!')
})
app.get('/check',(req,res)=>{
    res.send(process.env.TOKEN)
})

module.exports = app
