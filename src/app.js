const express = require('express')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes/index');

const app = express();


app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/',indexRouter);


// catch 404 
app.use((req, res, next) => {
    res.status(404).json({
        url: req.originalUrl,
        msg: "Sorry, that page does not exist",
      })
  });
  
// error handler
  
app.use((err, req, res, next) => {
    const status = err.statusCode || 500;
    const message = err.message || err;
    res.status(status).json({message});
  });


module.exports = app