const express = require('express');
const blogController = require("../controller/blog.controller");
const { authMiddleware, authorizeRoles } = require('../middleware/middleWares');
const blogRouter = express.Router();

blogRouter.get("/", authMiddleware, blogController.getAllpost);
blogRouter.post("/", authMiddleware, authorizeRoles("admin", "user"), blogController.createPost);
blogRouter.put("/:id", authMiddleware, authorizeRoles("admin", "user"), blogController.updatePost);
blogRouter.delete("/:id", authMiddleware, authorizeRoles("admin", "user"), blogController.deletePost);


module.exports = blogRouter;
