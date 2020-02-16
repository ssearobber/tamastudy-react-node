const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    const post = [
        {
            id: 1,
            title: 'node',
        },
        {
            id: 2,
            title: 'ruby',
        },
    ]
    res.json({ success: true, data: post })
})

module.exports = router
