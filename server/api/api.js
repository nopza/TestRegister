const express = require("express");
const router = express.Router();

require("../db");
router.use(require("./api_register"));
router.use(require("./api_uploadimg"));

module.exports = router;
