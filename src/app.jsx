var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var Header = require('./header');
var List = require('./list');
var rootUrl ='https://sizzling-inferno-5872.firebaseio.com/';

var App = React.createClass({
  mixins:[ ReactFire ],
  getInitialState: function(){
    return {
      items: {},
      loaded: false
    }
  },
	componentWillMount: function(){
    //you can do this this.firebase = new Firebase(rootUrl + 'items/')
    // and refer in the bind and later in itemsStore as this.firebase
    // this will render the element again
    fb = new Firebase(rootUrl + 'items/');
    this.bindAsObject(fb, 'items'); //bindAsObject is from reactFire
    fb.on('value', this.handleDataLoaded)
    // this.state.items = {}
  },
  render: function() {
    return <div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          TO-DO List
        </h2>
        <Header itemsStore={this.firebaseRefs.items} />
        <div className={"content " + (this.state.loaded ? 'loaded' : '')}>
          <List items={this.state.items}/>
        </div>
      </div>
    </div>
  },
  handleDataLoaded: function(){
    this.setState({loaded: true});
  }
});
var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
