import { Router } from 'express';
import { getUsers, createUser, addUser } from '../controllers/userController';

const router = Router();

router.get('/users', getUsers);

router.get('/users/new', createUser);
router.post('/users', addUser);
export default router;
