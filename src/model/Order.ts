import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    firstName: String,
    lastName:String,
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    pgMethod: {
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
});

const Order = mongoose.model('Order', orderSchema);
export default Order;