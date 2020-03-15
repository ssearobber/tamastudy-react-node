// library file require
const express = require('express');
require('dotenv').config();
const colors = require('colors');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const createError = require('http-errors');
// local file require
const connectDB = require('./database/connectDB');
const router = require('./routes');
const v1Route = require('./routes/v1');
const errorResponse = require('./middleware/errorResponse');

// 1. database 연결
connectDB();

const app = express();

// 2. middleware
app.use(helmet());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
  next(createError(404));
});

// 3. Routes
app.use(router);
app.use('/v1', v1Route);

// 4. error response middleware
app.use(errorResponse);

const PORT = 4000;
const MASTER = 'JONGSEOK';

app.listen(PORT, () => {
  console.log(`${MASTER}의 서버에 접속했습니다. ${PORT}번 포트로 연결 되었습니다.`.bgWhite);
});
