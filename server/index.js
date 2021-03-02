var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');
const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)


var transport = {
    host: 'outlook.office365.com', // Don’t forget to replace with the SMTP host of your provider
    port: 587,
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email=req.body.email
    var message = req.body.message
    var content = `\n name: ${name}\n email: ${email} \n message: ${message} `
    console.log(email)
    var mail = {
        from: name,
        to: 'edphiljohn@outlook.com',  // Change to email address that you want to receive messages on
        subject: 'New Message from Website',
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
            console.log("error")
        } else {
            res.json({
                status: 'success'
            })
            console.log("sucess")
        }
    })
})


app.listen(3002)