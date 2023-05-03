const express = require('express');
const cors = require('cors');
const { connect } = require('mongoose');
const authRouter = require('./routes/auth');

const app = express();
app.use(express.json());
app.use(cors());

// ROUTES
app.use('/auth', authRouter);

app.all('/*', (req, res) => {
    return res.send('<h1>404 Not Found!</h1>');
});

connect('mongodb://localhost:27017/blog-app').then(() =>
    app.listen(5000, () => console.log('server started!'))
);
