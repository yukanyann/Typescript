"use strict";
var express = ;
{
    Request, Response, NextFunction;
}
from;
'express';
const app = express();
app.use(express.json());
app.use('/', (req, res, next) => {
    console.log('hello!');
    throw new Error();
    next();
});
app.post('/', (req, res, next) => {
    console.log(req.body);
    res.send('<h1> get ${req/body.message}</h1>');
});
app.use((err, req, next) => {
    next();
});
app.listen(3000);
