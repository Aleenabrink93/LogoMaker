const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shape");
const Svg = require("./lib/svg");
var fs = require('fs');
inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "What are 3 letters you want on your logo?",
    },
    {
        type: "input",
        name: "textColor",
        message: "What color do you want your text to be(color keyword or HEX number)?",
      },
    {
      type: "input",
      name: "shapeColor",
      message:
        "What color do you want your logo to be (color keyword or HEX number)?",
    },
    {
      type: "list",
      name: "shape",
      message: "What shape do you want your logo to be?",
      choices: ["Circle", "Triangle", "Square"],
    },
  ])

  .then(({ text, shapeColor, shape, textColor}) => {
    let createdShape;

    switch (shape) {
      case "Circle":
        createdShape = new Circle();
        break;
      case "Triangle":
        createdShape = new Triangle();
        break;
      case "Square":
        createdShape = new Square();
        break;
    }
  
    createdShape.setColor(shapeColor);
    const createdSVG = new Svg()
    createdSVG.setText(text,textColor);
    createdSVG.setShape(createdShape)
    console.log(createdSVG)
    console.log(createdSVG.render())
    fs.writeFile("logo.svg", createdSVG.render() , (error) => error ? console.log(error) : console.log("Success"));
  });

