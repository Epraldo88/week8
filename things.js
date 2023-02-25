const express = require("express");
const router = express.Router();

router.get("/:name/:id", function (req, res) {
	res.send(`id : ${req.params.id}, nama : ${req.params.name}`);
});

router.post("/", function (req, res) {
	res.send("Hello rakamin! from post");
});

router.put("/put", function (req, res) {
	res.send("Hello rakamin! from put");
});

module.exports = router;
