"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getUser_1 = require("../controllers/getUser");
const router = (0, express_1.Router)();
router.get('/users', getUser_1.getUsers);
exports.default = router;
