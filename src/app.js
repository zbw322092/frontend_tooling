require('./css/style.css');
var yell = require('./js/alert.js');
var hashChange = require('hash-change');

// yell('world');
hashChange.on('change', function(hash) {
	yell(hash);
}); 