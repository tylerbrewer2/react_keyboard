var React = require('react');
var h = require('../helpers/key_helper');
import Key from './key';

var Keyboard = React.createClass({
  render : function() {

    var counter = 0;
    return (
      <div className='keys' key='keyboard'>
        {h.getAllCharacters().map(function(letter) {
          return <Key letter={letter} key={counter += 1}/>;
        })}
      </div>
    );
  }
});

export default Keyboard;
