const express = require("express");

const UserController = require("../controller/user.controller.js");

const router = express.Router();

router.post("/", UserController.createNewUser);
router.get("/", UserController.getAllUser);
// router.patch("/:id", UserController.updateUser);
// router.delete("/:id", UserController.deleteUser);

module.exports = router;
