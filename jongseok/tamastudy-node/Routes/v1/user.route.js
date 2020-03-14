const express = require('express');
const { get } = require('../../controllers/v1/user.controller');

const router = express.Router();

router.route('/').get(get);

export default router;
