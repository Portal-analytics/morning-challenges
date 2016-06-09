var React = require('react');
var ReactDOM = require('react-dom');

var listOfContracts = ['Bitches'];

var ContactTracker = React.createClass({

  addContract: function(contract, description, price) {
    return (
        <ul class="list-group">
          <li class="list-group-item"> contract </li>
          <li class="list-group-item"> description </li>
          <li class="list-group-item"> price </li>
        </ul>
    )
  },

  render: function() {
    return (
      <div>
      <h1>Just Fucking Close Deals, You Bitch!</h1>
      <div className="form-group">
            <input topMargin
              className='form-control'
              placeholder='Contract Name'
              type='text'
              value={props.contractName}
            />
            <input
              className='form-control'
              placeholder='Description'
              type='text'
              value={this.description}
            />
            <input
              className='form-control'
              placeholder='Price'
              type='text'
              value={this.price}
            />

      </div>
      <button type='button' className='btn btn-lg btn-primary'> Add New contact </button>
      <ol class="list-group">
        {addContract({this.props.contractName}, {this.props.description}, {this.props.price})}
      </ol>

      </div>
    )
  }
});

ReactDOM.render(
  <ContactTracker />,
  document.getElementById('main')
);
