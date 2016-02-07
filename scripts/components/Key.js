var React = require('react');

var Key = React.createClass({

  setId : function(key) {
    if (key === 'DELETE') {
      return 'delete';
    } else if (key === 'CLEAR') {
      return 'clear';
    }
  },

  render : function() {
    return (
      <div className='key' id={this.setId(this.props.letter)}>
        <p>{this.props.letter}</p>
      </div>
    );
  }
});

export default Key;
