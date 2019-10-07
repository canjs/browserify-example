import ObservableObject from "can-observable-object";
import stache from "can-stache";
import rawTemplate from "./main.stache";

import "./hello-world";

const data = new ObservableObject({ message: "Hello World" });
const template = stache(rawTemplate);

document.body.appendChild(template(data));
