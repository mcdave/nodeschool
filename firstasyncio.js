var fs = require('fs'),
	file = process.argv[2];

if (file) {
	fs.readFile(file, function (err,data) {
		var lines = data.toString().split("\n").length - 1;
		console.log(lines);
	})
};