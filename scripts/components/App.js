var React = require('react');

import UserInput from './UserInput';
import Keyboard from './Keyboard';

var App = React.createClass({
  getInitialState : function() {
    return({
      inputValue: ''
    });
  },

  updateState: function(letter) {
    var inputVal = this.state.inputValue;
    switch(letter.toLowerCase()) {
      case 'delete':
        inputVal = inputVal.slice(0, -1);
        break;
      case 'clear':
        inputVal = '';
        break;
      default:
        inputVal = inputVal + letter;
    }
    this.setState({ inputValue : inputVal });
  },

  render : function() {
    return (
      <div>
        <div className='header'>
          <h1>React.js Keyboard</h1>
          <UserInput data = {this.state.inputValue} />
        </div>
        <Keyboard updateState={this.updateState}/>
      </div>
    );
  }
});

export default App;
