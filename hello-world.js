import Component from "can-component";
import stache from "can-stache";

Component.extend({
  tag: "hello-world",
  view: `{{#if visible}}{{message}}{{else}}Click me{{/if}}`,
  ViewModel: {
    visible: {
      default: false
    },
    message: {
      default: "Hello There!"
    },
    connectedCallback(element) {
      this.listenTo(element, "click", () => {
        this.visible = !this.visible;
      });
    }
  }
});
