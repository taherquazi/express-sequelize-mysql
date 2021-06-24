const todo = require("../controllers/todo.controller")

var router = require("express").Router();

router.post("/api/v1/todo",todo.create);

module.exports = router;