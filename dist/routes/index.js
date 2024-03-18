"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_1 = __importDefault(require("./order"));
const product_1 = __importDefault(require("./product"));
const router = express_1.default.Router();
router.use('/order', order_1.default);
router.use('/product', product_1.default);
exports.default = router;
