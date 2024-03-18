"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const index_1 = __importDefault(require("./routes/index"));
const mongoose_1 = __importDefault(require("./config/mongoose"));
dotenv_1.default.config();
(0, mongoose_1.default)();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.use(body_parser_1.default.json());
app.set('view engine', 'ejs');
app.set('views', './templates');
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.get('/', (req, res) => {
    res.status(200).send("You are connected");
});
app.use('/api', index_1.default);
app.use((error, req, res) => {
    // console.log(error);
    const statusCode = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(statusCode).json({ message: message, data: data });
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
