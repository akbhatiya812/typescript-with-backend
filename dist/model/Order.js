"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const orderSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    pgMethod: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    totalItems: {
        type: Number,
        required: true
    },
    cart: [Schema.Types.Mixed]
}, {
    timestamps: true
});
const Order = mongoose_1.default.model('Order', orderSchema);
exports.default = Order;
