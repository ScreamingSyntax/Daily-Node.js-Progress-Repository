const express = require('express');
const app = express();
var parseUrl = require('body-parser');
let encodeUrl = parseUrl.urlencoded({extended: false});
const port = 3000;
const mysql = require('mysql2');
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'register'
}
);

con.connect((err)=>{
    if (err) throw err;
    console.log("Database Connected");
});
// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+'/register.html');
// });

// app.get('/register',(req,res)=>{
//     // res.send(req.body);
//     res.send("HElllo");
//     console.log(res.body.firstName)
//     console.log(res.body.password)
//     console.log(res.body.email)
// });
// app.post('/register',encodeUrl,(req,res)=>{
//     const firstname = req.body.firstName;
//     const password = req.body.password;
//     const email = req.body.email;
//     res.send(`${firstname} ${password} ${email}`);
//     const query = `Insert INTO register_student VALUES ('${email}','${password}','${firstname}')`;
//     con.query(query,(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//     });
// });

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});

module.exports = {con,encodeUrl};