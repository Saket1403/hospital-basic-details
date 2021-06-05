const express = require("express");
require("./db/conn");
const hospitaldetails = require("./models/hospitalbasic");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.post("/hospitalbasicdetails" , (req , res) => {
    console.log(req.body);
    const user = new hospitaldetails(req.body);

    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
    
})

app.listen(port , () => {
    console.log('connected');
})