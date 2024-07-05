const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 4000;

// Use cors middleware
app.use(cors());
// Middleware to parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file on the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve the contact-us.html file on the /contact route
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact-us.html'));
});

app.post('/contact', (req, res) => {
    const { work, 'first-name': firstName, 'last-name': lastName, email, query, 'agree-terms': agreeTerms } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'andyjalex@gmail.com',
            pass: 'ckxz tily wutj njzf'
        }
    });

    const mailOptions = {
        from: email,
        to: 'andy@web-art.io',
        subject: 'New Contact Form Submission',
        text: `Type of Work: ${work}\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nQuery: ${query}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).json({ status: 'error', message: 'Error sending message' });
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).json({ status: 'success', message: 'Message sent successfully' });
      }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
