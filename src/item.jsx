var React = require('react');
var rootUrl= 'https://brilliant-inferno-4133.firebaseio.com/';
var Firebase = require ('firebase');



module.exports = React.createClass({

  getInitialState:function(){
    return {
      text:this.props.FBRef.text,
      dirtyItem:false,
      checked:false
    }
  },
  componentWillMount: function(){
    this.fb = new Firebase(rootUrl + 'items/' + this.props.FBRef.key)
  },
  onEdit:function(event){
  this.setState(
    {text: event.target.value,
    dirtyItem:true})

  },
  onDelete:function(){
    this.fb.remove();
  },
  onSave:function(){
    this.fb.update({
      text: this.state.text,
      });
    this.setState({dirtyItem:false});
  },
  onUndo:function(){
    this.setState({
      text:this.props.FBRef.text,
      dirtyItem:false});
  },

  onChecked:function(event){
    var checkStatus = event.target.checked;
    this.setState({
      checked:checkStatus,
    });
    this.fb.update({
      checked: checkStatus
    });
  },

  render:function(){

    return <div className="input-group">
      <span className="input-group-addon">
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.onChecked} />
      </span>
        <input
          disabled={this.state.checked}
          type="text"
          className="form-control"
          value={this.state.text}
          onChange={this.onEdit}>
        </input>
      <span className="input-group-btn">
        <button
          type="button"
          className="btn btn-default"
          onClick={this.onDelete}>
          Delete
        </button>
      {this.onTextFieldChange()}
      </span>
    </div>
  },
  onTextFieldChange:function(){
    if (!this.state.dirtyItem){
      return
    }
    else
  {

     return  [<button
        type="button"
        className="btn btn-default"
        onClick={this.onSave}>
        Save
      </button>,
      <button
         type="button"
         className="btn btn-default"
         onClick={this.onUndo}>
         undo
       </button>
     ]
          }
  }



})
