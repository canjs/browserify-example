import DefineMap from "can-define/map/map";
import stache from "can-stache";
import rawTemplate from "./main.stache";

import "./hello-world";

var data = new DefineMap({ message: "Hello World" });

var template = stache(rawTemplate);

document.body.appendChild(template(data));
