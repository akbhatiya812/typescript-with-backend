import { transporter, renderTemplate } from "../config/nodemailer";
import { Request, Response, NextFunction } from "express";
import Order from "../model/Order";



interface DocumentData {
    [field: string]: any;
}

type Order = {
    email: string | null | undefined,
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

        const newOrder = new Order({...order,cart:order.cart});
        await newOrder.save();

    }catch(err){
        next(err);
    }

    return res.status(200).send("You are connected");
}

export const getOrders = async (req:Request, res:Response, next: NextFunction) => {
    try{

        const {email} = req.body;

        const orders = await Order.find({mail:email});
        return res.status(200).json({orders:orders,message:"Orders fetched successfully!"})

    }catch(err){
        next(err);
    }
}