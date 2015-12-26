var React = require('react');

module.exports = React.createClass({
  render:function(){
    return <button
      className={this.props.classFormat}
      data-toggle={this.props.dataToggle} 
      aria-haspopup={this.props.ariaHaspopup}
      aria-expanded={this.props.ariaExpanded}
      type="button"> {this.props.label}
        <span className={this.props.SpanClassButton}></span>
      </button>
  }
});
