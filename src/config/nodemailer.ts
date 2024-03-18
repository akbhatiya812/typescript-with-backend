const nodemailer = require('nodemailer');
const ejs = require('ejs');
const password = process.env.NODEMAILER_PASS
import path from "path";

export const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user: "asb.globaliasoft@gmail.com",
      pass: "gzszktuwyalqobza",
    },
})

export const  renderTemplate = (data:any,relativePath:string) => {
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname,'../templates',relativePath),
        data,
        function(err:any,templete:any){
            if(err){
                console.log('Error in rendoring template',err);
                return;
            }

            mailHTML = templete;
        }
    )
    return mailHTML;
}

