const { Circle, Triangle, Square } = require("../lib/shape");

//test circle
describe("Circle", () => {
    it("should render svg for a green circle elementt",()=>{
        const shape = new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual(
            '<circle cx="150" cy="100" r="80" fill="green" />'
        );
    })});

// test triangle
describe("Triangle", () => {
    it("should render svg for a purple polygon element",()=>{
        const shape = new Triangle();
        shape.setColor("purple");
        expect(shape.render()).toEqual(
          '<polygon points="150, 18 244, 182 56, 182" fill="purple" />'
        );
    })});
  
// test square
describe("Square", () => {
    it("should render svg for a red square/rectangle element",()=>{
        const shape = new Square();
        shape.setColor("red");
        expect(shape.render()).toEqual(
            '<rect x="90" y="40" width="120" height="120" fill="red" />'
        );
    })});