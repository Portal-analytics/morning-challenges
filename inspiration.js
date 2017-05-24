var React = require('react');
var ReactDOM = require('react-dom');

var inspiration = React.createClass({

  toggleQuote: function(){
    if(this.props.toggle == true){
      setState({
        quote: "Just fucking close deals, you bitch";
      })
      this.props.toggle = false;
    } else {
      setState({
        quote: "You are a beautiful and unique snowflake. "
      })
      this.props.toggle = true;
    }
  }

  render: function() {
    return (
      <div>
      <button onClick = toggleQuote()> Inspire Me </button>
      <body> this.props.quote </body>
      </div>
    );
  }

});

ReactDOM.render(
  <inspiration toggle= true quote = ""/>,
  document.getElementById('inspire')
);
