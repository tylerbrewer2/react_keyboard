var React = require('react');
var h = require('../helpers/key_helper');
import Key from './key';

var Keyboard = React.createClass({

  render : function() {
    var counter = 0;
    var keyboard = this;
    return (
      <div className='keys' key='keyboard'>
        {h.getAllCharacters().map(function(letter) {
          return <Key letter={letter} key={counter += 1} updateState={keyboard.props.updateState}/>;
        })}
      </div>
    );
  }
});

export default Keyboard;
