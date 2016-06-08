var React = require('react');
var ReactDOM = require('React-DOM');

var Message = React.createClass({

  var switchButton = true;

  function onToggle(e) {
  	if(switchButton === true) {
    	setState({
      	message: "You're the best!"
      });
      switchButton = false;
    } else {
    	setState({
      	message: "You can do it all night long!"
      });
      switchButton = true;
    }
  },

  render: function() {
    return <div>{this.props.message}</div>;
  }
});

ReactDOM.render(<Message/>, document.getElementById('message'));
ReactDOM.render(
  <button>Inspirational Quote</button>,
  document.getElementById('container')
);
