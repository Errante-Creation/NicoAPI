const express = require('express');
const router = express.Router();

module.exports = (db) => {
    const authController = require('../controllers/authController')(db);

    router.get('/', authController.welcome);
    router.post('/login', authController.login);

    return router;
}