var fs = require('fs'),
	path = process.argv[2];

if (path) {
	var lines = fs.readFileSync(path).toString().split("\n");
	console.log(lines.length-1);
};