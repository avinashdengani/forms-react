import React from "react";

class App extends React.Component {

  state = {
      names: [],
      name: '' 
  }; //Initial State

  onFormSubmit = (evt) => {
    evt.preventDefault();
    const names = [...this.state.names, this.state.name];
    
    // this.setState({names : names}); //If key and value are same  then we can use following syntax
    
    this.setState({names, name:''});
  }

  onNameChange = (evt) => {
      this.setState( {name: evt.target.value});
  }

  render() {
    return (
      <div>
        <h2>Sign Up Sheet</h2>
        <form onSubmit={this.onFormSubmit} >
            <input 
                type="text"
                placeholder="Enter name"
                onChange={this.onNameChange}
                value={this.state.name}
            />
            <input type="Submit" />
        </form> 
        <div>
          <h3>Registered Users</h3>
          <ul>
            { this.state.names.map((name, i) => <li key={i}>{name}</li>) }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
