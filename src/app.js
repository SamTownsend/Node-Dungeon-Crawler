var express = require('express');
var app = express();
var port = 3000;

app.get('/', log, hello);

function log(req, res, next) {
    console.log('Hello World!')
    next();
}

function hello(req, res, next) {
    res.write('Hello\n' + 'World');
    res.end();
    next();
}

app.listen(port, function(err, res) {
    if (err) {
        console.log('server error');
    }
    else {
        console.log('server started listening on port 3000')
    }
});
