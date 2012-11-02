var express = require('express'),
    app = express.createServer(),
	ejs = require('ejs'),
	url = require("url"),
	fs = require('fs'),
	sys = require('sys');
    
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/apirestructure', function(req, res) {
    res.render('index', {
    	layout: false,
		data: {}
	});
});

app.get('/images/:image', function(req, res) {
    fs.readFile(__dirname + '/images/' + req.params.image, function (err, data) {
        if (err) {
            throw err;
        }
        res.send(data);
    });
});

app.listen(8081);
console.log('Started up successfully.');