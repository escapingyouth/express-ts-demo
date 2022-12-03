"use strict";
// fake user database
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const uuid_1 = require("uuid");
exports.users = [
    {
        id: (0, uuid_1.v4)(),
        username: 'Michael',
        comment: 'I like to go fishing on Tuesdays'
    }
];
