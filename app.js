require("dotenv").config()
const express = require('express');
const app = express();
const userRouter = require('./api/users/user.router');
app.use(express.json());

app.use('/api/users',userRouter);

// router.get('/',(req,res)=>{
//     res.json({
//         success:1,
//         message : "This is rest api working"
//     })
// })
app.listen(process.env.APP_PORT, ()=>{
    console.log("Server running on port : ",process.env.APP_PORT)
})
