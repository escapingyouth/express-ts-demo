"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getUser_1 = require("../controllers/getUser");
const router = (0, express_1.Router)();
router.get('/users', getUser_1.getUsers);
router.get('/users/new', getUser_1.createUser);
exports.default = router;
