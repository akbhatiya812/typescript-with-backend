import mongoose from "mongoose";

const Schema = mongoose.Schema;


const productSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    desc: {
        type:String,
        required: true,
    },
    img:{
        type:String,
        required:true,
    },
    mrp:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,    
        required:true,
    },
    qty:{
        type:Number,
        required:true,
    },
    sku:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true,
    }
},{
    timestamps:true
});


const Product = mongoose.model('Product', productSchema);
export default Product;