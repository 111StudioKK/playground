var React = require('react');

module.exports = React.createClass({
  getInitialState:function(){
    return {
      text:this.props.text
    }
  },

  render:function(){
    return <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={this.state.text}>
        </input>
      <span className="input-group-btn">
        <button
          type="button"
          className="btn btn-default">
          Save
        </button>
        <button
          type="button"
          className="btn btn-default">
          Delete
        </button>
      </span>
    </div>

  }
})
