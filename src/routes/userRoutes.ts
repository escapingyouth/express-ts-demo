import { Router } from 'express';
import {
	getAllCommentData,
	createNewComment,
	postComment,
	getSpecificCommentData
} from '../controllers/userController';

const router = Router();

router.get('/comments', getAllCommentData);

router.get('/comments/new', createNewComment);

router.post('/comments', postComment);
router.get('/comments/:id', getSpecificCommentData);
export default router;
