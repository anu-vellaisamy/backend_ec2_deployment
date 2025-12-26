const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const logger = require('./config/logger')

const userRouter = require('./routes/userRoutes')
const adminRouter = require('./routes/adminRoutes')

const app = express();


app.use(helmet());
app.use(cors());
app.use(compression())
app.use(
  morgan('combined', {
    stream: {
      write: (message) => {
        logger.http(message.trim())
      }
    }
  })
)
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.use('/user', userRouter);
app.use('/admin', adminRouter)


module.exports = app;
