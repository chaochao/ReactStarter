var React = require('react');
var Firebase = require('firebase');
var rootUrl ='https://sizzling-inferno-5872.firebaseio.com/';
module.exports = React.createClass({
  getInitialState: function(){
    var checked = this.props.item.done ? "checked" : ""
    return {
      text: this.props.item.text,
      checked: checked
    }
  },
  componemtnWillmount: function(){
    this.fb = new Firebase(rootUrl + 'items/'+ this.props.item.key);
  },
  render: function(){
    return <div className="input-group">
      <span className="input-group-addon">
        <input
        type="checkbox"
        checked={this.state.checked}
        onChange={this.handleDoneChange}
        />
      </span>
      <input type="text"
        className="form-control"
        value={this.state.text} />
      <span className="input-group-btn">
        <button className="btn btn-default">
          Delete
        </button>
      </span>
    </div>
  },
  handleDoneChange: function(event){
    console.log("this is handleDoneChange");
    
    this.setState({checked: ""})
    // this.fb.update({done: false})
  }

})

// var React = require('react');
// var Firebase = require('firebase');
// var rootUrl = 'https://blistering-torch-4253.firebaseio.com/';

// module.exports = React.createClass({
//   getInitialState: function() {
//     return {
//       text: this.props.item.text,
//       done: this.props.item.done
//     }
//   },
//   componentWillMount: function() {
//     this.fb = new Firebase(rootUrl + 'items/' + this.props.item.key);
//   },
//   render: function() {
//     return <div className="input-group">
//       <span className="input-group-addon">
//         <input
//           type="checkbox"
//           onChange={this.handleDoneChange}
//           checked= ""//{this.props.item.done? "checked" : ""}
//           />
//       </span>
//       <input type="text"
//         className="form-control"
//         value={this.state.text}
//         />
//       <span className="input-group-btn">
//         <button className="btn btn-default">
//           Delete
//         </button>
//       </span>
//     </div>
//   },
//   handleDoneChange: function(event) {
//     console.log("onChange");
//     var update = {done: true}
//     this.setState(update);
//     this.fb.update(update);
//   }
// });