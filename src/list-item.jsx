var React = require('react');
var Firebase = require('firebase');
var rootUrl ='https://sizzling-inferno-5872.firebaseio.com/';
module.exports = React.createClass({
  getInitialState: function(){
    return {
      text: this.props.item.text,
      done: this.props.item.done,
      textChanged:false
    }
  },
  componentWillMount: function(){
    this.fb = new Firebase(rootUrl + 'items/' + this.props.item.key);
  },
  render: function(){
    return <div className="input-group">
      <span className="input-group-addon">
        <input
        type="checkbox"
        checked={this.props.item.done}
        onChange={this.handleDoneChange}/>
      </span>
      <input type="text"
        disabled={this.state.done}
        className="form-control"
        value={this.state.text}
        onChange={this.handleTextChange} />
      <span className="input-group-btn">
        {this.changesButtons()}
        <button className="btn btn-default"
          onClick={this.handleDeleteClick}
        >
          Delete
        </button>
      </span>
    </div>
  },
  handleDoneChange: function(event) {
    var update = {done: event.target.checked}
    this.setState(update);
    this.fb.update(update);
  },
  handleDeleteClick: function(){
    this.fb.remove();
  },
  changesButtons: function(){
    if(!this.state.textChanged){
      return null
    }else{
      return <span>
        <button 
        className="btn btn-default"
        onClick={this.handleSaveClick}
        >Save</button>
        <button 
        className="btn btn-default"
        onClick={this.handleUndoClick}
        >Undo</button>
      </span>
    }      
  },
  handleTextChange: function(event){
    this.setState({
      textChanged: true,
      text: event.target.value
    });
  },
  handleUndoClick: function(){
    this.setState({
      text: this.props.item.text,
      textChanged: false
    })
  },
  handleSaveClick: function(){
    this.fb.update({
      text: this.state.text,
    })
    this.setState({
      textChanged: false
    });
  }
});