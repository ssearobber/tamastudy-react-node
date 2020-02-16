<<<<<<< HEAD
const express = require('express');
const morgan = require('morgan');
const router = require('./routes/index.js');
const errorResponse = require('./middlewares/errorResponse.js');
const app = express();
const colors = require('colors');
require('dotenv').config();

const port = process.env.PORT;

app.use(morgan('dev'));

console.log(process.env.NAME);

app.use(router);

app.use(errorResponse);

app.listen(port, () => {
  console.log(`${port} MASTER 3000번 포트로 연결 되었습니다.`.bgMagenta.green);
});
// import express from 'express';

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
=======
const express = require('express')
require('dotenv').config()
const morgan = require('morgan')
const router = require('./routes/index')
const errorResponse = require('./middlewares/errorResponse')
const colors = require('colors')
const app = express()

//! env
const PORT = process.env.PORT || 5000
const MASTER = process.env.NAME || 'TAMASTUDY'

//! log middleware
app.use(morgan('dev'))

//! Route
app.use(router)

//! error response middleware
app.use(errorResponse)

//! running backend server
app.listen(PORT, () => {
    console.log(`${MASTER}의 서버에 접속하셨습니다.${PORT}번 포트로 연결 되었습니다.`.rainbow)
})
>>>>>>> 499864177e8793580944b8f34fdbe6200e872b10
