var React = require('react');

import Header from './Header';
import Keyboard from './Keyboard';

var App = React.createClass({
  render : function() {
    return (
      <div>
        <Header />
        <Keyboard />
      </div>
    );
  }
});

export default App;
