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
    this.state.inputValue = this.state.inputValue + letter;
    this.setState({ inputValue : this.state.inputValue });
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
