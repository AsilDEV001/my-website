import express from 'express';
import bp from 'body-parser';
import serverless from 'serverless-http';
import path from 'path';

const website = express();
const __dirname = path.resolve();
// const port = 8000;

website.use(express.static('public'));

website.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
website.get('/jizzakh', (req, res) => {
    res.sendFile(__dirname + '/public/jizzakh.html');
});
website.get('/basketball', (req, res) => {
    res.sendFile(__dirname + '/public/basketball.html');
});

export const handler = serverless(website);