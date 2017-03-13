/**
 * Created by Yayat on 11/29/16.
 */
var cfg = require('./config/config')
var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var engine = require('consolidate');

var path = require('path')

app.engine('html', engine.hogan);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/find', function (req, res) {

	console.log('find')
	var x = req.query.x
	var y = req.query.y
	var xx = []
	var yy = []

	for(i=1; i<=x; i++){
		for (j=1;j<=y;j++){
			if(i==x){
				if(j==y){
					res.send([--x, --y])
					console.log(--x, --y)
				}
			}

		}
	}



})


app.listen(3000, 'localhost', function () {
	console.log('running')
})
