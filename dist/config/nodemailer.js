"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderTemplate = exports.transporter = void 0;
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const password = process.env.NODEMAILER_PASS;
const path_1 = __importDefault(require("path"));
exports.transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "asb.globaliasoft@gmail.com",
        pass: "gzszktuwyalqobza",
    },
});
const renderTemplate = (data, relativePath) => {
    let mailHTML;
    ejs.renderFile(path_1.default.join(__dirname, '../templates', relativePath), data, function (err, templete) {
        if (err) {
            console.log('Error in rendoring template', err);
            return;
        }
        mailHTML = templete;
    });
    return mailHTML;
};
exports.renderTemplate = renderTemplate;
