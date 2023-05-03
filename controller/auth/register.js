const bcrypt = require('bcryptjs');

const register = (req, res) => {
    const { username, email, password } = req.body;
    return res.json({ msg: 'success' });
};

module.exports = register;
