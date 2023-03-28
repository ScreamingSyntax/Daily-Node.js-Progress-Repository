const { create, getUserByID, getUsers, updateUsers, deleteUsers ,getUserByEmail} = require("./user.service");
const { genSaltSync, hashSync,compareSync } = require('bcrypt');
// const {} = require('jsonwebtoken');
const { sign } = require("jsonwebtoken");
const { json } = require("body-parser");
// const env = require('dotenv').config();

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error"
        });
      }
      return res.status(200).json({
        success: 1,
        data: results
      })
    })
  },
  getUserByID: (req, res) => {
    const id = req.params.id;
    getUserByID(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record Not Found"
        })
      }
      return res.json({
        success: 1,
        data: results
      })
    })
  },
getUsers: (req, res) => {
    getUsers((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results
      })
    })
  },
  updateUsers: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    updateUsers(body, (err, results) => {
      if (err)
       {
        console.log(err);
        return;
      }
      if(results.affectedRows == 0 || !results){
        return res.json({
            success : 0,
            message: "Failed to Update User"
        })
      }
      return res.json({
        success: 1,
        message: "Updated successfully"
      })
    });
  },
  deleteUsers: (req, res) => {
    const id = req.params.id;
    // const data = req.body;
    console.log(id);
    deleteUsers(id, (err, results) => {
        console.log("This is results",results)
    //   console.logs()
      if (err) {
        console.log(err);
        return;
      }
      if (results .affectedRows===0) {
        return res.json({
          success: 0,
          message: "Record Not Found or Failed to Delete"
        })
      }
      return res.json({
        success: 1,
        message: "User Deleted Successfully"
      });
    });
  },
  getUserByEmail : (req,res)=>{
    const data = req.body;
    getUserByEmail(data,(err,results)=>{
        if (err){
            console.log(err);
            return;
        }
        if(!results){
            return res.json({
                success:0,
                message:"Record Not Found"
            })
        }
        return res.json({
            success : 1,
            message : "Got Email Successfully"
        })
    })
  },
  login: (req,res)=>{
    const body = req.body;
    // console.log(body);
    getUserByEmail(body.email,(err,results)=>{
        if(err){
            console.log(err);
        }
        if(!results){
            return res.json({
                success:0,
                data:"Invalid email or password"
            });
        }
        const result= compareSync(body.password,results.password);
        // console.log(process.env.KEY)
        if(result){
            // results.password = undefined;
            const jsontoken = sign({result: results}, process.env.KEY,{
                expiresIn: "1h"
            });
            return res.json({
                success :1,
                message:"Login Successfully",
                token : jsontoken
            });
        }
        else{
            return res.json({
                success:0,
                data : "Invalid email or password"
            });

        }
    })}}
