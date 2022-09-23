module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is this component's name?",
      },
      {
        type: "input",
        name: "element",
        message: "HTML element (div is default)",
        default: "div",
      },
    ],
    actions: [
      {
        type: "add",
        path: "./components/{{name}}/index.tsx",
        templateFile: "templates/component.tsx.hbs",
      },
      {
        type: "add",
        path: "./components/{{name}}/{{name}}.module.scss",
        templateFile: "templates/component.module.scss.hbs",
      },
    ],
  });
};
