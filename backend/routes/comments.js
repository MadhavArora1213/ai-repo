const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

// Route to get all comments
router.get('/', commentsController.getAllComments);

// Route to create a new comment
router.post('/', commentsController.createComment);

// Route to get a single comment by ID
router.get('/:id', commentsController.getCommentById);

// Route to update a comment by ID
router.put('/:id', commentsController.updateComment);

// Route to delete a comment by ID
router.delete('/:id', commentsController.deleteComment);

module.exports = router;