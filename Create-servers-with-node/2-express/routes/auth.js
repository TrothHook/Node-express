const express = require("express");

const router = express.Router();

// cut and paste from app.js

router.post("/", (req, res) => {
    const {name} = req.body;
    if(name) {
        return res.status(200).send(`Welcome ${name}`);
    }

    res.status(401).send(`Please provide valid credentials`);
});

module.exports = router