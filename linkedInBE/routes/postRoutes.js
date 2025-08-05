import express from 'express';
import auth from '../middleware/authMiddleware.js';
import { createPost, getAllPosts, getUserPosts } from '../controllers/postController.js';

const router = express.Router();

router.post('/', auth, createPost);
router.get('/', getAllPosts);
router.get('/:userId', getUserPosts);

export default router;