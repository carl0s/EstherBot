'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.render('index', {
        appToken: process.env.SMOOCH_APP_TOKEN
    });
});

module.exports = app;
express.Router().post('/smooch/webhooks', (req, res) => {
    const smoochPayload = req.body.postbacks[0].action.payload;
    const userId = req.body.appUser._id;

    if (smoochPayload === 'here_for_the_bot') {
        smoochApi.conversations.sendMessage(userId, {
            text: 'Learn more on our implementation and why, here: http://nois3.it/blog',
            role: 'appMaker'
        });
    }

    if (smoochPayload === 'learn_more_about_nois3') {
        smoochApi.conversations.sendMessage(userId, {
            text: 'Learn more about nois3 here: http://nois3.it/about',
            role: 'appMaker'
        });
    }


    if (smoochPayload === 'wud') {
        smoochApi.conversations.sendMessage(userId, {
            text: 'Learn more about World Usability Day Rome 2016: http://wudrome.it',
            role: 'appMaker'
        });
    }

    res.end();
});