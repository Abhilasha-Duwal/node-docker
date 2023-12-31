const express = require("express")

const postController = require("../controllers/postController")
const protected = require("../middleware/authMiddleware");

const router = express.Router()

//localhost:3000/
router
.route("/")
.get(postController.getAllPosts)
.post(protected, postController.createPost);

router
.route("/:id")
.get(postController.getOnePost)
.patch(protected, postController.updatePost)
.delete(protected, postController.deletePost);

module.exports = router;
