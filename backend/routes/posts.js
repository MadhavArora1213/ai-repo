const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

// Route to get all posts
router.get('/', postsController.getAllPosts);

// Route to create a new post
router.post('/', postsController.createPost);

// Route to get a single post by ID
router.get('/:id', postsController.getPostById);

// Route to update a post by ID
router.put('/:id', postsController.updatePost);

// Route to delete a post by ID
router.delete('/:id', postsController.deletePost);

module.exports = router;