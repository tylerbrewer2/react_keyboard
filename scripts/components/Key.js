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
    var letter = this.props.letter;
    return (
      <div className='key' id={this.setId(letter)} onClick={this.props.updateState.bind(null, letter)}>
        <p>{letter}</p>
      </div>
    );
  }
});

export default Key;
