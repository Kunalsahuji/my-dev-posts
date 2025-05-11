const express = require('express');
const upload = require('../middleware/uploadMiddleware');
const router = express.Router();

router.post('/', upload.single('file'), (req, res) => {
    res.json({ filename: req.file.filename });
});

module.exports = router;