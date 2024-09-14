const express = require("express");
const router = express.Router();

// controllers
const { list, update, remove } = require("../controllers/user");
// middleware
const { auth } = require('../middleware/auth')

router.get("/users",auth, list);
router.patch("/users/:userId",auth, update);
router.delete("/users/:userId",auth, remove);

module.exports = router;
