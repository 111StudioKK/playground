var React = require('react');

module.exports = React.createClass({
  onClickHandler:function(){
    this.props.itemClicked(this.props.itemName);
  },
  render:function(){
    return <li className={this.props.isActive}><a onClick={this.onClickHandler}>{this.props.itemName}</a></li>
  }
});
