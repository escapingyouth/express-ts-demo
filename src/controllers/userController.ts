import { RequestHandler } from 'express';
import { comments } from '../models/data';
import { v4 as uuidv4 } from 'uuid';

export const getAllCommentData: RequestHandler = (req, res, next) => {
	res.render('index', { comments });
};
export const createNewComment: RequestHandler = (req, res, next) => {
	res.render('new');
};
export const postComment: RequestHandler = (req, res, next) => {
	console.log(req.body);
	comments.push({ id: uuidv4(), ...req.body });
	res.redirect('/comments');
};
export const getSpecificCommentData: RequestHandler = (req, res, next) => {
	const { id } = req.params;
	const comment = comments.find((comment) => comment.id === id);
	res.render('show', { comment });
};
