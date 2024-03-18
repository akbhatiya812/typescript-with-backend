import { Request, Response, NextFunction } from "express";
import Product from "../model/Product";



export const getProducts = async (req:Request, res: Response, next: NextFunction) => {
    try{
        const collection = req.params.collection || "";
        if(!collection){
            const products = await Product.find();
            return res.status(200).json({products:products, message:"All products loaded!"});
        }else{
            const types = await Product.distinct('type');
            if(!types.includes(collection)){
                const error = new Error('Collection does not exists');
                throw error;
            }
            const products = await Product.find({type:collection});
            return res.status(200).json({products:products, message:"All products loaded!"});
        }
    }catch(err){
        next(err);
    }
}

export const getProductById = async (req:Request, res: Response, next: NextFunction) => {
    try{
        const productId = req.params.productId;
        const product = await Product.findById(productId);
        return res.status(200).json({message:"Product Fetched Successfully!", product: product})
    }catch(err){
        next(err);
    }
}

export const getProductTypes = async (req:Request,res:Response,next:NextFunction) => {
    try{
        const types = await Product.distinct('type');
        return res.status(200).json({types: types});
    }catch(err){
        next(err);
    }
}