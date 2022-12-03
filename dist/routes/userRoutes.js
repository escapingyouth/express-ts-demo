"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
// INDEX - renders multiple comments
router.get('/comments', userController_1.getAllCommentData);
// NEW - renders a form
router.get('/comments/new', userController_1.createNewComment);
// CREATE - creates a new comment
router.post('/comments', userController_1.postComment);
// SHOW - details about one particular comment
router.get('/comments/:id', userController_1.getSpecificCommentData);
// EDIT - renders a form to edit a comment
router.get('/comments/:id/edit', userController_1.editSpecificCommentData);
// UPDATE - updates a particular comment
router.patch('/comments/:id', userController_1.updatetSpecificCommentData);
// DELETE/DESTROY- removes a single comment
router.delete('/comments/:id', userController_1.deleteSpecificCommentData);
exports.default = router;
