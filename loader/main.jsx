const React = require('react');
const ReactDOM = require('react-dom');
// 
require('./assets/style/app.css');
// 
// import smallPng from "./small.png";
// var img1 = document.createElement("img");
// img1.src = smallPng;
// document.body.appendChild(img1);

var longVariableName = 'Hello';
longVariableName += ' Node';
document.write("<h1 class='h3'>" + longVariableName + '</h1>');


var img2 = document.createElement("img");
img2.src = require("./assets/imgs/big.png");
document.body.appendChild(img2);

ReactDOM.render(
  <div>
    <h1 class='h1'>Hello World</h1>
    <h2 className="h2">Hello Webpack</h2>
  </div>,
  document.querySelector('#wrapper')
);


