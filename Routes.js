const express = require('express');
const controller = require("./Controller")

const router = express.Router()

router.get("/", controller.controlDateNow)
router.get("/:date", controller.controlDatePast)


module.exports = router