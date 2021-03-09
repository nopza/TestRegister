const express = require("express");
const multer = require("multer");
const uuid = require("uuid").v4;
const path = require("path");
const router = express.Router();

const Image = require("../models/Image_schema");


module.exports = router;
