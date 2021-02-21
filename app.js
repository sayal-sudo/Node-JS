
const express = require('express');
const app = express();
const morgan = require('morgan');

const tourRouter = require('./routes/toursRouter');
const userRouter = require('./routes/userRouter');

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(express.json());

app.use((request,response,next)=>{
    console.log("hello from the middleware");
    next();

});

app.use((request,response,next)=>{
    request.requestTimey = new Date().toUTCString();
    next();
});




app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/users',userRouter);

module.exports = app;
