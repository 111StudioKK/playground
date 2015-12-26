var React = require('react');
var Dropdown = require('./dropdown');
var ReactDOM = require('react-dom');

var options = {
  title:"What do you want?",
  items:[
    "option 1",
    "option 2",
    "option 3"
  ]
};

var element = React.createElement(Dropdown, options);
ReactDOM.render(element, document.querySelector('.container'));
