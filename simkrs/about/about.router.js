const express = require("express");
const router = express.Router();
const authController = require("./about.controller");

router.get("/", authController.getCompanyData);

module.exports = router;