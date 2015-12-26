var React = require('react');
var Button = require('./button');

module.exports = React.createClass({
  render:function(){
    return <div className="dropdown">
    <Button
      classButtonFormat="btn btn-default dropdown-toggle"
      SpanClassButton="caret"
      dataToggle="dropdown"
      ariaHaspopup="true"
      ariaExpanded="true"
      label={this.props.title} />
    </div>
  }});
