
const express = require("express");
const mysql = require("mysql");
// const cors = require("cors");

const app = express();

app.use(express.json());
// app.use(cors());

const con = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        password: "",
        database: "aaryan",
    }
)

// app.get()
app.get('/',(req,res)=>{
    // res.send("<button onclick={post(http://localhost:4000/register)}> Suyog </button>")
    const query = "SELECT * FROM routine";
    con.query(query,(err,rows)=>{
        if(err) throw err;
        res.send(rows);
    });

});

app.get('/one',(req,res)=>{

})
app.get('/show',(req,res)=>{
    con.query("Select * from routine")
    res.send("This wil show the details")
    // app.post('/register', (req, res)=>{
//     const id = req.body.id;
//     const tutor_name=req.body.tutor_name;
//     const class_name= req.body.class_name;
//     const time = req.body.time;

//     con.query("INSERT INTO routine (id,tutor_name,class_name,time) VALUES(?,?,?,?)", [4,"Niggasa","Randi Chlass","69:69"],
//         (err, result)=>{
//             if(err) throw err;
//             if(result){
//                 res.send(result);
//             }
//         }
//     )
// })

});


app.listen(4000, ()=>{
    console.log("Running backend server.")
});

// module.exports('')