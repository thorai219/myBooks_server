const express = require("express");

const auth = require("../middleware/auth.middleware");

const { fetchNewBooks } = require("../controllers/books.controller");

const router = express.Router();

router.get("/new", fetchNewBooks);

module.exports = router;
