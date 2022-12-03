"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const data_1 = require("../models/data");
const getUsers = (req, res, next) => {
    res.render('show', { users: data_1.users });
};
exports.getUsers = getUsers;
