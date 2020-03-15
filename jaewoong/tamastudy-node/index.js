//import express from 'express';
const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const router = require('./routes/index');
const errorResponse = require('./Middlewares/errorResponse');
const colors = require('colors');
const mongoose = require('mongoose');

const helmet = require('helmet');
const cors = require('cors');

const app = express();
const PORT = 4000;
const MASTER = 'JONGSEOK';
const MONGO_URI =
  'mongodb+srv://dreamsctv:8998@cluster0-dmudo.gcp.mongodb.net/test?retryWrites=true&w=majority';
mongoose
  .connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('DB접속 완료'.bgBlue.white))
  .catch(error => {
    console.log(error.bgRed.white);
    exit(1);
  });

app.use(helmet());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(morgan('dev'));
//! Routes
app.use(router);
//! error response middleware
app.use(errorResponse);
app.listen(PORT, () => {
  console.log(`${MASTER}의 서버에 접속했습니다. ${PORT}번 포트로 연결 되었습니다.`.bgWhite);
});
