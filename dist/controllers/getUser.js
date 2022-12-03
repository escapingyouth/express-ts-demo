"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUsers = void 0;
const data_1 = require("../models/data");
const getUsers = (req, res, next) => {
    res.render('show', { users: data_1.users });
};
exports.getUsers = getUsers;
const createUser = (req, res, next) => {
    // res.render('new', { users });
};
exports.createUser = createUser;
