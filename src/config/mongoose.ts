import mongoose from 'mongoose';

const connectDb = async ():Promise<void>=> {
    try{   
        await mongoose.connect(process.env.MONGOOSE_URL || '');
        console.log("mongodb Connected");
    }catch(err){
        console.log("Error connecting to mongoDB");
    }
};

export default connectDb;