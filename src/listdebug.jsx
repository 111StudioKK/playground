var React = require('react');

module.exports = React.createClass({
  render:function(){
    return <ul>{this.datadisplay()}</ul>
  },
  datadisplay:function(){
    if (this.props.base && Object.keys(this.props.base).lenght ===0){
      console.log("nothing");

      return <h1>nothing to display</h1>
      }
      else {
        var children = [];
        for (var key in this.props.base){
        //  console.log(this.props.base[key].text);
          children.push(
            <li>
              {this.props.base[key].text}
            </li>
          );
        }
        return children;
      }
    }
  });
