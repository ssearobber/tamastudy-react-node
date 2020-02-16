const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.json({ success: true, message: 'test page입니다.' })
})

module.exports = router
