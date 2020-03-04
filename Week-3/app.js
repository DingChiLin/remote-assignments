const cookieParser = require('cookie-parser')
const express = require('express')
const path = require('path');
const app = express()
const port = 3000

function isInteger(value) {
    return /^\d+$/.test(value);
}

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/view/index.html'));
});

app.get('/getData', (req, res) => {
    const param = req.query.number;
    if (!param) {
        res.send("Lack of Parameter");
    } else if (!isInteger(param)) {
        res.send("Wrong Parameter");
    } else {
        const number = parseInt(param);
        const sum = (number + 1) * number / 2;
        res.send(String(sum));
    }
})

app.get('/myName', (req, res) => {
    const name = req.cookies.name;
    if (!name) {
        res.sendFile(path.join(__dirname+'/view/myName.html'));
    } else {
        res.send(name);
    }
});

app.get('/trackName', (req, res) => {
    const name = req.query.name;
    res.cookie('name', name);
    res.redirect(302, 'myName');
});

app.listen(port, () => console.log(`Exampl app listening on port ${port}!`));