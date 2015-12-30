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
    var FBase = new Firebase(rootUrl + 'items/')
    this.bindAsObject(FBase, 'items');
    FBase.on("value",this.DataLoaded)
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
    console.log(this.state.DataReady);
    return <div className="row panel panel-default">
      <div className="col-md-8 cold-md-offset-2">
        <h2 className="text-center">
          Dropbox editor powered by Firebase and React
        </h2>
        <Header base={this.firebaseRefs.items}/>
        <hr />
          <div className={"content " + (this.state.DataReady? 'loaded':'')} >
            <ListEdit items={this.state.items} />
          </div>
          <hr />
            <Dropdown items={this.FireBaseToItemsArray()} />
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
