"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSpecificCommentData = exports.updatetSpecificCommentData = exports.editSpecificCommentData = exports.getSpecificCommentData = exports.postComment = exports.createNewComment = exports.getAllCommentData = void 0;
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
    res.redirect('/comments');
};
exports.postComment = postComment;
const getSpecificCommentData = (req, res, next) => {
    const { id } = req.params;
    const comment = data_1.comments.find((comment) => comment.id === id);
    res.render('show', { comment });
};
exports.getSpecificCommentData = getSpecificCommentData;
const editSpecificCommentData = (req, res, next) => {
    const { id } = req.params;
    const comment = data_1.comments.find((comment) => comment.id === id);
    res.render('edit', { comment });
};
exports.editSpecificCommentData = editSpecificCommentData;
const updatetSpecificCommentData = (req, res, next) => {
    const { id } = req.params;
    const foundComment = data_1.comments.find((comment) => comment.id === id);
    //get new text from req.body
    const newCommentText = req.body.comment;
    //update the comment with the data from req.body:
    foundComment.comment = newCommentText;
    //redirect back to all comments
    res.redirect('/comments');
};
exports.updatetSpecificCommentData = updatetSpecificCommentData;
const deleteSpecificCommentData = (req, res, next) => {
    const { id } = req.params;
    const commentIndex = data_1.comments.findIndex((comment) => comment.id === id);
    data_1.comments.splice(commentIndex, 1);
    res.redirect('/comments');
};
exports.deleteSpecificCommentData = deleteSpecificCommentData;
