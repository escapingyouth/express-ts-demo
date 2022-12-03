import { Router } from 'express';
import { getUsers } from '../controllers/getUser';

const router = Router();

router.get('/users', getUsers);
export default router;
