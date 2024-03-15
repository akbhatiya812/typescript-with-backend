import express, { Express, Request, Response, NextFunction } from "express";

import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./routes/index";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

interface CustomError extends Error{
  statusCode? : number;
  data?: any;
}

app.use(bodyParser.json());
app.set('view engine','ejs');
app.set('views','./templates');

app.use((req:Request,res:Response,next:NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

app.get('/', (req:Request,res:Response) => {
  res.status(200).send("You are connected");
});

app.use('/api',router);

app.use((error: CustomError,req:Request ,res:Response) => {
  // console.log(error);
  const statusCode = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(statusCode).json({message: message, data:data});
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});






