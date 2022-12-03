import { Router } from 'express';
import { getUsers, createUser } from '../controllers/getUser';

const router = Router();

router.get('/users', getUsers);

router.get('/users/new', createUser);
export default router;
