'use strict';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import models from './models';

process.env.PORT = process.env.PORT || 3485;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/static', express.static('static'));

app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'views/index.html'));
});

let initServer = function() {
    const server = app.listen(process.env.PORT, '0.0.0.0', (err) => {
        if (err)
            console.log(err);
        console.log('server started at port 3485');
    });
};

models.sequelize.sync().then(initServer);
