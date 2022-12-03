import { Router } from 'express';
import {
	getAllCommentData,
	createNewComment,
	postComment,
	getSpecificCommentData,
	editSpecificCommentData,
	updatetSpecificCommentData,
	deleteSpecificCommentData
} from '../controllers/userController';

const router = Router();

// INDEX - renders multiple comments
router.get('/comments', getAllCommentData);

// NEW - renders a form
router.get('/comments/new', createNewComment);

// CREATE - creates a new comment
router.post('/comments', postComment);

// SHOW - details about one particular comment
router.get('/comments/:id', getSpecificCommentData);

// EDIT - renders a form to edit a comment
router.get('/comments/:id/edit', editSpecificCommentData);

// UPDATE - updates a particular comment
router.patch('/comments/:id', updatetSpecificCommentData);

// DELETE/DESTROY- removes a single comment
router.delete('/comments/:id', deleteSpecificCommentData);
export default router;
