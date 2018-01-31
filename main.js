var DefineMap = require("can-define/map/map");
var stache = require("can-stache");

var data = new DefineMap({ message: "Hello World" });
var template = stache(require("./main.stache"));

document.body.appendChild(template(data));
