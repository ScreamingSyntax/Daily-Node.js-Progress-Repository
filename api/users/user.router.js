const {createUser,getUserByID,getUsers,updateUsers,deleteUsers,login} = require('./user.controller');
const router = require('express').Router();
const {checkToken} = require("../../auth/token_validation");

router.post("/",createUser);
router.get("/",checkToken,getUsers);
router.patch("/",checkToken,updateUsers);
router.delete("/:id",checkToken,deleteUsers);
router.post("/login",login);
module.exports = router;
