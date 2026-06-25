const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getOfficers, getUsers,addOfficer,deleteOfficer } = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get(
    "/officers",
    getOfficers
);

router.get("/users", getUsers);
router.post(
    "/officer/add",
    addOfficer
);

router.delete(
    "/officer/delete/:id",
    deleteOfficer
);
module.exports = router;