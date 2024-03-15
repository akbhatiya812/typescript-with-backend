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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = void 0;
const nodemailer_1 = require("../config/nodemailer");
const createOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, orderAmount, firstName, lastName } = req.body;
        const info = yield nodemailer_1.transporter.sendMail({
            from: 'Ecommerce Application <asb.globaliasoft@gmail.com>',
            to: email,
            subject: 'Order confirmed!',
            html: (0, nodemailer_1.renderTemplate)({ orderAmount, firstName, lastName }, '/mail1.ejs')
        });
    }
    catch (err) {
        next(err);
    }
    return res.status(200).send("You are connected");
});
exports.createOrder = createOrder;
