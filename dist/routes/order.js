"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderController_1 = require("../controllers/orderController");
const orderRoutes = (0, express_1.Router)();
orderRoutes.post('/createOrder', orderController_1.createOrder);
exports.default = orderRoutes;
