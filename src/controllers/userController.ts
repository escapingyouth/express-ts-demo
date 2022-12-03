import { RequestHandler } from 'express';
import { users } from '../models/data';
import { v4 as uuidv4 } from 'uuid';

export const getUsers: RequestHandler = (req, res, next) => {
	res.render('show', { users });
};
export const createUser: RequestHandler = (req, res, next) => {
	res.render('new');
};
export const addUser: RequestHandler = (req, res, next) => {
	console.log(req.body);
	users.push({ id: uuidv4(), ...req.body });
	res.redirect('/users');
};
