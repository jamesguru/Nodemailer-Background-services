import ejs from 'ejs';
import dotenv from 'dotenv'
import sendMail from '../Helpers/SendEmail';

dotenv.config()

const sendEmails = async ()=> {


    ejs.renderFile('templates/registration.ejs',{name:'James',task:"Work on the backend"}, async (err,data) =>{


        let messageoption = {

            from:process.env.EMAIL,
            to:'jameskagunga15@gmail.com',
            subject:'Here is your task',
            html:data,
            attachment:[{

                filename:'email.txt',
                content: 'Report everyday'
            }]
        }


        try {
            
            sendMail(messageoption);

        } catch (error) {

            console.log(err)
            
        }


    }) 

}


export default sendEmails;