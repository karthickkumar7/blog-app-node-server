const router = require('express').Router();
const login = require('../controller/auth/login');
const register = require('../controller/auth/register');

router.post('/login', login);

router.post('/register', register);

module.exports = router;
