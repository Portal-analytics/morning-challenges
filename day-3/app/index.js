var React = require('react');
var ReactDOM = require('React-DOM');

var Message = React.createClass({

  getInitialState: function() {
    // naming it initialX clearly indicates that the only purpose
    // of the passed down prop is to initialize something internally
    return {
      messageIndex: 0,
      message: "",
      inspirationalMessages: [
        "You are AWESOME!",
        "Kick some ass!",
        "You look great today!",
        "Be the change you want to see in the world!"
      ]

    };
  },

  incIndex: function() {
    if(this.state.messageIndex === 4) {
      this.setState({message : this.state.inspirationalMessages[0]});
      this.setState({messageIndex: 1});
      console.log(message);
    } else {
      this.setState({message : this.state.inspirationalMessages[this.state.messageIndex]});
      this.setState({messageIndex: this.state.messageIndex+1});
      console.log(this.state.messageIndex);
    }

  },

  render: function() {

    return (
      <div>
        <h1> {this.state.message} </h1>
        <button onClick={this.incIndex}> Inspire Me </button>

      </div>
    )

  }
});

ReactDOM.render(<Message/>, document.getElementById('message'));
