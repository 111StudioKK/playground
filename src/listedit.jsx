var React = require('react');

module.exports = React.createClass({
  render:function(){

    return <ul>{this.datadisplay()}</ul>
  },
  datadisplay:function(){
    if (!this.props.items||Object.keys(this.props.items).lenght ===0){
      console.log("test");
      return <h1>nothing to display</h1>
      }
      else {
        var children = [];
        for (var key in this.props.items){
          children.push(
            <li>
              {this.props.items[key].text}
            </li>
          );
        }
        return children;
      }
    }
  });
