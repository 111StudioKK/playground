var React = require('react');
var Item = require ('./item');

module.exports = React.createClass({
  render:function(){
      return <div>{this.dataDisplay()}</div>
  },

  dataDisplay:function(){
    if (!this.props.items||Object.keys(this.props.items).lenght ===0){
      return <h1>nothing to display</h1>
      }
      else {
        var children = [];
        for (var key in this.props.items){
          var item = this.props.items[key];
          item.key=key;
          children.push(
            <Item
              FBRef={item}
              key = {key}
              >
            </Item>
          );
        }
        return children;
      }
    }
  });
