var React = require('react');

module.exports = React.createClass({
  getInitialState(){
    return {
      text:""
    }
  },
  render:function(){
    return <div className="input-group">
      <input
        value={this.state.text}
        onChange={this.inputChange}
        type="text"
        className="form-control"/>
        <span className="input-group-btn">
          <button onClick={this.add} className="btn btn-default" type="button">
            add
          </button>
        </span>
    </div>
  },
  add:function(){
    this.props.base.push({
    checked: false,
    text: this.state.text
  });
  this.setState({
    text:""
  });
  },
  inputChange:function(event){
  this.setState({
    text:  event.target.value});
  }

}) ;
