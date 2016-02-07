var React = require('react');

var Header = React.createClass({
  render : function() {
    return (
      <div className='header'>
        <h1>React.js Keyboard</h1>
        <input type="text" placeholder='start typing!' />
      </div>
    );
  }
});

export default Header;
