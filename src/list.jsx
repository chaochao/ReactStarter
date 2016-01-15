var React = require('react');

module.exports = React.createClass({
  render: function(){
    console.log(this.props.items)
    return <ul>
    {this.renderList()}
    </ul>
  },
  renderList: function(){
    if(this.props.items && Object.keys(this.props.items).length === 0){
      return <h4>
        nothing here
      </h4>
    }else{
      var children=[];
      for(var key in this.props.items){
        var item=this.props.items[key]
        children.push(
          <li>
            {item.text}
          </li>
          );
      }
      return children;
    }
  }

});