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
    this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');
  },
  getInitialState:function(){
    return {
      items: {}
    };
  },
  render:function(){
    return <div className="row panel panel-default">
      <div className="col-md-8 cold-md-offset-2">
        <h2 className="text-center">
          Dropbox powered by Firebase and React
        </h2>
        <Header base={this.firebaseRefs.items}/>
        <ListEdit items={this.state.items} />
      </div>
    </div>
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
