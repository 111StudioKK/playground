var React = require('react');
var Button = require('./button');
var ListItems = require('./listItems.jsx');

module.exports = React.createClass({
  getInitialState:function(){
    return {open:false};
  },
  buttonClicked:function(){
    this.setState({open: !this.state.open});
  },
  itemClicked:function(SelectedItemName){
    console.log(SelectedItemName);
    this.setState({
      open: !this.state.open,
      SelectedItem: SelectedItemName});

  },
  render:function(){
    var list = this.props.items.map(function(item){
      return <ListItems
        itemName={item}
        itemClicked={this.itemClicked}
        isActive={ this.state.SelectedItem  === item ?"active":""}/>
    }.bind(this));

    return <div className="dropdown">
    <Button
      buttonClicked = {this.buttonClicked}
      classButtonFormat="btn btn-default"
      SpanClassButton="caret"
      dataToggle="dropdown"
      ariaHaspopup="true"
      ariaExpanded="true"
      label={(this.state.SelectedItem||this.props.title)} />

      <ul className={"dropdown-menu " + (this.state.open?"show":"")} >
      {list}
    </ul>
    </div>
  }});
