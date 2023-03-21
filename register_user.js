const express = require('express');
const app = express();
const connectionImports = require("./server");
const con = connectionImports.con;
const encodeUrl = connectionImports.encodeUrl;

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/register.html');
});

app.get('/register',(req,res)=>{
    // res.send(req.body);
    res.send("HElllo");
    console.log(res.body.firstName)
    console.log(res.body.password)
    console.log(res.body.email)
});
app.post('/register',encodeUrl,(req,res)=>{
    const firstname = req.body.firstName;
    const password = req.body.password;
    const email = req.body.email;
    res.send(`${firstname} ${password} ${email}`);
    const query = `Insert INTO register_student VALUES ('${email}','${password}','${firstname}')`;
    con.query(query,(err,result)=>{
        if(err) throw err;
        console.log(result);
    })});