const pool = require("../../config/database")

module.exports = {
    create: (data, callback)=>{
        pool.query(
            "Insert into user(name,email,password) values(?,?,?)",
            [
            data.name,
            data.email,
            data.password
            ],
            (error,result,field) =>{
                if(error){
                return callback(error);
                }
                return callback(null,result);
                 
            }
        )
    },
    getUsers : callBack=> {
        pool.query (
            "select id,name,email from user",
            [],
            (err,result,field)=>{
                if(err){
                   return callBack(err)
                }
                return callBack(null,result);
            }
        )
    },
    getUserByID : (id, callBack) => {
        pool.query (
            "select name from user where id = ?",
            [id],
            (err,result,field)=>{
                if(err){
                    return callBack(err)
                }
                return callBack(null,result);
            }
        )
    },

    getUserByEmail :(email,callBack)=>{
        pool.query('Select * from user where email = ?',
        [email],
        (err,result,fields)=>{
            if(err){
                return callBack(err);
            }
            console.log(result[0])
            return callBack(null,result[0]);
        }
        );
    }
    ,
    updateUsers : (data, callBack) => {
        pool.query (
            "update user set name = ?, email = ? ,password = ? where id = ?",
            [
                data.name,
                data.email,
                data.password,
                data.id,
            ],
            (err,result,field)=>{
                if(err){
                    return callBack(err)
                }
                console.log(data.id)
                console.log(data.name);
                return callBack(null,result);
            }
        )
    },
    deleteUsers: (id, callBack) => {
        pool.query(
            "delete from user where id = ?",
            [id],
            (err, result, field) => {
                if (err) {
                    return  callBack(err)
                }
                return callBack(null, result);
            }
        )
    },
    
    
}
