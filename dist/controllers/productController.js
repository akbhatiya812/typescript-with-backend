"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductTypes = exports.getProductById = exports.getProducts = void 0;
const Product_1 = __importDefault(require("../model/Product"));
const getProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collection = req.params.collection || "";
        if (!collection) {
            const products = yield Product_1.default.find();
            return res.status(200).json({ products: products, message: "All products loaded!" });
        }
        else {
            const types = yield Product_1.default.distinct('type');
            if (!types.includes(collection)) {
                const error = new Error('Collection does not exists');
                throw error;
            }
            const products = yield Product_1.default.find({ type: collection });
            return res.status(200).json({ products: products, message: "All products loaded!" });
        }
    }
    catch (err) {
        next(err);
    }
});
exports.getProducts = getProducts;
const getProductById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const product = yield Product_1.default.findById(productId);
        return res.status(200).json({ message: "Product Fetched Successfully!", product: product });
    }
    catch (err) {
        next(err);
    }
});
exports.getProductById = getProductById;
const getProductTypes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const types = yield Product_1.default.distinct('type');
        return res.status(200).json({ types: types });
    }
    catch (err) {
        next(err);
    }
});
exports.getProductTypes = getProductTypes;
