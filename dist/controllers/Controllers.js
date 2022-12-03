"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpecificCommentData = exports.postComment = exports.createNewComment = exports.getAllCommentData = void 0;
const data_1 = require("../models/data");
const uuid_1 = require("uuid");
const getAllCommentData = (req, res, next) => {
    res.render('index', { comments: data_1.comments });
};
exports.getAllCommentData = getAllCommentData;
const createNewComment = (req, res, next) => {
    res.render('new');
};
exports.createNewComment = createNewComment;
const postComment = (req, res, next) => {
    console.log(req.body);
    data_1.comments.push(Object.assign({ id: (0, uuid_1.v4)() }, req.body));
    res.redirect('/users');
};
exports.postComment = postComment;
const getSpecificCommentData = (req, res, next) => {
    const { id } = req.params;
    const commentId = data_1.comments.find((comment) => comment.id === id);
};
exports.getSpecificCommentData = getSpecificCommentData;
