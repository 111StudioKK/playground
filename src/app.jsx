var React = require('react');
var Dropdown = require('./dropdown');
var ReactDOM = require('react-dom');
var React = require('react');
var Header = require('./header')
var Dropdown = require ('./dropdown');
var Firebase = require ('firebase');
var ReactFire = require('reactfire');
var rootUrl= 'https://brilliant-inferno-4133.firebaseio.com/';
var ListEdit = require('./listedit');

var app = React.createClass({
  mixins: [ ReactFire],
  componentWillMount: function(){
    this.FBase = new Firebase(rootUrl + 'items/')
    this.bindAsObject(this.FBase, 'items');
    this.FBase.on("value",this.DataLoaded)
  },
  DataLoaded:function(){
    this.setState({DataReady:true})
  },
  getInitialState:function(){
    return {
      items: {},
      DataReady:false
    };
  },
  render:function(){
    return <div className="row panel panel-default">
      <div className="col-md-8 cold-md-offset-2">
        <h2 className="text-center">
          Dropdown editor powered by Firebase and React
        </h2>
        <Header base={this.firebaseRefs.items}/>
        <hr />
        <div className={"content " + (this.state.DataReady? 'loaded':'')} >
          <ListEdit items={this.state.items} />
          {this.displayDeleteButton()}
        </div>
        <hr />
        Test the dropdown:<Dropdown items={this.FireBaseToItemsArray()} />
      </div>
    </div>
  },
  displayDeleteButton:function(){
    if (this.DataReady === false)
    {
      return;
    }
    else {

      return <div className="text-center clear-complete">
        <hr />
        <button
          type="button"
          onClick={this.onDeleteItems}
          className="btn btn-default">
          Delete selected
        </button>
      </div>
    }
  },
  onDeleteItems:function(){
    for (var key in this.state.items){
      if (this.state.items[key].checked === true){
        this.FBase.child(key).remove();
      }
    }
  },
  FireBaseToItemsArray:function(){
    if (this.state.items && Object.keys(this.state.items).lenght ===0){
      return "";
    }
    else {
      var items = [];
      for (var key in this.state.items){
        items.push(
          this.state.items[key].text
        );
      }
      return items;
    }
  }
});

var element = React.createElement(app,"");

ReactDOM.render(element, document.querySelector('.container'));
