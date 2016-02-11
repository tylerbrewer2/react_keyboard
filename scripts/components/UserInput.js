var React = require('react');

var UserInput = React.createClass({

  render : function() {
    return (
      <input type="text" placeholder='Please start typing' value={this.props.data} />
    );
  }
});


export default UserInput;
