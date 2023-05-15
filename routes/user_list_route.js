// import methods
const { createUser, getUsers, getUserById, updateUser, deleteUser, login } = require("../controllers/user_list_controller.js");
const router = require("express").Router();

// routers
router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/", updateUser);
router.delete("/:id", deleteUser);
router.post("/login", login);

// export router
module.exports = router;