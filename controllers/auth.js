const express = require("express");
const register = require("./register");
const login = require("./login");
const addImage = require("./addImage");


const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.post("/addImage", addImage)


module.exports = router;