React = require('react');
module.exports = React.createClass({
  render:function(){
    return <button> {this.props.title}</button>
  }
});
