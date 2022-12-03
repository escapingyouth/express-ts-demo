"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const method_override_1 = __importDefault(require("method-override"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
// To parse incoming JSON in POST request body:
app.use(body_parser_1.default.json());
//To parse form data in POST request body:
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, method_override_1.default)('_method'));
// Views folder and ejs setup:
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '/views'));
app.use(userRoutes_1.default);
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
