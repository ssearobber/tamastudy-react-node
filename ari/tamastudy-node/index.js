const express = require('express'); //old
// import express from 'express'; //new 쓰고 싶음 바벨 넣어줄것
const morgan = require('morgan');
require('dotenv').config(); //.env를 자동으로 찾아서 불러주는 라이브러리
require('colors');
const router = require('./routes');
const errorResponse = require('./middlewares/errorResponse');

const app = express();
const PORT = process.env.PORT;
const MASTER = process.env.NAME;

app.use(morgan('dev'));
app.use((req, res, next) => {
  // if (req.user === null) {
  //   console.log(req.user);
  //   return res.json({ success: true, data: [] });
  // }
  // console.log(req);
  console.log('middleware!!');
  next();
});

app.use(router);
app.use(errorResponse); //에러는 마지막에!! 흐름상!!
app.listen(PORT, () => console.log(`${MASTER}!! ${PORT}번 포트로 연결 되었습니다.`.bgMagenta));

// const express = require('express');
// const morgan = require('morgan');
// require('dotenv').config();

// const app = express();

// // Dev logging middleware
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }

// app.get('/', (req, res) => {
//   res.json({ success: true, message: '접속완료' });
// });

// const server = app.listen(process.env.PORT, () =>
//   console.log(`${process.env.PORT}번으로 Node API 가동 중입니다. `),
// );

// // Handle unhandled promise rejections 처리되지 않은 약속 거부 처리
// process.on('unhandledRejection', (err, promise) => {
//   console.log(`Error: ${err.message}`.red);
//   // Close server & exit process
//   server.close(() => process.exit(1));
// });
