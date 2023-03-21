const { response } = require('express');
const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user:"root",
    password:'',
    database:'aaryan'
})
const id = 1;
const new_id =5;

connection.connect((err)=>{
    if (err) throw err;
    console.log("Database connection successfull");
});

app.get('/',(req,res)=>{
    const query = "Select * from routine";
    connection.query(query,(err,rows)=>{
        if(err) throw err;
        res.send(rows);
    });
});
app.post('/nigga',(req,res)=>{
    // const query = `UPDATE routine SET id=${new_id} where id=${id} `;
    // connection.query(query,(err,rows)=>{
    //     if(err) throw err;
    //     res.send(rows);
    // })
    response = {
        id: "Nigga",
        tutor_name :"Mandip",
        class_name:"Nigga's part",
        time:"10:30 pm"
    }
    console.log(response)
    res.end(JSON.stringify(response));
});

app.listen(port,()=>{
    console.log(`Listening to server https://localhost:${port}`);
})