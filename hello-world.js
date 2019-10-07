import StacheElement from "can-stache-element";
import stache from "can-stache";

class HelloWorld extends StacheElement {
  static view = `{{#if visible}}{{message}}{{else}}Click me{{/if}}`;

  static props = {
    visible: false,
    message: "Hello There!"
  };

  connected() {
    this.listenTo(this, "click", () => {
      this.visible = !this.visible;
    });
  }
}

customElements.define("hello-world", HelloWorld);
