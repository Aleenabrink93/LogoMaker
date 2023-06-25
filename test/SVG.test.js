const Svg = require("../lib/svg");
const{Square} = require("../lib/shape");


test("should render a 300x200 svg", ()=>{
    const testSVG = new Svg()
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`
    expect(testSVG.render()).toEqual(expectedSVG)
})

test("should append text element", ()=>{
    const testSVG = new Svg();
    testSVG.setText("A","white");
    const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">A</text></svg>';
})

test("should append the shape",()=>{
    const testSVG = new Svg();
    const testShape = new Square;
    testShape.setColor("dodgerblue")
    testSVG.setShape(testShape)
    const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="dodgerblue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>'
})