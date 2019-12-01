const bodyParser = require('body-parser');
const express = require('express')
const mysql = require('mysql');
const path = require('path');
const app = express()
const port = 3000

const con = mysql.createConnection({
    host: "localhost",
    user: "arthurlin",
    password: "1234",
    database: 'assignment'
})

con.connect(function(err) {
    if (err) throw err;
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/view/index.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname+'/view/home.html'));
});

app.get('/member', (req, res) => {
    res.send(`Welcome ${req.query.email} :)`);
});

const signReturn = (res, success, reason) => {
    if (success) {
        res.json({success, location:'/member'});
    } else {
        res.json({success, reason});
    }
}

app.get('/react', (req, res) => {
    res.sendFile(path.join(__dirname+'/view/react_practice.html'));
});

app.post('/signUp', (req, res) => {
    //TODO: Could check input format: 1. empty 2. allowed characters
    const {email, password} = req.body;
    const sql = `INSERT INTO user (email, password) VALUES ("${email}", "${password}")`;
    con.connect(function(err) {
        con.query(sql, function (err, result) {
            if (!err) {
                return signReturn(res, true);
            } else {
                return signReturn(res, false, "Email has been used");
            }
        });
    });
});

app.post('/signIn', (req, res) => {
    const {email, password} = req.body;
    const sql = `
        SELECT *
        FROM user WHERE email="${email}" AND password="${password}"
        LIMIT 1
    `;
    con.connect(function(err) {
        con.query(sql, function (err, result) {
            if (!err && result.length) {
                return signReturn(res, true);
            } else {
                return signReturn(res, false, "Email or password is wrong");
            }
        });
    });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));