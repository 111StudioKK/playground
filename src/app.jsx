var React = require('react');
var Button = require('./button');
var ReactDOM = require('react-dom');

var options = {
  title:"Choose an option",
  items:[
    "option 1",
    "option 2",
    "option 3"
  ]
};

var element = React.createElement(Button, options);
ReactDOM.render(element, document.querySelector('.container'));
