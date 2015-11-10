var _ = require('underscore');

var a = {
	foo: 'foo'
};

var b = {
	moo: 'moo'
};

var c = _.extend(a,b);
console.log(c);