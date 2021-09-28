const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const mockUserData = [
    {name: 'Mark'},
    {name: 'Jill'}
]

app.get('/users', (req, res) => {
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    });
});

app.post('/login', (req, res) => {
    // Typically passwords are encrypted using something like bcrypt before sending to database
    const username = req.body.username;
    const password = req.body.password;

    // This should come from the database
    const mockUsername = "billyTheKid";
    const mockPassword = "superSecret";

    if (username === mockUsername && password === mockPassword) {
        // In practice, use JSON web token sign method here to make an encrypted token
        res.json({
            success: true,
            message: 'password and username match',
            toke: 'encrypted token goes here'
        });
    } else {
        res.json({
            success: false,
            message: 'password and username do not match'
        });
    }
});


app.listen(8000, () => {
    console.log('server is running');
});
