const express = require("express");
const router = express.Router();
const {
registerUser,
loginUser,
currentUser,
} = require("../controllers/userController");
const productDetails=require("../controllers/productController");
const validateToken = require("../middleware/validateToken");

router.post("/login",loginUser);

router.get("/current",validateToken,currentUser);

router.post("/register",registerUser);

router.post("/productDetails",validateToken,productDetails);

module.exports = router;