var React = require('react');
var Item = require ('./item');

module.exports = React.createClass({
  render:function(){
      return <div>{this.datadisplay()}</div>
  },
  datadisplay:function(){
    if (!this.props.items||Object.keys(this.props.items).lenght ===0){
      return <h1>nothing to display</h1>
      }
      else {
        var children = [];
        for (var key in this.props.items){
          children.push(
            <Item
              text={this.props.items[key].text}
              key = {key}>
            </Item>
          );
        }
        return children;
      }
    }
  });
