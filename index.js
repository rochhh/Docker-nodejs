const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/" , (req,res)=>{
    res.send("<h1>Django!!!!dhbbddfbdf  d Angular is the best broooooo !!!! Django is also chill !!!! </h1>")
})

app.listen( port , ()=>{ console.log(`listening on port -> ${port} `) })