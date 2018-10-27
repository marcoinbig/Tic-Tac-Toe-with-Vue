/**
 * Mailer service using nodemailer
 */
'use strict';

//Load configuration file, first read an env file
const dotenv = require('dotenv').config({path: __dirname + '/.env' });
const Email = require('email-templates');
const nodemailer = require('nodemailer');

//Be ready to export


//Set up the mail transporter, default it uses google,
//Uncomment the lines to use it as test
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER,
        pass: process.env.PSW
    }
});

const Mailer = module.exports = new Email({
    message: {
        from: process.env.SENDER
    },

    transport : transporter,

    views: {
        root: __dirname + '/templates'
    },

    htmlToText: false
});
