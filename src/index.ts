import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cron from 'node-cron';
import sendEmails from './EmailService/EmailService';

dotenv.config();
const app = express();




const sendScheduledEmails = () => {

    cron.schedule('*/5 * * * *', async() => {
        console.log('james')
      });
}

sendScheduledEmails();

app.use((err:Error,req:Request,res:Response)=>{


    res.json({

        error:err
    })
})


app.listen(8000,() =>{


    console.log("running on port 8000")
})