import { transporter, renderTemplate } from "../config/nodemailer";
import { Request, Response, NextFunction } from "express";
import Order from "../model/Order";



interface DocumentData {
    [field: string]: any;
}

type Order = {
    mail: string | null | undefined,
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    state: string,
    pincode: string,
    phone: string,
    pgMethod: string,
    cart: DocumentData[],
    amount: number
}



export const createOrder = async (req:Request,res: Response,next:NextFunction) => {
    try{
        const {email, orderAmount, firstName, lastName, order} = req.body;
        const info = await transporter.sendMail({
            from: 'Ecommerce Application <asb.globaliasoft@gmail.com>',
            to: email,
            subject: 'Order confirmed!',
            html: renderTemplate({orderAmount, firstName, lastName}, '/mail1.ejs')
        });

        const newOrder = new Order(order);
        await newOrder.save();

    }catch(err){
        next(err);
    }

    return res.status(200).send("You are connected");
}